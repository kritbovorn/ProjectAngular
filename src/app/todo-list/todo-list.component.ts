import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(task: string) {
    this.tasks.push(task);
    
  }

}
