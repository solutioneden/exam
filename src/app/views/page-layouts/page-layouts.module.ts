import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageLayoutsRoutingModule} from './page-layouts-routing.module';
import {SharedDirectivesModule} from 'app/shared/directives/shared-directives.module';
import {SharedMaterialModule} from 'app/shared/shared-material.module';
import {SharedComponentsModule} from 'app/shared/components/shared-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FullWidthCardTabComponent} from './full-width-card-tab/full-width-card-tab.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [FullWidthCardTabComponent],
    imports: [
        SharedMaterialModule,
        SharedDirectivesModule,
        SharedComponentsModule,
        FlexLayoutModule,
        CommonModule,
        PerfectScrollbarModule,
        PageLayoutsRoutingModule,
        DragDropModule
    ]
})
export class PageLayoutsModule {
}
