import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchResultComponent } from 'src/app/common/components/search-result/search-result.component';
import { SearchResult } from 'src/app/common/models/search-result';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
import { ExternalOrganization } from '../../../models/dtos/external-organization';
import { RegisterOrganizationEdit } from '../../../models/edits/register-organization';
import { OrganizationApiService } from '../../../services/organization.service';
import { RegisterDataService } from '../../../services/register-data.service';

@Component({
  selector: 'app-register-organization',
  templateUrl: './register-organization.component.html',
  styleUrls: ['./register-organization.component.scss'],
})
export class RegisterOrganizationComponent implements OnInit {
  edit: RegisterOrganizationEdit = new RegisterOrganizationEdit();
  searchResult: Array<SearchResult> = new Array<SearchResult>();

  searchBehavior: Subject<any> = new Subject<any>();

  @ViewChild(SearchResultComponent)
  child: SearchResultComponent;

  constructor(
    private router: Router,
    private organizationService: OrganizationApiService,
    private registerDataService: RegisterDataService,
    private toastService: ToastService
  ) {
    this.registerDataService.clear();
    this.edit = this.registerDataService.getOrganizationEdit();
  }

  ngOnInit(): void {
    this.searchBehavior.pipe(debounceTime(500)).subscribe(() =>
      this.organizationService
        .externalSearch(this.edit.organizationName)
        .subscribe({
          next: (sub) => {
            this.searchResult = sub.map(
              (r) => new SearchResult(r.organizationName, r.fullAddress, r)
            );
          },
          error: (error) => {
            this.toastService.show('Failed', error.error, ToastEventType.Error);
          },
        })
    );
  }

  search() {
    this.searchBehavior.next();
  }

  setOrganization(source: ExternalOrganization) {
    this.edit.organizationIdentifier = source.organizationUniqueIdentifier;
    this.edit.organizationName = source.organizationName;
  }

  get showDetails() {
    return this.router.url.toLocaleLowerCase().indexOf('details') != -1;
  }
}
