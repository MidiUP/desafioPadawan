import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../models/post.model';
import { Service } from '../services/service';
import { ErrComponent } from '../snack-bars/err/err.component';
import { SuccessComponent } from '../snack-bars/success/success.component';




@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  @Output() posts: Post[] = [];
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  id: number;
  userId: number;
  noPosts: boolean = false;

  buscaIdForm: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]]
  });

  buscaUserIdForm: FormGroup = this.formBuilder.group({
    'userId': ['', [Validators.required]]
  });

  constructor(private service: Service, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getPosts();
  }


  buscaPostById(){
    this.posts = [];
    this.service.getPostsById(this.id)
      .subscribe(
        (res => {
          this.noPosts = false;
          let posts: Post [] = [];
          posts.push(res);
          this.posts = posts;
          this.openSnackBarSuccess();
        }),
        (err => {
          this.noPosts = true;
          this.openSnackBarErr();
        })
      )
  }

  buscaPostByUserId(){
    this.posts = [];
    let posts: Post[] = [];
    this.service.getPosts()
      .subscribe(data => {
        data.forEach(item => {
          if(item.userId == this.userId){
            posts.push(item);
          }
        });
        if(posts.length > 0){
        this.posts = posts;
        this.noPosts = false;
        this.openSnackBarSuccess();
        }else {
          this.noPosts = true;
          this.openSnackBarErr();
        }
      })
  }

  getPosts(){
    this.posts = [];
    this.service.getPosts()
      .subscribe(
        (res => {
          this.posts = res;
          this.noPosts = false;
          this.openSnackBarSuccess();
        }),
        (err => {
          this.noPosts = true;
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






