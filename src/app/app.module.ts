import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavComponent } from './base/nav/nav.component';
import { ContentComponent } from './base/content/content.component';
import { SearchComponent } from './core/shared/search/search.component';
import { HomeComponent } from './core/home/home.component';
import { LatestPostsComponent } from './core/home/latest-posts/latest-posts.component';
import { PostCardComponent } from './core/shared/posts-per-category/post-card/post-card.component';
import { PostsPerCategoryComponent } from './core/shared/posts-per-category/posts-per-category.component';
import { SingleCategoryPostComponent } from './core/home/single-category-post/single-category-post.component';
import { CategoriesComponent } from './core/home/categories/categories.component';
import { CategoryService } from './core/home/categories/services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    SearchComponent,
    HomeComponent,
    LatestPostsComponent,
    PostsPerCategoryComponent,
    PostCardComponent,
    SingleCategoryPostComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
