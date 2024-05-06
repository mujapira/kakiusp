import { balanceData, financialHistory } from './../../../../fakeData';
import { ThemeService } from "./../../../services/theme.service"
import { Component } from "@angular/core"
import * as Highcharts from "highcharts"
import { Subscription } from "rxjs"

@Component({
  selector: "app-resumo",
  templateUrl: "./resumo.component.html",
})
export class ResumoComponent {
  constructor(private themeService: ThemeService) {}

  private themeChangeSubscription: Subscription = new Subscription()

  highcharts: typeof Highcharts = Highcharts
  isDarkTheme: boolean = this.themeService.isDarkModeEnabled()
  gridColor = this.isDarkTheme ? "#27272A" : "#E4E4E7"
  gridText = this.isDarkTheme ? "#E4E4E7" : "#27272A"

  financialHistory = financialHistory
  balanceData = balanceData;

  ngOnInit(): void {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe(
      () => {
        this.isDarkTheme = this.themeService.isDarkModeEnabled()
        this.setNewColors()
        this.updateChart()
      }
    )
  }

  setNewColors(): void {
    this.gridColor = this.isDarkTheme ? "#27272A" : "#E4E4E7"
    this.gridText = this.isDarkTheme ? "#E4E4E7" : "#27272A"
  }

  ngOnDestroy(): void {
    this.themeChangeSubscription.unsubscribe()
  }

  updateChart(): void {
    this.chartOptions = {
      ...this.chartOptions,
      legend: {
        ...this.chartOptions.legend,
        itemStyle: {
          color: this.gridText,
        },
        itemHoverStyle: {
          color: this.gridText,
        },
      },
      xAxis: {
        ...this.chartOptions.xAxis,
        lineColor: this.gridColor,
        gridLineColor: this.gridColor,
        labels: {
          style: {
            color: this.gridText,
          },
        },
      },
      yAxis: {
        ...this.chartOptions.yAxis,
        gridLineColor: this.gridColor,
        labels: {
          format: "R$ {value}",
          style: {
            color: this.gridText,
          },
        },
      },
    }
  }

  chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: `transparent`,
      borderWidth: 1,
      borderColor: "transparent",
      type: "line",
    },
    colors: ["#7E22CE"],
    legend: {
      enabled: true,
      itemStyle: {
        color: this.gridText,
        fontWeight: "medium",
        fontFamily: "Inter",
      },
      itemHoverStyle: {
        color: this.gridText,
      },
    },
    title: {
      text: "",
    },
    xAxis: {
      lineColor: this.gridColor,
      gridLineColor: this.gridColor,
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      labels: {
        style: {
          color: this.gridText,
          fontWeight: "medium",
          fontFamily: "Inter",
        },
      },
    },
    yAxis: {
      gridLineColor: this.gridColor,
      title: {
        text: "",
      },
      labels: {
        format: "R$ {value}",
        style: {
          color: this.gridText,
          fontWeight: "medium",
          fontFamily: "Inter",
        },
      },
    },
    series: [
      {
        name: "Balanço",
        data: this.balanceData,
        type: "line",
      },
    ],
  }
}
