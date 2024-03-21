import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
   title = 'Alimento para perros';
   descriptions = ['Primera marca. Calidad y mejor precio'];
   price = 1500;
   stock = 10;
}
