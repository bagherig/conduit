import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '@realworld/core/http-client';

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(private apiService: ApiService) {}

  getRosterData(): Observable<any> {
    return this.apiService.get('/roster').pipe(map((data) => data));
  }
}
