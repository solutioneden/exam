import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FullWidthCardTabComponent} from './full-width-card-tab/full-width-card-tab.component';

const routes: Routes = [
    {
        path: '',
        component: FullWidthCardTabComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageLayoutsRoutingModule {
}
