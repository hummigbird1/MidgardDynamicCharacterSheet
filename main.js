(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/MidgardDynamicCharacterSheet/MidgardDynamicCharacterSheet/src/main.ts */"zUnb");


/***/ }),

/***/ "5c9A":
/*!***********************************************************!*\
  !*** ./src/app/services/player-model-provider.service.ts ***!
  \***********************************************************/
/*! exports provided: PlayerModelProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModelProviderService", function() { return PlayerModelProviderService; });
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/player */ "NAel");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlayerModelProviderService {
    constructor() {
        this._player = new _models_player__WEBPACK_IMPORTED_MODULE_0__["Player"]();
    }
    get player() {
        return this._player;
    }
    set player(player) {
        this._player = player;
    }
}
PlayerModelProviderService.ɵfac = function PlayerModelProviderService_Factory(t) { return new (t || PlayerModelProviderService)(); };
PlayerModelProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayerModelProviderService, factory: PlayerModelProviderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "F9hl":
/*!****************************************************!*\
  !*** ./src/app/ng-material/tabs/tabs.component.ts ***!
  \****************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TabsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 0, vars: 0, template: function TabsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "GNq6":
/*!***********************************************************************************!*\
  !*** ./src/app/components/player-import-export/player-import-export.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PlayerImportExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerImportExportComponent", function() { return PlayerImportExportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/player-model-provider.service */ "5c9A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class PlayerImportExportComponent {
    constructor(playerModelProviderService) {
        this.playerModelProviderService = playerModelProviderService;
    }
    ngOnInit() {
    }
    getPlayerAsJson() {
        return JSON.stringify(this.playerModelProviderService.player, null, 2);
    }
    importPlayer(event) {
        if (this.jsonContent === undefined) {
            return;
        }
        this.setPlayerFromJson(this.jsonContent);
    }
    exportPlayer(event) {
        this.jsonContent = this.getPlayerAsJson();
    }
    setPlayerFromJson(playerJson) {
        this.playerModelProviderService.player = JSON.parse(playerJson);
    }
}
PlayerImportExportComponent.ɵfac = function PlayerImportExportComponent_Factory(t) { return new (t || PlayerImportExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_1__["PlayerModelProviderService"])); };
PlayerImportExportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerImportExportComponent, selectors: [["app-player-import-export"]], decls: 7, vars: 1, consts: [[3, "ngModel", "ngModelChange"], [3, "click"]], template: function PlayerImportExportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Spieler JSON: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerImportExportComponent_Template_textarea_ngModelChange_2_listener($event) { return ctx.jsonContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerImportExportComponent_Template_button_click_3_listener($event) { return ctx.importPlayer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerImportExportComponent_Template_button_click_5_listener($event) { return ctx.exportPlayer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.jsonContent);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "NAel":
/*!**********************************!*\
  !*** ./src/app/models/player.ts ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor() {
        this.name = "";
        this.baseStats = new Stats();
        this.currentStats = new Stats();
        this.valueables = new PlayerValueables();
    }
}
class PlayerValueables {
    constructor() {
        this.coins = new Coins();
        this.jewels = new Jewels();
    }
}
class Coins {
    constructor() {
        this.gold = 0;
        this.silver = 0;
        this.copper = 0;
    }
}
class Jewels {
    constructor() {
        this.fifties = 0;
        this.hundreds = 0;
        this.thousands = 0;
    }
}
class Stats {
    constructor() {
        this.hitPoints = 0;
        this.actionPoints = 0;
    }
}


/***/ }),

/***/ "NzVc":
/*!*********************************************************!*\
  !*** ./src/app/services/player-localstorage.service.ts ***!
  \*********************************************************/
/*! exports provided: PlayerLocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerLocalstorageService", function() { return PlayerLocalstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PlayerLocalstorageService {
    constructor() {
        this.storageKey = "Player";
    }
    savePlayer(player) {
        localStorage.setItem(this.storageKey, JSON.stringify(player));
    }
    loadPlayer() {
        const playerJson = localStorage.getItem(this.storageKey);
        if (playerJson === null) {
            return null;
        }
        return JSON.parse(playerJson);
    }
    deletePlayer() {
        localStorage.removeItem(this.storageKey);
    }
}
PlayerLocalstorageService.ɵfac = function PlayerLocalstorageService_Factory(t) { return new (t || PlayerLocalstorageService)(); };
PlayerLocalstorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayerLocalstorageService, factory: PlayerLocalstorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/player-model-provider.service */ "5c9A");
/* harmony import */ var _services_player_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/player-localstorage.service */ "NzVc");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _components_character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/character-sheet/character-sheet.component */ "hifP");
/* harmony import */ var _components_adventure_sheet_adventure_sheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/adventure-sheet/adventure-sheet.component */ "iwES");
/* harmony import */ var _components_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/numeric-value-handler/numeric-value-handler.component */ "uyD5");
/* harmony import */ var _components_player_localstorage_player_localstorage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/player-localstorage/player-localstorage.component */ "l4M/");
/* harmony import */ var _components_player_import_export_player_import_export_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/player-import-export/player-import-export.component */ "GNq6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










class AppComponent {
    constructor(pmps, plss) {
        this.pmps = pmps;
        this.plss = plss;
        this.title = 'MidgardDynamicCharacterSheet';
    }
    ngAfterViewInit() {
        const playerFromStorage = this.plss.loadPlayer();
        if (playerFromStorage != null) {
            this.pmps.player = playerFromStorage;
        }
    }
    get player() {
        return this.pmps.player;
    }
    set player(p) {
        this.pmps.player = p;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_1__["PlayerModelProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["PlayerLocalstorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 9, consts: [["label", "Character"], [3, "player", "playerChange"], ["label", "Abenteuer Tagesbogen"], ["label", "UI Element Beispiel / Demo"], ["label", "HP", "baseValue", "30", 3, "minValue", "maxValue"], ["label", "AP", "baseValue", "12", 3, "minValue", "maxValue"], ["label", "BB", "baseValue", "500", 3, "showReset", "minValue", "maxValue"], ["label", "Zauber"], ["label", "Beschw\u00F6rungen"], ["label", "Player Storage"], ["label", "Player Import/Export"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Midgard Dynamic Character Sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-character-sheet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("playerChange", function AppComponent_Template_app_character_sheet_playerChange_4_listener($event) { return ctx.player = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-adventure-sheet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("playerChange", function AppComponent_Template_app_adventure_sheet_playerChange_6_listener($event) { return ctx.player = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-numeric-value-handler", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-numeric-value-handler", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Beispiel - Numerische EIngabe ohne Reset:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-numeric-value-handler", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Hier k\u00F6nnten die Zauberspr\u00FCche stehen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Hier k\u00F6nnten die Beschw\u00F6rungen stehen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-player-localstorage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-player-import-export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx.player);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx.player);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showReset", false)("minValue", 0)("maxValue", 99999999);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _components_character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_4__["CharacterSheetComponent"], _components_adventure_sheet_adventure_sheet_component__WEBPACK_IMPORTED_MODULE_5__["AdventureSheetComponent"], _components_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_6__["NumericValueHandlerComponent"], _components_player_localstorage_player_localstorage_component__WEBPACK_IMPORTED_MODULE_7__["PlayerLocalstorageComponent"], _components_player_import_export_player_import_export_component__WEBPACK_IMPORTED_MODULE_8__["PlayerImportExportComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]], styles: ["app-numeric-value-handler[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nmat-tab-label-content[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1udW1lcmljLXZhbHVlLWhhbmRsZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbm1hdC10YWItbGFiZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/numeric-value-handler/numeric-value-handler.component */ "uyD5");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-material/ng-material.module */ "otUU");
/* harmony import */ var _components_adventure_sheet_adventure_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/adventure-sheet/adventure-sheet.component */ "iwES");
/* harmony import */ var _components_player_import_export_player_import_export_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/player-import-export/player-import-export.component */ "GNq6");
/* harmony import */ var _services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/player-model-provider.service */ "5c9A");
/* harmony import */ var _components_character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/character-sheet/character-sheet.component */ "hifP");
/* harmony import */ var _components_player_localstorage_player_localstorage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/player-localstorage/player-localstorage.component */ "l4M/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_9__["PlayerModelProviderService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_6__["NgMaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_4__["NumericValueHandlerComponent"],
        _components_adventure_sheet_adventure_sheet_component__WEBPACK_IMPORTED_MODULE_7__["AdventureSheetComponent"],
        _components_player_import_export_player_import_export_component__WEBPACK_IMPORTED_MODULE_8__["PlayerImportExportComponent"],
        _components_character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_10__["CharacterSheetComponent"],
        _components_player_localstorage_player_localstorage_component__WEBPACK_IMPORTED_MODULE_11__["PlayerLocalstorageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_6__["NgMaterialModule"]] }); })();


/***/ }),

/***/ "hifP":
/*!*************************************************************************!*\
  !*** ./src/app/components/character-sheet/character-sheet.component.ts ***!
  \*************************************************************************/
/*! exports provided: CharacterSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheetComponent", function() { return CharacterSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numeric-value-handler/numeric-value-handler.component */ "uyD5");




class CharacterSheetComponent {
    constructor() {
        this.playerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
CharacterSheetComponent.ɵfac = function CharacterSheetComponent_Factory(t) { return new (t || CharacterSheetComponent)(); };
CharacterSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterSheetComponent, selectors: [["app-character-sheet"]], inputs: { player: "player" }, outputs: { playerChange: "playerChange" }, decls: 7, vars: 9, consts: [[3, "ngModel", "ngModelChange"], ["label", "HP", 3, "currentValue", "baseValue", "minValue", "maxValue", "currentValueChange"], ["label", "AP", 3, "currentValue", "baseValue", "minValue", "maxValue", "currentValueChange"]], template: function CharacterSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterSheetComponent_Template_input_ngModelChange_2_listener($event) { return ctx.player.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-numeric-value-handler", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_4_listener($event) { return ctx.player.currentStats.hitPoints = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-numeric-value-handler", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_6_listener($event) { return ctx.player.currentStats.actionPoints = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.player.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.currentStats.hitPoints)("baseValue", ctx.player.baseStats.hitPoints)("minValue", 0)("maxValue", ctx.player.baseStats.hitPoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.currentStats.actionPoints)("baseValue", ctx.player.baseStats.actionPoints)("minValue", 0)("maxValue", ctx.player.baseStats.actionPoints);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_2__["NumericValueHandlerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXItc2hlZXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "iwES":
/*!*************************************************************************!*\
  !*** ./src/app/components/adventure-sheet/adventure-sheet.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdventureSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureSheetComponent", function() { return AdventureSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numeric-value-handler/numeric-value-handler.component */ "uyD5");



class AdventureSheetComponent {
    constructor() {
        this.playerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
AdventureSheetComponent.ɵfac = function AdventureSheetComponent_Factory(t) { return new (t || AdventureSheetComponent)(); };
AdventureSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdventureSheetComponent, selectors: [["app-adventure-sheet"]], inputs: { player: "player" }, outputs: { playerChange: "playerChange" }, decls: 51, vars: 45, consts: [[1, "container"], [1, "CoinsArea"], ["label", "Gold", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "Silber", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "Kupfer", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], [1, "JewelArea"], ["label", "50er", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "100er", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "1000er", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], [1, "EquipmentAndPotionsArea"], [1, "PotionsArea"], [1, "HealingPotionsArea"], ["label", "1w6", 3, "minValue", "maxValue", "showReset"], ["label", "2w6", 3, "minValue", "maxValue", "showReset"], ["label", "3w6", 3, "minValue", "maxValue", "showReset"], [1, "PowerPotionsArea"], [1, "EquipmentArea"], [1, "equipment-content"], [1, "MaterialArea"], [1, "material-table"], [1, "material-row"], [1, "material-description"], ["label", "", 3, "minValue", "maxValue", "showReset"]], template: function AdventureSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "M\u00FCnzen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-numeric-value-handler", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_4_listener($event) { return ctx.player.valueables.coins.gold = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-numeric-value-handler", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_5_listener($event) { return ctx.player.valueables.coins.silver = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-numeric-value-handler", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_6_listener($event) { return ctx.player.valueables.coins.copper = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edelsteine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-numeric-value-handler", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_10_listener($event) { return ctx.player.valueables.jewels.fifties = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-numeric-value-handler", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_11_listener($event) { return ctx.player.valueables.jewels.hundreds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-numeric-value-handler", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_12_listener($event) { return ctx.player.valueables.jewels.thousands = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Heiltr\u00E4nke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-numeric-value-handler", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-numeric-value-handler", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-numeric-value-handler", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Krafttr\u00E4nke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-numeric-value-handler", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-numeric-value-handler", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ausr\u00FCstung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Verbrauchsmaterial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Beschreibung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Menge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-numeric-value-handler", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-numeric-value-handler", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.valueables.coins.gold);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.valueables.coins.silver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.valueables.coins.copper);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.valueables.jewels.fifties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.valueables.jewels.hundreds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.valueables.jewels.thousands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false);
    } }, directives: [_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_1__["NumericValueHandlerComponent"]], styles: ["h2[_ngcontent-%COMP%] {\n\tmargin: 0px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n\tresize: vertical;\n}\n\nthead[_ngcontent-%COMP%] {\n\ttext-align: left;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n\tpadding: 0px 10px 0px 0px;\n\twidth: 50%;\n}\n\n.equipment-content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 80%\n}\n\n.material-description[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.material-table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.material-row[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {  \n\tmargin: 10px 25px;\n\tdisplay: grid;\n    grid-template-rows: repeat(2, 0.3fr) 0.6fr 1.25fr;\n    grid-auto-columns: 1fr;\n    gap: 5px 0px;\n    grid-auto-flow: row;\n}\n\n.CoinsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\talign-self: center;\n\tgrid-template-columns: 0.5fr repeat(3, 1fr);\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-area: 1 / 1 / 2 / 2;\n}\n\n.CoinsArea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n\talign-self: center;\n}\n\n.JewelArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-columns: 0.5fr repeat(3, 1fr);\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-area: 2 / 1 / 3 / 2;\n}\n\n.JewelArea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n\talign-self: center;\n}\n\n.EquipmentAndPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-auto-rows: 1fr;\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-area: 3 / 1 / 4 / 2;\n}\n\n.PotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-template-rows: 1fr;\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"HealingPotionsArea PowerPotionsArea\";\n\tgrid-area: 1 / 2 / 2 / 3;\n}\n\n.HealingPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-rows: 0.37fr repeat(3, 1fr);\n\tgrid-auto-columns: 1fr;\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"\"\n\t\t\"\"\n\t\t\"\"\n\t\t\"\";\n\tgrid-area: HealingPotionsArea;\n}\n\n.PowerPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-rows: 0.25fr repeat(2, 1fr);\n\tgrid-auto-columns: 1fr;\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"\"\n\t\t\"\"\n\t\t\"\";\n\tgrid-area: PowerPotionsArea;\n}\n\n.EquipmentArea[_ngcontent-%COMP%] { \n\tgrid-area: 1 / 1 / 2 / 2;\n\tmargin-right: 10px;\n}\n\n.MaterialArea[_ngcontent-%COMP%] { \n\tgrid-area: 4 / 1 / 5 / 2; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVudHVyZS1zaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFVBQVU7QUFDWDs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7SUFDVixpREFBaUQ7SUFDakQsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDJDQUEyQztDQUMzQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyQ0FBMkM7Q0FDM0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7dUNBQ3NDO0NBQ3RDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5Q0FBeUM7Q0FDekMsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7Ozs7SUFJRztDQUNILDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5Q0FBeUM7Q0FDekMsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7OztJQUdHO0NBQ0gsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QiIsImZpbGUiOiJhZHZlbnR1cmUtc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcblx0bWFyZ2luOiAwcHg7XG59XG5cbnRleHRhcmVhIHtcblx0cmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxudGhlYWQge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZCwgdGgge1xuXHRwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xuXHR3aWR0aDogNTAlO1xufVxuXG4uZXF1aXBtZW50LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODAlXG59XG5cbi5tYXRlcmlhbC1kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXRlcmlhbC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXRlcmlhbC1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHsgIFxuXHRtYXJnaW46IDEwcHggMjVweDtcblx0ZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAwLjNmcikgMC42ZnIgMS4yNWZyO1xuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiA1cHggMHB4O1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG59XG4gIFxuLkNvaW5zQXJlYSB7ICBcblx0ZGlzcGxheTogZ3JpZDtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgzLCAxZnIpO1xuXHRnYXA6IDBweCAwcHg7XG5cdGdyaWQtYXV0by1mbG93OiByb3c7XG5cdGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbn1cblxuLkNvaW5zQXJlYSAqIHtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xufVxuICBcbi5KZXdlbEFyZWEgeyAgXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDMsIDFmcik7XG5cdGdhcDogMHB4IDBweDtcblx0Z3JpZC1hdXRvLWZsb3c6IHJvdztcblx0Z3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xufVxuXG4uSmV3ZWxBcmVhICoge1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5FcXVpcG1lbnRBbmRQb3Rpb25zQXJlYSB7ICBcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuXHRncmlkLWF1dG8tcm93czogMWZyO1xuXHRnYXA6IDBweCAwcHg7XG5cdGdyaWQtYXV0by1mbG93OiByb3c7XG5cdGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcbn1cblxuLlBvdGlvbnNBcmVhIHsgIFxuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblx0Z2FwOiAwcHggMHB4O1xuXHRncmlkLWF1dG8tZmxvdzogcm93O1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxuXHRcdFwiSGVhbGluZ1BvdGlvbnNBcmVhIFBvd2VyUG90aW9uc0FyZWFcIjtcblx0Z3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xufVxuXG4uSGVhbGluZ1BvdGlvbnNBcmVhIHsgIFxuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDAuMzdmciByZXBlYXQoMywgMWZyKTtcblx0Z3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcblx0Z2FwOiAwcHggMHB4O1xuXHRncmlkLWF1dG8tZmxvdzogcm93O1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxuXHRcdFwiXCJcblx0XHRcIlwiXG5cdFx0XCJcIlxuXHRcdFwiXCI7XG5cdGdyaWQtYXJlYTogSGVhbGluZ1BvdGlvbnNBcmVhO1xufVxuXG4uUG93ZXJQb3Rpb25zQXJlYSB7ICBcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjI1ZnIgcmVwZWF0KDIsIDFmcik7XG5cdGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG5cdGdhcDogMHB4IDBweDtcblx0Z3JpZC1hdXRvLWZsb3c6IHJvdztcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcblx0XHRcIlwiXG5cdFx0XCJcIlxuXHRcdFwiXCI7XG5cdGdyaWQtYXJlYTogUG93ZXJQb3Rpb25zQXJlYTtcbn1cblxuLkVxdWlwbWVudEFyZWEgeyBcblx0Z3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5NYXRlcmlhbEFyZWEgeyBcblx0Z3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAyOyBcbn0iXX0= */"] });


/***/ }),

/***/ "l4M/":
/*!*********************************************************************************!*\
  !*** ./src/app/components/player-localstorage/player-localstorage.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PlayerLocalstorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerLocalstorageComponent", function() { return PlayerLocalstorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/player-model-provider.service */ "5c9A");
/* harmony import */ var src_app_services_player_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/player-localstorage.service */ "NzVc");



class PlayerLocalstorageComponent {
    constructor(pmps, plss) {
        this.pmps = pmps;
        this.plss = plss;
        this.actionResult = null;
    }
    ngOnInit() {
    }
    loadPlayerFromStorage(event) {
        try {
            const loadedPlayer = this.plss.loadPlayer();
            if (loadedPlayer !== null) {
                this.pmps.player = loadedPlayer;
                this.actionResult = "Player loaded successfully";
            }
            else {
                this.actionResult = "No player found in local storage";
            }
        }
        catch (error) {
            this.setActionResultFromError(error);
        }
    }
    savePlayerToStorage(event) {
        try {
            this.plss.savePlayer(this.pmps.player);
            this.actionResult = "Player stored successfully";
        }
        catch (error) {
            this.setActionResultFromError(error);
        }
    }
    deletePlayerFromStorage(event) {
        try {
            this.plss.deletePlayer();
            this.actionResult = "Player data deleted!";
        }
        catch (error) {
            this.setActionResultFromError(error);
        }
    }
    setActionResultFromError(error) {
        if (typeof error === "string") {
            this.actionResult = error;
        }
        else if (error instanceof Error) {
            this.actionResult = error.message;
        }
    }
}
PlayerLocalstorageComponent.ɵfac = function PlayerLocalstorageComponent_Factory(t) { return new (t || PlayerLocalstorageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_1__["PlayerModelProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_player_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["PlayerLocalstorageService"])); };
PlayerLocalstorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerLocalstorageComponent, selectors: [["app-player-localstorage"]], decls: 8, vars: 1, consts: [[3, "click"]], template: function PlayerLocalstorageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerLocalstorageComponent_Template_button_click_0_listener($event) { return ctx.loadPlayerFromStorage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerLocalstorageComponent_Template_button_click_2_listener($event) { return ctx.savePlayerToStorage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerLocalstorageComponent_Template_button_click_4_listener($event) { return ctx.deletePlayerFromStorage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionResult);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItbG9jYWxzdG9yYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "otUU":
/*!***************************************************!*\
  !*** ./src/app/ng-material/ng-material.module.ts ***!
  \***************************************************/
/*! exports provided: NgMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMaterialModule", function() { return NgMaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tabs.component */ "F9hl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class NgMaterialModule {
}
NgMaterialModule.ɵfac = function NgMaterialModule_Factory(t) { return new (t || NgMaterialModule)(); };
NgMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: NgMaterialModule });
NgMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
        ], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NgMaterialModule, { declarations: [_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]], exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"]] }); })();


/***/ }),

/***/ "uyD5":
/*!*************************************************************************************!*\
  !*** ./src/app/components/numeric-value-handler/numeric-value-handler.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NumericValueHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericValueHandlerComponent", function() { return NumericValueHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NumericValueHandlerComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumericValueHandlerComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.resetValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NumericValueHandlerComponent {
    constructor() {
        this.label = 'Default';
        this.currentValue = 0;
        this.minValue = 0;
        this.maxValue = 0;
        this.baseValue = 0;
        this.showReset = true;
        this.currentValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onModelChange(event) {
        // Unclear workaround:
        // Without binding the ngModelEvent and emitting the currentValue ... direct edits of the input control are not registered outside of this component
        // Question is why?  
        this.currentValueChange.emit(this.currentValue);
    }
    ngOnInit() {
        this.resetValue();
    }
    // TODO MaxWert muss überschreibbar werden wenn man z.B. im Level Up Modus ist
    countUp() {
        if (this.currentValue < this.maxValue) {
            this.currentValue = Number(this.currentValue) + 1;
            this.currentValueChange.emit(this.currentValue);
        }
    }
    countDown() {
        if (this.currentValue > this.minValue) {
            this.currentValue = Number(this.currentValue) - 1;
            this.currentValueChange.emit(this.currentValue);
        }
    }
    resetValue() {
        this.currentValue = Number(this.baseValue);
        this.currentValueChange.emit(this.currentValue);
    }
}
NumericValueHandlerComponent.ɵfac = function NumericValueHandlerComponent_Factory(t) { return new (t || NumericValueHandlerComponent)(); };
NumericValueHandlerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumericValueHandlerComponent, selectors: [["app-numeric-value-handler"]], inputs: { label: "label", currentValue: "currentValue", minValue: "minValue", maxValue: "maxValue", baseValue: "baseValue", showReset: "showReset" }, outputs: { currentValueChange: "currentValueChange" }, decls: 9, vars: 5, consts: [["type", "number", 1, "numeric-input", 3, "ngModel", "max", "min", "ngModelChange"], [1, "buttonContainer"], [3, "click"], [3, "click", 4, "ngIf"]], template: function NumericValueHandlerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NumericValueHandlerComponent_Template_input_ngModelChange_2_listener($event) { return ctx.currentValue = $event; })("ngModelChange", function NumericValueHandlerComponent_Template_input_ngModelChange_2_listener($event) { return ctx.onModelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumericValueHandlerComponent_Template_button_click_4_listener() { return ctx.countDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumericValueHandlerComponent_Template_button_click_6_listener() { return ctx.countUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NumericValueHandlerComponent_button_8_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentValue)("max", ctx.maxValue)("min", ctx.minValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReset);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".numeric-input[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 2px 15px;\n  \n  margin: 0px 2px;\n\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    transition: 0.5s;\n    background-color: teal;\n}\n\n\n\nlabel[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWVyaWMtdmFsdWUtaGFuZGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0EsZ0NBQWdDOztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlOztBQUVqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7Ozs7O0VBUUU7O0FBR0Y7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoibnVtZXJpYy12YWx1ZS1oYW5kbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtZXJpYy1pbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDJweCAxNXB4O1xuICAvKiBmb250LXNpemU6IDFlbTsgKi9cbiAgbWFyZ2luOiAwcHggMnB4O1xuXG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuXG4vKi5idXR0b25Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4Ym94O1xuICBtYXJnaW46IDVweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59Ki9cblxuXG5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map