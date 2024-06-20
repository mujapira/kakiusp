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

  isActive(url: string): boolean {
    // const currentURL = this.router.url;

    // if (url === currentURL) {
    //   return true;
    // }

    return false;
  }

  tab: string = ""
  indicatorWidth: number = 0

  changeTab(url: string): void {
    this.tab = url
    // this.indicatorWidth = 100 / 3 * index

    const currentURL = this.router.url;

    this.router.navigate([this.tab]);

    // switch(index) {
    //   case 0:
    //     this.router.navigate(['/financial/overview']);
    //     break;
    //   case 1:
    //     this.router.navigate(['/financial/inputs']);
    //     break;
    //   case 2:
    //     this.router.navigate(['/financial/outputs']);
    //     break;
    //   case 3:
    //     this.router.navigate(['/financial/pending']);
    //     break;
    //   default:
    //     break;
    // }
  }
}
