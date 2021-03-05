import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/core/page-not-found/page-not-found.component';
import { SessionLayoutComponent } from 'src/app/layouts/session-layout/session-layout.component';
import { AppLayoutComponent } from '../../layouts/app-layout/app-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren : ()=> import('../../pages/index/index.module').then(m=>m.IndexModule)
            }
        ]
    },
    {
        path: '',
        component: SessionLayoutComponent,
    },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' }

];