import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/tareasInterface';
import { TAREAS } from '../../mockDeTareas';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Tarea[] = TAREAS;

  constructor() { }

  ngOnInit(): void {
  }

}
