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

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Routable animations
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('heroes <=> hero', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selective-preloading-strategy.service */ "./src/app/selective-preloading-strategy.service.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/addtask/addtask.component */ "./src/app/task/addtask/addtask.component.ts");
/* harmony import */ var _task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/viewtask/viewtask.component */ "./src/app/task/viewtask/viewtask.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        data: { preload: true }
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        data: { preload: true }
    },
    {
        path: 'project',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"],
        data: { preload: true }
    },
    {
        path: 'task/view',
        component: _task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_6__["ViewtaskComponent"],
        data: { preload: true }
    },
    {
        path: 'task/:mode',
        component: _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_5__["AddtaskComponent"],
        data: { preload: true }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false,
                    preloadingStrategy: _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_2__["SelectivePreloadingStrategyService"],
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* a {  \n\n    text-decoration: none;\n    padding: 2%;\n    margin: 0%\n\n  \n  } */\n\n  .navbar-brand\n  {\n      color: #2a4a97;\n      padding-top: 10px !important\n  }\n\n  .navbar-brand>img\n  {\n      display: inline !important\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7TUFPTTs7RUFFSjs7TUFFSSxlQUFlO01BQ2YsNEJBQTRCO0dBQy9COztFQUNEOztNQUVJLDBCQUEwQjtHQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYSB7ICBcblxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBtYXJnaW46IDAlXG5cbiAgXG4gIH0gKi9cblxuICAubmF2YmFyLWJyYW5kXG4gIHtcbiAgICAgIGNvbG9yOiAjMmE0YTk3O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudFxuICB9XG4gIC5uYXZiYXItYnJhbmQ+aW1nXG4gIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-collapse collapse\">\n      <a class=\"navbar-brand\" routerLink=\"/home\">\n        <img style=\"width: 32px\" src=\"../assets/Images/PM_logo1.png\">\n        Project Manager\n      </a>\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li>\n          <a routerLink=\"/project\" routerLinkActive=\"active\">Add Project</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/task', 'add']\" routerLinkActive=\"active\">Add Task</a>\n        </li>\n        <li>\n          <a routerLink=\"/user\" routerLinkActive=\"active\">Add User</a>\n        </li>\n        <li>\n          <a routerLink=\"/task/view\" routerLinkActive=\"active\">View Task</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div class=\"container body-content\">\n  <div [@routeAnimation]=\"getAnimationData(routerOutlet)\">\n    <router-outlet #routerOutlet=\"outlet\"></router-outlet>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getAnimationData = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _project_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project-service */ "./src/app/project/project-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/project.module */ "./src/app/project/project.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task/addtask/addtask.component */ "./src/app/task/addtask/addtask.component.ts");
/* harmony import */ var _task_services_task_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task/services/task.service */ "./src/app/task/services/task.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _task_modal_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./task/modal/project-modal/project-modal.component */ "./src/app/task/modal/project-modal/project-modal.component.ts");
/* harmony import */ var _task_modal_task_modal_task_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./task/modal/task-modal/task-popup.component */ "./src/app/task/modal/task-modal/task-popup.component.ts");
/* harmony import */ var _task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./task/viewtask/viewtask.component */ "./src/app/task/viewtask/viewtask.component.ts");
/* harmony import */ var _user_Modal_UserModal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/Modal/UserModal/user-modal.component */ "./src/app/user/Modal/UserModal/user-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = /** @class */ (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        // Use a custom replacer to display function names in the route configs
        // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
        // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"],
                _project_project_module__WEBPACK_IMPORTED_MODULE_11__["ProjectModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
            ],
            providers: [_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _project_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"], _task_services_task_service__WEBPACK_IMPORTED_MODULE_14__["AddtaskService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["APP_BASE_HREF"], useValue: '/' }],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_Modal_UserModal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__["UserModalComponent"],
                _task_modal_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProjectModalComponent"],
                _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_13__["AddtaskComponent"],
                _task_modal_task_modal_task_popup_component__WEBPACK_IMPORTED_MODULE_17__["TaskPopupComponent"],
                _task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_18__["ViewtaskComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
            ],
            entryComponents: [
                _user_Modal_UserModal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__["UserModalComponent"],
                _task_modal_task_modal_task_popup_component__WEBPACK_IMPORTED_MODULE_17__["TaskPopupComponent"],
                _task_modal_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProjectModalComponent"],
                _task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_13__["AddtaskComponent"],
                _task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_18__["ViewtaskComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"text-align: center;\">\n      <img src=\"../assets/Images/HomePageImage.jpg\" style=\"width: 50%;\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/project/project-service.ts":
/*!********************************************!*\
  !*** ./src/app/project/project-service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectService = /** @class */ (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost/ProjectManagementAPI/api/Project';
    }
    ProjectService.prototype.saveProject = function (project) {
        var projectBody = JSON.stringify(project);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headerOptions });
        return this._http.post(this.baseUrl + '/Create', projectBody, requestOptions);
        // .map(res => res.json()) // ...and calling .json() on the response to return data
        // .catch((error:any) => this._errorHandler(error.error)) //...errors if
        // .subscribe();
    };
    ProjectService.prototype.getprojects = function () {
        return this._http.get(this.baseUrl + '/GetProjects')
            .map(function (data) {
            return data.json();
        }).catch(function (error) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error.error.json); });
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this._http.delete(this.baseUrl + '/Delete/' + id);
        //.map(res => res.json());
    };
    ProjectService.prototype.updateProject = function (project) {
        //debugger;
        var userBody = JSON.stringify(project);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headerOptions });
        return this._http.put(this.baseUrl + '/Update/', userBody, requestOptions);
    };
    ProjectService.prototype._errorHandler = function (error) {
        //debugger;
        console.log(error);
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error || "Internal server error");
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-9 \">\n      <form (ngSubmit)=\"onSubmit(projectForm)\" name=\"projectForm\" #projectForm=\"ngForm\" class=\"form-horizontal\">\n        <input type=\"hidden\" name=\"projectID\" #userID=\"ngModel\" [(ngModel)]=\"project.ProjectID\">\n\n        <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': projecttitle.invalid && projecttitle.dirty, \n        'has-success': projecttitle.valid && projecttitle.dirty \n      }\">\n          <label class=\"control-label col-sm-2\" for=\"projecttitle\">Project:</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" id=\"projecttitle\" required class=\"form-control\" [(ngModel)]=\"project.ProjectTitle\" name=\"projecttitle\"\n              #projecttitle=\"ngModel\" />\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"projecttitle\"></label>\n          <div class=\"col-sm-10\">\n            <input type=\"checkbox\" id=\"chkDate\" name=\"chkDate\" (change)=\"onCheckedChange($event)\" value=\"chkDate\" unchecked />\n            &nbsp;\n            <label for=\"chkDate\"> Set start and end date</label>\n            &nbsp;\n            <input type=\"date\" id=\"start\" name=\"start\"\n            [ngModel]=\"project.Startdate | date:'yyyy-MM-dd'\" \n            (ngModelChange)=\"project.Startdate = $event\"\n            [value]=\"project.Startdate | date:'yyyy-MM-dd'\"\n            [disabled]=\"!dateDisabled\" #start=\"ngModel\">\n            &nbsp;\n            <input type=\"date\" id=\"end\" name=\"end\"\n            [ngModel]=\"project.Enddate | date:'yyyy-MM-dd'\" \n            (ngModelChange)=\"project.Enddate = $event\"\n            [value]=\"project.Enddate | date:'yyyy-MM-dd'\"\n            [disabled]=\"!dateDisabled\" #start=\"ngModel\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"priority\">Priority:</label>\n          <div class=\"col-sm-10\">\n            <input type=\"range\" id=\"priority\" name=\"priority\" [(ngModel)]=\"project.Priority\" min=\"0\" max=\"30\" />\n            {{project.Priority}}\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"hidden\" [(ngModel)]=\"this.project.UserID\" #userID=\"ngModel\" name=\"hiddenUserID\" />\n          <label class=\"control-label col-sm-2\" for=\"priority\">Manager:</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group\">\n              <input type=\"text\" [(ngModel)]=\"this.project.FirstName\" id=\"projectmanager\" required class=\"form-control\"\n                name=\"projectmanager\" #firstName=\"ngModel\" disabled />\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\" name=\"btnprojectmanager\" (click)=\"OpenManagerPopup()\">Manager</button>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"priority\"></label>\n          <div class=\"col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-success\">{{this.buttonText}}</button>\n            &nbsp;\n            <button type=\"reset\" class=\"btn btn-success\">Reset</button>\n          </div>\n        </div>\n      </form>\n     \n    </div>\n    <div class=\"col-md-1\"></div>\n     <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Project Title</th>\n            <th>Start Date</th>\n            <th>End Date</th>\n            <th>Priority</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let project of projects\">\n            <td>{{project.ProjectTitle}}</td>\n            <td>{{project.StartDate |date:\"dd/MM/yyyy\" }}</td>\n            <td>{{project.EndDate |date:\"dd/MM/yyyy\"}}</td>\n            <td>{{project.Priority}}</td>\n            <td style=\"width: 180px;\">\n                <div class=\"btn-group\" role=\"group\">\n                    <button class=\"btn btn-success\"  (click)=\"edit(project)\">Edit</button>\n                    <button class=\"btn btn-success\" (click)=\"delete(project.ProjectID)\">Delete</button>\n                </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.btn-group button {\n  margin: 0 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9DOlxcQWJiYXNcXFByb2plY3RNYW5hZ2VtZW50QVBJXFxQcm9qZWN0TWFuYWdlbWVudF9Bbmd1bGFyL3NyY1xcYXBwXFxwcm9qZWN0XFxwcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQThCO0VBQUUsV0FBVyxFQUM1Qzs7QUFFRDtFQUNFLCtCQUE4QjtFQUFFLFNBQVMsRUFDMUM7O0FBR0Q7RUFBb0IsY0FBWSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG59XG5cblxuLmJ0bi1ncm91cCBidXR0b24geyBtYXJnaW46MCAzcHg7fSJdfQ== */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/app/project/project.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-service */ "./src/app/project/project-service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_Modal_UserModal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/Modal/UserModal/user-modal.component */ "./src/app/user/Modal/UserModal/user-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, managerDialog) {
        this.projectService = projectService;
        this.managerDialog = managerDialog;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.buttonText = "Add";
        this.project = new _project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        this.getProjects();
    };
    ProjectComponent.prototype.OpenManagerPopup = function () {
        var _this = this;
        var dialogRef = this.managerDialog.open(_user_Modal_UserModal_user_modal_component__WEBPACK_IMPORTED_MODULE_4__["UserModalComponent"], {
            width: '600px',
            data: { User: this.user }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.project.FirstName = result.FirstName;
            _this.project.UserID = result.UserID;
        });
    };
    ProjectComponent.prototype.onCheckedChange = function (eve) {
        if (eve.target.checked) {
            this.dateDisabled = true;
        }
        else {
            this.dateDisabled = false;
        }
    };
    ProjectComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.project.Startdate > this.project.Enddate) {
            alert('Enddate should  not come before  start date');
            return;
        }
        if (this.project.ProjectID == null) {
            this.projectService.saveProject(this.project).subscribe(function () { _this.getProjects(); });
        }
        else {
            this.projectService.updateProject(this.project).subscribe(function () { _this.getProjects(); });
        }
        if (form != null) {
            this.project = new _project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
            form.reset();
            this.buttonText = "Add";
        }
        this.getProjects();
    };
    ProjectComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this record') == true) {
            this.projectService.deleteProject(id).subscribe(function () { _this.getProjects(); });
        }
    };
    ProjectComponent.prototype.edit = function (selectedproject) {
        this.buttonText = "Update";
        if (selectedproject) {
            this.project.ProjectID = selectedproject.ProjectID;
            this.project.Startdate = selectedproject.StartDate;
            this.project.Enddate = selectedproject.EndDate;
            this.project.Priority = selectedproject.Priority;
            this.project.ProjectTitle = selectedproject.ProjectTitle;
            this.project.FirstName = selectedproject.FirstName;
        }
    };
    ProjectComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getprojects().subscribe(function (x) { return _this.projects = x; });
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project.module.ts":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.component */ "./src/app/project/project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/project/project.ts":
/*!************************************!*\
  !*** ./src/app/project/project.ts ***!
  \************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(Priority, ProjectTitle, UserID, FirstName, Startdate, Enddate, ProjectID) {
        this.Priority = Priority;
        this.ProjectTitle = ProjectTitle;
        this.UserID = UserID;
        this.FirstName = FirstName;
        this.Startdate = Startdate;
        this.Enddate = Enddate;
        this.ProjectID = ProjectID;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/selective-preloading-strategy.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/selective-preloading-strategy.service.ts ***!
  \**********************************************************/
/*! exports provided: SelectivePreloadingStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function() { return SelectivePreloadingStrategyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectivePreloadingStrategyService = /** @class */ (function () {
    function SelectivePreloadingStrategyService() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategyService.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
    };
    SelectivePreloadingStrategyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], SelectivePreloadingStrategyService);
    return SelectivePreloadingStrategyService;
}());



/***/ }),

/***/ "./src/app/task/addtask/addtask.component.html":
/*!*****************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-9 \">\n      <form (ngSubmit)=\"onSubmit(taskForm)\" name=\"taskForm\"  #taskForm=\"ngForm\" class=\"form-horizontal\">\n         <!--<input type=\"hidden\" name=\"taskID\" #taskID=\"ngModel\" [(ngModel)]=\"viewModel.TaskID\">--> \n\n        <div class=\"form-group\">\n          <!-- <input type=\"hidden\" [(ngModel)]=\"viewModel.ProjectID\" #userID=\"ngModel\" name=\"hiddenProjectID\" /> -->\n          <label class=\"control-label col-sm-2\" for=\"priority\">Project:</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group\">\n              <input type=\"text\" [(ngModel)]=\"viewModel.ProjectName\" id=\"projectName\" required class=\"form-control\"\n                name=\"projectName\" disabled />\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\" name=\"btnProjectName\" (click)=\"OpenProjectPopup()\">Search</button>\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"task\">Task:</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" id=\"task\" required class=\"form-control\" [(ngModel)]=\"viewModel.TaskName\" name=\"task\"\n              #task=\"ngModel\" />\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"chkParentTask\"></label>\n          <div class=\"col-sm-10\">\n            <input type=\"checkbox\" id=\"chkParentTask\" name=\"chkParentTask\" [(ngModel)]=\"viewModel.IsParentTask\" checked />\n            <span>Parent Task?</span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"priority\">Priority:</label>\n          <div class=\"col-sm-10\">\n            <input type=\"range\" id=\"priority\" name=\"priority\" [(ngModel)]=\"viewModel.Priority\" min=\"0\" max=\"30\"\n              [disabled]=\"viewModel.IsParentTask\" />\n            {{viewModel.Priority}}\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <!-- <input type=\"hidden\" [(ngModel)]=\"viewModel.ParentTaskID\" #userID=\"ngModel\" name=\"hiddenParentID\" /> -->\n          <label class=\"control-label col-sm-2\" for=\"priority\">Parent Task:</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group\">\n              <input type=\"text\" [(ngModel)]=\"viewModel.ParentTaskName\" id=\"parentName\" required class=\"form-control\"\n                name=\"parentName\" disabled />\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\" name=\"btnParentName\" (click)=\"OpenParentTaskPopup()\"\n                  [disabled]=\"viewModel.IsParentTask\">Search</button>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"start\">Start Date</label>\n          <div class=\"col-sm-4\">\n            <input type=\"date\" id=\"start\" name=\"start\" [ngModel]=\"viewModel.StartDate | date:'yyyy-MM-dd'\" [disabled]=\"viewModel.IsParentTask\"\n              (ngModelChange)=\"viewModel.StartDate = $event\" [value]=\"viewModel.StartDate | date:'yyyy-MM-dd'\" #start=\"ngModel\">\n          </div>\n\n          <label class=\"control-label col-sm-2\" for=\"end\">End Date</label>\n          <div class=\"col-sm-4\">\n            <input type=\"date\" id=\"end\" name=\"end\" [ngModel]=\"viewModel.EndDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"viewModel.EndDate = $event\"\n              [value]=\"viewModel.EndDate | date:'yyyy-MM-dd'\" #end=\"ngModel\" [disabled]=\"viewModel.IsParentTask\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <!-- <input type=\"hidden\" [(ngModel)]=\"viewModel.UserID\" #userID=\"ngModel\" name=\"hiddenUserID\" /> -->\n          <label class=\"control-label col-sm-2\" for=\"priority\">User:</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group\">\n              <input type=\"text\" [(ngModel)]=\"viewModel.UserName\" id=\"userName\" required class=\"form-control\" name=\"userName\"\n                disabled />\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\" name=\"btnUserName\" (click)=\"OpenUserPopup()\" [disabled]=\"viewModel.IsParentTask\">Search</button>\n                <!-- <button class=\"btn btn-default\" type=\"button\" name=\"btnUserName\" (click)=\"Open(content)\" >Search</button> -->\n\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"submit\"></label>\n          <div class=\"col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-success\">Update</button>\n            &nbsp;\n            <button type=\"reset\" class=\"btn btn-success\">Reset</button>\n          </div>\n        </div>\n      </form>\n\n    </div>\n    <div class=\"col-md-1\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/task/addtask/addtask.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svYWRkdGFzay9hZGR0YXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/addtask/addtask.component.ts":
/*!***************************************************!*\
  !*** ./src/app/task/addtask/addtask.component.ts ***!
  \***************************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/task.service */ "./src/app/task/services/task.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_task_view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/task-view-model */ "./src/app/task/model/task-view-model.ts");
/* harmony import */ var _modal_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/project-modal/project-modal.component */ "./src/app/task/modal/project-modal/project-modal.component.ts");
/* harmony import */ var _modal_task_modal_task_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/task-modal/task-popup.component */ "./src/app/task/modal/task-modal/task-popup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_Modal_UserModal_user_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user/Modal/UserModal/user-modal.component */ "./src/app/user/Modal/UserModal/user-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(addTaskService, activeRoute, taskDialog, userDialog, projectDialog) {
        var _this = this;
        this.addTaskService = addTaskService;
        this.activeRoute = activeRoute;
        this.taskDialog = taskDialog;
        this.userDialog = userDialog;
        this.projectDialog = projectDialog;
        this.editing = this.activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            var id_1 = this.activeRoute.snapshot.params["id"];
            this.viewModel = new _model_task_view_model__WEBPACK_IMPORTED_MODULE_3__["TaskViewModel"]();
            this.addTaskService.getTasks().subscribe(function (x) { return _this.viewModel = x.find(function (a) { return a.TaskID == id_1; }); });
        }
    }
    AddtaskComponent.prototype.ngOnInit = function () {
        debugger;
        if (this.viewModel == null) {
            this.viewModel = new _model_task_view_model__WEBPACK_IMPORTED_MODULE_3__["TaskViewModel"]();
        }
        this.getParentTasks();
    };
    AddtaskComponent.prototype.OpenParentTaskPopup = function () {
        var _this = this;
        debugger;
        var dialogRef = this.taskDialog.open(_modal_task_modal_task_popup_component__WEBPACK_IMPORTED_MODULE_5__["TaskPopupComponent"], {
            width: '600px',
            data: { ParentTask: this.parentTasks }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            debugger;
            _this.viewModel.ParentTaskID = result.ParentID;
            _this.viewModel.ParentTaskName = result.ParentTask;
        });
    };
    AddtaskComponent.prototype.OpenUserPopup = function () {
        var _this = this;
        debugger;
        var dialogRef = this.userDialog.open(src_app_user_Modal_UserModal_user_modal_component__WEBPACK_IMPORTED_MODULE_7__["UserModalComponent"], {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.viewModel.UserID = result.UserID;
            _this.viewModel.UserName = result.FirstName;
        });
    };
    AddtaskComponent.prototype.OpenProjectPopup = function () {
        var _this = this;
        var dialogRef = this.projectDialog.open(_modal_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProjectModalComponent"], {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.viewModel.ProjectID = result.ProjectID;
            _this.viewModel.ProjectName = result.ProjectTitle;
        });
    };
    AddtaskComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.viewModel.TaskID == null) {
            this.addTaskService.saveTask(this.viewModel).subscribe(function () { _this.getParentTasks(); });
            this.viewModel = new _model_task_view_model__WEBPACK_IMPORTED_MODULE_3__["TaskViewModel"]();
        }
        else {
            this.addTaskService.updateTask(this.viewModel).subscribe(function () { _this.getParentTasks(); });
        }
        if (form != null) {
            this.viewModel = new _model_task_view_model__WEBPACK_IMPORTED_MODULE_3__["TaskViewModel"]();
            form.reset();
        }
        this.getParentTasks();
    };
    AddtaskComponent.prototype.getParentTasks = function () {
        var _this = this;
        debugger;
        this.addTaskService.getParentTasks().subscribe(function (x) { return _this.parentTasks = x; });
    };
    AddtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/task/addtask/addtask.component.html"),
            styles: [__webpack_require__(/*! ./addtask.component.scss */ "./src/app/task/addtask/addtask.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_1__["AddtaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "./src/app/task/modal/project-modal/project-modal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/task/modal/project-modal/project-modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select Project</h1>\n<div mat-dialog-content>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Project ID</th>\n        <th>Project Title</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let project of projects\">        \n        <td>{{project.ProjectID}}</td>\n        <td>{{project.ProjectTitle}}</td>\n        <td>\n          <div class=\"col-md-7\" style=\"text-align: end\">\n            <button mat-button [mat-dialog-close] = \"project\" type=\"button\" class=\"btn btn-success\">Add</button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/task/modal/project-modal/project-modal.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/task/modal/project-modal/project-modal.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svbW9kYWwvcHJvamVjdC1tb2RhbC9wcm9qZWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/modal/project-modal/project-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/task/modal/project-modal/project-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModalComponent", function() { return ProjectModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_project_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/project/project-service */ "./src/app/project/project-service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProjectModalComponent = /** @class */ (function () {
    function ProjectModalComponent(projectService, dialogRef, data) {
        this.projectService = projectService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ProjectModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ProjectModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getprojects().subscribe(function (x) { return _this.projects = x; });
    };
    ProjectModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-modal',
            template: __webpack_require__(/*! ./project-modal.component.html */ "./src/app/task/modal/project-modal/project-modal.component.html"),
            styles: [__webpack_require__(/*! ./project-modal.component.scss */ "./src/app/task/modal/project-modal/project-modal.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], String])
    ], ProjectModalComponent);
    return ProjectModalComponent;
}());



/***/ }),

/***/ "./src/app/task/modal/task-modal/task-popup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/task/modal/task-modal/task-popup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select Parent Task</h1>\n<div mat-dialog-content>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Parent ID</th>\n        <th>Parent Name</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let pt of parentTasks\">        \n        <td>{{pt.ParentID}}</td>\n        <td>{{pt.ParentTask}}</td>\n        <td>\n          <div class=\"col-md-7\" style=\"text-align: end\">\n            <button mat-button [mat-dialog-close] = \"pt\" type=\"button\" class=\"btn btn-success\">Add</button>\n            <!-- (click) = \"onselectManager(User)\" -->\n          </div>\n        </td>\n        \n        <!-- <td style=\"width: 70px;\">\n          <i class=\"glyphicon glyphicon-edit pointer\" (click)=\"edit(User)\" title=\"Edit\"></i>\n          <i class=\"glyphicon glyphicon-trash pointer\" (click)=\"delete(User.ProjectID)\" title=\"Delete\"></i>\n        </td> -->\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/task/modal/task-modal/task-popup.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/task/modal/task-modal/task-popup.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svbW9kYWwvdGFzay1tb2RhbC90YXNrLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/modal/task-modal/task-popup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/task/modal/task-modal/task-popup.component.ts ***!
  \***************************************************************/
/*! exports provided: TaskPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPopupComponent", function() { return TaskPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/task/services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TaskPopupComponent = /** @class */ (function () {
    function TaskPopupComponent(taskService, dialogRef, data) {
        this.taskService = taskService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TaskPopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TaskPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getParentTasks().subscribe(function (x) { return _this.parentTasks = x; });
    };
    TaskPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-popup',
            template: __webpack_require__(/*! ./task-popup.component.html */ "./src/app/task/modal/task-modal/task-popup.component.html"),
            styles: [__webpack_require__(/*! ./task-popup.component.scss */ "./src/app/task/modal/task-modal/task-popup.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_2__["AddtaskService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], String])
    ], TaskPopupComponent);
    return TaskPopupComponent;
}());



/***/ }),

/***/ "./src/app/task/model/task-view-model.ts":
/*!***********************************************!*\
  !*** ./src/app/task/model/task-view-model.ts ***!
  \***********************************************/
/*! exports provided: TaskViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewModel", function() { return TaskViewModel; });
var TaskViewModel = /** @class */ (function () {
    function TaskViewModel() {
        this.IsParentTask = true;
    }
    return TaskViewModel;
}());



/***/ }),

/***/ "./src/app/task/model/view-task-model.ts":
/*!***********************************************!*\
  !*** ./src/app/task/model/view-task-model.ts ***!
  \***********************************************/
/*! exports provided: ViewTaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskModel", function() { return ViewTaskModel; });
var ViewTaskModel = /** @class */ (function () {
    function ViewTaskModel() {
    }
    return ViewTaskModel;
}());



/***/ }),

/***/ "./src/app/task/services/task.service.ts":
/*!***********************************************!*\
  !*** ./src/app/task/services/task.service.ts ***!
  \***********************************************/
/*! exports provided: AddtaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskService", function() { return AddtaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


///import { Observable } from 'rxjs/Observable';




var AddtaskService = /** @class */ (function () {
    function AddtaskService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:62634/api/Task';
    }
    AddtaskService.prototype.saveTask = function (task) {
        debugger;
        var userBody = JSON.stringify(task);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headerOptions });
        return this._http.post(this.baseUrl + '/Create', userBody, requestOptions);
    };
    AddtaskService.prototype.getParentTasks = function () {
        debugger;
        return this._http.get('http://localhost:62634/api/Parent/GetParentTasks')
            .map(function (data) {
            return data.json();
        }).catch(function (error) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw("Error in x service"); });
    };
    AddtaskService.prototype.getTasks = function () {
        return this._http.get(this.baseUrl + '/GetTasks')
            .map(function (data) {
            return data.json();
        }).catch(function (error) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw("Error in x service"); });
    };
    AddtaskService.prototype.deleteTask = function (id) {
        debugger;
        if (confirm('Are you sure to delete this record')) {
            return this._http.delete(this.baseUrl + '/Delete/' + id);
        }
    };
    AddtaskService.prototype.endTask = function (task) {
        var userBody = JSON.stringify(task);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headerOptions });
        return this._http.post(this.baseUrl + '/EndTask', userBody, requestOptions);
    };
    AddtaskService.prototype.updateTask = function (task) {
        debugger;
        var userBody = JSON.stringify(task);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headerOptions });
        return this._http.put(this.baseUrl + '/Update', userBody, requestOptions);
    };
    AddtaskService.prototype._errorHandler = function (error) {
        console.log(error);
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error || "Internal server error");
    };
    AddtaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AddtaskService);
    return AddtaskService;
}());



/***/ }),

/***/ "./src/app/task/viewtask/viewtask.component.html":
/*!*******************************************************!*\
  !*** ./src/app/task/viewtask/viewtask.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div >\n    <div class=\"col-md-12 \">\n      <!--<form (ngSubmit)=\"onSubmit(viewTaskForm)\" name=\"viewTaskForm\" #viewTaskForm=\"ngForm\" class=\"form-horizontal\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label class=\"control-label col-sm-2\" for=\"priority\">Project:</label>\n            <div class=\"input-group\">\n              <input type=\"text\" [(ngModel)]=\"viewTaskModel.ProjectName\" id=\"projectName\" required class=\"form-control\"\n                name=\"projectName\" disabled />\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"submit\" name=\"btnProjectName\" (click)=\"OpenProjectPopup()\">Search</button>\n              </span>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6\">\n              <label class=\"control-label col-sm-4\" for=\"priority\">Sort Task By:</label>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-default\"  name=\"btn1\" (click)=\"sortTask('StartDate')\">Start Date</button>\n              <button class=\"btn btn-default\"  name=\"btn2\" (click)=\"sortTask('EndDate')\">End Date</button>\n              <button class=\"btn btn-default\"  name=\"btn1\" (click)=\"sortTask('Priority')\">Priority</button>\n              <button class=\"btn btn-default\"  name=\"btn2\" (click)=\"sortTask('Status')\">Completed</button>\n            </div>\n          </div>\n        </div>\n      </form>-->\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-1\"> </div>\n        <div class=\"col-md-10\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Task</th>\n                <th>Parent</th>\n                <th>Priority</th>\n                <th>Start</th>\n                <th>End</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let task of viewTaskModel.TaskList\">\n                <td>{{task.TaskName}}</td>\n                <td>{{task.ParentTaskName ==\"\" ?\"Parent task not availble\" : task.ParentTaskName}}</td>\n                <td>{{task.Priority}}</td>\n                <td>{{task.StartDate | date:\"dd/MM/yyyy\" }}</td>\n                <td>{{task.EndDate | date:\"dd/MM/yyyy\" }}</td>\n                <td style=\"width:180px\">\n                  <div class=\"btn-group tablegrp\" role=\"group\">\n                      <button class=\"btn btn-success\"  style=\"margin:0 3px;\" [routerLink] =\"['/task','edit', {id:task.TaskID}]\">Edit</button>\n                      <!-- <button class=\"btn btn-success\" style=\"margin:0 3px;\" (click) = \"edit(task.TaskID)\">Edit</button> -->\n                      <button class=\"btn btn-success\"  style=\"margin:0 3px;\"  (click)=\"endTask(task.TaskID)\">End Task</button>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md-1\"> </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/task/viewtask/viewtask.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/task/viewtask/viewtask.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdmlld3Rhc2svdmlld3Rhc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/task/viewtask/viewtask.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/task/viewtask/viewtask.component.ts ***!
  \*****************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_view_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/view-task-model */ "./src/app/task/model/view-task-model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/project-modal/project-modal.component */ "./src/app/task/modal/project-modal/project-modal.component.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/task.service */ "./src/app/task/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(taskService, projectDialog, router) {
        this.taskService = taskService;
        this.projectDialog = projectDialog;
        this.router = router;
    }
    ViewtaskComponent.prototype.ngOnInit = function () {
        this.viewTaskModel = new _model_view_task_model__WEBPACK_IMPORTED_MODULE_1__["ViewTaskModel"]();
        this.viewTaskModel.TaskList = [];
        this.getTasks();
    };
    ViewtaskComponent.prototype.OpenProjectPopup = function () {
        var _this = this;
        var dialogRef = this.projectDialog.open(_modal_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_3__["ProjectModalComponent"], {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.viewTaskModel.ProjectID = result.ProjectID;
            _this.viewTaskModel.ProjectName = result.ProjectTitle;
            _this.viewTaskModel.TaskList = _this.viewTaskModel.TaskList.filter(function (x) { return x.ProjectID === result.ProjectID; });
        });
    };
    ViewtaskComponent.prototype.getTasks = function () {
        var _this = this;
        debugger;
        this.taskService.getTasks().subscribe(function (x) { return _this.viewTaskModel.TaskList = x; });
    };
    ViewtaskComponent.prototype.endTask = function (taskId) {
        var _this = this;
        debugger;
        this.taskService.deleteTask(taskId).subscribe(function () { _this.getTasks(); });
        //this.taskService.getTasks().subscribe(x => this.viewTaskModel.TaskList = x as TaskViewModel[]);
    };
    ViewtaskComponent.prototype.sortTask = function (propName) {
        this.viewTaskModel.TaskList.sort(function (a, b) {
            if (propName === "Status") {
                if (a[propName] == "Completed")
                    return 1;
            }
            else {
                if (a[propName] < b[propName])
                    return -1;
                if (a[propName] > b[propName])
                    return 1;
                return 0;
            }
        });
    };
    ViewtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/task/viewtask/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.scss */ "./src/app/task/viewtask/viewtask.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_task_service__WEBPACK_IMPORTED_MODULE_4__["AddtaskService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/app/user/Modal/UserModal/user-modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/Modal/UserModal/user-modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select Manager</h1>\n<div mat-dialog-content>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>User ID</th>\n        <th>First Name</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let User of users\">        \n        <td>{{User.UserID}}</td>\n        <td>{{User.FirstName}}</td>\n        <td>\n          <div class=\"col-md-7\" style=\"text-align: end\">\n            <button mat-button [mat-dialog-close] = \"User\" type=\"button\" class=\"btn btn-success\">Add</button>\n          </div>\n        </td>\n        \n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/user/Modal/UserModal/user-modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/user/Modal/UserModal/user-modal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvTW9kYWwvVXNlck1vZGFsL3VzZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/Modal/UserModal/user-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/Modal/UserModal/user-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: UserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalComponent", function() { return UserModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UserModalComponent = /** @class */ (function () {
    function UserModalComponent(userService, dialogRef, data) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UserModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UserModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getusers().subscribe(function (x) { return _this.users = x; });
    };
    UserModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-modal',
            template: __webpack_require__(/*! ./user-modal.component.html */ "./src/app/user/Modal/UserModal/user-modal.component.html"),
            styles: [__webpack_require__(/*! ./user-modal.component.scss */ "./src/app/user/Modal/UserModal/user-modal.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], String])
    ], UserModalComponent);
    return UserModalComponent;
}());



/***/ }),

/***/ "./src/app/user/User.ts":
/*!******************************!*\
  !*** ./src/app/user/User.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <div>\n      <form (ngSubmit)=\"onSubmit(userForm)\" name=\"userForm\" #userForm=\"ngForm\" class=\"form-horizontal\">\n        <input type=\"hidden\" name=\"userID\" #userID=\"ngModel\" [(ngModel)]=\"user.userID\">\n        <div class=\"col-md-1\"> </div>\n        <div class=\"col-md-10\">\n          <div class=\"form-group\" [ngClass]=\"{\n                        'has-danger': firstName.invalid && firstName.dirty, \n                        'has-success': firstName.valid && firstName.dirty \n                      }\">\n            <label class=\"control-label col-sm-2\" for=\"firstName\">First Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\" text\" id=\"firstName\" required class=\"form-control\" [(ngModel)]=\"user.firstName\" name=\"firstName\"\n                #firstName=\"ngModel\" />\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{\n              'has-danger': lastName.invalid && lastName.dirty, \n              'has-success': lastName.valid && lastName.dirty \n            }\">\n            <label class=\"control-label col-sm-2\" for=\"lastName\">Last Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"lastName\" class=\"form-control\" [(ngModel)]=\"user.lastName\" name=\"lastName\"\n                required #lastName=\"ngModel\" />\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{\n            'has-danger': employeeID.invalid && employeeID.dirty, \n            'has-success': employeeID.valid && employeeID.dirty \n          }\">\n            <label class=\"control-label col-sm-2\" for=\"employeeID\">Employee ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"employeeID\" class=\"form-control\" [(ngModel)]=\"user.employeeID\" name=\"employeeID\"\n                required #employeeID=\"ngModel\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-10 pull-right\">\n              <div>\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userForm.form.valid\">{{operation}}</button>\n                &nbsp;\n                <button type=\"reset\" class=\"btn btn-success\">Reset</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-1\"></div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"height:3px\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-1\"> </div>\n    <div class=\"col-md-10\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Employee ID</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let userValue of users\">\n            <td>{{userValue.FirstName}}</td>\n            <td>{{userValue.LastName}}</td>\n            <td>{{userValue.EmployeeID}}</td>\n            <td style=\"width:180px\">\n              <div class=\"btn-group\" role=\"group\">\n                <button class=\"btn btn-success\" (click)=\"edit(userValue)\">Edit</button>\n                <button class=\"btn btn-success\" (click)=\"delete(userValue.UserID)\">Delete</button>\n              </div>\n              <!-- <i class=\"glyphicon glyphicon-trash pointer\" (click)=\"delete(userValue.UserID)\" title=\"Delete\"></i> -->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-md-1\"> </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.btn-group button {\n  margin: 0 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9DOlxcQWJiYXNcXFByb2plY3RNYW5hZ2VtZW50QVBJXFxQcm9qZWN0TWFuYWdlbWVudF9Bbmd1bGFyL3NyY1xcYXBwXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQThCO0VBQUUsV0FBVyxFQUM1Qzs7QUFFRDtFQUNFLCtCQUE4QjtFQUFFLFNBQVMsRUFDMUM7O0FBRUQ7RUFBb0IsY0FBWSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG59XG4gICAgICAgICAgICAgICBcbi5idG4tZ3JvdXAgYnV0dG9uIHsgbWFyZ2luOjAgM3B4O30iXX0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/app/user/User.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(amser) {
        this.amser = amser;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.user = new _User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.getUsers();
        this.operation = "Add";
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        return this.amser.getusers().subscribe(function (u) { _this.users = u; });
    };
    UserComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.user.userID == null) {
            this.amser.saveUser(this.user).subscribe(function () { _this.getUsers(); });
        }
        else {
            this.amser.updateUser(this.user).subscribe(function () { _this.getUsers(); });
        }
    };
    UserComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this record')) {
            this.amser.deleteuser(id).subscribe(function () { _this.getUsers(); });
        }
    };
    UserComponent.prototype.edit = function (selecteduser) {
        if (selecteduser) {
            this.operation = "Update";
            this.user.firstName = selecteduser.FirstName;
            this.user.lastName = selecteduser.LastName;
            this.user.employeeID = selecteduser.EmployeeID;
            this.user.userID = selecteduser.UserID;
        }
    };
    UserComponent.prototype.reset = function () {
        this.user = new _User__WEBPACK_IMPORTED_MODULE_1__["User"]();
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:62634/api/User';
    }
    UserService.prototype.saveUser = function (user) {
        //debugger;
        var userBody = JSON.stringify(user);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headerOptions });
        return this._http.post(this.baseUrl + '/Create', userBody, requestOptions);
    };
    UserService.prototype.getusers = function () {
        return this._http.get(this.baseUrl + '/GetUsers')
            .map(function (data) {
            return data.json();
        }).catch(function (error) { return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw("Error in x service"); });
    };
    UserService.prototype.deleteuser = function (id) {
        return this._http.delete(this.baseUrl + '/Delete/' + id);
    };
    UserService.prototype.updateUser = function (user) {
        debugger;
        var userBody = JSON.stringify(user);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headerOptions });
        return this._http.put(this.baseUrl + '/Update', userBody, requestOptions);
    };
    UserService.prototype._errorHandler = function (error) {
        console.log(error);
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error || "Internal server error");
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! C:\Abbas\ProjectManagementAPI\ProjectManagement_Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map