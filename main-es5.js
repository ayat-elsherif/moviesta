(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<div class='full-height'>\n    <router-outlet></router-outlet> \n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class='footer text-center'>\n    copyright reserved\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid px-0 bannerCont\">\n    <!-- <img src='../../assets/movie-bundle.jpg' class='img-fluid'> -->\n   <figcaption>\n    <h1>Moviesta</h1>\n    <p>All you need to know about</p>\n    <p class=\"text-info\">Your Favorite Movies</p>\n   </figcaption>\n</div>\n<div class=\"container-fluid mainSection\">\n    \n    <div class=\"row\">\n        <div class=\"col-md-4 col-xl-6 mainTitle\">\n            <div class=\"form-group w-100\">\n                <input class=\"form-control\" [(ngModel)]='term' placeholder=\"Search..\" />\n            </div>\n            <figcaption>\n                <h2> All Trends.. All Times</h2>\n            <p>anything goes here anything goes hereanything goes here anything goes here \n                here anything goes here anything goes here here anything goes here</p>\n            </figcaption>\n        </div>\n        <a class=\" col-md-4 col-xl-3 mb-4\" [routerLink]='[\"/view\",trend.media_type,trend.id]' *ngFor=\"let trend of trends|search:term\"> \n            <div class=\"singleItem col-sm-12\" >\n                <img class='img-fluid' \n                src='https://image.tmdb.org/t/p/w500/{{trend.poster_path? trend.poster_path:trend.backdrop_path}}'/>\n                <div class=\"itemCapCont\">\n                    <div class=\"itemCap\">\n                        <h5> \n                            {{trend.name? trend.name:trend.title}}\n                        </h5>\n                        <h6>popularity: {{trend.popularity}}</h6>\n                    </div>\n                </div>\n\n            <div class=\"item-label\">{{trend.vote_average}}</div>\n            </div>\n        </a>\n\n    </div>\n    <div class='d-flex px-5 justify-content-center align-items-center mt-5 mb-5'>\n        <a class='fa fa-arrow-circle-left' (click)='decPage()'></a>\n        <a class='px-3 ' *ngFor='let pNumber of pNumbers' (click)=\"changePage(pNumber)\">{{pNumber}}</a>\n        <a class='fa fa-arrow-circle-right' (click)='incPage()'></a>\n    </div>\n</div>\n\n<script>\n    $(function(){\n        $(\".tip-hiddenImg\").tooltip({\n        placement : 'bottom',\n        html:true\n    });\n    })\n</script>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movie-details/movie-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movie-details/movie-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainSection\">\n    \n    <div class=\"container-fluid p-5\" *ngFor='let movie of movies'>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"container-fluid\">\n                    <img class=\"img-fluid\" src='https://image.tmdb.org/t/p/w500/{{ movie.poster_path}}' />\n                  <!--<h4 class=\"text-center mt-1\">{{movie.title?movie.title:movie.name}}</h4>-->  \n                </div>\n            </div>\n\n            <div class=\"col-md-9\">\n                    <div class=\"col-sm-12 bg-white table-responsive\">\n                       <table class=\"table\">\n                            <tr>\n                                <th width='30%'>Name</th>\n                                <td>{{movie.title?movie.title:movie.name}} \n                                    <small>{{movie.original_name==movie.name?\"\":\"  \" + movie.original_name}}</small>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th width='30%'>Release Date</th>\n                                <td>{{movie.first_air_date?movie.first_air_date:movie.release_date}}</td>\n                            </tr>\n                            <tr>\n                                <th width='30%'>Genre</th>\n                                <td><span *ngFor=\"let genre of movie.genres\">{{genre.name}}, </span></td>\n                            </tr>\n                            <tr>\n                                <th width='30%'>Vote</th>\n                                <td>{{movie.vote_average}}</td>\n                            </tr>\n                            <tr>\n                                <th width='30%'>Popularity</th>\n                                <td>{{movie.popularity}}</td>\n                            </tr>\n                            <tr>\n                                <th width='30%'>Production compaines</th>\n                                <td><span *ngFor='let pro of movie.production_companies'>\n                                    {{pro.name}},\n                                </span></td>\n                            </tr>\n                            <tr *ngIf='movie.tagline'>\n                                <th width=\"30%\">Tagline</th>\n                                <td>{{movie.tagline}}</td>\n                            </tr>\n                            <tr *ngIf='movie.spoken_languages;else seriesLang'>\n                                <th width='30%'>Languages</th>\n                                <td><span *ngFor=\"let lang of movie.spoken_languages\">\n                                    {{lang.iso_639_1}}</span></td>\n                            </tr>\n                            <ng-template #seriesLang>\n                                <tr>\n                                    <th width='30%'>Languages</th>\n                                    <td><span *ngFor=\"let lang of movie.languages;let x of index\">\n                                        {{lang}}</span></td>\n                                </tr>\n                            </ng-template>\n                       </table>\n                    </div>\n                    <div class=\"col-sm-12 bg-white mt-3\">\n                        <table class=\"table\">\n                            <tr>\n                                <th width='30%'>Overview</th>\n                                <td>{{movie.overview}} \n                                </td>\n                            </tr>\n                            </table>\n                    </div>\n\n            </div>\n        </div>\n\n    </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movies/movies.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movies/movies.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid  mainSection\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-4 mt-5 mainTitle\">\n            <h2> All Favorite Movies <br>all times</h2>\n        <p>anything goes here anything goes hereanything goes here anything goes here here \n            anything goes here anything goes here here anything goes here</p>\n        </div>\n        <a class=\"col-lg-2 col-md-4\" *ngFor='let movie of movies'  [routerLink]='[\"/view\",\"movie\",movie.id]' >\n            <div class=\"singleItem col-sm-12\">\n                <img class='img-fluid' \n                src='https://image.tmdb.org/t/p/w500/{{movie.poster_path? movie.poster_path:movie.backdrop_path}}' />\n                <h5>\n                    {{movie.name? movie.name:movie.title}}\n                </h5>\n                <span>popularity: {{movie.popularity}}</span>\n                <div class=\"item-label\">{{movie.vote_average}}</div>\n            </div>\n        </a>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n        <a class='px-4' *ngFor='let bNumber of pNumbers' (click)='changePage(bNumber)'>{{bNumber}}</a>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-primary px-5\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\">Moviesta</a>\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\"><i class=\"fa fa-user\"></i></button>\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                <li routerLinkActive=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink='/home'>Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li routerLinkActive=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink=\"/movies\">Movies</a>\n                </li>\n                <li routerLinkActive=\"nav-item active\"> \n                    <a class=\"nav-link\" routerLink=\"/series\">Series</a>\n                </li>\n            \n                \n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" name='search' placeholder=\"Search\">\n                <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">Search</button>\n            </form>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>notfound works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/series/series.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/series/series.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mainSection\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-4 mt-5 mainTitle\">\n            <h2> All Favorite Series <br>all times</h2>\n        <p>anything goes here anything goes hereanything goes here anything goes here here \n            anything goes here anything goes here here anything goes here</p>\n        </div>\n        <a [routerLink]=\"['/view','tv',series.id]\" class=\"col-lg-2 col-md-4\" *ngFor='let series of series'>   \n            <div class=\"singleItem col-sm-12\" >\n                <img class='img-fluid' *ngIf='series.poster_path; else defaultImg' \n                src='https://image.tmdb.org/t/p/w500/{{series.poster_path}}' />\n                \n                <ng-template #defaultImg ><img class=\"img-fluid\" src='assets/movie-night-poster.jpg'/></ng-template>\n                <h5>\n                    {{series.name? series.name:series.title}}\n                    <small> {{series.original_name==series.name?'':series.original_name}}</small>\n                </h5>\n                <span>popularity: {{series.popularity}}</span>\n                <div class=\"item-label\">{{series.vote_average}}</div>\n            </div> \n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _series_series_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series/series.component */ "./src/app/series/series.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"] },
    { path: 'series', component: _series_series_component__WEBPACK_IMPORTED_MODULE_6__["SeriesComponent"] },
    { path: 'view/:media_type/:id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailsComponent"] },
    { path: 'view/movie/:id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailsComponent"] },
    { path: 'view/series/:id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailsComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _series_series_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./series/series.component */ "./src/app/series/series.component.ts");
/* harmony import */ var _see_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./see.pipe */ "./src/app/see.pipe.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _input_check_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./input-check.directive */ "./src/app/input-check.directive.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_10__["MoviesComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"],
                _series_series_component__WEBPACK_IMPORTED_MODULE_12__["SeriesComponent"],
                _see_pipe__WEBPACK_IMPORTED_MODULE_13__["SeePipe"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchPipe"],
                _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_15__["MovieDetailsComponent"],
                _input_check_directive__WEBPACK_IMPORTED_MODULE_16__["InputCheckDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #1c59a8;\n  color: #eee;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  font-weight: bold;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxwcm9qZWN0c1xcYW5ndWxhci1wcm9qZWN0c1xcYW5ndWxhci04LTEtMFxcbW92aWVBcHAvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI4LCA4OSwgMTY4KTtcclxuICAgIGNvbG9yOiNlZWU7XHJcbiAgICBoZWlnaHQ6Mi41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM1OWE4O1xuICBjb2xvcjogI2VlZTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\na:hover {\n  text-decoration: none;\n}\n.bannerCont {\n  position: relative;\n  background: url('movie-bundle.jpg') no-repeat fixed;\n  box-shadow: 3px 1px 2px 5px #007bff, -3px 3px 1px 5px #1d4e83;\n  background-size: cover;\n  height: 300px;\n  padding: 60px;\n}\n.bannerCont figcaption {\n  Color: #eee;\n  width: 60%;\n  margin-top: 10px;\n  margin-left: 20%;\n  text-align: center;\n}\n.bannerCont figcaption h1 {\n  font-size: 4.5rem;\n  color: #80a3ff;\n  color: #6494ff;\n  color: #FFF;\n  letter-spacing: 15px;\n  mix-blend-mode: difference;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.bannerCont figcaption p {\n  font-size: 24px;\n  line-height: 36px;\n  margin-bottom: 0;\n  letter-spacing: 3px;\n  font-weight: lighter;\n}\n.bannerCont figcaption p.text-info {\n  font-weight: bold;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxccHJvamVjdHNcXGFuZ3VsYXItcHJvamVjdHNcXGFuZ3VsYXItOC0xLTBcXG1vdmllQXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVI7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSw2REFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ssV0FBQTtFQUNELFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUVBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ1o7QURFUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0RaO0FERVk7RUFFSSxpQkFBQTtFQUNBLGVBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYW5uZXJDb250e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9tb3ZpZS1idW5kbGUuanBnKSBuby1yZXBlYXQgZml4ZWQ7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggIzAwN2JmZiwgLTNweCAzcHggMXB4IDVweCAjMWQ0ZTgzO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOjYwcHg7XHJcbiAgICBmaWdjYXB0aW9ue1xyXG4gICAgICAgICBDb2xvcjojZWVlO1xyXG4gICAgICAgIHdpZHRoOjYwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiM4MGEzZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiM2NDk0ZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiNGRkY7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAvL3RleHQtc2hhZG93OiAycHggLTJweCAxcHggI2QxZGVmZjtcclxuICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgIC8vdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICYudGV4dC1pbmZve1xyXG4gICAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJhbm5lckNvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvbW92aWUtYnVuZGxlLmpwZykgbm8tcmVwZWF0IGZpeGVkO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggIzAwN2JmZiwgLTNweCAzcHggMXB4IDVweCAjMWQ0ZTgzO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nOiA2MHB4O1xufVxuLmJhbm5lckNvbnQgZmlnY2FwdGlvbiB7XG4gIENvbG9yOiAjZWVlO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFubmVyQ29udCBmaWdjYXB0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA0LjVyZW07XG4gIGNvbG9yOiAjODBhM2ZmO1xuICBjb2xvcjogIzY0OTRmZjtcbiAgY29sb3I6ICNGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uYmFubmVyQ29udCBmaWdjYXB0aW9uIHAge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5iYW5uZXJDb250IGZpZ2NhcHRpb24gcC50ZXh0LWluZm8ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_MovieService) {
        var _this = this;
        this._MovieService = _MovieService;
        this.trends = [];
        this.term = '';
        this.y = '';
        this.pNumber = 1;
        this.pNumbers = [];
        this.hiddenImg = "";
        for (var i = 1; i <= 10; i++) {
            this.pNumbers.push(i);
        }
        this._MovieService.getallTrending(this.pNumber).subscribe(function (data) {
            _this.trends = data.results;
            console.log(_this.trends);
        });
    }
    HomeComponent.prototype.changePage = function (x) {
        var _this = this;
        this.pNumber = x;
        this._MovieService.getallTrending(this.pNumber).subscribe(function (data) {
            _this.trends = data.results;
        });
    };
    HomeComponent.prototype.incPage = function () {
        if (this.pNumber <= this.pNumbers.length) {
            console.log(this.pNumber + 1);
            this.changePage(this.pNumber + 1);
        }
    };
    HomeComponent.prototype.decPage = function () {
        if (this.pNumber > 1) {
            console.log(this.pNumber - 1);
            this.changePage(this.pNumber - 1);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/input-check.directive.ts":
/*!******************************************!*\
  !*** ./src/app/input-check.directive.ts ***!
  \******************************************/
/*! exports provided: InputCheckDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCheckDirective", function() { return InputCheckDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputCheckDirective = /** @class */ (function () {
    function InputCheckDirective(el) {
        this.el = el;
    }
    InputCheckDirective.prototype.onBlur = function () {
        var myVal = this.el.nativeElement.value;
        this.el.nativeElement.value = myVal.toLowerCase();
    };
    InputCheckDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur')
    ], InputCheckDirective.prototype, "onBlur", null);
    InputCheckDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appInputCheck]'
        })
    ], InputCheckDirective);
    return InputCheckDirective;
}());



/***/ }),

/***/ "./src/app/movie-details/movie-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table tr:first-child td, .table tr:first-child th {\n  border-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlscy9EOlxccHJvamVjdHNcXGFuZ3VsYXItcHJvamVjdHNcXGFuZ3VsYXItOC0xLTBcXG1vdmllQXBwL3NyY1xcYXBwXFxtb3ZpZS1kZXRhaWxzXFxtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSwwQkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIHRyOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIHRkLCB0aHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDowcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQsIC50YWJsZSB0cjpmaXJzdC1jaGlsZCB0aCB7XG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _single_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../single-movie.service */ "./src/app/single-movie.service.ts");




//import{rxjs/add/observable/combineLatest}
var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(route, _SingleMovieService) {
        var _this = this;
        this.route = route;
        this._SingleMovieService = _SingleMovieService;
        this.movies = [];
        this.ngOnInit();
        this._SingleMovieService.getSingleMediaType(this.media_type, this.id).subscribe(function (data) {
            _this.movies.push(data);
        });
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = +params.get('id');
            _this.media_type = params.get('media_type');
        });
    };
    MovieDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _single_movie_service__WEBPACK_IMPORTED_MODULE_3__["SingleMovieService"] }
    ]; };
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/movie-details/movie-details.component.scss")]
        })
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MovieService = /** @class */ (function () {
    function MovieService(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    MovieService.prototype.getallTrending = function (pNumber) {
        return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=81344b6995891b4c32a31691982d5af9&page=" + pNumber);
    };
    MovieService.prototype.getallMovies = function (pNumber) {
        return this._HttpClient.get("https://api.themoviedb.org/3/discover/movie?api_key=81344b6995891b4c32a31691982d5af9&language=en-US&sort_by=popularity.desc&include_adult=false&page=" + pNumber);
    };
    MovieService.prototype.getAllSeries = function () {
        return this._HttpClient.get('https://api.themoviedb.org/3/discover/tv?api_key=81344b6995891b4c32a31691982d5af9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false');
    };
    MovieService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.scss":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(_MovieService) {
        var _this = this;
        this._MovieService = _MovieService;
        this.movies = [];
        this.pNumbers = [];
        for (var i = 1; i <= 10; i++) {
            this.pNumbers.push(i);
        }
        _MovieService.getallMovies(1).subscribe(function (data) {
            //console.log(data.results);
            _this.movies = data.results;
            console.log(_this.movies);
        });
    }
    MoviesComponent.prototype.changePage = function (x) {
        var _this = this;
        this._MovieService.getallMovies(x).subscribe(function (data) {
            _this.movies = data.results;
        });
    };
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent.ctorParameters = function () { return [
        { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
    ]; };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/index.js!./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/movies/movies.component.scss")]
        })
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n}\n.navbar .navbar-brand {\n  line-height: 0.8rem;\n  font: bold 2rem \"segoe ui\";\n  margin-right: 6rem;\n}\n.navbar ul {\n  margin-top: 8px !important;\n}\n.navbar ul li {\n  font-size: 1.1rem;\n  margin-right: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0Q6XFxwcm9qZWN0c1xcYW5ndWxhci1wcm9qZWN0c1xcYW5ndWxhci04LTEtMFxcbW92aWVBcHAvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQUk7RUFFSSxtQkFBQTtFQUVBLDBCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdJO0VBQ0ksMEJBQUE7QUNEUjtBREVRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQVoiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIHBhZGRpbmctdG9wOi4zcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206LjNyZW07XHJcbiAgICAubmF2YmFyLWJyYW5ke1xyXG4gICAgICAgIC8vZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IC44cmVtO1xyXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udDpib2xkIDJyZW0gXCJzZWdvZSB1aVwiO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdWx7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIubmF2YmFyIHtcbiAgcGFkZGluZy10b3A6IDAuM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjhyZW07XG4gIGZvbnQ6IGJvbGQgMnJlbSBcInNlZ29lIHVpXCI7XG4gIG1hcmdpbi1yaWdodDogNnJlbTtcbn1cbi5uYXZiYXIgdWwge1xuICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbn1cbi5uYXZiYXIgdWwgbGkge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.scss":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/notfound/notfound.component.scss")]
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (movies, x) {
        if (x) {
            return movies.filter(function (movie) {
                x = x.toLowerCase();
                if (movie.name) {
                    return movie.name.toLowerCase().includes(x);
                }
                else {
                    return movie.title.toLowerCase().includes(x);
                }
            });
        }
        else {
            return movies;
        }
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/see.pipe.ts":
/*!*****************************!*\
  !*** ./src/app/see.pipe.ts ***!
  \*****************************/
/*! exports provided: SeePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeePipe", function() { return SeePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeePipe = /** @class */ (function () {
    function SeePipe() {
    }
    SeePipe.prototype.transform = function (desc, limit) {
        return desc.substr(0, limit) + "... See more";
    };
    SeePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'see'
        })
    ], SeePipe);
    return SeePipe;
}());



/***/ }),

/***/ "./src/app/series/series.component.scss":
/*!**********************************************!*\
  !*** ./src/app/series/series.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlcmllcy9zZXJpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/series/series.component.ts":
/*!********************************************!*\
  !*** ./src/app/series/series.component.ts ***!
  \********************************************/
/*! exports provided: SeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesComponent", function() { return SeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



var SeriesComponent = /** @class */ (function () {
    function SeriesComponent(_MovieService) {
        var _this = this;
        this._MovieService = _MovieService;
        this.series = [];
        _MovieService.getAllSeries().subscribe(function (data) {
            _this.series = data.results;
            console.log(_this.series);
        });
    }
    SeriesComponent.prototype.ngOnInit = function () {
    };
    SeriesComponent.ctorParameters = function () { return [
        { type: _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
    ]; };
    SeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-series',
            template: __webpack_require__(/*! raw-loader!./series.component.html */ "./node_modules/raw-loader/index.js!./src/app/series/series.component.html"),
            styles: [__webpack_require__(/*! ./series.component.scss */ "./src/app/series/series.component.scss")]
        })
    ], SeriesComponent);
    return SeriesComponent;
}());



/***/ }),

/***/ "./src/app/single-movie.service.ts":
/*!*****************************************!*\
  !*** ./src/app/single-movie.service.ts ***!
  \*****************************************/
/*! exports provided: SingleMovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMovieService", function() { return SingleMovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SingleMovieService = /** @class */ (function () {
    function SingleMovieService(_httpClient) {
        this._httpClient = _httpClient;
    }
    SingleMovieService.prototype.getSingleMediaType = function (media_type, id) {
        return this._httpClient.get("https://api.themoviedb.org/3/" + media_type + "/" + id + "?api_key=81344b6995891b4c32a31691982d5af9&language=en-US");
    };
    SingleMovieService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SingleMovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SingleMovieService);
    return SingleMovieService;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\angular-projects\angular-8-1-0\movieApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map