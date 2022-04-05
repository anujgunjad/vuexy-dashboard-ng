import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

interface Entry {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('lineChartOne') lineChartOne: ElementRef;
  @ViewChild('lineChartTwo') lineChartTwo: ElementRef;

  gradient: any = null;

  entries: Entry[] = [
    { value: 10, viewValue: 10 },
    { value: 20, viewValue: 20 },
    { value: 30, viewValue: 30 },
  ];

  lineSalesDataOne: ChartData<'line'>;
  lineSalesDataTwo: ChartData<'line'>;

  lineChartOptions: ChartOptions = {
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    animation: {
      duration: 500,
      easing: 'linear',
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  barSalesData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'April', 'May'],
    datasets: [
      {
        backgroundColor: ['#EEF2F8', '#7367f0', '#EEF2F8', '#7367f0'],
        hoverBackgroundColor: '#7367f0',
        barThickness: 20,
        borderRadius: 9,
        data: [50, 116, 141, 96, 115, 96, 115],
      },
    ],
  };

  barChartOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,

    maintainAspectRatio: false,

    animation: {
      duration: 500,
      easing: 'linear',
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  doughnutSalesData: ChartData<'doughnut'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        backgroundColor: [
          '#7367f0',
          '#7367f0',
          '#7367f0',
          '#ff9f43',
          '#7367f0',
        ],
        hoverBackgroundColor: '#7367f0',
        borderWidth: [1, 1, 1, 1, 1],
        data: [10, 50, 25, 70, 40],
      },
    ],
  };

  doughnutChartOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 500,
      easing: 'linear',
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  radarSalesData: ChartData<'radar'> = {
    labels: ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History'],
    datasets: [
      {
        label: 'Student A',
        backgroundColor: '#7367f0',
        data: [65, 75, 70, 80, 60, 80],
      },
      {
        label: 'Student B',
        backgroundColor: '#ff9f43',
        data: [54, 65, 60, 70, 70, 75],
      },
    ],
  };

  radarChartOptions: ChartOptions = {
    elements: {
      point: {
        radius: 4,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    maintainAspectRatio: false,

    animation: {
      duration: 500,
      easing: 'linear',
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  constructor(private _cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    let ctxOne = this.lineChartOne.nativeElement.getContext('2d');
    let gradientOne = ctxOne.createLinearGradient(0, 0, 0, 90);
    gradientOne.addColorStop(0, 'rgb(218,215,251)');
    gradientOne.addColorStop(1, '#fff');

    let ctxTwo = this.lineChartTwo.nativeElement.getContext('2d');
    let gradientTwo = ctxTwo.createLinearGradient(0, 0, 0, 90);
    gradientTwo.addColorStop(0, 'rgb(255,238,221)');
    gradientTwo.addColorStop(1, '#fff');

    this.lineSalesDataOne = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          pointStyle: 'circle',
          fill: true,
          backgroundColor: gradientOne,
          borderColor: '#7367F0',
          data: [100, 116, 99, 141, 115],
          tension: 0.4,
        },
      ],
    };

    this.lineSalesDataTwo = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          pointStyle: 'circle',
          fill: true,
          backgroundColor: gradientTwo,
          borderColor: '#ff9f43',
          data: [100, 116, 99, 141, 115],
          tension: 0.4,
        },
      ],
    };
  }
}
