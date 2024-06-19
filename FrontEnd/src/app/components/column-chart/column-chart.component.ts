import { Component, Input } from '@angular/core';
import * as Highcharts from "highcharts"
import { ThemeService } from '../../services/theme.service';
import { Subscription } from "rxjs"

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
})
export class ColumnChartComponent {
  @Input() title!: string;
  @Input() mainColor!: string[];
  @Input() data!: Object[];
  @Input() categories!: string[];

  constructor(private themeService: ThemeService) {}

  private themeChangeSubscription: Subscription = new Subscription();

  highcharts: typeof Highcharts = Highcharts;
  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();

  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  columnChartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.initializeColumnChartOptions();
    this.updateChart();

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

  initializeColumnChartOptions(): void {
    this.columnChartOptions = {
      chart: {
        backgroundColor: `transparent`,
        borderWidth: 1,
        borderColor: 'transparent',
        type: 'column'
      },
      colors: this.mainColor,
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
        categories: this.categories,
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
          name: this.title,
          data: this.data,
          type: 'column',
        },
      ],
    };
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
  }

}
