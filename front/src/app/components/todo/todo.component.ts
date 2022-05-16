import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError, map, mergeMap, take, tap} from 'rxjs/operators';

// interface
import {Todo} from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  todos: Observable<Todo[]> = of([]); // interface
 
  // depandancy injection
  constructor(private _todosServices:TodoService) { }

  // mounted hooks
  ngOnInit(): void {
  	this.todos = this._todosServices.getAll();
  }

  // method for create new todo
  newTodo(item: Todo): void {
	  console.warn('new todo : ', item);
	  this._todosServices.create(item).pipe(
      take(1),
      tap(() => this.todos = this._todosServices.getAll()),
      catchError(e => e)
    ).subscribe(); 
  }
/*  newTodo( item:string ):void {

  	if(item =='') return;

  	let max = this.todos.reduce((pre:Todo,cur:Todo) => {
  		return pre.id > cur.id ? pre : cur;
  	});

  	let newID = max.id+1;

  	this.todos.push({
  		id:newID,
  		title:item,
  		completed:false
  	});
  	
  }*/

 // method for mark todo as completed
  markTodo( todo:Todo ):void {
  /*	this.todos = this.todos.map(tdo=>{
  		if(todo.id == tdo.id) {
  			tdo.completed = !tdo.completed;
  		}
  		return tdo;
  	})*/
	  console.warn('mark todo ', todo);
  }

  // method for remove todo from list
  deleteTodo(id:number):void {
    //	this.todos = this.todos.filter(todo=> todo.id!==id);
    console.warn('remvoe todo');
    this._todosServices.delete(id).pipe(
      take(1),
      tap(() => this.todos = this._todosServices.getAll()),
      catchError(e => e)
    ).subscribe();  

  }
  
}
