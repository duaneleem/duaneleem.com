import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
        <app-main>Loading: Section Main...</app-main>

        <app-summary>Loading: Summary...</app-summary>

        <app-portfolio>Loading: Portfolio...</app-portfolio>

        <app-testimonials>Loading: Testimonials...</app-testimonials>
    `
})

export class HomeComponent implements OnInit {
    ngOnInit() {
    }
}
