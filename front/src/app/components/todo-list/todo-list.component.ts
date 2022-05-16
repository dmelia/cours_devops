import { Component, OnInit , Input ,Output,EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Etat, Todo} from '../../models/todo.model';
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

  constructor() { }

  ngOnInit(): void {

  }
  markTodo(todo:Todo):void {
  	this.markToDo.emit(todo);
  }

  deleteTodo(id: any):void {
    console.warn(' todo liste emit : ', id);
  	this.deleteToDo.emit(id);
  }

  getEtat(todo: Todo): Etat {
    switch(todo.etat) {
      case 0 :
        return Etat.AFAIRE;
      case 1 :
        return Etat.ENCOURS;
      case 2 :
        return Etat.FAIT;
      default: 
      return Etat.AFAIRE;
    }
  }

}
