import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { SwUpdate, UnrecoverableStateEvent, VersionEvent, VersionReadyEvent } from '@angular/service-worker';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exam-demo';

  constructor(private router: Router, private spinner: NgxSpinnerService, private serviceWorker: SwUpdate) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }

  ngOnInit(): void {
    console.log('Start service wroker');
    if (!this.serviceWorker.isEnabled) {
      console.log('Service worker is not enabled');
      return;
    }
    this.handelVersionUpdate();
  }

  public handelVersionUpdate(): void {
    this.serviceWorker.versionUpdates.subscribe((event: VersionEvent) => {
      console.log('event', event)
      alert(event.type);
      if (event.type === "VERSION_READY" &&
        confirm(
          `New version ${(event as VersionReadyEvent).latestVersion.hash} available. Load New Version ?`
        )
      ) {
        window.location.reload();
      }
    });

    this.serviceWorker.unrecoverable.subscribe((event: UnrecoverableStateEvent) => {
      alert('Error reason :' + event.reason);
    })
  }


  public navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.spinner.show();
    }
    if (event instanceof NavigationEnd) {
      this.spinner.hide();
    }

    // Set isLoading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.spinner.hide();
    }
    if (event instanceof NavigationError) {
      this.spinner.hide();
    }
  }
}
