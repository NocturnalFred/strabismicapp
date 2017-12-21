webpackJsonp([1,4],{

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(521);


/***/ }),

/***/ 520:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 520;


/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(642);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/angularcrap/strabismicapp/src/main.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(811),
            styles: [__webpack_require__(806)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/angularcrap/strabismicapp/src/app.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eye_game_desc_eye_game_desc_component__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eye_game_list_eye_game_list_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__eccentric_circles_eccentric_circles_component__ = __webpack_require__(643);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__eye_game_desc_eye_game_desc_component__["a" /* EyeGameDescComponent */],
                __WEBPACK_IMPORTED_MODULE_7__eye_game_list_eye_game_list_component__["a" /* EyeGameListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__eccentric_circles_eccentric_circles_component__["a" /* EccentricCirclesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: "eye-games", component: __WEBPACK_IMPORTED_MODULE_7__eye_game_list_eye_game_list_component__["a" /* EyeGameListComponent */]
                    },
                    {
                        path: "eccentric-circles", component: __WEBPACK_IMPORTED_MODULE_9__eccentric_circles_eccentric_circles_component__["a" /* EccentricCirclesComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/angularcrap/strabismicapp/src/app.module.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EccentricCirclesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EccentricCirclesComponent = (function () {
    function EccentricCirclesComponent() {
        this.instructions1 = 0;
        this.configDisplay = 1;
        this.JSONConfigDisplay = 0;
        this.movementToggle = 0;
        this.speed = 500;
        this.maxWidth = 700;
        this.minWidth = 500;
        this.maxHeight = 0;
        this.lineWidth = 25;
        this.leftColor = "None";
        this.rightColor = "None";
        this.leftOpacity = 1.0;
        this.rightOpacity = 1.0;
        this.leftText = "Clear";
        this.leftFontSize = 25;
        this.leftTransparencyTime = 1000;
        this.rightText = "Clear";
        this.rightFontSize = 25;
        this.rightTransparencyTime = 1000;
        this.trans = 1;
        this.transparency = 0;
        this.circles = JSON.parse("{\n     \"speed\" : 200,\n     \"maxwidth\" : 700,\n     \"minwidth\" : 500,\n     \"maxheight\" : 0,\n     \"xaxiscenter\" : 50,\n     \"move\" : 1,\n     \"leftcircle\" :\n     {\n        \"type\" : 1,\n        \"outercircleradius\" : 220,\n        \"color\" : \"none\",\n        \"xcoord\" : 525,\n        \"ycoord\" : 300,\n        \"linewidth\" : 25,\n        \"innertext\" : \"Clear\",\n        \"opacity\" : \"1\",\n        \"fontsize\" : \"25\",\n        \"transparencytime\" : \"1000\"\n     },\n\n     \"rightcircle\":\n     {\n        \"type\" : -1,\n        \"outercircleradius\" : 220,\n        \"color\" : \"none\",\n        \"xcoord\" : 1075,\n        \"ycoord\" : 300,\n        \"linewidth\" : 25,\n        \"innertext\" : \"Clear\",\n        \"opacity\" : \"1\",\n        \"fontsize\" : \"25\",\n        \"transparencytime\" : \"1000\"\n     }\n  }");
    }
    EccentricCirclesComponent.prototype.ngOnChanges = function (changes) {
        console.log("CHANGE");
    };
    EccentricCirclesComponent.prototype.transparencyToggle = function () {
        this.transparency = (this.transparency ^ 1);
    };
    EccentricCirclesComponent.prototype.toggleInstructions1 = function () {
        this.instructions1 = (this.instructions1 ^ 1);
    };
    EccentricCirclesComponent.prototype.toggleConfigDisplay = function () {
        this.configDisplay = (this.configDisplay ^ 1);
    };
    EccentricCirclesComponent.prototype.toggleJSONConfigDisplay = function () {
        this.JSONConfigDisplay = (this.JSONConfigDisplay ^ 1);
    };
    EccentricCirclesComponent.prototype.toggleMovement = function () {
        this.movementToggle = (this.movementToggle ^ 1);
    };
    EccentricCirclesComponent.prototype.swapCircles = function () {
        this.circles.leftcircle.type *= -1;
        this.circles.rightcircle.type *= -1;
    };
    EccentricCirclesComponent.prototype.inputChange = function () {
        this.speed = parseInt(this.speed.toString().replace(/[^0-9]/g, ""));
        if (this.speed < 2 || this.speed.toString() === "NaN") {
            this.speed = 2;
        }
        else if (this.speed > 1000) {
            this.speed = 1000;
        }
        if (!(this.maxWidth > 300)) {
            this.maxWidth = 300;
        }
        if ((this.minWidth < 500)) {
            this.minWidth = 500;
        }
        if (!(this.maxHeight < 500)) {
            this.maxHeight = 0;
        }
        if (this.rightTransparencyTime > 10000) {
            this.rightTransparencyTime = 10000;
        }
        else if (this.rightTransparencyTime < 100) {
            this.rightTransparencyTime = 100;
        }
        if (this.leftTransparencyTime > 10000) {
            this.leftTransparencyTime = 10000;
        }
        else if (this.leftTransparencyTime < 100) {
            this.leftTransparencyTime = 100;
        }
        this.circles.speed = this.speed;
        this.circles.minwidth = this.minWidth;
        this.circles.maxwidth = this.maxWidth;
        this.circles.leftcircle.transparencytime = this.leftTransparencyTime;
        this.circles.rightcircle.transparencytime = this.rightTransparencyTime;
        this.circles.leftcircle.color = this.leftColor;
        this.circles.rightcircle.color = this.rightColor;
        this.circles.leftcircle.fontsize = this.leftFontSize;
        this.circles.rightcircle.fontsize = this.rightFontSize;
        this.circles.leftcircle.opacity = this.leftOpacity;
        this.circles.rightcircle.opacity = this.rightOpacity;
        this.circles.leftcircle.innertext = this.leftText;
        this.circles.rightcircle.innertext = this.rightText;
        this.circles.leftcircle.linewidth = this.lineWidth;
        this.circles.rightcircle.linewidth = this.lineWidth;
    };
    EccentricCirclesComponent.prototype.drawOuterCircle = function (context, circle) {
        context.beginPath();
        context.lineWidth = circle.linewidth;
        context.arc(circle.xcoord, circle.ycoord, circle.outercircleradius, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();
    };
    EccentricCirclesComponent.prototype.drawInnerCircle = function (context, circle) {
        //position is relative to another circle so the radius and x cooridinates are transformed here.
        var innerRadius = circle.outercircleradius * 5 / 9;
        var innerXcoord = circle.xcoord + circle.type * innerRadius / 3.5;
        context.beginPath();
        context.lineWidth = circle.linewidth;
        if (!/none/i.test(circle.color)) {
            context.fillStyle = circle.color;
        }
        else {
            context.fillStyle = "transparent";
        }
        context.arc(innerXcoord, circle.ycoord, innerRadius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.closePath();
    };
    EccentricCirclesComponent.prototype.drawText = function (context, circle) {
        context.stroke();
        context.closePath();
        context.fillStyle = "rgba(0, 0, 0, " + circle.opacity.toString() + ")";
        context.font = circle.fontsize.toString() + "px Arial";
        var innerRadius = circle.outercircleradius * 5 / 9;
        var fontSize = context.measureText(circle.innertext);
        var innerXcoord = circle.xcoord + circle.type * innerRadius / 3.5 - ((fontSize.width) / 2);
        context.fillText(circle.innertext, innerXcoord, circle.ycoord + 8);
        context.beginPath();
        context.fillStyle = 'white';
        //context.arc(this.innerfakePointx,this.innerfakePointy,40,0,2*Math.PI);
        context.fill();
        context.stroke();
        context.closePath();
    };
    EccentricCirclesComponent.prototype.updateNoneTimeDependentConfig = function () {
        var _this = this;
        setTimeout(function () {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, 1600, 1000);
            var circles = _this.circles;
            _this.drawOuterCircle(ctx, circles.leftcircle);
            ctx = c.getContext("2d");
            _this.drawInnerCircle(ctx, circles.leftcircle); //200,30,800-190-85,300,"red", 1);
            _this.drawOuterCircle(ctx, circles.rightcircle);
            _this.drawInnerCircle(ctx, circles.rightcircle);
            _this.drawText(ctx, circles.leftcircle);
            _this.drawText(ctx, circles.rightcircle);
            _this.updateNoneTimeDependentConfig();
        }, 100);
    };
    EccentricCirclesComponent.prototype.leftTrans = function () {
        var _this = this;
        //console.log(this.circles.leftcircle.transparencytime);
        setTimeout(function () {
            _this.circles.rightcircle.opacity = 1;
            _this.circles.leftcircle.opacity = _this.leftOpacity;
            _this.rightTrans();
        }, parseInt(this.circles.leftcircle.transparencytime)); //);
    };
    EccentricCirclesComponent.prototype.rightTrans = function () {
        var _this = this;
        setTimeout(function () {
            _this.circles.leftcircle.opacity = 1;
            _this.circles.rightcircle.opacity = _this.rightOpacity;
            _this.leftTrans();
        }, this.circles.rightcircle.transparencytime);
    };
    EccentricCirclesComponent.prototype.movement = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.movementToggle == 0) {
                return _this.movement();
            }
            if ((_this.circles.rightcircle.xcoord - _this.circles.leftcircle.xcoord) > _this.circles.maxwidth) {
                _this.circles.move = -1 * Math.abs(_this.circles.move);
            }
            if ((_this.circles.rightcircle.xcoord - _this.circles.leftcircle.xcoord) < _this.circles.minwidth) {
                _this.circles.move = Math.abs(_this.circles.move);
            }
            console.log((_this.circles.rightcircle.xcoord - _this.circles.leftcircle.xcoord));
            console.log(_this.circles.minwidth);
            _this.circles.leftcircle.xcoord = _this.circles.leftcircle.xcoord - _this.circles.move;
            _this.circles.rightcircle.xcoord = _this.circles.rightcircle.xcoord + _this.circles.move;
            _this.movement();
        }, this.circles.speed);
    };
    EccentricCirclesComponent.prototype.ngOnInit = function () {
        this.updateNoneTimeDependentConfig();
        this.leftTrans();
        this.movement();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EccentricCirclesComponent.prototype, "config", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], EccentricCirclesComponent.prototype, "speed", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], EccentricCirclesComponent.prototype, "maxWidth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], EccentricCirclesComponent.prototype, "minWidth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], EccentricCirclesComponent.prototype, "maxHeight", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], EccentricCirclesComponent.prototype, "lineWidth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EccentricCirclesComponent.prototype, "leftColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EccentricCirclesComponent.prototype, "rightColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], EccentricCirclesComponent.prototype, "leftOpacity", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], EccentricCirclesComponent.prototype, "rightOpacity", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EccentricCirclesComponent.prototype, "leftText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], EccentricCirclesComponent.prototype, "leftFontSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EccentricCirclesComponent.prototype, "leftTransparencyTime", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EccentricCirclesComponent.prototype, "rightText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EccentricCirclesComponent.prototype, "rightFontSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EccentricCirclesComponent.prototype, "rightTransparencyTime", void 0);
    EccentricCirclesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'eccentriccircles',
            template: __webpack_require__(812),
            styles: [__webpack_require__(807)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_ng2_simple_timer__["SimpleTimer"]]
        }), 
        __metadata('design:paramtypes', [])
    ], EccentricCirclesComponent);
    return EccentricCirclesComponent;
}());
//# sourceMappingURL=D:/angularcrap/strabismicapp/src/eccentric-circles.component.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EyeGameDescComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EyeGameDescComponent = (function () {
    function EyeGameDescComponent() {
    }
    EyeGameDescComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EyeGameDescComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EyeGameDescComponent.prototype, "eyegameimage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], EyeGameDescComponent.prototype, "description", void 0);
    EyeGameDescComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eye-game-desc',
            template: __webpack_require__(813),
            styles: [__webpack_require__(808)]
        }), 
        __metadata('design:paramtypes', [])
    ], EyeGameDescComponent);
    return EyeGameDescComponent;
}());
//# sourceMappingURL=D:/angularcrap/strabismicapp/src/eye-game-desc.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EyeGameListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EyeGameListComponent = (function () {
    function EyeGameListComponent() {
    }
    EyeGameListComponent.prototype.ngOnInit = function () {
    };
    EyeGameListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(814),
            styles: [__webpack_require__(809)]
        }), 
        __metadata('design:paramtypes', [])
    ], EyeGameListComponent);
    return EyeGameListComponent;
}());
//# sourceMappingURL=D:/angularcrap/strabismicapp/src/eye-game-list.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(815),
            styles: [__webpack_require__(810)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=D:/angularcrap/strabismicapp/src/navbar.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/angularcrap/strabismicapp/src/environment.js.map

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = ".clicker {\r\n  float:right;\r\n  padding:5px;\r\n  margin-left: 2px;\r\n  margin-right: 8px;\r\n  margin-top: 2px;\r\n  color: blue;\r\n  background-color: lightblue;\r\n  border-style: solid;\r\n  border-color: darkblue;\r\n  border-width: 1px;\r\n  border-radius: 5px;\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.clicker:hover {\r\n  cursor: help;\r\n}\r\n.info {\r\nposition:absolute;\r\ncolor:black;\r\ndisplay:none;\r\nheight:auto;\r\nwidth:200px;\r\nopacity: .9;\r\nmargin-left: 10px;\r\npadding: 1%;\r\nz-index: 20;\r\nborder-radius: 5px;\r\nbackground-color: lightblue;\r\nborder-style: solid;\r\nborder-color: darkblue;\r\nborder-width: 1px;\r\n}\r\n.clicker:focus > .info{\r\n  display:block;\r\n}\r\n.viewtoggle {\r\n  color: blue;\r\n  float: left;\r\n  width: 33%;\r\n  cursor: pointer;\r\n}\r\n.instructions {\r\n  width: 80%;\r\n  padding-left: 15%;\r\n  padding-right: 15%;\r\n}\r\n\r\n\r\n\r\n.eccentric-circles-config {\r\n  padding-left: 15%;\r\n  padding-right: 15%;\r\n}\r\n\r\n.input-title {\r\n  width: 500px;\r\n}\r\n\r\n.binary-options {\r\n  padding-left: 15%;\r\n  padding-right: 15%;\r\n  padding-bottom: 5px;\r\n\r\n}\r\n\r\n.binary {\r\n  float: left;\r\n}\r\n\r\n.input-config {\r\n\r\n}\r\n\r\n.text-config {\r\n  padding-left: 15%;\r\n  padding-right: 15%;\r\n}\r\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = ".eye-game-desc {\r\n  padding-bottom: 10px;\r\n  margin: auto;\r\n  width: 60%;\r\n  font-size: 24;\r\n}\r\n\r\n.list-title {\r\n   background-color: lightblue;\r\n   width:auto;\r\n   padding: 10px,10px,10px,10px;\r\n}\r\n\r\n.list-description {\r\n  margin: auto;\r\n  width: 50%;\r\n  font-size: 18;\r\n}\r\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "#eye-game-list-body {\r\n\r\n  width:100%;\r\n  height:100%;\r\n}\r\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = ".nav-item {\r\n  float:left;\r\n  background-color: None;\r\n\r\n}\r\n.navbar-brand {\r\n  background-color: darkred;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: black;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.nav-link {\r\n  margin-top:10px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  background-color: lightgrey;\r\n  border-style: solid;\r\n  border-top-width: 1px;\r\n  border-right-width: 1px;\r\n  border-bottom-width: 1px;\r\n  border-left-width: 0px;\r\n  border-color: black;\r\n\r\n}\r\n\r\n.eye-buffer {\r\n  padding-top: 60px;\r\n\r\n}\r\n\r\n/* the-back exists as a default background color for all of my views\r\n    I can not figure out how to get :host /deep/ or some variation of that to work\r\n    If anyone knows how to set the background color for the *entire* page across all views\r\n    please email fred.rodd@gmail.com with the appropriate info.  I will owe you a donut.\r\n*/\r\n.the-back  {\r\n  background-color: #ffeeff;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  z-index: -100;\r\n}\r\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<eccentriccircles></eccentriccircles>\r\n<router-outlet>\r\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n<div class=\"instructions\" >\r\n  <div class=\"viewtoggle\" (click)=\"toggleInstructions1()\">Toggle Info</div>\r\n  <div class=\"viewtoggle\" (click)=\"toggleConfigDisplay()\">Toggle Config</div>\r\n  <!--<div class=\"viewtoggle\" (click)=\"toggleJSONConfigDisplay()\">Toggle JSON Config</div> -->\r\n  <br/> <br/>\r\n</div>\r\n\r\n<div class=\"instructions\" *ngIf=instructions1>\r\n  <p>You may toggle views by clicking the toggle text above<br/>\r\n  <p>There is no score in this game.  The goal is to cross your eyes inward or uncross them outward\r\n    such that the circles overlap and \"fuse.\" An explanation can be found here: <a href=\"https://www.youtube.com/watch?v=aVamg6E3ajY\"> Eccentric Circles </a>\r\n  </p>\r\n</div>\r\n\r\n<div class=\"binary-options\" >\r\n  <div>\r\n  <div class=\"binary\"> <button (click)=\"swapCircles()\">Swap Directions</button>\r\n    <div class=\"clicker\" tabindex=\"1\"> ?\r\n      <div class=\"info\">\r\n        This button will change the circles so that the depth is reversed.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--\r\n  <div class=\"binary\"> <button (click)=\"transparencyToggle()\">Transparency On/Off</button>\r\n    <div class=\"clicker\" tabindex=\"1\"> ?\r\n      <div class=\"info\">\r\n        Turn on colors for the inner circles or turn them off.\r\n      </div>\r\n    </div>\r\n  </div>\r\n-->\r\n  <div class=\"binary\"> <button (click)=\"toggleMovement()\">Movement On/Off</button>\r\n    <div class=\"clicker\" tabindex=\"1\"> ?\r\n      <div class=\"info\">\r\n        Allow the circles to move.  They will move toward eachother once they reach MaxWidth and move away from eachother once they reach min width.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--\r\n  <div class=\"binary\"> <button >Reset</button>\r\n    <div class=\"clicker\" tabindex=\"1\"> ?\r\n      <div class=\"info\">\r\n        Reset the circle to default values.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  -->\r\n</div>\r\n</div>\r\n<div class=\"eccentric-circles-config\" *ngIf=configDisplay>\r\n  <div class=\"input-config\">\r\n    <table>\r\n      <tr>\r\n        <td>Speed: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"speed\" size=\"3\" (input)=\"inputChange()\" /></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            Circles move a particular distance per interval.  The shorter the interval the faster the movement.\r\n            Shortest possible interval should be 200ms.\r\n            The longest interval should be no more than 1000ms to avoid apparent freezing of the game.  The game is not actually frozen.\r\n            instead what happens is if you put in 10000ms that is equivalent to saying update every 10 seconds.  It will take at least 10 seconds\r\n            to update the page.\r\n          </div>\r\n        </div>\r\n        <td><!--MaxHeight: --></td>\r\n        <td><!--<input type=\"text\" [(ngModel)]=\"maxHeight\" size=\"3\" (input)=\"inputChange()\" />--></td>\r\n        <!--<div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            Circles may move up and down on level with eachother.  This value defines how far up and down they will go.\r\n          </div>\r\n        </div>-->\r\n        <td></td>\r\n\t\t<td></td>\r\n        <td>\r\n          Left Circle\r\n        </td>\r\n        <td>\r\n          Right Circle\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>MaxWidth: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"maxWidth\" size=\"3\" (input)=\"inputChange()\"/></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            Maximum distance the circles will move away from each other.\r\n          </div>\r\n        </div>\r\n        <td>MinWidth: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"minWidth\" size=\"3\" (input)=\"inputChange()\"/></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            Closest the circles can get to each other.\r\n          </div>\r\n        </div>\r\n        <td>Color: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"leftColor\" size=\"5\" (input)=\"inputChange()\"/></td>\r\n        <td style=\"padding-left:5px\"><input type=\"text\" [(ngModel)]=\"rightColor\" size=\"5\" (input)=\"inputChange()\"/></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            Inner color of the circle.  You may use names like red, blue, green, orange, and other html standard color names.  You may also use hex values such as #FFAA08 \r\n          </div>\r\n        </div>\r\n      </tr>\r\n      <tr>\r\n        <td>LineWidth: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"lineWidth\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            Determines the thickness of the circle's lines.\r\n          </div>\r\n        </div>\r\n        <td colspan=3></td>\r\n        <td>Opacity: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"leftOpacity\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <td style=\"padding-left:5px\"><input type=\"text\" [(ngModel)]=\"rightOpacity\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            The transparency of the text inside of the the circle.  Values should range between 0 and 1.  EG: 0, 0.3, 0.5, 0.8, 1\r\n          </div>\r\n        </div>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=6></td>\r\n        <td>Text: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"leftText\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <td style=\"padding-left:5px\"><input type=\"text\" [(ngModel)]=\"rightText\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            The content of the text inside of each circle\r\n          </div>\r\n        </div>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=6></td>\r\n        <td>Text Font Size: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"leftFontSize\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <td style=\"padding-left:5px\"><input type=\"text\" [(ngModel)]=\"rightFontSize\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            How large the font in the inner circles appear.\r\n          </div>\r\n        </div>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=6></td>\r\n        <td>Non-Transparency Time: </td>\r\n        <td><input type=\"text\" [(ngModel)]=\"leftTransparencyTime\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <td style=\"padding-left:5px\"><input type=\"text\" [(ngModel)]=\"rightTransparencyTime\" size=\"5\" (input)=\"inputChange()\" /></td>\r\n        <div class=\"clicker\" tabindex=\"1\"> ?\r\n          <div class=\"info\">\r\n            Transparency is meant to alternate per text field.  This number indicates how long the text should remain fully opaque before becoming transparent again.\r\n\t\t\tFor example, if you say \"1000\" that means \"stay visible for 1 second, then become transparent.  Once transparent the other text field will remain opaque \r\n\t\t\tfor however long it is instructed to remain opaque.\r\n          </div>\r\n        </div>\r\n      </tr>\r\n\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"text-config\" *ngIf=JSONConfigDisplay>\r\n<textarea ref-textarea [(ngModel)]=\"circles\" cols=40 rows=10 (click)=\"console()\"></textarea>\r\n</div>\r\n\r\n</div>\r\n<div width=\"1600\" height=\"800\">\r\n  <canvas id=\"myCanvas\" width=\"1600\" height=\"800\" style=\"margin-top:20px;border:1px solid #c3c3c3;position: fixed;left: 50%;margin-left: -800px;\">\r\n  Your browser does not support the HTML5 canvas tag.\r\n  </canvas>\r\n</div>\r\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"eye-game-desc\">\r\n  <div>\r\n    <span class=\"list-title\">  {{title}} </span>\r\n    <div>\r\n      <img [src]=\"eyegameimage\"/>\r\n    </div>\r\n    <div class=\"list-description\">\r\n      <p>\r\n        {{description}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "\r\n<div id=eye-game-list-body>\r\n\r\n<div>\r\n\r\n<app-eye-game-desc title=\"Eccentric Circles\" description=\"An animated version of the Eccentric Circles vison therapy technique\">\r\n\r\n</app-eye-game-desc>\r\n<app-eye-game-desc title=\"RGB Circles\" description=\"The illusion of depth is created with red/cyan glasses.  See how well you can distinguish depth created entirely by binocular cues.\">\r\n</app-eye-game-desc>\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!--\r\n  <nav class=\"navbar navbar-fixed-top navbar-dark bg-inverse\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\">Navigation</a>\r\n        <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"\">home</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/eye-games\">The Games</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"eccentric-circles\">Eccentric Circles</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"red-cyan-circles\">Red Cyan Circles</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>-->\r\n<div class=\"the-back\"></div>\r\n<!-- <div class=\"eye-buffer\"></div> -->\r\n</div>\r\n"

/***/ })

},[1103]);
//# sourceMappingURL=main.bundle.map