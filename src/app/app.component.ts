import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'angular-dashboard';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1200px)');
    console.log(this.mobileQuery);

    //----------------------------------------------------------------//
    // MediaMatcher - A utility for calling matchMedia queries.
    // MediaMatcher.matchMedia -
    // Evaluates the given media query and returns the native MediaQueryList
    // from which results can be retrieved. Confirms the layout engine will trigger
    // for the selector query provided and returns the MediaQueryList for the query provided.
    //---------------------------------------------------------------//
    // ChangeDetectorRef
    // Base class that provides change detection functionality. A change-detection tree
    // collects all views that are to be checked for changes.
    //---------------------------------------------------------------//
    // OnDestroy
    // A lifecycle hook that is called when a directive, pipe, or service is destroyed. Use for any custom
    // cleanup that needs to occur when the instance is destroyed.
    //---------------------------------------------------------------//

    this._mobileQueryListener = () => {
      console.log('Mobile Query');
      changeDetectorRef.detectChanges();
    };

    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
