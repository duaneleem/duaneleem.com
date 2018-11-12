import { Component, AfterViewChecked } from '@angular/core';
import { portfolioWork_webDev } from "../../../shared/data/projects";

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
    constructor() {}
    ngAfterViewChecked() { } // ngOnInit

    featuredProjects =() => {
        let featuredProjectsOnly = [];

        for (let i = 0; i < portfolioWork_webDev.length; i++) {
            if (portfolioWork_webDev[i].featured === true) {
                featuredProjectsOnly.push(portfolioWork_webDev[i]);
            } // if
        } // for
        
        return featuredProjectsOnly;
    } // featuredProjects()
}

