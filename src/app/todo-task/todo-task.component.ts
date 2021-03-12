import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input() task: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  

}
