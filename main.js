(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".router-container {\n  height: calc(100% - 125px);\n  overflow: hidden;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91dGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTI1cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"router-container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'food-fight';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trivia_trivia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trivia/trivia.component */ "./src/app/trivia/trivia.component.ts");
/* harmony import */ var _polls_polls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./polls/polls.component */ "./src/app/polls/polls.component.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/challenges/challenges.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");

















var routes = [
    {
        path: 'trivia',
        component: _trivia_trivia_component__WEBPACK_IMPORTED_MODULE_6__["TriviaComponent"],
    },
    {
        path: 'polls',
        component: _polls_polls_component__WEBPACK_IMPORTED_MODULE_7__["PollsComponent"]
    },
    {
        path: 'challenges',
        component: _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_8__["ChallengesComponent"]
    },
    {
        path: 'profile/:id',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule(registry, domSanitizer) {
        this.registry = registry;
        this.domSanitizer = domSanitizer;
        this.registry.addSvgIcon('challenge-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon-challenge.svg'));
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _trivia_trivia_component__WEBPACK_IMPORTED_MODULE_6__["TriviaComponent"],
                _polls_polls_component__WEBPACK_IMPORTED_MODULE_7__["PollsComponent"],
                _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_8__["ChallengesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/challenges/challenges.component.css":
/*!*****************************************************!*\
  !*** ./src/app/challenges/challenges.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/challenges/challenges.component.html":
/*!******************************************************!*\
  !*** ./src/app/challenges/challenges.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  challenges works!\n</div>\n"

/***/ }),

/***/ "./src/app/challenges/challenges.component.ts":
/*!****************************************************!*\
  !*** ./src/app/challenges/challenges.component.ts ***!
  \****************************************************/
/*! exports provided: ChallengesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return ChallengesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChallengesComponent = /** @class */ (function () {
    function ChallengesComponent() {
    }
    ChallengesComponent.prototype.ngOnInit = function () {
    };
    ChallengesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-challenges',
            template: __webpack_require__(/*! ./challenges.component.html */ "./src/app/challenges/challenges.component.html"),
            styles: [__webpack_require__(/*! ./challenges.component.css */ "./src/app/challenges/challenges.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChallengesComponent);
    return ChallengesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  display: flex;\n  height: 75px;\n  overflow: scroll;\n}\n\n::ng-deep .footer-container button {\n  flex: 1;\n}\n\n::ng-deep .footer-container button .mat-button-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 10px;\n}\n\nimg {\n  height: 35px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzVweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuOjpuZy1kZWVwIC5mb290ZXItY29udGFpbmVyIGJ1dHRvbiB7XG4gIGZsZXg6IDE7XG59XG5cbjo6bmctZGVlcCAuZm9vdGVyLWNvbnRhaW5lciBidXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDM1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n\n  <button [routerLink]=\"'/challenges'\" mat-button>\n    <img src=\"./assets/icon-challenge.svg\" />\n    Challenges\n  </button>\n  <button [routerLink]=\"'/trivia'\" mat-button>\n    <img src=\"./assets/icon-trivia.svg\" />\n    Trivia\n  </button>\n  <button [routerLink]=\"'/polls'\" mat-button>\n    <img src=\"./assets/icon-polls.svg\" />\n    Polls\n  </button>\n  <button [routerLink]=\"['/profile', userId]\" mat-button>\n    <img src=\"./assets/icon-profile.svg\" />\n    Profile\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.userId = 'susie123';
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  display: flex;\n  height: 50px;\n}\n\nimg {\n  margin: auto;\n  height: 45px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <img src=\"./assets/san-chez.svg\" />\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/polls/polls.component.css":
/*!*******************************************!*\
  !*** ./src/app/polls/polls.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGxzL3BvbGxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/polls/polls.component.html":
/*!********************************************!*\
  !*** ./src/app/polls/polls.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  polls works!\n</div>\n"

/***/ }),

/***/ "./src/app/polls/polls.component.ts":
/*!******************************************!*\
  !*** ./src/app/polls/polls.component.ts ***!
  \******************************************/
/*! exports provided: PollsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollsComponent", function() { return PollsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PollsComponent = /** @class */ (function () {
    function PollsComponent() {
    }
    PollsComponent.prototype.ngOnInit = function () {
    };
    PollsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-polls',
            template: __webpack_require__(/*! ./polls.component.html */ "./src/app/polls/polls.component.html"),
            styles: [__webpack_require__(/*! ./polls.component.css */ "./src/app/polls/polls.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PollsComponent);
    return PollsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  {{profile.name}}\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(db, activatedRoute) {
        this.db = db;
        this.activatedRoute = activatedRoute;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.db.collection('profiles').doc(params.get('id')).valueChanges();
        }))
            .subscribe(function (profile) {
            _this.profile = profile;
            console.log(_this.profile);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/trivia/trivia.component.css":
/*!*********************************************!*\
  !*** ./src/app/trivia/trivia.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trivia-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n  height: 400px;\n  background-color: #accc97;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n/*.description .fail {*/\n\n/*  background-color: #c21c2b;*/\n\n/*}*/\n\n.description .description-text {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 45px;\n  font-weight: 700;\n}\n\nbutton {\n  margin: 10px 0;\n  font-size: 18px;\n}\n\n.trivia-result {\n  display: flex;\n  flex-direction: column;\n}\n\n.trivia-result .description {\n  height: 700px;\n}\n\n.trivia-result .description-fail {\n  background-color: #c21c2b;\n  display: flex;\n  flex-direction: column;\n  height: 700px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.result-img {\n  height: 70px;\n  margin-top: 20px;\n}\n\n.yas {\n  color: #335f2f;\n  font-size: 80px;\n  font-style: italic;\n  font-weight: 700;\n}\n\n.nope {\n  color: #ffffff;\n  font-size: 80px;\n  font-style: italic;\n  font-weight: 700;\n}\n\n.youre-right {\n  color: #ffffff;\n  font-size: 50px;\n  font-style: italic;\n  font-weight: 500;\n}\n\n.choice {\n  color: #ffffff;\n  font-size: 50px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.message {\n  color: #ffffff;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: 300;\n  margin-top: 50px;\n}\n\n.shield {\n  height: 175px;\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpdmlhL3RyaXZpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBLHVCQUF1Qjs7QUFDdkIsK0JBQStCOztBQUMvQixJQUFJOztBQUVKO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90cml2aWEvdHJpdmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJpdmlhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhY2NjOTc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLyouZGVzY3JpcHRpb24gLmZhaWwgeyovXG4vKiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMWMyYjsqL1xuLyp9Ki9cblxuLmRlc2NyaXB0aW9uIC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udHJpdmlhLXJlc3VsdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50cml2aWEtcmVzdWx0IC5kZXNjcmlwdGlvbiB7XG4gIGhlaWdodDogNzAwcHg7XG59XG5cbi50cml2aWEtcmVzdWx0IC5kZXNjcmlwdGlvbi1mYWlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMWMyYjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucmVzdWx0LWltZyB7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnlhcyB7XG4gIGNvbG9yOiAjMzM1ZjJmO1xuICBmb250LXNpemU6IDgwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm5vcGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi55b3VyZS1yaWdodCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNob2ljZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZXNzYWdlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uc2hpZWxkIHtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/trivia/trivia.component.html":
/*!**********************************************!*\
  !*** ./src/app/trivia/trivia.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!answered\" class=\"trivia-container\">\n  <div class=\"description\"><div class=\"description-text\">{{trivia.description}}</div></div>\n  <button *ngFor=\"let choice of trivia.choices\" mat-button (click)=\"answerTrivia(choice.choiceName)\">{{choice.choiceName}}</button>\n</div>\n\n<div *ngIf=\"answered && correct\" class=\"trivia-result correct\">\n  <div class=\"description\">\n    <img class=\"result-img\" src=\"./assets/done-24px.svg\" />\n    <div class=\"yas\">Yaaaas!</div>\n    <div class=\"youre-right\">You're right!</div>\n    <div class=\"choice\">{{getCorrectChoice().choiceName }}</div>\n    <div class=\"message\">Lettuce congratulate you!</div>\n    <img class=\"shield\" src=\"./assets/shield.svg\" />\n  </div>\n</div>\n\n<div *ngIf=\"answered && !correct\" class=\"trivia-result\">\n  <div class=\"description-fail\">\n    <img class=\"result-img\" src=\"./assets/not_interested-24px.svg\" />\n    <div class=\"nope\">Nope!</div>\n    <div class=\"youre-right\">The answer was</div>\n    <div class=\"choice\">{{getCorrectChoice().choiceName }}</div>\n    <div class=\"message\">Don't worry, 12 others got it wrong</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/trivia/trivia.component.ts":
/*!********************************************!*\
  !*** ./src/app/trivia/trivia.component.ts ***!
  \********************************************/
/*! exports provided: TriviaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriviaComponent", function() { return TriviaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TriviaComponent = /** @class */ (function () {
    function TriviaComponent(db) {
        this.db = db;
        this.answered = false;
        this.correct = false;
    }
    TriviaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.collection('trivia').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (collection) { return collection; })).subscribe(function (val) {
            _this.trivia = val;
            console.log(_this.trivia);
        });
    };
    TriviaComponent.prototype.answerTrivia = function (answer) {
        this.answered = true;
        this.correct = this.getCorrectChoice().choiceName === answer;
    };
    TriviaComponent.prototype.getCorrectChoice = function () {
        return this.trivia.choices.find(function (val) { return val.correct; });
    };
    TriviaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trivia',
            template: __webpack_require__(/*! ./trivia.component.html */ "./src/app/trivia/trivia.component.html"),
            styles: [__webpack_require__(/*! ./trivia.component.css */ "./src/app/trivia/trivia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], TriviaComponent);
    return TriviaComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDtdwoBeq1IWE97wPSLn6sKE6Mdq7unmOg',
        authDomain: 'gfs-cx-hackathon-2020.firebaseapp.com',
        databaseURL: 'https://gfs-cx-hackathon-2020.firebaseio.com',
        projectId: 'gfs-cx-hackathon-2020',
        storageBucket: 'gfs-cx-hackathon-2020.appspot.com',
        messagingSenderId: '12903641731',
        appId: '1:12903641731:web:dd0e032a3d4f1d681361b6'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ef8lj/dev/work/cx-hackathon-2020/food-fight/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map