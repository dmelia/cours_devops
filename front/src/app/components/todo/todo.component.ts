import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

// interface
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todos: Observable<Todo[]> = of([]); // interface

  // depandancy injection
  constructor(private _todosServices: TodoService) { }

  // mounted hooks
  ngOnInit(): void {
    this.todos = this._todosServices.getAll();
  }

  // method for create new todo
  newTodo(item: Todo): void {
    this._todosServices.create(item).pipe(
      take(1),
      tap(() => this.todos = this._todosServices.getAll()),
      catchError(e => e)
    ).subscribe();
  }

  // method for mark todo as completed
  markTodo(todo: Todo): void {
    // TBD
    console.warn('mark todo ', todo);
  }

  // method for remove todo from list
  deleteTodo(id: number): void {
    this._todosServices.delete(id).pipe(
      take(1),
      tap(() => this.todos = this._todosServices.getAll()),
      catchError(e => e)
    ).subscribe();
  }

  // method for create new todo
  editTodo(item: Todo): void {
    this._todosServices.update(item.id, item).pipe(
      take(1),
      tap(() => this.todos = this._todosServices.getAll()),
      catchError(e => e)
    ).subscribe();
  }

}
