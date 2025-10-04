import {
  ActiveDescendantKeyManager,
  Ar,
  AssetRequest,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Bi,
  Booking,
  BreakpointObserver,
  Breakpoints,
  CdkPortal,
  CdkScrollableModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  CurrencyPipe,
  DOWN_ARROW,
  DatePipe,
  DefaultValueAccessor,
  Directionality,
  Directive,
  ENTER,
  ESCAPE,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HostListener,
  IconComponent,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  MAT_DIALOG_DATA,
  MAT_FORM_FIELD,
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MatCheckbox,
  MatCheckboxModule,
  MatCommonModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSuffix,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgComponentOutlet,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  OrganisationService,
  Output,
  Overlay,
  OverlayConfig,
  OverlayModule,
  Pc,
  Pipe,
  Platform,
  PortalModule,
  Rc,
  ReactiveFormsModule,
  Renderer2,
  Router,
  SafePipe,
  SanitizePipe,
  SettingsService,
  SlicePipe,
  Space,
  Subject,
  Subscription,
  TAB,
  Tc,
  TemplatePortal,
  TemplatePortalDirective,
  TemplateRef,
  TranslatePipe,
  UP_ARROW,
  USER_DOMAIN,
  User,
  UserAvatarComponent,
  UserPipe,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  _IdGenerator,
  __spreadProps,
  __spreadValues,
  _animationsDisabled,
  _countGroupLabelsBeforeOption,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getOptionScrollPosition,
  _u,
  addAriaReferencedId,
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addYears,
  afterNextRender,
  bookedResourceList,
  booleanAttribute,
  catchError,
  coerceArray,
  combineLatest,
  createBooking,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  currentUser,
  current_user,
  debounceTime,
  defaultIfEmpty,
  defer,
  delay,
  differenceInMinutes,
  distinctUntilKeyChanged,
  ee,
  endOfDay,
  endOfMonth,
  filter,
  first,
  flatten,
  forkJoin,
  format,
  formatDuration,
  forwardRef,
  fu,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  generateUserForm,
  getInvalidFields,
  getTimezoneOffsetString,
  getUnixTime,
  hasModifierKey,
  i18n,
  inject,
  input,
  isAfter,
  isBefore,
  isSameDay,
  lastValueFrom,
  map,
  merge,
  model,
  nextValueFrom,
  normalizeDates,
  notifyError,
  notifyWarn,
  oc,
  of,
  output,
  predictableRandomInt,
  queryBookings,
  queryUserFreeBusy,
  reloadUserData,
  removeAriaReferencedId,
  removeBooking,
  roundToNearestMinutes,
  rulesForResource,
  saveBooking,
  searchGuests,
  searchStaff,
  set,
  setClassMetadata,
  setMonth,
  shareReplay,
  signal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  stringToMinutes,
  switchMap,
  take,
  tap,
  timer,
  toDate,
  toQueryString,
  unique,
  updateSpaceList,
  viewChild,
  vt,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-E6N3MO5W.js";

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/isLastDayOfMonth.js
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

// node_modules/date-fns/differenceInMonths.js
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_)
  );
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// node_modules/date-fns/fromUnixTime.js
function fromUnixTime(unixTime, options) {
  return toDate(unixTime * 1e3, options?.in);
}

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// node_modules/date-fns/setHours.js
function setHours(date, hours, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(hours);
  return _date;
}

// node_modules/date-fns/subHours.js
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}

// libs/components/src/lib/custom-tooltip.component.ts
var _c0 = ["customTooltip", ""];
var _c1 = ["*"];
function CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.content())("ngComponentOutletInjector", ctx_r0.injector);
  }
}
function CustomTooltipComponent_ng_template_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.content()), \u0275\u0275sanitizeHtml);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content())("ngTemplateOutletContext", ctx_r0.data());
  }
}
function CustomTooltipComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, CustomTooltipComponent_ng_template_1_Case_1_Template, 1, 2, "ng-container")(2, CustomTooltipComponent_ng_template_1_Case_2_Template, 2, 3, "div", 2)(3, CustomTooltipComponent_ng_template_1_Case_3_Template, 1, 2, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.type) === "component" ? 1 : tmp_1_0 === "html" ? 2 : 3);
  }
}
var _CustomTooltipData = class _CustomTooltipData {
  constructor(d) {
    this.data = d.data;
    this.close = d.close || (() => null);
  }
};
_CustomTooltipData.\u0275fac = function CustomTooltipData_Factory(__ngFactoryType__) {
  \u0275\u0275invalidFactory();
};
_CustomTooltipData.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomTooltipData, factory: _CustomTooltipData.\u0275fac });
var CustomTooltipData = _CustomTooltipData;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipData, [{
    type: Injectable
  }], () => [{ type: void 0 }], null);
})();
var _CustomTooltipComponent = class _CustomTooltipComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this._injector = inject(Injector);
    this.x_pos = input("end", {
      alias: "xPosition"
    });
    this.y_pos = input("top", {
      alias: "yPosition"
    });
    this.content = input(void 0);
    this.data = input(void 0);
    this.backdrop = input(true);
    this.hover = input(false);
    this.delay = input(0);
    this.type = "template";
    this._overlay_ref = null;
    this._portal = viewChild(CdkPortal);
  }
  ngOnInit() {
    const open = () => this.open();
    const hover_open = () => this.hover() ? this.open() : "";
    const hover_close = () => this.hover() ? this.close() : "";
    this._element.nativeElement.addEventListener("click", open);
    this._element.nativeElement.addEventListener("touchend", open);
    this._element.nativeElement.addEventListener("mouseenter", hover_open);
    this._element.nativeElement.addEventListener("mouseleave", hover_close);
    this.subscription("click", () => this._element.nativeElement.removeEventListener("click", open));
    this.subscription("touchend", () => this._element.nativeElement.removeEventListener("touchend", open));
    this.subscription("mouseenter", () => this._element.nativeElement.removeEventListener("mouseenter", hover_open));
    this.subscription("mouseleave", () => this._element.nativeElement.removeEventListener("mouseleave", hover_close));
  }
  ngOnChanges(changes) {
    this._updateInjector();
    if (this._overlay_ref && (changes.x_pos || changes.y_pos || changes.content)) {
      this.open();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  open() {
    if (!this.content())
      return;
    this.timeout("open", () => {
      const hover = this.hover();
      const delay2 = this.delay();
      if (hover && delay2) {
        this.timeout("onclose", () => this.close(), delay2);
      }
      this._updateType();
      if (this._overlay_ref)
        this.close();
      const _portal = this._portal();
      if (!_portal)
        return;
      const pos = this._element.nativeElement.getBoundingClientRect();
      const default_x = "end";
      const default_y = "top";
      const y_pos = this.y_pos();
      this._overlay_ref = this._overlay.create({
        hasBackdrop: !!this.backdrop() && !hover,
        positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withPositions([
          {
            originX: this.x_pos() || default_x,
            originY: (y_pos === "top" ? "bottom" : y_pos == "bottom" ? "top" : y_pos) || default_y,
            overlayX: this.x_pos() || default_x,
            overlayY: this.y_pos() || default_y
          }
        ])
      });
      this._overlay_ref.attach(_portal);
      if (this.backdrop()) {
        this.subscription("backdrop", this._overlay_ref.backdropClick().subscribe(() => this.close()));
      }
    }, 50);
  }
  close() {
    this.clearTimeout("open");
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
  _updateType() {
    const content = this.content();
    this.type = typeof content === "string" ? "html" : content instanceof TemplateRef ? "template" : "component";
  }
  _updateInjector() {
    this.injector = Injector.create({
      providers: [
        {
          provide: CustomTooltipData,
          useValue: { data: this.data(), close: () => this.close() }
        }
      ],
      parent: this._injector
    });
  }
};
_CustomTooltipComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CustomTooltipComponent_BaseFactory;
  return function CustomTooltipComponent_Factory(__ngFactoryType__) {
    return (\u0275CustomTooltipComponent_BaseFactory || (\u0275CustomTooltipComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CustomTooltipComponent)))(__ngFactoryType__ || _CustomTooltipComponent);
  };
})();
_CustomTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomTooltipComponent, selectors: [["", "customTooltip", ""]], viewQuery: function CustomTooltipComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._portal, CdkPortal, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { x_pos: [1, "xPosition", "x_pos"], y_pos: [1, "yPosition", "y_pos"], content: [1, "content"], data: [1, "data"], backdrop: [1, "backdrop"], hover: [1, "hover"], delay: [1, "delay"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["cdk-portal", ""], ["custom-tooltip", "", 1, "relative", "print:hidden"], [3, "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CustomTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
    \u0275\u0275template(1, CustomTooltipComponent_ng_template_1_Template, 4, 1, "ng-template", 0);
  }
}, dependencies: [CommonModule, NgComponentOutlet, NgTemplateOutlet, PortalModule, TemplatePortalDirective, SanitizePipe], styles: ["\n\n[_nghost-%COMP%] {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=custom-tooltip.component.css.map */"] });
var CustomTooltipComponent = _CustomTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipComponent, [{
    type: Component,
    args: [{ selector: "[customTooltip]", template: `
        <ng-content />
        <ng-template cdk-portal>
            <div custom-tooltip class="relative print:hidden">
                @switch (type) {
                    @case ('component') {
                        <ng-container
                            *ngComponentOutlet="content(); injector: injector"
                        ></ng-container>
                    }
                    @case ('html') {
                        <div [innerHTML]="content() | sanitize"></div>
                    }
                    @default {
                        <ng-container
                            *ngTemplateOutlet="content(); context: data()"
                        ></ng-container>
                    }
                }
            </div>
        </ng-template>
    `, imports: [CommonModule, PortalModule, SanitizePipe], styles: ["/* angular:styles/component:css;9f88acd9967d2b0ebf3bc5241107eaa7c3672b233611fbb42832362998689b5f;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/custom-tooltip.component.ts */\n:host {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=custom-tooltip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomTooltipComponent, { className: "CustomTooltipComponent", filePath: "libs/components/src/lib/custom-tooltip.component.ts", lineNumber: 65 });
})();

// libs/components/src/lib/virtual-keyboard.component.ts
var _c02 = ["keyboard", ""];
var _c12 = ["*"];
var _forTrack0 = ($index, $item) => $item[0];
function VirtualKeyboardComponent_ng_template_1_For_2_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("bg-success", ctx_r1.state === "shift");
  }
}
function VirtualKeyboardComponent_ng_template_1_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("focus", function VirtualKeyboardComponent_ng_template_1_For_2_For_2_Template_button_focus_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.focusInput());
    })("click", function VirtualKeyboardComponent_ng_template_1_For_2_For_2_Template_button_click_0_listener() {
      const key_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleKeyPress(key_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, VirtualKeyboardComponent_ng_template_1_For_2_For_2_Conditional_2_Template, 1, 2, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    \u0275\u0275classProp("special", key_r3[0] === "{" && key_r3.length > 1)("space", key_r3 === "{space}");
    \u0275\u0275attribute("key", key_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", key_r3 === "{space}" ? "Space" : key_r3 === "{caps}" ? "Caps Lock" : key_r3 === "{backspace}" ? "Backspace" : key_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(key_r3 === "{caps}" ? 2 : -1);
  }
}
function VirtualKeyboardComponent_ng_template_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, VirtualKeyboardComponent_ng_template_1_For_2_For_2_Template, 3, 7, "button", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r4);
  }
}
function VirtualKeyboardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, VirtualKeyboardComponent_ng_template_1_For_2_Template, 3, 0, "div", 2, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.keyset());
  }
}
var DEFAULT_KEYS = [
  "0123456789".split(""),
  "qwertyuiop".split(""),
  "asdfghjkl".split(""),
  "zxcvbnm".split(""),
  ["{caps}", "{space}", "{backspace}"]
];
var _VirtualKeyboardComponent = class _VirtualKeyboardComponent extends AsyncHandler {
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this.keyset = model(DEFAULT_KEYS);
    this.state = "normal";
    this._overlay_ref = null;
    this._portal = viewChild(CdkPortal);
    this.onFocus = () => {
      if (!_VirtualKeyboardComponent.enabled)
        return;
      this.open();
      this.clearTimeout("blur");
    };
    this.onBlur = () => this.timeout("blur", () => this.close());
  }
  ngOnChanges(changes) {
    if (changes.keyset) {
      if (!this.keyset())
        this.keyset.set(DEFAULT_KEYS);
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  focusInput() {
    this._element?.nativeElement?.blur();
    this._element?.nativeElement?.focus();
  }
  open() {
    if (this._overlay_ref)
      return;
    const _portal = this._portal();
    if (!_portal)
      return;
    this._overlay_ref = this._overlay.create({
      positionStrategy: this._overlay.position().global().bottom().centerHorizontally()
    });
    this._overlay_ref.attach(_portal);
  }
  close() {
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
  handleKeyPress(key) {
    let cursor_pos = this._element.nativeElement.selectionStart;
    const str = this._element.nativeElement.value || "";
    switch (key.toLowerCase()) {
      case "{caps}":
      case "{shift}":
        this.state = "shift";
        break;
      case "{backspace}":
        this._element.nativeElement.value = `${str.substr(0, cursor_pos - 1)}${str.substr(cursor_pos, str.length)}`;
        cursor_pos = Math.max(0, cursor_pos - 1);
        break;
      case "{space}":
        this._element.nativeElement.value = `${str.substr(0, cursor_pos)}${" "}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
        break;
      default:
        if (this.state === "shift")
          this.state = "normal";
        this._element.nativeElement.value = `${str.substr(0, cursor_pos)}${key}${str.substr(cursor_pos, str.length)}`;
        cursor_pos += 1;
    }
    this._element.nativeElement.dispatchEvent(new InputEvent("input"));
    this.updateKeyState();
    this.timeout("focus", () => {
      this.focusInput();
      this._element.nativeElement.selectionStart = cursor_pos;
      this._element.nativeElement.selectionEnd = cursor_pos;
    }, 50);
  }
  updateKeyState() {
    this.keyset.set(this.keyset().map((_2) => _2.map((k2) => k2.length > 1 ? k2 : k2[this.state !== "normal" ? "toUpperCase" : "toLowerCase"]())));
  }
};
_VirtualKeyboardComponent.\u0275fac = function VirtualKeyboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VirtualKeyboardComponent)();
};
_VirtualKeyboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VirtualKeyboardComponent, selectors: [["input", "keyboard", ""], ["textarea", "keyboard", ""]], viewQuery: function VirtualKeyboardComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._portal, CdkPortal, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, hostBindings: function VirtualKeyboardComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("focus", function VirtualKeyboardComponent_focus_HostBindingHandler() {
      return ctx.onFocus();
    })("blur", function VirtualKeyboardComponent_blur_HostBindingHandler() {
      return ctx.onBlur();
    });
  }
}, inputs: { keyset: [1, "keyset"] }, outputs: { keyset: "keysetChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], attrs: _c02, ngContentSelectors: _c12, decls: 2, vars: 0, consts: [["cdk-portal", ""], ["keyboard-view", "", 1, "flex", "w-screen", "flex-col", "space-y-4", "border-t", "border-base-200", "bg-base-200", "p-2"], ["row", "", 1, "flex", "items-center", "justify-center", "space-x-2"], ["matRipple", "", "tabindex", "0", 1, "relative", "cursor-pointer", "rounded-xl", "border", "border-base-200", "bg-base-100", "p-2", 3, "special", "space"], ["matRipple", "", "tabindex", "0", 1, "relative", "cursor-pointer", "rounded-xl", "border", "border-base-200", "bg-base-100", "p-2", 3, "focus", "click"], ["dot", "", 1, "absolute", "right-2", "top-2", "h-2", "w-2", "rounded-full", "bg-base-200", 3, "bg-success"], ["dot", "", 1, "absolute", "right-2", "top-2", "h-2", "w-2", "rounded-full", "bg-base-200"]], template: function VirtualKeyboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
    \u0275\u0275template(1, VirtualKeyboardComponent_ng_template_1_Template, 3, 0, "ng-template", 0);
  }
}, dependencies: [MatRippleModule, MatRipple, PortalModule, TemplatePortalDirective], styles: ["\n\n[key][_ngcontent-%COMP%] {\n  height: 3.5rem;\n  width: 4rem;\n  transition: box-shadow 200ms, top 200ms;\n  box-shadow: 0 4px 0 0.04px rgba(0, 0, 0, 0.1);\n}\n[key].special[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n[key].space[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 10rem;\n  max-width: 25rem;\n}\n[key][_ngcontent-%COMP%]:hover {\n  top: 2px;\n  box-shadow: 0 2px 0 0.04px rgba(0, 0, 0, 0.1);\n}\n[key][_ngcontent-%COMP%]:active {\n  top: 4px;\n  box-shadow: 0 0 0 0.04px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=virtual-keyboard.component.css.map */"] });
var VirtualKeyboardComponent = _VirtualKeyboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualKeyboardComponent, [{
    type: Component,
    args: [{ selector: "input[keyboard],textarea[keyboard]", template: `
        <ng-content />
        <ng-template cdk-portal>
            <div
                keyboard-view
                class="flex w-screen flex-col space-y-4 border-t border-base-200 bg-base-200 p-2"
            >
                @for (row of keyset(); track row[0]) {
                    <div row class="flex items-center justify-center space-x-2">
                        @for (key of row; track key) {
                            <button
                                matRipple
                                [attr.key]="key"
                                tabindex="0"
                                class="relative cursor-pointer rounded-xl border border-base-200 bg-base-100 p-2"
                                [class.special]="
                                    key[0] === '{' && key.length > 1
                                "
                                [class.space]="key === '{space}'"
                                (focus)="focusInput()"
                                (click)="handleKeyPress(key)"
                            >
                                {{
                                    key === '{space}'
                                        ? 'Space'
                                        : key === '{caps}'
                                          ? 'Caps Lock'
                                          : key === '{backspace}'
                                            ? 'Backspace'
                                            : key
                                }}
                                @if (key === '{caps}') {
                                    <div
                                        dot
                                        class="absolute right-2 top-2 h-2 w-2 rounded-full bg-base-200"
                                        [class.bg-success]="state === 'shift'"
                                    ></div>
                                }
                            </button>
                        }
                    </div>
                }
            </div>
        </ng-template>
    `, imports: [MatRippleModule, PortalModule], styles: ["/* angular:styles/component:css;7121e8e0f3a6ec31112fa4330c36a57119d4007e4a28e0345816f9f8d2c8ff0e;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/virtual-keyboard.component.ts */\n[key] {\n  height: 3.5rem;\n  width: 4rem;\n  transition: box-shadow 200ms, top 200ms;\n  box-shadow: 0 4px 0 0.04px rgba(0, 0, 0, 0.1);\n}\n[key].special {\n  width: 10rem;\n}\n[key].space {\n  flex: 1;\n  min-width: 10rem;\n  max-width: 25rem;\n}\n[key]:hover {\n  top: 2px;\n  box-shadow: 0 2px 0 0.04px rgba(0, 0, 0, 0.1);\n}\n[key]:active {\n  top: 4px;\n  box-shadow: 0 0 0 0.04px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=virtual-keyboard.component.css.map */\n"] }]
  }], () => [], { onFocus: [{
    type: HostListener,
    args: ["focus"]
  }], onBlur: [{
    type: HostListener,
    args: ["blur"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VirtualKeyboardComponent, { className: "VirtualKeyboardComponent", filePath: "libs/components/src/lib/virtual-keyboard.component.ts", lineNumber: 106 });
})();

// libs/users/src/lib/location.class.ts
var MapLocation = class {
  constructor(_data = {}) {
    this.type = _data.type || _data.location || "other";
    this.position = _data.position || _data.map_id || _data.asset_id || {
      x: _data.x / _data.map_width || 0,
      y: _data.y / _data.map_height || 0
    };
    this.variance = _data.variance || 0;
    this.last_seen = _data.last_seen || getUnixTime(/* @__PURE__ */ new Date());
    this.level = _data.level;
    this.building = _data.building;
    this.at_location = !!_data.at_location;
    this.coordinates_from = _data.coordinates_from || "top-left";
  }
};

// node_modules/@angular/material/fesm2022/autocomplete.mjs
var _c03 = ["panel"];
var _c13 = ["*"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1, 0);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-mdc-autocomplete-visible", ctx_r1.showPanel)("mat-mdc-autocomplete-hidden", !ctx_r1.showPanel)("mat-autocomplete-panel-animations-enabled", !ctx_r1._animationsDisabled)("mat-primary", ctx_r1._color === "primary")("mat-accent", ctx_r1._color === "accent")("mat-warn", ctx_r1._color === "warn");
    \u0275\u0275property("id", ctx_r1.id);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby(formFieldId_r1));
  }
}
var MatAutocompleteSelectedEvent = class {
  source;
  option;
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }
};
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
  providedIn: "root",
  factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
});
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false,
    autoSelectActiveOption: false,
    hideSingleSelectionIndicator: false,
    requireSelection: false,
    hasBackdrop: false
  };
}
var MatAutocomplete = class _MatAutocomplete {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS);
  _animationsDisabled = _animationsDisabled();
  _activeOptionChanges = Subscription.EMPTY;
  /** Manages active item in option list based on key events. */
  _keyManager;
  /** Whether the autocomplete panel should be visible, depending on option length. */
  showPanel = false;
  /** Whether the autocomplete panel is open. */
  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  _isOpen = false;
  /** Latest trigger that opened the autocomplete. */
  _latestOpeningTrigger;
  /** @docs-private Sets the theme color of the panel. */
  _setColor(value) {
    this._color = value;
    this._changeDetectorRef.markForCheck();
  }
  /** @docs-private theme color of the panel */
  _color;
  // The @ViewChild query for TemplateRef here needs to be static because some code paths
  // lead to the overlay being created before change detection has finished for this component.
  // Notably, another component may trigger `focus` on the autocomplete-trigger.
  /** @docs-private */
  template;
  /** Element for the panel containing the autocomplete options. */
  panel;
  /** Reference to all options within the autocomplete. */
  options;
  /** Reference to all option groups within the autocomplete. */
  optionGroups;
  /** Aria label of the autocomplete. */
  ariaLabel;
  /** Input that can be used to specify the `aria-labelledby` attribute. */
  ariaLabelledby;
  /** Function that maps an option's control value to its display value in the trigger. */
  displayWith = null;
  /**
   * Whether the first option should be highlighted when the autocomplete panel is opened.
   * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
   */
  autoActiveFirstOption;
  /** Whether the active option should be selected as the user is navigating. */
  autoSelectActiveOption;
  /**
   * Whether the user is required to make a selection when they're interacting with the
   * autocomplete. If the user moves away from the autocomplete without selecting an option from
   * the list, the value will be reset. If the user opens the panel and closes it without
   * interacting or selecting a value, the initial value will be kept.
   */
  requireSelection;
  /**
   * Specify the width of the autocomplete panel.  Can be any CSS sizing value, otherwise it will
   * match the width of its host.
   */
  panelWidth;
  /** Whether ripples are disabled within the autocomplete panel. */
  disableRipple;
  /** Event that is emitted whenever an option from the list is selected. */
  optionSelected = new EventEmitter();
  /** Event that is emitted when the autocomplete panel is opened. */
  opened = new EventEmitter();
  /** Event that is emitted when the autocomplete panel is closed. */
  closed = new EventEmitter();
  /** Emits whenever an option is activated. */
  optionActivated = new EventEmitter();
  /**
   * Takes classes set on the host mat-autocomplete element and applies them to the panel
   * inside the overlay container to allow for easy styling.
   */
  set classList(value) {
    this._classList = value;
    this._elementRef.nativeElement.className = "";
  }
  _classList;
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator;
  /** Syncs the parent state with the individual options. */
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
  id = inject(_IdGenerator).getId("mat-autocomplete-");
  /**
   * Tells any descendant `mat-optgroup` to use the inert a11y pattern.
   * @docs-private
   */
  inertGroups;
  constructor() {
    const platform = inject(Platform);
    this.inertGroups = platform?.SAFARI || false;
    this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
    this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
    this.requireSelection = !!this._defaults.requireSelection;
    this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
  }
  ngAfterContentInit() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap().skipPredicate(this._skipPredicate);
    this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    });
    this._setVisibility();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._activeOptionChanges.unsubscribe();
  }
  /**
   * Sets the panel scrollTop. This allows us to manually scroll to display options
   * above or below the fold, as they are not actually being focused when active.
   */
  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  /** Returns the panel's scrollTop. */
  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  /** Panel should hide itself when the option list is empty. */
  _setVisibility() {
    this.showPanel = !!this.options?.length;
    this._changeDetectorRef.markForCheck();
  }
  /** Emits the `select` event. */
  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  /** Gets the aria-labelledby for the autocomplete panel. */
  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  // `skipPredicate` determines if key manager should avoid putting a given option in the tab
  // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
  // recommendation.
  //
  // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
  // makes a few exceptions for compound widgets.
  //
  // From [Developing a Keyboard Interface](
  // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
  //   "For the following composite widget elements, keep them focusable when disabled: Options in a
  //   Listbox..."
  //
  // The user can focus disabled options using the keyboard, but the user cannot click disabled
  // options.
  _skipPredicate() {
    return false;
  }
  static \u0275fac = function MatAutocomplete_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocomplete)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatAutocomplete,
    selectors: [["mat-autocomplete"]],
    contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatOption, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.options = _t2);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t2);
      }
    },
    viewQuery: function MatAutocomplete_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.template = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.panel = _t2.first);
      }
    },
    hostAttrs: [1, "mat-mdc-autocomplete"],
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      displayWith: "displayWith",
      autoActiveFirstOption: [2, "autoActiveFirstOption", "autoActiveFirstOption", booleanAttribute],
      autoSelectActiveOption: [2, "autoSelectActiveOption", "autoSelectActiveOption", booleanAttribute],
      requireSelection: [2, "requireSelection", "requireSelection", booleanAttribute],
      panelWidth: "panelWidth",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      classList: [0, "class", "classList"],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      optionSelected: "optionSelected",
      opened: "opened",
      closed: "closed",
      optionActivated: "optionActivated"
    },
    exportAs: ["matAutocomplete"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatAutocomplete
    }])],
    ngContentSelectors: _c13,
    decls: 1,
    vars: 0,
    consts: [["panel", ""], ["role", "listbox", 1, "mat-mdc-autocomplete-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "id"]],
    template: function MatAutocomplete_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatAutocomplete_ng_template_0_Template, 3, 17, "ng-template");
      }
    },
    styles: ["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocomplete, [{
    type: Component,
    args: [{
      selector: "mat-autocomplete",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "matAutocomplete",
      host: {
        "class": "mat-mdc-autocomplete"
      },
      providers: [{
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      template: `<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [class]="_classList"
    [class.mat-mdc-autocomplete-visible]="showPanel"
    [class.mat-mdc-autocomplete-hidden]="!showPanel"
    [class.mat-autocomplete-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_color === 'primary'"
    [class.mat-accent]="_color === 'accent'"
    [class.mat-warn]="_color === 'warn'"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}\n"]
    }]
  }], () => [], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    displayWith: [{
      type: Input
    }],
    autoActiveFirstOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoSelectActiveOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    requireSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    panelWidth: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    optionActivated: [{
      type: Output
    }],
    classList: [{
      type: Input,
      args: ["class"]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteOrigin = class _MatAutocompleteOrigin {
  elementRef = inject(ElementRef);
  constructor() {
  }
  static \u0275fac = function MatAutocompleteOrigin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteOrigin)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteOrigin,
    selectors: [["", "matAutocompleteOrigin", ""]],
    exportAs: ["matAutocompleteOrigin"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteOrigin, [{
    type: Directive,
    args: [{
      selector: "[matAutocompleteOrigin]",
      exportAs: "matAutocompleteOrigin"
    }]
  }], () => [], null);
})();
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatAutocompleteTrigger),
  multi: true
};
function getMatAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
var MatAutocompleteTrigger = class _MatAutocompleteTrigger {
  _environmentInjector = inject(EnvironmentInjector);
  _element = inject(ElementRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _zone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _formField = inject(MAT_FORM_FIELD, {
    optional: true,
    host: true
  });
  _viewportRuler = inject(ViewportRuler);
  _scrollStrategy = inject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef;
  _portal;
  _componentDestroyed = false;
  _initialized = new Subject();
  _keydownSubscription;
  _outsideClickSubscription;
  _cleanupWindowBlur;
  /** Old value of the native input. Used to work around issues with the `input` event on IE. */
  _previousValue;
  /** Value of the input element when the panel was attached (even if there are no options). */
  _valueOnAttach;
  /** Value on the previous keydown event. */
  _valueOnLastKeydown;
  /** Strategy that is used to position the panel. */
  _positionStrategy;
  /** Whether or not the label state is being overridden. */
  _manuallyFloatingLabel = false;
  /** The subscription for closing actions (some are bound to document). */
  _closingActionsSubscription;
  /** Subscription to viewport size changes. */
  _viewportSubscription = Subscription.EMPTY;
  /** Implements BreakpointObserver to be used to detect handset landscape */
  _breakpointObserver = inject(BreakpointObserver);
  _handsetLandscapeSubscription = Subscription.EMPTY;
  /**
   * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
   * closed autocomplete from being reopened if the user switches to another browser tab and then
   * comes back.
   */
  _canOpenOnNextFocus = true;
  /** Value inside the input before we auto-selected an option. */
  _valueBeforeAutoSelection;
  /**
   * Current option that we have auto-selected as the user is navigating,
   * but which hasn't been propagated to the model value yet.
   */
  _pendingAutoselectedOption;
  /** Stream of keyboard events that can close the panel. */
  _closeKeyEventStream = new Subject();
  /** Classes to apply to the panel. Exposed as a public property for internal usage. */
  _overlayPanelClass = coerceArray(this._defaults?.overlayPanelClass || []);
  /**
   * Event handler for when the window is blurred. Needs to be an
   * arrow function in order to preserve the context.
   */
  _windowBlurHandler = () => {
    this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus();
  };
  /** `View -> model callback called when value changes` */
  _onChange = () => {
  };
  /** `View -> model callback called when autocomplete has been touched` */
  _onTouched = () => {
  };
  /** The autocomplete panel to be attached to this trigger. */
  autocomplete;
  /**
   * Position of the autocomplete panel relative to the trigger element. A position of `auto`
   * will render the panel underneath the trigger if there is enough space for it to fit in
   * the viewport, otherwise the panel will be shown above it. If the position is set to
   * `above` or `below`, the panel will always be shown above or below the trigger. no matter
   * whether it fits completely in the viewport.
   */
  position = "auto";
  /**
   * Reference relative to which to position the autocomplete panel.
   * Defaults to the autocomplete trigger element.
   */
  connectedTo;
  /**
   * `autocomplete` attribute to be set on the input element.
   * @docs-private
   */
  autocompleteAttribute = "off";
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */
  autocompleteDisabled;
  constructor() {
  }
  /** Class to apply to the panel when it's above the input. */
  _aboveClass = "mat-mdc-autocomplete-panel-above";
  ngAfterViewInit() {
    this._initialized.next();
    this._initialized.complete();
    this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler);
  }
  ngOnChanges(changes) {
    if (changes["position"] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }
  ngOnDestroy() {
    this._cleanupWindowBlur?.();
    this._handsetLandscapeSubscription.unsubscribe();
    this._viewportSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
    this._clearFromModal();
  }
  /** Whether or not the autocomplete panel is open. */
  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  _overlayAttached = false;
  /** Opens the autocomplete suggestion panel. */
  openPanel() {
    this._openPanelInternal();
  }
  /** Closes the autocomplete suggestion panel. */
  closePanel() {
    this._resetLabel();
    if (!this._overlayAttached) {
      return;
    }
    if (this.panelOpen) {
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }
    if (this.autocomplete._latestOpeningTrigger === this) {
      this.autocomplete._isOpen = false;
      this.autocomplete._latestOpeningTrigger = null;
    }
    this._overlayAttached = false;
    this._pendingAutoselectedOption = null;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }
    this._updatePanelState();
    if (!this._componentDestroyed) {
      this._changeDetectorRef.detectChanges();
    }
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", this.autocomplete.id);
    }
  }
  /**
   * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
   * within the viewport.
   */
  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  /**
   * A stream of actions that should close the autocomplete panel, including
   * when an option is selected, on blur, and when TAB is pressed.
   */
  get panelClosingActions() {
    return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(
      // Normalize the output so we return a consistent type.
      map((event) => event instanceof MatOptionSelectionChange ? event : null)
    );
  }
  /** Stream of changes to the selection state of the autocomplete options. */
  optionSelections = defer(() => {
    const options = this.autocomplete ? this.autocomplete.options : null;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelections));
  });
  /** The currently active option, coerced to MatOption type. */
  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }
    return null;
  }
  /** Stream of clicks outside of the autocomplete panel. */
  _getOutsideClickStream() {
    return new Observable((observer) => {
      const listener = (event) => {
        const clickTarget = _getEventTarget(event);
        const formField = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null;
        const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
        if (this._overlayAttached && clickTarget !== this._element.nativeElement && // Normally focus moves inside `mousedown` so this condition will almost always be
        // true. Its main purpose is to handle the case where the input is focused from an
        // outside click which propagates up to the `body` listener within the same sequence
        // and causes the panel to close immediately (see #3106).
        !this._hasFocus() && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget)) {
          observer.next(event);
        }
      };
      const cleanups = [this._renderer.listen("document", "click", listener), this._renderer.listen("document", "auxclick", listener), this._renderer.listen("document", "touchend", listener)];
      return () => {
        cleanups.forEach((current) => current());
      };
    });
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    Promise.resolve(null).then(() => this._assignOptionValue(value));
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn2) {
    this._onChange = fn2;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn2) {
    this._onTouched = fn2;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }
  _handleKeydown(e) {
    const event = e;
    const keyCode = event.keyCode;
    const hasModifier = hasModifierKey(event);
    if (keyCode === ESCAPE && !hasModifier) {
      event.preventDefault();
    }
    this._valueOnLastKeydown = this._element.nativeElement.value;
    if (this.activeOption && keyCode === ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();
      this._resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
      if (keyCode === TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this._openPanelInternal(this._valueOnLastKeydown);
      }
      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
          if (!this._pendingAutoselectedOption) {
            this._valueBeforeAutoSelection = this._valueOnLastKeydown;
          }
          this._pendingAutoselectedOption = this.activeOption;
          this._assignOptionValue(this.activeOption.value);
        }
      }
    }
  }
  _handleInput(event) {
    let target = event.target;
    let value = target.value;
    if (target.type === "number") {
      value = value == "" ? null : parseFloat(value);
    }
    if (this._previousValue !== value) {
      this._previousValue = value;
      this._pendingAutoselectedOption = null;
      if (!this.autocomplete || !this.autocomplete.requireSelection) {
        this._onChange(value);
      }
      if (!value) {
        this._clearPreviousSelectedOption(null, false);
      } else if (this.panelOpen && !this.autocomplete.requireSelection) {
        const selectedOption = this.autocomplete.options?.find((option) => option.selected);
        if (selectedOption) {
          const display = this._getDisplayValue(selectedOption.value);
          if (value !== display) {
            selectedOption.deselect(false);
          }
        }
      }
      if (this._canOpen() && this._hasFocus()) {
        const valueOnAttach = this._valueOnLastKeydown ?? this._element.nativeElement.value;
        this._valueOnLastKeydown = null;
        this._openPanelInternal(valueOnAttach);
      }
    }
  }
  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;
      this._attachOverlay(this._previousValue);
      this._floatLabel(true);
    }
  }
  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this._openPanelInternal();
    }
  }
  /** Whether the input currently has focus. */
  _hasFocus() {
    return _getFocusedElementPierceShadowDom() === this._element.nativeElement;
  }
  /**
   * In "auto" mode, the label will animate down as soon as focus is lost.
   * This causes the value to jump when selecting an option with the mouse.
   * This method manually floats the label until the panel can be closed.
   * @param shouldAnimate Whether the label should be animated when it is floated.
   */
  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === "auto") {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = "always";
      }
      this._manuallyFloatingLabel = true;
    }
  }
  /** If the label has been manually elevated, return it to its normal state. */
  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      if (this._formField) {
        this._formField.floatLabel = "auto";
      }
      this._manuallyFloatingLabel = false;
    }
  }
  /**
   * This method listens to a stream of panel closing actions and resets the
   * stream every time the option list changes.
   */
  _subscribeToClosingActions() {
    const initialRender = new Observable((subscriber) => {
      afterNextRender(() => {
        subscriber.next();
      }, {
        injector: this._environmentInjector
      });
    });
    const optionChanges = this.autocomplete.options?.changes.pipe(
      tap(() => this._positionStrategy.reapplyLastPosition()),
      // Defer emitting to the stream until the next tick, because changing
      // bindings in here will cause "changed after checked" errors.
      delay(0)
    ) ?? of();
    return merge(initialRender, optionChanges).pipe(
      // create a new stream of panelClosingActions, replacing any previous streams
      // that were created, and flatten it so our stream only emits closing events...
      switchMap(() => this._zone.run(() => {
        const wasOpen = this.panelOpen;
        this._resetActiveItem();
        this._updatePanelState();
        this._changeDetectorRef.detectChanges();
        if (this.panelOpen) {
          this._overlayRef.updatePosition();
        }
        if (wasOpen !== this.panelOpen) {
          if (this.panelOpen) {
            this._emitOpened();
          } else {
            this.autocomplete.closed.emit();
          }
        }
        return this.panelClosingActions;
      })),
      // when the first closing event occurs...
      take(1)
    ).subscribe((event) => this._setValueAndClose(event));
  }
  /**
   * Emits the opened event once it's known that the panel will be shown and stores
   * the state of the trigger right before the opening sequence was finished.
   */
  _emitOpened() {
    this.autocomplete.opened.emit();
  }
  /** Destroys the autocomplete suggestion panel. */
  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  /** Given a value, returns the string that should be shown within the input. */
  _getDisplayValue(value) {
    const autocomplete = this.autocomplete;
    return autocomplete && autocomplete.displayWith ? autocomplete.displayWith(value) : value;
  }
  _assignOptionValue(value) {
    const toDisplay = this._getDisplayValue(value);
    if (value == null) {
      this._clearPreviousSelectedOption(null, false);
    }
    this._updateNativeInputValue(toDisplay != null ? toDisplay : "");
  }
  _updateNativeInputValue(value) {
    if (this._formField) {
      this._formField._control.value = value;
    } else {
      this._element.nativeElement.value = value;
    }
    this._previousValue = value;
  }
  /**
   * This method closes the panel, and if a value is specified, also sets the associated
   * control to that value. It will also mark the control as dirty if this interaction
   * stemmed from the user.
   */
  _setValueAndClose(event) {
    const panel = this.autocomplete;
    const toSelect = event ? event.source : this._pendingAutoselectedOption;
    if (toSelect) {
      this._clearPreviousSelectedOption(toSelect);
      this._assignOptionValue(toSelect.value);
      this._onChange(toSelect.value);
      panel._emitSelectEvent(toSelect);
      this._element.nativeElement.focus();
    } else if (panel.requireSelection && this._element.nativeElement.value !== this._valueOnAttach) {
      this._clearPreviousSelectedOption(null);
      this._assignOptionValue(null);
      this._onChange(null);
    }
    this.closePanel();
  }
  /**
   * Clear any previous selected option and emit a selection change event for this option
   */
  _clearPreviousSelectedOption(skip, emitEvent) {
    this.autocomplete?.options?.forEach((option) => {
      if (option !== skip && option.selected) {
        option.deselect(emitEvent);
      }
    });
  }
  _openPanelInternal(valueOnAttach = this._element.nativeElement.value) {
    this._attachOverlay(valueOnAttach);
    this._floatLabel();
    if (this._trackedModal) {
      const panelId = this.autocomplete.id;
      addAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
  }
  _attachOverlay(valueOnAttach) {
    if (!this.autocomplete && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatAutocompleteMissingPanelError();
    }
    let overlayRef = this._overlayRef;
    if (!overlayRef) {
      this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: this._formField?.getLabelId()
      });
      overlayRef = createOverlayRef(this._injector, this._getOverlayConfig());
      this._overlayRef = overlayRef;
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
      this._handsetLandscapeSubscription = this._breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe((result) => {
        const isHandsetLandscape = result.matches;
        if (isHandsetLandscape) {
          this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8);
        } else {
          this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);
        }
      });
    } else {
      this._positionStrategy.setOrigin(this._getConnectedElement());
      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }
    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._valueOnAttach = valueOnAttach;
      this._valueOnLastKeydown = null;
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }
    const wasOpen = this.panelOpen;
    this.autocomplete._isOpen = this._overlayAttached = true;
    this.autocomplete._latestOpeningTrigger = this;
    this.autocomplete._setColor(this._formField?.color);
    this._updatePanelState();
    this._applyModalPanelOwnership();
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this._emitOpened();
    }
  }
  /** Handles keyboard events coming from the overlay panel. */
  _handlePanelKeydown = (event) => {
    if (event.keyCode === ESCAPE && !hasModifierKey(event) || event.keyCode === UP_ARROW && hasModifierKey(event, "altKey")) {
      if (this._pendingAutoselectedOption) {
        this._updateNativeInputValue(this._valueBeforeAutoSelection ?? "");
        this._pendingAutoselectedOption = null;
      }
      this._closeKeyEventStream.next();
      this._resetActiveItem();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  /** Updates the panel's visibility state and any trigger state tied to id. */
  _updatePanelState() {
    this.autocomplete._setVisibility();
    if (this.panelOpen) {
      const overlayRef = this._overlayRef;
      if (!this._keydownSubscription) {
        this._keydownSubscription = overlayRef.keydownEvents().subscribe(this._handlePanelKeydown);
      }
      if (!this._outsideClickSubscription) {
        this._outsideClickSubscription = overlayRef.outsidePointerEvents().subscribe();
      }
    } else {
      this._keydownSubscription?.unsubscribe();
      this._outsideClickSubscription?.unsubscribe();
      this._keydownSubscription = this._outsideClickSubscription = null;
    }
  }
  _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir ?? void 0,
      hasBackdrop: this._defaults?.hasBackdrop,
      backdropClass: this._defaults?.backdropClass,
      panelClass: this._overlayPanelClass,
      disableAnimations: this._animationsDisabled
    });
  }
  _getOverlayPosition() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);
    this._setStrategyPositions(strategy);
    this._positionStrategy = strategy;
    return strategy;
  }
  /** Sets the positions on a position strategy based on the directive's input state. */
  _setStrategyPositions(positionStrategy) {
    const belowPositions = [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }];
    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      panelClass
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom",
      panelClass
    }];
    let positions;
    if (this.position === "above") {
      positions = abovePositions;
    } else if (this.position === "below") {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }
    positionStrategy.withPositions(positions);
  }
  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }
  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  /** Returns the width of the input element, so the panel width can match it. */
  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  /**
   * Reset the active item to -1. This is so that pressing arrow keys will activate the correct
   * option.
   *
   * If the consumer opted-in to automatically activatating the first option, activate the first
   * *enabled* option.
   */
  _resetActiveItem() {
    const autocomplete = this.autocomplete;
    if (autocomplete.autoActiveFirstOption) {
      let firstEnabledOptionIndex = -1;
      for (let index = 0; index < autocomplete.options.length; index++) {
        const option = autocomplete.options.get(index);
        if (!option.disabled) {
          firstEnabledOptionIndex = index;
          break;
        }
      }
      autocomplete._keyManager.setActiveItem(firstEnabledOptionIndex);
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  /** Determines whether the panel can be opened. */
  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
  }
  /** Scrolls to a particular option in the list. */
  _scrollToOption(index) {
    const autocomplete = this.autocomplete;
    const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
    if (index === 0 && labelCount === 1) {
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];
      if (option) {
        const element = option._getHostElement();
        const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }
  /**
   * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
   * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
   * panel. Track the modal we have changed so we can undo the changes on destroy.
   */
  _trackedModal = null;
  /**
   * If the autocomplete trigger is inside of an `aria-modal` element, connect
   * that modal to the options panel with `aria-owns`.
   *
   * For some browser + screen reader combinations, when navigation is inside
   * of an `aria-modal` element, the screen reader treats everything outside
   * of that modal as hidden or invisible.
   *
   * This causes a problem when the combobox trigger is _inside_ of a modal, because the
   * options panel is rendered _outside_ of that modal, preventing screen reader navigation
   * from reaching the panel.
   *
   * We can work around this issue by applying `aria-owns` to the modal with the `id` of
   * the options panel. This effectively communicates to assistive technology that the
   * options panel is part of the same interaction as the modal.
   *
   * At time of this writing, this issue is present in VoiceOver.
   * See https://github.com/angular/components/issues/20694
   */
  _applyModalPanelOwnership() {
    const modal = this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
    if (!modal) {
      return;
    }
    const panelId = this.autocomplete.id;
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
    addAriaReferencedId(modal, "aria-owns", panelId);
    this._trackedModal = modal;
  }
  /** Clears the references to the listbox overlay element from the modal it was added to. */
  _clearFromModal() {
    if (this._trackedModal) {
      const panelId = this.autocomplete.id;
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
      this._trackedModal = null;
    }
  }
  static \u0275fac = function MatAutocompleteTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteTrigger,
    selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
    hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
    hostVars: 7,
    hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
          return ctx._handleFocus();
        })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
          return ctx._onTouched();
        })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
          return ctx._handleInput($event);
        })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-controls", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
      }
    },
    inputs: {
      autocomplete: [0, "matAutocomplete", "autocomplete"],
      position: [0, "matAutocompletePosition", "position"],
      connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"],
      autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"],
      autocompleteDisabled: [2, "matAutocompleteDisabled", "autocompleteDisabled", booleanAttribute]
    },
    exportAs: ["matAutocompleteTrigger"],
    features: [\u0275\u0275ProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteTrigger, [{
    type: Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        "class": "mat-mdc-autocomplete-trigger",
        "[attr.autocomplete]": "autocompleteAttribute",
        "[attr.role]": 'autocompleteDisabled ? null : "combobox"',
        "[attr.aria-autocomplete]": 'autocompleteDisabled ? null : "list"',
        "[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
        "[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
        "[attr.aria-controls]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
        "[attr.aria-haspopup]": 'autocompleteDisabled ? null : "listbox"',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        "(focusin)": "_handleFocus()",
        "(blur)": "_onTouched()",
        "(input)": "_handleInput($event)",
        "(keydown)": "_handleKeydown($event)",
        "(click)": "_handleClick()"
      },
      exportAs: "matAutocompleteTrigger",
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], () => [], {
    autocomplete: [{
      type: Input,
      args: ["matAutocomplete"]
    }],
    position: [{
      type: Input,
      args: ["matAutocompletePosition"]
    }],
    connectedTo: [{
      type: Input,
      args: ["matAutocompleteConnectedTo"]
    }],
    autocompleteAttribute: [{
      type: Input,
      args: ["autocomplete"]
    }],
    autocompleteDisabled: [{
      type: Input,
      args: [{
        alias: "matAutocompleteDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteModule = class _MatAutocompleteModule {
  static \u0275fac = function MatAutocompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatAutocompleteModule,
    imports: [OverlayModule, MatOptionModule, MatCommonModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
    exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, MatCommonModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [OverlayModule, MatOptionModule, MatCommonModule, CdkScrollableModule, MatOptionModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatCommonModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, MatCommonModule, MatAutocompleteTrigger, MatAutocompleteOrigin],
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// libs/components/src/lib/duration.pipe.ts
var _DurationPipe = class _DurationPipe {
  /**
   * Format the duration value
   * @param length Duration to format in minutes
   * @param shorten Whether to shorten the period names e.g. `hours` as `h`
   */
  transform(length, shorten = false) {
    let duration = formatDuration({
      hours: Math.floor(length / 60),
      minutes: length % 60
    });
    if (shorten) {
      duration = duration.replace(" hour", "h").replace(" minute", "m").replace(/s/gi, "");
    }
    return duration;
  }
};
_DurationPipe.\u0275fac = function DurationPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DurationPipe)();
};
_DurationPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "duration", type: _DurationPipe, pure: true });
var DurationPipe = _DurationPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationPipe, [{
    type: Pipe,
    args: [{
      name: "duration"
    }]
  }], null, null);
})();

// libs/form-fields/src/lib/date-calendar.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function DateCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, day_r1 == null ? null : day_r1.id, "EE"), " ");
  }
}
function DateCalendarComponent_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateCalendarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DateCalendarComponent_For_18_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, DateCalendarComponent_For_18_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275element(4, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:bg-base-100", day_r3.id !== ctx_r3.active_date)("!text-base-300", !day_r3.is_month)("text-secondary-content", day_r3.id === ctx_r3.active_date)("text-base-content", day_r3.id !== ctx_r3.active_date)("bg-secondary", day_r3.id === ctx_r3.active_date)("font-normal", day_r3.id !== ctx_r3.active_date);
    \u0275\u0275property("disabled", day_r3.id < ctx_r3.from() || day_r3.id > ctx_r3.to());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 15, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.today === day_r3.id ? 3 : -1);
  }
}
var _DateCalendarComponent = class _DateCalendarComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this.from = input(0);
    this.to = input(Date.now() * 10);
    this.offset_weekday = input(0);
    this.today = startOfDay(Date.now()).valueOf();
    this.date = Date.now();
    this.active_date = startOfDay(Date.now()).valueOf();
    this.offset = 0;
    this.date_list = [];
    this.registerOnChange = (fn2) => this._onChange = fn2;
    this.registerOnTouched = (fn2) => this._onTouch = fn2;
  }
  ngOnInit() {
    this.generateDates();
  }
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this.generateDates();
    }
  }
  setValue(new_value) {
    if (new_value < this.from() || new_value >= this.to())
      return;
    const date = new Date(new_value);
    this.date = set(this.date, {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }).valueOf();
    this.active_date = startOfDay(this.date).valueOf();
    if (this._onChange)
      this._onChange(new_value);
  }
  writeValue(value) {
    this.date = value;
    this.active_date = startOfDay(value).valueOf();
    this.offset = 0;
    this.generateDates();
  }
  changeMonth(change) {
    this.offset += change;
    this.generateDates();
  }
  setMonthToCurrent() {
    const diff = differenceInMonths(this.date, startOfMonth(Date.now()));
    this.offset = -diff;
    this.generateDates();
  }
  generateDates() {
    const offset = this._settings.get("app.week_start") || this.offset_weekday();
    const date = addMonths(this.date, this.offset);
    let start = startOfWeek(startOfMonth(date), {
      weekStartsOn: offset
    });
    const now = startOfDay(Date.now());
    const list = [];
    while (list.length < 42) {
      list.push({
        id: start.valueOf(),
        is_past: isBefore(start, now),
        is_month: isSameMonth(start, date)
      });
      start = addDays(start, 1);
    }
    this.date_list = list;
  }
};
_DateCalendarComponent.\u0275fac = function DateCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateCalendarComponent)();
};
_DateCalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateCalendarComponent, selectors: [["date-calendar"]], inputs: { from: [1, "from"], to: [1, "to"], offset_weekday: [1, "offset_weekday"] }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DateCalendarComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 19, vars: 10, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], [1, "pl-1.5", "pr-2", "font-medium", 3, "dblclick"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "name", "schedule-next-month", 3, "click", "disabled"], ["icon", "", "matRipple", "", "name", "schedule-previous-month", 3, "click", "disabled"], [1, "mb-2", "flex", "items-center", "border-b", "border-base-200", "pb-2", "text-sm"], [1, "flex-1", "text-center", "opacity-60"], [1, "flex", "flex-wrap", "items-center", "justify-between"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "hover:bg-base-100", "!text-base-300", "text-secondary-content", "text-base-content", "bg-secondary", "font-normal", "disabled"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "click", "disabled"], ["matRipple", "", 1, "absolute", "-inset-[2px]", "overflow-hidden", "rounded-full", "border", "border-secondary"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-full"]], template: function DateCalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("dblclick", function DateCalendarComponent_Template_button_dblclick_2_listener() {
      return ctx.setMonthToCurrent();
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_6_listener() {
      return ctx.changeMonth(-1);
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_9_listener() {
      return ctx.changeMonth(1);
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275repeaterCreate(13, DateCalendarComponent_For_14_Template, 3, 4, "div", 7, _forTrack02);
    \u0275\u0275pipe(15, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275repeaterCreate(17, DateCalendarComponent_For_18_Template, 5, 18, "button", 9, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, (ctx.date_list[6] == null ? null : ctx.date_list[6].id) || ctx.date, "LLLL yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx.date_list[0] == null ? null : ctx.date_list[0].id) < ctx.from());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (ctx.date_list[34] == null ? null : ctx.date_list[34].id) > ctx.to());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(15, 6, ctx.date_list, 0, 7));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.date_list);
  }
}, dependencies: [CommonModule, SlicePipe, DatePipe, IconComponent], encapsulation: 2 });
var DateCalendarComponent = _DateCalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateCalendarComponent, [{
    type: Component,
    args: [{ selector: "date-calendar", template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <button
                    class="pl-1.5 pr-2 font-medium"
                    (dblclick)="setMonthToCurrent()"
                >
                    {{ date_list[6]?.id || date | date: 'LLLL yyyy' }}
                </button>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        name="schedule-next-month"
                        [disabled]="date_list[0]?.id < from()"
                        (click)="changeMonth(-1)"
                    >
                        <icon>chevron_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        name="schedule-previous-month"
                        [disabled]="date_list[34]?.id > to()"
                        (click)="changeMonth(1)"
                    >
                        <icon>chevron_right</icon>
                    </button>
                </div>
            </div>
            <div
                class="mb-2 flex items-center border-b border-base-200 pb-2 text-sm"
            >
                @for (day of date_list | slice: 0 : 7; track day.id) {
                    <div class="flex-1 text-center opacity-60">
                        {{ day?.id | date: 'EE' }}
                    </div>
                }
            </div>
            <div class="flex flex-wrap items-center justify-between">
                @for (day of date_list; track day.id) {
                    <button
                        icon
                        name="schedule-set-date"
                        class="relative my-0.5 h-9 w-9 min-w-[14%] overflow-visible"
                        [class.hover:bg-base-100]="day.id !== active_date"
                        [class.!text-base-300]="!day.is_month"
                        [class.text-secondary-content]="day.id === active_date"
                        [class.text-base-content]="day.id !== active_date"
                        [class.bg-secondary]="day.id === active_date"
                        [class.font-normal]="day.id !== active_date"
                        (click)="setValue(day.id)"
                        [disabled]="day.id < from() || day.id > to()"
                    >
                        {{ day.id | date: 'd' }}
                        @if (today === day.id) {
                            <div
                                class="absolute -inset-[2px] overflow-hidden rounded-full border border-secondary"
                                matRipple
                            ></div>
                        }
                        <div
                            class="absolute inset-0 overflow-hidden rounded-full"
                            matRipple
                        ></div>
                    </button>
                }
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateCalendarComponent),
        multi: true
      }
    ], imports: [CommonModule, IconComponent] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateCalendarComponent, { className: "DateCalendarComponent", filePath: "libs/form-fields/src/lib/date-calendar.component.ts", lineNumber: 114 });
})();

// libs/form-fields/src/lib/date-field.component.ts
var _c04 = ["*"];
function DateFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.date(), ctx_r0.date_format), " ");
  }
}
function DateFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FORM.DATE_EMPTY"));
  }
}
function DateFieldComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.start_of_day);
  }
}
function DateFieldComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.end_of_day);
  }
}
function DateFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, DateFieldComponent_Conditional_5_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(2, DateFieldComponent_Conditional_5_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_5_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 1 ? 3 : -1);
  }
}
function DateFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "date-calendar", 9);
    \u0275\u0275listener("ngModelChange", function DateFieldComponent_ng_template_11_Template_date_calendar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.date() || ctx_r0.now)("from", ctx_r0.from)("to", ctx_r0.until)("offset_weekday", ctx_r0.week_start());
  }
}
var TimezoneDiffRange;
(function(TimezoneDiffRange2) {
  TimezoneDiffRange2[TimezoneDiffRange2["Both"] = 0] = "Both";
  TimezoneDiffRange2[TimezoneDiffRange2["Start"] = 1] = "Start";
  TimezoneDiffRange2[TimezoneDiffRange2["End"] = 2] = "End";
})(TimezoneDiffRange || (TimezoneDiffRange = {}));
var _DateFieldComponent = class _DateFieldComponent extends AsyncHandler {
  get date_format() {
    return this.short() ? "MMM d, yyyy" : "MMMM d, yyyy";
  }
  get time_format() {
    return this.use_24hr() ? "HH : mm" : "h : mm a";
  }
  get start_of_day() {
    const start = startOfDay(this.date()).valueOf();
    const format2 = `MMM d, ${this.time_format}${this.range() === 1 ? " (z)" : ""}`;
    return this._date_pipe.transform(start, format2, this.tz);
  }
  get end_of_day() {
    const end = endOfDay(this.date()).valueOf();
    const format2 = `MMM d, ${this.time_format}${this.range() === 1 ? " (z)" : ""}`;
    return this._date_pipe.transform(end, format2, this.tz);
  }
  get has_error() {
    return this._control?.invalid && this._control?.touched;
  }
  get tz() {
    const tz = this.timezone();
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  constructor() {
    super();
    this._injector = inject(Injector);
    this.from_date = input(startOfDay(Date.now()).valueOf(), { alias: "from" });
    this.to_date = input(void 0, { alias: "to" });
    this.week_start = input(0);
    this.use_24hr = input(false);
    this.disabled = model(void 0);
    this.short = input(false);
    this.timezone = input("");
    this.range = input(TimezoneDiffRange.Both);
    this.date = signal(Date.now());
    this.now = Date.now();
    this._date_pipe = new DatePipe("en");
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._tooltip = viewChild(CustomTooltipComponent);
  }
  /** First allowed date on the calendar */
  get from() {
    return new Date(this.from_date()) || startOfDay(/* @__PURE__ */ new Date());
  }
  /** Current date value */
  get until() {
    return new Date(this.to_date()) || addYears(endOfDay(/* @__PURE__ */ new Date()), 1);
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this.date.set(Date.now());
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const old_date = new Date(this.date() || Date.now());
    let new_date = set(new_value, {
      hours: old_date.getHours(),
      minutes: old_date.getMinutes()
    }).valueOf();
    if (new_date < this.from.valueOf()) {
      new_date = this.from.valueOf();
    }
    this.date.set(new_date);
    if (this._onChange)
      this._onChange(new_date);
    this._tooltip()?.close();
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date.set(value);
    this._tooltip()?.close();
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn2) {
    this._onChange = fn2;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn2) {
    this._onTouch = fn2;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
};
_DateFieldComponent.\u0275fac = function DateFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DateFieldComponent)();
};
_DateFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateFieldComponent, selectors: [["a-date-field"]], viewQuery: function DateFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], week_start: [1, "week_start"], use_24hr: [1, "use_24hr"], disabled: [1, "disabled"], short: [1, "short"], timezone: [1, "timezone"], range: [1, "range"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DateFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c04, decls: 13, vars: 7, consts: [["calendar_picker", ""], ["customTooltip", "", "yPosition", "top", "matRipple", "", 1, "flex", "h-12", "w-full", "items-center", "justify-between", "rounded", "border", "border-neutral", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], [1, "error", "h-5", "p-1", "text-xs", "text-error"], [1, "relative", "w-[18rem]", "rounded", "bg-base-100", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_3_Template, 2, 4)(4, DateFieldComponent_Conditional_4_Template, 3, 3, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DateFieldComponent_Conditional_5_Template, 4, 3, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "icon");
    \u0275\u0275text(8, "today");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275conditionalCreate(10, DateFieldComponent_Conditional_10_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DateFieldComponent_ng_template_11_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const calendar_picker_r3 = \u0275\u0275reference(12);
    \u0275\u0275classProp("opacity-30", ctx.disabled());
    \u0275\u0275property("content", calendar_picker_r3)("disabled", ctx.disabled());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.date() ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.timezone() && ctx.tz ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.has_error ? 10 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  DateCalendarComponent,
  IconComponent,
  CustomTooltipComponent,
  TranslatePipe
], styles: ["\n\n.no-subscript[_nghost-%COMP%]    > .error[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=date-field.component.css.map */"] });
var DateFieldComponent = _DateFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFieldComponent, [{
    type: Component,
    args: [{ selector: "a-date-field", template: `
        <button
            class="flex h-12 w-full items-center justify-between rounded border border-neutral"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            matRipple
        >
            <div
                class="flex w-1/2 flex-1 flex-col truncate px-4 py-2 text-left leading-tight"
            >
                <div class="text-base font-normal">
                    @if (date()) {
                        {{ date() | date: date_format }}
                    } @else {
                        <span class="opacity-30">{{
                            'FORM.DATE_EMPTY' | translate
                        }}</span>
                    }
                </div>
                @if (timezone() && tz) {
                    <div class="truncate text-xs opacity-30">
                        @if (range() !== 2) {
                            <span>{{ start_of_day }}</span>
                        }
                        @if (range() === 0) {
                            <span> - </span>
                        }
                        @if (range() !== 1) {
                            <span>{{ end_of_day }}</span>
                        }
                    </div>
                }
            </div>
            <div class="flex h-10 w-10 items-center justify-center text-2xl">
                <icon>today</icon>
            </div>
        </button>
        <div class="error h-5 p-1 text-xs text-error">
            @if (has_error) {
                <span><ng-content></ng-content></span>
            }
        </div>
        <ng-template #calendar_picker>
            <div class="relative w-[18rem] rounded bg-base-100 px-2 py-4">
                <date-calendar
                    [ngModel]="date() || now"
                    [from]="from"
                    [to]="until"
                    [offset_weekday]="week_start()"
                    (ngModelChange)="setValue($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      DateCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;4616f4926c682fe7ceb0f98ecb8aa0ceeb383c5318a41af3f61a9c0da602fb9b;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/date-field.component.ts */\n:host.no-subscript > .error {\n  display: none;\n}\n/*# sourceMappingURL=date-field.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateFieldComponent, { className: "DateFieldComponent", filePath: "libs/form-fields/src/lib/date-field.component.ts", lineNumber: 115 });
})();

// libs/users/src/lib/find-availability-modal/user-availability.component.ts
function UserAvailabilityComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", event_r1.start + "%")("width", event_r1.size + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 6, event_r1.date, "shortTime"), " - ", \u0275\u0275pipeBind2(4, 9, event_r1.date.valueOf() + event_r1.duration * 60 * 1e3, "shortTime"), " ");
  }
}
var _UserAvailabilityComponent = class _UserAvailabilityComponent {
  constructor() {
    this.user = input(void 0);
    this.availability = input([]);
    this.date = input(Date.now());
  }
};
_UserAvailabilityComponent.\u0275fac = function UserAvailabilityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserAvailabilityComponent)();
};
_UserAvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvailabilityComponent, selectors: [["user-availability-list"]], inputs: { user: [1, "user"], availability: [1, "availability"], date: [1, "date"] }, decls: 3, vars: 0, consts: [[1, "relative", "inset-y-0", "h-32", "w-[120rem]", "border-b", "border-base-200"], ["event", "", 1, "border-red-700", "absolute", "inset-y-0", "overflow-hidden", "rounded", "border", "bg-error", "p-2", "text-white", 3, "left", "width"], ["event", "", 1, "border-red-700", "absolute", "inset-y-0", "overflow-hidden", "rounded", "border", "bg-error", "p-2", "text-white"], [1, "max-w-full", "text-xs"]], template: function UserAvailabilityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, UserAvailabilityComponent_For_2_Template, 5, 12, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.availability());
  }
}, dependencies: [CommonModule, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */"] });
var UserAvailabilityComponent = _UserAvailabilityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvailabilityComponent, [{
    type: Component,
    args: [{ selector: "user-availability-list", template: `
        <div
            class="relative inset-y-0 h-32 w-[120rem] border-b border-base-200"
        >
            @for (event of availability(); track event) {
                <div
                    event
                    class="border-red-700 absolute inset-y-0 overflow-hidden rounded border bg-error p-2 text-white"
                    [style.left]="event.start + '%'"
                    [style.width]="event.size + '%'"
                >
                    <div class="max-w-full text-xs">
                        {{ event.date | date: 'shortTime' }} -
                        {{
                            event.date.valueOf() + event.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                    </div>
                </div>
            }
        </div>
    `, imports: [CommonModule], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/find-availability-modal/user-availability.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=user-availability.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvailabilityComponent, { className: "UserAvailabilityComponent", filePath: "libs/users/src/lib/find-availability-modal/user-availability.component.ts", lineNumber: 46 });
})();

// libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts
var _c05 = ["container"];
var _c14 = () => [];
function FindAvailabilityModalComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hr_r2 = ctx.$implicit;
    const \u0275$index_26_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -ctx_r3.offset_x + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today && ctx_r3.current_hour > \u0275$index_26_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, hr_r2, "haa"));
  }
}
function FindAvailabilityModalComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "a-user-avatar", 13);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function FindAvailabilityModalComponent_For_22_Template_button_click_4_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeUser(user_r6));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", -ctx_r3.offset_y + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.name || ctx_r3.host.email, " ");
  }
}
function FindAvailabilityModalComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
  if (rf & 2) {
    const \u0275$index_60_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", -(ctx_r3.offset_x + 1) + "px");
    \u0275\u0275attribute("disabled", ctx_r3.today && ctx_r3.current_hour > \u0275$index_60_r7);
  }
}
function FindAvailabilityModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r3.date, "shortTime"), " ");
  }
}
function FindAvailabilityModalComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "user-availability-list", 26);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("user", user_r8)("date", ctx_r3.date)("availability", \u0275\u0275pipeBind1(1, 3, ctx_r3.availability) ? \u0275\u0275pipeBind1(2, 5, ctx_r3.availability)[user_r8.email.toLowerCase()] : \u0275\u0275pureFunction0(7, _c14));
  }
}
var _FindAvailabilityModalComponent = class _FindAvailabilityModalComponent extends AsyncHandler {
  get today() {
    return isSameDay(this.date, Date.now());
  }
  get current_hour() {
    return (/* @__PURE__ */ new Date()).getHours();
  }
  get selection_left() {
    const date = new Date(this.date);
    return (date.getHours() + date.getMinutes() / 60) * 5;
  }
  get selection_width() {
    return this.duration / 60 * 5;
  }
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._renderer = inject(Renderer2);
    this._dialog_ref = inject(MatDialogRef);
    this.users = new BehaviorSubject([]);
    this.search = "";
    this.date = this._data.date || Date.now();
    this.duration = this._data.duration || 60;
    this.offset_y = 0;
    this.offset_x = 0;
    this.host = this._data.host;
    this.hours = new Array(24).fill(0).map((_2, idx) => setHours(startOfDay(Date.now()), idx).valueOf());
    this.on_change = new BehaviorSubject(0);
    this.availability = combineLatest([
      this.users,
      this.on_change
    ]).pipe(debounceTime(300), switchMap(([users]) => {
      return queryUserFreeBusy({
        calendars: [
          this.host.email,
          ...users.map((_2) => _2.email.toLowerCase())
        ].join(","),
        period_start: getUnixTime(startOfDay(this.date)),
        period_end: getUnixTime(endOfDay(this.date))
      }).pipe(catchError(() => of([])));
    }), map((availability_list) => {
      const availability_map = {};
      for (const item of availability_list) {
        availability_map[item.id.toLowerCase()] = item.availability.filter((_2) => _2.status === "busy").map((block) => {
          const date = fromUnixTime(block.starts_at);
          const duration = differenceInMinutes(fromUnixTime(block.ends_at), fromUnixTime(block.starts_at));
          return {
            date,
            duration,
            start: (date.getHours() + date.getMinutes() / 60) / 24 * 100,
            size: duration / 60 / 24 * 100
          };
        });
      }
      return availability_map;
    }), defaultIfEmpty({}), shareReplay(1));
    this._container_el = viewChild.required("container");
    this.move_time = false;
    this._start_time = 0;
    this._move_last = 0;
    this._move_size = 80 * 24;
    this.users.next([...this._data.users]);
  }
  addUser(user) {
    this.users.next([
      ...this.users.getValue().filter((u) => u.email !== user.email),
      user
    ]);
    this.user = null;
  }
  removeUser(user) {
    this.users.next(this.users.getValue().filter((u) => u.email !== user.email));
    this.user = null;
  }
  closeAndUpdate() {
    this._dialog_ref.close(true);
  }
  ngAfterViewInit() {
    const date = new Date(this.date);
    this.timeout("init", () => {
      const el = this._container_el().nativeElement.querySelector(`[hour="${date.getHours()}"]`);
      if (el) {
        const rect = this._container_el().nativeElement.getBoundingClientRect();
        const el_rect = el.getBoundingClientRect();
        this._container_el().nativeElement.scrollTo(el_rect.left - 128 - rect.left, 0);
      }
      this.onScroll();
    }, 300);
  }
  onScroll() {
    this.offset_x = this._container_el().nativeElement.scrollLeft;
    this.offset_y = this._container_el().nativeElement.scrollTop;
  }
  startMovePeriod(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.move_time = true;
    this._start_time = this.date;
    event instanceof MouseEvent ? this.subscription("on_move", this._renderer.listen("window", "mousemove", (e) => this._onMovePeriod(e))) : this.subscription("on_move", this._renderer.listen("window", "touchmove", (e) => this._onMovePeriod(e)));
    event instanceof MouseEvent ? this.subscription("on_move_end", this._renderer.listen("window", "mouseup", () => this._onMoveEnd())) : this.subscription("on_move_end", this._renderer.listen("window", "touchend", () => this._onMoveEnd()));
  }
  startMoveDuration(event) {
    event.preventDefault();
    event.stopPropagation();
    this._move_last = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this._start_time = this.duration;
    event instanceof MouseEvent ? this.subscription("on_move", this._renderer.listen("window", "mousemove", (e) => this._onMoveDuration(e))) : this.subscription("on_move", this._renderer.listen("window", "touchmove", (e) => this._onMoveDuration(e)));
    event instanceof MouseEvent ? this.subscription("on_move_end", this._renderer.listen("window", "mouseup", () => this._onMoveEnd())) : this.subscription("on_move_end", this._renderer.listen("window", "touchend", () => this._onMoveEnd()));
  }
  _onMovePeriod(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      const old_date = this.date;
      this.date = addMinutes(this._start_time, change_min).valueOf();
      if (this.date < Date.now())
        this.date = old_date;
    }
  }
  _onMoveDuration(event) {
    const change_px = this._move_last - (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
    const dir = change_px > 0 ? -1 : 1;
    const change_min = dir * Math.floor(Math.abs(change_px / this._move_size * 24 * 60) / 5) * 5;
    if (change_min) {
      this.duration = Math.max(30, this._start_time + change_min);
    }
  }
  _onMoveEnd() {
    this.unsub("on_move");
    this.unsub("on_move_end");
    this._move_last = 0;
    this.move_time = false;
  }
};
_FindAvailabilityModalComponent.\u0275fac = function FindAvailabilityModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FindAvailabilityModalComponent)();
};
_FindAvailabilityModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAvailabilityModalComponent, selectors: [["find-availability-modal"]], viewQuery: function FindAvailabilityModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._container_el, _c05, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 52, vars: 33, consts: [["container", ""], [1, "flex", "flex-col", "space-y-2", "p-2"], [1, "flex", "h-14", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-9rem)]", "flex-col", "overflow-hidden", "rounded", "border", "border-base-300", "sm:h-[65vh]"], [1, "flex", "w-full", "flex-col", "space-y-2", "p-2", "sm:flex-row", "sm:space-x-2", "sm:space-y-0"], [1, "max-h-[3.25rem]", "flex-1", 3, "ngModelChange", "ngModel"], [1, "relative", "grid", "h-1/2", "w-full", "max-w-[100vw]", "flex-1", "divide-x", "divide-y", "divide-base-200", "overflow-hidden", "border-t", "border-base-200", "sm:max-w-[80vw]"], ["times", "", 1, "col-start-2", "flex", "h-10", "overflow-hidden", "border-l", "border-base-200"], ["hour", "", 1, "relative", "h-10", "min-w-[5rem]", "border-r", "border-base-200", "p-2", "text-sm", 3, "left"], ["users", "", 1, "row-start-2", "w-24", "overflow-hidden"], ["host", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2"], [1, "text-2xl", 3, "user"], [1, "max-w-full", "overflow-hidden", "break-words", "px-2", "text-center", "text-xs"], ["person", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2", 3, "top"], ["blocks", "", 1, "relative", "row-start-2", "overflow-hidden"], ["fixed", "", 1, "absolute", "inset-0", "flex", "overflow-hidden"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200", 3, "left"], ["selection", "", 1, "absolute", "inset-y-0", "z-20", "cursor-grab", "!border-x-2", "!border-info", "active:cursor-grabbing", 3, "mousedown", "touchstart"], [1, "absolute", "inset-0", "bg-info", "opacity-30"], ["handle", "", 1, "absolute", "-left-px", "top-1/2", "h-3", "w-3", "-translate-x-1/2", "-translate-y-1/2", "rounded-full", "bg-info"], ["handle", "", 1, "absolute", "-right-px", "top-1/2", "h-3", "w-3", "-translate-y-1/2", "translate-x-1/2", "rounded-full", "bg-info", "hover:h-4", "hover:w-4", "active:bg-secondary", 3, "mousedown", "touchstart"], [1, "absolute", "left-1/2", "top-2", "-translate-x-1/2", "whitespace-nowrap", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "text-xs", "shadow"], [1, "absolute", "left-1/2", "top-12", "-translate-x-1/2", "whitespace-nowrap", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "text-xs", "shadow"], ["scroll", "", 1, "absolute", "inset-0", "overflow-auto", 3, "scroll"], [1, "pointer-events-none", 3, "user", "date", "availability"], ["btn", "", "matRipple", "", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], ["hour", "", 1, "relative", "h-10", "min-w-[5rem]", "border-r", "border-base-200", "p-2", "text-sm"], ["person", "", 1, "relative", "flex", "h-32", "w-24", "flex-col", "items-center", "justify-center", "border-b", "border-base-200", "py-2"], [1, "max-w-full", "break-words", "px-2", "text-center", "text-xs"], ["icon", "", 1, "absolute", "-left-1", "-top-1", 3, "click"], ["divider", "", 1, "relative", "h-full", "min-w-[5rem]", "border-l", "border-base-200"]], template: function FindAvailabilityModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "main", 5)(9, "div", 6)(10, "a-date-field", 7);
    \u0275\u0275twoWayListener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.date, $event) || (ctx.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_date_field_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.on_change.next(ctx.on_change.getValue() + 1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a-user-search-field", 7);
    \u0275\u0275twoWayListener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.user, $event) || (ctx.user = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FindAvailabilityModalComponent_Template_a_user_search_field_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addUser($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
    \u0275\u0275repeaterCreate(14, FindAvailabilityModalComponent_For_15_Template, 4, 7, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "div", 12);
    \u0275\u0275element(18, "a-user-avatar", 13);
    \u0275\u0275elementStart(19, "div", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(21, FindAvailabilityModalComponent_For_22_Template, 7, 4, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16)(25, "div", 17);
    \u0275\u0275repeaterCreate(26, FindAvailabilityModalComponent_For_27_Template, 1, 3, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(28, "div", 19);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMovePeriod($event));
    });
    \u0275\u0275element(29, "div", 20)(30, "div", 21);
    \u0275\u0275elementStart(31, "div", 22);
    \u0275\u0275listener("mousedown", function FindAvailabilityModalComponent_Template_div_mousedown_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    })("touchstart", function FindAvailabilityModalComponent_Template_div_touchstart_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.startMoveDuration($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 23);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "duration");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, FindAvailabilityModalComponent_Conditional_35_Template, 3, 4, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 25, 0);
    \u0275\u0275listener("scroll", function FindAvailabilityModalComponent_Template_div_scroll_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll());
    });
    \u0275\u0275element(38, "user-availability-list", 26);
    \u0275\u0275pipe(39, "async");
    \u0275\u0275pipe(40, "async");
    \u0275\u0275repeaterCreate(41, FindAvailabilityModalComponent_For_42_Template, 3, 8, "user-availability-list", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(43, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "footer", 2)(45, "button", 27)(46, "div", 28)(47, "icon", 29);
    \u0275\u0275text(48, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 30);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 18, "CALENDAR_EVENT.FIND_AVAILABILITY"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.date);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.user);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("top", -ctx.offset_y + "px");
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx.host);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.host.name || ctx.host.email, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(23, 20, ctx.users));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("left", "calc(" + ctx.selection_left + "rem - " + ctx.offset_x + "px)")("width", ctx.selection_width + "rem");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 22, ctx.duration), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.move_time ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.host)("date", ctx.date)("availability", \u0275\u0275pipeBind1(39, 24, ctx.availability) ? \u0275\u0275pipeBind1(40, 26, ctx.availability)[ctx.host.email] : \u0275\u0275pureFunction0(32, _c14));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(43, 28, ctx.users));
    \u0275\u0275advance(4);
    \u0275\u0275property("mat-dialog-close", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 30, "COMMON.BACK_TO_FORM"), " ");
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  UserAvailabilityComponent,
  UserAvatarComponent,
  UserSearchFieldComponent,
  DateFieldComponent,
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  DurationPipe,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n.grid[_ngcontent-%COMP%] {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true][_ngcontent-%COMP%], \n[disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%] {\n  background: var(--b3) !important;\n  pointer-events: none;\n}\n[disabled=true][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */"] });
var FindAvailabilityModalComponent = _FindAvailabilityModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindAvailabilityModalComponent, [{
    type: Component,
    args: [{ selector: "find-availability-modal", template: `
        <div class="flex flex-col space-y-2 p-2">
            <header
                class="flex h-14 w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CALENDAR_EVENT.FIND_AVAILABILITY' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="flex h-[calc(100vh-9rem)] flex-col overflow-hidden rounded border border-base-300 sm:h-[65vh]"
            >
                <div
                    class="flex w-full flex-col space-y-2 p-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                >
                    <a-date-field
                        [(ngModel)]="date"
                        class="max-h-[3.25rem] flex-1"
                        (ngModelChange)="
                            on_change.next(on_change.getValue() + 1)
                        "
                    ></a-date-field>
                    <a-user-search-field
                        [(ngModel)]="user"
                        (ngModelChange)="addUser($event)"
                        class="max-h-[3.25rem] flex-1"
                    ></a-user-search-field>
                </div>
                <div
                    class="relative grid h-1/2 w-full max-w-[100vw] flex-1 divide-x divide-y divide-base-200 overflow-hidden border-t border-base-200 sm:max-w-[80vw]"
                >
                    <div
                        times
                        class="col-start-2 flex h-10 overflow-hidden border-l border-base-200"
                    >
                        @for (hr of hours; track hr; let hour = $index) {
                            <div
                                hour
                                class="relative h-10 min-w-[5rem] border-r border-base-200 p-2 text-sm"
                                [attr.disabled]="today && current_hour > hour"
                                [style.left]="-offset_x + 'px'"
                            >
                                <span>{{ hr | date: 'haa' }}</span>
                            </div>
                        }
                    </div>
                    <div users class="row-start-2 w-24 overflow-hidden">
                        <div
                            host
                            class="relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2"
                            [style.top]="-offset_y + 'px'"
                        >
                            <a-user-avatar
                                class="text-2xl"
                                [user]="host"
                            ></a-user-avatar>
                            <div
                                class="max-w-full overflow-hidden break-words px-2 text-center text-xs"
                            >
                                {{ host.name || host.email }}
                            </div>
                        </div>
                        @for (user of users | async; track user) {
                            <div
                                person
                                class="relative flex h-32 w-24 flex-col items-center justify-center border-b border-base-200 py-2"
                                [style.top]="-offset_y + 'px'"
                            >
                                <a-user-avatar
                                    class="text-2xl"
                                    [user]="user"
                                ></a-user-avatar>
                                <div
                                    class="max-w-full break-words px-2 text-center text-xs"
                                >
                                    {{ user.name || host.email }}
                                </div>
                                <button
                                    icon
                                    class="absolute -left-1 -top-1"
                                    (click)="removeUser(user)"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                    <div blocks class="relative row-start-2 overflow-hidden">
                        <div
                            fixed
                            class="absolute inset-0 flex overflow-hidden"
                        >
                            @for (_ of hours; track _; let h = $index) {
                                <div
                                    divider
                                    class="relative h-full min-w-[5rem] border-l border-base-200"
                                    [style.left]="-(offset_x + 1) + 'px'"
                                    [attr.disabled]="today && current_hour > h"
                                ></div>
                            }
                            <div
                                selection
                                class="absolute inset-y-0 z-20 cursor-grab !border-x-2 !border-info active:cursor-grabbing"
                                [style.left]="
                                    'calc(' +
                                    selection_left +
                                    'rem - ' +
                                    offset_x +
                                    'px)'
                                "
                                [style.width]="selection_width + 'rem'"
                                (mousedown)="startMovePeriod($event)"
                                (touchstart)="startMovePeriod($event)"
                            >
                                <div
                                    class="absolute inset-0 bg-info opacity-30"
                                ></div>
                                <div
                                    handle
                                    class="absolute -left-px top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-info"
                                ></div>
                                <div
                                    handle
                                    class="absolute -right-px top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-info hover:h-4 hover:w-4 active:bg-secondary"
                                    (mousedown)="startMoveDuration($event)"
                                    (touchstart)="startMoveDuration($event)"
                                ></div>
                                <div
                                    class="absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow"
                                >
                                    {{ duration | duration }}
                                </div>
                                @if (move_time) {
                                    <div
                                        class="absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded border border-base-200 bg-base-100 p-2 text-xs shadow"
                                    >
                                        {{ date | date: 'shortTime' }}
                                    </div>
                                }
                            </div>
                        </div>
                        <div
                            scroll
                            #container
                            class="absolute inset-0 overflow-auto"
                            (scroll)="onScroll()"
                        >
                            <user-availability-list
                                class="pointer-events-none"
                                [user]="host"
                                [date]="date"
                                [availability]="
                                    (availability | async)
                                        ? (availability | async)[host.email]
                                        : []
                                "
                            ></user-availability-list>
                            @for (user of users | async; track user) {
                                <user-availability-list
                                    class="pointer-events-none"
                                    [user]="user"
                                    [date]="date"
                                    [availability]="
                                        (availability | async)
                                            ? (availability | async)[
                                                  user.email.toLowerCase()
                                              ]
                                            : []
                                    "
                                ></user-availability-list>
                            }
                        </div>
                    </div>
                </div>
            </main>
            <footer
                class="flex h-14 w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    [mat-dialog-close]="true"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      UserAvailabilityComponent,
      UserAvatarComponent,
      UserSearchFieldComponent,
      DateFieldComponent,
      IconComponent,
      MatDialogModule,
      DurationPipe,
      FormsModule
    ], styles: ["/* angular:styles/component:css;76b970ea1fbd22f261c4ae1d7362a2a4be952fddab9217461619407a5e9eb6ef;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts */\n.grid {\n  grid-template-columns: 6rem 1fr;\n  grid-template-rows: 2.5rem minmax(0, 1fr);\n}\n[disabled=true],\n[disabled=true] [header] {\n  background: var(--b3) !important;\n  pointer-events: none;\n}\n[disabled=true] > * {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=find-availability-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAvailabilityModalComponent, { className: "FindAvailabilityModalComponent", filePath: "libs/users/src/lib/find-availability-modal/find-availability-modal.component.ts", lineNumber: 286 });
})();

// libs/users/src/lib/user-form.component.ts
function UserFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
    \u0275\u0275text(2, " Name");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 3);
    \u0275\u0275element(7, "input", 4);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("name"));
  }
}
function UserFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 5);
    \u0275\u0275text(2, " Email");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 3);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "A valid email is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("email"));
  }
}
function UserFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 3);
    \u0275\u0275element(8, "input", 8);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("organisation"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.ORGANISATION"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.ORGANISATION"), " is required ");
  }
}
function UserFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 9);
    \u0275\u0275text(2, " Phone: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 3);
    \u0275\u0275element(4, "input", 10);
    \u0275\u0275elementStart(5, "mat-error");
    \u0275\u0275text(6, "Phone format is invalid");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("phone"));
  }
}
function UserFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-checkbox", 11);
    \u0275\u0275text(2, " Assistance required ");
    \u0275\u0275elementEnd()();
  }
}
function UserFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-checkbox", 12);
    \u0275\u0275text(2, " Visit expected ");
    \u0275\u0275elementEnd()();
  }
}
function UserFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, UserFormComponent_Conditional_0_Conditional_1_Template, 10, 2, "div", 1);
    \u0275\u0275conditionalCreate(2, UserFormComponent_Conditional_0_Conditional_2_Template, 10, 2, "div", 1);
    \u0275\u0275conditionalCreate(3, UserFormComponent_Conditional_0_Conditional_3_Template, 12, 8, "div", 1);
    \u0275\u0275conditionalCreate(4, UserFormComponent_Conditional_0_Conditional_4_Template, 7, 2, "div", 1);
    \u0275\u0275conditionalCreate(5, UserFormComponent_Conditional_0_Conditional_5_Template, 3, 0, "div", 1);
    \u0275\u0275conditionalCreate(6, UserFormComponent_Conditional_0_Conditional_6_Template, 3, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.email ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.organisation ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.phone ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.assistance_required ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.visit_expected ? 6 : -1);
  }
}
var _UserFormComponent = class _UserFormComponent {
  constructor() {
    this.form = input(void 0);
  }
  hasError(name) {
    const { invalid, touched } = this.form()?.controls[name] || {};
    return invalid && touched;
  }
};
_UserFormComponent.\u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserFormComponent)();
};
_UserFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["user-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["user-form", "", 1, "w-full", 3, "formGroup"], [1, "flex", "w-full", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], ["for", "email"], ["matInput", "", "name", "email", "placeholder", "Email Address", "formControlName", "email"], ["for", "org"], ["matInput", "", "name", "org", "placeholder", "e.g. Conteso", "formControlName", "organisation"], ["for", "phone"], ["matInput", "", "name", "phone", "type", "tel", "placeholder", "Phone", "formControlName", "phone"], ["name", "assistance-required", "color", "primary", "formControlName", "assistance_required"], ["name", "visit-expected", "color", "primary", "formControlName", "visit_expected"]], template: function UserFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UserFormComponent_Conditional_0_Template, 7, 7, "form", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.form() ? 0 : -1);
  }
}, dependencies: [MatCheckboxModule, MatCheckbox, MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], styles: ["\n\n[_nghost-%COMP%], \nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=user-form.component.css.map */"] });
var UserFormComponent = _UserFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{ selector: "user-form", template: `
        @if (form()) {
            <form user-form [formGroup]="form()" class="w-full">
                @if (form().controls.name) {
                    <div class="flex w-full flex-col">
                        <label for="name" [class.error]="hasError('name')">
                            Name<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                placeholder="Name"
                                formControlName="name"
                            />
                            <mat-error>Name is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.email) {
                    <div class="flex w-full flex-col">
                        <label for="email" [class.error]="hasError('email')">
                            Email<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="email"
                                placeholder="Email Address"
                                formControlName="email"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.organisation) {
                    <div class="flex w-full flex-col">
                        <label
                            for="org"
                            [class.error]="hasError('organisation')"
                        >
                            {{ 'COMMON.ORGANISATION' | translate
                            }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="org"
                                placeholder="e.g. Conteso"
                                formControlName="organisation"
                            />
                            <mat-error>
                                {{ 'COMMON.ORGANISATION' | translate }} is
                                required
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.phone) {
                    <div class="flex w-full flex-col">
                        <label for="phone" [class.error]="hasError('phone')">
                            Phone:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="phone"
                                type="tel"
                                placeholder="Phone"
                                formControlName="phone"
                            />
                            <mat-error>Phone format is invalid</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.assistance_required) {
                    <div class="flex w-full flex-col">
                        <mat-checkbox
                            name="assistance-required"
                            color="primary"
                            formControlName="assistance_required"
                        >
                            Assistance required
                        </mat-checkbox>
                    </div>
                }
                @if (form().controls.visit_expected) {
                    <div class="flex w-full flex-col">
                        <mat-checkbox
                            name="visit-expected"
                            color="primary"
                            formControlName="visit_expected"
                        >
                            Visit expected
                        </mat-checkbox>
                    </div>
                }
            </form>
        }
    `, imports: [
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;fd077178d2e8a022e17f68cb6befbd424b2439b93e8476c2dd172ca203446823;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-form.component.ts */\n:host,\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=user-form.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "libs/users/src/lib/user-form.component.ts", lineNumber: 127 });
})();

// libs/users/src/lib/new-user-modal.component.ts
function NewUserModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewUserModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "user-form", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r0.form);
  }
}
function NewUserModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.USER_SAVING"));
  }
}
function NewUserModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function NewUserModalComponent_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "COMMON.SAVE"), " ");
  }
}
var _NewUserModalComponent = class _NewUserModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.form = generateUserForm(this.user || new User());
    this.loading = false;
    this.user = this._data.user || {};
    this.form = generateUserForm(this.user);
  }
  ngOnInit() {
  }
  saveChanges() {
    if (!this.form)
      return;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const new_user = new User(__spreadProps(__spreadValues({}, this.form.value), {
        is_external: true
      }));
      this.event.emit({ reason: "done", metadata: new_user });
    }
  }
};
_NewUserModalComponent.\u0275fac = function NewUserModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewUserModalComponent)();
};
_NewUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewUserModalComponent, selectors: [["new-user-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [[1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "w-full", "min-w-[24rem]", "flex-col", "items-center", "px-4"], [1, "flex", "w-full", "flex-col", "items-center", "space-y-2", "p-2"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "border-t", "border-base-200", "p-2"], [3, "form"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["btn", "", "matRipple", "", 3, "click"]], template: function NewUserModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NewUserModalComponent_Conditional_4_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, NewUserModalComponent_Conditional_5_Template, 2, 1, "main", 3)(6, NewUserModalComponent_Conditional_6_Template, 5, 3, "main", 4);
    \u0275\u0275conditionalCreate(7, NewUserModalComponent_Conditional_7_Template, 7, 6, "footer", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, (ctx.user == null ? null : ctx.user.id) ? "COMMON.USER_EDIT" : "COMMON.USER_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 7 : -1);
  }
}, dependencies: [
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  UserFormComponent,
  MatDialogModule,
  MatDialogClose,
  IconComponent
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: 20em !important;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n/*# sourceMappingURL=new-user-modal.component.css.map */"] });
var NewUserModalComponent = _NewUserModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewUserModalComponent, [{
    type: Component,
    args: [{ selector: "new-user-modal", template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (user?.id ? 'COMMON.USER_EDIT' : 'COMMON.USER_NEW')
                        | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="flex w-full min-w-[24rem] flex-col items-center px-4">
                <user-form [form]="form"></user-form>
            </main>
        } @else {
            <main class="flex w-full flex-col items-center space-y-2 p-2">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'COMMON.USER_SAVING' | translate }}</p>
            </main>
        }
        @if (!loading) {
            <footer
                class="flex w-full items-center justify-end space-x-2 border-t border-base-200 p-2"
            >
                <button btn matRipple class="inverse" mat-dialog-close>
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple (click)="saveChanges()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      UserFormComponent,
      MatDialogModule,
      IconComponent
    ], styles: ["/* angular:styles/component:css;d1500f659b91dd2b74c0cb226624db0e8f324134dbaaf267a69f046570069bff;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/new-user-modal.component.ts */\nmain {\n  min-height: 20em !important;\n  width: 100%;\n}\nfooter button {\n  min-width: 8em;\n}\n/*# sourceMappingURL=new-user-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewUserModalComponent, { className: "NewUserModalComponent", filePath: "libs/users/src/lib/new-user-modal.component.ts", lineNumber: 75 });
})();

// libs/users/src/lib/select-user-modal.component.ts
function SelectUserModalComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SelectUserModalComponent_For_16_Template_button_click_0_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(user_r2));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
  }
}
function SelectUserModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.search.value ? "COMMON.SELECT_USER_EMPTY_MATCHES" : "COMMON.SELECT_USER_EMPTY"), " ");
  }
}
var _SelectUserModalComponent = class _SelectUserModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this.search = new BehaviorSubject("");
    this.users = this.search.pipe(debounceTime(300), switchMap((s) => Tc({ q: s }).pipe(map((o) => o.data), catchError(() => of([])))), startWith([]));
  }
  select(user) {
    this._dialog_ref.close(user);
  }
};
_SelectUserModalComponent.\u0275fac = function SelectUserModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectUserModalComponent)();
};
_SelectUserModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectUserModalComponent, selectors: [["select-user-modal"]], decls: 20, vars: 12, consts: [[1, "w-[28rem]"], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[60vh]", "overflow-auto", "px-2", "pb-2"], ["appearance", "outline", 1, "no-subscript", "sticky", "top-0", "z-10", "mb-2", "w-full", "bg-base-100"], ["matPrefix", "", 1, "relative", "-left-2", "text-2xl"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "relative", "z-0", "w-full", "space-y-2"], ["matRipple", "", 1, "w-full", "rounded", "border", "border-base-300", "p-2", "text-left", "hover:bg-base-200"], [1, "flex", "h-32", "w-full", "items-center", "justify-center", "p-8", "opacity-30"], ["matRipple", "", 1, "w-full", "rounded", "border", "border-base-300", "p-2", "text-left", "hover:bg-base-200", 3, "click"], [1, "text-xs", "opacity-30"]], template: function SelectUserModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "main", 4)(9, "mat-form-field", 5)(10, "icon", 6);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 7);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("ngModelChange", function SelectUserModalComponent_Template_input_ngModelChange_12_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275repeaterCreate(15, SelectUserModalComponent_For_16_Template, 5, 2, "button", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275conditionalCreate(18, SelectUserModalComponent_Conditional_18_Template, 3, 3, "div", 10);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.SELECT_USER_TITLE"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 6, "COMMON.SELECT_USER_SEARCH"))("ngModel", ctx.search.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(17, 8, ctx.users));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(19, 10, ctx.users).length ? 18 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatInputModule,
  MatInput,
  MatDialogModule,
  MatDialogClose,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent
], encapsulation: 2 });
var SelectUserModalComponent = _SelectUserModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectUserModalComponent, [{
    type: Component,
    args: [{ selector: `select-user-modal`, template: ` <div class="w-[28rem]">
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.SELECT_USER_TITLE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[60vh] overflow-auto px-2 pb-2">
            <mat-form-field
                class="no-subscript sticky top-0 z-10 mb-2 w-full bg-base-100"
                appearance="outline"
            >
                <icon class="relative -left-2 text-2xl" matPrefix>search</icon>
                <input
                    matInput
                    [placeholder]="'COMMON.SELECT_USER_SEARCH' | translate"
                    [ngModel]="search.value"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
            <div class="relative z-0 w-full space-y-2">
                @for (user of users | async; track user) {
                    <button
                        class="w-full rounded border border-base-300 p-2 text-left hover:bg-base-200"
                        matRipple
                        (click)="select(user)"
                    >
                        <div>{{ user.name }}</div>
                        <div class="text-xs opacity-30">{{ user.email }}</div>
                    </button>
                }
                @if (!(users | async).length) {
                    <div
                        class="flex h-32 w-full items-center justify-center p-8 opacity-30"
                    >
                        {{
                            (search.value
                                ? 'COMMON.SELECT_USER_EMPTY_MATCHES'
                                : 'COMMON.SELECT_USER_EMPTY'
                            ) | translate
                        }}
                    </div>
                }
            </div>
        </main>
    </div>`, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
      FormsModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectUserModalComponent, { className: "SelectUserModalComponent", filePath: "libs/users/src/lib/select-user-modal.component.ts", lineNumber: 85 });
})();

// libs/form-fields/src/lib/time-field.component.ts
var _c06 = ["select"];
var _c15 = ["*"];
var _forTrack03 = ($index, $item) => $item.id;
function TimeFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.active_time, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.force_time(), ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 13);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TimeFieldComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(ctx_r0.force_time()));
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_Conditional_10_Conditional_6_Template, 3, 5, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_Conditional_10_Conditional_7_Template, 2, 0, "icon", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.force_time());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, ctx_r0.force_time(), ctx_r0.time_format), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time === ctx_r0.force_time() ? 7 : -1);
  }
}
function TimeFieldComponent_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r4.date, ctx_r0.time_format + " (z)", ctx_r0.tz), " ");
  }
}
function TimeFieldComponent_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 13);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function TimeFieldComponent_For_12_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(option_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_For_12_Conditional_6_Template, 3, 5, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_For_12_Conditional_7_Template, 2, 0, "icon", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 5, option_r4.date, ctx_r0.time_format), " ", ctx_r0.extra_info_fn()(option_r4.date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time === option_r4.date ? 7 : -1);
  }
}
function TimeFieldComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var _TimeFieldComponent = class _TimeFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.step = input(15);
    this.disabled = model(void 0);
    this.no_past_times = input(true);
    this.use_24hr = input(false);
    this.force_time = input(void 0);
    this.no_error = input(void 0);
    this.extra_info_fn = input((t) => "");
    this.from = input(startOfDay(Date.now()).valueOf());
    this.timezone = input("");
    this.date = (/* @__PURE__ */ new Date()).valueOf();
    this.time = format(/* @__PURE__ */ new Date(), "HH:mm");
    this.active_time = Date.now();
    this.select_field = viewChild("select");
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get time_format() {
    return this.use_24hr() ? "HH : mm" : "h : mm a";
  }
  get tz() {
    const tz = this.timezone();
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  ngOnInit() {
    this.show_select = true;
    this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times(), this.step());
    this.timeout("hide", () => this.show_select = false);
    this.active_time = this._time_options.find((_2) => _2.id === format(this.date, "HH:mm"))?.date || this.active_time;
  }
  ngOnChanges(changes) {
    if (changes.no_past_times || changes.step || changes.from) {
      this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times(), this.step());
    }
  }
  /** Available time blocks for the selected date */
  get time_options() {
    const time = (this.time || "00:00").split(":");
    const date = set(this.date, { hours: +time[0], minutes: +time[1] });
    if (date.getMinutes() % 15 !== 0 && !this._time_options.find((time2) => time2.id === format(date, "HH:mm"))) {
      this._time_options.push({
        date,
        id: format(date, "HH:mm")
      });
      this._time_options.sort((a, b2) => `${a.id}`.localeCompare(`${b2.id}`));
    }
    return this._time_options;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.time = new_value;
    if (this._onChange) {
      const time2 = (this.time || "00:00").split(":");
      const date2 = startOfMinute(set(this.date, { hours: +time2[0], minutes: +time2[1] }));
      this._onChange(date2.valueOf());
    }
    const time = this.force_time() || this.time;
    const date = startOfMinute(set(this.date, { hours: +time[0], minutes: +time[1] }));
    this.active_time = this._time_options.find((_2) => _2.id === time)?.date || date;
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date = value || this.date;
    let date = startOfMinute(this.date);
    date = roundToNearestMinutes(date, { nearestTo: 5 });
    this.time = format(date, "HH:mm");
    this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times(), this.step());
    const time = this.force_time() || this.time;
    this.active_time = this._time_options.find((_2) => _2.id === time)?.date || date;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
    this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times() || disabled, this.step());
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn2) {
    this._onChange = fn2;
  }
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn2) {
    this._onTouch = fn2;
  }
  /**
   * Show select field for time options
   */
  showSelect() {
    this.show_select = true;
    this.timeout("on_shown", () => {
      const select_field = this.select_field();
      if (select_field) {
        select_field.focus();
        select_field.open();
        this.subscription("listen_close", select_field.openedChange.subscribe((state) => {
          if (!state) {
            this.show_select = false;
          }
        }));
      }
    });
  }
  /**
   * Generate a list of time options for the given date
   * @param datestamp Date to generate options for
   * @param show_past Whether past times should be options
   */
  generateAvailableTimes(datestamp, show_past, step = 15) {
    const now = new Date(Math.max(this.from(), Date.now()));
    let date = new Date(datestamp);
    const blocks = [];
    if (show_past || !isSameDay(date, now) && isAfter(date, now)) {
      date = startOfDay(date);
    } else if (isAfter(date, now)) {
      date = new Date(now);
    }
    date = roundToNearestMinutes(date, { nearestTo: step });
    const end = endOfDay(date);
    while (isAfter(end, date)) {
      blocks.push({
        date: date.valueOf(),
        id: format(date, "HH:mm")
      });
      date = addMinutes(date, step);
    }
    return blocks;
  }
};
_TimeFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TimeFieldComponent_BaseFactory;
  return function TimeFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275TimeFieldComponent_BaseFactory || (\u0275TimeFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TimeFieldComponent)))(__ngFactoryType__ || _TimeFieldComponent);
  };
})();
_TimeFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeFieldComponent, selectors: [["a-time-field"]], viewQuery: function TimeFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.select_field, _c06, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { step: [1, "step"], disabled: [1, "disabled"], no_past_times: [1, "no_past_times"], use_24hr: [1, "use_24hr"], force_time: [1, "force_time"], no_error: [1, "no_error"], extra_info_fn: [1, "extra_info_fn"], from: [1, "from"], timezone: [1, "timezone"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _TimeFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c15, decls: 14, vars: 11, consts: [["menu", "matMenu"], ["time-field", "", "matRipple", "", 1, "flex", "h-12", "w-full", "items-center", "justify-between", "rounded", "border", "border-neutral", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], [1, "text-2xl"], [1, "max-h-[15rem]", "min-w-[18rem]"], ["mat-menu-item", "", 1, "text-left", 3, "value"], ["mat-menu-item", "", 1, "text-left", 3, "click", "value"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, ""], [1, "text-xs", "opacity-30"], [1, "ml-2", "text-2xl"]], template: function TimeFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, TimeFieldComponent_Conditional_5_Template, 3, 5, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-menu", 6, 0);
    \u0275\u0275conditionalCreate(10, TimeFieldComponent_Conditional_10_Template, 8, 7, "button", 7);
    \u0275\u0275repeaterCreate(11, TimeFieldComponent_For_12_Template, 8, 8, "button", 7, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TimeFieldComponent_Conditional_13_Template, 2, 0, "mat-error");
  }
  if (rf & 2) {
    const menu_r5 = \u0275\u0275reference(9);
    \u0275\u0275classProp("opacity-30", ctx.disabled());
    \u0275\u0275property("disabled", ctx.disabled())("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 8, ctx.active_time, ctx.time_format), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.timezone() && ctx.tz ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.force_time() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.time_options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.no_error() ? 13 : -1);
  }
}, dependencies: [CommonModule, DatePipe, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, IconComponent], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */"] });
var TimeFieldComponent = _TimeFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeFieldComponent, [{
    type: Component,
    args: [{ selector: "a-time-field", template: `
        <button
            time-field
            matRipple
            class="flex h-12 w-full items-center justify-between rounded border border-neutral px-2"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{ active_time | date: time_format }}
                </div>
                @if (timezone() && tz) {
                    <div class="truncate text-xs opacity-30">
                        {{ active_time | date: time_format + ' (z)' : tz }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-[15rem] min-w-[18rem]">
            @if (force_time()) {
                <button
                    mat-menu-item
                    [value]="force_time()"
                    class="text-left"
                    (click)="setValue(force_time())"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ force_time() | date: time_format }}
                            </div>
                            @if (timezone() && tz) {
                                <div class="text-xs opacity-30">
                                    {{
                                        force_time()
                                            | date: time_format + ' (z)' : tz
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time === force_time()) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
            @for (option of time_options; track option.id) {
                <button
                    mat-menu-item
                    [value]="option.id"
                    class="text-left"
                    (click)="setValue(option.id)"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ option.date | date: time_format }}
                                {{ extra_info_fn()(option.date) }}
                            </div>
                            @if (timezone() && tz) {
                                <div class="text-xs opacity-30">
                                    {{
                                        option.date
                                            | date: time_format + ' (z)' : tz
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time === option.date) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
        </mat-menu>
        @if (!no_error()) {
            <mat-error><ng-content /></mat-error>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimeFieldComponent),
        multi: true
      }
    ], imports: [CommonModule, MatMenuModule, MatFormFieldModule, IconComponent], styles: ["/* angular:styles/component:css;5a9d4ad78fbd733d6bae3e98235b5cff9293f47e8579cab48bc92b1fef278e28;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/time-field.component.ts */\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeFieldComponent, { className: "TimeFieldComponent", filePath: "libs/form-fields/src/lib/time-field.component.ts", lineNumber: 136 });
})();

// libs/users/src/lib/wfh-settings-modal.component.ts
function WFHSettingsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-checkbox", 12);
    \u0275\u0275twoWayListener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_For_3_Template_mat_checkbox_ngModelChange_4_listener($event) {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.weekdays_enabled[day_r2.getDay()], $event) || (ctx_r2.weekdays_enabled[day_r2.getDay()] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_For_3_Template_mat_checkbox_ngModelChange_4_listener($event) {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView($event && ctx_r2.initialiseDay(day_r2.getDay()));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, day_r2, "EEE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.weekdays_enabled[day_r2.getDay()]);
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    \u0275\u0275property("value", type_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r7.name, " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const \u0275$index_40_r9 = \u0275\u0275nextContext().$index;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addBlock(ctx_r2.settings[day_r6.getDay()], \u0275$index_40_r9));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_40_r9 = \u0275\u0275nextContext().$index;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeBlock(ctx_r2.settings[day_r6.getDay()], \u0275$index_40_r9));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_a_time_field_ngModelChange_1_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setStartTime(block_r5, day_r6.getDay(), $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a-time-field", 18);
    \u0275\u0275listener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_a_time_field_ngModelChange_2_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setEndTime(block_r5, day_r6.getDay(), $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 19)(4, "mat-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template_mat_select_ngModelChange_4_listener($event) {
      const block_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(block_r5.location, $event) || (block_r5.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_For_6_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_7_Template, 3, 0, "button", 21);
    \u0275\u0275conditionalCreate(8, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Conditional_8_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_25_0;
    const block_r5 = ctx.$implicit;
    const \u0275$index_40_r9 = ctx.$index;
    const day_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.timeFrom(block_r5.start_time))("from", ctx_r2.timeFrom((\u0275$index_40_r9 > 0 ? (tmp_25_0 = ctx_r2.settings[day_r6.getDay()].blocks[\u0275$index_40_r9 - 1]) == null ? null : tmp_25_0.end_time : 0) || 0))("no_error", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.timeFrom(block_r5.end_time))("from", ctx_r2.timeFrom(block_r5.start_time + 0.25))("no_error", true);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", block_r5.location);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_40_r9 === 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_40_r9 !== 0 ? 8 : -1);
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275repeaterCreate(2, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_For_3_Template, 9, 9, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.settings[day_r6.getDay()].blocks);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 1, day_r6, "EEEE"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Conditional_0_Template, 7, 4, "div", 14);
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.weekdays_enabled[day_r6.getDay()] ? 0 : -1);
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, WFHSettingsModalComponent_Conditional_5_Conditional_7_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.days);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.WORK_HOURS"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "COMMON.WORK_SETTINGS_EMPTY"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 6);
    \u0275\u0275repeaterCreate(2, WFHSettingsModalComponent_Conditional_5_For_3_Template, 5, 5, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(4, "h3", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_5_Conditional_7_Template, 6, 3, "div", 9)(8, WFHSettingsModalComponent_Conditional_5_Conditional_8_Template, 5, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.days);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "COMMON.WORK_DAYS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.has_working_days ? 7 : 8);
  }
}
function WFHSettingsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.WORK_SETTINGS_SAVE"), " ");
  }
}
function WFHSettingsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 28);
    \u0275\u0275listener("click", function WFHSettingsModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveChanges());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
var _WFHSettingsModalComponent = class _WFHSettingsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.options = [];
    this.option = "";
    this.settings = [];
    this.weekdays_enabled = {};
    this.changed = false;
    this.loading = false;
    this.available_weekdays = [];
    this.days = new Array(7).fill(0).map((_2, idx) => addDays(startOfWeek(addDays(Date.now(), 30)), idx));
  }
  get has_working_days() {
    return Object.keys(this.weekdays_enabled).some((day) => this.weekdays_enabled[day]);
  }
  get option_name() {
    return this.options.find((_2) => _2.id === this.option)?.name || "";
  }
  get now() {
    return startOfMinute(Date.now()).getTime();
  }
  ngOnInit() {
    const user = currentUser();
    const prefs = this._data?.local ? this._data.preferences : user.work_preferences;
    this.settings = [
      ...(prefs || []).map((_2) => __spreadProps(__spreadValues({}, _2), {
        blocks: [..._2?.blocks || []]
      }))
    ];
    for (const day of this.settings) {
      if (day.blocks.length)
        this.weekdays_enabled[day.day_of_week] = true;
    }
    this.options = [
      { id: "wfo", name: i18n("COMMON.WORK_OFFICE"), icon: "business" },
      { id: "wfh", name: i18n("COMMON.WORK_HOME"), icon: "home" },
      { id: "aol", name: i18n("COMMON.WORK_LEAVE"), icon: "event_busy" }
    ];
    this.option = this.options[0].id;
  }
  timeFrom(hours) {
    return startOfMinute(set(addDays(/* @__PURE__ */ new Date(), 1), {
      hours: Math.floor(hours),
      minutes: hours * 60 % 60
    })).getTime();
  }
  fromTime(time) {
    const date = new Date(time);
    return date.getHours() + date.getMinutes() / 60;
  }
  initialiseDay(day) {
    if (!this.settings[day])
      this.settings[day] = { day_of_week: day, blocks: [] };
    if (!this.settings[day].blocks)
      this.settings[day].blocks = [];
    if (this.settings[day].blocks.length === 0) {
      this.addBlock(this.settings[day], 0);
    }
  }
  addBlock(pref, index) {
    pref.blocks.splice(index + 1, 0, {
      start_time: 9,
      end_time: 17,
      location: "wfo"
    });
    this.cleanupBlocks(pref);
  }
  removeBlock(pref, index) {
    if (pref.blocks.length <= 1)
      return;
    pref.blocks.splice(index, 1);
  }
  setEndTime(block, day, time) {
    setTimeout(() => {
      block.end_time = this.fromTime(time);
      this.cleanupBlocks(this.settings[day]);
    }, 50);
  }
  setStartTime(block, day, time) {
    setTimeout(() => {
      block.start_time = this.fromTime(time);
      this.cleanupBlocks(this.settings[day]);
    }, 50);
  }
  cleanupBlocks(pref) {
    if (!pref?.blocks?.length)
      return;
    for (let i = 0; i < pref.blocks.length; i++) {
      const block = pref.blocks[i];
      if (i > 0) {
        if (block.start_time < pref.blocks[i - 1].end_time) {
          block.start_time = pref.blocks[i - 1].end_time;
        }
      }
      if (block.end_time <= block.start_time) {
        block.end_time = block.start_time + 1;
      }
    }
  }
  async saveChanges(close = true) {
    this.loading = true;
    this._dialog_ref.disableClose = true;
    const new_settings = new Array(7).fill(0).map((_2, idx) => ({ day_of_week: idx, blocks: [] }));
    for (const day of this.days) {
      const day_of_week = day.getDay();
      if (this.weekdays_enabled[day_of_week]) {
        new_settings[day_of_week] = {
          day_of_week,
          blocks: this.settings[day_of_week].blocks
        };
      }
    }
    if (!this._data?.local) {
      const user = await lastValueFrom(Pc("current"));
      await lastValueFrom(Rc(user.id, __spreadProps(__spreadValues({}, user), {
        groups: user.groups.filter((_2) => !_2.startsWith("placeos_")),
        work_preferences: new_settings
      }))).catch((e) => {
        this.loading = false;
        this._dialog_ref.disableClose = false;
        notifyError("Unable to save user work preferences.");
        throw e;
      });
    }
    this.loading = false;
    this._dialog_ref.disableClose = false;
    if (close) {
      if (!this._data?.local)
        reloadUserData();
      this._dialog_ref.close(new_settings);
    }
  }
};
_WFHSettingsModalComponent.\u0275fac = function WFHSettingsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WFHSettingsModalComponent)();
};
_WFHSettingsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WFHSettingsModalComponent, selectors: [["wfh-settings-modal"]], decls: 8, vars: 6, consts: [[1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "relative", "flex", "max-h-[calc(100vh-9rem)]", "w-[40rem]", "max-w-full", "flex-col", "space-y-2", "overflow-y-auto", "overflow-x-hidden", "rounded", "px-2", "py-4", "sm:max-h-[65vh]", "sm:p-4"], ["loading", "", 1, "relative", "flex", "h-[18rem]", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-hidden", "rounded", "bg-base-100", "text-center"], [1, "flex", "justify-end", "border-t", "border-base-200", "px-4", "py-2"], [1, "relative", "mb-4", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border", "border-base-300", "p-2"], [1, "flex", "flex-1", "flex-col", "items-center", "pt-2"], [1, "absolute", "left-2", "top-0", "-translate-y-1/2", "bg-base-100", "px-2"], [1, "relative", "flex", "w-full", "flex-col", "items-center", "justify-between", "space-y-4", "rounded", "border", "border-base-300", "px-2", "pb-4", "pt-6", "sm:px-4"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4", "px-8", "py-16"], [1, "text-xs", "font-bold", "uppercase"], [3, "ngModelChange", "ngModel"], [1, "absolute", "left-2", "top-0", "!m-0", "-translate-y-1/2", "bg-base-100", "px-2"], [1, "relative", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded", "border", "border-base-200", "p-2"], [1, "w-1/2", "flex-1", "space-y-2", "pt-2"], [1, "flex", "items-center", "space-x-2"], [1, "absolute", "left-2", "top-0", "-translate-y-1/2", "rounded", "border", "border-base-200", "bg-base-100", "bg-opacity-50", "px-2", "text-sm", "font-medium"], [1, "w-1/4", "flex-1", 3, "ngModelChange", "ngModel", "from", "no_error"], ["appearance", "outline", 1, "no-subscript", "w-1/4", "flex-1"], [3, "value"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-base-400"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-error", "text-error"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-base-400", 3, "click"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-error", "text-error", 3, "click"], ["src", "assets/icons/no-results.svg", 1, "m-auto"], [1, "opacity-30"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"]], template: function WFHSettingsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, WFHSettingsModalComponent_Conditional_4_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, WFHSettingsModalComponent_Conditional_5_Template, 9, 4, "main", 3)(6, WFHSettingsModalComponent_Conditional_6_Template, 5, 4, "div", 4);
    \u0275\u0275conditionalCreate(7, WFHSettingsModalComponent_Conditional_7_Template, 4, 3, "footer", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.WORK_LOCATION_SETTINGS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 7 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  MatDialogModule,
  MatDialogClose,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  TimeFieldComponent,
  MatCheckboxModule,
  MatCheckbox,
  FormsModule,
  NgControlStatus,
  NgModel,
  IconComponent
], encapsulation: 2 });
var WFHSettingsModalComponent = _WFHSettingsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WFHSettingsModalComponent, [{
    type: Component,
    args: [{ selector: `wfh-settings-modal`, template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.WORK_LOCATION_SETTINGS' | translate }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main
                class="relative flex max-h-[calc(100vh-9rem)] w-[40rem] max-w-full flex-col space-y-2 overflow-y-auto overflow-x-hidden rounded px-2 py-4 sm:max-h-[65vh] sm:p-4"
            >
                <div
                    class="relative mb-4 flex w-full items-center justify-between space-x-2 rounded border border-base-300 p-2"
                >
                    @for (day of days; track day) {
                        <div class="flex flex-1 flex-col items-center pt-2">
                            <div class="text-xs font-bold uppercase">
                                {{ day | date: 'EEE' }}
                            </div>
                            <mat-checkbox
                                [(ngModel)]="weekdays_enabled[day.getDay()]"
                                (ngModelChange)="
                                    $event && initialiseDay(day.getDay())
                                "
                            >
                            </mat-checkbox>
                        </div>
                    }
                    <h3
                        class="absolute left-2 top-0 -translate-y-1/2 bg-base-100 px-2"
                    >
                        {{ 'COMMON.WORK_DAYS' | translate }}
                    </h3>
                </div>
                @if (has_working_days) {
                    <div
                        class="relative flex w-full flex-col items-center justify-between space-y-4 rounded border border-base-300 px-2 pb-4 pt-6 sm:px-4"
                    >
                        @for (day of days; track day) {
                            @if (weekdays_enabled[day.getDay()]) {
                                <div
                                    class="relative flex w-full items-center justify-between space-x-2 rounded border border-base-200 p-2"
                                >
                                    <div class="w-1/2 flex-1 space-y-2 pt-2">
                                        @for (
                                            block of settings[day.getDay()]
                                                .blocks;
                                            track block;
                                            let i = $index
                                        ) {
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <a-time-field
                                                    [ngModel]="
                                                        timeFrom(
                                                            block.start_time
                                                        )
                                                    "
                                                    (ngModelChange)="
                                                        setStartTime(
                                                            block,
                                                            day.getDay(),
                                                            $event
                                                        )
                                                    "
                                                    [from]="
                                                        timeFrom(
                                                            (i > 0
                                                                ? settings[
                                                                      day.getDay()
                                                                  ].blocks[
                                                                      i - 1
                                                                  ]?.end_time
                                                                : 0) || 0
                                                        )
                                                    "
                                                    [no_error]="true"
                                                    class="w-1/4 flex-1"
                                                ></a-time-field>
                                                <a-time-field
                                                    [ngModel]="
                                                        timeFrom(block.end_time)
                                                    "
                                                    (ngModelChange)="
                                                        setEndTime(
                                                            block,
                                                            day.getDay(),
                                                            $event
                                                        )
                                                    "
                                                    [from]="
                                                        timeFrom(
                                                            block.start_time +
                                                                0.25
                                                        )
                                                    "
                                                    [no_error]="true"
                                                    class="w-1/4 flex-1"
                                                ></a-time-field>
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="no-subscript w-1/4 flex-1"
                                                >
                                                    <mat-select
                                                        [(ngModel)]="
                                                            block.location
                                                        "
                                                    >
                                                        @for (
                                                            type of options;
                                                            track type
                                                        ) {
                                                            <mat-option
                                                                [value]="
                                                                    type.id
                                                                "
                                                            >
                                                                {{ type.name }}
                                                            </mat-option>
                                                        }
                                                    </mat-select>
                                                </mat-form-field>
                                                @if (i === 0) {
                                                    <button
                                                        icon
                                                        matRipple
                                                        (click)="
                                                            addBlock(
                                                                settings[
                                                                    day.getDay()
                                                                ],
                                                                i
                                                            )
                                                        "
                                                        class="h-12 w-12 rounded border border-base-400"
                                                    >
                                                        <icon>add</icon>
                                                    </button>
                                                }
                                                @if (i !== 0) {
                                                    <button
                                                        icon
                                                        matRipple
                                                        class="h-12 w-12 rounded border border-error text-error"
                                                        (click)="
                                                            removeBlock(
                                                                settings[
                                                                    day.getDay()
                                                                ],
                                                                i
                                                            )
                                                        "
                                                    >
                                                        <icon>delete</icon>
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </div>
                                    <h3
                                        class="absolute left-2 top-0 -translate-y-1/2 rounded border border-base-200 bg-base-100 bg-opacity-50 px-2 text-sm font-medium"
                                    >
                                        {{ day | date: 'EEEE' }}
                                    </h3>
                                </div>
                            }
                        }
                        <h3
                            class="absolute left-2 top-0 !m-0 -translate-y-1/2 bg-base-100 px-2"
                        >
                            {{ 'COMMON.WORK_HOURS' | translate }}
                        </h3>
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-4 px-8 py-16"
                    >
                        <img src="assets/icons/no-results.svg" class="m-auto" />
                        <p class="opacity-30">
                            {{ 'COMMON.WORK_SETTINGS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </main>
        } @else {
            <div
                loading
                class="relative flex h-[18rem] w-[24rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded bg-base-100 text-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'COMMON.WORK_SETTINGS_SAVE' | translate }}
                </p>
            </div>
        }
        @if (!loading) {
            <footer class="flex justify-end border-t border-base-200 px-4 py-2">
                <button btn matRipple class="w-48" (click)="saveChanges()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      CommonModule,
      MatDialogModule,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      TimeFieldComponent,
      MatCheckboxModule,
      FormsModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WFHSettingsModalComponent, { className: "WFHSettingsModalComponent", filePath: "libs/users/src/lib/wfh-settings-modal.component.ts", lineNumber: 256 });
})();

// libs/users/src/lib/users.module.ts
var STANDALONE_COMPONENTS = [
  NewUserModalComponent,
  UserFormComponent,
  WFHSettingsModalComponent,
  UserPipe,
  FindAvailabilityModalComponent,
  UserAvailabilityComponent,
  SelectUserModalComponent
];
var _SharedUsersModule = class _SharedUsersModule {
};
_SharedUsersModule.\u0275fac = function SharedUsersModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedUsersModule)();
};
_SharedUsersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedUsersModule });
_SharedUsersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  NewUserModalComponent,
  UserFormComponent,
  WFHSettingsModalComponent,
  FindAvailabilityModalComponent,
  UserAvailabilityComponent,
  SelectUserModalComponent
] });
var SharedUsersModule = _SharedUsersModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedUsersModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...STANDALONE_COMPONENTS],
      exports: [...STANDALONE_COMPONENTS]
    }]
  }], null, null);
})();

// libs/form-fields/src/lib/user-search-field.component.ts
var _c07 = ["input"];
var _c16 = (a0) => ({ name: a0 });
function UserSearchFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 5);
  }
}
function UserSearchFieldComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 11)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275property("value", user_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.email, " ");
  }
}
function UserSearchFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 8)(1, "div", 13);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_14_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.stopEvent($event));
    })("touchstart", function UserSearchFieldComponent_Conditional_14_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.stopEvent($event));
    })("click", function UserSearchFieldComponent_Conditional_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.setValue(ctx_r3.search_str);
      return \u0275\u0275resetView(ctx_r3.stopEvent($event));
    });
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r5 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "FORM.USER_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c16, term_r5)), " ");
  }
}
function UserSearchFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_15_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.empty_fn()());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const term_r5 = \u0275\u0275readContextLet(11);
    \u0275\u0275property("disabled", !ctx_r3.empty_fn());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, term_r5 ? "FORM.USER_EMPTY" : ""), " ", ctx_r3.error(), " ");
  }
}
function UserSearchFieldComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearUser());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "person_cancel");
    \u0275\u0275elementEnd()();
  }
}
var _UserSearchFieldComponent = class _UserSearchFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this.search_term = new BehaviorSubject("");
    this.loading = signal(false);
    this.user = signal(null);
    this.disabled = model(void 0);
    this.placeholder = input("FORM.USER_SEARCH");
    this.options = input(void 0);
    this.guests = input(void 0);
    this.clear = input(false);
    this.error = input("");
    this.validate = input(void 0);
    this.empty_fn = input(void 0);
    this.filter = input(void 0);
    this.query_fn = input((q2) => this._settings.get("app.basic_user_search") ? Tc({ q: q2, authority_id: vt()?.id }).pipe(map((_2) => _2.data.map((_3) => new User(_3))), catchError(() => of([]))) : this.guests() ? forkJoin([
      searchStaff(q2).pipe(catchError(() => of([]))),
      searchGuests(q2).pipe(catchError(() => of([])))
    ]) : searchStaff(q2).pipe(catchError(() => of([]))));
    this.search_results = this.search_term.pipe(debounceTime(300), switchMap((term) => {
      if (term && typeof term !== "string")
        return of([term]);
      if (term === this.user()?.name)
        return of([this.user()]);
      this.loading.set(true);
      const s = (term || "").toLowerCase();
      return this.options()?.length ? of(this.options().filter((_2) => _2.name.toLowerCase().includes(s) || _2.email.toLowerCase().includes(s))) : s.length > 2 ? this.query_fn()(s) : of([]);
    }), map((_2) => _2.filter((_3) => !!_3)), tap(() => this.loading.set(false)), startWith([]), shareReplay(1));
    this.registerOnChange = (fn2) => this._onChange = fn2;
    this.registerOnTouched = (fn2) => this._onTouch = fn2;
    this.setDisabledState = (s) => this.disabled.set(s);
    this._input_el = viewChild("input", { read: ElementRef });
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value, email) {
    const value = typeof new_value === "string" ? new User({ name: new_value, email }) : new_value;
    this._onChange ? this._onChange(value) : null;
    this._onTouch ? this._onTouch(value) : null;
    this.user.set(value);
    console.log("Set User:", value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.user.set(value);
    this.resetTerm();
  }
  displayFn(user) {
    return user && user.name ? user.name : "";
  }
  stopEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  clearUser() {
    this.user.set(null);
    this._onChange ? this._onChange(null) : null;
    this._onTouch ? this._onTouch(null) : null;
    this.resetTerm();
  }
  resetTerm() {
    this.search_term.next(this.user());
    const input2 = this._input_el()?.nativeElement;
    if (input2)
      input2.value = this.search_term.getValue();
  }
};
_UserSearchFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UserSearchFieldComponent_BaseFactory;
  return function UserSearchFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275UserSearchFieldComponent_BaseFactory || (\u0275UserSearchFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UserSearchFieldComponent)))(__ngFactoryType__ || _UserSearchFieldComponent);
  };
})();
_UserSearchFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSearchFieldComponent, selectors: [["a-user-search-field"]], viewQuery: function UserSearchFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c07, 5, ElementRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { disabled: [1, "disabled"], placeholder: [1, "placeholder"], options: [1, "options"], guests: [1, "guests"], clear: [1, "clear"], error: [1, "error"], validate: [1, "validate"], empty_fn: [1, "empty_fn"], filter: [1, "filter"], query_fn: [1, "query_fn"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _UserSearchFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 19, vars: 15, consts: [["auto", "matAutocomplete"], [1, "flex", "w-full", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["matPrefix", "", 1, "block", "flex", "w-6", "items-center", "justify-center", "text-2xl"], ["matInput", "", 3, "ngModelChange", "blur", "ngModel", "disabled", "matAutocomplete", "placeholder"], ["matSuffix", "", "diameter", "24"], [3, "optionSelected", "displayWith"], [3, "value"], [1, "pointer-events-none", "relative"], [3, "disabled"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [1, "pointer-events-auto", "absolute", "inset-0", "px-4", 3, "mousedown", "touchstart", "click"], [1, "pointer-events-none"], [3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary", 3, "click"]], template: function UserSearchFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-form-field", 2)(2, "icon", 3);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search_term.next($event));
    })("blur", function UserSearchFieldComponent_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.resetTerm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, UserSearchFieldComponent_Conditional_6_Template, 1, 0, "mat-spinner", 5);
    \u0275\u0275elementStart(7, "mat-autocomplete", 6, 0);
    \u0275\u0275listener("optionSelected", function UserSearchFieldComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setValue($event.option.value));
    });
    \u0275\u0275declareLet(9);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275declareLet(11);
    \u0275\u0275repeaterCreate(12, UserSearchFieldComponent_For_13_Template, 6, 3, "mat-option", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(14, UserSearchFieldComponent_Conditional_14_Template, 5, 6, "mat-option", 8);
    \u0275\u0275conditionalCreate(15, UserSearchFieldComponent_Conditional_15_Template, 3, 5, "mat-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, UserSearchFieldComponent_Conditional_18_Template, 3, 0, "button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r8 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.search_term.getValue())("disabled", ctx.disabled())("matAutocomplete", auto_r8)("placeholder", \u0275\u0275pipeBind1(5, 10, ctx.placeholder()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("displayWith", ctx.displayFn);
    const user_list_r9 = \u0275\u0275pipeBind1(10, 12, ctx.search_results);
    \u0275\u0275advance(4);
    const term_r10 = \u0275\u0275storeLet(ctx.search_term.getValue());
    \u0275\u0275advance();
    \u0275\u0275repeater(user_list_r9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(term_r10 && ctx.validate() && ctx.validate()(term_r10) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(user_list_r9 == null ? null : user_list_r9.length) && (ctx.search_term.getValue() || ctx.error()) ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.error());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.clear() ? 18 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatPrefix,
  MatSuffix,
  MatInputModule,
  MatInput,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatRippleModule,
  MatRipple,
  IconComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\nicon[_ngcontent-%COMP%] {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */"] });
var UserSearchFieldComponent = _UserSearchFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-search-field", template: `
        <div class="flex w-full space-x-2">
            <mat-form-field appearance="outline" class="w-1/2 flex-1">
                <icon
                    matPrefix
                    class="block flex w-6 items-center justify-center text-2xl"
                    >search</icon
                >
                <input
                    matInput
                    [ngModel]="search_term.getValue()"
                    (ngModelChange)="search_term.next($event)"
                    [disabled]="disabled()"
                    [matAutocomplete]="auto"
                    [placeholder]="placeholder() | translate"
                    (blur)="resetTerm()"
                />
                @if (loading()) {
                    <mat-spinner matSuffix diameter="24"></mat-spinner>
                }
                <mat-autocomplete
                    #auto="matAutocomplete"
                    [displayWith]="displayFn"
                    (optionSelected)="setValue($event.option.value)"
                >
                    @let user_list = search_results | async;
                    @let term = search_term.getValue();
                    @for (user of user_list; track $index) {
                        <mat-option [value]="user">
                            <div class="leading-tight">
                                <div>{{ user.name }}</div>
                                <div class="text-xs opacity-30">
                                    {{ user.email }}
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (term && validate() && validate()(term)) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setValue(search_str); stopEvent($event)
                                "
                            >
                                <div class="pointer-events-none">
                                    {{
                                        'FORM.USER_ADD_EXTERNAL'
                                            | translate: { name: term }
                                    }}
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (
                        !user_list?.length &&
                        (search_term.getValue() || error())
                    ) {
                        <mat-option
                            [disabled]="!empty_fn()"
                            (click)="empty_fn()()"
                        >
                            {{ (term ? 'FORM.USER_EMPTY' : '') | translate }}
                            {{ error() }}
                        </mat-option>
                    }
                </mat-autocomplete>
                <mat-error>{{ error() }}</mat-error>
            </mat-form-field>
            @if (clear()) {
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded border border-secondary text-secondary"
                    (click)="clearUser()"
                >
                    <icon>person_cancel</icon>
                </button>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserSearchFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;d84628be6394a4ab204c469dc548d2d04b7c619d7a49b10690a47d4a374a3d83;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/user-search-field.component.ts */\n:host {\n  display: block;\n}\nicon {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSearchFieldComponent, { className: "UserSearchFieldComponent", filePath: "libs/form-fields/src/lib/user-search-field.component.ts", lineNumber: 159 });
})();

// node_modules/@placeos/svg-viewer/dist/index.es.js
var fe = function(e, n) {
  return fe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, fe(e, n);
};
function V(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  fe(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
function pt(e, n, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function c(u) {
      try {
        l(r.next(u));
      } catch (v) {
        s(v);
      }
    }
    function a(u) {
      try {
        l(r.throw(u));
      } catch (v) {
        s(v);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(c, a);
    }
    l((r = r.apply(e, n || [])).next());
  });
}
function Re(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = c(0), s.throw = c(1), s.return = c(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(l) {
    return function(u) {
      return a([l, u]);
    };
  }
  function a(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (t = 0)), t; ) try {
      if (r = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done) return i;
      switch (o = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
        case 0:
        case 1:
          i = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: false };
        case 5:
          t.label++, o = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = l;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(l);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = n.call(e, t);
    } catch (u) {
      l = [6, u], o = 0;
    } finally {
      r = i = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: true };
  }
}
function q(e) {
  var n = typeof Symbol == "function" && Symbol.iterator, t = n && e[n], r = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Y(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), o, i = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(o = r.next()).done; ) i.push(o.value);
  } catch (c) {
    s = { error: c };
  } finally {
    try {
      o && !o.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function re(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function M(e) {
  return this instanceof M ? (this.v = e, this) : new M(e);
}
function mt(e, n, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t.apply(e, n || []), o, i = [];
  return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function s(f) {
    return function(p) {
      return Promise.resolve(p).then(f, v);
    };
  }
  function c(f, p) {
    r[f] && (o[f] = function(y) {
      return new Promise(function(S, w) {
        i.push([f, y, S, w]) > 1 || a(f, y);
      });
    }, p && (o[f] = p(o[f])));
  }
  function a(f, p) {
    try {
      l(r[f](p));
    } catch (y) {
      d(i[0][3], y);
    }
  }
  function l(f) {
    f.value instanceof M ? Promise.resolve(f.value.v).then(u, v) : d(i[0][2], f);
  }
  function u(f) {
    a("next", f);
  }
  function v(f) {
    a("throw", f);
  }
  function d(f, p) {
    f(p), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function gt(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e[Symbol.asyncIterator], t;
  return n ? n.call(e) : (e = typeof q == "function" ? q(e) : e[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function r(i) {
    t[i] = e[i] && function(s) {
      return new Promise(function(c, a) {
        s = e[i](s), o(c, a, s.done, s.value);
      });
    };
  }
  function o(i, s, c, a) {
    Promise.resolve(a).then(function(l) {
      i({ value: l, done: c });
    }, s);
  }
}
function h(e) {
  return typeof e == "function";
}
function Fe(e) {
  var n = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, t = e(n);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var le = Fe(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, o) {
      return o + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function he(e, n) {
  if (e) {
    var t = e.indexOf(n);
    0 <= t && e.splice(t, 1);
  }
}
var G = function() {
  function e(n) {
    this.initialTeardown = n, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var n, t, r, o, i;
    if (!this.closed) {
      this.closed = true;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var c = q(s), a = c.next(); !a.done; a = c.next()) {
              var l = a.value;
              l.remove(this);
            }
          } catch (y) {
            n = { error: y };
          } finally {
            try {
              a && !a.done && (t = c.return) && t.call(c);
            } finally {
              if (n) throw n.error;
            }
          }
        else
          s.remove(this);
      var u = this.initialTeardown;
      if (h(u))
        try {
          u();
        } catch (y) {
          i = y instanceof le ? y.errors : [y];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var d = q(v), f = d.next(); !f.done; f = d.next()) {
            var p = f.value;
            try {
              Ce(p);
            } catch (y) {
              i = i ?? [], y instanceof le ? i = re(re([], Y(i)), Y(y.errors)) : i.push(y);
            }
          }
        } catch (y) {
          r = { error: y };
        } finally {
          try {
            f && !f.done && (o = d.return) && o.call(d);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (i)
        throw new le(i);
    }
  }, e.prototype.add = function(n) {
    var t;
    if (n && n !== this)
      if (this.closed)
        Ce(n);
      else {
        if (n instanceof e) {
          if (n.closed || n._hasParent(this))
            return;
          n._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(n);
      }
  }, e.prototype._hasParent = function(n) {
    var t = this._parentage;
    return t === n || Array.isArray(t) && t.includes(n);
  }, e.prototype._addParent = function(n) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n;
  }, e.prototype._removeParent = function(n) {
    var t = this._parentage;
    t === n ? this._parentage = null : Array.isArray(t) && he(t, n);
  }, e.prototype.remove = function(n) {
    var t = this._finalizers;
    t && he(t, n), n instanceof e && n._removeParent(this);
  }, e.EMPTY = function() {
    var n = new e();
    return n.closed = true, n;
  }(), e;
}();
var je = G.EMPTY;
function Be(e) {
  return e instanceof G || e && "closed" in e && h(e.remove) && h(e.add) && h(e.unsubscribe);
}
function Ce(e) {
  h(e) ? e() : e.unsubscribe();
}
var _t = {
  Promise: void 0
};
var bt = {
  setTimeout: function(e, n) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    return setTimeout.apply(void 0, re([e, n], Y(t)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function Ne(e) {
  bt.setTimeout(function() {
    throw e;
  });
}
function de() {
}
function te(e) {
  e();
}
var we = function(e) {
  V(n, e);
  function n(t) {
    var r = e.call(this) || this;
    return r.isStopped = false, t ? (r.destination = t, Be(t) && t.add(r)) : r.destination = St, r;
  }
  return n.create = function(t, r, o) {
    return new ye(t, r, o);
  }, n.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, n.prototype.error = function(t) {
    this.isStopped || (this.isStopped = true, this._error(t));
  }, n.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, n.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e.prototype.unsubscribe.call(this), this.destination = null);
  }, n.prototype._next = function(t) {
    this.destination.next(t);
  }, n.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, n.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, n;
}(G);
var wt = function() {
  function e(n) {
    this.partialObserver = n;
  }
  return e.prototype.next = function(n) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(n);
      } catch (r) {
        K(r);
      }
  }, e.prototype.error = function(n) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(n);
      } catch (r) {
        K(r);
      }
    else
      K(n);
  }, e.prototype.complete = function() {
    var n = this.partialObserver;
    if (n.complete)
      try {
        n.complete();
      } catch (t) {
        K(t);
      }
  }, e;
}();
var ye = function(e) {
  V(n, e);
  function n(t, r, o) {
    var i = e.call(this) || this, s;
    return h(t) || !t ? s = {
      next: t ?? void 0,
      error: r ?? void 0,
      complete: o ?? void 0
    } : s = t, i.destination = new wt(s), i;
  }
  return n;
}(we);
function K(e) {
  Ne(e);
}
function xt(e) {
  throw e;
}
var St = {
  closed: true,
  next: de,
  error: xt,
  complete: de
};
var xe = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ue(e) {
  return e;
}
function Et(e) {
  return e.length === 0 ? Ue : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(r, o) {
      return o(r);
    }, t);
  };
}
var g = function() {
  function e(n) {
    n && (this._subscribe = n);
  }
  return e.prototype.lift = function(n) {
    var t = new e();
    return t.source = this, t.operator = n, t;
  }, e.prototype.subscribe = function(n, t, r) {
    var o = this, i = Lt(n) ? n : new ye(n, t, r);
    return te(function() {
      var s = o, c = s.operator, a = s.source;
      i.add(c ? c.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, e.prototype._trySubscribe = function(n) {
    try {
      return this._subscribe(n);
    } catch (t) {
      n.error(t);
    }
  }, e.prototype.forEach = function(n, t) {
    var r = this;
    return t = Oe(t), new t(function(o, i) {
      var s = new ye({
        next: function(c) {
          try {
            n(c);
          } catch (a) {
            i(a), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      r.subscribe(s);
    });
  }, e.prototype._subscribe = function(n) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(n);
  }, e.prototype[xe] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var n = [], t = 0; t < arguments.length; t++)
      n[t] = arguments[t];
    return Et(n)(this);
  }, e.prototype.toPromise = function(n) {
    var t = this;
    return n = Oe(n), new n(function(r, o) {
      var i;
      t.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return r(i);
      });
    });
  }, e.create = function(n) {
    return new e(n);
  }, e;
}();
function Oe(e) {
  var n;
  return (n = e ?? _t.Promise) !== null && n !== void 0 ? n : Promise;
}
function At(e) {
  return e && h(e.next) && h(e.error) && h(e.complete);
}
function Lt(e) {
  return e && e instanceof we || At(e) && Be(e);
}
function $t(e) {
  return h(e?.lift);
}
function R(e) {
  return function(n) {
    if ($t(n))
      return n.lift(function(t) {
        try {
          return e(t, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function O(e, n, t, r, o) {
  return new zt(e, n, t, r, o);
}
var zt = function(e) {
  V(n, e);
  function n(t, r, o, i, s, c) {
    var a = e.call(this, t) || this;
    return a.onFinalize = s, a.shouldUnsubscribe = c, a._next = r ? function(l) {
      try {
        r(l);
      } catch (u) {
        t.error(u);
      }
    } : e.prototype._next, a._error = i ? function(l) {
      try {
        i(l);
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, a._complete = o ? function() {
      try {
        o();
      } catch (l) {
        t.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, a;
  }
  return n.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, n;
}(we);
var Ct = Fe(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
});
var Se = function(e) {
  V(n, e);
  function n() {
    var t = e.call(this) || this;
    return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
  }
  return n.prototype.lift = function(t) {
    var r = new Te(this, this);
    return r.operator = t, r;
  }, n.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ct();
  }, n.prototype.next = function(t) {
    var r = this;
    te(function() {
      var o, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = q(r.currentObservers), c = s.next(); !c.done; c = s.next()) {
            var a = c.value;
            a.next(t);
          }
        } catch (l) {
          o = { error: l };
        } finally {
          try {
            c && !c.done && (i = s.return) && i.call(s);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, n.prototype.error = function(t) {
    var r = this;
    te(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = true, r.thrownError = t;
        for (var o = r.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, n.prototype.complete = function() {
    var t = this;
    te(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = true;
        for (var r = t.observers; r.length; )
          r.shift().complete();
      }
    });
  }, n.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(n.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), n.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
  }, n.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, n.prototype._innerSubscribe = function(t) {
    var r = this, o = this, i = o.hasError, s = o.isStopped, c = o.observers;
    return i || s ? je : (this.currentObservers = null, c.push(t), new G(function() {
      r.currentObservers = null, he(c, t);
    }));
  }, n.prototype._checkFinalizedStatuses = function(t) {
    var r = this, o = r.hasError, i = r.thrownError, s = r.isStopped;
    o ? t.error(i) : s && t.complete();
  }, n.prototype.asObservable = function() {
    var t = new g();
    return t.source = this, t;
  }, n.create = function(t, r) {
    return new Te(t, r);
  }, n;
}(g);
var Te = function(e) {
  V(n, e);
  function n(t, r) {
    var o = e.call(this) || this;
    return o.destination = t, o.source = r, o;
  }
  return n.prototype.next = function(t) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, t);
  }, n.prototype.error = function(t) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, t);
  }, n.prototype.complete = function() {
    var t, r;
    (r = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || r === void 0 || r.call(t);
  }, n.prototype._subscribe = function(t) {
    var r, o;
    return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && o !== void 0 ? o : je;
  }, n;
}(Se);
var Ye = function(e) {
  V(n, e);
  function n(t) {
    var r = e.call(this) || this;
    return r._value = t, r;
  }
  return Object.defineProperty(n.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  }), n.prototype._subscribe = function(t) {
    var r = e.prototype._subscribe.call(this, t);
    return !r.closed && t.next(this._value), r;
  }, n.prototype.getValue = function() {
    var t = this, r = t.hasError, o = t.thrownError, i = t._value;
    if (r)
      throw o;
    return this._throwIfClosed(), i;
  }, n.prototype.next = function(t) {
    e.prototype.next.call(this, this._value = t);
  }, n;
}(Se);
var Ot = new g(function(e) {
  return e.complete();
});
function Tt(e) {
  return e && h(e.schedule);
}
function He(e) {
  return e[e.length - 1];
}
function Mt(e) {
  return Tt(He(e)) ? e.pop() : void 0;
}
function Pt(e, n) {
  return typeof He(e) == "number" ? e.pop() : n;
}
var Ee = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function De(e) {
  return h(e?.then);
}
function Ge(e) {
  return h(e[xe]);
}
function We(e) {
  return Symbol.asyncIterator && h(e?.[Symbol.asyncIterator]);
}
function Je(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function kt() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Xe = kt();
function Ze(e) {
  return h(e?.[Xe]);
}
function Ke(e) {
  return mt(this, arguments, function() {
    var t, r, o, i;
    return Re(this, function(s) {
      switch (s.label) {
        case 0:
          t = e.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, M(t.read())];
        case 3:
          return r = s.sent(), o = r.value, i = r.done, i ? [4, M(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, M(o)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Qe(e) {
  return h(e?.getReader);
}
function L(e) {
  if (e instanceof g)
    return e;
  if (e != null) {
    if (Ge(e))
      return It(e);
    if (Ee(e))
      return qt(e);
    if (De(e))
      return Vt(e);
    if (We(e))
      return et(e);
    if (Ze(e))
      return Rt(e);
    if (Qe(e))
      return Ft(e);
  }
  throw Je(e);
}
function It(e) {
  return new g(function(n) {
    var t = e[xe]();
    if (h(t.subscribe))
      return t.subscribe(n);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function qt(e) {
  return new g(function(n) {
    for (var t = 0; t < e.length && !n.closed; t++)
      n.next(e[t]);
    n.complete();
  });
}
function Vt(e) {
  return new g(function(n) {
    e.then(function(t) {
      n.closed || (n.next(t), n.complete());
    }, function(t) {
      return n.error(t);
    }).then(null, Ne);
  });
}
function Rt(e) {
  return new g(function(n) {
    var t, r;
    try {
      for (var o = q(e), i = o.next(); !i.done; i = o.next()) {
        var s = i.value;
        if (n.next(s), n.closed)
          return;
      }
    } catch (c) {
      t = { error: c };
    } finally {
      try {
        i && !i.done && (r = o.return) && r.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
    n.complete();
  });
}
function et(e) {
  return new g(function(n) {
    jt(e, n).catch(function(t) {
      return n.error(t);
    });
  });
}
function Ft(e) {
  return et(Ke(e));
}
function jt(e, n) {
  var t, r, o, i;
  return pt(this, void 0, void 0, function() {
    var s, c;
    return Re(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 11]), t = gt(e), a.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (r = a.sent(), !!r.done) return [3, 4];
          if (s = r.value, n.next(s), n.closed)
            return [2];
          a.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = a.sent(), o = { error: c }, [3, 11];
        case 6:
          return a.trys.push([6, , 9, 10]), r && !r.done && (i = t.return) ? [4, i.call(t)] : [3, 8];
        case 7:
          a.sent(), a.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (o) throw o.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return n.complete(), [2];
      }
    });
  });
}
function C(e, n, t, r, o) {
  r === void 0 && (r = 0), o === void 0 && (o = false);
  var i = n.schedule(function() {
    t(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(i), !o)
    return i;
}
function tt(e, n) {
  return n === void 0 && (n = 0), R(function(t, r) {
    t.subscribe(O(r, function(o) {
      return C(r, e, function() {
        return r.next(o);
      }, n);
    }, function() {
      return C(r, e, function() {
        return r.complete();
      }, n);
    }, function(o) {
      return C(r, e, function() {
        return r.error(o);
      }, n);
    }));
  });
}
function nt(e, n) {
  return n === void 0 && (n = 0), R(function(t, r) {
    r.add(e.schedule(function() {
      return t.subscribe(r);
    }, n));
  });
}
function Bt(e, n) {
  return L(e).pipe(nt(n), tt(n));
}
function Nt(e, n) {
  return L(e).pipe(nt(n), tt(n));
}
function Ut(e, n) {
  return new g(function(t) {
    var r = 0;
    return n.schedule(function() {
      r === e.length ? t.complete() : (t.next(e[r++]), t.closed || this.schedule());
    });
  });
}
function Yt(e, n) {
  return new g(function(t) {
    var r;
    return C(t, n, function() {
      r = e[Xe](), C(t, n, function() {
        var o, i, s;
        try {
          o = r.next(), i = o.value, s = o.done;
        } catch (c) {
          t.error(c);
          return;
        }
        s ? t.complete() : t.next(i);
      }, 0, true);
    }), function() {
      return h(r?.return) && r.return();
    };
  });
}
function rt(e, n) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new g(function(t) {
    C(t, n, function() {
      var r = e[Symbol.asyncIterator]();
      C(t, n, function() {
        r.next().then(function(o) {
          o.done ? t.complete() : t.next(o.value);
        });
      }, 0, true);
    });
  });
}
function Ht(e, n) {
  return rt(Ke(e), n);
}
function Dt(e, n) {
  if (e != null) {
    if (Ge(e))
      return Bt(e, n);
    if (Ee(e))
      return Ut(e, n);
    if (De(e))
      return Nt(e, n);
    if (We(e))
      return rt(e, n);
    if (Ze(e))
      return Yt(e, n);
    if (Qe(e))
      return Ht(e, n);
  }
  throw Je(e);
}
function Gt(e, n) {
  return n ? Dt(e, n) : L(e);
}
function ie(e, n) {
  return R(function(t, r) {
    var o = 0;
    t.subscribe(O(r, function(i) {
      r.next(e.call(n, i, o++));
    }));
  });
}
var Wt = Array.isArray;
function Jt(e, n) {
  return Wt(n) ? e.apply(void 0, re([], Y(n))) : e(n);
}
function Xt(e) {
  return ie(function(n) {
    return Jt(e, n);
  });
}
function Zt(e, n, t, r, o, i, s, c) {
  var a = [], l = 0, u = 0, v = false, d = function() {
    v && !a.length && !l && n.complete();
  }, f = function(y) {
    return l < r ? p(y) : a.push(y);
  }, p = function(y) {
    l++;
    var S = false;
    L(t(y, u++)).subscribe(O(n, function(w) {
      n.next(w);
    }, function() {
      S = true;
    }, void 0, function() {
      if (S)
        try {
          l--;
          for (var w = function() {
            var z = a.shift();
            s || p(z);
          }; a.length && l < r; )
            w();
          d();
        } catch (z) {
          n.error(z);
        }
    }));
  };
  return e.subscribe(O(n, f, function() {
    v = true, d();
  })), function() {
  };
}
function Ae(e, n, t) {
  return t === void 0 && (t = 1 / 0), h(n) ? Ae(function(r, o) {
    return ie(function(i, s) {
      return n(r, i, o, s);
    })(L(e(r, o)));
  }, t) : (typeof n == "number" && (t = n), R(function(r, o) {
    return Zt(r, o, e, t);
  }));
}
function Kt(e) {
  return e === void 0 && (e = 1 / 0), Ae(Ue, e);
}
var Qt = ["addListener", "removeListener"];
var en = ["addEventListener", "removeEventListener"];
var tn = ["on", "off"];
function ve(e, n, t, r) {
  if (h(t) && (r = t, t = void 0), r)
    return ve(e, n, t).pipe(Xt(r));
  var o = Y(on(e) ? en.map(function(c) {
    return function(a) {
      return e[c](n, a, t);
    };
  }) : nn(e) ? Qt.map(Me(e, n)) : rn(e) ? tn.map(Me(e, n)) : [], 2), i = o[0], s = o[1];
  if (!i && Ee(e))
    return Ae(function(c) {
      return ve(c, n, t);
    })(L(e));
  if (!i)
    throw new TypeError("Invalid event target");
  return new g(function(c) {
    var a = function() {
      for (var l = [], u = 0; u < arguments.length; u++)
        l[u] = arguments[u];
      return c.next(1 < l.length ? l : l[0]);
    };
    return i(a), function() {
      return s(a);
    };
  });
}
function Me(e, n) {
  return function(t) {
    return function(r) {
      return e[t](n, r);
    };
  };
}
function nn(e) {
  return h(e.addListener) && h(e.removeListener);
}
function rn(e) {
  return h(e.on) && h(e.off);
}
function on(e) {
  return h(e.addEventListener) && h(e.removeEventListener);
}
function sn() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  var t = Mt(e), r = Pt(e, 1 / 0), o = e;
  return o.length ? o.length === 1 ? L(o[0]) : Kt(r)(Gt(o, t)) : Ot;
}
function ot(e, n) {
  return R(function(t, r) {
    var o = 0;
    t.subscribe(O(r, function(i) {
      return e.call(n, i, o++) && r.next(i);
    }));
  });
}
function cn(e, n) {
  return R(function(t, r) {
    var o = /* @__PURE__ */ new Set();
    t.subscribe(O(r, function(i) {
      var s = e ? e(i) : i;
      o.has(s) || (o.add(s), r.next(i));
    })), n && L(n).subscribe(O(r, function() {
      return o.clear();
    }, de));
  });
}
var N = {};
var E = {};
function T(e, n, t = 300) {
  if (e && n && n instanceof Function)
    it(e), N[e] = setTimeout(() => {
      n(), delete N[e];
    }, t);
  else
    throw new Error(
      e ? "Cannot create named timeout without a name" : "Cannot create a timeout without a callback"
    );
}
function it(e) {
  N[e] && (clearTimeout(N[e]), delete N[e]);
}
function st(e, n) {
  ct(e), E[e] = n;
}
function ct(e) {
  E && E[e] && (E[e] instanceof G ? E[e].unsubscribe() : E[e](), delete E[e]);
}
function an(e) {
  Object.keys(E).filter((n) => n.includes(e)).forEach((n) => ct(n));
}
function b(e, n, t, r = "debug", o = false, i = "SVG VIEWER") {
  if (window.debug || o) {
    const s = ["color: #E91E63", "color: #ffb300", "color: default"];
    t ? console[r](`%c[${i}]%c[${e}] %c${n}`, ...s, t) : console[r](`%c[${i}]%c[${e}] %c${n}`, ...s);
  }
}
function W(e) {
  let n = e.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g, "\\$&");
  const t = n.split(" ");
  for (const r of t)
    t.splice(t.indexOf(r), 1, [r.replace(/^\\/g, "")]);
  return n = t.join(" "), n;
}
function J(e) {
  return e ? e instanceof MouseEvent ? { x: e.clientX, y: e.clientY } : e.touches && e.touches.length > 0 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: -1, y: -1 } : { x: -1, y: -1 };
}
function ln(e) {
  if (!e) return {};
  let n = {};
  const t = e?.getBoundingClientRect() || {}, r = e.querySelectorAll("[id]");
  e.id = "svg-viewer-root";
  const o = (i) => {
    const s = i?.getBoundingClientRect() || {};
    n[i.id] = {
      x: Math.floor((s.left + s.width / 2 - t.left) / t.width * 1e5) / 1e5,
      y: Math.floor((s.top + s.height / 2 - t.top) / t.height * 1e5) / 1e5,
      w: Math.floor(s.width / t.width * 1e5) / 1e5,
      h: Math.floor(s.height / t.height * 1e5) / 1e5
    };
  };
  return n["svg-viewer-root"] = {
    x: 0.5,
    y: 0.5,
    w: 1,
    h: 1
  }, r.forEach(o), n;
}
function un(e, n, t) {
  const r = e.element?.querySelector(".svg-viewer__svg-overlays"), o = e.element?.querySelector("svg"), i = o?.querySelector(`#${W(n)}`);
  if (i && o && r) {
    const s = t || r?.getBoundingClientRect() || {}, c = i?.getBoundingClientRect() || {};
    return {
      x: (c.left + c.width / 2 - s.left) / s.width,
      y: (c.top + c.height / 2 - s.top) / s.height
    };
  } else
    b("DOM", `Unable to find element with ID ${n}`, void 0, "warn");
  return { x: -1, y: -1 };
}
function se(e, n, t, r = 1) {
  const o = e.element?.querySelector(".svg-viewer__svg-overlays");
  if (e.element?.querySelector("svg") && o) {
    const s = o?.getBoundingClientRect() || {};
    return {
      x: Math.max(0, Math.min(1, (n.x - s.left) / s.width * r)),
      y: Math.max(0, Math.min(1, (n.y - s.top) / s.height * r))
    };
  } else
    b("DOM", "Unable to find SVG element", void 0, "warn");
  return { x: -1, y: -1 };
}
function at(e, n) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
function lt(e, n, t) {
  return {
    x: e.x + (n.x - e.x) * t,
    y: e.y + (n.y - e.y) * t
  };
}
function fn(e) {
  if (!e) return "";
  const n = __spreadValues({}, e);
  for (const t in n)
    n[t] instanceof Object && (n[t] = `${n[t]}`);
  return n;
}
function Q(e) {
  return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
}
function hn(e) {
  for (var n = 2, t = "", r = e.length, o = 0, i = 0; i < r; i++)
    n = i % 3, i > 0 && i * 4 / 3 % 76 === 0 && (t += `\r
`), o |= e[i] << (16 >>> n & 24), (n === 2 || e.length - i === 1) && (t += String.fromCodePoint(
      Q(o >>> 18 & 63),
      Q(o >>> 12 & 63),
      Q(o >>> 6 & 63),
      Q(o & 63)
    ), o = 0);
  return t.substr(0, t.length - 2 + n) + (n === 2 ? "" : n === 1 ? "=" : "==");
}
function dn(e) {
  for (var n, t, r = e.length, o = 0, i = 0; i < r; i++)
    t = e.codePointAt(i) ?? 0, t > 65536 && i++, o += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
  n = new Uint8Array(o);
  for (var s = 0, c = 0; s < o; c++)
    t = e.codePointAt(c) ?? 0, t < 128 ? n[s++] = t : t < 2048 ? (n[s++] = 192 + (t >>> 6), n[s++] = 128 + (t & 63)) : t < 65536 ? (n[s++] = 224 + (t >>> 12), n[s++] = 128 + (t >>> 6 & 63), n[s++] = 128 + (t & 63)) : t < 2097152 ? (n[s++] = 240 + (t >>> 18), n[s++] = 128 + (t >>> 12 & 63), n[s++] = 128 + (t >>> 6 & 63), n[s++] = 128 + (t & 63), c++) : t < 67108864 ? (n[s++] = 248 + (t >>> 24), n[s++] = 128 + (t >>> 18 & 63), n[s++] = 128 + (t >>> 12 & 63), n[s++] = 128 + (t >>> 6 & 63), n[s++] = 128 + (t & 63), c++) : (n[s++] = 252 + (t >>> 30), n[s++] = 128 + (t >>> 24 & 63), n[s++] = 128 + (t >>> 18 & 63), n[s++] = 128 + (t >>> 12 & 63), n[s++] = 128 + (t >>> 6 & 63), n[s++] = 128 + (t & 63), c++);
  return n;
}
function yn(e) {
  return hn(dn(e));
}
var vn = new Int32Array(4);
var m = class _m {
  static hashStr(n, t = false) {
    return this.onePassHasher.start().appendStr(n).end(t);
  }
  static hashAsciiStr(n, t = false) {
    return this.onePassHasher.start().appendAsciiStr(n).end(t);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new _m();
  static _hex(n) {
    const t = _m.hexChars, r = _m.hexOut;
    let o, i, s, c;
    for (c = 0; c < 4; c += 1)
      for (i = c * 8, o = n[c], s = 0; s < 8; s += 2)
        r[i + 1 + s] = t.charAt(o & 15), o >>>= 4, r[i + 0 + s] = t.charAt(o & 15), o >>>= 4;
    return r.join("");
  }
  static _md5cycle(n, t) {
    let r = n[0], o = n[1], i = n[2], s = n[3];
    r += (o & i | ~o & s) + t[0] - 680876936 | 0, r = (r << 7 | r >>> 25) + o | 0, s += (r & o | ~r & i) + t[1] - 389564586 | 0, s = (s << 12 | s >>> 20) + r | 0, i += (s & r | ~s & o) + t[2] + 606105819 | 0, i = (i << 17 | i >>> 15) + s | 0, o += (i & s | ~i & r) + t[3] - 1044525330 | 0, o = (o << 22 | o >>> 10) + i | 0, r += (o & i | ~o & s) + t[4] - 176418897 | 0, r = (r << 7 | r >>> 25) + o | 0, s += (r & o | ~r & i) + t[5] + 1200080426 | 0, s = (s << 12 | s >>> 20) + r | 0, i += (s & r | ~s & o) + t[6] - 1473231341 | 0, i = (i << 17 | i >>> 15) + s | 0, o += (i & s | ~i & r) + t[7] - 45705983 | 0, o = (o << 22 | o >>> 10) + i | 0, r += (o & i | ~o & s) + t[8] + 1770035416 | 0, r = (r << 7 | r >>> 25) + o | 0, s += (r & o | ~r & i) + t[9] - 1958414417 | 0, s = (s << 12 | s >>> 20) + r | 0, i += (s & r | ~s & o) + t[10] - 42063 | 0, i = (i << 17 | i >>> 15) + s | 0, o += (i & s | ~i & r) + t[11] - 1990404162 | 0, o = (o << 22 | o >>> 10) + i | 0, r += (o & i | ~o & s) + t[12] + 1804603682 | 0, r = (r << 7 | r >>> 25) + o | 0, s += (r & o | ~r & i) + t[13] - 40341101 | 0, s = (s << 12 | s >>> 20) + r | 0, i += (s & r | ~s & o) + t[14] - 1502002290 | 0, i = (i << 17 | i >>> 15) + s | 0, o += (i & s | ~i & r) + t[15] + 1236535329 | 0, o = (o << 22 | o >>> 10) + i | 0, r += (o & s | i & ~s) + t[1] - 165796510 | 0, r = (r << 5 | r >>> 27) + o | 0, s += (r & i | o & ~i) + t[6] - 1069501632 | 0, s = (s << 9 | s >>> 23) + r | 0, i += (s & o | r & ~o) + t[11] + 643717713 | 0, i = (i << 14 | i >>> 18) + s | 0, o += (i & r | s & ~r) + t[0] - 373897302 | 0, o = (o << 20 | o >>> 12) + i | 0, r += (o & s | i & ~s) + t[5] - 701558691 | 0, r = (r << 5 | r >>> 27) + o | 0, s += (r & i | o & ~i) + t[10] + 38016083 | 0, s = (s << 9 | s >>> 23) + r | 0, i += (s & o | r & ~o) + t[15] - 660478335 | 0, i = (i << 14 | i >>> 18) + s | 0, o += (i & r | s & ~r) + t[4] - 405537848 | 0, o = (o << 20 | o >>> 12) + i | 0, r += (o & s | i & ~s) + t[9] + 568446438 | 0, r = (r << 5 | r >>> 27) + o | 0, s += (r & i | o & ~i) + t[14] - 1019803690 | 0, s = (s << 9 | s >>> 23) + r | 0, i += (s & o | r & ~o) + t[3] - 187363961 | 0, i = (i << 14 | i >>> 18) + s | 0, o += (i & r | s & ~r) + t[8] + 1163531501 | 0, o = (o << 20 | o >>> 12) + i | 0, r += (o & s | i & ~s) + t[13] - 1444681467 | 0, r = (r << 5 | r >>> 27) + o | 0, s += (r & i | o & ~i) + t[2] - 51403784 | 0, s = (s << 9 | s >>> 23) + r | 0, i += (s & o | r & ~o) + t[7] + 1735328473 | 0, i = (i << 14 | i >>> 18) + s | 0, o += (i & r | s & ~r) + t[12] - 1926607734 | 0, o = (o << 20 | o >>> 12) + i | 0, r += (o ^ i ^ s) + t[5] - 378558 | 0, r = (r << 4 | r >>> 28) + o | 0, s += (r ^ o ^ i) + t[8] - 2022574463 | 0, s = (s << 11 | s >>> 21) + r | 0, i += (s ^ r ^ o) + t[11] + 1839030562 | 0, i = (i << 16 | i >>> 16) + s | 0, o += (i ^ s ^ r) + t[14] - 35309556 | 0, o = (o << 23 | o >>> 9) + i | 0, r += (o ^ i ^ s) + t[1] - 1530992060 | 0, r = (r << 4 | r >>> 28) + o | 0, s += (r ^ o ^ i) + t[4] + 1272893353 | 0, s = (s << 11 | s >>> 21) + r | 0, i += (s ^ r ^ o) + t[7] - 155497632 | 0, i = (i << 16 | i >>> 16) + s | 0, o += (i ^ s ^ r) + t[10] - 1094730640 | 0, o = (o << 23 | o >>> 9) + i | 0, r += (o ^ i ^ s) + t[13] + 681279174 | 0, r = (r << 4 | r >>> 28) + o | 0, s += (r ^ o ^ i) + t[0] - 358537222 | 0, s = (s << 11 | s >>> 21) + r | 0, i += (s ^ r ^ o) + t[3] - 722521979 | 0, i = (i << 16 | i >>> 16) + s | 0, o += (i ^ s ^ r) + t[6] + 76029189 | 0, o = (o << 23 | o >>> 9) + i | 0, r += (o ^ i ^ s) + t[9] - 640364487 | 0, r = (r << 4 | r >>> 28) + o | 0, s += (r ^ o ^ i) + t[12] - 421815835 | 0, s = (s << 11 | s >>> 21) + r | 0, i += (s ^ r ^ o) + t[15] + 530742520 | 0, i = (i << 16 | i >>> 16) + s | 0, o += (i ^ s ^ r) + t[2] - 995338651 | 0, o = (o << 23 | o >>> 9) + i | 0, r += (i ^ (o | ~s)) + t[0] - 198630844 | 0, r = (r << 6 | r >>> 26) + o | 0, s += (o ^ (r | ~i)) + t[7] + 1126891415 | 0, s = (s << 10 | s >>> 22) + r | 0, i += (r ^ (s | ~o)) + t[14] - 1416354905 | 0, i = (i << 15 | i >>> 17) + s | 0, o += (s ^ (i | ~r)) + t[5] - 57434055 | 0, o = (o << 21 | o >>> 11) + i | 0, r += (i ^ (o | ~s)) + t[12] + 1700485571 | 0, r = (r << 6 | r >>> 26) + o | 0, s += (o ^ (r | ~i)) + t[3] - 1894986606 | 0, s = (s << 10 | s >>> 22) + r | 0, i += (r ^ (s | ~o)) + t[10] - 1051523 | 0, i = (i << 15 | i >>> 17) + s | 0, o += (s ^ (i | ~r)) + t[1] - 2054922799 | 0, o = (o << 21 | o >>> 11) + i | 0, r += (i ^ (o | ~s)) + t[8] + 1873313359 | 0, r = (r << 6 | r >>> 26) + o | 0, s += (o ^ (r | ~i)) + t[15] - 30611744 | 0, s = (s << 10 | s >>> 22) + r | 0, i += (r ^ (s | ~o)) + t[6] - 1560198380 | 0, i = (i << 15 | i >>> 17) + s | 0, o += (s ^ (i | ~r)) + t[13] + 1309151649 | 0, o = (o << 21 | o >>> 11) + i | 0, r += (i ^ (o | ~s)) + t[4] - 145523070 | 0, r = (r << 6 | r >>> 26) + o | 0, s += (o ^ (r | ~i)) + t[11] - 1120210379 | 0, s = (s << 10 | s >>> 22) + r | 0, i += (r ^ (s | ~o)) + t[2] + 718787259 | 0, i = (i << 15 | i >>> 17) + s | 0, o += (s ^ (i | ~r)) + t[9] - 343485551 | 0, o = (o << 21 | o >>> 11) + i | 0, n[0] = r + n[0] | 0, n[1] = o + n[1] | 0, n[2] = i + n[2] | 0, n[3] = s + n[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(_m.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(n) {
    const t = this._buffer8, r = this._buffer32;
    let o = this._bufferLength, i, s;
    for (s = 0; s < n.length; s += 1) {
      if (i = n.charCodeAt(s), i < 128)
        t[o++] = i;
      else if (i < 2048)
        t[o++] = (i >>> 6) + 192, t[o++] = i & 63 | 128;
      else if (i < 55296 || i > 56319)
        t[o++] = (i >>> 12) + 224, t[o++] = i >>> 6 & 63 | 128, t[o++] = i & 63 | 128;
      else {
        if (i = (i - 55296) * 1024 + (n.charCodeAt(++s) - 56320) + 65536, i > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        t[o++] = (i >>> 18) + 240, t[o++] = i >>> 12 & 63 | 128, t[o++] = i >>> 6 & 63 | 128, t[o++] = i & 63 | 128;
      }
      o >= 64 && (this._dataLength += 64, _m._md5cycle(this._state, r), o -= 64, r[0] = r[16]);
    }
    return this._bufferLength = o, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(n) {
    const t = this._buffer8, r = this._buffer32;
    let o = this._bufferLength, i, s = 0;
    for (; ; ) {
      for (i = Math.min(n.length - s, 64 - o); i--; )
        t[o++] = n.charCodeAt(s++);
      if (o < 64)
        break;
      this._dataLength += 64, _m._md5cycle(this._state, r), o = 0;
    }
    return this._bufferLength = o, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(n) {
    const t = this._buffer8, r = this._buffer32;
    let o = this._bufferLength, i, s = 0;
    for (; ; ) {
      for (i = Math.min(n.length - s, 64 - o); i--; )
        t[o++] = n[s++];
      if (o < 64)
        break;
      this._dataLength += 64, _m._md5cycle(this._state, r), o = 0;
    }
    return this._bufferLength = o, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const n = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [n[0], n[1], n[2], n[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(n) {
    const t = n.buffer, r = n.state, o = this._state;
    let i;
    for (this._dataLength = n.length, this._bufferLength = n.buflen, o[0] = r[0], o[1] = r[1], o[2] = r[2], o[3] = r[3], i = 0; i < t.length; i += 1)
      this._buffer8[i] = t.charCodeAt(i);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(n = false) {
    const t = this._bufferLength, r = this._buffer8, o = this._buffer32, i = (t >> 2) + 1;
    this._dataLength += t;
    const s = this._dataLength * 8;
    if (r[t] = 128, r[t + 1] = r[t + 2] = r[t + 3] = 0, o.set(_m.buffer32Identity.subarray(i), i), t > 55 && (_m._md5cycle(this._state, o), o.set(_m.buffer32Identity)), s <= 4294967295)
      o[14] = s;
    else {
      const c = s.toString(16).match(/(.*?)(.{0,8})$/);
      if (c === null) return n ? vn : "";
      const a = parseInt(c[2], 16), l = parseInt(c[1], 16) || 0;
      o[14] = a, o[15] = l;
    }
    return _m._md5cycle(this._state, o), n ? this._state : _m._hex(this._state);
  }
};
if (m.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
var ee2 = { top: 0, left: 0, height: 0, width: 0 };
var ne = class {
  /** Unique Identifier for the Viewer */
  id;
  /** URL associated with the map data */
  url;
  /** Element the SVG is attached */
  element;
  /** Labels to render over the SVG */
  labels;
  /** Features to render over the SVG */
  features;
  /** Actions to listen for on the SVG */
  actions;
  /** Point or Element to focus on in the viewer */
  focus;
  /** Styles to apply the SVG */
  styles;
  /** Raw SVG data */
  svg_data;
  /** Zoom level of the SVG. Number from 1 - 10 */
  zoom;
  /** Center point of the SVG on the view */
  center;
  /** Rotation angle of the SVG on the view */
  rotate;
  /** Ratio that the height to width of the SVG is */
  ratio;
  /** Ratio that the height to width of the SVG is */
  svg_ratio;
  /** Box dimensions for the root element of the viewer */
  box;
  /** Zoom level of the SVG. Number from 1 - 10 */
  desired_zoom;
  /** Center point of the SVG on the view */
  desired_center;
  /** Whether zoom and center still need updating */
  needs_update;
  /**  */
  options;
  /** Max resolution for the render iframe image */
  max_resolution;
  /**  */
  updated_count;
  /** Mapping of element positions to their IDs */
  mappings;
  /** Whether to use GPU for rendering map view changes */
  use_gpu;
  /** Ratio of the map rendered to the container element */
  content_ratio;
  contains(n) {
    this.svg_data.includes(`id="${n}"`);
  }
  constructor(n) {
    if (this.id = n.id || `map-${Math.floor(Math.random() * 999999)}`, this.url = n.url || `local-${m.hashAsciiStr(n.svg_data || "")}`, this.element = n.element || null, this.labels = n.labels || [], this.features = n.features || [], this.actions = n.actions || [], this.styles = n.styles || {}, this.svg_data = n.svg_data || "", this.content_ratio = n.content_ratio || { x: 1, y: 1 }, this.zoom = n.zoom || 1, this.center = { x: n.center?.x ?? 0.5, y: n.center?.y ?? 0.5 }, this.rotate = n.rotate || 0, this.ratio = n.ratio || 1, this.svg_ratio = n.svg_ratio || 1, this.max_resolution = n.max_resolution || window.innerWidth * window.innerHeight * 10, this.focus = n.focus || null, this.options = n.options || {}, this.mappings = n.mappings || {}, this.box = {
      top: (n.box || ee2).top,
      left: (n.box || ee2).left,
      height: (n.box || ee2).height,
      width: (n.box || ee2).width
    }, this.desired_zoom = n.desired_zoom || n.zoom || this.zoom, this.desired_center = {
      x: n.desired_center?.x || this.center.x,
      y: n.desired_center?.y || this.center.y
    }, this.updated_count = (n.updated_count || 0) + 1, this.zoom !== this.desired_zoom) {
      const t = this.desired_zoom - this.zoom >= 0 ? 1 : -1, r = Math.min(0.05, Math.abs(this.desired_zoom - this.zoom)), o = Math.round(r / Math.abs(this.desired_zoom - this.zoom) * 1e3) / 1e3;
      this.zoom = r === 0.05 ? this.zoom + t * r : this.desired_zoom, this.center = {
        x: this.center.x + (this.desired_center.x - this.center.x) * o,
        y: this.center.y + (this.desired_center.y - this.center.y) * o
      };
    } else if (this.desired_center.x !== this.center.x || this.desired_center.y !== this.center.y) {
      const t = this.desired_center.x - this.center.x >= 0 ? 1 : -1, r = this.desired_center.y - this.center.y >= 0 ? 1 : -1, o = Math.min(0.01, Math.abs(this.desired_center.x - this.center.x)), s = o / Math.abs(this.desired_center.x - this.center.x) * Math.abs(this.desired_center.y - this.center.y);
      this.center = {
        x: this.center.x + t * o,
        y: this.center.y + r * s
      };
    }
    this.needs_update = this.desired_zoom !== this.zoom || this.desired_center.x !== this.center.x || this.desired_center.y !== this.center.y, this.use_gpu = n?.use_gpu ?? true;
  }
};
var F = new Ye([]);
var ut = new Se();
var pn = ut.pipe(ot((e) => e === "resize"));
function mn(e) {
  ut.next(e);
}
function $(e) {
  return F.getValue().find((n) => n.id === e);
}
function x(e, n) {
  if (e = X().find((o) => o.id === (e instanceof ne ? e.id : e)), !(e instanceof ne)) return null;
  delete n.url;
  const r = new ne(__spreadValues(__spreadValues({}, e), n));
  return ft(r), r.needs_update && T(`${e.id}_updating`, () => x(r, {}), 16), r;
}
function gn(e) {
  return F.pipe(
    ot((n) => !!n.find((t) => t.id === e)),
    ie((n) => n.find((t) => t.id === e)),
    cn()
  );
}
function ft(e) {
  const n = X().filter((t) => t.id !== e.id);
  n.push(e), F.next(n);
}
function _n(e) {
  const n = X().filter((t) => t.id !== e.id);
  F.next(n);
}
function X() {
  return F.getValue();
}
var Pe = new Ye({});
var ke = {};
var Z = false;
var ce = false;
var U;
var P;
var oe;
var A;
var k;
var _;
var I;
var bn = [
  "click",
  "mousedown",
  "mousemove",
  "mouseup",
  "touchstart",
  "touchmove",
  "touchend",
  "mousewheel",
  "wheel"
];
var wn = [
  "mousedown",
  "mousemove",
  "mousewheel",
  "wheel",
  "touchstart",
  "touchmove"
];
var Ie = false;
window.addEventListener("blur", () => H());
function xn(e) {
  const n = JSON.stringify(e.focus);
  if (e.focus && n !== ke[e.id]) {
    let t = { x: 0, y: 0 };
    const r = Math.max(0.5, Math.min(10, e.focus.zoom_level || 1));
    typeof e.focus.location == "string" ? t = un(e, e.focus.location) : t = e.focus.location, ke[e.id] = n;
    const o = { x: 1 - t.x, y: 1 - t.y };
    x(e, {
      center: o,
      desired_center: o,
      zoom: r,
      desired_zoom: r
    });
  }
}
function Sn() {
  Ie || (window.addEventListener("resize", () => mn("resize")), window.addEventListener("blur", () => H()), Ie = true);
}
function En(e, n = bn) {
  const t = Pe.getValue(), r = e.element;
  t[e.id] && t[e.id].unsubscribe();
  const o = [];
  for (const i of n)
    o.push(
      ve(r, i).pipe(ie((s) => ({ id: e.id, type: i, event: s })))
    );
  t[e.id] = sn(...o).subscribe((i) => {
    const { id: s, type: c, event: a } = i, l = a;
    switch (wn.includes(c) && l.preventDefault(), On(i), c) {
      case "touchstart":
      case "mousedown":
        l.touches?.length >= 2 ? $n(s, l) : Ln(s, l);
        break;
      case "touchend":
      case "mouseup":
        !ce && !Z && An(s, l), H();
        break;
      case "mousewheel":
      case "wheel":
        Cn(s, l);
        break;
    }
  }), Pe.next(t);
}
function An(e, n) {
  const t = $(e);
  t && b("INPUT", "Clicked:", se(t, J(n)));
}
function Ln(e, n) {
  if (Z) return;
  b("INPUT", "Starting panning...");
  const t = $(e);
  A && window.removeEventListener("mousemove", A), A && window.removeEventListener("mouseup", k), _ && window.removeEventListener("touchmove", _), _ && window.removeEventListener("touchend", I), t && !t.options.disable_pan && (U = J(n), n instanceof MouseEvent ? (A = (r) => qe(e, r, U), k = () => H(), window.addEventListener("mousemove", A), window.addEventListener("mouseup", k)) : (_ = (r) => qe(e, r, U), I = () => H(), window.addEventListener("touchmove", _), window.addEventListener("touchend", I)), T("pan_start", () => ce = true, 200));
}
function qe(e, n, t = U) {
  if (Z) return;
  ce = true;
  const r = $(e);
  if (r) {
    const o = J(n), i = {
      x: Math.max(
        0,
        Math.min(
          1,
          (o.x - t.x) / r.box.width / r.desired_zoom / r.svg_ratio + r.center.x
        )
      ),
      y: Math.max(
        0,
        Math.min(
          1,
          (o.y - t.y) / r.box.height / r.desired_zoom / r.svg_ratio + r.center.y
        )
      )
    };
    U = o, x(r, { center: i, desired_center: i });
  }
}
function $n(e, n) {
  b("INPUT", "Starting pinching..."), _ && window.removeEventListener("touchmove", _);
  const t = $(e);
  if (Z = true, t && !t.options.disable_zoom) {
    const r = [
      { x: n.touches[0].clientX, y: n.touches[0].clientY },
      { x: n.touches[1].clientX, y: n.touches[1].clientY }
    ], o = r.map((c) => se(t, c)), { x: i, y: s } = {
      x: (o[0].x + o[1].x) / 2,
      y: (o[0].y + o[1].y) / 2
    };
    P = { x: 1 - i, y: 1 - s }, oe = at(r[0], r[1]), n instanceof MouseEvent || (_ = (c) => c.touches.length >= 2 ? zn(e, c, oe) : "", window.addEventListener("touchmove", _));
  }
}
function zn(e, n, t = oe) {
  const r = $(e);
  if (r && !r.options.disable_zoom) {
    const o = [
      { x: n.touches[0].clientX, y: n.touches[0].clientY },
      { x: n.touches[1].clientX, y: n.touches[1].clientY }
    ], i = at(o[0], o[1]), s = Math.max(0.5, Math.min(10, r.zoom * i / t)), c = 1 - r.zoom / s, a = s != r.zoom ? lt(r.center, P, c) : r.center;
    oe = i, x(r, {
      zoom: s,
      center: a,
      desired_zoom: s,
      desired_center: a
    });
  }
}
function H() {
  b("INPUT", "Ending pinch/pan..."), it("pan_start"), Z = false, ce = false, A && window.removeEventListener("mousemove", A), k && window.removeEventListener("mouseup", k), _ && window.removeEventListener("touchmove", _), I && window.removeEventListener("touchend", I), A = k = _ = I = P = null;
}
function Cn(e, n) {
  const t = $(e);
  if (t) {
    const r = n.deltaY >= 0 ? -0.02 : 0.02, o = Math.min(10, Math.max(0.5, t.zoom * (1 + r))), { x: i, y: s } = se(t, J(n));
    P = { x: 1 - i, y: 1 - s }, T("clear_action_start", () => P = null);
    const c = 1 - t.zoom / o, a = o != t.zoom ? lt(t.center, P, c) : t.center;
    x(t, {
      zoom: o,
      center: a,
      desired_zoom: o,
      desired_center: a
    });
  }
}
function On(e) {
  const { id: n, type: t, event: r } = e, o = $(n);
  if (!o || !o.actions?.length) return;
  const s = o.actions.sort((c, a) => (a.priority || 0) - (c.priority || 0)).find(
    (c) => c.action.includes(t) && (c.id === "*" || c.id === r.target?.id)
  );
  s && s.callback(r, se(o, J(r)));
}
var j = {};
var Ve = {};
var pe = {};
var me = {};
var ge = {};
var D = {};
var B = {};
st(
  "on_resize",
  pn.subscribe(() => {
    const e = X();
    for (const n of e)
      try {
        T(`resize-${n.id}`, () => yt(n));
      } catch (t) {
        console.warn(t);
      }
  })
);
async function Tn(e) {
  const n = e.element;
  if (!n) throw new Error("No element set on viewer");
  const t = document.createElement("div"), r = document.createElement("style"), o = document.createElement("div"), i = document.createElement("div"), s = document.createElement("div"), c = document.createElement("div"), a = document.createElement("iframe");
  i.appendChild(s), i.appendChild(c), t.appendChild(r), t.appendChild(o), o.appendChild(i), t.classList.add("svg-viewer"), t.id = e.id, r.id = e.id, a.id = "svg-display", a.classList.add("svg-viewer__iframe"), o.classList.add("svg-viewer__view-container"), i.classList.add("svg-viewer__render-container"), c.classList.add("svg-viewer__svg-overlays"), s.classList.add("svg-viewer__svg-output"), s.id = "svg-output", s.innerHTML = e.svg_data;
  const l = s.firstElementChild?.viewBox?.baseVal || {};
  o.style.width = `${l.width}px`, o.style.height = `${l.height}px`, c.style.width = `${l.width}px`, c.style.height = `${l.height}px`, c.appendChild(a), n.appendChild(t);
  const u = o?.getBoundingClientRect() || {}, v = x(e, { box: u });
  v && (e = v, await ht(e), En(e), Sn(), yt(e));
}
function ht(e) {
  return new Promise((n) => {
    requestAnimationFrame(() => {
      const t = e.element?.querySelector(
        "svg"
      );
      if (!t || !t.clientWidth)
        return T(
          `${e.id}-setup`,
          () => ht(e).then((o) => n()),
          100
        );
      const r = Ve[e.url] || ln(t);
      Ve[e.url] = r, x(e, { mappings: r }), t.style.display = "none", Mn(e), Le(e), n();
    });
  });
}
function dt(e) {
  return j[e.id] || (j[e.id] = new Promise((n) => {
    const t = requestAnimationFrame(() => {
      if (!j[e.id]) return;
      const r = e.element;
      if (!r) throw new Error("No element set on viewer");
      const o = r.querySelector("style");
      let i = "";
      const s = r.querySelector(
        ".svg-viewer__render-container"
      ), c = `scale(${e.zoom * e.svg_ratio})`;
      if (!s || !o)
        throw new Error("Viewer is not setup yet.");
      const a = (e.center.x - 0.5) * (100 * e.zoom * e.svg_ratio), l = (e.center.y - 0.5) * (100 * e.zoom * e.svg_ratio), u = e.use_gpu ? `translate3d(${a}%, ${l}%, 0)` : `translate(${a}%, ${l}%)`;
      s.style.transform = `${u} ${c} rotate(${e.rotate}deg)`, i += `#${e.id} .svg-viewer__svg-overlay-item > *:not([no-scale="true"]) { transform: rotate(-${e.rotate}deg) scale(${1 / e.zoom * (1 / e.svg_ratio)}); }`, i += `#${e.id} .svg-viewer__svg-overlay-item > * { transform: rotate(-${e.rotate}deg); height: 100%; width: 100%; }`, o.innerHTML = i, _e(e), xn(e), Le(e), delete j[e.id], cancelAnimationFrame(t), n();
    });
  })), j[e.id];
}
async function Mn(e) {
  const n = JSON.stringify(__spreadValues({}, e.styles)) || "";
  if (n.localeCompare(D[e.id])) {
    const t = e.element;
    if (!t) throw new Error("No element set on viewer");
    const r = t.querySelector(
      ".svg-viewer__iframe"
    ), o = t.querySelector(
      ".svg-viewer__svg-output"
    );
    if (!r) throw new Error("No iframe created for viewer");
    const i = o.firstElementChild?.viewBox?.baseVal || {};
    let s = `${e.svg_data}`;
    s = /<svg[^>]*width="[^>]*>/.test(s) ? s : s.replace(
      "<svg",
      `<svg width="${i.width}" height="${i.height}" `
    );
    const c = `
<script>
    function updateStyles(evt) {
        try {
            var message = JSON.parse(evt.data);
            if (message.id === 'svg-styles') {
                const style_el = document.getElementById('style');
                style_el.innerHTML = message.content;
            }
        } catch(e) {}
    }

    if (window.addEventListener) {
        window.addEventListener("message", updateStyles, false);
    } else {
        window.attachEvent("onmessage", updateStyles);
    }
<\/script>`, a = {}, l = vt2(__spreadValues(__spreadValues({}, e.styles), a)), d = "data:text/html;base64," + yn(
      `<html><head><style>*{overflow:hidden;}html,body{padding:0;margin:0;}</style><style id="style">${l}</style>${c}</head><body>${s}</body></html>`
    );
    r.src = d, D[e.id] = n;
  }
}
async function _e(e) {
  if ((JSON.stringify(__spreadValues({}, e.styles)) || "").localeCompare(D[e.id])) {
    const t = e.element;
    if (!t) throw new Error("No element set on viewer");
    const r = t.querySelector(
      ".svg-viewer__iframe"
    );
    if (!r) throw new Error("No iframe created for viewer");
    if (!r.contentWindow) {
      r.onload = () => {
        setTimeout(() => _e(e), 50), setTimeout(() => _e(e), 500);
      };
      return;
    }
    const o = {};
    o[`[empty${Math.floor(Math.random() * 999999)}]`] = {};
    const i = vt2(__spreadValues(__spreadValues({}, e.styles), o));
    r.contentWindow.postMessage(
      JSON.stringify({ id: "svg-styles", content: i }),
      "*"
    );
  }
}
async function yt(e) {
  return new Promise((n) => {
    B[e.id] || (B[e.id] = []), B[e.id].push(n), T(
      `resize-${e.id}`,
      () => {
        const t = e.element;
        if (!t) throw new Error("No element set on viewer");
        const r = t.querySelector(
          ".svg-viewer__view-container"
        ), o = t.querySelector(".svg-viewer__svg-overlays"), i = t.querySelector(
          `#${W(e.id)}`
        ), s = t.querySelector(
          ".svg-viewer"
        ), c = t.querySelector(
          ".svg-viewer__svg-output"
        ), a = t.querySelector("iframe"), l = s?.getBoundingClientRect() || {}, u = r?.getBoundingClientRect() || {};
        if (!o || !c || !a || !r)
          throw new Error("Viewer elements not ready yet.");
        requestAnimationFrame(async () => {
          const v = l.height / l.width, d = c.firstElementChild?.viewBox?.baseVal || {}, f = d.height / d.width;
          c.firstElementChild && (c.firstElementChild.style.width = "200%");
          const p = (l.width - 32) * Math.min(1, v / f), y = { width: p, height: p * f };
          o.style.width = d.width + "px", o.style.height = d.height + "px", r.style.width = d.width + "px", r.style.height = d.height + "px", a.style.width = d.width + "px", a.style.height = d.height + "px", a.width = `${d.width}`, a.height = `${d.height}`;
          const S = Math.min(
            l.height / d.height,
            l.width / d.width
          ), w = i?.getBoundingClientRect(), z = o?.getBoundingClientRect();
          let $e = { x: 1, y: 1 };
          w && z && ($e = {
            x: z.width * S * 0.975 / w.width,
            y: z.height * S * 0.975 / w.height
          }), D[e.id] = "";
          let ze = x(e, {
            ratio: y.height / y.width,
            svg_ratio: S,
            box: u,
            content_ratio: $e
          });
          !ze || (e = ze, !await dt(e).catch((ae) => (console.warn(ae), false))) || (B[e.id].forEach((ae) => ae()), B[e.id] = []);
        });
      },
      100
    );
  });
}
function Le(e) {
  const n = e.element?.querySelector("svg");
  if (!Object.keys(e.mappings || {}).length) return;
  const t = e.element?.querySelector(
    ".svg-viewer__svg-overlays"
  );
  if (!t || !n) return;
  if (!t.getBoundingClientRect().width)
    return T(
      `${e.id}|render-overlays`,
      () => Le(e),
      50
    );
  requestAnimationFrame(() => {
    Pn(e), In(e), kn(e);
  });
}
function Pn(e) {
  const n = e.labels.filter(
    (r) => !r.zoom_level || r.zoom_level <= e.zoom
  ), t = JSON.stringify(n);
  if (t !== pe[e.id]) {
    const r = e.element?.querySelector(
      ".svg-viewer__svg-overlays"
    );
    if (!r) return;
    Array.from(
      r.querySelectorAll("[label]")
    ).filter((i) => i.parentNode).forEach((i) => r.removeChild(i));
    for (const i of n) {
      let s = { x: 0, y: 0 }, c = "~Nothing~";
      typeof i.location == "string" ? (s = e.mappings[i.location] || s, c = `#${i.location}`) : (i.location?.y || i.location?.x) && (s = i.location, c = `loc-${s.x}-${s.y}`);
      const a = document.createElement("div");
      a.setAttribute("label", "true"), a.classList.add("svg-viewer__svg-overlay-item"), a.classList.add("label"), a.style.top = `${s.y * 100}%`, a.style.left = `${s.x * 100}%`;
      const l = document.createElement("div"), u = document.createElement("label");
      u.classList.add("svg-viewer__label"), u.setAttribute("for", c), i.css_class?.length && u.classList.add(...i.css_class), i.z_index && (a.style.zIndex = `${i.z_index}`), u.textContent = i.content, l.appendChild(u), a.appendChild(l), r.appendChild(a);
    }
    b("RENDER", `Added ${e.labels.length} labels to view.`), pe[e.id] = t;
  }
}
function kn(e) {
  const n = JSON.stringify(
    e.features.map((t) => __spreadProps(__spreadValues({}, t), {
      content: "",
      data: fn(t.data)
    }))
  );
  if (n !== me[e.id]) {
    const t = e.element?.querySelector(
      ".svg-viewer__svg-overlays"
    );
    if (!t) return console.log("Unable to get overlay element.");
    const r = t.querySelectorAll(".feature"), o = [];
    window.overlay_el = t, r.forEach((i) => {
      if (!i.parentNode) return;
      const s = i.getAttribute("track-id");
      s === "none" || !e.features.find((c) => c.track_id === s) ? t.removeChild(i) : o.push(i);
    });
    for (const i of e.features) {
      if (!i.content || o.includes(i.content))
        continue;
      let s = { x: 0, y: 0 }, c = { w: 0, h: 0 };
      const a = document.createElement("button");
      typeof i.location == "string" ? (a.id = `${i.location}`, s = e.mappings[i.location] || s, (i.hover || i.full_size) && (c = e.mappings[i.location] || c)) : (i.location?.y || i.location?.x) && (s = i.location), !(!s.x && !s.y) && (a.classList.add("svg-viewer__svg-overlay-item"), a.setAttribute("feature", "true"), a.setAttribute(
        "track-id",
        `${i.track_id || "none"}`
      ), a.classList.add("feature"), i.z_index && (a.style.zIndex = `${i.z_index}`), i.hover && a.classList.add(
        "svg-viewer__svg-overlay-item__hover"
      ), a.style.top = `${s.y * 100}%`, a.style.left = `${s.x * 100}%`, c.w || c.h ? (a.style.width = `${c.w * 100}%`, a.style.height = `${c.h * 100}%`) : (a.style.width = "1%", a.style.height = `${1 / e.ratio}%`), a.style.transform = "translate(-50%, -50%)", i.content instanceof Node && a.appendChild(i.content), t.appendChild(a));
    }
    b("RENDER", `Added ${e.features.length} features to view.`), me[e.id] = n;
  }
}
function In(e) {
  const n = JSON.stringify(
    e.actions.map((t) => __spreadProps(__spreadValues({}, t), { callback: "" }))
  );
  if (n !== ge[e.id]) {
    const t = e.element?.querySelector(
      ".svg-viewer__svg-overlays"
    );
    if (!t) return;
    Array.from(
      t.querySelectorAll(".action-zone")
    ).filter((o) => o.parentNode && t.contains(o.parentNode)).forEach((o) => t.removeChild(o));
    for (const o of e.actions) {
      if (!o.action || !o.id || o.id === "*" || o.zone === false || t.querySelector(
        `#${W(o.id)}`
      )) continue;
      const s = document.createElement("button");
      s.id = `${o.id}`;
      const c = e.mappings[o.id] || { x: 0, y: 0 }, a = e.mappings[o.id] || { w: 0, h: 0 };
      s.classList.add("svg-viewer__svg-overlay-item"), s.classList.add("action-zone"), s.style.top = `${c.y * 100}%`, s.style.left = `${c.x * 100}%`, (a.w || a.h) && (s.style.width = `${a.w * 100}%`, s.style.height = `${a.h * 100}%`, s.style.transform = "translate(-50%, -50%)"), t.appendChild(s);
    }
    ge[e.id] = n;
  }
}
function vt2(e) {
  let n = "";
  for (const t in e) {
    if (!e[t])
      continue;
    let r = "";
    for (const o in e[t])
      e[t][o] && (r += `${o}: ${e[t][o]}; `);
    n += `svg ${t.split(" ").map((o) => W(o)).join(" ")} { ${r} } `;
  }
  return n;
}
var ue = {};
var be = {};
function Nn(e) {
  for (const n in e)
    be[n.toLowerCase()] = e[n];
}
async function Un(e) {
  let t = X().find((o) => o.url === e.url);
  if (t) return t.id;
  const r = e.svg_data || await qn(e.url);
  if (!r) throw new Error("No SVG data to display");
  return t = new ne(__spreadProps(__spreadValues({}, e), { svg_data: r })), st(
    `${t.id}-render`,
    gn(t.id).subscribe(
      (o) => dt(o).catch((i) => console.warn(i))
    )
  ), ft(t), await Tn(t), t.id;
}
function Yn(e, n) {
  return x(e, n);
}
function Hn(e) {
  const n = $(e);
  if (!n) return;
  const t = n.element?.querySelector(".svg-viewer");
  t && (n.element.removeChild(t), _n(n), an(`${e}`));
}
async function qn(e = "") {
  const n = new Headers();
  if (e.startsWith(location.origin) || e.startsWith("/"))
    for (const i in be)
      n.append(i, be[i]);
  if (ue[e]) return ue[e];
  const t = { text: async () => "" };
  let r = await fetch(e, { headers: n }).catch((i) => (b("SVG VIEWER", "Failed to load map", i, "error"), t));
  r.status >= 400 && (b("SVG VIEWER", "Failed to load map", r.statusText, "error"), r = t);
  const o = await r.text();
  return ue[e] = o, o;
}
function Dn() {
  let e = document.getElementById("svg-viewer-global");
  e || (e = document.createElement("style"), e.id = "svg-viewer-global", e.innerHTML = Vn, document.head.appendChild(e), b("Styles", "Added global viewer styles to document"));
}
var Vn = `
    .svg-viewer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
    .svg-viewer__view-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .svg-viewer__render-container {
        position: absolute;
        top: 0%;
        left: 0%;
        right: 0%;
        bottom: 0%;
        transform-box: fill-box;
    }

    .svg-viewer__svg-output {
        position: absolute;
        top: -100%;
        left: -100%;
        right: -100%;
        bottom: -100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateZ(0);
        pointer-events: none;
    }

    .svg-viewer__svg-output svg {
        opacity: 0;
        height: auto;
        max-width: 200%;
        max-height: 200%;
        width: 2000px;
    }

    .svg-viewer__svg-overlays {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    .svg-viewer__label {
        text-shadow: black 1px 1px;
        color: white;
        white-space: pre-line;
        text-align: center;
        min-width: 10em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1
    }

    .svg-viewer__svg-overlay-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0.1%;
        width: 0.1%;
        position: absolute;
        transform-origin: center;
    }

    .svg-viewer__svg-overlay-item > * {
        will-change: transform;
    }

    .svg-viewer__svg-overlay-item__hover {
        pointer-events: auto;
    }

    .svg-viewer__svg-overlay-item__hover > * {
        display: none;
    }

    .svg-viewer__svg-overlay-item__hover:hover > * {
        display: initial;
    }

    .svg-viewer__svg-overlay-item.action-zone {
        pointer-events: auto;
        background: none;
        outline: none;
        border: none;
    }
`;

// libs/events/src/lib/validators.ts
var endInFuture = (control) => {
  const date = control.parent?.get("date");
  if (date && isAfter(Date.now(), addMinutes(date.value, control.value))) {
    return { duration: true };
  }
  return null;
};

// libs/bookings/src/lib/booking.utilities.ts
function setBookingAsset(form, resource) {
  if (!resource)
    return form.patchValue({ asset_id: void 0 });
  form.patchValue({
    asset_id: resource.id,
    asset_name: resource.name,
    map_id: resource.map_id || resource.id,
    description: resource.name,
    zones: resource.zone ? [resource.zone?.parent_id, resource.zone?.id] : [],
    booking_asset: resource
  }, { emitEvent: false });
}
function generateBookingForm(booking = new Booking()) {
  const form = new FormGroup({
    id: new FormControl(booking.id || ""),
    parent_id: new FormControl(booking.parent_id || ""),
    event_id: new FormControl(booking.event_id || ""),
    ical_uid: new FormControl(booking.extension_data.ical_uid || ""),
    date: new FormControl(booking.date, [Validators.required]),
    date_end: new FormControl(booking.date_end),
    all_day: new FormControl(booking.all_day ?? false),
    name: new FormControl(booking.extension_data.name || booking.asset_name || ""),
    duration: new FormControl(booking.duration, [endInFuture]),
    booking_type: new FormControl(booking.booking_type),
    zones: new FormControl(booking.zones),
    title: new FormControl(booking.title),
    description: new FormControl(booking.description),
    booking_asset: new FormControl(null),
    resources: new FormControl([]),
    company: new FormControl(""),
    asset_id: new FormControl(booking.asset_id, [Validators.required]),
    asset_name: new FormControl(booking.description),
    assets: new FormControl(booking.extension_data?.assets || []),
    attendees: new FormControl(booking.attendees || []),
    map_id: new FormControl(booking.extension_data?.map_id),
    featured: new FormControl(booking.extension_data?.featured || false),
    user: new FormControl(currentUser()),
    user_id: new FormControl(booking.user_id),
    group: new FormControl(booking.group),
    user_email: new FormControl(booking.user_email),
    user_name: new FormControl(booking.user_name),
    timezone: new FormControl(booking.timezone || ""),
    booked_by: new FormControl(currentUser()),
    booked_by_id: new FormControl(booking.booked_by_id),
    booked_by_email: new FormControl(booking.booked_by_email),
    secondary_resource: new FormControl(booking.extension_data?.other_asset_type || booking.extension_data?.secondary_resource),
    location: new FormControl(booking.extension_data.location || ""),
    attendance_type: new FormControl(booking.extension_data.attendance_type || "ANY"),
    phone: new FormControl(booking.extension_data.phone || ""),
    permission: new FormControl(booking.permission || "PRIVATE"),
    images: new FormControl(booking.images || []),
    tags: new FormControl(booking?.tags || []),
    plate_number: new FormControl(booking.extension_data.plate_number || ""),
    pass_number: new FormControl(booking.extension_data.pass_number || ""),
    recurrence_custom: new FormControl(booking.extension_data.recurrence_custom ?? false),
    recurrence_type: new FormControl(booking.recurrence_type || "none"),
    recurrence_days: new FormControl(booking.recurrence_days),
    recurrence_nth_of_month: new FormControl(booking.recurrence_nth_of_month),
    recurrence_interval: new FormControl(booking.recurrence_interval),
    recurrence_end: new FormControl(booking.recurrence_end),
    notes: new FormControl(booking.extension_data.notes || ""),
    update_master: new FormControl(false),
    self_registered: new FormControl(false),
    is_assgined: new FormControl(false)
  });
  form.valueChanges.subscribe(() => {
    if (form.getRawValue().date < Date.now() && form.value.id) {
      form.get("date")?.disable({ emitEvent: false });
    } else {
      form.get("date")?.enable({ emitEvent: false });
    }
  });
  form.controls.user.valueChanges.subscribe((user) => {
    if (!user)
      return;
    form.patchValue({
      user,
      user_id: user?.id,
      user_email: user?.email,
      user_name: user?.name
    }, { emitEvent: false });
  });
  current_user.subscribe((user) => {
    if (!user)
      return;
    form.patchValue({
      booked_by: user,
      booked_by_id: user?.id,
      booked_by_email: user?.email,
      name: user?.name
    }, { emitEvent: false });
  });
  form.controls.resources.valueChanges.subscribe((resources) => setBookingAsset(form, (resources || [])[0]));
  form.controls.duration.valueChanges.subscribe((duration) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
  });
  form.controls.date_end.valueChanges.subscribe((date) => {
    if (date < addMinutes(form.getRawValue().date, 30).valueOf()) {
      form.patchValue({
        date_end: roundToNearestMinutes(addMinutes(form.getRawValue().date, 30), { nearestTo: 5, roundingMethod: "ceil" }).valueOf(),
        duration: 30
      }, { emitEvent: false });
    } else {
      form.patchValue({
        duration: differenceInMinutes(date, form.getRawValue().date)
      }, { emitEvent: false });
    }
  });
  form.controls.date.valueChanges.subscribe((date) => {
    form.patchValue({
      date_end: roundToNearestMinutes(addMinutes(date, form.value.duration), { nearestTo: 5, roundingMethod: "ceil" }).valueOf()
    }, { emitEvent: false });
    if (date < Date.now() && !form.value.id) {
      form.patchValue({
        date: roundToNearestMinutes(Date.now(), {
          nearestTo: 5,
          roundingMethod: "ceil"
        }).valueOf()
      }, { emitEvent: false });
    }
  });
  if (booking.state === "started")
    form.get("date").disable();
  return form;
}
async function findNearbyFeature(map_url, centered_at, desk_ids = []) {
  const element = document.createElement("div");
  element.style.position = "absolute";
  element.style.top = "-9999px";
  element.style.width = "1000px";
  element.style.height = "1000px";
  document.body.appendChild(element);
  const id = await Un({
    url: map_url,
    element
  });
  const viewer = $(id);
  const point = (typeof centered_at === "string" ? viewer.mappings[centered_at] : centered_at) || { x: 0.5, y: 0.5 };
  let dist = 10;
  let closest = "";
  for (const desk of desk_ids) {
    const { x: x2, y } = viewer.mappings[desk] || { x: 2, y: 2 };
    const d = Math.sqrt((x2 - point.x) * (x2 - point.x) + (y - point.y) * (y - point.y));
    if (d < dist) {
      dist = d;
      closest = desk;
    }
  }
  document.body.removeChild(element);
  Hn(id);
  return closest;
}
function newBookingFromCalendarEvent(event) {
  return new Booking({
    id: event.id,
    user_email: event.host,
    asset_id: event.system?.id,
    asset_name: event.system?.display_name || event.system?.name,
    booking_type: "room",
    approved: event.status === "approved",
    extension_data: __spreadValues({}, event)
  });
}
function loadLockerBanks(org, obs, useRegion) {
  return obs.pipe(filter(([bld]) => !!bld), switchMap(([bld]) => useRegion() ? forkJoin(org.buildingsForRegion().map((building) => fu(building.id, "locker_banks").pipe(catchError(() => of(new Ar())), map((_2) => _2.details instanceof Array ? _2.details : [])))).pipe(map((_2) => flatten(_2))) : fu(bld.id, "locker_banks").pipe(catchError(() => of(new Ar())), map((_2) => _2.details instanceof Array ? _2.details : []))), shareReplay(1));
}
function loadLockers(org, obs, banks$, useRegion) {
  return obs.pipe(filter(([bld]) => !!bld), switchMap(([bld]) => combineLatest([
    useRegion() ? forkJoin(org.buildingsForRegion().map((building) => fu(building.id, "lockers").pipe(catchError(() => of(new Ar())), map((_2) => _2.details instanceof Array ? _2.details : [])))).pipe(map((_2) => flatten(_2))) : fu(bld.id, "lockers").pipe(catchError(() => of(new Ar())), map((_2) => _2.details instanceof Array ? _2.details : [])),
    banks$
  ])), map(([lockers, banks]) => {
    const locker_list = lockers;
    for (const bank of banks) {
      bank.lockers = lockers.filter((_2) => _2.bank_id === bank.id).map((_2) => __spreadValues({}, _2));
    }
    for (const locker of locker_list) {
      const bank = banks.find((b2) => b2.id === locker.bank_id);
      locker.bank = bank;
      locker.tags = bank?.tags || [];
      locker.zone = org.levelWithID(bank?.zones || []);
    }
    return lockers.filter((_2) => _2.bank);
  }), shareReplay(1));
}

// libs/bookings/src/lib/booking-link-modal.component.ts
var _BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
};
_BookingLinkModalComponent.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingLinkModalComponent)();
};
_BookingLinkModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], decls: 26, vars: 24, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "right-0", "top-2"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275element(6, "img", 3);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 2);
    \u0275\u0275pipe(11, "sanitize");
    \u0275\u0275element(12, "img", 4);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "a", 2);
    \u0275\u0275pipe(17, "safe");
    \u0275\u0275elementStart(18, "icon", 5);
    \u0275\u0275text(19, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 6)(24, "icon");
    \u0275\u0275text(25, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "BOOKING.LINK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 9, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "BOOKING.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 14, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "BOOKING.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 19, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "BOOKING.LINK_ICAL"));
  }
}, dependencies: [
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  SafePipe,
  SanitizePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
var BookingLinkModalComponent = _BookingLinkModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingLinkModalComponent, [{
    type: Component,
    args: [{ selector: "booking-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKING.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button icon matRipple mat-dialog-close class="absolute right-0 top-2">
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLinkModalComponent, { className: "BookingLinkModalComponent", filePath: "libs/bookings/src/lib/booking-link-modal.component.ts", lineNumber: 77 });
})();

// libs/bookings/src/lib/desk-questions-modal.component.ts
function DeskQuestionsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 2);
    \u0275\u0275text(2, "COVID-19 Questionnaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "label");
    \u0275\u0275text(6, " Have you travelled overseas within the last 14 days?");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-radio-group", 5)(10, "mat-radio-button", 6);
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 6);
    \u0275\u0275text(13, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 7)(20, "mat-radio-button", 6);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 6);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 8)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 9)(30, "mat-radio-button", 6);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 6);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "footer", 10)(35, "button", 11);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 12)(38, "icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function DeskQuestionsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "p", 13);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var _DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.form = new FormGroup({
      travelled: new FormControl(false),
      unwell: new FormControl(false),
      contact: new FormControl(false)
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (Object.keys(this.form.value).find((key) => this.form.value[key] === true || this.form.value[key] === "true")) {
      this.failure = true;
      return;
    }
    this.event.emit({ reason: "done" });
  }
};
_DeskQuestionsModalComponent.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
};
_DeskQuestionsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, decls: 2, vars: 1, consts: [[1, "relative"], ["failure", "", 1, "relative", "pt-8"], [1, "p-4", "text-xl"], [1, "p-4", 3, "formGroup"], [1, "mb-4", "flex", "flex-col"], ["formControlName", "travelled", 1, "space-x-2"], [3, "value"], ["formControlName", "unwell", 1, "space-x-2"], [1, "flex", "flex-col"], ["formControlName", "contact", 1, "space-x-2"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskQuestionsModalComponent_Conditional_0_Template, 40, 7, "div", 0)(1, DeskQuestionsModalComponent_Conditional_1_Template, 6, 0, "main", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.failure ? 0 : 1);
  }
}, dependencies: [
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  ReactiveFormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
var DeskQuestionsModalComponent = _DeskQuestionsModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQuestionsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-question-modal", template: `
        @if (!failure) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4" [formGroup]="form">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="travelled"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label>
                            Are you unwell or experiencing any cold or flu-like
                            symptoms?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="unwell"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="flex flex-col">
                        <label>
                            Have you had contact with anyone with suspected
                            COVID-19?<span>*</span>
                        </label>
                        <mat-radio-group
                            formControlName="contact"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                </main>
                <footer class="flex items-center justify-center p-2">
                    <button btn matRipple (click)="submit()">Submit</button>
                </footer>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <main failure class="relative pt-8">
                <p class="p-4">
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </main>
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      MatRadioModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;c7f37c1e60a5fae4a31dda6fbae0d3cc845b39f17b3f09824fe872f6bf4e7f79;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-questions-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 111 });
})();

// libs/assets/src/lib/asset.class.ts
var AssetGroup = class {
  constructor(data) {
    this.images = [];
    Object.assign(this, data);
  }
};

// libs/assets/src/lib/assets.fn.ts
var BASE_ENDPOINT = "/api/engine/v2";
function queryAssetCategories(query = {}) {
  const q2 = toQueryString(query);
  return ee(`${BASE_ENDPOINT}/asset_categories${q2 ? "?" + q2 : ""}`).pipe(map((_2) => _2));
}
var groups_cache = /* @__PURE__ */ new Map();
function queryAssetGroupsExtended(query = {}) {
  const q2 = toQueryString(query);
  if (groups_cache.has(query.zones)) {
    return of(groups_cache.get(query.zones));
  }
  return ee(`${BASE_ENDPOINT}/asset_types${q2 ? "?" + q2 : ""}`).pipe(map((_2) => _2), switchMap((list) => forkJoin(list.map((group) => queryAssets(__spreadProps(__spreadValues({
    limit: 200
  }, query), {
    type_id: group.id
  })).pipe(map((assets) => __spreadProps(__spreadValues({}, group), { assets })))))), tap((_2) => {
    groups_cache.set(query.zones, _2);
    setTimeout(() => groups_cache.delete(query.zones), 5 * 60 * 1e3);
  }));
}
function showAssetGroup(id) {
  return ee(`${BASE_ENDPOINT}/asset_types/${id}`).pipe(map((_2) => _2));
}
function queryAssets(query = {}) {
  const q2 = toQueryString(query);
  return ee(`${BASE_ENDPOINT}/assets${q2 ? "?" + q2 : ""}`).pipe(map((_2) => _2));
}
function queryGroupAvailability(query, ignore = []) {
  query.type = "asset-request";
  return combineLatest([
    queryAssetGroupsExtended(query),
    queryBookings(query)
  ]).pipe(map(([products, bookings]) => {
    bookings = bookings.filter((_2) => _2.status !== "declined" && _2.status !== "cancelled");
    return products.map((product) => __spreadProps(__spreadValues({}, product), {
      assets: product.assets.filter((asset) => ignore?.includes(asset.id) || !bookings.find((booking) => !ignore.includes(booking.id) && (booking.asset_id === asset.id || booking.asset_ids?.includes(asset.id))))
    }));
  }));
}
function differenceBetweenAssetRequests(new_assets, old_assets, reset_state = false) {
  if ((!new_assets || new_assets?.length <= 0) && old_assets?.length)
    return [];
  if (!old_assets)
    return [];
  const changed = [];
  for (const request of new_assets) {
    const match = old_assets.find((_2) => _2.id === request.id);
    if (!match || match.ref_id !== request.ref_id) {
      changed.push(request.id);
    }
  }
  return changed;
}
async function validateAssetRequestsForResource({ id, ical_uid, from_booking }, { date, duration, all_day, host, location_name, location_id, zones, reset_state }, new_assets = [], force_create = false) {
  const requests = await queryBookings({
    period_start: getUnixTime(all_day ? startOfDay(date) : date),
    period_end: getUnixTime(all_day ? endOfDay(addMinutes(date, duration)) : addMinutes(date, duration)),
    type: "asset-request",
    zones: zones.join(",")
  }).toPromise();
  const bookings = id && ical_uid ? await queryBookings({
    period_start: getUnixTime(startOfDay(date)),
    period_end: getUnixTime(endOfDay(date)),
    type: "asset-request",
    email: host,
    event_id: from_booking ? "" : id,
    booking_id: from_booking ? id : "",
    ical_uid
  }).toPromise() : [];
  const booking_list = bookings.map((_2) => [
    _2.id,
    new AssetRequest(_2.extension_data.request)
  ]);
  new_assets?.forEach((_2) => _2.conflict = false);
  let changed = force_create ? new_assets.map((_2) => _2.id) : differenceBetweenAssetRequests(new_assets, booking_list.map(([_2, r]) => r), reset_state);
  if (reset_state) {
    const has_state = bookings.filter((_2) => _2.approved || _2.rejected);
    changed = unique([
      ...changed,
      ...has_state.map((_2) => _2.extension_data.request_id)
    ]);
  }
  const unchanged = booking_list.filter(([_2, request]) => !changed.includes(request.id));
  const changed_requests = booking_list.filter(([_2, { id: id2 }]) => changed.includes(id2));
  const changed_assets = new_assets.filter(({ id: id2 }) => changed.includes(id2));
  const filtered = requests.filter((req) => !req.rejected && (!bookings.find((b2) => b2.id === req.id) || unchanged.find(([id2]) => req.event_id === id2)));
  let used_ids = flatten(filtered.map((_2) => _2.asset_ids));
  for (const [_2, request] of unchanged) {
    used_ids = [
      ...used_ids,
      ...flatten(request.items.map((_3) => _3.item_ids))
    ];
  }
  const available_groups = await queryGroupAvailability({
    period_start: getUnixTime(all_day ? startOfDay(date) : date),
    period_end: getUnixTime(all_day ? endOfDay(addMinutes(date, duration)) : addMinutes(date, duration)),
    type: "asset-request"
  }, bookings.map((_2) => _2.id)).toPromise();
  const processed_requests = changed_assets.map((request) => {
    let asset_ids = flatten(request.items.map(({ id: id2, item_ids, quantity }) => {
      const assets = available_groups.find((_2) => _2.id === id2)?.assets;
      if (!assets)
        return item_ids;
      const list = [];
      return new Array(quantity).fill(0).map((_2, idx) => {
        const item = used_ids.includes(item_ids[idx]) || list.includes(item_ids[idx]) || !item_ids[idx] ? assets?.find(({ id: id3 }) => {
          return !used_ids.includes(id3) && !list.includes(id3);
        })?.id : item_ids[idx];
        if (!item) {
          request.conflict = true;
          throw "Unable to find available asset for request";
        }
        list.push(item);
        return item;
      });
    }));
    const booking = bookings.find((_2) => _2.asset_ids.find((id2) => request.items?.find((i) => i.item_ids.includes(id2))));
    used_ids = [...used_ids, ...asset_ids];
    const asset_data = {
      type: "asset-request",
      booking_type: "asset-request",
      date,
      duration,
      all_day,
      description: location_name,
      user_email: host,
      asset_id: asset_ids[0],
      asset_ids,
      asset_name: request.items.map((_2) => _2.name).join(", "),
      title: request.items.map((_2) => _2.name).join(", "),
      approved: !reset_state && booking?.approved && !request._changed,
      rejected: !reset_state && booking?.rejected && !request._changed,
      extension_data: {
        parent_id: id,
        request_id: request.id,
        location_id,
        request: new AssetRequest(__spreadProps(__spreadValues({}, request), { event: null }))
      },
      zones: zones || []
    };
    if (from_booking)
      asset_data.parent_id = id;
    return createBooking(new Booking(asset_data), {
      ical_uid,
      event_id: from_booking ? "" : id
    });
  });
  return async () => {
    await Promise.all(changed_requests.map(([id2]) => removeBooking(id2).toPromise()));
    await Promise.all(processed_requests.map((r) => r.toPromise()));
  };
}

// libs/assets/src/lib/asset-group.pipe.ts
var ASSET_GROUP_LIST = [];
var EMPTY_ASSET_GROUP = new AssetGroup();
function updateAssetGroupList(assetgroup_list) {
  for (const assetgroup of assetgroup_list) {
    if (!ASSET_GROUP_LIST.find(({ id }) => id === assetgroup.id)) {
      ASSET_GROUP_LIST.push(assetgroup);
    }
  }
}
var _AssetGroupPipe = class _AssetGroupPipe {
  /**
   * Get details of the assetgroup with the given ID
   * @param assetgroup_id ID or Email of the assetgroup
   */
  async transform(group_id) {
    if (!group_id)
      return EMPTY_ASSET_GROUP;
    let asset_group = ASSET_GROUP_LIST.find(({ id }) => id === group_id);
    if (asset_group)
      return asset_group;
    const group = await lastValueFrom(showAssetGroup(group_id)).catch(() => null);
    if (group) {
      asset_group = __spreadValues({}, group);
      ASSET_GROUP_LIST.push(asset_group);
      return asset_group;
    }
    return EMPTY_ASSET_GROUP;
  }
  updateAssetGroupList(assetgroup_list) {
    updateAssetGroupList(assetgroup_list);
  }
};
_AssetGroupPipe.\u0275fac = function AssetGroupPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetGroupPipe)();
};
_AssetGroupPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "assetgroup", type: _AssetGroupPipe, pure: true });
var AssetGroupPipe = _AssetGroupPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupPipe, [{
    type: Pipe,
    args: [{
      name: "assetgroup"
    }]
  }], null, null);
})();

// libs/assets/src/lib/asset.utilities.ts
var RULE_REQUESTS = {};
function getAssetRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return of([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = fu(zone_id, "assets_config").pipe(map((_2) => _2.details instanceof Array ? _2.details : []), catchError((e) => of([])));
  return RULE_REQUESTS[zone_id];
}
function assetAvailable(item, rules, event) {
  const current_date = Date.now();
  const event_date = new Date(event.date);
  const isRuleMatch = (rule) => item.name === rule.name || item.category?.name.includes(rule.name) || event.resources?.some((resource) => resource.zones?.includes(rule.name)) || event.space?.zones?.includes(rule.name) || rule.name === "*";
  const countMatches = (rule) => rule.rules.reduce((matches, condition) => {
    switch (condition[0]) {
      case "is_before":
        return matches + (isBefore(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "within_hours":
        return matches + (isAfter(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "after_hour":
        return matches + (isAfter(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "before_hour":
        return matches + (isBefore(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "min_length":
        return matches + (event.duration >= stringToMinutes(condition[1]) ? 1 : 0);
      case "max_length":
        return matches + (event.duration <= stringToMinutes(condition[1]) ? 1 : 0);
      case "visitor_type":
        return matches + (event.ext("visitor_type") === condition[1] ? 1 : 0);
      default:
        return matches + 1;
    }
  }, 0);
  for (const rule of rules) {
    if (isRuleMatch(rule)) {
      if (countMatches(rule) < rule.rules.length) {
        return false;
      }
    }
  }
  return true;
}

// libs/assets/src/lib/asset-state.service.ts
var _AssetStateService = class _AssetStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._options = new BehaviorSubject({ date: Date.now() });
    this._search = new BehaviorSubject("");
    this._category = new BehaviorSubject([]);
    this._loading = new BehaviorSubject("");
    this.search = this._search.asObservable();
    this.category = this._category.asObservable();
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
    this.rules = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(filter(([_2, bld]) => !!bld), debounceTime(300), switchMap(([options, bld]) => {
      this._loading.next(this._loading.getValue() + "[Rules]");
      return getAssetRulesForZone(bld.id || options.zone || "");
    }), tap((_2) => this._loading.next(this._loading.getValue().replace(/\[Rules\]/g, ""))), shareReplay(1));
    this.asset_list = of(0).pipe(switchMap(() => {
      this._loading.next(this._loading.getValue() + "[Assets]");
      return queryAssets();
    }), tap((_2) => this._loading.next(this._loading.getValue().replace(/\[Assets\]/g, ""))), shareReplay(1));
    this.asset_bookings = this._options.pipe(debounceTime(300), switchMap(({ zone, date }) => {
      this._loading.next(this._loading.getValue() + "[Bookings]");
      return queryBookings({
        zones: zone || "",
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "asset-request"
      });
    }), tap((_2) => this._loading.next(this._loading.getValue().replace(/\[Bookings\]/g, ""))), shareReplay(1));
    this.available_groups = combineLatest([
      this._options,
      this._org.active_building
    ]).pipe(debounceTime(300), switchMap(([{ zone, date, duration, ignore }, bld]) => {
      return queryGroupAvailability({
        zones: bld.id || zone || "",
        period_start: getUnixTime(startOfMinute(date)),
        period_end: getUnixTime(endOfMinute(addMinutes(date, duration || 30))),
        type: "asset-request",
        rejected: false
      }, ignore).pipe(catchError(() => of([])));
    }), map((list) => list.sort((a, b2) => a.name.localeCompare(b2.name))), tap((_2) => updateAssetGroupList(_2)), shareReplay(1));
    this.category_list = this._org.active_building.pipe(switchMap((bld) => queryAssetCategories({ zone_id: bld.id })), map((_2) => _2.sort((a, b2) => a.name.localeCompare(b2.name))), shareReplay(1));
    this.filtered_assets = combineLatest([
      this._search,
      this._category,
      this.available_groups,
      this.rules
    ]).pipe(map(([search, category, assets, rules]) => {
      const s = search.toLowerCase();
      console.log("Rules:", rules);
      const list = assets.filter((_2) => _2.assets?.length && (!category.length || category.includes(_2.category_id)) && (_2.name.toLowerCase().includes(s) || _2.description.toLowerCase().includes(s)) && assetAvailable(_2, rules, this._options.getValue()));
      return list;
    }), shareReplay(1));
    this.settings = combineLatest([this._org.active_building]).pipe(filter(([_2]) => !!_2), switchMap(([_2]) => fu(_2.id, "assets-settings").pipe(catchError((_3) => of({})))), map((_2) => _2.details || {}), shareReplay(1));
    this.disabled_rooms = this.settings.pipe(map((_2) => _2.disabled_rooms || []));
  }
  setSearch(value) {
    this._search.next(`${value}`);
  }
  toggleCategory(value) {
    const categories = this._category.getValue();
    if (categories.includes(value)) {
      this._category.next(categories.filter((_2) => _2 !== value));
    } else {
      this._category.next([...categories, value]);
    }
  }
  getOptions() {
    return this._options.getValue();
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.value), options));
  }
};
_AssetStateService.\u0275fac = function AssetStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetStateService)();
};
_AssetStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetStateService, factory: _AssetStateService.\u0275fac, providedIn: "root" });
var AssetStateService = _AssetStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/components/src/lib/confirm-modal.component.ts
function ConfirmModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "icon", 5)(2, "p", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.content, \u0275\u0275sanitizeHtml);
  }
}
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 7);
    \u0275\u0275element(2, "mat-spinner", 8);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.loading);
  }
}
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onConfirm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx_r0.cancel_text), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx_r0.confirm_text), " ");
  }
}
var CONFIRM_METADATA = {
  height: "auto"
};
async function openConfirmModal(data, dialog) {
  const ref = dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
    data
  }));
  return __spreadProps(__spreadValues({}, await Promise.race([
    ref.componentInstance.event.pipe(first((_2) => _2.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ])), {
    loading: (s) => ref.componentInstance.loading = s,
    close: () => ref.close()
  });
}
var _ConfirmModalComponent = class _ConfirmModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.title = this._data.title || "COMMON.CONFIRM";
    this.content = this._data.content || "Are you sure?";
    this.confirm_text = this._data.confirm_text || "COMMON.ACCEPT";
    this.cancel_text = this._data.cancel_text || "COMMON.CANCEL";
    this.icon = this._data.icon || {
      class: "material-symbols-rounded",
      content: "done"
    };
    this.disableClose = () => this._dialog_ref.disableClose = true;
    this.enableClose = () => this._dialog_ref.disableClose = false;
  }
  ngOnInit() {
    if (this._data.close_delay) {
      this.timeout("close", () => this._dialog_ref.close(), this._data.close_delay);
    }
  }
  /** User confirmation of the content of the modal */
  onConfirm() {
    this.event.emit({ reason: "done" });
  }
};
_ConfirmModalComponent.\u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmModalComponent)();
};
_ConfirmModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-[28rem]", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded", "border-none", "bg-base-200", "p-2"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", 3, "innerHTML"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "flex-1", "bg-base-100"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, ConfirmModalComponent_Conditional_3_Template, 3, 2, "main", 2)(4, ConfirmModalComponent_Conditional_4_Template, 5, 1, "main", 3);
    \u0275\u0275conditionalCreate(5, ConfirmModalComponent_Conditional_5_Template, 7, 6, "footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 5 : -1);
  }
}, dependencies: [
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose
], encapsulation: 2 });
var ConfirmModalComponent = _ConfirmModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "confirm-modal", template: `
        <header
            class="sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title }}</h2>
        </header>
        @if (!loading) {
            <main
                class="flex w-[28rem] max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon" class="text-5xl"></icon>
                <p content class="text-center" [innerHTML]="content"></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </main>
        }
        @if (!loading) {
            <footer
                class="sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded border-none bg-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse flex-1 bg-base-100"
                    mat-dialog-close
                >
                    {{ cancel_text | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    (click)="onConfirm()"
                >
                    {{ confirm_text | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "libs/components/src/lib/confirm-modal.component.ts", lineNumber: 123 });
})();

// libs/payments/src/lib/card-input-field.component.ts
var _c08 = ["input"];
function CardInputFieldComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", "assets/icons/" + ctx_r1.card_type + ".svg", \u0275\u0275sanitizeUrl);
  }
}
function CardInputFieldComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r3[1], " (", item_r3[0], ") ");
  }
}
function CardInputFieldComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4);
  }
}
var BLANK_CARD = { card_number: "                ", cardholder: "", cvv: "" };
var DATE_PIPE = new DatePipe("en-us", "");
var _CardInputFieldComponent = class _CardInputFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.details = new FormGroup({
      card_number: new FormControl(Array(16).fill("X").join()),
      cardholder: new FormControl(""),
      exp_month: new FormControl(""),
      exp_year: new FormControl(""),
      cvv: new FormControl("", [
        Validators.minLength(3),
        Validators.maxLength(4)
      ])
    });
    this.disabled = false;
    this.months = Array(12).fill(0).map((_2, idx) => [
      DATE_PIPE.transform(setMonth(Date.now(), idx), "MM"),
      DATE_PIPE.transform(setMonth(Date.now(), idx), "MMM")
    ]);
    this.years = Array(12).fill(0).map((_2, idx) => DATE_PIPE.transform(addYears(Date.now(), idx), "yyyy"));
    this.digits = Array(16).fill(0);
    this._index = 0;
    this._input_el = viewChild.required("input");
    this.registerOnChange = (fn2) => this._onChange = fn2;
    this.registerOnTouched = (fn2) => this._onTouch = fn2;
    this.setDisabledState = (s) => this.disabled = s;
  }
  get is_amex() {
    const no = this.details.value?.card_number || "";
    return no.startsWith("3");
  }
  get card_type() {
    const no = this.details.value?.card_number || "";
    if (no.startsWith("3"))
      return "amex";
    if (no.startsWith("4"))
      return "visa";
    if (no.startsWith("5"))
      return "mastercard";
    return "";
  }
  get card_display() {
    let no = this.details.value?.card_number || "";
    if (this.card_focused)
      no = no.substring(0, this._index) + "\u2BD0" + no.substring(this._index + 1);
    return this.is_amex ? `${no.substring(0, 4)}-${no.substring(4, 10)}-${no.substring(10)}` : `${no.substring(0, 4)}-${no.substring(4, 8)}-${no.substring(8, 12)}-${no.substring(12)}`;
  }
  get card_focused() {
    const _input_el = this._input_el();
    return document.activeElement === _input_el.nativeElement || document.activeElement === _input_el.nativeElement.parentElement;
  }
  ngOnInit() {
    this.subscription("changes", this.details.valueChanges.subscribe((v) => this.timeout("update", () => this.setValue(this.details.getRawValue()))));
  }
  focusInput() {
    this._input_el().nativeElement.focus();
    this._index = this._input_el().nativeElement.selectionStart || 0;
  }
  onInput(event) {
    if (!event || !this.card_focused)
      return;
    const idx = this._index;
    if (idx < 0 || idx > 16)
      return;
    let card_number = this.details.value.card_number;
    if ((event.code.startsWith("Digit") || event.code.startsWith("Numpad")) && idx < (this.is_amex ? 15 : 16)) {
      card_number = card_number.substring(0, idx) + event.key + card_number.substring(idx + 1);
      this.details.patchValue({ card_number });
      this._focusChange(idx, 1);
    } else if (event.code === "Backspace" && idx > 0) {
      let card_number2 = this.details.value.card_number;
      card_number2 = card_number2.substring(0, idx) + " " + card_number2.substring(idx + 1);
      this.details.patchValue({ card_number: card_number2 });
      this._focusChange(idx, -1);
    } else if (event.code === "ArrowLeft") {
      this._focusChange(idx, -1);
    } else if (event.code === "ArrowRight" && card_number[idx] !== " ") {
      this._focusChange(idx, 1);
    }
  }
  _focusChange(idx, dir) {
    this._index = Math.min(16, Math.max(0, idx + dir));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this._onChange)
      this._onChange(new_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.details.patchValue(value || BLANK_CARD);
  }
};
_CardInputFieldComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CardInputFieldComponent_BaseFactory;
  return function CardInputFieldComponent_Factory(__ngFactoryType__) {
    return (\u0275CardInputFieldComponent_BaseFactory || (\u0275CardInputFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CardInputFieldComponent)))(__ngFactoryType__ || _CardInputFieldComponent);
  };
})();
_CardInputFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardInputFieldComponent, selectors: [["card-input-field"]], viewQuery: function CardInputFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._input_el, _c08, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    /* istanbul ignore next */
    useExisting: forwardRef(() => _CardInputFieldComponent),
    multi: true
  }
]), \u0275\u0275InheritDefinitionFeature], decls: 43, vars: 4, consts: [["input", ""], [3, "keyup", "formGroup"], [1, "flex", "flex-col"], ["for", "card-number"], ["tabindex", "0", 1, "relative", "mb-4", "flex", "h-12", "w-full", "items-center", "rounded", "border", "border-base-200", "p-2", "font-mono", "focus-within:border-base-200", "focus-within:shadow", 3, "focus"], [1, "flex-1"], ["type", "tel", "maxlength", "17", 1, "absolute", "hidden", 3, "keydown", "value"], [1, "h-8", 3, "src"], [1, "flex", "flex-1", "flex-col"], ["for", "cardholder"], ["appearance", "outline"], ["name", "cardholder", "matInput", "", "placeholder", "Mr John Smith", "formControlName", "cardholder"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-1/4", "flex-1", "flex-col"], ["placeholder", "MM", "formControlName", "exp_month"], [3, "value"], ["placeholder", "YYYY", "formControlName", "exp_year"], ["for", "cvv"], ["appearance", "outline", 1, "w-20"], ["name", "cvv", "matInput", "", "formControlName", "cvv", "maxlength", "4"]], template: function CardInputFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("keyup", function CardInputFieldComponent_Template_form_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 2)(2, "label", 3);
    \u0275\u0275text(3, "Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275listener("focus", function CardInputFieldComponent_Template_div_focus_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    });
    \u0275\u0275elementStart(5, "pre", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 6, 0);
    \u0275\u0275listener("keydown", function CardInputFieldComponent_Template_input_keydown_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CardInputFieldComponent_Conditional_9_Template, 1, 1, "img", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Name on Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 10);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16, "Cardholder name is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "label", 9);
    \u0275\u0275text(20, "Expiry Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-select", 14);
    \u0275\u0275repeaterCreate(23, CardInputFieldComponent_For_24_Template, 2, 3, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-error");
    \u0275\u0275text(26, "Expiry month is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 13)(28, "label", 9);
    \u0275\u0275text(29, "Expiry Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-select", 16);
    \u0275\u0275repeaterCreate(32, CardInputFieldComponent_For_33_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-error");
    \u0275\u0275text(35, "Expiry year is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 2)(37, "label", 17);
    \u0275\u0275text(38, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 18);
    \u0275\u0275element(40, "input", 19);
    \u0275\u0275elementStart(41, "mat-error");
    \u0275\u0275text(42, "Invalid security code");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.details);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.card_display);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.details.value.card_number == null ? null : ctx.details.value.card_number.trim());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.card_type ? 9 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx.months);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.years);
  }
}, dependencies: [MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */"] });
var CardInputFieldComponent = _CardInputFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardInputFieldComponent, [{
    type: Component,
    args: [{ selector: "card-input-field", template: `
        <form [formGroup]="details" (window:keyup)="onInput($event)">
            <div class="flex flex-col">
                <label for="card-number">Card Number</label>
                <div
                    tabindex="0"
                    class="relative mb-4 flex h-12 w-full items-center rounded border border-base-200 p-2 font-mono focus-within:border-base-200 focus-within:shadow"
                    (focus)="focusInput()"
                >
                    <pre class="flex-1">{{ card_display }}</pre>
                    <input
                        #input
                        class="absolute hidden"
                        type="tel"
                        [value]="details.value.card_number?.trim()"
                        (keydown)="(false)"
                        maxlength="17"
                    />
                    @if (card_type) {
                        <img
                            [src]="'assets/icons/' + card_type + '.svg'"
                            class="h-8"
                        />
                    }
                </div>
            </div>
            <div class="flex flex-1 flex-col">
                <label for="cardholder">Name on Card</label>
                <mat-form-field appearance="outline">
                    <input
                        name="cardholder"
                        matInput
                        placeholder="Mr John Smith"
                        formControlName="cardholder"
                    />
                    <mat-error>Cardholder name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex w-1/4 flex-1 flex-col">
                    <label for="cardholder">Expiry Month</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="MM"
                            formControlName="exp_month"
                        >
                            @for (item of months; track item) {
                                <mat-option [value]="item[0]">
                                    {{ item[1] }} ({{ item[0] }})
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>Expiry month is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex w-1/4 flex-1 flex-col">
                    <label for="cardholder">Expiry Year</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="YYYY"
                            formControlName="exp_year"
                        >
                            @for (item of years; track item) {
                                <mat-option [value]="item">{{
                                    item
                                }}</mat-option>
                            }
                        </mat-select>
                        <mat-error>Expiry year is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="cvv">CVV</label>
                    <mat-form-field appearance="outline" class="w-20">
                        <input
                            name="cvv"
                            matInput
                            formControlName="cvv"
                            maxlength="4"
                        />
                        <mat-error>Invalid security code</mat-error>
                    </mat-form-field>
                </div>
            </div>
        </form>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CardInputFieldComponent),
        multi: true
      }
    ], imports: [
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;2bc8ca7aace10e46f51053cb2cf4127500bd9fcd06c7c0d1d5dc88d70d997800;/home/runner/work/user-interfaces/user-interfaces/libs/payments/src/lib/card-input-field.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\n/*# sourceMappingURL=card-input-field.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardInputFieldComponent, { className: "CardInputFieldComponent", filePath: "libs/payments/src/lib/card-input-field.component.ts", lineNumber: 138 });
})();

// libs/payments/src/lib/payment-modal.component.ts
function PaymentModalComponent_Conditional_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" between ", \u0275\u0275pipeBind2(1, 2, ctx_r1.details.date, "shortTime"), " and ", \u0275\u0275pipeBind2(2, 5, ctx_r1.details.date + ctx_r1.details.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function PaymentModalComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2)(1, "h2", 3);
    \u0275\u0275text(2, "Booking Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 4);
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275conditionalCreate(7, PaymentModalComponent_Conditional_0_Conditional_1_Conditional_7_Template, 3, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "You booking will cost:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "card-input-field", 8);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_Conditional_0_Conditional_1_Template_card_input_field_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.card_details, $event) || (ctx_r1.card_details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "footer", 9)(16, "button", 10);
    \u0275\u0275listener("click", function PaymentModalComponent_Conditional_0_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.processPayment());
    });
    \u0275\u0275text(17, " Make Payment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 11)(19, "i", 12);
    \u0275\u0275text(20, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" You are requesting a ", ctx_r1.details.type, " booking in ", ctx_r1.details.resource_name, " for ", \u0275\u0275pipeBind2(6, 6, ctx_r1.details.date, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.details.all_day ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, ctx_r1.details.amount / 100, ctx_r1.code));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.card_details);
  }
}
function PaymentModalComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 13)(1, "h2", 3);
    \u0275\u0275text(2, "Payment Successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "img", 15);
    \u0275\u0275elementStart(18, "footer", 16)(19, "button", 17);
    \u0275\u0275text(20, " Great, thanks. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Ref #", ctx_r1.transaction_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 6, ctx_r1.details.amount / 100, ctx_r1.code), " paid.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.details.resource_name, " booked.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, ctx_r1.details.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 12, ctx_r1.details.date, "shortTime"), " and ", \u0275\u0275pipeBind2(16, 15, ctx_r1.details.date + ctx_r1.details.duration * 60 * 1e3, "shortTime"), " ");
  }
}
function PaymentModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, PaymentModalComponent_Conditional_0_Conditional_1_Template, 21, 12)(2, PaymentModalComponent_Conditional_0_Conditional_2_Template, 21, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.success ? 1 : 2);
  }
}
function PaymentModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r1.loading));
  }
}
var _PaymentModalComponent = class _PaymentModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = output();
    this.details = this._data;
    this.loading = this._data.loading;
    this.success = false;
    this.transaction_id = "12345678";
  }
  get code() {
    return this._org.currency_code;
  }
  async processPayment() {
    if (!this.card_details || !this._validCardDetails())
      return;
    this.event.emit(this.card_details);
    await this._data.makePayment(this.card_details);
    this.success = true;
  }
  _validCardDetails() {
    return (this.card_details?.cardholder.length || 0) > 0 && (this.card_details?.cvv.length || 0) >= 3;
  }
};
_PaymentModalComponent.\u0275fac = function PaymentModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentModalComponent)();
};
_PaymentModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentModalComponent, selectors: [["payment-modal"]], outputs: { event: "event" }, decls: 3, vars: 3, consts: [[1, "relative", "max-h-[100vh]", "overflow-auto"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "p-8"], [1, "relative", "flex", "w-[24rem]", "flex-col", "items-center", "space-y-2", "px-4", "pt-8"], [1, "text-2xl", "font-medium"], ["src", "assets/icons/cost.svg", 1, "w-1/2"], [1, "pb-2", "text-center", "text-sm"], [1, "text-sm"], [1, "text-center", "text-lg", "font-medium"], [1, "w-full", 3, "ngModelChange", "ngModel"], [1, "p-4"], ["matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "left-1", "top-1"], [1, "material-symbols-rounded", "text-2xl"], [1, "relative", "flex", "w-[24rem]", "flex-col", "px-8", "pt-8"], [1, "mb-2", "text-xl", "font-medium"], ["src", "assets/icons/payment-confirmed.svg", 1, "w-full"], [1, "border-t", "border-base-200", "p-4"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-full"], ["diameter", "32"]], template: function PaymentModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentModalComponent_Conditional_0_Template, 3, 1, "div", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, PaymentModalComponent_Conditional_2_Template, 5, 3, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(1, 1, ctx.loading) ? 0 : 2);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  CardInputFieldComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple
], encapsulation: 2 });
var PaymentModalComponent = _PaymentModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentModalComponent, [{
    type: Component,
    args: [{ selector: "payment-modal", template: `
        @if (!(loading | async)) {
            <div class="relative max-h-[100vh] overflow-auto">
                @if (!success) {
                    <main
                        class="relative flex w-[24rem] flex-col items-center space-y-2 px-4 pt-8"
                    >
                        <h2 class="text-2xl font-medium">Booking Payment</h2>
                        <img src="assets/icons/cost.svg" class="w-1/2" />
                        <p class="pb-2 text-center text-sm">
                            You are requesting a {{ details.type }} booking in
                            {{ details.resource_name }} for
                            {{ details.date | date: 'mediumDate' }}
                            @if (!details.all_day) {
                                between
                                {{ details.date | date: 'shortTime' }} and
                                {{
                                    details.date + details.duration * 60 * 1000
                                        | date: 'shortTime'
                                }}
                            }
                        </p>
                        <p class="text-sm">You booking will cost:</p>
                        <p class="text-center text-lg font-medium">
                            <strong>{{
                                details.amount / 100 | currency: code
                            }}</strong>
                        </p>
                        <card-input-field
                            class="w-full"
                            [(ngModel)]="card_details"
                        ></card-input-field>
                    </main>
                    <footer class="p-4">
                        <button
                            matRipple
                            class="w-full"
                            (click)="processPayment()"
                        >
                            Make Payment
                        </button>
                    </footer>
                    <button
                        icon
                        matRipple
                        mat-dialog-close
                        class="absolute left-1 top-1"
                    >
                        <i class="material-symbols-rounded text-2xl">close</i>
                    </button>
                } @else {
                    <main class="relative flex w-[24rem] flex-col px-8 pt-8">
                        <h2 class="text-2xl font-medium">Payment Successful</h2>
                        <h3 class="mb-2 text-xl font-medium">
                            Ref #{{ transaction_id }}
                        </h3>
                        <p>{{ details.amount / 100 | currency: code }} paid.</p>
                        <p>{{ details.resource_name }} booked.</p>
                        <p>{{ details.date | date: 'mediumDate' }}</p>
                        <p>
                            {{ details.date | date: 'shortTime' }} and
                            {{
                                details.date + details.duration * 60 * 1000
                                    | date: 'shortTime'
                            }}
                        </p>
                    </main>
                    <img
                        src="assets/icons/payment-confirmed.svg"
                        class="w-full"
                    />
                    <footer class="border-t border-base-200 p-4">
                        <button btn matRipple mat-dialog-close class="w-full">
                            Great, thanks.
                        </button>
                    </footer>
                }
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        }
    `, imports: [
      CommonModule,
      CardInputFieldComponent,
      MatProgressSpinnerModule,
      MatRippleModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentModalComponent, { className: "PaymentModalComponent", filePath: "libs/payments/src/lib/payment-modal.component.ts", lineNumber: 125 });
})();

// libs/payments/src/lib/payments.service.ts
var STRIPE_MODULE = "Payment";
var _PaymentsService = class _PaymentsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._loading = new BehaviorSubject("");
    this._active_card = new BehaviorSubject("");
    this.loading = this._loading.asObservable();
    this.payment_sources = of(1).pipe(switchMap(() => {
      const mod = this._org.module("payments", STRIPE_MODULE);
      if (!mod)
        return of([]);
      return mod.execute("list_payment_methods", ["card"]);
    }), tap((_2) => _2[0] ? this._active_card.next(_2[0].id) : ""), shareReplay(1));
  }
  get enabled() {
    return !!this._org.module("payments", STRIPE_MODULE);
  }
  async makePayment(details) {
    if (!this._org.module("payments", STRIPE_MODULE))
      throw "Payments not enabled";
    const [cost, period] = await this._getCostOfProduct(details?.type).catch((_2) => [0, 60]);
    console.log("Cost:", cost, period);
    if (cost <= 0)
      return;
    let customer_id = this._settings.get("STRIPE_Customer_ID");
    if (!customer_id)
      customer_id = await this._newCustomerID();
    this._settings.saveUserSetting("STRIPE_Customer_ID", customer_id);
    const amount = cost * (details.duration / period);
    let result = void 0;
    const makePayment = async (c) => {
      result = await this._processPayment(amount, customer_id, c).catch((e) => {
        this._loading.next("");
        throw e;
      });
    };
    const data = __spreadProps(__spreadValues({}, details), {
      rate: `$${(cost / 100).toFixed(2)} per hour`,
      amount,
      makePayment,
      loading: this.loading
    });
    const ref = this._dialog.open(PaymentModalComponent, { data });
    await ref.afterClosed().toPromise();
    return result;
  }
  async _addPaymentMethod(card) {
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const payment_method = await mod.execute("add_payment_method", [
      "card",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      card
    ]);
    return payment_method.id || payment_method;
  }
  async _getCostOfProduct(type) {
    const price = [0, 60];
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      return price;
    const product_list = await mod.execute("get_product_prices", [
      null,
      null,
      type
    ]);
    if (!product_list.length)
      return price;
    return product_list;
  }
  async _processPayment(amount, customer_id, card_details) {
    this._loading.next("Checking payment method...");
    console.log("Getting payment method...");
    const source = card_details ? await this._addPaymentMethod(card_details) : this._active_card.getValue();
    if (!source)
      throw "No payment source selected";
    this._loading.next("Processing payment...");
    console.log("Processing payment...");
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const id = await mod.execute("create_payment_intent", [
      amount,
      this._org.building.currency || "USD",
      null,
      null,
      customer_id,
      null,
      null,
      null,
      currentUser()?.email
    ]);
    if (!id)
      throw "Failed to create payment";
    console.log("Confirming payment...");
    await mod.execute("confirm_payment_intent", [id, source]);
    this._loading.next("");
    return {
      success: true,
      state: "approved",
      invoice_id: id,
      amount,
      created_at: Date.now(),
      updated_at: Date.now()
    };
  }
  async _newCustomerID() {
    const mod = this._org.module("payments", STRIPE_MODULE);
    if (!mod)
      throw "Unable to load module";
    const user = currentUser();
    const id = await mod.execute("create_customer", [
      0,
      null,
      null,
      null,
      `${user.id}|${user.name}|FromPlaceOS`,
      user.email
    ]);
    return id;
  }
};
_PaymentsService.\u0275fac = function PaymentsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentsService)();
};
_PaymentsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentsService, factory: _PaymentsService.\u0275fac, providedIn: "root" });
var PaymentsService = _PaymentsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var _BookingFormService = class _BookingFormService extends AsyncHandler {
  get booking() {
    return this._booking.getValue();
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  newForm(type, booking = new Booking({})) {
    if (type !== this._options.getValue().type)
      this.clearForm();
    this.setOptions({ type });
    if (!booking.id) {
      booking.all_day = this._settings.get(`app.${type}s.all_day_default`) ?? this._settings.get(`app.${type}.all_day_default`) ?? this._settings.get("app.bookings.all_day_default");
    }
    this.form.reset();
    this.form.patchValue(Bi(__spreadValues(__spreadValues({}, booking.extension_data), booking), [null, void 0, ""]));
    this.subscription("form_change", this.form.valueChanges.subscribe(() => {
      const { date, duration } = this.form.getRawValue();
      this._assets.setOptions({ date, duration });
      this.storeForm();
    }));
    this.timeout("date", async () => this.form.patchValue({
      date: booking.date,
      duration: booking.duration
    }));
    this._booking.next(new Booking(booking));
    this._options.next({ type: this._options.getValue().type });
    this.timeout("set-resource", async () => {
      const resources = this.form.getRawValue().resources;
      if (!resources?.length)
        return;
      const item_list = await nextValueFrom(this.resources);
      const new_list = resources.map((asset) => item_list.find((_2) => _2.id == asset.id) || asset);
      this.form.patchValue({ resources: new_list });
    });
  }
  constructor() {
    super();
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._payments = inject(PaymentsService);
    this._assets = inject(AssetStateService);
    this._options = new BehaviorSubject({
      type: "desk"
    });
    this._booking = new BehaviorSubject(null);
    this._resource_use = {};
    this._loading = new BehaviorSubject("");
    this.last_success = new Booking(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking") || "{}"));
    this.loading = this._loading.asObservable();
    this.options = this._options.pipe(shareReplay(1));
    this.form = generateBookingForm();
    this.view = signal("form");
    this.resources = combineLatest([
      this._org.active_building,
      this.options.pipe(distinctUntilKeyChanged("type"))
    ]).pipe(debounceTime(300), switchMap(([bld, { type }]) => {
      if (!bld)
        return of([]);
      const useRegion = () => this._settings.get("app.use_region");
      switch (type) {
        case "desk":
          this._loading.next(i18n("BOOKINGS.DESKS_LOADING"));
          return this.loadResourceList("desks");
        case "parking":
          this._loading.next(i18n("BOOKINGS.PARKING_LOADING"));
          return this.loadResourceList("parking-spaces");
        case "locker":
          this._loading.next(i18n("BOOKINGS.LOCKERS_LOADING"));
          return loadLockers(this._org, of([bld]), loadLockerBanks(this._org, of([bld]), useRegion), useRegion);
      }
      return of([]);
    }), tap(() => this._loading.next(``)), shareReplay(1));
    this.features = this.resources.pipe(map((resource) => {
      const list = [];
      for (const { features } of resource) {
        features instanceof Array ? features.forEach((_2) => list.push(_2)) : null;
      }
      return unique(list).sort((a, b2) => a.localeCompare(b2));
    }), shareReplay(1));
    this.booking_rules = combineLatest([this._org.building_list, this._options]).pipe(switchMap(([list, { type }]) => Promise.all(list.map((bld) => lastValueFrom(fu(bld.id, `${type}_booking_rules`))))), map((building_rules) => {
      const mapping = {};
      for (const rules of building_rules) {
        mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
      }
      return mapping;
    }), shareReplay(1));
    this.available_resources = combineLatest([
      this.options,
      this.resources,
      this.booking_rules,
      merge(this.form.get("user").valueChanges, timer(1e3)),
      merge(this.form.get("date").valueChanges, timer(1e3)),
      merge(this.form.get("duration").valueChanges, timer(1e3))
    ]).pipe(filter(() => this.form.getRawValue().date > 0 && this.form.getRawValue().duration > 0), debounceTime(500), tap(([{ type }]) => this._loading.next(i18n("BOOKINGS.LOADING_AVAILABILITY", { type }))), switchMap(([options, resources, restrictions]) => {
      let { all_day, date, duration, user } = this.form.getRawValue();
      if (all_day) {
        date = startOfDay(date).valueOf();
        duration = 24 * 60 - 1;
      }
      console.log("Booking:", options.type, user, date, duration, resources.length, restrictions);
      return bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
        type: options.type,
        zones: options.zone_id || (this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id
      }).pipe(map((booked_ids) => {
        this._resource_use = {};
        for (const id of booked_ids) {
          this._resource_use[id] = " ";
        }
        const available = resources.filter((asset) => {
          const is_restricted = rulesForResource({
            date,
            duration,
            resource: asset,
            host: user || currentUser()
          }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building.id] || []).hidden;
          return !is_restricted && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_2) => asset.features.includes(_2))) && (!options.zone_id || options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id) && !booked_ids.includes(asset.id);
        });
        console.log("Resources Available:", available);
        return available;
      }), catchError(() => of([])));
    }), tap(() => this._loading.next("")), shareReplay(1));
    this.grouped_availability = combineLatest([
      this.options,
      this.available_resources
    ]).pipe(map(([options, resource]) => {
      const groups = [];
      const asset_list = [...resource].sort((a, b2) => a.zone?.id?.localeCompare(b2.zone?.id));
      const members = options.members?.length ? options.members : [currentUser()];
      while (asset_list.length) {
        const group = [];
        let asset = asset_list.pop();
        while (group.length < members.length) {
          if (group.length && !group.find((_2) => _2.zone?.id === asset.zone?.id)) {
            break;
          }
          group.push(asset);
          asset = asset_list.pop();
        }
        if (group.length < members.length)
          continue;
        groups.push(group);
      }
      return groups;
    }));
    this.subscription("router.bookings", this._router.events.subscribe((booking) => {
      if (booking instanceof NavigationEnd && !booking.url.includes("book") && !BOOKING_TYPES.find((_2) => booking.url.includes(_2))) {
        this.clearForm();
      }
    }));
    this._org.initialised.pipe(first((_2) => _2)).subscribe(() => this.setOptions({}));
  }
  setView(value) {
    this.view.set(value);
  }
  setOptions(value) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), value));
  }
  setFeature(feature, enable) {
    if (!feature?.length)
      return;
    const features = this._options.getValue()?.features || [];
    if (enable && !features.includes(feature))
      features.push(feature);
    if (!enable && features.includes(feature))
      features.splice(features.findIndex((e) => e === feature), 1);
    this.setOptions({ features });
  }
  resetForm() {
    if (!sessionStorage.getItem("PLACEOS.booking_form")) {
      return this.newForm(this._options.getValue().type);
    }
    const booking = this._booking.getValue();
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    this.form.patchValue(Bi(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), [null, void 0, ""]));
    this._options.next({ type: this._options.getValue().type });
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.booking_form");
    sessionStorage.removeItem("PLACEOS.booking_form_options");
    this.newForm(this._options.getValue().type);
  }
  storeForm() {
    sessionStorage.setItem("PLACEOS.booking_form", JSON.stringify(__spreadValues(__spreadValues({}, this._booking.getValue()), Bi(this.form.getRawValue() || {}, [
      null,
      void 0,
      ""
    ]))));
    sessionStorage.setItem("PLACEOS.booking_form_filters", JSON.stringify(this._options.getValue() || {}));
  }
  loadForm() {
    this.form.reset({ user: currentUser(), booked_by: currentUser() });
    const data = JSON.parse(sessionStorage.getItem("PLACEOS.booking_form") || "{}");
    const booking = new Booking(data);
    this._booking.next(booking);
    const booking_data = Bi(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), [null, void 0, ""]);
    this.form.patchValue(booking_data);
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters") || "{}")));
  }
  clearOldState() {
    sessionStorage.removeItem("PLACEOS.last_booked_booking");
    this.last_success = new Booking();
  }
  openBookingLinkModal(force = false) {
    this.form.markAllAsTouched();
    if (!this.form.valid && !force)
      return;
    const event = new Booking(__spreadValues(__spreadValues({}, this.booking), this.form.getRawValue()));
    this._dialog.open(BookingLinkModalComponent, { data: event });
  }
  async confirmPost() {
    await this.checkQuestions();
    const options = this._options.getValue();
    const value = this.form.getRawValue();
    console.log("i18n:", i18n("BOOKINGS.CONFIRM_MSG"));
    const content = i18n(options.group ? "BOOKINGS.CONFIRM_MSG_GROUP" : "BOOKINGS.CONFIRM_MSG", {
      type: options.type,
      date: format(value.date, "dd MMM yyyy") + (value.duration < 12 * 60 ? " at " + format(value.date, "h:mm a") : "")
    });
    const details = await openConfirmModal({
      title: i18n("BOOKINGS.CONFIRM_TITLE", { type: options.type }),
      content,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details?.reason !== "done")
      throw "User cancelled";
    details.loading(i18n("BOOKINGS.CONFIRM_LOADING"));
    if (options.group) {
      await this.postFormForGroup().catch((_2) => {
        notifyError(JSON.stringify(_2));
        details.close();
        throw _2;
      });
    } else
      await this.postForm().catch((_2) => {
        notifyError(JSON.stringify(_2));
        details.close();
        throw _2;
      });
    details.close();
  }
  async postForm(ignore_check = false) {
    if (!this.form)
      throw "No form for booking";
    if (!this.form.valid)
      throw `Some form fields are invalid. [${getInvalidFields(this.form).join(", ")}]`;
    this.form.patchValue({
      booking_type: this.form.getRawValue().booking_type || this._options.getValue().type
    });
    const value = this.form.getRawValue();
    const booking = this._booking.getValue() || new Booking();
    if (!ignore_check) {
      const host = value.user?.email || value.user_email || currentUser()?.email;
      await this._checkResourceAvailable(__spreadProps(__spreadValues(__spreadValues({}, booking), value), {
        user_email: host
      }), this._options.getValue().type);
      await this._checkResourceRules(value.resources, value.date, value.duration, host);
    }
    if (this._payments.enabled) {
      const receipt = await this._payments.makePayment({
        type: this._options.getValue().type,
        resource_name: value.asset_name,
        date: value.date,
        duration: value.duration,
        all_day: value.all_day
      });
      if (!receipt?.success)
        return;
      value.extension_data = {
        invoice: receipt,
        invoice_id: receipt.invoice_id
      };
    }
    value.zones = unique([
      ...value?.zones || [],
      ...this._booking.getValue()?.zones || [],
      ...value.booking_asset?.zones || []
    ].filter((_2) => _2));
    this._loading.next("Saving booking");
    delete value.booking_asset;
    if (value.all_day) {
      value.date = startOfDay(value.date).valueOf();
      value.duration = 24 * 60 - 1;
    }
    const { event_id, parent_id } = value;
    delete value.event_id;
    const resources = value.resources || [];
    const zone = this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
    const zones = zone && zone instanceof Object ? unique([
      this._org.organisation.id,
      this._org.region?.id,
      zone.parent_id,
      zone.id
    ]) : [this._org.organisation.id, this._org.region?.id];
    const q2 = event_id ? { ical_uid: value.ical_uid, event_id } : parent_id ? { booking_id: parent_id } : {};
    if (booking.instance && !value.update_master) {
      q2.instance = true;
      q2.start_time = booking.booking_start;
    }
    if (value.recurrence_type && value.recurrence_type !== "none") {
      const available_period = getUnixTime(endOfDay(addDays(Date.now(), this._settings.get(`app.${value.booking_type}s.available_period`) || 90)));
      if (!value.recurrence_end || value.recurrence_end > available_period) {
        value.recurrence_end = available_period;
      }
    }
    const result = await lastValueFrom(saveBooking(new Booking(__spreadProps(__spreadValues(__spreadValues({}, this._options.getValue()), value), {
      description: value.asset_name || value.description,
      user_name: value.user?.name || value.user_name,
      user_email: value.user?.email || value.user_email,
      extension_data: __spreadProps(__spreadValues({}, value.extension_data || {}), {
        assets: value.assets.map((_2) => _2.toJSON()),
        group: value.group,
        phone: value.phone,
        department: value.user?.department || currentUser()?.department
      }),
      approved: this._settings.get("app.bookings.no_approval") === true,
      zones: unique([...zones, ...value.zones || []]).filter((_2) => _2)
    })), q2)).catch((e) => {
      this._loading.next("");
      throw e?.error || e;
    });
    if (value.assets?.length || booking.extension_data.assets?.length) {
      const requests = await validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
        date: value.date,
        duration: value.duration,
        all_day: value.all_day,
        host: value.booked_by_email,
        zones: unique([...zones, ...value.zones || []]).filter((_2) => _2)
      }, value.assets).catch((e) => {
        console.error("Couldn't update asset requests", e);
        if (e?.status === 409) {
          notifyError(i18n("BOOKINGS.ASSETS_CLASH_ERROR"));
        }
        this._loading.next("");
        throw e?.error || e;
      });
      if (!requests)
        throw i18n("BOOKINGS.ASSETS_INVALID_ERROR");
      await requests();
    }
    this._loading.next("");
    const { booking_type } = value;
    this.clearForm();
    this.form?.patchValue({ booking_type });
    this.last_success = result;
    sessionStorage.setItem("PLACEOS.last_booked_booking", JSON.stringify(result));
    this.setView("success");
    return result;
  }
  async postFormForGroup() {
    const { members, group, type } = this._options.getValue();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    const extra_members = members.filter((_2) => _2.email !== currentUser().email);
    if (extra_members.length <= 0)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form = this.form.getRawValue();
    const asset_list = await nextValueFrom(this.available_resources);
    const active_resource = asset_list.find((_2) => _2.id === form.asset_id || _2.map_id === form.asset_id);
    const level = this._org.levelWithID([active_resource.zone?.id]);
    const resources = [
      active_resource,
      ...await this._getNearbyResources(level.map_id, form.asset_id, asset_list, extra_members.length)
    ];
    const group_members = unique([currentUser(), ...extra_members], "email");
    const available = await Promise.all(group_members.map((_2, idx) => this._checkResourceAvailable(__spreadProps(__spreadValues({}, form), {
      asset_id: resources[idx].map_id || resources[idx].id,
      user_email: _2.email
    }), type)));
    const unavailable = group_members.filter((_2, idx) => !available[idx]);
    const group_name = `${currentUser().email}[${format(Date.now(), "yyyy-MM-dd")}]`;
    let id = "";
    for (let i = 0; i < group_members.length; i++) {
      if (!available[i])
        continue;
      const user = group_members[i];
      const asset = resources[i];
      const assets = user.email == currentUser().email ? form.assets : [];
      this.form.patchValue(__spreadProps(__spreadValues({}, form), {
        assets,
        parent_id: id,
        user,
        user_email: user.email,
        user_id: user.id,
        asset_id: asset?.id,
        asset_name: asset.name,
        description: asset.name,
        map_id: asset?.map_id || asset?.id,
        group: group_name,
        zones: (asset.zone ? unique([
          this._org.organisation.id,
          this._org.region?.id,
          asset?.zone?.parent_id,
          asset?.zone?.id
        ]) : [this._org.organisation.id, this._org.region?.id]).filter((_2) => _2)
      }));
      const bkn = await this.postForm(true);
      if (bkn.id && !id)
        id = bkn.id;
    }
    if (unavailable.length) {
      notifyWarn(i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
        members: unavailable.map((_2) => _2.name || _2.email)?.join(", ")
      }));
    }
  }
  async checkQuestions() {
    if (this._settings.get("app.desks.ignore_questions") !== false)
      return;
    const ref = this._dialog.open(DeskQuestionsModalComponent);
    const result = await Promise.race([
      lastValueFrom(ref.componentInstance.event.pipe(first((_2) => _2.reason === "done"))),
      lastValueFrom(ref.afterClosed())
    ]);
    if (result?.reason !== "done")
      throw "User cancelled";
    const form = ref.componentInstance.form.getRawValue();
    for (const key in form) {
      if (form[key])
        throw "User failed questionaire";
    }
    ref.close();
  }
  /** Check if the given resource is available for the selected user to book */
  async _checkResourceAvailable({ id, asset_id, date, duration, user_email }, type) {
    if (!user_email)
      throw i18n("BOOKINGS.NO_USER");
    if (type === "group-event")
      return true;
    const bookings = await lastValueFrom(queryBookings({
      period_start: getUnixTime(date),
      period_end: getUnixTime(date + duration * 60 * 1e3),
      type,
      email: user_email,
      limit: 1e3
    }));
    const active_bookings = bookings.filter((_2) => _2.status !== "declined" && _2.status !== "cancelled" && !_2.rejected);
    if (active_bookings.find((_2) => _2.asset_id === asset_id && id !== _2.id)) {
      throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
    }
    const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
    if (allowed_bookings > 0 && active_bookings.filter((_2) => _2.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _2.id !== id).length >= allowed_bookings) {
      const current = user_email === currentUser()?.email;
      throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
    }
    return true;
  }
  async _checkResourceRules(assets, date, duration, host) {
    const current_user2 = currentUser();
    const user = current_user2.email === host ? current_user2 : await lastValueFrom(Pc(host)).catch(() => ({
      email: host
    }));
    if (!assets?.length)
      return true;
    const rules = await nextValueFrom(this.booking_rules);
    const resource_rules = assets?.map((space) => {
      const bld = this._org.buildings.find((b2) => space.zone.parent_id === b2.id);
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld?.id] || []);
    });
    if (!resource_rules.every((_2) => !_2.hidden)) {
      throw i18n("BOOKINGS.RULES_HIDDEN", { type: this._options.getValue().type || "resource" }, assets.length);
    }
    return true;
  }
  loadResourceList(type) {
    const use_region = this._settings.get("app.use_region");
    const map_metadata = (_2) => (_2?.metadata[type]?.details instanceof Array ? _2.metadata[type].details : []).map((d) => __spreadProps(__spreadValues({}, d), {
      id: d.id || d.map_id,
      zone: _2.zone
    }));
    const id = use_region ? this._org.building.parent_id : this._org.building.id;
    if (use_region) {
      const id2 = this._org.building.parent_id;
      const buildings = this._org.buildings.filter((_2) => _2.parent_id === id2);
      return forkJoin(buildings.map((_2) => _u(_2.id, { name: type }).pipe(map((data) => flatten(data.map(map_metadata)))))).pipe(map((_2) => flatten(_2)));
    }
    return _u(id, {
      name: type
    }).pipe(map((data) => flatten(data.map(map_metadata))));
  }
  async _getNearbyResources(map_url, id, resources, count) {
    const nearby_resources = [];
    let asset_list = resources.filter((_2) => _2.id !== id && _2.map_id !== id);
    for (let i = 0; i < count; i++) {
      const item = await findNearbyFeature(map_url, id, asset_list.map((_2) => _2.map_id || _2.id));
      if (item) {
        nearby_resources.push(resources.find((_2) => _2.id === item || _2.map_id === item));
        asset_list = asset_list.filter((_2) => _2.id !== item && _2.map_id !== item);
      }
    }
    return nearby_resources;
  }
};
_BookingFormService.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingFormService)();
};
_BookingFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
var BookingFormService = _BookingFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/events/src/lib/space.utilities.ts
var SPACE_LIST_REQUESTS = {};
function requestSpacesForZone(id) {
  if (!id)
    return of([]);
  if (SPACE_LIST_REQUESTS[id])
    return SPACE_LIST_REQUESTS[id];
  SPACE_LIST_REQUESTS[id] = oc({
    zone_id: id,
    limit: 500,
    signage: false
  }).pipe(map((_2) => (_2.data || []).map((_3) => new Space(_3))), tap((_2) => updateSpaceList(_2)), shareReplay(1));
  return SPACE_LIST_REQUESTS[id];
}
var SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
  const id = `space-${SPACE_COUNT++}`;
  const name = `Test Space ${SPACE_COUNT}`;
  const linked = predictableRandomInt(99999) % 2 === 0 && SPACE_COUNT > 1;
  const space = __spreadValues({
    id,
    name,
    long_name: `${name} with an long name`,
    map_id: `${SPACE_COUNT}`,
    capacity: predictableRandomInt(21, 1) * 2,
    email: `${name.toLowerCase().split(" ").join(".")}@${USER_DOMAIN}`,
    type: "",
    searchable: predictableRandomInt(99999) % 2 === 0,
    controlable: predictableRandomInt(99999) % 2 === 0,
    bookable: predictableRandomInt(99999) % 2 === 0,
    cost_hour: predictableRandomInt(300) * 100,
    setup: predictableRandomInt(6) * 5,
    breakdown: predictableRandomInt(6) * 5,
    zones: ["zone_lvl-0"],
    support_url: `/control/#/panel/${id}`,
    bookings: [],
    //Array(10).fill(0).map(i => generateMockBooking()),
    linked_rooms: linked ? [`space-${predictableRandomInt(SPACE_COUNT - 1)}`] : [],
    image: ""
  }, overrides);
  if (space["configurations"] && space["configurations"].length > 0) {
    space["configurations"].forEach((config) => config.capacity = predictableRandomInt(space.capacity) + 1);
    space["configurations"][0].capacity = space.capacity;
  }
  return space;
}

export {
  compareAsc,
  differenceInMonths,
  endOfMinute,
  setHours,
  requestSpacesForZone,
  generateMockSpace,
  $,
  gn,
  Nn,
  Un,
  Yn,
  Hn,
  Dn,
  VirtualKeyboardComponent,
  endInFuture,
  newBookingFromCalendarEvent,
  loadLockerBanks,
  loadLockers,
  validateAssetRequestsForResource,
  AssetStateService,
  BookingFormService,
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatAutocompleteModule,
  CustomTooltipComponent,
  DateFieldComponent,
  MapLocation,
  TimeFieldComponent,
  UserSearchFieldComponent
};
//# sourceMappingURL=chunk-YZZRRIEU.js.map
