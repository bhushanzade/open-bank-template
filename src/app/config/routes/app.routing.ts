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
                loadChildren: () => import('../../pages/index/index.module').then(m => m.IndexModule)
            },
            {
                path: 'pricing',
                loadChildren: () => import('../../pages/pricing/pricing.module').then(m => m.PricingModule)
            },
            {
                path: 'products',
                loadChildren: () => import('../../pages/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'solutions',
                loadChildren: () => import('../../pages/solutions/solutions.module').then(m => m.SolutionsModule)
            }
        ]
    },
    {
        path: '',
        component: SessionLayoutComponent,
        children: [
            {
                path: 'session',
                loadChildren: () => import('../../pages/session/session.module').then(m => m.SessionModule)
            }
        ]
    },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' }

];