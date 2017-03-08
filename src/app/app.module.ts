import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Custom Modules
import { ReCaptchaModule } from 'angular2-recaptcha';

// Routing: Hashtag.
// Enable these to use Hashtag routing.
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

// Routing
import { RouterModule } from '@angular/router';
import { AppComponents, AppRoutes } from "./app.routes";

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from "./footer/footer.component";

// Homepage
import { HeaderComponent } from "./header";
import { MainComponent } from "./home/main/main.component";
import { SummaryComponent } from "./home/summary/summary.component";
import { AboutComponent } from "./home/summary/about/about.component";
import { TimelineComponent } from "./home/summary/timeline/timeline.component";
    import { TimelineItemComponent } from "./home/summary/timeline/timeline-item/timeline-item.component";
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';

// Support
import { HeaderReturnComponent } from "./header/header-return.component";

@NgModule({
    declarations: [
        AppComponent,
        ...AppComponents,
        
        // Homepage
        HeaderComponent,
        MainComponent, 
        SummaryComponent,
        AboutComponent,
        TimelineComponent,
            TimelineItemComponent,
            TestimonialsComponent,
            PortfolioComponent,
        
        // Support
        HeaderReturnComponent,

        // All other
        FooterComponent
    ], // declarations
    imports: [
        BrowserModule, 
        FormsModule,
        HttpModule,
        JsonpModule,
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