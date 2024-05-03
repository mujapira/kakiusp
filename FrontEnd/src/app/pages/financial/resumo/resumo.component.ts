import { Component } from "@angular/core"
import * as Highcharts from "highcharts"

@Component({
  selector: "app-resumo",
  templateUrl: "./resumo.component.html",
})
export class ResumoComponent {
  Highcharts: typeof Highcharts = Highcharts

  balanceData: number[] = [
    1000, 1200, 1500, 1800, 2000, 2200, 2300, 2400, 2500, 2600, 2700, 2800,
  ];

  chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: "#F4F4F5",
      borderWidth: 1,
      borderColor: "transparent",
      type: 'line',
    },
    colors: ['#7E22CE'],
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    },
    yAxis: {
      title: {
        text: '',
      },
        labels: {
          format: 'R$ {value}'
      },
    },
    series: [
      {
        name: 'Balanço',
        data: this.balanceData,
        type: 'line',
      }
    ]
  };
}
