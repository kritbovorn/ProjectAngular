import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-task',
  templateUrl: './content-task.component.html',
  styleUrls: ['./content-task.component.css']
})
export class ContentTaskComponent implements OnInit {

  @Input() task: string = "";
  tasks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  

  deleteItem(indexTask: number) {
    
    this.tasks.splice(indexTask, 1);
  }

  

}
