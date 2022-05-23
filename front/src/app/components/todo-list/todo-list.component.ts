import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Etat, Todo } from '../../models/todo.model';
import { TodoEditDialogComponent } from '../todo-edit-dialog/todo-edit-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  etat = Etat;
  // accpet prop value
  @Input() todos: Observable<Todo[]> = of([]);

  // create event for emit from child to parent
  @Output() markToDo = new EventEmitter();
  @Output() deleteToDo = new EventEmitter<number>();
  @Output() editToDo = new EventEmitter<Todo>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  markTodo(todo: Todo): void {
    this.markToDo.emit(todo);
  }

  deleteTodo(id: any): void {
    this.deleteToDo.emit(id);
  }

  editTodo(todo: Todo): void {
    this.editToDo.emit(todo);
  }

  getEtat(todo: Todo): Etat {
    switch (todo.etat) {
      case 0:
        return Etat.AFAIRE;
      case 1:
        return Etat.ENCOURS;
      case 2:
        return Etat.FAIT;
      default:
        return Etat.AFAIRE;
    }
  }

  getEtatString(todo: Todo): string {
    switch (todo.etat) {
      case 0:
        return 'A faire';
      case 1:
        return 'En cours';
      case 2:
        return 'Fait';
      default:
        return 'A faire';
    }
  }

  openDialog(todo: Todo): void {
    const dialogRef = this.dialog.open(TodoEditDialogComponent, {
      width: '400px',
      data: { id: todo.id, nom: todo.nom, description: todo.description, etat: todo.etat },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.warn('result : ', result);
      if (result && result.id){
        this.editTodo(result);
      }
    });
  }
}
