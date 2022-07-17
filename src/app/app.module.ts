import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavComponent } from './common/components/nav/nav.component';
import { ContentComponent } from './common/components/content/content.component';
import { PostSearchComponent } from './core/shared/components/post-search/post-search.component';
import { HomeComponent } from './core/home/components/home.component';
import { LatestPostsComponent } from './core/home/components/posts/latest-posts/latest-posts.component';
import { PostCardComponent } from './core/home/components/posts/posts-per-category/post-card/post-card.component';
import { PostsPerCategoryComponent } from './core/home/components/posts/posts-per-category/posts-per-category.component';
import { SingleCategoryPostsComponent } from './core/home/components/posts/single-category-posts/single-category-posts.component';
import { CategoryService } from './core/home/services/category.service';
import { HttpClientModule } from '@angular/common/http';
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
import { PostService } from './core/shared/services/post.sevice';
import { PostModalComponent } from './core/shared/components/post-modal/post-modal.component';
import { ModalDirective } from './common/directives/modal.directive';
import { ModalComponent } from './common/components/modal/modal.component';
import { ModalService } from './common/services/modal.service';
import { ModalHeaderComponent } from './common/components/modal/modal-header/modal-header.component';
import { ModalFooterComponent } from './common/components/modal/modal-footer/modal-footer.component';
import { ProfileComponent } from './core/profile/components/profile.component';
import { ProfileSidebarComponent } from './core/profile/components/profile-sidebar/profile-sidebar.component';
import { ProfileService } from './core/profile/services/profile.service';
import { UserPostsComponent } from './core/profile/components/user-posts/user-posts.component';
import { UserPostComponent } from './core/profile/components/user-posts/user-post/user-post.component';

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
    SingleCategoryPostsComponent,
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
    PostModalComponent,
    ModalComponent,
    ModalDirective,
    ModalHeaderComponent,
    ModalFooterComponent,
    ProfileComponent,
    ProfileSidebarComponent,
    UserPostsComponent,
    UserPostComponent,
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
    PostService,
    RegisterDataService,
    RegisterApiService,
    OrganizationApiService,
    ToastService,
    ModalService,
    ProfileService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
