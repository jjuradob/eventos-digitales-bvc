import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

import { EventoI } from '../../modelos/evento.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  constructor(private api:ApiService, private router:Router) { }
  
  eventos:EventoI[] = [];
  
  form: any = {
    idPlataforma: null
  };

  plataformas = [
    { codigo: "PACTO", nombre:"PACTO"},
    { codigo: "DEPO", nombre:"DEPO"},
    { codigo: "BAKO", nombre:"BAKO"},
    { codigo: "PLATGI", nombre:"PLATGI"}
  ];

  ngOnInit(): void {
  	this.api.getEventsByPlataform("").subscribe( data => {
  		this.eventos = data;
  		console.log(data);
  	})
  }

  getEventsByPlataform(){
    
  	this.api.getEventsByPlataform(this.form.idPlataforma).subscribe( data => {
  		this.eventos = data;
  		console.log(data);
  	})
  }

}
