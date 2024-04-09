import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  currentScreenSize$: Observable<
    'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge' | 'Unknown'
  >;
  // Create a map to display breakpoint names for demonstration purposes.
  private displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    this.currentScreenSize$ = breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((result) => {
          let currentScreenSize:
            | 'XSmall'
            | 'Small'
            | 'Medium'
            | 'Large'
            | 'XLarge'
            | 'Unknown' = 'Unknown';
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              currentScreenSize =
                this.displayNameMap.get(query) ?? ('Unknown' as any);
            }
          }
          return currentScreenSize;
        })
      );
  }
}
