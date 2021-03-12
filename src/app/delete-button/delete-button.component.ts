import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {

  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
