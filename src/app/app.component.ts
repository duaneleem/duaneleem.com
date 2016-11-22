import { Component, OnInit } from "@angular/core";

// Global Variables
import { GLOBALS } from "./shared/globals";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
    // Variables from external TS.
    arrGlobals = GLOBALS;
    
    ngOnInit() {
    }
}
