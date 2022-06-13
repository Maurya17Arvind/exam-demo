import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  readonly VAPID_PUBLIC_KEY = 'BOBlBr9Yz5VqIb-MR49NHz4f-uIEklTjskFK28WlTYD3iZ3myNKqDLHTx-lFyZ_J9Q5_8mKd0rn-dzGlrQ0X8nY';
  private baseUrl = 'http://localhost:5000/notifications';
  constructor(private http: HttpClient,
    private swPush: SwPush) { }
  subscribeToNotification() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.sendToServer(sub))
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
  sendToServer(params: any) {
    this.http.post(this.baseUrl, { notification: params }).subscribe();
  }
}