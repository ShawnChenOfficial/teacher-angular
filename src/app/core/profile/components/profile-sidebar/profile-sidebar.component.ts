import { Component, OnInit } from '@angular/core';
import { AuthRole } from 'projects/auth/src/models/auth.role';
import { AuthService } from 'projects/auth/src/services/auth.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  get isAdmin() {
    return this.authService.hasPermission(AuthRole.Admin);
  }

  get isOrganizationUser() {
    return this.authService.hasPermission(AuthRole.OrganizationUser) || this.authService.hasPermission(AuthRole.OrganizationAdmin);
  }

  get isNormalUser() {
    return this.authService.hasPermission('normal');
  }

}
