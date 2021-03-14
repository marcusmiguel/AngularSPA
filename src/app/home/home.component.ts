import { Component, OnInit, Output, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showButton = false
  lorem: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
  activetab: { num: 0 }

  posts = Array.from(
    [{ img: "https://picsum.photos/id/10/900", msg: this.lorem },
    { img: "https://picsum.photos/id/20/900", msg: this.lorem },
    { img: "https://picsum.photos/id/30/900", msg: this.lorem },
    { img: "https://picsum.photos/id/40/900", msg: this.lorem },
    { img: "https://picsum.photos/id/50/900", msg: this.lorem },
    { img: "https://picsum.photos/id/60/900", msg: this.lorem },
    { img: "https://picsum.photos/id/70/900", msg: this.lorem },
    ])

  criarPost(x) {
    this.posts = [x, ...this.posts]
  }
  handleRedirect(x) {
    this.activetab = { num: 0 }
  }

  @ViewChild("myDiv", { static: false }) myDiv: ElementRef;

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 1.5) {
      this.showButton = true
    } else {
      this.showButton = false
    }

  }


}


