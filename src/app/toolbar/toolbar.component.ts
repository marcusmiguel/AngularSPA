import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
  onActivate() {
    window.scroll(0, 0);
  }
}
