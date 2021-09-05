import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../services/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  endereco: string;

  constructor(private router: Router,
              private service: Service) { }

  ngOnInit(): void {
    this.getEndereco();
  }


  getEndereco(){
    if(this.router.url === "/"){
      this.endereco = "Home";
    }else if(this.router.url === "/postagens"){
      this.endereco = "Postagens";
    }else if(this.router.url === "/albuns"){
      this.endereco = "Albuns"
    }else if(this.router.url === "/todos"){
      this.endereco = "Todos"
    }
  }


}
