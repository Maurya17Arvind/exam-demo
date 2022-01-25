import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root'
})
export class ViewStudentDetailResolver implements Resolve<boolean> {

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // return this.userService.viewData(this.activatedRoute.snapshot.paramMap['_id']);
    return this.userService.viewData(route.paramMap.get('_id'));
  }
}
