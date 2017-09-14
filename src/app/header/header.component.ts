import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { GLOBALS } from "../shared/globals";

import { HeaderSocialIncludeComponent } from "./header.social.include.component";

@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
    styles: [`

    `]
})

export class HeaderComponent {
    // Logo Configuration
    arrGlobals = GLOBALS;

    constructor() { }
      
}
