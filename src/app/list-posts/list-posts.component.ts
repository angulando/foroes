import { Component } from '@angular/core';
import { PostsService } from './posts.service'

@Component({
  selector: 'list-posts-comp',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
	private items: any[] = [];

  constructor(service: PostsService) { 
  	service.getPosts().subscribe(data => this.items = data);
  }

}
