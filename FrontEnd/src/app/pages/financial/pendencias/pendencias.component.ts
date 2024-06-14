import { balanceData, entryData, financialHistory } from './../../../../fakeData';
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
  pizzaChartMainColors = ['#973BE7', '#8639CA', '#A345F5', '#702FA8', '#592686', '#431C64'];
  pizzaChartData = [
    {
      name: 'Mensalidades',
      y: 1000
    },
    {
      name: 'DPs',
      y: 1000
    },
    {
      name: 'Prova Sub',
      y: 1000
    },
    {
      name: 'Cantina',
      y: 2000
    },
    {
      name: 'Doações',
      y: 1000
    },
    {
      name: 'Eventos',
      y: 1000
    },
  ];

  columnChartTitle = "Balanço";
  columnChartMainColor = ['#7E22CE'];
  columnChartData = entryData;
  columnChartCategories = [
    'Mensalidades',
    'DPs',
    'Prova Sub',
    'Cantina',
    'Doações',
    'Eventos',
  ]

  financialHistory = financialHistory;
  descFinancialHistory = financialHistory.slice().sort().reverse();
  balanceData = balanceData;
  entryData = entryData;

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
