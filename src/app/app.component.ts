import { Component } from "@angular/core";
import {Router, Event, NavigationEnd} from '@angular/router';
import { GLOBALS } from "./shared/globals";

// Google Analytics FN
declare let ga:Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    // Variables from external TS.
    arrGlobals = GLOBALS;
    
    constructor(public router:Router) {
        this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd) {
                    // ga('send', 'pageview', event.urlAfterRedirects);

                    // Updated as of 1/17/2017
                    ga('set', 'page', event.urlAfterRedirects);
                    ga('send', 'pageview');
                }
            }
        ); // this.router.events.subscribe
    } // constructor(public router:Router)
}
