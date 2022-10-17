import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent implements OnInit {

  @Input() text: String = "";
  @Input() color: String = "";
  @Output() btnClick = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //console.log("Click corriendo");
    this.btnClick.emit();
    
  }

}
