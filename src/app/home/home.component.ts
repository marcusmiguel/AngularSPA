import { Component, OnInit, Output, HostListener, ElementRef, ViewChild } from '@angular/core'
import { PostService } from '../service/post.service'
import { Post } from '../model/Post'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showButton = false
  activetab: { num: 0 }
  posts: Post[]
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data.reverse();
    })
  }

  criarPost(post: Post) {
    this.posts = [post, ...this.posts]
    this.postService.postMessage(post)
      .subscribe((data: Post) => {
        console.log(data)
      })
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


