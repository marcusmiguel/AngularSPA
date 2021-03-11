import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'spa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  img: number;
  favorited: boolean;

  constructor(private dialog: MatDialog) {
    this.favorited = false;
    this.img = Math.floor((Math.random() * 100) + 1);
  }

  onFavorited() {
    this.favorited = !this.favorited;
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
