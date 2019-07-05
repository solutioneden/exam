import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-echart-line',
    templateUrl: './echart-line.component.html',
    styleUrls: ['./echart-line.component.scss']
})
export class EchartLineComponent implements OnInit {

    lineOptions;

    constructor() {
    }

    ngOnInit() {
        this.lineOptions = {
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

    }
}
