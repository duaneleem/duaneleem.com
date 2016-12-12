import { Component, Input } from '@angular/core';
import { GLOBALS } from "../../../shared/globals";

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
    // Variables from external TS.
    private arrGlobals = GLOBALS;
}
