import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from "../tasks";
import {TASKS} from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }


  getTasks(): Observable<Task[]>{
    
    const tasks= of(TASKS);
    return  tasks
  }
}
