import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogDataService } from '../blog-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  newBlog: Blog = new Blog();

  addBlog() {
    this.blogDataService.addBlog(this.newBlog).subscribe(
      b =>
      this.router.navigate(["list"])
      //the function above it tells angular to manually navigate to the list route.
    );
  }


  constructor(private blogDataService: BlogDataService, private router: Router) { }

  ngOnInit(): void {
  }

}
