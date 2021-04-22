import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowProductComponent } from './show-product/show-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [ShowProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
