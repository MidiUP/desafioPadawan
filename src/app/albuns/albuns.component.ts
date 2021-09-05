import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Album } from '../models/album.model';
import { Service } from '../services/service';
import { ErrComponent } from '../snack-bars/err/err.component';
import { SuccessComponent } from '../snack-bars/success/success.component';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  @Output() albuns: Album[] = [];
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  id: number;
  userId: number;
  noAlbuns: boolean = false;

  buscaIdForm: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]]
  });

  buscaUserIdForm: FormGroup = this.formBuilder.group({
    'userId': ['', [Validators.required]]
  });

  constructor(private service: Service, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAlbuns();
  }


  buscaAlbumById(){
    this.albuns = [];
    this.service.getAlbumsById(this.id)
      .subscribe(
        (res => {
          this.noAlbuns = false;
          let albuns: Album [] = [];
          albuns.push(res);
          this.albuns = albuns;
          this.openSnackBarSuccess();
        }),
        (err => {
          this.noAlbuns = true;
          this.openSnackBarErr();
        })
      )
  }

  buscaAlbumsByUserId(){
    this.albuns = [];
    let albums: Album[] = [];
    this.service.getAlbuns()
      .subscribe(data => {
        data.forEach(item => {
          if(item.userId == this.userId){
            albums.push(item);
          }
        });
        if(albums.length > 0){
        this.albuns = albums;
        this.noAlbuns = false;
        this.openSnackBarSuccess();
        }else {
          this.noAlbuns = true;
          this.openSnackBarErr();
        }
      })
  }

  getAlbuns(){
    this.albuns = [];
    this.service.getAlbuns()
      .subscribe(
        (res => {
          this.albuns = res;
          this.noAlbuns = false;
          this.openSnackBarSuccess();
        }),
        (err => {
          this.noAlbuns = true;
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