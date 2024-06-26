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

    const financialIndex = routes.findIndex(route => route.path === 'financial');
    const financialRouteChildren = routes[financialIndex].children;

    const routeSet = new Set<string>();
    const routeSegment = currentURL.split('/')[2];

    if (financialRouteChildren) {
      for (const route of financialRouteChildren) {
        if (route.path) {
          const basePath = route.path.split('/')[0];

          routeSet.add(basePath);
        }
      }
    }

    const routeIndex = [...routeSet].findIndex(route => route === routeSegment);

    return routeIndex;
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
