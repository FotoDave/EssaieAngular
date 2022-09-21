import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Array<any> | undefined
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id:1, name:"Computer", price:1000},
      {id:2, name:"Print", price:350},
      {id:3, name:"Smart-phone", price:850}
    ];
  }

}
