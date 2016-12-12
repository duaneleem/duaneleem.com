import { Component, OnInit } from '@angular/core';
import { TimelineComponent } from "./timeline/timeline.component";
import { AboutComponent } from "./about/about.component";

declare var jQuery:any;

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
