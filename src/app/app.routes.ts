import { HomeComponent } from "./home/home.component";
import { SupportComponent } from "./support/support.component";

export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "support", component: SupportComponent }
];
 
export const AppComponents: any = [
    HomeComponent,
    SupportComponent
];