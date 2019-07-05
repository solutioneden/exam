import {
    Component,
    OnInit,
    AfterViewInit
} from '@angular/core';
import {egretAnimations} from 'app/shared/animations/egret-animations';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.scss'],
    animations: egretAnimations
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
    barOptions = {
        title: {
            text: 'Summary'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['Sales', 'Spend', 'ROI']
        },
        xAxis: [
            {
                type: 'category',
                data: ['Plan 2019 High', 'Plan 2019 Low'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'GBP £',
                min: 0,
                max: 1.5,
                interval: 0.5,
                axisLabel: {
                    formatter: '{value}M'
                }
            },
            {
                type: 'value',
                name: 'ROI',
                min: 0,
                max: 4.5,
                interval: 1.5,
                axisLabel: {
                    formatter: '{value}M'
                }
            }
        ],
        series: [
            {
                name: 'Sales',
                type: 'bar',
                data: [1.2, 0.7]
            },
            {
                name: 'Spend',
                type: 'bar',
                data: [1.4, 1.0]
            },
            {
                name: 'ROI',
                type: 'line',
                yAxisIndex: 1,
                data: [4.3, 4.5]
            }
        ]
    };

    lineOptions = {
        title: {
            text: 'sales',
        },
        xAxis: {
            type: 'category',
            data: ['30 Jun 2019', '7 Jul 2019', '14 Jul 2019', '21 Jul 2019', '28 Jul 2019', '4 Aug 2019', '11 Aug 2019',
                '18 Aug 2019', '25 Aug 2019', '1 Sep 2019', '8 Sep 2019', '15 Sep 2019']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [700000, 1000000, 800000, 900000, 1100000, 1200000, 1500000, 1300000, 1400000, 1800000, 1600000, 1700000, 1900000],
            type: 'line'
        }]
    };

    constructor() {
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
    }
}
