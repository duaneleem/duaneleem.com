import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

// Global Variables
import { GLOBALS } from "./shared/globals";

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header";

// Homepage
import { MainComponent } from "./home/main/main.component";
import { SummaryComponent } from "./home/summary/summary.component";
import { AboutComponent } from "./home/summary/about/about.component";
import { TimelineComponent } from "./home/summary/timeline/timeline.component";
    import { TimelineItemComponent } from "./home/summary/timeline/timeline-item/timeline-item.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        
        // Homepage
        MainComponent, 
        SummaryComponent,
        AboutComponent,
        TimelineComponent,
            TimelineItemComponent
    ], // declarations
    imports:      [BrowserModule],
    bootstrap:    [AppComponent],
})
export class AppModule {
    // Variables from external TS.
    arrGlobals = GLOBALS;
}