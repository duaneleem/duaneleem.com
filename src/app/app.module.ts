import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

// Custom Modules
import { ReCaptchaModule } from 'angular2-recaptcha';

// Routing: Hashtag.
// Enable these to use Hashtag routing.
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

// Routing
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from "./footer/footer.component";

// Homepage
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./home/main/main.component";
import { SummaryComponent } from "./home/summary/summary.component";
import { AboutComponent } from "./home/summary/about/about.component";
import { TimelineComponent } from "./home/summary/timeline/timeline.component";
    import { TimelineItemComponent } from "./home/summary/timeline/timeline-item/timeline-item.component";
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';

// Routes
const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "support", loadChildren: "./support/support.module#SupportModule"}
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
    
    /* ------------------------------------------------------------
        Enable the following for Hashtag routing.
    ------------------------------------------------------------ */
    providers: [
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        },
    ]
    
})
export class AppModule {
    
}