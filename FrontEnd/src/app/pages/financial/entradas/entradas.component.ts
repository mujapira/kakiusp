import { ActivatedRoute, Router } from '@angular/router';
import { entryData, financialHistory } from './../../../../fakeData';
import { ThemeService } from "./../../../services/theme.service"
import { Component } from "@angular/core"
import { Subscription } from "rxjs"

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
})
export class EntradasComponent {
  constructor(private themeService: ThemeService, private router: Router, private route: ActivatedRoute) {}

  id: string | null = null;

  private themeChangeSubscription: Subscription = new Subscription();

  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();
  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  pizzaChartTitle = "Entradas";
  pizzaChartMainColors = ['#18864F', '#1EAB64', '#23D079', '#3FDF8F', '#62E6A4', '#86ECB9'];
  pizzaChartData = entryData.map(e => {
    return {name: e.category, y: e.value};
  });

  columnChartTitle = "Balanço";
  columnChartMainColor = ['#7E22CE'];
  columnChartData = entryData.map(e => e.value);
  columnChartCategories = entryData.map(e => e.category);

  financialHistory = financialHistory.slice().sort().filter(obj => obj.isEntry === true && obj.isPending === false);
  descFinancialHistory = this.financialHistory.slice().reverse().slice(0, 8);


  ngOnInit(): void {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe(
      () => {
        this.isDarkTheme = this.themeService.isDarkModeEnabled();
        this.setNewColors();
      }
    );

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  setNewColors(): void {
    this.gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
    this.gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe();
  }
}
