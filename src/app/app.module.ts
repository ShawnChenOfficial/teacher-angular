import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavComponent } from './common/components/nav/nav.component';
import { ContentComponent } from './common/components/content/content.component';
import { PostSearchComponent } from './core/shared/post-search/post-search.component';
import { HomeComponent } from './core/home/home.component';
import { LatestPostsComponent } from './core/home/latest-posts/latest-posts.component';
import { PostCardComponent } from './core/shared/posts-per-category/post-card/post-card.component';
import { PostsPerCategoryComponent } from './core/shared/posts-per-category/posts-per-category.component';
import { SingleCategoryPostComponent } from './core/home/single-category-post/single-category-post.component';
import { CategoriesComponent } from './core/home/categories/categories.component';
import { CategoryService } from './core/home/categories/services/category.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './common/components/toast/toast.component';
import { ToastListComponent } from './common/components/toast-list/toast-list.component';
import { ToastService } from './common/services/toast.service';
import { LoginComponent } from './core/account/components/login/login.component';
import { RegisterComponent } from './core/account/components/register/register.component';
import { RegisterPersonalComponent } from './core/account/components/register/register-personal/register-personal.component';
import { RegisterOrganizationComponent } from './core/account/components/register/register-organization/register-organization.component';
import { RegisterPersonalDetailsComponent } from './core/account/components/register/register-personal/register-personal-details/register-personal-details.component';
import { RegisterOrganizationDetailsComponent } from './core/account/components/register/register-organization/register-organization-details/register-organization-details.component';
import { AuthModule } from 'projects/auth/src/auth.module';
import { environment } from 'src/environments/environment';
import { RegisterDataService } from './core/account/services/register-data.service';
import { RegisterApiService } from './core/account/services/register.service';
import { ValidationModule } from 'projects/validation/src/validation.module';
import { SubmitButtonComponent } from './common/components/submit-button/submit-button.component';
import { OrganizationApiService } from './core/account/services/organization.service';
import { SearchResultComponent } from './common/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    PostSearchComponent,
    HomeComponent,
    LatestPostsComponent,
    PostsPerCategoryComponent,
    PostCardComponent,
    SingleCategoryPostComponent,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    ToastComponent,
    ToastListComponent,
    RegisterPersonalComponent,
    RegisterOrganizationComponent,
    RegisterPersonalDetailsComponent,
    RegisterOrganizationDetailsComponent,
    SubmitButtonComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    /* libraries */
    AuthModule.forRoot(environment),
    ValidationModule
  ],
  providers: [
    CategoryService,
    RegisterDataService,
    RegisterApiService,
    OrganizationApiService,
    ToastService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
