import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root'
})
export class ViewExamDetailResolver implements Resolve<boolean> {
  constructor(private userService: UsersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.viewExamDeatils(route.paramMap.get('_id'));
  }
}
