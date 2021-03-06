import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPricingComponent } from './list-pricing/list-pricing.component';
import { PricingRoutes } from 'src/app/config/routes/pricing.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListPricingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PricingRoutes),
  ]
})
export class PricingModule { }
