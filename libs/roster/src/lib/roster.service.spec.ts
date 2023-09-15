import { TestBed } from '@angular/core/testing';
import { RosterService } from './roster.service';
import { of } from 'rxjs';
import {ApiService} from "@realworld/core/http-client";

describe('RosterService', () => {
  let service: RosterService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RosterService,
        {
          provide: ApiService,
          useValue: {
            get: jest.fn(() => of([]))
          }
        }
      ]
    });

    service = TestBed.inject(RosterService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch roster data', () => {
    service.getRosterData().subscribe(data => {
      expect(data).toEqual([]);
    });
    expect(apiService.get).toHaveBeenCalledWith('/roster');
  });
});
