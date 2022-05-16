import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  // local state for the component
  todoNom = '';
  todoDescription = '';


  // create event for emit from child and listen at parent
  @Output() addTodo = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  // local method of component to emit data to parent
  newTodo(): void {
    console.warn('new todo dans form');
    const todo: Todo = {
      nom: this.todoNom,
      description: this.todoDescription
    };
    this.addTodo.emit(todo);
    this.todoNom = '';
    this.todoDescription = '';

  }
}
