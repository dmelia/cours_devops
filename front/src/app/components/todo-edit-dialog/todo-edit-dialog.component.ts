import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-edit-dialog',
  templateUrl: './todo-edit-dialog.component.html',
  styleUrls: ['./todo-edit-dialog.component.css']
})
export class TodoEditDialogComponent implements OnInit{

  etat: number;

  constructor(
    public dialogRef: MatDialogRef<TodoEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
  ) {}

  ngOnInit(): void {
    this.etat = this.data.etat;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
