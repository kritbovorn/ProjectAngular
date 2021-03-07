import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  imageIcons = ["icon1", "icon2", "icon3", "icon4", "icon5", "icon6", "icon7", "icon8", "icon9", "icon10"];
  titleIcons = ["icon1", "icon2", "icon3", "icon4", "icon5", "icon6", "icon7", "icon8", "icon9", "icon10"];

  constructor() { }

  ngOnInit(): void {
  }

}
