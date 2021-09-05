import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbunsComponent } from './albuns/albuns.component';
import { IndexComponent } from './index/index.component';
import { PostagensComponent } from './postagens/postagens.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'postagens', component: PostagensComponent},
  {path: 'albuns', component: AlbunsComponent},
  {path: 'todos', component: TodosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
