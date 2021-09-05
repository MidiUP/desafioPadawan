import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Album } from 'src/app/models/album.model';
import { Todos } from 'src/app/models/todos.model';
import { Service } from 'src/app/services/service';
import { TableAlbunsDataSource } from '../table-albuns/table-albuns-datasource';
import { TableTodosDataSource } from './table-todos-datasource';

@Component({
  selector: 'app-table-todos',
  templateUrl: './table-todos.component.html',
  styleUrls: ['./table-todos.component.css']
})
export class TableTodosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Todos>;

  dataSource: TableTodosDataSource;
  id: number = 0;
  displayedColumns = ['id', 'userId', 'title', 'completed' ];
  @Input() todos: Todos[] = [];
  

  constructor(private service: Service, private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void{
    this.dataSource = new TableTodosDataSource(this.todos);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  


  
}
