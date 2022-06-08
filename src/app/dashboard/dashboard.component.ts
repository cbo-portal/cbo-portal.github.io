import { Component, OnInit, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  ngOnInit() {
    
  }
  //Connects Pie Chart
  public connectsPieChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public connectsPieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Completed' ], [ 'Delayed' ], 'Missed' ],
    datasets: [ {
      data: [ 600, 200, 200 ],
      backgroundColor: 	['#AFEE66', '#33FFE3', '#FCFF33'],
      hoverBackgroundColor: ['#AFEE66', '#33FFE3', '#FCFF33'] 
    } ]
  };
  public connectsPieChartType: ChartType = 'pie';
  public connectsPieChartPlugins = [ DatalabelsPlugin ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLabels(): void {
    const words = [ 'hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny' ];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.connectsPieChartData.labels = new Array(3).map(_ => randomWord());

    this.chart?.update();
  }

  addSlice(): void {
    if (this.connectsPieChartData.labels) {
      this.connectsPieChartData.labels.push([ 'Line 1', 'Line 2', 'Line 3' ]);
    }

    this.connectsPieChartData.datasets[0].data.push(400);

    this.chart?.update();
  }

  removeSlice(): void {
    if (this.connectsPieChartData.labels) {
      this.connectsPieChartData.labels.pop();
    }

    this.connectsPieChartData.datasets[0].data.pop();

    this.chart?.update();
  }

  changeLegendPosition(): void {
    if (this.connectsPieChartOptions?.plugins?.legend) {
      this.connectsPieChartOptions.plugins.legend.position = this.connectsPieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
    }

    this.chart?.render();
  }

  toggleLegend(): void {
    if (this.connectsPieChartOptions?.plugins?.legend) {
      this.connectsPieChartOptions.plugins.legend.display = !this.connectsPieChartOptions.plugins.legend.display;
    }

    this.chart?.render();
  }

  //Technology Bar Chart
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'center',
        align: 'center'
      }
    }
  };
  public barChartColors = [
    { backgroundColor: 'red' }
  ]
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DatalabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'VMWare', 'DevOps', 'Cloud', 'Testing', 'Database', 'Citrix' ],
    datasets: [
      { data: [ 10, 17, 12, 10, 4, 6, 3 ], label: 'Connects', backgroundColor: '#AFEE66', hoverBackgroundColor: ['#AFEE66']  }
    ]
  };

  // events
  public barChartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public barChartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  //Status Pie Chart
  public statusPieChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public statusPieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Joined', 'Dropped off' ],
    datasets: [ {
      data: [ 30, 5 ],
      backgroundColor: 	['#AFEE66', '#33FFE3', '#FCFF33'],
      hoverBackgroundColor: ['#AFEE66', '#33FFE3', '#FCFF33'] 
    } ]
  };
  public statusPieChartType: ChartType = 'pie';
  public statusPieChartPlugins = [ DatalabelsPlugin ];

}
