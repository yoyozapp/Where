import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = [1, 2, 3, 4].map((n) => `assets/img/slideshow${n}.png`);


  
  constructor() { }

  ngOnInit(): void {
  }

}
