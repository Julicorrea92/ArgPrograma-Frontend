import { Component, OnInit, Input } from '@angular/core';
import { TAREAS } from 'src/app/mockDeTareas';
import { Tarea } from 'src/app/tareasInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Tarea =  TAREAS [0];
  faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }

}
