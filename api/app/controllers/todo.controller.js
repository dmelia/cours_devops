const Todo = require("../models/todo.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const todo = new Todo({
    nom: req.body.nom,
    description: req.body.description,
    etat: req.body.etat || 0
  });

  // Save Tutorial in the database
  Todo.create(todo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the todo."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Todo.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving todo."
      });
    else res.send(data);
  });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  Todo.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Todo with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Todo with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  Todo.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving todo."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Todo.updateById(
    req.params.id,
    new Todo(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Todo with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Todo with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Todo.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Todo with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Todo with id " + req.params.id
        });
      }
    } else res.send({ message: `Todo was deleted successfully!` });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Todo.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all todo."
      });
    else res.send({ message: `All Todo were deleted successfully!` });
  });
};
