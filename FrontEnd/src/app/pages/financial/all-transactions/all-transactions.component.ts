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
  routeDataType: string = "";
  title: string = "";

  filterTimeout: any;
  filterText: string = '';
  filterStartingDate: Date | null = null
  filterEndingDate: Date | null = null

  financialHistory = financialHistory;
  filteredFinancialHistory: IFinancialHistory[] = [];
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

    this.activatedRoute.data.subscribe(data => {console.log(data); this.routeDataType = data['dataType']})

    switch (this.routeDataType) {
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
        break;
    }

    this.filterData();
  }

  setNewColors(): void {
    this.gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
    this.gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe();
  }

  debounceFilterData(delay: number = 300): void {
    clearTimeout(this.filterTimeout);

    this.filterTimeout = setTimeout(() => {
      this.filterData();
    }, delay);
  }

  filterData(): void {
    if (this.filterText === '') {
      this.filteredFinancialHistory = this.financialHistory;
    }
    else {
      this.filteredFinancialHistory = this.financialHistory.filter(obj => obj.description.toLowerCase().includes(this.filterText.toLowerCase()));
    }

    const startDate = (this.filterStartingDate) ? new Date(this.filterStartingDate) : new Date(-8640000000000000);
    const endDate = (this.filterEndingDate) ? new Date(this.filterEndingDate) : new Date(8640000000000000);

    this.filteredFinancialHistory = this.filteredFinancialHistory.filter((obj) => {
      const date = new Date(obj.metadata.date);

      return date >= startDate && date <= endDate;
    })

    this.descFinancialHistory = this.filteredFinancialHistory.slice().sort().reverse()
  }

  clearFields() {
    this.filteredFinancialHistory = this.financialHistory;
    this.descFinancialHistory = this.filteredFinancialHistory.slice().sort().reverse()

    this.filterText = '';
    this.filterStartingDate = null;
    this.filterEndingDate = null;
  }
}
