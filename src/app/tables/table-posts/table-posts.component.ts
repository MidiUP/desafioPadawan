import { AfterViewInit, Component, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { Post } from '../../models/post.model';
import { Service } from '../../services/service';
import { TablePostsDataSource } from './table-posts-datasource';

@Component({
  selector: 'app-table-posts',
  templateUrl: './table-posts.component.html',
  styleUrls: ['./table-posts.component.css']
})
export class TablePostsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Post>;

  dataSource: TablePostsDataSource;
  id: number = 0;
  displayedColumns = ['id', 'userId', 'title', 'body' ];
  @Input() posts: Post[] = [];
  
  buscaIdForm: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
  });

  constructor(private service: Service, private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void{
    this.dataSource = new TablePostsDataSource(this.posts);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  


  
}
