import { Component, AfterViewChecked } from '@angular/core';
import { GLOBALS } from "../../../shared/globals";
import { portfolioWork_webDev, portfolioWork_mobileDev, portfolioLearning_certifications, portfolioLearning_training } from "../../../shared/data/projects";

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
    arrProjects_webDev = portfolioWork_webDev;

    ngAfterViewChecked() { } // ngOnInit

    featuredProjects =() => {
        let featuredProjectsOnly = [];

        for (let i = 0; i < portfolioWork_webDev.length; i++) {
            if (portfolioWork_webDev[i].featured === true) {
                featuredProjectsOnly.push(portfolioWork_webDev[i]);
            } // if
        } // for
        
        return featuredProjectsOnly;
    }
}

