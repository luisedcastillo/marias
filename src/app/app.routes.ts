import {RouterModule, Routes} from '@angular/router';

import {AboutComponent,
        MainComponent,
        ProductItemComponent,
        SearchMainComponent
    } from './components/index.pages';

const app_routes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product/:id', component: ProductItemComponent },
    { path: 'search/:filter', component: SearchMainComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(app_routes, {useHash: true});
