import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

// Custom Modules
import { ReCaptchaModule } from 'angular2-recaptcha';

// Routing
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from "./components/footer/footer.component";

// Homepage
import { HomeComponent } from "./containers/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./containers/home/main/main.component";
import { SummaryComponent } from "./containers/home/summary/summary.component";
import { AboutComponent } from "./containers/home/summary/about/about.component";
import { TimelineComponent } from "./containers/home/summary/timeline/timeline.component";
    import { TimelineItemComponent } from "./containers/home/summary/timeline/timeline-item/timeline-item.component";
import { TestimonialsComponent } from './containers/home/testimonials/testimonials.component';
import { PortfolioComponent } from "./containers/home/portfolio/portfolio.component";

// Routes
const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "support", loadChildren: "./containers/support/support.module#SupportModule"},
    { path: "portfolio", loadChildren: "./containers/portfolio/portfolio.module#PortfolioModule"}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        
        // Homepage
        HeaderComponent,
        MainComponent, 
        SummaryComponent,
        AboutComponent,
        TimelineComponent,
            TimelineItemComponent,
            TestimonialsComponent,
            PortfolioComponent,

        // All other
        FooterComponent
    ], // declarations
    imports: [
        BrowserModule, 
        FormsModule,
        HttpClientModule,
        RouterModule,
        RouterModule.forRoot(AppRoutes),
        ReCaptchaModule
    ],
    bootstrap: [AppComponent],
    providers: []
    
})
export class AppModule {
    
}