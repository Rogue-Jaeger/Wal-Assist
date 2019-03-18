import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
enableTab:any;
showQuantity:any;
quant:any;
  constructor() {
    console.log("who dat");
    this.showQuantity=false;
    //this.quant=2;
    this.quant={"Amul Milk":10,"Almond Oil":34};
//this.enableTab = true;
   }
}
