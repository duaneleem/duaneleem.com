import { Component, AfterViewChecked } from '@angular/core';
import { GLOBALS } from "../../shared/globals";
import { projects_web_dev } from "../../shared/data/projects";

declare var $:any; // Enables jQuery

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styles: [`
        .item-box-desc > h4 {
            font-size: smaller;
        }

        /* Included CSS is autogenerating additional padding-top.  This
            will fix it. */
        .modal {
            padding-top: 0px;
        }
    `]
})
export class PortfolioComponent implements AfterViewChecked {
    arrGlobals = GLOBALS;
    arrProjects = projects_web_dev;

    ngAfterViewChecked() {
        
    } // ngOnInit
}

