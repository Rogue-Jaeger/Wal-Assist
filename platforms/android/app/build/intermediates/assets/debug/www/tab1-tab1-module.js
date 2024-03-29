(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngui/map */ "./node_modules/@ngui/map/esm5/ngui-map.js");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngui_map__WEBPACK_IMPORTED_MODULE_7__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDjlyat8cUwD6Fx8FVITQnCBBFAGte9BfA' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Tab One\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n      <ion-img src=\"/assets/shapes.svg\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle>Get Started</ion-card-subtitle>\n        <ion-card-title>Welcome to Ionic</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-list lines=\"none\">\n      <ion-list-header>\n        <ion-label>Resources</ion-label>\n      </ion-list-header>\n      <ion-item href=\"https://ionicframework.com/docs/\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n        <ion-label>Ionic Documentation</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n        <ion-label>Scaffold Out Your App</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n        <ion-label>Change Your App Layout</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n        <ion-label>Theme Your App</ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content> -->\n\n\n<ion-header>\n    <ion-title class=\"center\">\n      WALMART STORE\n    </ion-title>\n \n</ion-header>\n\n\n<ion-content>\n<!-- <div id=\"map\"></div> -->\n\n<ngui-map \n  zoom=\"13\" \n  center=\"25.774,-80.190\"\n   (mapReady$)=\"onMapReady($event)\"\n    (mapClick)=\"onMapClick($event)\"\n    (idle)=\"onIdle($event)\"\n    mapTypeId=\"satellite\" \n></ngui-map>\n\n<div id=\"content\">\n    <ion-list>\n        <ion-item>\n          <ion-label>Distance : 12kms</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Queue : 2</ion-label>\n        </ion-item>\n        <ion-item>\n          <!-- <ion-label>ok</ion-label> -->\n          <ion-input [(ngModel)]=\"check\" placeholder=\"Looking for an item?\"></ion-input>\n       \n        </ion-item>\n        <ion-item>\n            <!-- <ion-label>ok</ion-label> -->\n        \n            <button ion-button (click)=\"checkk()\" color=\"primary\">Search</button>\n          </ion-item>\n      </ion-list>\n\n</div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zMHMwM2M1L215QXBwMS9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_geofence_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geofence/ngx */ "./node_modules/@ionic-native/geofence/ngx/index.js");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(geo, Geofence) {
        this.geo = geo;
        this.Geofence = Geofence;
        this.mapOptions = {};
        this.positions = [];
        this.addGeofence();
        Geofence.initialize().then(
        // resolved promise does not return a value
        function () { return console.log('Geofence Plugin Ready'); }, function (err) { return console.log(err); });
        this.Geofence.addOrUpdate(this.fence).then(function () { return console.log('Geofence added'); }, function (err) { return console.log('Geofence failed to add'); });
        // this.geo.getCurrentPosition().then((resp) => {
        //   // resp.coords.latitude
        //   // resp.coords.longitude
        //  }).catch((error) => {
        //    console.log('Error getting location', error);
        //  });
    }
    Tab1Page.prototype.addGeofence = function () {
        //options describing geofence
        this.fence = {
            id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb',
            latitude: 25.765885284201275,
            longitude: -80.21907806396484,
            radius: 50,
            transitionType: 3,
            notification: {
                id: 1,
                title: 'You crossed a fence',
                text: 'You just arrived to Gliwice city center.',
                openAppOnClick: true //open app when notification is tapped
            }
        };
    };
    Tab1Page.prototype.onMapReady = function (map) {
        this.firstStore = { lat: 25.765885284201275, lng: -80.21907806396484 };
        this.secondStore = { lat: 25.75235628817928, lng: -80.24810737609863 };
        this.thirdStore = { lat: 25.756530739702896, lng: -80.20725196838379 };
        this.fourthStore = { lat: 25.739213538410297, lng: -80.29059356689453 };
        this.fifthStore = { lat: 25.75644101468304, lng: -80.31053694957745 };
        console.log('map', map);
        console.log('markers', map.markers); // to get all markers as an array 
        var marker1 = new google.maps.Marker({
            position: this.firstStore,
            map: map,
            title: 'Hello World!'
        });
        var marker2 = new google.maps.Marker({
            position: this.secondStore,
            map: map,
            title: 'Hello World!'
        });
        var marker3 = new google.maps.Marker({
            position: this.thirdStore,
            map: map,
            title: 'Hello World!'
        });
        var marker4 = new google.maps.Marker({
            position: this.fourthStore,
            map: map,
            title: 'Hello World!'
        });
        var marker5 = new google.maps.Marker({
            position: this.fifthStore,
            map: map,
            title: 'Hello World!'
        });
        var infowindow = new google.maps.InfoWindow({
            content: document.getElementById("content")
        });
        marker1.addListener('click', function () {
            infowindow.open(map, marker1);
        });
        marker2.addListener('click', function () {
            infowindow.open(map, marker2);
        });
        marker3.addListener('click', function () {
            infowindow.open(map, marker3);
        });
        marker4.addListener('click', function () {
            infowindow.open(map, marker4);
        });
        marker5.addListener('click', function () {
            infowindow.open(map, marker5);
        });
        google.maps.event.addListener(map, 'click', function (event) {
            //  alert(event.latLng); 
            // alert(event.latLng.lat()); // in event.latLng  you have the coordinates of click
            console.log(event.latLng);
            // let triangleCoords = [
            //   {lat: 25.765885284201275, lng: -80.21907806396484},
            //   {lat: 32.321, lng: -64.757},
            //   {lat: 25.774, lng: -80.190}
            // ];
            // let bermudaTriangle = new google.maps.Polygon({
            //   paths: triangleCoords,
            //   strokeColor: '#FF0000',
            //   strokeOpacity: 0.8,
            //   strokeWeight: 2,
            //   fillColor: '#FF0000',
            //   fillOpacity: 0.35
            // });
            // bermudaTriangle.setMap(map);
        });
    };
    Tab1Page.prototype.onIdle = function (event) {
        console.log('map', event.target);
    };
    Tab1Page.prototype.onMarkerInit = function (marker) {
        console.log('marker', marker);
    };
    Tab1Page.prototype.onMapClick = function (event) {
        this.positions.push(event.latLng);
        console.log("pos", this.positions);
        event.target.panTo(event.latLng);
    };
    // google.maps.event.addListener(map, 'click', function( event ){
    //   alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() ); 
    // });
    Tab1Page.prototype.checkk = function () {
        if (this.check != "hi")
            this.check = "sorry";
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_geofence_ngx__WEBPACK_IMPORTED_MODULE_3__["Geofence"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map