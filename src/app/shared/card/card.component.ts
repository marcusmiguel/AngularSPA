import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'spa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() img = ""
  @Input() msg = ""
  favorited: boolean

  constructor(private dialog: MatDialog) {
    this.favorited = false;
  }

  onFavorited() {
    this.favorited = !this.favorited;
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
