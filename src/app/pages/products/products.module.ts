import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutes } from '../../config/routes/products.routing';


@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductsRoutes),
  ]
})
export class ProductsModule { }
