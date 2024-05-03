import { Component } from "@angular/core"
import {  Router } from "@angular/router"

@Component({
  selector: "app-financial",
  templateUrl: "./financial.component.html",
})
export class FinancialComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  tab: number = 0
  indicatorWidth: number = 0

  changeTab(index: number): void {
    this.tab = index
    this.indicatorWidth = 100 / 3 * index

    switch(index) {
      case 0:
        this.router.navigate(['/financial/overview']);
        break;
      case 1:
        this.router.navigate(['/financial/inputs']);
        break;
      case 2:
        this.router.navigate(['/financial/outputs']);
        break;
      case 3:
        this.router.navigate(['/financial/pending']);
        break;
      default:
        break;
    }
  }
}
