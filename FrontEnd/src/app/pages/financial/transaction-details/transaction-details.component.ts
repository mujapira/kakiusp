import { ActivatedRoute, Router } from '@angular/router';
import { balanceData, entryData, financialHistory, outData } from './../../../../fakeData';
import { ThemeService } from "./../../../services/theme.service"
import { Component } from "@angular/core"
import { Subscription } from "rxjs"
import { IFinancialHistory } from '../../../../interfaces/interfaces';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
})
export class TransactionDetailsComponent {
  constructor(private themeService: ThemeService, private router: Router, private activatedRoute: ActivatedRoute, private _location: Location) {}

  private themeChangeSubscription: Subscription = new Subscription();

  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();
  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  id: number | null = null;
  routeDataType: string = "";
  title: string = "";

  financialEntry: IFinancialHistory | null = null;

  ngOnInit(): void {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe(
      () => {
        this.isDarkTheme = this.themeService.isDarkModeEnabled();
        this.setNewColors();
      }
    );

    this.id = Number(this.router.url.split('/')[3]);

    this.financialEntry = financialHistory.filter(obj => obj.id === this.id)[0];

    this.activatedRoute.data.subscribe(data => {console.log(data); this.routeDataType = data['dataType']})

    switch (this.routeDataType) {
      case "inputs":
        this.title = `Entrada ${this.id} - ${this.financialEntry.description}`;
        break;
      case "outputs":
        this.title = `Saída ${this.id} - ${this.financialEntry.description}`;
        break;
      case "pending":
        this.title = `Pendência ${this.id} - ${this.financialEntry.description}`;
        break;
    }
  }

  setNewColors(): void {
    this.gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
    this.gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe();
  }

  goBack(): void {
    this._location.back();
  }
}
