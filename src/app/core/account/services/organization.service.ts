import { Injectable } from '@angular/core';
import { HttpService } from 'projects/auth/src/services/http.service';
import { map } from 'rxjs/operators';
import { SearchQuery } from 'src/app/common/models/search-query';
import { environment } from 'src/environments/environment';
import { ExternalOrganization } from '../models/get/external-organization';
import { Organization } from '../models/get/organization';

@Injectable()
export class OrganizationApiService {
  constructor(private http: HttpService) { }

  search(query: SearchQuery) {
    return this.http
      .get<Array<any>>(environment.baseEndPoint + `/api/organization/search`, {
        params: query.params(),
      })
      .pipe(map((r) => r.map((d) => new Organization(d))));
  }

  externalSearch(term: string) {
    return this.http
      .get<Array<any>>(
        `https://catalogue.data.govt.nz/api/3/action/datastore_search`,
        {
          params: {
            resource_id: '20b7c271-fd5a-4c9e-869b-481a0e2453cd',
            q: term,
            limit: 10
          },
        }
      )
      .pipe(map((d: any) => (d.result.records as Array<any>).map(c => new ExternalOrganization(c))));
  }
}
