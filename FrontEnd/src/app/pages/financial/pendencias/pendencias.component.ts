import { financialHistory, pendingData } from './../../../../fakeData';
import { ThemeService } from "./../../../services/theme.service"
import { Component } from "@angular/core"
import { Subscription } from "rxjs"

@Component({
  selector: 'app-pendencias',
  templateUrl: './pendencias.component.html',
})
export class PendenciasComponent {
  constructor(private themeService: ThemeService) {}

  private themeChangeSubscription: Subscription = new Subscription();

  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();
  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  pizzaChartTitle = "Saídas";
  pizzaChartMainColors = ['#D2B205', '#EBC805', '#FAD610', '#FBDB29', '#FCDF41', '#FDE45A', '#FEE873', '#FEEC8C', '#FFF1A5', '#FFF5BE', '#FFF5BE'];
  pizzaChartData = pendingData.map(e => {
    return {name: e.category, y: e.value};
  });

  columnChartTitle = "Balanço";
  columnChartMainColor = ['#7E22CE'];
  columnChartData = pendingData.map(e => e.value);
  columnChartCategories = pendingData.map(e => e.category);

  financialHistory = financialHistory.slice().sort().filter(obj => obj.isPending === true);
  descFinancialHistory = this.financialHistory.slice().reverse().slice(0, 8);

  ngOnInit(): void {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe(
      () => {
        this.isDarkTheme = this.themeService.isDarkModeEnabled();
        this.setNewColors();
      }
    );
  }

  setNewColors(): void {
    this.gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
    this.gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe();
  }
}
