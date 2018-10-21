import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { AppModule } from "../../app.module";
import { SharedModule } from "../../shared/shared.module";

import { HeaderReturnModule } from "../../components/header/Header-Return/header-return.module";

import { PortfolioComponent } from "./portfolio.component";

// Determine Routes
const PORTFOLIO_ROUTES: Routes = [
  { path: "", component: PortfolioComponent }
];

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PORTFOLIO_ROUTES),

    // Shared Modules
    HeaderReturnModule,
    SharedModule
  ]
})

export class PortfolioModule {}