import { formatCurrency } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() task: string = "";

  tasks: string[] = [];

  constructor() { }

  addTask() {
  
    this.tasks.push(this.task);
    this.task = "";
    
  }

  deleteItem(task: string) {

    let index: number = this.tasks.indexOf(task);
    this.tasks.slice(index, 1);
  }
  

  ngOnInit(): void {

  }

}
