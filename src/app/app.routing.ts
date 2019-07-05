import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './shared/components/layouts/auth-layout/auth-layout.component';
import {AuthGuard} from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
                data: {title: 'Dashboard', breadcrumb: 'DASHBOARD'}
            },
            {
                path: 'tabs',
                loadChildren: () => import('./views/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];

