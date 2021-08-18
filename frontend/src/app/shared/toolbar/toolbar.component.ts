import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'spa-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
  @Output() moveUp = new EventEmitter();

  @Input() showButton = false

  onActivate() {
    window.scroll(0, 0);
  }
}
