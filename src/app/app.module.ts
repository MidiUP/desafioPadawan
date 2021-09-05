import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { PostagensComponent } from './postagens/postagens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Service } from './services/service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { TablePostsComponent } from './tables/table-posts/table-posts.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AlbunsComponent } from './albuns/albuns.component';
import { TableAlbunsComponent } from './tables/table-albuns/table-albuns.component';
import { TodosComponent } from './todos/todos.component';
import { TableTodosComponent } from './tables/table-todos/table-todos.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SuccessComponent } from './snack-bars/success/success.component';
import { ErrComponent } from './snack-bars/err/err.component';
import {MatSelectModule} from '@angular/material/select';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    PostagensComponent,
    TablePostsComponent,
    AlbunsComponent,
    TableAlbunsComponent,
    TodosComponent,
    TableTodosComponent,
    SuccessComponent,
    ErrComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule

  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
