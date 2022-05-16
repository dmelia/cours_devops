use test2; /* select of the schema */

CREATE TABLE todo (
  id int NOT NULL AUTO_INCREMENT,
  nom varchar(45) DEFAULT NULL,
  etat int DEFAULT NULL,
  description varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;