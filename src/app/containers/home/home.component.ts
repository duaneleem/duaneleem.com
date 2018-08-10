import { Component, OnInit } from "@angular/core";
import { SeoService } from "../../shared/seo.service";

@Component({
    selector: 'app-home',
    template: `
        <!-- ===========================================================================================
            Header
        =========================================================================================== -->
        <app-header>Loading Header...</app-header>

        
        <!-- ===========================================================================================
            Contents
        =========================================================================================== -->
        <div id="wrapper">
            <app-main>Loading: Section Main...</app-main>

            <app-summary>Loading: Summary...</app-summary>

            <app-portfolio>Loading: Portfolio...</app-portfolio>

            <app-testimonials>Loading: Testimonials...</app-testimonials>
        </div><!-- /wrapper -->
    `,
    providers: [SeoService]
})

export class HomeComponent implements OnInit {
    constructor(
        private seoService: SeoService
    ) {
        seoService.setSeoTags({
          // Main
          main_title: "Duane Leem | Software Engineer",
          main_description: "Duane is a LAMP / MEAN Developer, Certified Project Management Professional, and has a Master's Degree in Information Technology Management.",
  
          // OpenGraph
          og_locale: "en_US",
          og_type: "website",
          og_url: "https://www.duaneleem.com",
          og_site_name: "Duane Leem",
          og_image: "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/opengraph.jpg"
        });
    } // constructor()
    
    ngOnInit() { }
}
