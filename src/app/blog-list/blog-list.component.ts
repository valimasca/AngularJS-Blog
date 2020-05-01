import { Component, OnInit } from '@angular/core';
import { BlogDataService} from '../blog-data.service';
import { Blog } from '../blog';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[];

  getBlogs() : void {
    this.blogDataService.getBlogs().subscribe(
      b => (this.blogs = b)
    )
  }

  deleteBlog(id: number): void {
    this.blogDataService.deleteBlog(id).subscribe(
      b => this.getBlogs()
    );
  }

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

}
