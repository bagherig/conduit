import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RosterStoreService} from "@realworld/roster/src/lib/roster.store";

@Component({
  selector: 'conduit-roster-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roster-list.component.html',
  styleUrls: ['./roster-list.component.scss'],
})
export class RosterListComponent implements OnInit {
  rosterData$ = this.rosterStore.rosterData$;
  loading$ = this.rosterStore.loading$;

  constructor(private rosterStore: RosterStoreService) {}

  ngOnInit(): void {
    this.rosterStore.fetchRosterData();
  }
}
