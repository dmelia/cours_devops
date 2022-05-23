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
  constructor(private todosServices: TodoService) { }

  // mounted hooks
  ngOnInit(): void {
    this.todos = this.todosServices.getAll();
  }

  // method for create new todo
  newTodo(item: Todo): void {
    let result: any;
    this.todosServices.create(item).pipe(
      take(1),
      tap((res) => {
        this.todos = this.todosServices.getAll();
        result = res;
      }),
      catchError(e => e)
    ).subscribe();
    return result;
  }

  // method for mark todo as completed
  markTodo(todo: Todo): void {
    // TBD
    console.warn('mark todo ', todo);
  }

  // method for remove todo from list
  deleteTodo(id: number): void {
    this.todosServices.delete(id).pipe(
      take(1),
      tap(() => this.todos = this.todosServices.getAll()),
      catchError(e => e)
    ).subscribe();
  }

  // method for create new todo
  editTodo(item: Todo): void {
    this.todosServices.update(item.id, item).pipe(
      take(1),
      tap(() => this.todos = this.todosServices.getAll()),
      catchError(e => e)
    ).subscribe();
  }

}
