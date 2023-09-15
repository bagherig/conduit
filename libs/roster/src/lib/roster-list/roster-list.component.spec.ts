import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RosterListComponent } from '@conduit/roster';
import { RosterStoreService } from '@realworld/roster/src/lib/roster.store';

describe('RosterListComponent', () => {
  let component: RosterListComponent;
  let fixture: ComponentFixture<RosterListComponent>;
  let rosterStore: RosterStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RosterListComponent],
      providers: [
        {
          provide: RosterStoreService,
          useValue: {
            rosterData$: of([]),
            fetchRosterData: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    rosterStore = TestBed.inject(RosterStoreService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch roster data on initialization', () => {
    expect(rosterStore.fetchRosterData).toHaveBeenCalled();
  });
});
