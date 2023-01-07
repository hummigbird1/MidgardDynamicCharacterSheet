"use strict";
(self["webpackChunkMidgardDynamicCharacterSheet"] = self["webpackChunkMidgardDynamicCharacterSheet"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/player-model-provider.service */ 3889);
/* harmony import */ var _services_player_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/player-localstorage.service */ 6297);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _components_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/numeric-value-handler/numeric-value-handler.component */ 446);
/* harmony import */ var _components_adventure_sheet_adventure_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/adventure-sheet/adventure-sheet.component */ 1525);
/* harmony import */ var _components_player_import_export_player_import_export_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/player-import-export/player-import-export.component */ 4706);
/* harmony import */ var _components_character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/character-sheet/character-sheet.component */ 5419);
/* harmony import */ var _components_player_localstorage_player_localstorage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/player-localstorage/player-localstorage.component */ 3824);
/* harmony import */ var _components_basic_character_stats_basic_character_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/basic-character-stats/basic-character-stats.component */ 1675);













class AppComponent {
  constructor(pmps, plss, titleService) {
    this.pmps = pmps;
    this.plss = plss;
    this.titleService = titleService;
    this.title = 'Midgard Dynamic Character Sheet';
    this.editMode = true;
  }
  ngAfterViewInit() {
    const playerFromStorage = this.plss.loadPlayer();
    if (playerFromStorage != null) {
      this.pmps.player = playerFromStorage;
      this.titleService.setTitle(playerFromStorage.name + ' - Midgard Dynamic Character Sheet');
      this.editMode = false;
    }
  }
  get player() {
    return this.pmps.player;
  }
  set player(p) {
    this.pmps.player = p;
    this.titleService.setTitle(p.name + ' - Midgard Dynamic Character Sheet');
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_0__.PlayerModelProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_player_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.PlayerLocalstorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 29,
  vars: 15,
  consts: [[1, "basic-character-block"], [3, "player", "playerChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["label", "Character"], [3, "player", "editMode", "playerChange"], ["label", "Abenteuer Tagesbogen"], ["label", "UI Element Beispiel / Demo"], ["label", "HP", 3, "baseValue", "minValue", "maxValue"], ["label", "AP", 3, "baseValue", "minValue", "maxValue"], ["label", "BB", 3, "baseValue", "showReset", "minValue", "maxValue"], ["label", "Zauber"], ["label", "Beschw\u00F6rungen"], ["label", "Player Storage"], ["label", "Player Import/Export"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Midgard Dynamic Character Sheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 0)(3, "app-basic-character-stats", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("playerChange", function AppComponent_Template_app_basic_character_stats_playerChange_3_listener($event) {
        return ctx.player = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Edit Character: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.editMode = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-tab-group")(8, "mat-tab", 3)(9, "app-character-sheet", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("playerChange", function AppComponent_Template_app_character_sheet_playerChange_9_listener($event) {
        return ctx.player = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-tab", 5)(11, "app-adventure-sheet", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("playerChange", function AppComponent_Template_app_adventure_sheet_playerChange_11_listener($event) {
        return ctx.player = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-tab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-numeric-value-handler", 7)(14, "br")(15, "app-numeric-value-handler", 8)(16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Beispiel - Numerische EIngabe ohne Reset:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "br")(19, "app-numeric-value-handler", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-tab", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " Hier k\u00F6nnten die Zauberspr\u00FCche stehen ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-tab", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Hier k\u00F6nnten die Beschw\u00F6rungen stehen");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-tab", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "app-player-localstorage");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-tab", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "app-player-import-export");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("player", ctx.player);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("player", ctx.player)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("player", ctx.player);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("baseValue", 30)("minValue", 0)("maxValue", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("baseValue", 12)("minValue", 0)("maxValue", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("baseValue", 500)("showReset", false)("minValue", 0)("maxValue", 99999999);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _components_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_2__.NumericValueHandlerComponent, _components_adventure_sheet_adventure_sheet_component__WEBPACK_IMPORTED_MODULE_3__.AdventureSheetComponent, _components_player_import_export_player_import_export_component__WEBPACK_IMPORTED_MODULE_4__.PlayerImportExportComponent, _components_character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_5__.CharacterSheetComponent, _components_player_localstorage_player_localstorage_component__WEBPACK_IMPORTED_MODULE_6__.PlayerLocalstorageComponent, _components_basic_character_stats_basic_character_stats_component__WEBPACK_IMPORTED_MODULE_7__.BasicCharacterStatsComponent],
  styles: ["app-numeric-value-handler[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.basic-character-block[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 100px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbImFwcC1udW1lcmljLXZhbHVlLWhhbmRsZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5iYXNpYy1jaGFyYWN0ZXItYmxvY2sge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/numeric-value-handler/numeric-value-handler.component */ 446);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ng_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-material.module */ 4574);
/* harmony import */ var _components_adventure_sheet_adventure_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/adventure-sheet/adventure-sheet.component */ 1525);
/* harmony import */ var _components_player_import_export_player_import_export_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/player-import-export/player-import-export.component */ 4706);
/* harmony import */ var _services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/player-model-provider.service */ 3889);
/* harmony import */ var _components_character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/character-sheet/character-sheet.component */ 5419);
/* harmony import */ var _components_player_localstorage_player_localstorage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/player-localstorage/player-localstorage.component */ 3824);
/* harmony import */ var _components_basic_character_stats_basic_character_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/basic-character-stats/basic-character-stats.component */ 1675);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_primitives_stat_value_stat_value_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/primitives/stat-value/stat-value.component */ 5282);
/* harmony import */ var _components_primitives_text_stat_value_text_stat_value_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/primitives/text-stat-value/text-stat-value.component */ 5613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_6__.PlayerModelProviderService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _ng_material_module__WEBPACK_IMPORTED_MODULE_3__.NgMaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_2__.NumericValueHandlerComponent, _components_adventure_sheet_adventure_sheet_component__WEBPACK_IMPORTED_MODULE_4__.AdventureSheetComponent, _components_player_import_export_player_import_export_component__WEBPACK_IMPORTED_MODULE_5__.PlayerImportExportComponent, _components_character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_7__.CharacterSheetComponent, _components_player_localstorage_player_localstorage_component__WEBPACK_IMPORTED_MODULE_8__.PlayerLocalstorageComponent, _components_basic_character_stats_basic_character_stats_component__WEBPACK_IMPORTED_MODULE_9__.BasicCharacterStatsComponent, _components_primitives_stat_value_stat_value_component__WEBPACK_IMPORTED_MODULE_10__.StatValueComponent, _components_primitives_text_stat_value_text_stat_value_component__WEBPACK_IMPORTED_MODULE_11__.TextStatValueComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _ng_material_module__WEBPACK_IMPORTED_MODULE_3__.NgMaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1525:
/*!*************************************************************************!*\
  !*** ./src/app/components/adventure-sheet/adventure-sheet.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdventureSheetComponent": () => (/* binding */ AdventureSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_models_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/player */ 78);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numeric-value-handler/numeric-value-handler.component */ 446);






function AdventureSheetComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 24)(2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdventureSheetComponent_tr_42_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r1.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdventureSheetComponent_tr_42_Template_textarea_ngModelChange_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r1.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 26)(5, "div", 27)(6, "app-numeric-value-handler", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_tr_42_Template_app_numeric_value_handler_currentValueChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r1.quantity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdventureSheetComponent_tr_42_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.removeItem(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentValue", item_r1.quantity)("minValue", 0)("maxValue", 99999999999)("showReset", false);
  }
}
class AdventureSheetComponent {
  constructor() {
    this.playerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {}
  addItem(event) {
    this.player.items.push(new src_app_models_player__WEBPACK_IMPORTED_MODULE_0__.ConsumableItem());
  }
  removeItem(itemToRemove) {
    var itemIndex = this.player.items.indexOf(itemToRemove);
    this.player.items.splice(itemIndex, 1);
  }
}
AdventureSheetComponent.ɵfac = function AdventureSheetComponent_Factory(t) {
  return new (t || AdventureSheetComponent)();
};
AdventureSheetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AdventureSheetComponent,
  selectors: [["app-adventure-sheet"]],
  inputs: {
    player: "player"
  },
  outputs: {
    playerChange: "playerChange"
  },
  decls: 45,
  vars: 45,
  consts: [[1, "container"], [1, "CoinsAndJewelsArea"], [1, "CoinsArea", "HorizontalFlexbox"], ["label", "Gold\u00A0\u00A0", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "Silber", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "Kupfer", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], [1, "JewelArea", "HorizontalFlexbox"], ["label", "50er\u00A0\u00A0", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "100er\u00A0", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "1000er", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], [1, "EquipmentAndPotionsArea"], [1, "PotionsArea"], [1, "HealingPotionsArea", "HorizontalFlexbox"], ["label", "1w6", 3, "currentValue", "minValue", "maxValue", "showReset", "currentValueChange"], ["label", "2w6", 3, "currentValue", "minValue", "maxValue", "showReset", "currentValueChange"], ["label", "3w6", 3, "currentValue", "minValue", "maxValue", "showReset", "currentValueChange"], [1, "PowerPotionsArea", "HorizontalFlexbox"], [1, "EquipmentArea", "HorizontalFlexbox"], [1, "equipment-content"], [1, "MaterialArea"], [1, "material-table"], [1, "material-row"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "Material-Column1"], [1, "material-description", 3, "ngModel", "ngModelChange"], [1, "Material-Quantity-Alignment", "Material-Column2"], [1, "HorizontalFlexbox"], ["label", "", 3, "currentValue", "minValue", "maxValue", "showReset", "currentValueChange"]],
  template: function AdventureSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "M\u00FCnzen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-numeric-value-handler", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_5_listener($event) {
        return ctx.player.currencies.coins.gold = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-numeric-value-handler", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_6_listener($event) {
        return ctx.player.currencies.coins.silver = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-numeric-value-handler", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_7_listener($event) {
        return ctx.player.currencies.coins.copper = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Edelsteine");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "app-numeric-value-handler", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_11_listener($event) {
        return ctx.player.currencies.jewels.fifties = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-numeric-value-handler", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_12_listener($event) {
        return ctx.player.currencies.jewels.hundreds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "app-numeric-value-handler", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_13_listener($event) {
        return ctx.player.currencies.jewels.thousands = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Heiltr\u00E4nke");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "app-numeric-value-handler", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_19_listener($event) {
        return ctx.player.potions.healing.small = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "app-numeric-value-handler", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_20_listener($event) {
        return ctx.player.potions.healing.medium = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "app-numeric-value-handler", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_21_listener($event) {
        return ctx.player.potions.healing.large = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16)(23, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Krafttr\u00E4nke");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "app-numeric-value-handler", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_25_listener($event) {
        return ctx.player.potions.strength.small = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "app-numeric-value-handler", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_26_listener($event) {
        return ctx.player.potions.strength.large = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17)(28, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Ausr\u00FCstung");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "textarea", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19)(32, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Verbrauchsmaterial");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "table", 20)(35, "thead")(36, "tr", 21)(37, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Name/Beschreibung");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Menge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, AdventureSheetComponent_tr_42_Template, 9, 6, "tr", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdventureSheetComponent_Template_button_click_43_listener($event) {
        return ctx.addItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.gold);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.silver);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.copper);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.jewels.fifties);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.jewels.hundreds);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.jewels.thousands);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentValue", ctx.player.potions.healing.small)("minValue", 0)("maxValue", 99999999999)("showReset", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentValue", ctx.player.potions.healing.medium)("minValue", 0)("maxValue", 99999999999)("showReset", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentValue", ctx.player.potions.healing.large)("minValue", 0)("maxValue", 99999999999)("showReset", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentValue", ctx.player.potions.strength.small)("minValue", 0)("maxValue", 99999999999)("showReset", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentValue", ctx.player.potions.strength.large)("minValue", 0)("maxValue", 99999999999)("showReset", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.player.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_1__.NumericValueHandlerComponent],
  styles: ["h2[_ngcontent-%COMP%] {\n\tmargin: 0px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n\tresize: vertical;\n}\n\nthead[_ngcontent-%COMP%] {\n\ttext-align: left;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n\tpadding: 0px 10px 0px 0px;\n\twidth: 50%;\n}\n\n.equipment-content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%\n}\n\n.material-description[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.material-table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.material-row[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {  \n\tmargin: 10px 25px;\n\tdisplay: grid;\n    grid-template-rows: 0.3fr 0.6fr 1.25fr;\n    grid-auto-columns: 1fr;\n    gap: 40px 0px;\n    grid-auto-flow: row;\n}\n\n.CoinsAndJewelsArea[_ngcontent-%COMP%] {\n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-auto-rows: 1fr;\n\tgap: 0px 25px;\n\tgrid-auto-flow: row;\n}\n\n.CoinsArea[_ngcontent-%COMP%] {  \n\t\n\tgrid-area: 1 / 1 / 2 / 2;\n\t\n}\n\n.CoinsArea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n\t\n}\n  \n.JewelArea[_ngcontent-%COMP%] {  \n\t\n}\n\n.JewelArea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n\t\n}\n\n.EquipmentAndPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-auto-rows: 1fr;\n\tgap: 0px 25px;\n\tgrid-auto-flow: row;\n\tgrid-area: 2 / 1 / 3 / 2;\n}\n\n.PotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-template-rows: 1fr;\n\tgap: 0px 25px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"HealingPotionsArea PowerPotionsArea\";\n\tgrid-area: 1 / 2 / 2 / 3;\n}\n\n.HealingPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-rows: 0.37fr repeat(3, 1fr);\n\tgrid-auto-columns: 1fr;\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"\"\n\t\t\"\"\n\t\t\"\"\n\t\t\"\";\n\tgrid-area: HealingPotionsArea;\n}\n\n.PowerPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-rows: 0.25fr repeat(2, 1fr);\n\tgrid-auto-columns: 1fr;\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"\"\n\t\t\"\"\n\t\t\"\";\n\tgrid-area: PowerPotionsArea;\n}\n\n.EquipmentArea[_ngcontent-%COMP%] { \n\tgrid-area: 1 / 1 / 2 / 2;\n\tmargin-right: 10px;\n}\n\n.MaterialArea[_ngcontent-%COMP%] { \n\tgrid-area: 3 / 1 / 4 / 2; \n}\n\n.HorizontalFlexbox[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 5px;\n}\n\n.VerticalFlexbox[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.Material-Quantity-Alignment[_ngcontent-%COMP%]{\n\tvertical-align: top;\n}\n\n.Material-Column1[_ngcontent-%COMP%]{\n\twidth: 85%;\n}\n\n.Material-Column2[_ngcontent-%COMP%]{\n\twidth: 10%;\n\theight: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZHZlbnR1cmUtc2hlZXQvYWR2ZW50dXJlLXNoZWV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsVUFBVTtBQUNYOztBQUVBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtJQUNWLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQzs7Ozs7NEJBSzJCO0NBQzNCLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQzs7Ozs0QkFJMkI7QUFDNUI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkI7dUNBQ3NDO0NBQ3RDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5Q0FBeUM7Q0FDekMsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7Ozs7SUFJRztDQUNILDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5Q0FBeUM7Q0FDekMsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7OztJQUdHO0NBQ0gsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG5cdG1hcmdpbjogMHB4O1xufVxuXG50ZXh0YXJlYSB7XG5cdHJlc2l6ZTogdmVydGljYWw7XG59XG5cbnRoZWFkIHtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGQsIHRoIHtcblx0cGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcblx0d2lkdGg6IDUwJTtcbn1cblxuLmVxdWlwbWVudC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cblxuLm1hdGVyaWFsLWRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdGVyaWFsLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdGVyaWFsLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIgeyAgXG5cdG1hcmdpbjogMTBweCAyNXB4O1xuXHRkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgMC42ZnIgMS4yNWZyO1xuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiA0MHB4IDBweDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xufVxuXG4uQ29pbnNBbmRKZXdlbHNBcmVhIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuXHRncmlkLWF1dG8tcm93czogMWZyO1xuXHRnYXA6IDBweCAyNXB4O1xuXHRncmlkLWF1dG8tZmxvdzogcm93O1xufVxuXG4uQ29pbnNBcmVhIHsgIFxuXHQvKiBkaXNwbGF5OiBncmlkO1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDMsIDFmcik7XG5cdGdhcDogMHB4IDBweDtcblx0Z3JpZC1hdXRvLWZsb3c6IHJvdztcblx0Z3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyAqL1xuXHRncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG5cdC8qIGdhcDogNTBweCA1MHB4OyAqL1xufVxuXG4uQ29pbnNBcmVhICoge1xuXHQvKiBhbGlnbi1zZWxmOiBjZW50ZXI7ICovXG59XG4gIFxuLkpld2VsQXJlYSB7ICBcblx0LyogZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMywgMWZyKTtcblx0Z2FwOiAwcHggMHB4O1xuXHRncmlkLWF1dG8tZmxvdzogcm93O1xuXHRncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7ICovXG59XG5cbi5KZXdlbEFyZWEgKiB7XG5cdC8qIGFsaWduLXNlbGY6IGNlbnRlcjsgKi9cbn1cblxuLkVxdWlwbWVudEFuZFBvdGlvbnNBcmVhIHsgIFxuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG5cdGdyaWQtYXV0by1yb3dzOiAxZnI7XG5cdGdhcDogMHB4IDI1cHg7XG5cdGdyaWQtYXV0by1mbG93OiByb3c7XG5cdGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbn1cblxuLlBvdGlvbnNBcmVhIHsgIFxuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblx0Z2FwOiAwcHggMjVweDtcblx0Z3JpZC1hdXRvLWZsb3c6IHJvdztcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcblx0XHRcIkhlYWxpbmdQb3Rpb25zQXJlYSBQb3dlclBvdGlvbnNBcmVhXCI7XG5cdGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbn1cblxuLkhlYWxpbmdQb3Rpb25zQXJlYSB7ICBcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjM3ZnIgcmVwZWF0KDMsIDFmcik7XG5cdGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XG5cdGdhcDogMHB4IDBweDtcblx0Z3JpZC1hdXRvLWZsb3c6IHJvdztcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcblx0XHRcIlwiXG5cdFx0XCJcIlxuXHRcdFwiXCJcblx0XHRcIlwiO1xuXHRncmlkLWFyZWE6IEhlYWxpbmdQb3Rpb25zQXJlYTtcbn1cblxuLlBvd2VyUG90aW9uc0FyZWEgeyAgXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMC4yNWZyIHJlcGVhdCgyLCAxZnIpO1xuXHRncmlkLWF1dG8tY29sdW1uczogMWZyO1xuXHRnYXA6IDBweCAwcHg7XG5cdGdyaWQtYXV0by1mbG93OiByb3c7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6XG5cdFx0XCJcIlxuXHRcdFwiXCJcblx0XHRcIlwiO1xuXHRncmlkLWFyZWE6IFBvd2VyUG90aW9uc0FyZWE7XG59XG5cbi5FcXVpcG1lbnRBcmVhIHsgXG5cdGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uTWF0ZXJpYWxBcmVhIHsgXG5cdGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjsgXG59XG5cbi5Ib3Jpem9udGFsRmxleGJveHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cm93LWdhcDogNXB4O1xufVxuXG4uVmVydGljYWxGbGV4Ym94e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uTWF0ZXJpYWwtUXVhbnRpdHktQWxpZ25tZW50e1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uTWF0ZXJpYWwtQ29sdW1uMXtcblx0d2lkdGg6IDg1JTtcbn1cblxuLk1hdGVyaWFsLUNvbHVtbjJ7XG5cdHdpZHRoOiAxMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1675:
/*!*************************************************************************************!*\
  !*** ./src/app/components/basic-character-stats/basic-character-stats.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicCharacterStatsComponent": () => (/* binding */ BasicCharacterStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../numeric-value-handler/numeric-value-handler.component */ 446);



class BasicCharacterStatsComponent {
  constructor() {
    this.playerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {}
}
BasicCharacterStatsComponent.ɵfac = function BasicCharacterStatsComponent_Factory(t) {
  return new (t || BasicCharacterStatsComponent)();
};
BasicCharacterStatsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BasicCharacterStatsComponent,
  selectors: [["app-basic-character-stats"]],
  inputs: {
    player: "player"
  },
  outputs: {
    playerChange: "playerChange"
  },
  decls: 5,
  vars: 9,
  consts: [["label", "HP", 3, "currentValue", "baseValue", "minValue", "maxValue", "currentValueChange"], ["label", "AP", 3, "currentValue", "baseValue", "minValue", "maxValue", "currentValueChange"]],
  template: function BasicCharacterStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-numeric-value-handler", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("currentValueChange", function BasicCharacterStatsComponent_Template_app_numeric_value_handler_currentValueChange_2_listener($event) {
        return ctx.player.stats.current.hitPoints = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-numeric-value-handler", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("currentValueChange", function BasicCharacterStatsComponent_Template_app_numeric_value_handler_currentValueChange_4_listener($event) {
        return ctx.player.stats.current.staminaPoints = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Character Name ", ctx.player.name, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currentValue", ctx.player.stats.current.hitPoints)("baseValue", ctx.player.stats.base.hitPoints)("minValue", 0)("maxValue", ctx.player.stats.base.hitPoints);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currentValue", ctx.player.stats.current.staminaPoints)("baseValue", ctx.player.stats.base.staminaPoints)("minValue", 0)("maxValue", ctx.player.stats.base.staminaPoints);
    }
  },
  dependencies: [_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_0__.NumericValueHandlerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5419:
/*!*************************************************************************!*\
  !*** ./src/app/components/character-sheet/character-sheet.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterSheetComponent": () => (/* binding */ CharacterSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../numeric-value-handler/numeric-value-handler.component */ 446);
/* harmony import */ var _primitives_stat_value_stat_value_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primitives/stat-value/stat-value.component */ 5282);
/* harmony import */ var _primitives_text_stat_value_text_stat_value_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../primitives/text-stat-value/text-stat-value.component */ 5613);





class CharacterSheetComponent {
  constructor() {
    this.playerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.editMode = false;
  }
  ngOnInit() {}
}
CharacterSheetComponent.ɵfac = function CharacterSheetComponent_Factory(t) {
  return new (t || CharacterSheetComponent)();
};
CharacterSheetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CharacterSheetComponent,
  selectors: [["app-character-sheet"]],
  inputs: {
    player: "player",
    editMode: "editMode"
  },
  outputs: {
    playerChange: "playerChange"
  },
  decls: 144,
  vars: 147,
  consts: [[1, "information-block"], ["label", "Name", 3, "value", "editMode", "valueChange"], ["label", "Typ", 3, "value", "editMode", "valueChange"], ["label", "Grad", 3, "value", "editMode", "valueChange"], ["label", "Herkunft", 3, "value", "editMode", "valueChange"], ["label", "Stand", 3, "value", "editMode", "valueChange"], ["label", "Alter", 3, "value", "editMode", "valueChange"], ["label", "Beruf", 3, "value", "editMode", "valueChange"], ["label", "Glaube", 3, "value", "editMode", "valueChange"], ["label", "GG", 3, "value", "editMode", "valueChange"], [1, "visual-attributes-block"], ["label", "Gr\u00F6\u00DFe", 3, "value", "editMode", "valueChange"], ["rowspan", "3"], ["label", "Aussehen", 3, "multiline", "value", "editMode", "valueChange"], ["label", "Gewicht", 3, "value", "editMode", "valueChange"], ["label", "Gestalt", 3, "value", "editMode", "valueChange"], [1, "attributes-block"], ["label", "ST", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "GE", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "KO", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "IN", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "ZT", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "AU", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "PA", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "SB", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "HGW", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "KAW", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "RW", 3, "value", "diceSides", "isChallengeableStat", "editMode", "valueChange"], ["label", "B", 3, "value", "editMode", "valueChange"], ["label", "WLW", 3, "value", "editMode", "valueChange"], ["label", "LP-Basis", 3, "value", "editMode", "valueChange"], ["label", "GiT", 3, "value", "editMode", "valueChange"], [1, "bonus-block"], ["label", "Ausdauer", 3, "value", "editMode", "valueChange"], ["label", "Zaubern", 3, "value", "editMode", "valueChange"], ["label", "Angriff", 3, "value", "editMode", "valueChange"], ["label", "Schaden", 3, "value", "editMode", "valueChange"], ["label", "Abwehr", 3, "value", "editMode", "valueChange"], ["label", "psy.ZR", 3, "value", "editMode", "valueChange"], ["label", "phs.ZR", 3, "value", "editMode", "valueChange"], ["label", "phk.ZR", 3, "value", "editMode", "valueChange"], [1, "health-block"], ["label", "LP", 3, "value", "editMode", "valueChange"], ["label", "LP (aktuell)", 3, "value", "editMode", "valueChange"], ["label", "AP", 3, "value", "editMode", "valueChange"], ["label", "AP (aktuell)", 3, "value", "editMode", "valueChange"], [1, "defense-block"], ["label", "R\u00FCstung", 3, "multiline", "value", "editMode", "valueChange"], ["label", "RK", 3, "multiline", "value", "editMode", "valueChange"], ["label", "LPV", 3, "value", "editMode", "valueChange"], [1, "experience-block"], ["colspan", "3"], ["label", "GFP", 3, "displayButtons", "currentValue", "minValue", "maxValue", "currentValueChange"], ["label", "AEP", 3, "displayButtons", "currentValue", "minValue", "maxValue", "currentValueChange"], ["label", "KEP", 3, "displayButtons", "currentValue", "minValue", "maxValue", "currentValueChange"], ["label", "ZEP", 3, "displayButtons", "currentValue", "minValue", "maxValue", "currentValueChange"], ["label", "GS:", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "SS:", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "KS:", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"]],
  template: function CharacterSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "table")(2, "tr")(3, "td")(4, "app-text-stat-value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_4_listener($event) {
        return ctx.player.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "app-text-stat-value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_6_listener($event) {
        return ctx.player.type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "app-stat-value", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_8_listener($event) {
        return ctx.player.level = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tr")(10, "td")(11, "app-text-stat-value", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_11_listener($event) {
        return ctx.player.origin = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "app-text-stat-value", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_13_listener($event) {
        return ctx.player.socialStanding = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td")(15, "app-stat-value", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_15_listener($event) {
        return ctx.player.age = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tr")(17, "td")(18, "app-text-stat-value", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_18_listener($event) {
        return ctx.player.occupation = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td")(20, "app-text-stat-value", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_20_listener($event) {
        return ctx.player.faith = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td")(22, "app-stat-value", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_22_listener($event) {
        return ctx.player.godlyGrace = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10)(24, "table")(25, "tr")(26, "td")(27, "app-stat-value", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_27_listener($event) {
        return ctx.player.appearance.height = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td", 12)(29, "app-text-stat-value", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_29_listener($event) {
        return ctx.player.appearance.appearance = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tr")(31, "td")(32, "app-stat-value", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_32_listener($event) {
        return ctx.player.appearance.weight = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "tr")(34, "td")(35, "app-text-stat-value", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_35_listener($event) {
        return ctx.player.appearance.figure = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 16)(37, "table")(38, "tr")(39, "td")(40, "app-stat-value", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_40_listener($event) {
        return ctx.player.attributes.strength = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "td")(42, "app-stat-value", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_42_listener($event) {
        return ctx.player.attributes.agility = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "td")(44, "app-stat-value", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_44_listener($event) {
        return ctx.player.attributes.constitution = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "td")(46, "app-stat-value", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_46_listener($event) {
        return ctx.player.attributes.intelligence = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "td")(48, "app-stat-value", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_48_listener($event) {
        return ctx.player.attributes.magicAffinity = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "tr")(50, "td")(51, "app-stat-value", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_51_listener($event) {
        return ctx.player.attributes.looks = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "td")(53, "app-stat-value", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_53_listener($event) {
        return ctx.player.attributes.charisma = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "td")(55, "app-stat-value", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_55_listener($event) {
        return ctx.player.attributes.selfControl = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "td")(57, "app-stat-value", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_57_listener($event) {
        return ctx.player.attributes.closeQuarterCombatAffinity = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "td")(59, "app-stat-value", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_59_listener($event) {
        return ctx.player.attributes.showOfStrengthAffinitiy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "tr")(61, "td")(62, "app-stat-value", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_62_listener($event) {
        return ctx.player.attributes.reaction = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td")(64, "app-stat-value", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_64_listener($event) {
        return ctx.player.attributes.movement = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "td")(66, "app-stat-value", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_66_listener($event) {
        return ctx.player.attributes.revivalAffinitiy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "td")(68, "app-stat-value", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_68_listener($event) {
        return ctx.player.attributes.hitPointsBase = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "td")(70, "app-stat-value", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_70_listener($event) {
        return ctx.player.attributes.poisonResistance = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 32)(72, "table")(73, "tr")(74, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "pers\u00F6nlicher Bonus ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "td")(77, "app-stat-value", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_77_listener($event) {
        return ctx.player.bonusStats.stamina = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "td")(79, "app-stat-value", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_79_listener($event) {
        return ctx.player.bonusStats.magic = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "tr")(81, "td")(82, "app-stat-value", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_82_listener($event) {
        return ctx.player.bonusStats.attack = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "td")(84, "app-stat-value", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_84_listener($event) {
        return ctx.player.bonusStats.damage = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "td")(86, "app-stat-value", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_86_listener($event) {
        return ctx.player.bonusStats.defense = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "tr")(88, "td")(89, "app-stat-value", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_89_listener($event) {
        return ctx.player.bonusStats.magicResistance.psychologic = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "td")(91, "app-stat-value", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_91_listener($event) {
        return ctx.player.bonusStats.magicResistance.physical = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "td")(93, "app-stat-value", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_93_listener($event) {
        return ctx.player.bonusStats.magicResistance.environmental = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 41)(95, "table")(96, "tr")(97, "td")(98, "app-stat-value", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_98_listener($event) {
        return ctx.player.stats.base.hitPoints = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "td")(100, "app-stat-value", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_100_listener($event) {
        return ctx.player.stats.current.hitPoints = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "tr")(102, "td")(103, "app-stat-value", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_103_listener($event) {
        return ctx.player.stats.base.staminaPoints = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "td")(105, "app-stat-value", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_105_listener($event) {
        return ctx.player.stats.current.staminaPoints = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 46)(107, "table")(108, "tr")(109, "td", 12)(110, "app-text-stat-value", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_110_listener($event) {
        return ctx.player.defenseStats.armorDescription = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "td")(112, "app-text-stat-value", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_text_stat_value_valueChange_112_listener($event) {
        return ctx.player.defenseStats.armorClass = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "td")(114, "app-stat-value", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_114_listener($event) {
        return ctx.player.defenseStats.magicResistance.psychologic = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "tr")(116, "td")(117, "app-stat-value", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_117_listener($event) {
        return ctx.player.defenseStats.hitPointLossValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "td")(119, "app-stat-value", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_119_listener($event) {
        return ctx.player.defenseStats.magicResistance.physical = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "tr")(121, "td")(122, "app-stat-value", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_122_listener($event) {
        return ctx.player.defenseStats.defense = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "td")(124, "app-stat-value", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function CharacterSheetComponent_Template_app_stat_value_valueChange_124_listener($event) {
        return ctx.player.defenseStats.magicResistance.environmental = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 50)(126, "table")(127, "tr")(128, "td", 51)(129, "app-numeric-value-handler", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_129_listener($event) {
        return ctx.player.experience.total = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "tr")(131, "td")(132, "app-numeric-value-handler", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_132_listener($event) {
        return ctx.player.experience.common = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "td")(134, "app-numeric-value-handler", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_134_listener($event) {
        return ctx.player.experience.battle = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "td")(136, "app-numeric-value-handler", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_136_listener($event) {
        return ctx.player.experience.magic = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "tr")(138, "td")(139, "app-numeric-value-handler", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_139_listener($event) {
        return ctx.player.currencies.coins.gold = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "td")(141, "app-numeric-value-handler", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_141_listener($event) {
        return ctx.player.currencies.coins.silver = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "td")(143, "app-numeric-value-handler", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_143_listener($event) {
        return ctx.player.currencies.coins.copper = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.name)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.type)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.level)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.origin)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.socialStanding)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.age)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.occupation)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.faith)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.godlyGrace)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.appearance.height)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiline", true)("value", ctx.player.appearance.appearance)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.appearance.weight)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.appearance.figure)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.strength)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.agility)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.constitution)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.intelligence)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.magicAffinity)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.looks)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.charisma)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.selfControl)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.closeQuarterCombatAffinity)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.showOfStrengthAffinitiy)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.reaction)("diceSides", 100)("isChallengeableStat", true)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.movement)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.revivalAffinitiy)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.hitPointsBase)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.attributes.poisonResistance)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.bonusStats.stamina)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.bonusStats.magic)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.bonusStats.attack)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.bonusStats.damage)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.bonusStats.defense)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.bonusStats.magicResistance.psychologic)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.bonusStats.magicResistance.physical)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.bonusStats.magicResistance.environmental)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.stats.base.hitPoints)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.stats.current.hitPoints)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.stats.base.staminaPoints)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.stats.current.staminaPoints)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiline", true)("value", ctx.player.defenseStats.armorDescription)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiline", false)("value", ctx.player.defenseStats.armorClass)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.defenseStats.magicResistance.psychologic)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.defenseStats.hitPointLossValue)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.defenseStats.magicResistance.physical)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.defenseStats.defense)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.player.defenseStats.magicResistance.environmental)("editMode", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayButtons", false)("currentValue", ctx.player.experience.total)("minValue", 0)("maxValue", 99999999999999);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayButtons", false)("currentValue", ctx.player.experience.common)("minValue", 0)("maxValue", 99999999999999);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayButtons", false)("currentValue", ctx.player.experience.battle)("minValue", 0)("maxValue", 99999999999999);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayButtons", false)("currentValue", ctx.player.experience.magic)("minValue", 0)("maxValue", 99999999999999);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.gold);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.silver);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.copper);
    }
  },
  dependencies: [_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_0__.NumericValueHandlerComponent, _primitives_stat_value_stat_value_component__WEBPACK_IMPORTED_MODULE_1__.StatValueComponent, _primitives_text_stat_value_text_stat_value_component__WEBPACK_IMPORTED_MODULE_2__.TextStatValueComponent],
  styles: [".readonly-value[_ngcontent-%COMP%] {\n    width: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXItc2hlZXQvY2hhcmFjdGVyLXNoZWV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhZG9ubHktdmFsdWUge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 398:
/*!******************************************************************!*\
  !*** ./src/app/components/numeric-value-handler/checkresults.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEvaluatableToNumberResult": () => (/* binding */ CheckEvaluatableToNumberResult),
/* harmony export */   "CheckNumberResult": () => (/* binding */ CheckNumberResult)
/* harmony export */ });
class CheckNumberResult {
  constructor() {
    this.isNumber = false;
    this.value = Number.NaN;
  }
}
class CheckEvaluatableToNumberResult {
  constructor() {
    this.isEvaluatable = false;
    this.isExpressionTerminated = false;
    this.value = Number.NaN;
  }
}

/***/ }),

/***/ 446:
/*!*************************************************************************************!*\
  !*** ./src/app/components/numeric-value-handler/numeric-value-handler.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumericValueHandlerComponent": () => (/* binding */ NumericValueHandlerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _checkresults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkresults */ 398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function NumericValueHandlerComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" = ", ctx_r0.projectedValue, "");
  }
}
function NumericValueHandlerComponent_span_5_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NumericValueHandlerComponent_span_5_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.resetValue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.canReset);
  }
}
function NumericValueHandlerComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NumericValueHandlerComponent_span_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.countDown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NumericValueHandlerComponent_span_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.countUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NumericValueHandlerComponent_span_5_button_5_Template, 2, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.canCountDown || !ctx_r1.isValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.canCountUp || !ctx_r1.isValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showReset);
  }
}
class NumericValueHandlerComponent {
  constructor() {
    this.label = '';
    this._currentValue = 0;
    this.currentText = '0';
    this.showReset = true;
    this.displayButtons = true;
    this.currentValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.currentTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.projectingValue = false;
    this.projectedValue = 0;
  }
  get isValid() {
    if (this.currentValue === null || this.currentValue === undefined) return false;
    const canEvaluatableToNumberCheckResult = this.canEvaluatableToNumber(this.currentText);
    if (!canEvaluatableToNumberCheckResult.isEvaluatable) {
      return false;
    }
    return this.isNumberWithinRange(canEvaluatableToNumberCheckResult.value) && this.isNumberWithinRange(this._currentValue);
  }
  get currentValue() {
    return this._currentValue;
  }
  set currentValue(val) {
    this._currentValue = val;
    this.currentText = this.currentValue.toString();
    this.currentValueChange.emit(this._currentValue);
  }
  onKeyDown(event) {
    let handled = false;
    switch (event.key) {
      case "Escape":
        this.resetValue();
        handled = true;
        break;
      case "Up":
      case "ArrowUp":
        this.countUp();
        handled = true;
        break;
      case "Down":
      case "ArrowDown":
        this.countDown();
        handled = true;
        break;
    }
    if (handled) {
      event.preventDefault();
    }
  }
  onModelChange(event) {
    this.projectingValue = false;
    // Unclear workaround:
    // Without binding the ngModelEvent and emitting the currentValue ... direct edits of the input control are not registered outside of this component
    // Question is why?
    const isNumberCheckResult = this.isValidNumber(this.currentText);
    const canEvaluatableToNumberCheckResult = this.canEvaluatableToNumber(this.currentText);
    if (isNumberCheckResult.isNumber && this.isNumberWithinRange(isNumberCheckResult.value)) {
      this.currentValue = isNumberCheckResult.value;
    } else if (canEvaluatableToNumberCheckResult.isEvaluatable && canEvaluatableToNumberCheckResult.isExpressionTerminated && this.isNumberWithinRange(canEvaluatableToNumberCheckResult.value)) {
      this.currentValue = canEvaluatableToNumberCheckResult.value;
    } else if (canEvaluatableToNumberCheckResult.isEvaluatable && !canEvaluatableToNumberCheckResult.isExpressionTerminated) {
      this.projectingValue = true;
      this.projectedValue = canEvaluatableToNumberCheckResult.value;
    }
  }
  get canCountUp() {
    if (this.maxValue === undefined) {
      return true;
    }
    return this.currentValue < this.maxValue;
  }
  get canCountDown() {
    if (this.minValue === undefined) {
      return true;
    }
    return this.currentValue > this.minValue;
  }
  get canReset() {
    return this.baseValue !== undefined && this.baseValue != this.currentValue || this.projectingValue || !this.isValid;
  }
  // TODO MaxWert muss überschreibbar werden wenn man z.B. im Level Up Modus ist
  countUp() {
    if (this.canCountUp) {
      this.currentValue = this.currentValue + 1;
    }
  }
  countDown() {
    if (this.canCountDown) {
      this.currentValue = this.currentValue - 1;
    }
  }
  resetValue() {
    if (!this.canReset) {
      return;
    }
    if (this.projectingValue || !this.isValid) {
      // Restore last valid value by passing it through the public property setter
      this.currentValue = this._currentValue;
    } else if (this.isValid && this.baseValue !== undefined) {
      this.currentValue = this.baseValue;
    }
    this.projectingValue = false;
  }
  isNumberWithinRange(val) {
    let isMinValid = true;
    let isMaxValid = true;
    if (this.maxValue !== undefined) {
      isMaxValid = val <= this.maxValue;
    }
    if (this.minValue !== undefined) {
      isMinValid = val >= this.minValue;
    }
    return isMinValid && isMaxValid;
  }
  canEvaluatableToNumber(text) {
    const result = new _checkresults__WEBPACK_IMPORTED_MODULE_0__.CheckEvaluatableToNumberResult();
    if (this.isEmptyString(text)) return result;
    try {
      let sanitizedText = text;
      if (text.endsWith("=")) {
        sanitizedText = text.substring(0, text.length - 1);
        result.isExpressionTerminated = true;
      }
      var evalResult = eval(sanitizedText);
      const numberEvaluationResult = this.isValidNumber(evalResult);
      result.isEvaluatable = numberEvaluationResult.isNumber;
      result.value = numberEvaluationResult.value;
      return result;
    } catch {
      return result;
    }
  }
  isValidNumber(input) {
    if (typeof input === "string") {
      return this.isTextValidNumber(input);
    } else if (typeof input === "number") {
      const flooredNumber = this.getFlooredValue(input);
      const result = new _checkresults__WEBPACK_IMPORTED_MODULE_0__.CheckNumberResult();
      result.isNumber = this.isNumberValidNumber(flooredNumber);
      result.value = flooredNumber;
      return result;
    } else {
      return new _checkresults__WEBPACK_IMPORTED_MODULE_0__.CheckNumberResult();
    }
  }
  isNumberValidNumber(val) {
    return Number.isSafeInteger(val);
  }
  getFlooredValue(val) {
    return Math.floor(val);
  }
  isTextValidNumber(text) {
    const result = new _checkresults__WEBPACK_IMPORTED_MODULE_0__.CheckNumberResult();
    if (this.isEmptyString(text)) return result;
    const converterFlooredNumber = this.getFlooredValue(Number(text).valueOf());
    result.isNumber = this.isNumberValidNumber(converterFlooredNumber);
    result.value = converterFlooredNumber;
    return result;
  }
  isEmptyString(text) {
    return text === null || text === undefined || text.trim() === '';
  }
}
NumericValueHandlerComponent.ɵfac = function NumericValueHandlerComponent_Factory(t) {
  return new (t || NumericValueHandlerComponent)();
};
NumericValueHandlerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NumericValueHandlerComponent,
  selectors: [["app-numeric-value-handler"]],
  inputs: {
    label: "label",
    minValue: "minValue",
    maxValue: "maxValue",
    baseValue: "baseValue",
    showReset: "showReset",
    displayButtons: "displayButtons",
    currentValue: "currentValue"
  },
  outputs: {
    currentValueChange: "currentValueChange"
  },
  decls: 6,
  vars: 6,
  consts: [[1, "flex-container", "flex-item-gap"], [1, "flex-container", "bold", "growable-flex-item", "flex-item-gap"], ["type", "text", "required", "", 1, "flex-container", "growable-flex-item", 3, "ngModel", "ngModelChange", "keydown"], [4, "ngIf"], ["class", "flex-container", 4, "ngIf"], [1, "flex-container"], [3, "disabled", "click"], [3, "disabled", "click", 4, "ngIf"]],
  template: function NumericValueHandlerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NumericValueHandlerComponent_Template_input_ngModelChange_3_listener($event) {
        return ctx.currentText = $event;
      })("ngModelChange", function NumericValueHandlerComponent_Template_input_ngModelChange_3_listener($event) {
        return ctx.onModelChange($event);
      })("keydown", function NumericValueHandlerComponent_Template_input_keydown_3_listener($event) {
        return ctx.onKeyDown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NumericValueHandlerComponent_span_4_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NumericValueHandlerComponent_span_5_Template, 6, 3, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.label, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invalid-input", !ctx.isValid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currentText);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.projectingValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayButtons);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".invalid-input[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 2px 15px;\n  \n  margin: 0px 2px;\n\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    transition: 0.5s;\n    background-color: teal;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.growable-flex-item[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.flex-item-gap[_ngcontent-%COMP%] {\n  column-gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9udW1lcmljLXZhbHVlLWhhbmRsZXIvbnVtZXJpYy12YWx1ZS1oYW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7O0FBRWpCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMnB4IDE1cHg7XG4gIC8qIGZvbnQtc2l6ZTogMWVtOyAqL1xuICBtYXJnaW46IDBweCAycHg7XG5cbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5ncm93YWJsZS1mbGV4LWl0ZW0ge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5mbGV4LWl0ZW0tZ2FwIHtcbiAgY29sdW1uLWdhcDogMTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4706:
/*!***********************************************************************************!*\
  !*** ./src/app/components/player-import-export/player-import-export.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerImportExportComponent": () => (/* binding */ PlayerImportExportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/player-model-provider.service */ 3889);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);




class PlayerImportExportComponent {
  constructor(playerModelProviderService) {
    this.playerModelProviderService = playerModelProviderService;
    this.actionResult = null;
    this.jsonContent = '';
  }
  ngOnInit() {}
  getPlayerAsJson() {
    return JSON.stringify(this.playerModelProviderService.player, null, 2);
  }
  importPlayer(event) {
    if (this.jsonContent === undefined || this.jsonContent == '') {
      this.actionResult = "Nothing to import. Paste a character json into the text area!";
      return;
    }
    this.setPlayerFromJson(this.jsonContent);
  }
  exportPlayer(event) {
    try {
      this.jsonContent = this.getPlayerAsJson();
      this.actionResult = "Exported successfully";
    } catch (error) {
      this.setActionResultFromError(error);
    }
  }
  setPlayerFromJson(playerJson) {
    try {
      this.playerModelProviderService.player = JSON.parse(playerJson);
      this.actionResult = "Imported successfully";
    } catch (error) {
      this.setActionResultFromError(error);
    }
  }
  setActionResultFromError(error) {
    if (typeof error === "string") {
      this.actionResult = error;
    } else if (error instanceof Error) {
      this.actionResult = error.message;
    }
  }
}
PlayerImportExportComponent.ɵfac = function PlayerImportExportComponent_Factory(t) {
  return new (t || PlayerImportExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_0__.PlayerModelProviderService));
};
PlayerImportExportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PlayerImportExportComponent,
  selectors: [["app-player-import-export"]],
  decls: 11,
  vars: 2,
  consts: [[1, "action-area"], ["mat-raised-button", "", 3, "click"], [1, "data-area"], [1, "data-text", 3, "ngModel", "ngModelChange"]],
  template: function PlayerImportExportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerImportExportComponent_Template_button_click_1_listener($event) {
        return ctx.importPlayer($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Import");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerImportExportComponent_Template_button_click_3_listener($event) {
        return ctx.exportPlayer($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Export");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2)(8, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Spieler JSON: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "textarea", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PlayerImportExportComponent_Template_textarea_ngModelChange_10_listener($event) {
        return ctx.jsonContent = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.actionResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.jsonContent);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
  styles: ["button[_ngcontent-%COMP%] {\n    margin: 2px 5px;\n}\n\n.data-area[_ngcontent-%COMP%] {\n    width: 800px;\n    height: 600px;\n    margin: 5px;\n}\n\n.data-text[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 95%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXItaW1wb3J0LWV4cG9ydC9wbGF5ZXItaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgbWFyZ2luOiAycHggNXB4O1xufVxuXG4uZGF0YS1hcmVhIHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLmRhdGEtdGV4dCB7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBoZWlnaHQ6IDk1JTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3824:
/*!*********************************************************************************!*\
  !*** ./src/app/components/player-localstorage/player-localstorage.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerLocalstorageComponent": () => (/* binding */ PlayerLocalstorageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/player-model-provider.service */ 3889);
/* harmony import */ var src_app_services_player_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/player-localstorage.service */ 6297);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);




class PlayerLocalstorageComponent {
  constructor(pmps, plss) {
    this.pmps = pmps;
    this.plss = plss;
    this.actionResult = null;
  }
  ngOnInit() {}
  loadPlayerFromStorage(event) {
    try {
      const loadedPlayer = this.plss.loadPlayer();
      if (loadedPlayer !== null) {
        this.pmps.player = loadedPlayer;
        this.actionResult = "Player loaded successfully";
      } else {
        this.actionResult = "No player found in local storage";
      }
    } catch (error) {
      this.setActionResultFromError(error);
    }
  }
  savePlayerToStorage(event) {
    try {
      this.plss.savePlayer(this.pmps.player);
      this.actionResult = "Player stored successfully";
    } catch (error) {
      this.setActionResultFromError(error);
    }
  }
  deletePlayerFromStorage(event) {
    try {
      this.plss.deletePlayer();
      this.actionResult = "Player data deleted!";
    } catch (error) {
      this.setActionResultFromError(error);
    }
  }
  setActionResultFromError(error) {
    if (typeof error === "string") {
      this.actionResult = error;
    } else if (error instanceof Error) {
      this.actionResult = error.message;
    }
  }
}
PlayerLocalstorageComponent.ɵfac = function PlayerLocalstorageComponent_Factory(t) {
  return new (t || PlayerLocalstorageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_0__.PlayerModelProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_player_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.PlayerLocalstorageService));
};
PlayerLocalstorageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PlayerLocalstorageComponent,
  selectors: [["app-player-localstorage"]],
  decls: 8,
  vars: 1,
  consts: [["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
  template: function PlayerLocalstorageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerLocalstorageComponent_Template_button_click_0_listener($event) {
        return ctx.loadPlayerFromStorage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Load");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerLocalstorageComponent_Template_button_click_2_listener($event) {
        return ctx.savePlayerToStorage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerLocalstorageComponent_Template_button_click_4_listener($event) {
        return ctx.deletePlayerFromStorage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.actionResult);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
  styles: ["button[_ngcontent-%COMP%] {\n    margin: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXItbG9jYWxzdG9yYWdlL3BsYXllci1sb2NhbHN0b3JhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIG1hcmdpbjogMnB4IDVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5282:
/*!**************************************************************************!*\
  !*** ./src/app/components/primitives/stat-value/stat-value.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatValueComponent": () => (/* binding */ StatValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_dice_roller_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/dice-roller.service */ 7617);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function StatValueComponent_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StatValueComponent_input_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.value = $event);
    })("ngModelChange", function StatValueComponent_input_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onModelChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.value);
  }
}
function StatValueComponent_input_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.value);
  }
}
function StatValueComponent_span_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Warte auf ", ctx_r6.noOfDice, "d", ctx_r6.diceSides, " ");
  }
}
function StatValueComponent_span_4_span_5_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r8.rollResult, " Pr\u00FCfwurf geschafft :)");
  }
}
function StatValueComponent_span_4_span_5_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r9.rollResult, " Pr\u00FCfwurf fehlgeschlagen :(");
  }
}
function StatValueComponent_span_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StatValueComponent_span_4_span_5_label_1_Template, 2, 1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StatValueComponent_span_4_span_5_label_2_Template, 2, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatValueComponent_span_4_span_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.onResetDiceRollResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.valueCheckSuccessful);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.valueCheckSuccessful);
  }
}
function StatValueComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatValueComponent_span_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.onClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Pr\u00FCfwurf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StatValueComponent_span_4_span_4_Template, 2, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StatValueComponent_span_4_span_5_Template, 5, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.canRoll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.rollResultAvailable && !ctx_r2.canRoll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.rollResultAvailable);
  }
}
class StatValueComponent {
  constructor(diceRollerService) {
    this.diceRollerService = diceRollerService;
    this.label = '';
    this.value = 0;
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.noOfDice = 1;
    this.diceSides = 100;
    this.isChallengeableStat = false;
    this.editMode = false;
    this.canRoll = true;
    this.rollResultAvailable = false;
    this.valueCheckSuccessful = false;
    this.rollResult = 0;
  }
  onClick() {
    this.canRoll = false;
    this.diceRollerService.rollDice(this.noOfDice, this.diceSides).subscribe(x => this.evaluateDiceRollResult(this.value, x.result));
  }
  onModelChange(event) {
    this.valueChange.emit(this.value);
  }
  onResetDiceRollResult() {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout);
    }
    this.resetRollability();
  }
  evaluateDiceRollResult(val, diceRollResult) {
    this.rollResult = diceRollResult;
    if (diceRollResult <= val) {
      this.valueCheckSuccessful = true;
    } else {
      this.valueCheckSuccessful = false;
    }
    this.rollResultAvailable = true;
    this.timeout = setTimeout(() => {
      this.resetRollability();
    }, 30000);
  }
  resetRollability() {
    this.canRoll = true;
    this.rollResultAvailable = false;
  }
}
StatValueComponent.ɵfac = function StatValueComponent_Factory(t) {
  return new (t || StatValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dice_roller_service__WEBPACK_IMPORTED_MODULE_0__.DiceRollerService));
};
StatValueComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: StatValueComponent,
  selectors: [["app-stat-value"]],
  inputs: {
    label: "label",
    value: "value",
    noOfDice: "noOfDice",
    diceSides: "diceSides",
    isChallengeableStat: "isChallengeableStat",
    editMode: "editMode"
  },
  outputs: {
    valueChange: "valueChange"
  },
  decls: 5,
  vars: 4,
  consts: [["type", "number", "class", "editable-value", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "readonly", "true", "class", "readonly-value", 3, "ngModel", 4, "ngIf"], [4, "ngIf"], ["type", "number", 1, "editable-value", 3, "ngModel", "ngModelChange"], ["type", "text", "readonly", "true", 1, "readonly-value", 3, "ngModel"], [3, "disabled", "click"], ["class", "check-success", 4, "ngIf"], ["class", "check-failed", 4, "ngIf"], [3, "click"], [1, "check-success"], [1, "check-failed"]],
  template: function StatValueComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StatValueComponent_input_2_Template, 1, 1, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StatValueComponent_input_3_Template, 1, 1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StatValueComponent_span_4_Template, 6, 3, "span", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChallengeableStat && !ctx.editMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".check-success[_ngcontent-%COMP%] {\n    color: green;\n}\n\n.check-failed[_ngcontent-%COMP%] {\n    color: red;\n}\n\n.readonly-value[_ngcontent-%COMP%] {\n    width: 50px;\n    border-style: none;\n    background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmltaXRpdmVzL3N0YXQtdmFsdWUvc3RhdC12YWx1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrLXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLmNoZWNrLWZhaWxlZCB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnJlYWRvbmx5LXZhbHVlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5613:
/*!************************************************************************************!*\
  !*** ./src/app/components/primitives/text-stat-value/text-stat-value.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextStatValueComponent": () => (/* binding */ TextStatValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);




function TextStatValueComponent_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextStatValueComponent_input_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.value = $event);
    })("ngModelChange", function TextStatValueComponent_input_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onModelChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("editable-value", ctx_r0.editMode)("readonly-value", !ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx_r0.editMode)("ngModel", ctx_r0.value);
  }
}
function TextStatValueComponent_textarea_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextStatValueComponent_textarea_3_Template_textarea_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.value = $event);
    })("ngModelChange", function TextStatValueComponent_textarea_3_Template_textarea_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onModelChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("editable-value", ctx_r1.editMode)("readonly-value", !ctx_r1.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx_r1.editMode)("ngModel", ctx_r1.value);
  }
}
class TextStatValueComponent {
  constructor() {
    this.label = '';
    this.value = '';
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.multiline = false;
    this.editMode = false;
  }
  onModelChange(event) {
    this.valueChange.emit(this.value);
  }
}
TextStatValueComponent.ɵfac = function TextStatValueComponent_Factory(t) {
  return new (t || TextStatValueComponent)();
};
TextStatValueComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TextStatValueComponent,
  selectors: [["app-text-stat-value"]],
  inputs: {
    label: "label",
    value: "value",
    multiline: "multiline",
    editMode: "editMode"
  },
  outputs: {
    valueChange: "valueChange"
  },
  decls: 4,
  vars: 3,
  consts: [["type", "text", 3, "readOnly", "ngModel", "editable-value", "readonly-value", "ngModelChange", 4, "ngIf"], [3, "readOnly", "ngModel", "editable-value", "readonly-value", "ngModelChange", 4, "ngIf"], ["type", "text", 3, "readOnly", "ngModel", "ngModelChange"], [3, "readOnly", "ngModel", "ngModelChange"]],
  template: function TextStatValueComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextStatValueComponent_input_2_Template, 1, 6, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextStatValueComponent_textarea_3_Template, 1, 6, "textarea", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiline);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiline);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".readonly-value[_ngcontent-%COMP%] {\n    border-style: none;\n    background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmltaXRpdmVzL3RleHQtc3RhdC12YWx1ZS90ZXh0LXN0YXQtdmFsdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhZG9ubHktdmFsdWUge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 78:
/*!**********************************!*\
  !*** ./src/app/models/player.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsumableItem": () => (/* binding */ ConsumableItem),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Skill": () => (/* binding */ Skill)
/* harmony export */ });
class Player {
  constructor() {
    this.name = "";
    this.type = "";
    // Grad
    this.level = 1;
    // Herkunft
    this.origin = "";
    // stand
    this.socialStanding = "";
    // Alter
    this.age = 0;
    // Beruf
    this.occupation = "";
    // Glaube
    this.faith = "";
    // Göttliche Gnade
    this.godlyGrace = 0;
    this.appearance = new Appearance();
    this.stats = new CharacterStats();
    this.attributes = new Attributes();
    this.bonusStats = new BonusStats();
    this.defenseStats = new DefenseStats();
    this.experience = new ExperiencePoints();
    this.currencies = new Currencies();
    this.potions = new Potions();
    // Ausrüstung
    this.equipment = [];
    this.weapons = [];
    // Spezialwaffe
    this.specialWeapon = new Item();
    // Verbrauchs und Zaubermaterial
    this.items = [];
    // Fertigkeiten
    this.skills = [new Skill("Balancieren", 0), new Skill("Betäuben", 0), new Skill("Beredsamkeit", 0), new Skill("Beschatten", 0), new Skill("Fallen entdecken", 0), new Skill("Fallenmech.", 0), new Skill("Fallenstellen", 0), new Skill("Geländelauf", 0), new Skill("Horchen", 0), new Skill("Kanufahren", 0), new Skill("Klettern", 0), new Skill("Mechanik", 0), new Skill("Reiten", 0), new Skill("Rudern", 0), new Skill("Schleichen", 0), new Skill("Schlittenfahren", 0), new Skill("Schlösser öffnen", 0), new Skill("Schwimmen", 0), new Skill("Seilkunst", 0), new Skill("Springen", 0), new Skill("Spurenlesen", 0), new Skill("Stehlen", 0), new Skill("Tauchen", 0), new Skill("Überleben", 0), new Skill("Verführen", 0), new Skill("Verhören", 0), new Skill("Verkleiden", 0), new Skill("Wagenlenken", 0), new Skill("Wahrnehmung", 0), new Skill("Werfen/Fangen", 0), new Skill("Winden", 0), new Skill("Magierstab", 0)];
    // Grundkenntnisse
    this.knowledge = [new Skill("Einhandschwerter", 0), new Skill("Stichwaffen", 0), new Skill("Einhandschlagwaffen", 0), new Skill("Spießwaffen", 0), new Skill("Zweihandschwerter", 0), new Skill("Zweihandschlagwaffen", 0), new Skill("Kettenwaffen", 0), new Skill("Stäbe", 0), new Skill("waffenloser Kampf", 0), new Skill("Bögen", 0), new Skill("Armbrüste", 0), new Skill("Schleudern", 0), new Skill("Wurfwaffen", 0), new Skill("Blasrohre", 0), new Skill("Schilde", 0), new Skill("Parierwaffen", 0), new Skill("Kampf in Vollrüstung", 0), new Skill("Lesen und Schreiben", 0), new Skill("Wissen von der Magie", 0), new Skill("Lesen von Zauberschrift", 0)];
    this.magicSpells = [];
    this.notes = "";
    this.remarks = [];
    this.currentQuest = new Quest();
  }
}
class Appearance {
  constructor() {
    // Größe
    this.height = 0;
    // Gewicht
    this.weight = 0;
    // Gestalt
    this.figure = "";
    // Aussehen (Flavortext)
    this.appearance = "";
  }
}
class Quest {
  constructor() {
    // Aktueller Auftrag
    this.description = "";
    //Quest Gegenstände
    this.questItems = [];
    // Bekannte Figuren
    this.knownCharacters = [];
    this.notes = "";
    this.remarks = [];
  }
}
class Weapon {
  constructor() {
    this.name = "";
    // Verzauberung
    this.enchantment = "";
    // EW: Angriff
    this.attack = 0;
    // Schaden
    this.damage = new DiceValue();
    // EW: Abwehr
    this.defense = 0;
    // -APV - Ausdauerpunkte Verlust
    this.actionPointLossValue = 0;
    // PP - Praxis Punkte
    this.misfortuneCount = 0;
  }
}
class Skill {
  constructor(name, level) {
    // Fertigkeit
    this.name = "";
    // EW
    this.level = 0;
    // EW Bonus durch Attribute
    this.characterBonus = 0;
    this.name = name;
    this.level = level;
  }
  get total() {
    return this.level + this.characterBonus;
  }
}
class MagicSpell {
  constructor() {
    // Zauber
    this.name = "";
    // Art
    this.type = "";
    // AP - Ausdauerpunkte
    this.staminaPointCost = 0;
    // Wirkung
    this.effectDescription = "";
    // Zauberdauer
    this.effectDuration = "";
    // Wirkungsdauer
    this.castDuration = "";
    // Wirkungsbereich
    this.areaOfEffect = "";
    // Zutaten
    this.requiredIngredients = [];
  }
}
class DiceValue {
  constructor() {
    this.diceSides = 0;
    this.numberOfDice = 0;
    this.bonusValue = 0;
  }
}
class DefenseStats {
  constructor() {
    // Rüstung - Flavortext
    this.armorDescription = "";
    //RK - Rüstungsklasse
    this.armorClass = "";
    // LPV - Lebenspunkte Verlustwert
    this.hitPointLossValue = 0;
    //Abwehr
    this.defense = 0;
    this.magicResistance = new MagicResistance();
  }
}
class ExperiencePoints {
  constructor() {
    // GFP - Gesamterfahrungspunkte
    this.total = 0;
    // AEP - Allgemeine Erfahrungspunkte
    this.common = 0;
    //KEP - Kampferfahrungspunkte
    this.battle = 0;
    // ZEP - Zaubererfahrungspunkte
    this.magic = 0;
  }
}
class BonusStats {
  constructor() {
    // Ausdauer
    this.stamina = 0;
    // Zaubern
    this.magic = 0;
    // Angriff
    this.attack = 0;
    // Schaden
    this.damage = 0;
    //Abwehr
    this.defense = 0;
    this.magicResistance = new MagicResistance();
  }
}
class MagicResistance {
  constructor() {
    // psy ZR - psychische Zauberresistenz
    this.psychologic = 0;
    // phs ZR - physische Zauberresistenz
    this.physical = 0;
    // phk ZR - physikalische Zauberresistenz
    this.environmental = 0;
  }
}
class Attributes {
  constructor() {
    // ST - Stärke
    this.strength = 0;
    // GE - Geschicklichkeit
    this.agility = 0;
    //KO - Konstitution
    this.constitution = 0;
    // IN - Intelligenz
    this.intelligence = 0;
    // ZT - Zaubertalent
    this.magicAffinity = 0;
    // AU - Aussehen
    this.looks = 0;
    // PA - Persönliche Ausstrahlung
    this.charisma = 0;
    // SB - Selbstbeherrschung
    this.selfControl = 0;
    //HGW - Handgemenge Wert / Raufen
    this.closeQuarterCombatAffinity = 0;
    //KAW - Kraftakt Wert
    this.showOfStrengthAffinitiy = 0;
    // RW - Reaktions Wert
    this.reaction = 0;
    // B - Bewegung
    this.movement = 0;
    // WLW - Wiederbelebungswert
    this.revivalAffinitiy = 0;
    // LP-Basis - Lebenspunkte-Basis
    this.hitPointsBase = 0;
    // GiT - Gift Toleranz
    this.poisonResistance = 0;
  }
}
class Currencies {
  constructor() {
    this.coins = new Coins();
    this.jewels = new Jewels();
  }
}
class Coins {
  constructor() {
    // GS - Goldstücke
    this.gold = 0;
    // SS - Silberstücke
    this.silver = 0;
    // KS - Kupferstücke
    this.copper = 0;
  }
}
class Jewels {
  constructor() {
    // 50er
    this.fifties = 0;
    // 100er
    this.hundreds = 0;
    // 1000er
    this.thousands = 0;
  }
}
class CharacterStats {
  constructor() {
    this.current = new Stats();
    this.base = new Stats();
  }
}
class Stats {
  constructor() {
    // LP - Lebenspunkte
    this.hitPoints = 0;
    // AP - Ausdauerpunkte
    this.staminaPoints = 0;
  }
}
class Item {
  constructor() {
    this.name = "";
    this.description = "";
  }
}
class ConsumableItem extends Item {
  constructor() {
    super(...arguments);
    this.quantity = 1;
  }
}
class Remark {
  constructor() {
    this.shortText = "";
    this.text = "";
    // TODO Can we store links and images here?
  }
}

class Potions {
  constructor() {
    this.strength = new StrengthPotions();
    this.healing = new HealingPotions();
  }
}
class StrengthPotions {
  constructor() {
    // 1W6
    this.small = 0;
    // 2W6
    this.large = 0;
  }
}
class HealingPotions {
  constructor() {
    // 1W6
    this.small = 0;
    // 2W6
    this.medium = 0;
    // 3W6
    this.large = 0;
  }
}

/***/ }),

/***/ 4574:
/*!***************************************!*\
  !*** ./src/app/ng-material.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgMaterialModule": () => (/* binding */ NgMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);







class NgMaterialModule {}
NgMaterialModule.ɵfac = function NgMaterialModule_Factory(t) {
  return new (t || NgMaterialModule)();
};
NgMaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgMaterialModule
});
NgMaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgMaterialModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule],
    exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabsModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule]
  });
})();

/***/ }),

/***/ 7617:
/*!*************************************************!*\
  !*** ./src/app/services/dice-roller.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiceRollerService": () => (/* binding */ DiceRollerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class DiceRollerService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  rollDice(noOfDice, diceSides) {
    // https://rolz.org/help/api
    const diceParam = noOfDice + 'd' + diceSides;
    return this.httpClient.get(`https://rolz.org/api/?${diceParam}.json`);
  }
}
DiceRollerService.ɵfac = function DiceRollerService_Factory(t) {
  return new (t || DiceRollerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
DiceRollerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DiceRollerService,
  factory: DiceRollerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6297:
/*!*********************************************************!*\
  !*** ./src/app/services/player-localstorage.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerLocalstorageService": () => (/* binding */ PlayerLocalstorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

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
PlayerLocalstorageService.ɵfac = function PlayerLocalstorageService_Factory(t) {
  return new (t || PlayerLocalstorageService)();
};
PlayerLocalstorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PlayerLocalstorageService,
  factory: PlayerLocalstorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3889:
/*!***********************************************************!*\
  !*** ./src/app/services/player-model-provider.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerModelProviderService": () => (/* binding */ PlayerModelProviderService)
/* harmony export */ });
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/player */ 78);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class PlayerModelProviderService {
  constructor() {
    this._player = new _models_player__WEBPACK_IMPORTED_MODULE_0__.Player();
  }
  get player() {
    return this._player;
  }
  set player(player) {
    this._player = player;
  }
}
PlayerModelProviderService.ɵfac = function PlayerModelProviderService_Factory(t) {
  return new (t || PlayerModelProviderService)();
};
PlayerModelProviderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PlayerModelProviderService,
  factory: PlayerModelProviderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map