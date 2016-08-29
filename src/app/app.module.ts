import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";
import { MainComponent } from "./home/main/main.component";
import { SummaryComponent } from "./home/summary/summary.component";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        FooterComponent, 
        MainComponent, 
        SummaryComponent
    ], // declarations
    imports:      [BrowserModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}