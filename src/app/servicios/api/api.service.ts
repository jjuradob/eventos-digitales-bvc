import { Injectable } from '@angular/core';
import { EventoI } from '../../modelos/evento.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/operacion";
  //url:string = "https://eventos-digitales-bvc.lm.r.appspot.com/operacion";

  constructor(private http:HttpClient) { }

  getAllEvents():Observable<EventoI[]>{
    let direccion = this.url;
    return this.http.get<EventoI[]>(direccion);
  }
  getEventsByPlataform(plataforma:String):Observable<EventoI[]>{
    let direccion = this.url + "/query?plataforma=" + plataforma;
    return this.http.get<EventoI[]>(direccion);
  }
}
