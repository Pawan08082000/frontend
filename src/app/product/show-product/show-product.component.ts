import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  products;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.showProduct().subscribe(
      (data) => {
       this.products = data
      },
      (err) => {
          console.log(err)
      }
    )
  }

}
