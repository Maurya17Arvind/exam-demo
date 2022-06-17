import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { SwPush, SwUpdate, UnrecoverableStateEvent, VersionEvent, VersionReadyEvent } from '@angular/service-worker';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exam-demo';
  private readonly VAPID_PUBLIC_KEY = "BKNeGqOcQtPcNRQq1UTWkwval2C6uOjAVw-TdHhzCJwl5hlaV3ieKn3evz6R84hQKO0kW_MNUiOaadaL6fnusJI";
  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
    
  onbeforeinstallprompt(e) {
    e.preventDefault();
    this.deferredPrompt = e;
  }

  
  constructor(private router: Router,
    private spinner: NgxSpinnerService,
    private swUpdate: SwUpdate,
    private pushService: SwPush,
    private webNotificationService: NotificationService,
    private matSnackBar: MatSnackBar
  ) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
    this.swUpdate.available.subscribe(event => {
      console.log('New update available');
      this.updateToLatest();
    });

    this.pushService.notificationClicks.subscribe(event => {
      console.log('Received notification: ', event);
      const url = event.notification.data.url;
      window.open(url, '_blank');
    });
  }

  ngOnInit(): void {
    this.pushService.messages.subscribe(message => {console.log('message', message)})

    // check connection
    addEventListener('offline', (e) => {
      this.matSnackBar.open('Please check your connection', 'Ok', {
        duration: 6000
      })
    })

    addEventListener('online', (e) => {
      this.matSnackBar.open('You are now online', 'Ok', {
        duration: 3000
      })
    })

    if (!this.swUpdate.isEnabled) {
      console.log('Service worker is not enabled');
      return;
    }
   
    this.handelVersionUpdate();
  }

  public handelVersionUpdate(): void {
    this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
      console.log('event', event)
      if (event.type === "VERSION_READY" &&
        confirm(
          `New version ${(event as VersionReadyEvent).latestVersion.hash} available. Load New Version ?`
        )
      ) {
        window.location.reload();
      }
    });

    this.swUpdate.unrecoverable.subscribe((event: UnrecoverableStateEvent) => {
      alert('Error reason :' + event.reason);
    })
  }

  updateToLatest(): void {
    console.log('Updating to latest version.');
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }


  public pushSubscription() {
    console.log('this.pushService', this.pushService.isEnabled)
    if (!this.pushService.isEnabled) {
      console.log('Notification is not enabled.');
      return;
    }

    this.pushService.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY,
    }).then(sub => {
      this.webNotificationService.sendToServer(sub);
      console.log('sub', sub);
    }).catch(err => {
      console.log('err', err)
    })
  }



  
  addToHomeScreen() {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
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
