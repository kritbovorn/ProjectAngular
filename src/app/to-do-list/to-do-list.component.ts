import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks: string[] = [];


  constructor() { }

  addTask() {
    
    this.tasks.push("input");
  }

  ngOnInit(): void {
  }

}
