import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

// Global Variables
import { GLOBALS } from "../globals";

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";

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
        FooterComponent,
        
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
export class AppModule {}