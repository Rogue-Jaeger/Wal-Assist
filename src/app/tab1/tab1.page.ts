import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geofence } from '@ionic-native/geofence/ngx';
import { NgStyle } from '@angular/common';
import {MyServiceService} from '../my-service.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  positions: any;
map : any;
firstStore:any;
secondStore:any;
thirdStore:any;
fourthStore:any;
fifthStore:any;
check:any;
fence:any;
currentPos:any;
findDistance:any;
allStores:any;
distanceArray:any;
mapRef:any;
distanceArrayForPlotting:any;
store1:any;
store2:any;
store3:any;
marker1:any;
marker2:any;
marker3:any;
units:any;
arrayOfStores:any;
enableTab2:any;
infowindow1:any;
infowindow2:any;
infowindow3:any;
div1:any;
  constructor(public geo:Geolocation, public Geofence:Geofence,public MyServiceService:MyServiceService) {
this.positions=[];
this.MyServiceService.enableTab = true;
this.div1 = true;



}


  findDistt(lat1:any,lon1:any,lat2:any,lon2:any)
  {
  
              var radlat1 = Math.PI * lat1/180;
              var radlat2 = Math.PI * lat2/180;
              var radlon1 = Math.PI * lon1/180;
              var radlon2 = Math.PI * lon2/180;
              var theta = lon1-lon2;
              var radtheta = Math.PI * theta/180;
              var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
              dist = Math.acos(dist);
              dist = dist * 180/Math.PI;
              dist = dist * 60 * 1.1515;
              dist = Math.round(dist*1000)/1000;
              return dist
      
  }


 addMarker(location,map)
 {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

  
 }
distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}
  

checkkk()
{
  console.log("at leasdt here");
 document.getElementById("value1").nodeValue = "hehe"; 
}
  onMapReady(map) {
    this.allStores=[];

    this.firstStore ={lat: 25.765885284201275, lng: -80.21907806396484};
    this.secondStore = {lat:25.75235628817928, lng:-80.24810737609863};
    this.thirdStore={lat:25.756530739702896, lng:-80.20725196838379};
    this.fourthStore={lat: 25.5279606334916, lng:-80.47690488916282};
    this.fifthStore={lat:25.73226434915643, lng:-80.73212389912635};
    this.arrayOfStores = [this.firstStore,this.secondStore,this.thirdStore,this.fourthStore,this.fifthStore];
    console.log(map.markers);


  
   
  
    google.maps.event.addListener(map, 'click', (event)=> {
      console.log("lat long",event.latLng.lat(),event.latLng.lng());
      // for(var i=0;i<this.arrayOfStores.length;i++)
      // {
      //     if(Math.abs(event.latLng.lat() - this.arrayOfStores[i].lat) < 0.005 || Math.abs(event.latLng.lng() - this.arrayOfStores[i].lng) < 0.005)
      //     {
      //       this.MyServiceService.enableTab = false;
      //       break;
            
      //     }
      // }
      // if(this.marker1)
      // this.marker1.setMap(null);
      // if(this.marker2)
      // this.marker2.setMap(null);
      // if(this.marker3)
      // this.marker3.setMap(null);

     // this.callme();
      console.log("on click");

      this.allStores=[[this.firstStore.lat,this.firstStore.lng],[this.secondStore.lat,this.secondStore.lng],[this.thirdStore.lat,this.thirdStore.lng],[this.fourthStore.lat,this.fourthStore.lng],[this.fifthStore.lat,this.fifthStore.lng]];
        this.currentPos = event.latLng;
        this.distanceArray=[];
    for(var i=0;i<this.allStores.length;i++)
    {
      var value = this.distance(event.latLng.lat(), event.latLng.lng(), this.allStores[i][0], this.allStores[i][1], "K");
      this.distanceArray.push(value);
    }
    //this.distanceArray = this.distanceArray.sort();
    console.log("distance",this.distanceArray);
    this.distanceArrayForPlotting = this.distanceArray.slice();
   // var newArray = oldArray.slice();
    console.log("distance2",this.distanceArrayForPlotting);
    this.distanceArray = this.distanceArray.sort();
    if(this.distanceArray[0] < 1)
    {
      console.log("im here bi");
      this.MyServiceService.enableTab = false;
      alert("You have arrived at Walmart Store."+ "\n"+
      "Billing tab is now enabled. Happy Shopping :)");


    }
    else
    {
      this.MyServiceService.enableTab = true;
    }
    this.store1 = this.distanceArrayForPlotting.indexOf(this.distanceArray[0]);
    this.store2 = this.distanceArrayForPlotting.indexOf(this.distanceArray[1]);
    this.store3 = this.distanceArrayForPlotting.indexOf(this.distanceArray[2]);

    if(this.marker2)
    this.marker2.setMap(null);
    if(this.marker3)
    this.marker3.setMap(null);

      if(true)
      {
        if(this.marker1)
    this.marker1.setMap(null);
     
      this.marker1 = new google.maps.Marker({
        position: this.arrayOfStores[this.store1],
        map: map,
        title: 'first nearest'
      });
      this.marker1.addListener('click', ()=> {

        this.div1=false;
        console.log("marker1");
        this.infowindow1 = new google.maps.InfoWindow({
          content: document.getElementById("content1")
        });
        this.infowindow1.open(map, this.marker1);
      });
    }
      this.marker2 = new google.maps.Marker({
        position: this.arrayOfStores[this.store2],
        map: map,
        title: 'second nearest'
      });
      this.marker3 = new google.maps.Marker({
        position: this.arrayOfStores[this.store3],
        map: map,
        title: 'third nearest'
      });
      // let marker4 = new google.maps.Marker({
      //   position: this.fourthStore,
      //   map: map,
      //   title: 'Hello World!'
      // });
      // let marker5 = new google.maps.Marker({
      //   position: this.fifthStore,
      //   map: map,
      //   title: 'Hello World!'
      // });
      //var content1 = document.getElementById("content1");
//       '<div id=content">'+
//       '<ion-list>'+
//       '<ion-item>'

//         '<ion-label>"lplp"</ion-label>'+
//       '</ion-item>'+
//       '<ion-item>'+
//         '<ion-label>Queue : 2</ion-label>'+
//       '</ion-item>'+
//       '<ion-item>'+
        
//         '<ion-input [(ngModel)]="check" placeholder="Looking for an item?"></ion-input>'+
     
//       '</ion-item>'+
//       '<ion-item>'+
//       '<button ion-button (click)="checkk()" color="primary">Search</button>'+
//         '</ion-item>'+
//     '</ion-list>'+

// '</div> ';

var content2='<div id=content">'+
'<ion-list>'+
'<ion-item>'+
  '<ion-label>"Second Nearest Store"</ion-label>'+
'</ion-item>'+
'<ion-item>'+
  '<ion-label>Queue : 2</ion-label>'+
'</ion-item>'+
'<ion-item>'+
  
  '<ion-input id="value1" [(ngModel)]="check" placeholder="Looking for an item?"></ion-input>'+

'</ion-item>'+
'<ion-item>'+
'<button ion-button (click)="checkk()" color="primary">Search</button>'+
  '</ion-item>'+
'</ion-list>'+

'</div> ';

var content3 = '<div id=content">'+
'<ion-list>'+
'<ion-item>'+
  '<ion-label>"Third Nearest Store"</ion-label>'+
'</ion-item>'+
'<ion-item>'+
  '<ion-label>Queue : 2</ion-label>'+
'</ion-item>'+
'<ion-item>'+
  
  '<ion-input id="value1" placeholder="Looking for an item?"></ion-input>'+

'</ion-item>'+
'<ion-item>'+
'<button ion-button (click)="checkkk()" color="primary">Search</button>'+
  '</ion-item>'+
'</ion-list>'+

'</div> ';



       this.infowindow1 = new google.maps.InfoWindow({
        content: document.getElementById("content1")
      });
      this.infowindow2 = new google.maps.InfoWindow({
        content: content2
      });
      this.infowindow3 = new google.maps.InfoWindow({
        content: content3
      });


    // this.marker1.addListener('click', ()=> {

    //   this.div1=false;
    //   console.log("marker1");
    //   this.infowindow1.open(map, this.marker1);
    // });
    this.marker2.addListener('click', ()=> {
      console.log("marker2");
      this.infowindow2.open(map, this.marker2);
    });
    this.marker3.addListener('click', ()=> {
      console.log("marker3");
      this.infowindow3.open(map, this.marker3);
    });
    // marker4.addListener('click', ()=> {
    //   infowindow.open(map, marker4);
    // });
    // marker5.addListener('click', ()=> {
    //   infowindow.open(map, marker5);
    // });
     
      console.log('here markers', map.markers);


    
      //  alert(event.latLng); 
      // alert(event.latLng.lat()); // in event.latLng  you have the coordinates of click
     

  });
  }


  onIdle(event) {
    console.log('map', event.target);
  }
  onMarkerInit(marker) {
    console.log('marker', marker);
  }
  onMapClick(event) {
    this.positions.push(event.latLng);
    console.log("pos",this.positions);
    event.target.panTo(event.latLng);
  }
  
  // google.maps.event.addListener(map, 'click', function( event ){
  //   alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() ); 
  // });
 
checkk()
{
  console.log("aaaya");
  if(!(this.check in this.MyServiceService.quant))
  this.units="Not available";
  else
  {
    this.units = this.MyServiceService.quant[this.check];
  }
  this.MyServiceService.showQuantity = true;
}


  mapOptions = {

  }
}
