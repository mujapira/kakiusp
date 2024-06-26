import { ActivatedRoute, Router } from '@angular/router';
import { financialHistory } from './../../../../fakeData';
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

    this.activatedRoute.data.subscribe(data => {this.routeDataType = data['dataType']})

    this.setFinancialData();
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

  setFinancialData(): void {
    const condition = (obj: IFinancialHistory) => {
      switch (this.routeDataType) {
        case "inputs":
          return obj.id === this.id && obj.isEntry === true && obj.isPending === false;

        case "outputs":
          return obj.id === this.id && obj.isEntry === false && obj.isPending === false;

        case "pending":
          return obj.id === this.id && obj.isPending === true;

        default:
          return false
      }
    }

    this.financialEntry = financialHistory.filter(condition)[0];

    if (this.financialEntry === undefined) {
      this.router.navigate(['/not-found']);
      return
    }

    this.setTitle();
  }

  setTitle(): void {
    const typeMap: { [key: string]: string } = {
      "inputs": "Entrada",
      "outputs": "Saída",
      "pending": "Pendência"
    };

    const type = typeMap[this.routeDataType];
    this.title = `${type} ${this.id} - ${this.financialEntry?.description}`;
  }
}
