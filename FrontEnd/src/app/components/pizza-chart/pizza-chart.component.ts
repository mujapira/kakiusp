import { Component, Input } from '@angular/core';
import * as Highcharts from "highcharts"
import { ThemeService } from '../../services/theme.service';
import { Subscription } from "rxjs"

@Component({
  selector: 'app-pizza-chart',
  templateUrl: './pizza-chart.component.html',
})
export class PizzaChartComponent {
  @Input() title!: string;
  @Input() mainColor!: string[];
  @Input() data!: Object[];

  constructor(private themeService: ThemeService) {}

  private themeChangeSubscription: Subscription = new Subscription();

  highcharts: typeof Highcharts = Highcharts;
  isDarkTheme: boolean = this.themeService.isDarkModeEnabled();

  gridColor = this.isDarkTheme ? '#27272A' : '#E4E4E7';
  gridText = this.isDarkTheme ? '#E4E4E7' : '#27272A';

  pizzaChartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.initializePizzaChartOptions();
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

  initializePizzaChartOptions(): void {
    this.pizzaChartOptions = {
      chart: {
        backgroundColor: `transparent`,
        borderWidth: 1,
        borderColor: 'transparent',
        type: 'pie'
      },
      colors: [this.mainColor[0]],
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
            style: {
              color: this.gridText,
              textOutline: "none"
            }
          },

          showInLegend: true
        }
      },
      series: [
        {
          name: this.title,
          colors: this.mainColor,
          data: this.data,
          type: 'pie',
        },
      ],
    };
  }

  updateChart(): void {
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
      plotOptions: {
        ...this.pizzaChartOptions.plotOptions,
        pie: {
          ...this.pizzaChartOptions.plotOptions?.pie,
          dataLabels: {
            ...this.pizzaChartOptions.plotOptions?.pie?.dataLabels,
            style: {
              color: this.gridText,
              textOutline: "none"
            }
          },
        }
      },
    };
  }

}
