import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authServie: AuthService,
    private router: Router){}
  canLoad(route: Route, segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> |  boolean {
      if (!this.authServie.userIsAuthenticated) {
        this.router.navigateByUrl('/auth');
      }
      return this.authServie.userIsAuthenticated;
  }
}

