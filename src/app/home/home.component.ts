import { Component, OnInit } from "@angular/core";

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
    `
})

export class HomeComponent implements OnInit {
    ngOnInit() {
    }
}
