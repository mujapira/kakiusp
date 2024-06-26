import { Component } from "@angular/core"
import {  Router, Routes } from "@angular/router"
import { NavigationService } from "../../services/navigation.service";
import { routes } from "../../routes";

@Component({
  selector: "app-financial",
  templateUrl: "./financial.component.html",
})
export class FinancialComponent {
  constructor(private router: Router, private _navigation: NavigationService) {}

  activeTabIndex: number = 0;
  routes: Routes = routes;
  relativeRoutes: { path: string, title: any }[] = [];

  ngOnInit(): void {
    const financialIndex = routes.findIndex(route => route.path === 'financial');
    const financialRouteChildren = routes[financialIndex].children;

    if (financialRouteChildren) {
      const routeMap = new Map<string, string>();

      for (const route of financialRouteChildren) {
        if (route.path && route.data && route.data['title']) {
          const basePath = route.path.split('/')[0];
          const title = route.data['title'];

          if (!routeMap.has(basePath)) {
            routeMap.set(basePath, title);
            this.relativeRoutes.push({ path: basePath, title: title })
          }
        }
      }
    }

    this._navigation.activeTab$.subscribe({
      next: (data) => {
        this.activeTabIndex = data;
      }
     });
  }
}
