import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Output() novopost = new EventEmitter();
  @Output() redirect = new EventEmitter();
  img: string = "";
  msg: string = "";
  constructor() { }

  novoPost() {
    this.novopost.emit({ img: this.img, msg: this.msg })
    this.img = ""
    this.msg = ""
    this.redirect.emit("")
  }



}
