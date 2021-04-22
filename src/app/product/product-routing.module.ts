import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProductComponent } from './show-product/show-product.component';



const routes: Routes = [
  
      {
        path: 'show',
        component: ShowProductComponent,
        // canActivate: [LoggedInAuthGuard],
      },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,MatCardModule]
})
export class ProductRoutingModule { }
