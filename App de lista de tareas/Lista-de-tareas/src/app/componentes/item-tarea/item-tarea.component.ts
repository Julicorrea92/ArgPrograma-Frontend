import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../tasks';
import { TASKS } from "../../mock-tasks";
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})
export class ItemTareaComponent implements OnInit {

  @Input() task: Task= TASKS[0]
  faTimes= faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
