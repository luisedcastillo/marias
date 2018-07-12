import {RouterModule, Routes} from "@angular/router";

import {AboutComponent, 
        MainComponent, 
        ProductItemComponent
    } from "./components/index.pages";

const app_routes: Routes = [
    { path: "", component: MainComponent },
    { path: "about", component:AboutComponent },
    { path: "product", component:ProductItemComponent },
    { path: "**", pathMatch: "full", redirectTo: "" }
];

export const AppRouting = RouterModule.forRoot(app_routes);