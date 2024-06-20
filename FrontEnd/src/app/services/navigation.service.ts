import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Routes } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { routes } from '../routes';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private activeRouteSubject = new BehaviorSubject<string>('');
  private activeTabSubject = new BehaviorSubject<number>(-1);

  activeRoute$ = this.activeRouteSubject.asObservable();
  activeTab$ = this.activeTabSubject.asObservable();
  routes: Routes = routes;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const activeRoute = this.getActiveSidebarRoute(event.url);
        this.activeRouteSubject.next(activeRoute);
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const activeRoute = this.getActiveTab(event.url);
        this.activeTabSubject.next(activeRoute);
      }
    });

  }

  private getActiveSidebarRoute(url: string): string {
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

  private getActiveTab(url: string): number {
    const currentURL = this.router.url;

    console.log(currentURL);

    for (const route of this.routes) {
      console.log(route);
      if (true) {
        console.log(currentURL.split('/'));

        switch (currentURL.split('/')[2]) {
          case 'overview':
            return 0;
            break

          case 'inputs':
            return 1;
            break

          case 'outputs':
            return 2;
            break

          case 'pending':
            return 3;
            break

          default:
            return -1;
            break
        }
      }
    }

    return -1;
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
