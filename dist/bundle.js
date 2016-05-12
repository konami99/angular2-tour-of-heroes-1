webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
	"use strict";
	var browser_1 = __webpack_require__(1);
	var app_component_1 = __webpack_require__(229);
	browser_1.bootstrap(app_component_1.AppComponent);


/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var router_1 = __webpack_require__(230);
	var dashboard_component_1 = __webpack_require__(259);
	var heroes_component_1 = __webpack_require__(264);
	var hero_detail_component_1 = __webpack_require__(265);
	var hero_service_1 = __webpack_require__(260);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.title = 'Tour of Heroes';
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n      <a [routerLink]=\"['Heroes']\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
	            styles: [__webpack_require__(271)],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [
	                hero_service_1.HeroService,
	                router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
	            ]
	        }),
	        router_1.RouteConfig([
	            {
	                path: '/dashboard',
	                name: 'Dashboard',
	                component: dashboard_component_1.DashboardComponent,
	                useAsDefault: true
	            },
	            {
	                path: '/detail/:id',
	                name: 'HeroDetail',
	                component: hero_detail_component_1.HeroDetailComponent
	            },
	            {
	                path: '/heroes',
	                name: 'Heroes',
	                component: heroes_component_1.HeroesComponent
	            }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var router_1 = __webpack_require__(230);
	var hero_service_1 = __webpack_require__(260);
	var DashboardComponent = (function () {
	    function DashboardComponent(_router, _heroService) {
	        this._router = _router;
	        this._heroService = _heroService;
	        this.heroes = [];
	    }
	    DashboardComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._heroService.getHeroes()
	            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
	    };
	    DashboardComponent.prototype.gotoDetail = function (hero) {
	        var link = ['HeroDetail', { id: hero.id }];
	        this._router.navigate(link);
	    };
	    DashboardComponent = __decorate([
	        core_1.Component({
	            selector: 'my-dashboard',
	            template: __webpack_require__(262),
	            styles: [__webpack_require__(263)]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
	    ], DashboardComponent);
	    return DashboardComponent;
	}());
	exports.DashboardComponent = DashboardComponent;


/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var mock_heroes_1 = __webpack_require__(261);
	var HeroService = (function () {
	    function HeroService() {
	    }
	    HeroService.prototype.getHeroes = function () {
	        return Promise.resolve(mock_heroes_1.HEROES);
	    };
	    HeroService.prototype.getHeroesSlowly = function () {
	        return new Promise(function (resolve) {
	            return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
	        } // 2 seconds
	         // 2 seconds
	        );
	    };
	    HeroService.prototype.getHero = function (id) {
	        return Promise.resolve(mock_heroes_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
	    };
	    HeroService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], HeroService);
	    return HeroService;
	}());
	exports.HeroService = HeroService;


/***/ },

/***/ 261:
/***/ function(module, exports) {

	"use strict";
	exports.HEROES = [
	    { 'id': 11, 'name': 'Mr. Nice' },
	    { 'id': 12, 'name': 'Narco' },
	    { 'id': 13, 'name': 'Bombasto' },
	    { 'id': 14, 'name': 'Celeritas' },
	    { 'id': 15, 'name': 'Magneta' },
	    { 'id': 16, 'name': 'RubberMan' },
	    { 'id': 17, 'name': 'Dynama' },
	    { 'id': 18, 'name': 'Dr IQ' },
	    { 'id': 19, 'name': 'Magma' },
	    { 'id': 20, 'name': 'Tornado' }
	];


/***/ },

/***/ 262:
/***/ function(module, exports) {

	module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <div *ngFor=\"#hero of heroes\" (click)=\"gotoDetail(hero)\" class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 263:
/***/ function(module, exports) {

	module.exports = "[class*='col-'] {\n  float: left;\n}\n*, *:after, *:before {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\n[class*='col-'] {\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.grid {\n  margin: 0 0em;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n\tpadding: 20px;\n\ttext-align: center;\n\tcolor: #eee;\n\tmax-height: 120px;\n\tmin-width: 120px;\n\tbackground-color: #607D8B;\n\tborder-radius: 2px;\n}\nh4 {\n  position: relative;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n\t.module {\n\t  font-size: 10px;\n\t  max-height: 75px; }\n}\n@media (max-width: 1024px) {\n\t.grid {\n\t  margin: 0;\n\t}\n\t.module {\n\t  min-width: 60px;\n\t}\n}\n"

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var router_1 = __webpack_require__(230);
	var hero_detail_component_1 = __webpack_require__(265);
	var hero_service_1 = __webpack_require__(260);
	var HeroesComponent = (function () {
	    function HeroesComponent(_router, _heroService) {
	        this._router = _router;
	        this._heroService = _heroService;
	    }
	    HeroesComponent.prototype.getHeroes = function () {
	        var _this = this;
	        this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
	    };
	    HeroesComponent.prototype.ngOnInit = function () {
	        this.getHeroes();
	    };
	    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
	    HeroesComponent.prototype.gotoDetail = function () {
	        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	    };
	    HeroesComponent = __decorate([
	        core_1.Component({
	            selector: 'my-heroes',
	            template: __webpack_require__(269),
	            styles: [__webpack_require__(270)],
	            directives: [hero_detail_component_1.HeroDetailComponent]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
	    ], HeroesComponent);
	    return HeroesComponent;
	}());
	exports.HeroesComponent = HeroesComponent;


/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var router_1 = __webpack_require__(230);
	var hero_1 = __webpack_require__(266);
	var hero_service_1 = __webpack_require__(260);
	var HeroDetailComponent = (function () {
	    function HeroDetailComponent(_heroService, _routeParams) {
	        this._heroService = _heroService;
	        this._routeParams = _routeParams;
	    }
	    HeroDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var id = +this._routeParams.get('id');
	        this._heroService.getHero(id)
	            .then(function (hero) { return _this.hero = hero; });
	    };
	    HeroDetailComponent.prototype.goBack = function () {
	        window.history.back();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', hero_1.Hero)
	    ], HeroDetailComponent.prototype, "hero", void 0);
	    HeroDetailComponent = __decorate([
	        core_1.Component({
	            selector: 'my-hero-detail',
	            template: __webpack_require__(267),
	            styles: [__webpack_require__(268)]
	        }), 
	        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
	    ], HeroDetailComponent);
	    return HeroDetailComponent;
	}());
	exports.HeroDetailComponent = HeroDetailComponent;


/***/ },

/***/ 266:
/***/ function(module, exports) {

	"use strict";
	var Hero = (function () {
	    function Hero() {
	    }
	    return Hero;
	}());
	exports.Hero = Hero;


/***/ },

/***/ 267:
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"hero\">\n  <h2>{{hero.name}} details!</h2>\n  <div>\n    <label>id: </label>{{hero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n  </div>\n  <button (click)=\"goBack()\">Back</button>\n</div>"

/***/ },

/***/ 268:
/***/ function(module, exports) {

	module.exports = "label {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc; \n  cursor: auto;\n}\n"

/***/ },

/***/ 269:
/***/ function(module, exports) {

	module.exports = "<div>\n  <h2>My Heroes</h2>\n  <ul class=\"heroes\">\n    <li *ngFor=\"#hero of heroes\" \n      [class.selected]=\"hero === selectedHero\" \n      (click)=\"onSelect(hero)\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </li>\n  </ul>\n  <div *ngIf=\"selectedHero\">\n    <h2>{{selectedHero.name | uppercase}} is my hero</h2>\n    <button (click)=\"gotoDetail()\">View Details</button>\n  </div>\n</div>"

/***/ },

/***/ 270:
/***/ function(module, exports) {

	module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\n"

/***/ },

/***/ 271:
/***/ function(module, exports) {

	module.exports = "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.router-link-active {\n  color: #039be5;\n}\n"

/***/ }

});
//# sourceMappingURL=bundle.js.map