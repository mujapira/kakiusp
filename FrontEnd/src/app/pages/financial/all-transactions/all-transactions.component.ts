import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { balanceData, entryData, financialHistory } from './../../../../fakeData';
import { ThemeService } from "./../../../services/theme.service"
import { Subscription } from "rxjs"
import { IFinancialHistory } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
})
export class AllTransactionsComponent {
  constructor(private themeService: ThemeService, private router: Router, private route: ActivatedRoute, public activatedRoute: ActivatedRoute) {}

  private themeChangeSubscription: Subscription = new Subscription();

  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();
  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  id: string | null = null;
  dwdw: string = "";
  title: string = "";

  financialHistory = financialHistory;
  descFinancialHistory: IFinancialHistory[] = [];

  ngOnInit(): void {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe(
      () => {
        this.isDarkTheme = this.themeService.isDarkModeEnabled();
        this.setNewColors();
      }
    );

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });

    this.activatedRoute.data.subscribe(data => {console.log(data); this.dwdw = data['dataType']})

    switch (this.dwdw) {
      case "inputs":
        this.title = "Entradas";
        this.financialHistory = this.financialHistory.filter(obj => (obj.isEntry === true && obj.isPending === false));
        break;
      case "outputs":
        this.title = "Saídas";
        this.financialHistory = this.financialHistory.filter(obj => (obj.isEntry === false && obj.isPending === false));
        break;
      case "pending":
        this.title = "Pendências";
        this.financialHistory = this.financialHistory.filter(obj => (obj.isPending === true))
    }
    console.log(this.financialHistory);
    this.descFinancialHistory = this.financialHistory.slice().sort().reverse()
  }

  setNewColors(): void {
    this.gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
    this.gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe();
  }
}
