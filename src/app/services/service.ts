import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { Album } from "../models/album.model";
import { Todos } from "../models/todos.model";

@Injectable()
export class Service{

    
    private readonly url = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient){}

    getPosts (): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.url}/posts`);
    }

    getPostsById (id: number): Observable<Post> {
        return this.http.get<Post>(`${this.url}/posts/${id}`);
    }

    getAlbuns(): Observable<Album[]>{
        return this.http.get<Album[]>(`${this.url}/albums`);
    }

    getAlbumsById (id: number): Observable<Album> {
        return this.http.get<Album>(`${this.url}/albums/${id}`);
    }

    getTodos(): Observable<Todos[]>{
        return this.http.get<Todos[]>(`${this.url}/todos`);
    }

    getTodosById (id: number): Observable<Todos> {
        return this.http.get<Todos>(`${this.url}/todos/${id}`);
    }

   












}