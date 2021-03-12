import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() title: string = "";

  count: number = 0;
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

  countUp() {
    this.count += 1;
  }
  countDown() {
    this.count -= 1;
  }

}
