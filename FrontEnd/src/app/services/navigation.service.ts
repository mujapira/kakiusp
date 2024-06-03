import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { routes } from '../routes';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private activeRouteSubject = new Subject<string>();
  activeRoute$ = this.activeRouteSubject.asObservable();
  routes: Routes = routes;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const activeRoute = this.getActiveRoute(event.url);
        this.activeRouteSubject.next(activeRoute);
      }
    });
  }

  private getActiveRoute(url: string): string {
    for (const route of this.routes) {
      if (route.path && url.includes(route.path)) {
        return route.path;
      }
      if (route.children) {
        const childActiveRoute = this.getActiveChildRoute(url, route.children);
        if (childActiveRoute) {
          return childActiveRoute;
        }
      }
    }

    return '';
  }

  private getActiveChildRoute(url: string, children: Routes): string {
    for (const childRoute of children) {
      if (childRoute.path && url.includes(childRoute.path)) {
        return childRoute.path;
      }
    }

    return '';
  }
}
