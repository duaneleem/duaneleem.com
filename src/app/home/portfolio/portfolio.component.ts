import { Component, AfterViewInit } from '@angular/core';
declare var $:any; // Enables jQuery

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
        // Moves modal to #modal-section
        // $(".modal").appendTo("#modal-section");
    }

}
