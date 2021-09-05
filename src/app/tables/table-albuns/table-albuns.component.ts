import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Album } from 'src/app/models/album.model';
import { Service } from 'src/app/services/service';
import { TableAlbunsDataSource } from './table-albuns-datasource';

@Component({
  selector: 'app-table-albuns',
  templateUrl: './table-albuns.component.html',
  styleUrls: ['./table-albuns.component.css']
})
export class TableAlbunsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Album>;

  dataSource: TableAlbunsDataSource;
  id: number = 0;
  displayedColumns = ['id', 'userId', 'title' ];
  @Input() albuns: Album[] = [];
  
  buscaIdForm: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
  });

  constructor(private service: Service, private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void{
    this.dataSource = new TableAlbunsDataSource(this.albuns);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  


  
}
