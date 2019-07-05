import {EchartBarComponent} from './echart-bar/echart-bar.component';
import {EchartLineComponent} from './echart-line/echart-line.component';

export const CHART_EXAMPLE_COMPONENT_MAP = {
    'bar': [
        'echart-bar'
    ],
    'line': [
        'echart-line'
    ]
};

export const CHART_EXAMPLE_COMPONENTS = {
    'echart-bar': {
        title: 'Echart Bar',
        component: EchartBarComponent
    },
    'echart-line': {
        title: 'Echart Line',
        component: EchartLineComponent
    },
};

export const CHART_EXAMPLE_COMPONENT_LIST = [
    EchartBarComponent,
    EchartLineComponent,
];
