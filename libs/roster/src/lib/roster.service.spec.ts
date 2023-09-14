import { TestBed } from '@angular/core/testing';
import {RosterService} from "@realworld/roster/src/lib/roster.service";

describe('RosterListService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
