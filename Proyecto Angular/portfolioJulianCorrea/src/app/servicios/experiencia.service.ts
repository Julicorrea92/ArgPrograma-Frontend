import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

    url: string = 'http://localhost:8080/experiencia/';
  
    constructor(private http: HttpClient) {}
  
      public obtenerExperiencia(): Observable<any>{
        console.log("El servicio portfolio persona esta corriendo");
        return this.http.get<any>(this.url+'ver');
  
      }
     
  }
