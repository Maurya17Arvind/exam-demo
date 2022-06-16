import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private readonly VAPID_PUBLIC_KEY = 'BH6g9KSs57T5ee0Eexv5s8DBkbKgT38f2xeMd1havTdv4pUEsim8ShpHyypUnctfy-fDzVb_p_8woNo2aIqo5Q0';
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
    console.log('params', params)
    this.http.post(this.baseUrl, { notification: params }).subscribe();
  }
}
