import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";
import { MainComponent } from "./home/main/main.component";
import { SummaryComponent } from "./home/summary/summary.component";
import { TimelineComponent } from "./home/summary/timeline/timeline.component";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        FooterComponent, 
        MainComponent, 
        SummaryComponent,
        TimelineComponent
    ], // declarations
    imports:      [BrowserModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}