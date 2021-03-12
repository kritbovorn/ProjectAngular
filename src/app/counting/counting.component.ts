import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countUp() {
    this.count += 2;
  }

}
