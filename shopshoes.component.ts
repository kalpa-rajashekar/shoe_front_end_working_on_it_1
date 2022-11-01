import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shoe } from '../model/Shoe';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopshoes',
  templateUrl: './shopshoes.component.html',
  styleUrls: ['./shopshoes.component.css']
})
export class ShopshoesComponent implements OnInit {

  shoes!: Array<Shoe>;
  shoeRecieved: Array<Shoe> = [];
  cartShoes:any
  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getShoe().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartShoes = JSON.parse(data);
    } else {
      this.cartShoes = [];
    }
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response: any) {
    this.shoes = new Array<Shoe>();
    //get books returned by the api call
    this.shoeRecieved = response;
    for (const shoe of this.shoeRecieved) {

      const shoewithRetrievedImageField = new Shoe();
      shoewithRetrievedImageField.id = shoe.id;
      shoewithRetrievedImageField.name = shoe.name;
      
      shoewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' +shoe.picByte;
     
      shoewithRetrievedImageField.price = shoe.price;
      shoewithRetrievedImageField.picByte = shoe.picByte;
      this.shoes.push(shoewithRetrievedImageField);
    }
  }

  addToCart(shoeId: any) {
    //retrieve book from books array using the book id
    let shoe = this.shoes.find(shoe => {
      return shoe.id === +shoeId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(shoe);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    shoe.isAdded = true;
  }

  updateCartData(cartShoes:any) {
    this.cartShoes = cartShoes;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartShoes = [];
    localStorage.clear();
  }

}
