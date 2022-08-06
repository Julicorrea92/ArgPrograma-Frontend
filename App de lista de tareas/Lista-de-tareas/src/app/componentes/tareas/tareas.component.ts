import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../servicios/tareas.service';
import { Task } from '../../tasks';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
  private TareasService: TareasService

  ) { }

  ngOnInit(): void {

     this.TareasService.getTasks().subscribe((tasks)=>[
      this.tasks = tasks
     ]);
  }

}
