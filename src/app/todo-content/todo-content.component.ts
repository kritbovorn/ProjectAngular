import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.css']
})
export class TodoContentComponent implements OnInit {

  @Input() task: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
