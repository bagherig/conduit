import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap, switchMap } from 'rxjs/operators';
import {RosterService} from "@realworld/roster/src/lib/roster.service";

export interface RosterState {
  rosterData: any[];
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class RosterStoreService extends ComponentStore<RosterState> {
  constructor(private rosterService: RosterService) {
    super({ rosterData: [], loading: false });
  }

  readonly rosterData$ = this.select(state => state.rosterData);
  readonly loading$ = this.select(state => state.loading);

  readonly fetchRosterData = this.effect(trigger$ => {
    return trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.rosterService.getRosterData().pipe(
          tap(data => {
            this.patchState({ rosterData: data, loading: false });
          })
        )
      )
    );
  });
}
