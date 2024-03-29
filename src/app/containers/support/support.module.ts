import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppModule } from "../../app.module";

// Required for form
import { FormsModule  } from '@angular/forms';

import { HeaderReturnModule } from "../../components/header/Header-Return/header-return.module";

import { SupportComponent } from "./support.component";

// Determine Routes
const SUPPORT_ROUTES: Routes = [
  { path: "", component: SupportComponent }
];

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
      HttpClientModule,
      CommonModule,
      FormsModule,

      RouterModule.forChild(SUPPORT_ROUTES),

      // Shared Modules
      HeaderReturnModule
  ]
})

export class SupportModule {}