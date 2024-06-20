import { balanceData, entryData, financialHistory, outData } from './../../../../fakeData';
import { ThemeService } from "./../../../services/theme.service"
import { Component } from "@angular/core"
import { Subscription } from "rxjs"

@Component({
  selector: 'app-saidas',
  templateUrl: './saidas.component.html',
})
export class SaidasComponent {
  constructor(private themeService: ThemeService) {}

  private themeChangeSubscription: Subscription = new Subscription();

  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();
  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  pizzaChartTitle = "Saídas";
  // pizzaChartMainColors = ['#3B115F', '#481575', '#56188B', '#631CA1', '#711FB8', '#7E22CE', '#8B2DDD', '#9742E1', '#A357E5', '#AF6DE9', '#BE74E9'];
  pizzaChartMainColors = ['#CC252D', '#DA3038', '#DE454D', '#E35B61', '#E77076', '#EB858A', '#EF9B9F', '#F3B1B4', '#F6C6C9', '#FADCDE', '#FCE9E9'];
  pizzaChartData = outData.map(e => {
    return {name: e.category, y: e.value};
  });

  columnChartTitle = "Balanço";
  columnChartMainColor = ['#7E22CE'];
  columnChartData = outData.map(e => e.value);
  columnChartCategories = outData.map(e => e.category);

  financialHistory = financialHistory.slice().sort().filter(obj => obj.isEntry === false && obj.isPending === false);
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
