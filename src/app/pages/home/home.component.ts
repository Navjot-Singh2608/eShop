import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result: any) => {
      console.log(result);
      this.productList = result.products;
    });
  }

  addItemToCart(productId: number) {
    // this.cartObj.ProductId = productId;
    // this.productService.addToCart(this.cartObj).subscribe((result: any) => {
    //   if (result.result) {
    //     alert('Product Added To Cart');
    //     this.productService.cartAddedSubject.next(true);
    //   }
    // });
  }
}
