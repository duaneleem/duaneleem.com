import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TestimonialsComponent } from "../components/testimonials/testimonials.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestimonialsComponent
  ],
  exports: [
    TestimonialsComponent
  ]
})
export class SharedModule {}