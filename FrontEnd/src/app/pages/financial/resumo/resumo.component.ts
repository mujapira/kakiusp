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

  Highcharts: typeof Highcharts = Highcharts
  isDarkTheme: boolean = false
  gridColor = this.isDarkTheme ? "#27272A" : "#E4E4E7"
  gridText = this.isDarkTheme ? "#E4E4E7" : "#27272A"

  balanceData: number[] = [
    1000, 1200, 1500, 1800, 2000, 2200, 2300, 2400, 2500, 2600, 2700, 2800,
  ]

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
    tooltip: {},
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
