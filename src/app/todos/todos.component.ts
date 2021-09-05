import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Album } from '../models/album.model';
import { Todos } from '../models/todos.model';
import { Service } from '../services/service';
import { ErrComponent } from '../snack-bars/err/err.component';
import { SuccessComponent } from '../snack-bars/success/success.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Output() todos: Todos[] = [];
  id: number;
  userId: number;
  completed: boolean;
  noTodos: boolean = false;

  buscaIdForm: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]]
  });

  buscaUserIdForm: FormGroup = this.formBuilder.group({
    'userId': ['', [Validators.required]]
  });

  buscaCompletedForm: FormGroup = this.formBuilder.group({
    'completed': ['', [Validators.required]]
  });

  constructor(private service: Service, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTodos();
  }


  buscaTodosById(){
    this.todos = [];
    this.service.getTodosById(this.id)
      .subscribe(
        (res => {
          this.noTodos = false;
          let todos: Todos [] = [];
          todos.push(res);
          this.todos = todos;
          this.openSnackBarSuccess();
        }),
        (err => {
          this.noTodos = true;
          this.openSnackBarErr();
        })
      )
  }

  buscaTodosByUserId(){
    this.todos = [];
    let todos: Todos[] = [];
    this.service.getTodos()
      .subscribe(data => {
        data.forEach(item => {
          if(item.userId == this.userId){
            todos.push(item);
          }
        });
        if(todos.length > 0){
        this.todos = todos;
        this.noTodos = false;
        this.openSnackBarSuccess();
        }else {
          this.noTodos = true;
          this.openSnackBarErr();
        }
      })
  }

  buscaTodosByCompleted(){
    this.todos = [];
    let todos: Todos[] = [];
    this.service.getTodos()
      .subscribe(data => {
        data.forEach(item => {
          if(item.completed == this.completed){
            todos.push(item);
          }
        });
        if(todos.length > 0){
        this.todos = todos;
        this.noTodos = false;
        this.openSnackBarSuccess();
        }else {
          this.noTodos = true;
          this.openSnackBarErr();
        }
      })
  }

  getTodos(){
    this.todos = [];
    this.service.getTodos()
      .subscribe(
        (res => {
          this.todos = res;
          this.noTodos = false;
          this.openSnackBarSuccess();
        }),
        (err => {
          this.noTodos = true;
          this.openSnackBarErr();
        })
      )
  }

  openSnackBarSuccess() {
    this._snackBar.openFromComponent(SuccessComponent, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  openSnackBarErr() {
    this._snackBar.openFromComponent(ErrComponent, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }


}