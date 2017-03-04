webpackJsonp([2,9],{

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings_settings_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms_src_directives__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms_src_form_providers__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings_settings_routing_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_modules_adminlte_box_box_module__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms_src_form_builder__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_settings_component_ngfactory__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_i18n_tokens__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_settings_components_settings_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router_src_router_config_loader__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModuleNgFactory", function() { return SettingsModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};















var SettingsModuleInjector = (function (_super) {
    __extends(SettingsModuleInjector, _super);
    function SettingsModuleInjector(parent) {
        _super.call(this, parent, [__WEBPACK_IMPORTED_MODULE_11__components_settings_component_ngfactory__["a" /* SettingsComponentNgFactory */]], []);
    }
    Object.defineProperty(SettingsModuleInjector.prototype, "_NgLocalization_7", {
        get: function () {
            if ((this.__NgLocalization_7 == null)) {
                (this.__NgLocalization_7 = new __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["a" /* NgLocaleLocalization */](this.parent.get(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])));
            }
            return this.__NgLocalization_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsModuleInjector.prototype, "_FormBuilder_8", {
        get: function () {
            if ((this.__FormBuilder_8 == null)) {
                (this.__FormBuilder_8 = new __WEBPACK_IMPORTED_MODULE_9__angular_forms_src_form_builder__["a" /* FormBuilder */]());
            }
            return this.__FormBuilder_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsModuleInjector.prototype, "_RadioControlRegistry_9", {
        get: function () {
            if ((this.__RadioControlRegistry_9 == null)) {
                (this.__RadioControlRegistry_9 = new __WEBPACK_IMPORTED_MODULE_10__angular_forms_src_directives_radio_control_value_accessor__["a" /* RadioControlRegistry */]());
            }
            return this.__RadioControlRegistry_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsModuleInjector.prototype, "_ROUTES_10", {
        get: function () {
            if ((this.__ROUTES_10 == null)) {
                (this.__ROUTES_10 = [[{
                            path: '',
                            component: __WEBPACK_IMPORTED_MODULE_13__app_settings_components_settings_component__["a" /* SettingsComponent */]
                        }
                    ]]);
            }
            return this.__ROUTES_10;
        },
        enumerable: true,
        configurable: true
    });
    SettingsModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._InternalFormsSharedModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms_src_directives__["a" /* InternalFormsSharedModule */]();
        this._ReactiveFormsModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms_src_form_providers__["a" /* ReactiveFormsModule */]();
        this._RouterModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__["g" /* RouterModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__["j" /* ROUTER_FORROOT_GUARD */], null));
        this._SettingsRoutingModule_4 = new __WEBPACK_IMPORTED_MODULE_6__app_settings_settings_routing_module__["a" /* SettingsRoutingModule */]();
        this._BoxModule_5 = new __WEBPACK_IMPORTED_MODULE_7__app_modules_adminlte_box_box_module__["a" /* BoxModule */]();
        this._SettingsModule_6 = new __WEBPACK_IMPORTED_MODULE_1__app_settings_settings_module__["a" /* SettingsModule */]();
        return this._SettingsModule_6;
    };
    SettingsModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_forms_src_directives__["a" /* InternalFormsSharedModule */])) {
            return this._InternalFormsSharedModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_forms_src_form_providers__["a" /* ReactiveFormsModule */])) {
            return this._ReactiveFormsModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router_module__["g" /* RouterModule */])) {
            return this._RouterModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__app_settings_settings_routing_module__["a" /* SettingsRoutingModule */])) {
            return this._SettingsRoutingModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__app_modules_adminlte_box_box_module__["a" /* BoxModule */])) {
            return this._BoxModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_settings_settings_module__["a" /* SettingsModule */])) {
            return this._SettingsModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_forms_src_form_builder__["a" /* FormBuilder */])) {
            return this._FormBuilder_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_forms_src_directives_radio_control_value_accessor__["a" /* RadioControlRegistry */])) {
            return this._RadioControlRegistry_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_router_src_router_config_loader__["a" /* ROUTES */])) {
            return this._ROUTES_10;
        }
        return notFoundResult;
    };
    SettingsModuleInjector.prototype.destroyInternal = function () {
    };
    return SettingsModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var SettingsModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](SettingsModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_settings_settings_module__["a" /* SettingsModule */]);
//# sourceMappingURL=D:/Don/Documents/Projects/ng2-pihole/src/settings.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=2.bundle.map