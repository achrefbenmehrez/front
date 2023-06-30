import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { CommonService } from 'src/app/core/core.index';
import { routes } from 'src/app/core/helpers/routes';
import { series } from "./data";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  labels: any;
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public routes = routes;
  public annonces: any[] = [];
  commandesPerYear: { [year: number]: number } = {};
  reclamationsPerYear: { [year: number]: number } = {};
  retoursPerYear: { [year: number]: number } = {};
  topProducts: { [name: string]: number } = {};
  @ViewChild("chart")
  chart!: ChartComponent;
  public Linechart: Partial<ChartOptions> | any;
  public Areachart: Partial<ChartOptions> | any;
  public ColumnCharts: Partial<ChartOptions> | any;
  public StackedCharts: Partial<ChartOptions> | any;
  public BarCharts: Partial<ChartOptions> | any;
  public MixedChart: Partial<ChartOptions> | any;
  public DonutChart: Partial<ChartOptions> | any;
  public RadialChart: Partial<ChartOptions> | any;
  public PieChart: Partial<ChartOptions> | any;
  public DistributedChart: Partial<ChartOptions> | any;

  private getTableData(): void {
    this.http.get('http://localhost:8089/api/annonces').subscribe(
      (data: any) => {
        this.annonces = data;
      },
      error => {
        console.error('Error fetching annonce data:', error);
      }
    );
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getTableData();
    this.fetchCommandesPerYear();
    this.fetchReclamationsPerYear();
    this.fetchRetoursPerYear();
    this.fetchTopProducts();
  }

  fetchCommandesPerYear() {
    const token = localStorage.getItem('token');
    const authHeader = 'Bearer ' + token;

    this.http.get<{ [year: number]: number }>('http://localhost:8089/api/commandes/per-year', { headers: { Authorization: authHeader } })
      .subscribe(data => {
        this.commandesPerYear = data;
        this.updateBarChart();
      });

    this.BarCharts = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      }
    };
  }

  fetchReclamationsPerYear() {
    const token = localStorage.getItem('token');
    const authHeader = 'Bearer ' + token;

    this.http.get<{ [year: number]: number }>('http://localhost:8089/api/reclamations/per-year', { headers: { Authorization: authHeader } })
      .subscribe(data => {
        this.reclamationsPerYear = data;
        this.updateAreaChart();
      });

    this.Areachart = {
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  fetchRetoursPerYear() {
    const token = localStorage.getItem('token');
    const authHeader = 'Bearer ' + token;

    this.http.get<{ [year: number]: number }>('http://localhost:8089/api/Retours/per-year', { headers: { Authorization: authHeader } })
      .subscribe(data => {
        this.retoursPerYear = data;
        this.updatePieChart();
      });

    this.PieChart = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  fetchTopProducts() {
    const token = localStorage.getItem('token');
    const authHeader = 'Bearer ' + token;

    this.http.get<{ [year: number]: number }>('http://localhost:8089/api/products/top4', { headers: { Authorization: authHeader } })
      .subscribe(data => {
        this.topProducts = data;
        this.updateDistributedChart();
      });

    this.DistributedChart = {
      series: [
        {
          name: "distibuted",
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"]
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }

  updateBarChart() {
    this.BarCharts = {
      series: [
        {
          name: "Commandes",
          data: Object.values(this.commandesPerYear)
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: Object.keys(this.commandesPerYear)
      }
    };
  }

  updateAreaChart() {
    this.Areachart = {
      series: [
        {
          name: "Reclamations",
          data: Object.values(this.reclamationsPerYear)
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: Object.keys(this.reclamationsPerYear)
      }
    };
  }

  updatePieChart() {
    this.PieChart = {
      series: Object.values(this.retoursPerYear),
      chart: {
        width: 380,
        type: "pie"
      },
      labels: Object.keys(this.retoursPerYear),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  updateDistributedChart() {
    this.DistributedChart = {
      series: [
        {
          name: "Nombre de commandes",
          data: Object.values(this.topProducts)
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: Object.keys(this.topProducts),
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }
}
