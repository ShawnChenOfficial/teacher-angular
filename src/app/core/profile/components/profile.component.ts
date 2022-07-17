import { Component, OnInit } from '@angular/core';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
import { UserGender } from '../../account/models/views/user-gender';
import { UserView } from '../models/view/user';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserView;

  constructor(private profileService: ProfileService, private toastService: ToastService) {
    this.profileService.getUserProfile().subscribe({
      next: res => {
        this.user = new UserView(res);
      },
      error: err => {
        this.toastService.show('Error', err, ToastEventType.Error);
      }
    })
  }

  ngOnInit(): void {
  }

  get userProfileImgUrl() {
    if (!this.user?.profileImg) {
      switch (this.user?.gender) {
        case UserGender.Male:
          return '/assets/profile/male-default.png';
        case UserGender.Female:
          return '/assets/profile/female-default.png';
        default:
          return '/assets/profile/male-default.png';
      }
    }
    return this.user?.profileImg;
  }
}
