import { Component } from "@angular/core";
import { SeoService } from "../../shared/seo.service";

import { GLOBALS } from "../../shared/globals";
import { portfolioWork_webDev, portfolioLearning } from "../../shared/data/projects";

declare var $:any; // Enables jQuery

@Component({
    selector: 'duaneleem-portfolio',
    templateUrl: "./portfolio.component.html",
    styleUrls: ["./portfolio.component.css"],
    providers: [SeoService]
})

export class PortfolioComponent {
    arrGlobals = GLOBALS;
    arrProjects_webDev = portfolioWork_webDev;
    arrProjects_certifications = portfolioLearning;
    
    constructor(
        private seoService: SeoService
    ) {
        seoService.setSeoTags({
          // Main
          main_title: "Portfolio | Duane Leem",
          main_description: "I can provide remote Customer Support for issues that you may have. Visit this page to receive remote assistance.",
  
          // OpenGraph
          og_locale: "en_US",
          og_type: "website",
          og_url: "https://duaneleem.com/portfolio",
          og_site_name: "Duane Leem",
          og_image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/opengraph.jpg"
        }); // seoService.setSeoTags()
    } // constructor()
}
