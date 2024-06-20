import { CurrencyPipe } from '@angular/common';
import { balanceData, financialHistory } from './../../../../fakeData';
import { ThemeService } from "./../../../services/theme.service"
import { Component } from "@angular/core"
import * as Highcharts from "highcharts"
import { Subscription } from "rxjs"

@Component({
  selector: "app-resumo",
  templateUrl: "./resumo.component.html",
  providers: [CurrencyPipe]
})
export class ResumoComponent {
  constructor(private themeService: ThemeService, private currencyPipe: CurrencyPipe) {}

  private themeChangeSubscription: Subscription = new Subscription()

  highcharts: typeof Highcharts = Highcharts
  isDarkTheme: boolean = this.themeService.isDarkModeEnabled()
  gridColor = this.isDarkTheme ? "#27272A" : "#E4E4E7"
  gridText = this.isDarkTheme ? "#E4E4E7" : "#27272A"

  financialHistory = financialHistory.slice().sort().reverse().slice(0,8)
  pendingfinancialHistoryItems = financialHistory.slice().sort().reverse().filter((item) => item.isPending).slice(0,8)

  balanceData = balanceData;

  ngOnInit(): void {
    this.themeChangeSubscription = this.themeService.themeChange$.subscribe(
      () => {
        this.isDarkTheme = this.themeService.isDarkModeEnabled()
        this.setNewColors()
        this.updateChart()
      }
    )
    this.monthlyEntriesValue()
    this.monthlyOutsValue()
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

  monthlyBalance: number = balanceData[balanceData.length-1]
  monthlyEntries: number = 0;
  monthlyEntriesValue(){
    for(var i of this.financialHistory){
      let date = i.metadata.date[i.metadata.date.length-2] + i.metadata.date[i.metadata.date.length-1]
      if (i.isEntry && date == "12"){
        this.monthlyEntries += i.value
      }
    }
  }

  monthlyOuts: number = 0;
  monthlyOutsValue(){
    for(var i of this.financialHistory){
      let date = i.metadata.date[i.metadata.date.length-2] + i.metadata.date[i.metadata.date.length-1]
      if (!i.isEntry && date == "12"){
        this.monthlyOuts -= i.value
      }
    }
  }

  isPositive(num: number): boolean{
    if(num > 0){
      return true
    }
    return false
  }

}
