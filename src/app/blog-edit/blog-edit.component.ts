import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  
  editBlog: Blog = new Blog();

  saveBlog() {
    this.blogDataService.editBlog(this.editBlog).subscribe(
      b => this.router.navigate(["list"]));
  }

  constructor(private blogDataService: BlogDataService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.blogDataService.getBlog(+param["id"]).subscribe(
        b => (this.editBlog = b));
    });
  }

}
