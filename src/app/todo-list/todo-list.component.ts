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

  selectedTask(task: string) {
    this.tasks.push(task);

    console.log(`Task: ${task}`);

    alert(task);
  }

}
