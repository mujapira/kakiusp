import { CurrencyPipe } from '@angular/common';
import { balanceData, financialHistory } from './../../../../fakeData';
import { ThemeService } from './../../../services/theme.service';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { IBalanceData } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  providers: [CurrencyPipe],
})
export class ResumoComponent {
  constructor(
    private themeService: ThemeService,
    private currencyPipe: CurrencyPipe
  ) {}

  private themeChangeSubscription: Subscription = new Subscription();

  highcharts: typeof Highcharts = Highcharts;
  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();
  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  barChartOptions: Highcharts.Options = {};

  financialHistory = financialHistory.slice().sort().reverse().slice(0, 8);
  pendingfinancialHistoryItems = financialHistory
    .slice()
    .sort()
    .reverse()
    .filter((item) => item.isPending)
    .slice(0, 8);

  balanceData: IBalanceData = [];

  monthlyBalance: number = 0;
  monthlyEntries: number = 0;
  monthlyOuts: number = 0;

  currentMonth: number = 12;
  currentYear: number = 2024;

  ngOnInit(): void {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe(
      () => {
        this.isDarkTheme = this.themeService.isDarkModeEnabled();
        this.setNewColors();
        this.updateChart();
      }
    );

    this.monthlyEntriesValue();
    this.monthlyOutsValue();

    this.setBalanceData();

    this.initializeBarChartOptions();
    this.updateChart();
  }

  setNewColors(): void {
    this.gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
    this.gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe();
  }

  updateChart(): void {
    this.barChartOptions = {
      ...this.barChartOptions,
      legend: {
        ...this.barChartOptions.legend,
        itemStyle: {
          color: this.gridText,
        },
        itemHoverStyle: {
          color: this.gridText,
        },
      },
      xAxis: {
        ...this.barChartOptions.xAxis,
        lineColor: this.gridColor,
        gridLineColor: this.gridColor,
        labels: {
          style: {
            color: this.gridText,
          },
        },
      },
      yAxis: {
        ...this.barChartOptions.yAxis,
        gridLineColor: this.gridColor,
        labels: {
          format: 'R$ {value}',
          style: {
            color: this.gridText,
          },
        },
      },
    };
  }

  initializeBarChartOptions() {
    this.barChartOptions = {
      chart: {
        backgroundColor: `transparent`,
        borderWidth: 1,
        borderColor: 'transparent',
        type: 'line',
      },
      colors: ['#7E22CE'],
      legend: {
        enabled: true,
        itemStyle: {
          color: this.gridText,
          fontWeight: 'medium',
          fontFamily: 'Inter',
        },
        itemHoverStyle: {
          color: this.gridText,
        },
      },
      title: {
        text: '',
      },
      xAxis: {
        lineColor: this.gridColor,
        gridLineColor: this.gridColor,
        categories: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ],
        labels: {
          style: {
            color: this.gridText,
            fontWeight: 'medium',
            fontFamily: 'Inter',
          },
        },
      },
      yAxis: {
        gridLineColor: this.gridColor,
        title: {
          text: '',
        },
        labels: {
          format: 'R$ {value}',
          style: {
            color: this.gridText,
            fontWeight: 'medium',
            fontFamily: 'Inter',
          },
        },
      },
      series: [
        {
          name: 'Balanço',
          data: this.balanceData,
          type: 'line',
        },
      ],
    };
  }

  monthlyEntriesValue() {
    for (var i of financialHistory) {
      let date = new Date(i.metadata.date);
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      if (
        i.isEntry &&
        year === this.currentYear &&
        month === this.currentMonth
      ) {
        this.monthlyEntries += i.value;
      }
    }

    this.monthlyBalance += this.monthlyEntries;
  }

  monthlyOutsValue() {
    for (var i of financialHistory) {
      let date = new Date(i.metadata.date);
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      if (
        !i.isEntry &&
        year === this.currentYear &&
        month === this.currentMonth
      ) {
        this.monthlyOuts -= i.value;
      }
    }

    this.monthlyBalance += this.monthlyOuts;
  }

  setBalanceData() {
    const newBalanceData = Array.from({ length: 12 }, () => 0);

    for (let entry of financialHistory) {
      let date = new Date(entry.metadata.date);
      let month = date.getMonth();
      let year = date.getFullYear();

      // if (year === this.currentYear) {
      //   newBalanceData[month] = entry.isPending
      //     ? newBalanceData[month] + 0
      //     : entry.isEntry
      //       ? newBalanceData[month] + entry.value
      //       : newBalanceData[month] - entry.value;
      // }

      if (year === this.currentYear) {
        newBalanceData[month] = entry.isEntry
          ? newBalanceData[month] + entry.value
          : newBalanceData[month] - entry.value;
      }
    }

    console.log(newBalanceData);

    this.balanceData = newBalanceData;
  }

  isPositive(num: number): boolean {
    if (num > 0) {
      return true;
    }
    return false;
  }
}
