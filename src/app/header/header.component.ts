import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { GLOBALS } from "../shared/globals";

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {
    // Logo Configuration
    arrGlobals = GLOBALS;

    ngOnInit() {
        /* =========================================================
            One Page Navigation | Options
        ========================================================= */
        jQuery('#topMain').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            filter: ':not(.external)',
            easing: 'easeInOutExpo'
        });
    } // ngOnInit()
}
