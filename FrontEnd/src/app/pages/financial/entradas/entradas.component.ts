import { balanceData, entryData, financialHistory } from './../../../../fakeData';
import { ThemeService } from "./../../../services/theme.service"
import { Component } from "@angular/core"
import * as Highcharts from "highcharts"
import { Subscription } from "rxjs"

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.css',
})
export class EntradasComponent {
  constructor(private themeService: ThemeService) {}

  private themeChangeSubscription: Subscription = new Subscription();

  highcharts: typeof Highcharts = Highcharts;
  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();
  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  financialHistory = financialHistory;
  descFinancialHistory = financialHistory.slice().sort().reverse();
  balanceData = balanceData;
  entryData = entryData;

  ngOnInit(): void {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe(
      () => {
        this.isDarkTheme = this.themeService.isDarkModeEnabled();
        this.setNewColors();
        this.updateChart();
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

  updateChart(): void {
    this.columnChartOptions = {
      ...this.columnChartOptions,
      legend: {
        ...this.columnChartOptions.legend,
        itemStyle: {
          color: this.gridText,
        },
        itemHoverStyle: {
          color: this.gridText,
        },
      },
      xAxis: {
        ...this.columnChartOptions.xAxis,
        lineColor: this.gridColor,
        gridLineColor: this.gridColor,
        labels: {
          style: {
            color: this.gridText,
          },
        },
      },
      yAxis: {
        ...this.columnChartOptions.yAxis,
        gridLineColor: this.gridColor,
        labels: {
          format: 'R$ {value}',
          style: {
            color: this.gridText,
          },
        },
      },
    };

    this.pizzaChartOptions = {
      ...this.pizzaChartOptions,
      legend: {
        ...this.pizzaChartOptions.legend,
        itemStyle: {
          color: this.gridText,
        },
        itemHoverStyle: {
          color: this.gridText,
        },
      },
    };
  }

  columnChartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: `transparent`,
      borderWidth: 1,
      borderColor: 'transparent',
      type: 'column'
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
        'Mensalidades',
        'DPs',
        'Prova Sub',
        'Cantina',
        'Doações',
        'Eventos',
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
        data: this.entryData,
        type: 'column',

      },
    ],
  };

  pizzaChartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: `transparent`,
      borderWidth: 1,
      borderColor: 'transparent',
      type: 'pie'
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
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: 20,
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: 'Entradas',
        // colors: ['#AFF', '#FFA', '#FAB', '#BFA', '#BBF', '#DFF'],
        colors: ['#973BE7', '#8639CA', '#A345F5', '#702FA8', '#592686', '#431C64'],
        data: [
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
        ],
        type: 'pie',
      },
    ],
  };
}
