import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';


const routes: Routes = [
  {path: "", redirectTo:"list", pathMatch: "full"},
  {path: "list", component: BlogListComponent},
  {path: "add", component: BlogAddComponent},
  {path: "edit/:id", component: BlogEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
