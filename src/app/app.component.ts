import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { SwPush, SwUpdate, UnrecoverableStateEvent, VersionEvent, VersionReadyEvent } from '@angular/service-worker';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exam-demo';
  readonly VAPID_PUBLIC_KEY = "BOBlBr9Yz5VqIb-MR49NHz4f-uIEklTjskFK28WlTYD3iZ3myNKqDLHTx-lFyZ_J9Q5_8mKd0rn-dzGlrQ0X8nY";


  constructor(private router: Router,
    private spinner: NgxSpinnerService,
    private serviceWorker: SwUpdate,
    private pushService: SwPush,
    // private notificationService: NewsletterService
  ) {
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
    this.pushNotifications();
  }

  //On reload site/app show alert if version update
  public handelVersionUpdate(): void {
    this.serviceWorker.versionUpdates.subscribe((event: VersionEvent) => {
      console.log('event', event)
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
  subscribeToNotifications() {
    // this.pushService.requestSubscription({
    //   serverPublicKey: this.VAPID_PUBLIC_KEY
    // })
    //   .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
    //   .catch(err => console.error("Could not subscribe to notifications", err));
  }

  public async pushNotifications() {
    // console.log('pushNotifications')
    // try {
    //   const sub = await this.pushService.requestSubscription({
    //     serverPublicKey: "BOBlBr9Yz5VqIb-MR49NHz4f-uIEklTjskFK28WlTYD3iZ3myNKqDLHTx-lFyZ_J9Q5_8mKd0rn-dzGlrQ0X8nY"
    //   });
    //   // this.notificationService.addSubscription(sub);
    // } catch (error) {
    //   console.error('Could not subscribe due to :', error);
    // }
    // this.pushService.messages.subscribe((message) => {
    //   console.log(message);
    // });
    // this.pushService.notificationClicks.subscribe((message) => {
    //   console.log(message);
    // });
    // this.pushService.subscription.subscribe((subscription) => {
    //   console.log(subscription);
    // });
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
