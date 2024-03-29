import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) {}

    public obtenerPersona(): Observable<any>{
      console.log("El servicio portfolio persona esta corriendo");
      return this.http.get<any>(this.url+'ver');

    }
   
}
