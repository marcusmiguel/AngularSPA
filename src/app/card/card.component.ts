import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  img: number;
  favorited: boolean;

  constructor() {
    this.favorited = false;
    this.img = Math.floor((Math.random() * 100) + 1);
  }

  onFavorited() {
    this.favorited = !this.favorited;
  }

}
