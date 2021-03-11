import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent implements OnInit {

  @Input() task: string = "";
  tasks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
  
    this.tasks.push(this.task);
    this.task = "";
    
  } 

}
