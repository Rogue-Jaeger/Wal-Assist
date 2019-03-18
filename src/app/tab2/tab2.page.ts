import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  items:any;
  totalPrice:any;
  price:any;
  data:any;
  itemPriceArray:any;
  Quantity:Array<number>;
  hello:any;
  text:any;
  constructor(private barcodeScanner: BarcodeScanner, public MyServiceService:MyServiceService) {
  this.itemPriceArray={"Milk":5,"Soap":10,"Fiama Gel":20, "Almond Oil":20};
  this.items=[];
  this.totalPrice=0;
  //alert("hi");
}



  
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      //var barcodeData;
      //barcodeData = JSON.stringify(barcodeDataa);
      //alert(JSON.stringify(barcodeData));
      this.text = JSON.stringify(barcodeData);
      this.text = JSON.parse(this.text);
      this.text = this.text.text;

      //alert(this.text);
      this.data = this.text;
      this.price = this.itemPriceArray[this.data];
      var flag = false;
      var index = 0;

      for(var i=0; i<this.items.length; i++){
        if(this.items[i].indexOf(this.data) > -1) {
          flag=true;
          index=i;
          // this.hello = this.items[i];
        }
      }


      if(flag){
        this.items[index][1]++;
        //this.items[index][2] += this.price;
        //this.totalPrice+=this.price;
        
      }
      else{
        this.items.push([this.data,1,this.price]);
      }
      this.MyServiceService.quant[this.data]--;
      alert("quantity "+this.MyServiceService.quant[this.data]);

      this.totalPrice = this.totalPrice + this.price;

    }).catch(err => {
        console.log('Error', err);
    });
  }



  delete(i:any)
  {
    
    this.totalPrice = this.totalPrice - this.items[i][2];
    this.items.splice(i,1);
  }
  
}






