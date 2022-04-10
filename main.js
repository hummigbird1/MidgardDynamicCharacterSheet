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
        this.actionResult = null;
    }
    ngOnInit() {
    }
    getPlayerAsJson() {
        return JSON.stringify(this.playerModelProviderService.player, null, 2);
    }
    importPlayer(event) {
        if (this.jsonContent === undefined) {
            this.actionResult = "Nothing to import. Paste a character json into the text area";
            return;
        }
        this.setPlayerFromJson(this.jsonContent);
    }
    exportPlayer(event) {
        try {
            this.jsonContent = this.getPlayerAsJson();
            this.actionResult = "Exported successfully";
        }
        catch (error) {
            this.setActionResultFromError(error);
        }
    }
    setPlayerFromJson(playerJson) {
        try {
            this.playerModelProviderService.player = JSON.parse(playerJson);
            this.actionResult = "Imported successfully";
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
PlayerImportExportComponent.ɵfac = function PlayerImportExportComponent_Factory(t) { return new (t || PlayerImportExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_player_model_provider_service__WEBPACK_IMPORTED_MODULE_1__["PlayerModelProviderService"])); };
PlayerImportExportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerImportExportComponent, selectors: [["app-player-import-export"]], decls: 9, vars: 2, consts: [[3, "ngModel", "ngModelChange"], [3, "click"]], template: function PlayerImportExportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.jsonContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionResult);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXItaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "NAel":
/*!**********************************!*\
  !*** ./src/app/models/player.ts ***!
  \**********************************/
/*! exports provided: Player, Skill, ConsumableItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumableItem", function() { return ConsumableItem; });
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
        this.skills = [
            new Skill("Balancieren", 0),
            new Skill("Betäuben", 0),
            new Skill("Beredsamkeit", 0),
            new Skill("Beschatten", 0),
            new Skill("Fallen entdecken", 0),
            new Skill("Fallenmech.", 0),
            new Skill("Fallenstellen", 0),
            new Skill("Geländelauf", 0),
            new Skill("Horchen", 0),
            new Skill("Kanufahren", 0),
            new Skill("Klettern", 0),
            new Skill("Mechanik", 0),
            new Skill("Reiten", 0),
            new Skill("Rudern", 0),
            new Skill("Schleichen", 0),
            new Skill("Schlittenfahren", 0),
            new Skill("Schlösser öffnen", 0),
            new Skill("Schwimmen", 0),
            new Skill("Seilkunst", 0),
            new Skill("Springen", 0),
            new Skill("Spurenlesen", 0),
            new Skill("Stehlen", 0),
            new Skill("Tauchen", 0),
            new Skill("Überleben", 0),
            new Skill("Verführen", 0),
            new Skill("Verhören", 0),
            new Skill("Verkleiden", 0),
            new Skill("Wagenlenken", 0),
            new Skill("Wahrnehmung", 0),
            new Skill("Werfen/Fangen", 0),
            new Skill("Winden", 0),
            new Skill("Magierstab", 0),
        ];
        // Grundkenntnisse
        this.knowledge = [
            new Skill("Einhandschwerter", 0),
            new Skill("Stichwaffen", 0),
            new Skill("Einhandschlagwaffen", 0),
            new Skill("Spießwaffen", 0),
            new Skill("Zweihandschwerter", 0),
            new Skill("Zweihandschlagwaffen", 0),
            new Skill("Kettenwaffen", 0),
            new Skill("Stäbe", 0),
            new Skill("waffenloser Kampf", 0),
            new Skill("Bögen", 0),
            new Skill("Armbrüste", 0),
            new Skill("Schleudern", 0),
            new Skill("Wurfwaffen", 0),
            new Skill("Blasrohre", 0),
            new Skill("Schilde", 0),
            new Skill("Parierwaffen", 0),
            new Skill("Kampf in Vollrüstung", 0),
            new Skill("Lesen und Schreiben", 0),
            new Skill("Wissen von der Magie", 0),
            new Skill("Lesen von Zauberschrift", 0),
        ];
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 12, consts: [["label", "Character"], [3, "player", "playerChange"], ["label", "Abenteuer Tagesbogen"], ["label", "UI Element Beispiel / Demo"], ["label", "HP", 3, "baseValue", "minValue", "maxValue"], ["label", "AP", 3, "baseValue", "minValue", "maxValue"], ["label", "BB", 3, "baseValue", "showReset", "minValue", "maxValue"], ["label", "Zauber"], ["label", "Beschw\u00F6rungen"], ["label", "Player Storage"], ["label", "Player Import/Export"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseValue", 30)("minValue", 0)("maxValue", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseValue", 12)("minValue", 0)("maxValue", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("baseValue", 500)("showReset", false)("minValue", 0)("maxValue", 99999999);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_4_listener($event) { return ctx.player.stats.current.hitPoints = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-numeric-value-handler", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function CharacterSheetComponent_Template_app_numeric_value_handler_currentValueChange_6_listener($event) { return ctx.player.stats.current.staminaPoints = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.player.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.stats.current.hitPoints)("baseValue", ctx.player.stats.base.hitPoints)("minValue", 0)("maxValue", ctx.player.stats.base.hitPoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.stats.current.staminaPoints)("baseValue", ctx.player.stats.base.staminaPoints)("minValue", 0)("maxValue", ctx.player.stats.base.staminaPoints);
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
/* harmony import */ var src_app_models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/player */ "NAel");
/* harmony import */ var _numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../numeric-value-handler/numeric-value-handler.component */ "uyD5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function AdventureSheetComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdventureSheetComponent_tr_42_Template_input_ngModelChange_2_listener($event) { const item_r1 = ctx.$implicit; return item_r1.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdventureSheetComponent_tr_42_Template_textarea_ngModelChange_3_listener($event) { const item_r1 = ctx.$implicit; return item_r1.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-numeric-value-handler", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_tr_42_Template_app_numeric_value_handler_currentValueChange_6_listener($event) { const item_r1 = ctx.$implicit; return item_r1.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdventureSheetComponent_tr_42_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeItem(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", item_r1.quantity)("minValue", 0)("maxValue", 99999999999)("showReset", false);
} }
class AdventureSheetComponent {
    constructor() {
        this.playerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    addItem(event) {
        this.player.items.push(new src_app_models_player__WEBPACK_IMPORTED_MODULE_1__["ConsumableItem"]());
    }
    removeItem(itemToRemove) {
        var itemIndex = this.player.items.indexOf(itemToRemove);
        this.player.items.splice(itemIndex, 1);
    }
}
AdventureSheetComponent.ɵfac = function AdventureSheetComponent_Factory(t) { return new (t || AdventureSheetComponent)(); };
AdventureSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdventureSheetComponent, selectors: [["app-adventure-sheet"]], inputs: { player: "player" }, outputs: { playerChange: "playerChange" }, decls: 45, vars: 45, consts: [[1, "container"], [1, "CoinsAndJewelsArea"], [1, "CoinsArea", "HorizontalFlexbox"], ["label", "Gold\u00A0\u00A0", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "Silber", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "Kupfer", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], [1, "JewelArea", "HorizontalFlexbox"], ["label", "50er\u00A0\u00A0", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "100er\u00A0", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], ["label", "1000er", 3, "minValue", "maxValue", "showReset", "currentValue", "currentValueChange"], [1, "EquipmentAndPotionsArea"], [1, "PotionsArea"], [1, "HealingPotionsArea", "HorizontalFlexbox"], ["label", "1w6", 3, "currentValue", "minValue", "maxValue", "showReset", "currentValueChange"], ["label", "2w6", 3, "currentValue", "minValue", "maxValue", "showReset", "currentValueChange"], ["label", "3w6", 3, "currentValue", "minValue", "maxValue", "showReset", "currentValueChange"], [1, "PowerPotionsArea", "HorizontalFlexbox"], [1, "EquipmentArea", "HorizontalFlexbox"], [1, "equipment-content"], [1, "MaterialArea"], [1, "material-table"], [1, "material-row"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "Material-Column1"], [1, "material-description", 3, "ngModel", "ngModelChange"], [1, "Material-Quantity-Alignment", "Material-Column2"], [1, "HorizontalFlexbox"], ["label", "", 3, "currentValue", "minValue", "maxValue", "showReset", "currentValueChange"]], template: function AdventureSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "M\u00FCnzen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-numeric-value-handler", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_5_listener($event) { return ctx.player.currencies.coins.gold = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-numeric-value-handler", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_6_listener($event) { return ctx.player.currencies.coins.silver = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-numeric-value-handler", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_7_listener($event) { return ctx.player.currencies.coins.copper = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edelsteine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-numeric-value-handler", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_11_listener($event) { return ctx.player.currencies.jewels.fifties = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-numeric-value-handler", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_12_listener($event) { return ctx.player.currencies.jewels.hundreds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-numeric-value-handler", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_13_listener($event) { return ctx.player.currencies.jewels.thousands = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Heiltr\u00E4nke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-numeric-value-handler", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_19_listener($event) { return ctx.player.potions.healing.small = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-numeric-value-handler", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_20_listener($event) { return ctx.player.potions.healing.medium = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-numeric-value-handler", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_21_listener($event) { return ctx.player.potions.healing.large = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Krafttr\u00E4nke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-numeric-value-handler", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_25_listener($event) { return ctx.player.potions.strength.small = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-numeric-value-handler", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentValueChange", function AdventureSheetComponent_Template_app_numeric_value_handler_currentValueChange_26_listener($event) { return ctx.player.potions.strength.large = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ausr\u00FCstung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Verbrauchsmaterial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Name/Beschreibung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Menge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AdventureSheetComponent_tr_42_Template, 9, 6, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdventureSheetComponent_Template_button_click_43_listener($event) { return ctx.addItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.gold);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.silver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.coins.copper);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.jewels.fifties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.jewels.hundreds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 0)("maxValue", 99999999999)("showReset", false)("currentValue", ctx.player.currencies.jewels.thousands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.potions.healing.small)("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.potions.healing.medium)("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.potions.healing.large)("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.potions.strength.small)("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentValue", ctx.player.potions.strength.large)("minValue", 0)("maxValue", 99999999999)("showReset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player.items);
    } }, directives: [_numeric_value_handler_numeric_value_handler_component__WEBPACK_IMPORTED_MODULE_2__["NumericValueHandlerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["h2[_ngcontent-%COMP%] {\n\tmargin: 0px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n\tresize: vertical;\n}\n\nthead[_ngcontent-%COMP%] {\n\ttext-align: left;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n\tpadding: 0px 10px 0px 0px;\n\twidth: 50%;\n}\n\n.equipment-content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%\n}\n\n.material-description[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.material-table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.material-row[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {  \n\tmargin: 10px 25px;\n\tdisplay: grid;\n    grid-template-rows: 0.3fr 0.6fr 1.25fr;\n    grid-auto-columns: 1fr;\n    gap: 40px 0px;\n    grid-auto-flow: row;\n}\n\n.CoinsAndJewelsArea[_ngcontent-%COMP%] {\n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-auto-rows: 1fr;\n\tgap: 0px 25px;\n\tgrid-auto-flow: row;\n}\n\n.CoinsArea[_ngcontent-%COMP%] {  \n\t\n\tgrid-area: 1 / 1 / 2 / 2;\n\t\n}\n\n.CoinsArea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n\t\n}\n\n.JewelArea[_ngcontent-%COMP%] {  \n\t\n}\n\n.JewelArea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n\t\n}\n\n.EquipmentAndPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-auto-rows: 1fr;\n\tgap: 0px 25px;\n\tgrid-auto-flow: row;\n\tgrid-area: 2 / 1 / 3 / 2;\n}\n\n.PotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-template-rows: 1fr;\n\tgap: 0px 25px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"HealingPotionsArea PowerPotionsArea\";\n\tgrid-area: 1 / 2 / 2 / 3;\n}\n\n.HealingPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-rows: 0.37fr repeat(3, 1fr);\n\tgrid-auto-columns: 1fr;\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"\"\n\t\t\"\"\n\t\t\"\"\n\t\t\"\";\n\tgrid-area: HealingPotionsArea;\n}\n\n.PowerPotionsArea[_ngcontent-%COMP%] {  \n\tdisplay: grid;\n\tgrid-template-rows: 0.25fr repeat(2, 1fr);\n\tgrid-auto-columns: 1fr;\n\tgap: 0px 0px;\n\tgrid-auto-flow: row;\n\tgrid-template-areas:\n\t\t\"\"\n\t\t\"\"\n\t\t\"\";\n\tgrid-area: PowerPotionsArea;\n}\n\n.EquipmentArea[_ngcontent-%COMP%] { \n\tgrid-area: 1 / 1 / 2 / 2;\n\tmargin-right: 10px;\n}\n\n.MaterialArea[_ngcontent-%COMP%] { \n\tgrid-area: 3 / 1 / 4 / 2; \n}\n\n.HorizontalFlexbox[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 5px;\n}\n\n.VerticalFlexbox[_ngcontent-%COMP%]{\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.Material-Quantity-Alignment[_ngcontent-%COMP%]{\n\tvertical-align: top;\n}\n\n.Material-Column1[_ngcontent-%COMP%]{\n\twidth: 85%;\n}\n\n.Material-Column2[_ngcontent-%COMP%]{\n\twidth: 10%;\n\theight: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVudHVyZS1zaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFVBQVU7QUFDWDs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7SUFDVixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0M7Ozs7OzRCQUsyQjtDQUMzQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0M7Ozs7NEJBSTJCO0FBQzVCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CO3VDQUNzQztDQUN0Qyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUNBQXlDO0NBQ3pDLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osbUJBQW1CO0NBQ25COzs7O0lBSUc7Q0FDSCw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUNBQXlDO0NBQ3pDLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osbUJBQW1CO0NBQ25COzs7SUFHRztDQUNILDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtBQUNiIiwiZmlsZSI6ImFkdmVudHVyZS1zaGVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuXHRtYXJnaW46IDBweDtcbn1cblxudGV4dGFyZWEge1xuXHRyZXNpemU6IHZlcnRpY2FsO1xufVxuXG50aGVhZCB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRkLCB0aCB7XG5cdHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XG5cdHdpZHRoOiA1MCU7XG59XG5cbi5lcXVpcG1lbnQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlXG59XG5cbi5tYXRlcmlhbC1kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXRlcmlhbC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXRlcmlhbC1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHsgIFxuXHRtYXJnaW46IDEwcHggMjVweDtcblx0ZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDAuNmZyIDEuMjVmcjtcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xuICAgIGdhcDogNDBweCAwcHg7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbn1cblxuLkNvaW5zQW5kSmV3ZWxzQXJlYSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcblx0Z3JpZC1hdXRvLXJvd3M6IDFmcjtcblx0Z2FwOiAwcHggMjVweDtcblx0Z3JpZC1hdXRvLWZsb3c6IHJvdztcbn1cblxuLkNvaW5zQXJlYSB7ICBcblx0LyogZGlzcGxheTogZ3JpZDtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgzLCAxZnIpO1xuXHRnYXA6IDBweCAwcHg7XG5cdGdyaWQtYXV0by1mbG93OiByb3c7XG5cdGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjsgKi9cblx0Z3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuXHQvKiBnYXA6IDUwcHggNTBweDsgKi9cbn1cblxuLkNvaW5zQXJlYSAqIHtcblx0LyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xufVxuICBcbi5KZXdlbEFyZWEgeyAgXG5cdC8qIGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDMsIDFmcik7XG5cdGdhcDogMHB4IDBweDtcblx0Z3JpZC1hdXRvLWZsb3c6IHJvdztcblx0Z3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyOyAqL1xufVxuXG4uSmV3ZWxBcmVhICoge1xuXHQvKiBhbGlnbi1zZWxmOiBjZW50ZXI7ICovXG59XG5cbi5FcXVpcG1lbnRBbmRQb3Rpb25zQXJlYSB7ICBcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuXHRncmlkLWF1dG8tcm93czogMWZyO1xuXHRnYXA6IDBweCAyNXB4O1xuXHRncmlkLWF1dG8tZmxvdzogcm93O1xuXHRncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG59XG5cbi5Qb3Rpb25zQXJlYSB7ICBcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG5cdGdhcDogMHB4IDI1cHg7XG5cdGdyaWQtYXV0by1mbG93OiByb3c7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6XG5cdFx0XCJIZWFsaW5nUG90aW9uc0FyZWEgUG93ZXJQb3Rpb25zQXJlYVwiO1xuXHRncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG59XG5cbi5IZWFsaW5nUG90aW9uc0FyZWEgeyAgXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMC4zN2ZyIHJlcGVhdCgzLCAxZnIpO1xuXHRncmlkLWF1dG8tY29sdW1uczogMWZyO1xuXHRnYXA6IDBweCAwcHg7XG5cdGdyaWQtYXV0by1mbG93OiByb3c7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6XG5cdFx0XCJcIlxuXHRcdFwiXCJcblx0XHRcIlwiXG5cdFx0XCJcIjtcblx0Z3JpZC1hcmVhOiBIZWFsaW5nUG90aW9uc0FyZWE7XG59XG5cbi5Qb3dlclBvdGlvbnNBcmVhIHsgIFxuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDAuMjVmciByZXBlYXQoMiwgMWZyKTtcblx0Z3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcblx0Z2FwOiAwcHggMHB4O1xuXHRncmlkLWF1dG8tZmxvdzogcm93O1xuXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxuXHRcdFwiXCJcblx0XHRcIlwiXG5cdFx0XCJcIjtcblx0Z3JpZC1hcmVhOiBQb3dlclBvdGlvbnNBcmVhO1xufVxuXG4uRXF1aXBtZW50QXJlYSB7IFxuXHRncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLk1hdGVyaWFsQXJlYSB7IFxuXHRncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7IFxufVxuXG4uSG9yaXpvbnRhbEZsZXhib3h7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHJvdy1nYXA6IDVweDtcbn1cblxuLlZlcnRpY2FsRmxleGJveHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLk1hdGVyaWFsLVF1YW50aXR5LUFsaWdubWVudHtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLk1hdGVyaWFsLUNvbHVtbjF7XG5cdHdpZHRoOiA4NSU7XG59XG5cbi5NYXRlcmlhbC1Db2x1bW4ye1xuXHR3aWR0aDogMTAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"] });


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
/* harmony import */ var _checkresults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkresults */ "vJZ4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NumericValueHandlerComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" = ", ctx_r0.projectedValue, "");
} }
function NumericValueHandlerComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumericValueHandlerComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.resetValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.canReset);
} }
class NumericValueHandlerComponent {
    constructor() {
        this.label = '';
        this._currentValue = 0;
        this.currentText = '0';
        this.showReset = true;
        this.currentValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectingValue = false;
        this.projectedValue = 0;
    }
    get isValid() {
        if (this.currentValue === null || this.currentValue === undefined)
            return false;
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
        }
        else if (canEvaluatableToNumberCheckResult.isEvaluatable && canEvaluatableToNumberCheckResult.isExpressionTerminated && this.isNumberWithinRange(canEvaluatableToNumberCheckResult.value)) {
            this.currentValue = canEvaluatableToNumberCheckResult.value;
        }
        else if (canEvaluatableToNumberCheckResult.isEvaluatable && !canEvaluatableToNumberCheckResult.isExpressionTerminated) {
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
        return (this.baseValue !== undefined && this.baseValue != this.currentValue)
            || this.projectingValue
            || !this.isValid;
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
        }
        else if (this.isValid && this.baseValue !== undefined) {
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
        const result = new _checkresults__WEBPACK_IMPORTED_MODULE_1__["CheckEvaluatableToNumberResult"]();
        if (this.isEmptyString(text))
            return result;
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
        }
        catch (_a) {
            return result;
        }
    }
    isValidNumber(input) {
        if (typeof input === "string") {
            return this.isTextValidNumber(input);
        }
        else if (typeof input === "number") {
            const flooredNumber = this.getFlooredValue(input);
            const result = new _checkresults__WEBPACK_IMPORTED_MODULE_1__["CheckNumberResult"]();
            result.isNumber = this.isNumberValidNumber(flooredNumber);
            result.value = flooredNumber;
            return result;
        }
        else {
            return new _checkresults__WEBPACK_IMPORTED_MODULE_1__["CheckNumberResult"]();
        }
    }
    isNumberValidNumber(val) {
        return Number.isSafeInteger(val);
    }
    getFlooredValue(val) {
        return Math.floor(val);
    }
    isTextValidNumber(text) {
        const result = new _checkresults__WEBPACK_IMPORTED_MODULE_1__["CheckNumberResult"]();
        if (this.isEmptyString(text))
            return result;
        const converterFlooredNumber = this.getFlooredValue(Number(text).valueOf());
        result.isNumber = this.isNumberValidNumber(converterFlooredNumber);
        result.value = converterFlooredNumber;
        return result;
    }
    isEmptyString(text) {
        return text === null || text === undefined || text.trim() === '';
    }
}
NumericValueHandlerComponent.ɵfac = function NumericValueHandlerComponent_Factory(t) { return new (t || NumericValueHandlerComponent)(); };
NumericValueHandlerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumericValueHandlerComponent, selectors: [["app-numeric-value-handler"]], inputs: { label: "label", minValue: "minValue", maxValue: "maxValue", baseValue: "baseValue", showReset: "showReset", currentValue: "currentValue" }, outputs: { currentValueChange: "currentValueChange" }, decls: 11, vars: 10, consts: [[1, "flex-container", "flex-item-gap"], [1, "flex-container", "bold", "growable-flex-item", "flex-item-gap"], ["type", "text", "required", "", 1, "flex-container", "growable-flex-item", 3, "ngModel", "max", "min", "ngModelChange", "keydown"], [4, "ngIf"], [1, "flex-container"], [3, "disabled", "click"], [3, "disabled", "click", 4, "ngIf"]], template: function NumericValueHandlerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NumericValueHandlerComponent_Template_input_ngModelChange_3_listener($event) { return ctx.currentText = $event; })("ngModelChange", function NumericValueHandlerComponent_Template_input_ngModelChange_3_listener($event) { return ctx.onModelChange($event); })("keydown", function NumericValueHandlerComponent_Template_input_keydown_3_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumericValueHandlerComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumericValueHandlerComponent_Template_button_click_6_listener() { return ctx.countDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumericValueHandlerComponent_Template_button_click_8_listener() { return ctx.countUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NumericValueHandlerComponent_button_10_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid-input", !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentText)("max", ctx.maxValue)("min", ctx.minValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectingValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canCountDown || !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canCountUp || !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReset);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".invalid-input[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 2px 15px;\n  \n  margin: 0px 2px;\n\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    transition: 0.5s;\n    background-color: teal;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.growable-flex-item[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.flex-item-gap[_ngcontent-%COMP%] {\n  column-gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWVyaWMtdmFsdWUtaGFuZGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0EsZ0NBQWdDOztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlOztBQUVqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im51bWVyaWMtdmFsdWUtaGFuZGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDJweCAxNXB4O1xuICAvKiBmb250LXNpemU6IDFlbTsgKi9cbiAgbWFyZ2luOiAwcHggMnB4O1xuXG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZ3Jvd2FibGUtZmxleC1pdGVtIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZmxleC1pdGVtLWdhcCB7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG59Il19 */"] });


/***/ }),

/***/ "vJZ4":
/*!******************************************************************!*\
  !*** ./src/app/components/numeric-value-handler/checkresults.ts ***!
  \******************************************************************/
/*! exports provided: CheckNumberResult, CheckEvaluatableToNumberResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckNumberResult", function() { return CheckNumberResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckEvaluatableToNumberResult", function() { return CheckEvaluatableToNumberResult; });
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