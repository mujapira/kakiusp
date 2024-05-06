import { ThemeService } from "./../../../services/theme.service"
import { Component } from "@angular/core"
import * as Highcharts from "highcharts"
import { Subscription } from "rxjs"

interface IFinancialHistory {
  description: string
  date: string
  value: number
  isEntry: boolean
}

@Component({
  selector: "app-resumo",
  templateUrl: "./resumo.component.html",
})
export class ResumoComponent {
  constructor(private themeService: ThemeService) {}

  private themeChangeSubscription: Subscription = new Subscription()

  Highcharts: typeof Highcharts = Highcharts
  isDarkTheme: boolean = this.themeService.isDarkModeEnabled()
  gridColor = this.isDarkTheme ? "#27272A" : "#E4E4E7"
  gridText = this.isDarkTheme ? "#E4E4E7" : "#27272A"

  financialHistory: IFinancialHistory[] = [
    {
      description: 'Matrícula 12345',
      date: '2024-05-03',
      value: 500.00,
      isEntry: true
    },
    {
      description: 'Matrícula 67890',
      date: '2024-05-04',
      value: 200.00,
      isEntry: false
    },
    {
      description: 'Matrícula 24680',
      date: '2024-05-05',
      value: 300.00,
      isEntry: true
    },
    {
      description: 'Matrícula 13579',
      date: '2024-05-06',
      value: 400.00,
      isEntry: false
    },
    {
      description: 'Matrícula 11223',
      date: '2024-05-07',
      value: 700.00,
      isEntry: true
    },
    {
      description: 'Matrícula 44556',
      date: '2024-05-08',
      value: 100.00,
      isEntry: false
    },
    {
      description: 'Matrícula 77889',
      date: '2024-05-09',
      value: 600.00,
      isEntry: true
    },
    {
      description: 'Matrícula 99001',
      date: '2024-05-10',
      value: 150.00,
      isEntry: false
    },
    {
      description: 'Matrícula 22334',
      date: '2024-05-11',
      value: 800.00,
      isEntry: true
    },
    {
      description: 'Matrícula 55667',
      date: '2024-05-12',
      value: 250.00,
      isEntry: false
    },
    {
      description: 'Matrícula 22334',
      date: '2024-05-11',
      value: 800.00,
      isEntry: true
    },
    {
      description: 'Matrícula 55667',
      date: '2024-05-12',
      value: 250.00,
      isEntry: false
    },
    {
      description: 'Matrícula 22334',
      date: '2024-05-11',
      value: 800.00,
      isEntry: true
    },
    {
      description: 'Matrícula 55667',
      date: '2024-05-12',
      value: 250.00,
      isEntry: false
    },
    {
      description: 'Matrícula 22334',
      date: '2024-05-11',
      value: 800.00,
      isEntry: true
    },
    {
      description: 'Matrícula 55667',
      date: '2024-05-12',
      value: 250.00,
      isEntry: false
    }
  ];

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
