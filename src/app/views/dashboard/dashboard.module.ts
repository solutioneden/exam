import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule, MatRadioModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChartsModule} from 'ng2-charts';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {SharedPipesModule} from 'app/shared/pipes/shared-pipes.module';

import {DashboardRoutes} from './dashboard.routing';
import {AnalyticsComponent} from './analytics/analytics.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatButtonModule,
        MatChipsModule,
        MatListModule,
        MatTabsModule,
        MatTableModule,
        MatGridListModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        FlexLayoutModule,
        ChartsModule,
        NgxEchartsModule,
        NgxDatatableModule,
        SharedPipesModule,
        RouterModule.forChild(DashboardRoutes)
    ],
    declarations: [AnalyticsComponent],
    exports: []
})
export class DashboardModule {

}
