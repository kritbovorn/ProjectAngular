import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()  index: number = 0; 
  @Input() task: string = "";
  
 

  @Output() OnDeleteTask: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendDelete(index: number) {
    console.log(index);
    this.OnDeleteTask.emit(index);
  }

}
