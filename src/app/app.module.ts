import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Routing
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { RouterModule } from '@angular/router';
import { AppComponents, AppRoutes } from "./app.routes";

// Global Variables
import { GLOBALS } from "./shared/globals";

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer/footer.component";

// Homepage
import { MainComponent } from "./home/main/main.component";
import { SummaryComponent } from "./home/summary/summary.component";
import { AboutComponent } from "./home/summary/about/about.component";
import { TimelineComponent } from "./home/summary/timeline/timeline.component";
    import { TimelineItemComponent } from "./home/summary/timeline/timeline-item/timeline-item.component";
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';

@NgModule({
    declarations: [
        AppComponent,
        ...AppComponents,

        HeaderComponent,
        FooterComponent,
        
        // Homepage
        MainComponent, 
        SummaryComponent,
        AboutComponent,
        TimelineComponent,
            TimelineItemComponent,
            TestimonialsComponent,
            PortfolioComponent
    ], // declarations
    imports: [
        BrowserModule, 
        FormsModule,
        RouterModule,
        RouterModule.forRoot(AppRoutes)
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]
})
export class AppModule {
    // Variables from external TS.
    arrGlobals = GLOBALS;
}