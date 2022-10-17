import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experiencia: Experiencia = new Experiencia("", "", "", "", "");

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.obtenerExperiencia().subscribe(data => {
      this.experiencia = data});
  }

}
