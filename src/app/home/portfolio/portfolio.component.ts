import { Component, AfterViewInit } from '@angular/core';
declare var $:any; // Enables jQuery

import { GLOBALS } from "../../shared/globals";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {
  private arrGlobals = GLOBALS;

  ngAfterViewInit() {
        // Moves modal to #modal-section
        // $(".modal").appendTo("#modal-section");
    }

}
