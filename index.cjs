/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.1
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */
'use strict';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$G = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$F = fails$G;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$F(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var fails$E = fails$G;

var functionBindNative = !fails$E(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var call$n = Function.prototype.call;

var functionCall = NATIVE_BIND$3 ? call$n.bind(call$n) : function () {
  return call$n.apply(call$n, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$4(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$6 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$m = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$m, call$m);

var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$m.apply(fn, arguments);
  };
};

var uncurryThis$C = functionUncurryThis;

var toString$d = uncurryThis$C({}.toString);
var stringSlice$6 = uncurryThis$C(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$6(toString$d(it), 8, -1);
};

var uncurryThis$B = functionUncurryThis;
var fails$D = fails$G;
var classof$g = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$B(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$D(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$g(it) === 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$8 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$7 = isNullOrUndefined$8;

var $TypeError$k = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$9 = function (it) {
  if (isNullOrUndefined$7(it)) throw new $TypeError$k("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$4 = indexedObject;
var requireObjectCoercible$8 = requireObjectCoercible$9;

var toIndexedObject$a = function (it) {
  return IndexedObject$4(requireObjectCoercible$8(it));
};

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var isCallable$o = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$n = isCallable$o;

var isObject$n = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it);
};

var globalThis$G = globalThis_1;
var isCallable$m = isCallable$o;

var aFunction = function (argument) {
  return isCallable$m(argument) ? argument : undefined;
};

var getBuiltIn$8 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis$G[namespace]) : globalThis$G[namespace] && globalThis$G[namespace][method];
};

var uncurryThis$A = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$A({}.isPrototypeOf);

var globalThis$F = globalThis_1;

var navigator = globalThis$F.navigator;
var userAgent$7 = navigator && navigator.userAgent;

var environmentUserAgent = userAgent$7 ? String(userAgent$7) : '';

var globalThis$E = globalThis_1;
var userAgent$6 = environmentUserAgent;

var process$3 = globalThis$E.process;
var Deno$1 = globalThis$E.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$6) {
  match = userAgent$6.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$6.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var environmentV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$3 = environmentV8Version;
var fails$C = fails$G;
var globalThis$D = globalThis_1;

var $String$5 = globalThis$D.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$C(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$7 = getBuiltIn$8;
var isCallable$l = isCallable$o;
var isPrototypeOf$6 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$7('Symbol');
  return isCallable$l($Symbol) && isPrototypeOf$6($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;

var tryToString$6 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$k = isCallable$o;
var tryToString$5 = tryToString$6;

var $TypeError$j = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$b = function (argument) {
  if (isCallable$k(argument)) return argument;
  throw new $TypeError$j(tryToString$5(argument) + ' is not a function');
};

var aCallable$a = aCallable$b;
var isNullOrUndefined$6 = isNullOrUndefined$8;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$6(func) ? undefined : aCallable$a(func);
};

var call$l = functionCall;
var isCallable$j = isCallable$o;
var isObject$m = isObject$n;

var $TypeError$i = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$j(fn = input.toString) && !isObject$m(val = call$l(fn, input))) return val;
  if (isCallable$j(fn = input.valueOf) && !isObject$m(val = call$l(fn, input))) return val;
  if (pref !== 'string' && isCallable$j(fn = input.toString) && !isObject$m(val = call$l(fn, input))) return val;
  throw new $TypeError$i("Can't convert object to primitive value");
};

var sharedStore = {exports: {}};

var globalThis$C = globalThis_1;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$7 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$7(globalThis$C, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis$C[key] = value;
  } return value;
};

var globalThis$B = globalThis_1;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = sharedStore.exports = globalThis$B[SHARED] || defineGlobalProperty$2(SHARED, {});

(store$3.versions || (store$3.versions = [])).push({
  version: '3.38.0',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedStoreExports = sharedStore.exports;

var store$2 = sharedStoreExports;

var shared$4 = function (key, value) {
  return store$2[key] || (store$2[key] = value || {});
};

var requireObjectCoercible$7 = requireObjectCoercible$9;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$d = function (argument) {
  return $Object$2(requireObjectCoercible$7(argument));
};

var uncurryThis$z = functionUncurryThis;
var toObject$c = toObject$d;

var hasOwnProperty = uncurryThis$z({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$c(it), key);
};

var uncurryThis$y = functionUncurryThis;

var id$1 = 0;
var postfix = Math.random();
var toString$c = uncurryThis$y(1.0.toString);

var uid$4 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$c(++id$1 + postfix, 36);
};

var globalThis$A = globalThis_1;
var shared$3 = shared$4;
var hasOwn$e = hasOwnProperty_1;
var uid$3 = uid$4;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$2 = globalThis$A.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2['for'] || Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$3;

var wellKnownSymbol$n = function (name) {
  if (!hasOwn$e(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$e(Symbol$2, name)
      ? Symbol$2[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$k = functionCall;
var isObject$l = isObject$n;
var isSymbol$2 = isSymbol$3;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$m = wellKnownSymbol$n;

var $TypeError$h = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$m('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$l(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$k(exoticToPrim, input, pref);
    if (!isObject$l(result) || isSymbol$2(result)) return result;
    throw new $TypeError$h("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$1 = toPrimitive$2;
var isSymbol$1 = isSymbol$3;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive$1(argument, 'string');
  return isSymbol$1(key) ? key : key + '';
};

var globalThis$z = globalThis_1;
var isObject$k = isObject$n;

var document$3 = globalThis$z.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$k(document$3) && isObject$k(document$3.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$k = descriptors;
var fails$B = fails$G;
var createElement$1 = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$k && !fails$B(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var DESCRIPTORS$j = descriptors;
var call$j = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$5 = createPropertyDescriptor$6;
var toIndexedObject$9 = toIndexedObject$a;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$d = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$j ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$9(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$d(O, P)) return createPropertyDescriptor$5(!call$j(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$i = descriptors;
var fails$A = fails$G;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$i && fails$A(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$j = isObject$n;

var $String$3 = String;
var $TypeError$g = TypeError;

// `Assert: Type(argument) is Object`
var anObject$h = function (argument) {
  if (isObject$j(argument)) return argument;
  throw new $TypeError$g($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$h = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$g = anObject$h;
var toPropertyKey$1 = toPropertyKey$3;

var $TypeError$f = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$h ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$g(O);
  P = toPropertyKey$1(P);
  anObject$g(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$g(O);
  P = toPropertyKey$1(P);
  anObject$g(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$f('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$g = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$6;

var createNonEnumerableProperty$a = DESCRIPTORS$g ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$4(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$f = descriptors;
var hasOwn$c = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$f && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$c(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$f || (DESCRIPTORS$f && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$x = functionUncurryThis;
var isCallable$i = isCallable$o;
var store$1 = sharedStoreExports;

var functionToString = uncurryThis$x(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$i(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var globalThis$y = globalThis_1;
var isCallable$h = isCallable$o;

var WeakMap$1 = globalThis$y.WeakMap;

var weakMapBasicDetection = isCallable$h(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4;
var uid$2 = uid$4;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid$2(key));
};

var hiddenKeys$5 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var globalThis$x = globalThis_1;
var isObject$i = isObject$n;
var createNonEnumerableProperty$9 = createNonEnumerableProperty$a;
var hasOwn$b = hasOwnProperty_1;
var shared$1 = sharedStoreExports;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$4 = hiddenKeys$5;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = globalThis$x.TypeError;
var WeakMap = globalThis$x.WeakMap;
var set$2, get$1, has;

var enforce = function (it) {
  return has(it) ? get$1(it) : set$2(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$i(it) || (state = get$1(it)).type !== TYPE) {
      throw new TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$2 = function (it, metadata) {
    if (store.has(it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$4[STATE] = true;
  set$2 = function (it, metadata) {
    if (hasOwn$b(it, STATE)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$9(it, STATE, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return hasOwn$b(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$b(it, STATE);
  };
}

var internalState = {
  set: set$2,
  get: get$1,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$w = functionUncurryThis;
var fails$z = fails$G;
var isCallable$g = isCallable$o;
var hasOwn$a = hasOwnProperty_1;
var DESCRIPTORS$e = descriptors;
var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$7 = internalState;

var enforceInternalState$2 = InternalStateModule$7.enforce;
var getInternalState$5 = InternalStateModule$7.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;
var stringSlice$5 = uncurryThis$w(''.slice);
var replace$4 = uncurryThis$w(''.replace);
var join$2 = uncurryThis$w([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$e && !fails$z(function () {
  return defineProperty$6(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$5($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$4($String$2(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$a(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
    if (DESCRIPTORS$e) defineProperty$6(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$a(options, 'arity') && value.length !== options.arity) {
    defineProperty$6(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$a(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$e) defineProperty$6(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$2(value);
  if (!hasOwn$a(state, 'source')) {
    state.source = join$2(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$g(this) && getInternalState$5(this).source || inspectSource$2(this);
}, 'toString');

var makeBuiltInExports = makeBuiltIn$3.exports;

var isCallable$f = isCallable$o;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$c = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$f(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$4.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$5 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$5 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$d = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$c = toIntegerOrInfinity$d;

var max$3 = Math.max;
var min$7 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$8 = function (index, length) {
  var integer = toIntegerOrInfinity$c(index);
  return integer < 0 ? max$3(integer + length, 0) : min$7(integer, length);
};

var toIntegerOrInfinity$b = toIntegerOrInfinity$d;

var min$6 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$9 = function (argument) {
  var len = toIntegerOrInfinity$b(argument);
  return len > 0 ? min$6(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$8 = toLength$9;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$j = function (obj) {
  return toLength$8(obj.length);
};

var toIndexedObject$8 = toIndexedObject$a;
var toAbsoluteIndex$7 = toAbsoluteIndex$8;
var lengthOfArrayLike$i = lengthOfArrayLike$j;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$5 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$8($this);
    var length = lengthOfArrayLike$i(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex$7(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$5(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$5(false)
};

var uncurryThis$v = functionUncurryThis;
var hasOwn$9 = hasOwnProperty_1;
var toIndexedObject$7 = toIndexedObject$a;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$5;

var push$2 = uncurryThis$v([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$7(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$9(hiddenKeys$3, key) && hasOwn$9(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$9(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$2);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$6 = getBuiltIn$8;
var uncurryThis$u = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$f = anObject$h;

var concat$1 = uncurryThis$u([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$6('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$f(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$8 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$3 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$8(target, key) && !(exceptions && hasOwn$8(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$y = fails$G;
var isCallable$e = isCallable$o;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$e(detection) ? fails$y(detection)
    : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var globalThis$w = globalThis_1;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$a;
var defineBuiltIn$b = defineBuiltIn$c;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var isForced$2 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis$w;
  } else if (STATIC) {
    target = globalThis$w[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis$w[TARGET] && globalThis$w[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$3(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$2(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$8(sourceProperty, 'sham', true);
    }
    defineBuiltIn$b(target, key, sourceProperty, options);
  }
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$6 = FunctionPrototype.apply;
var call$i = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$i.bind(apply$6) : function () {
  return call$i.apply(apply$6, arguments);
});

var uncurryThis$t = functionUncurryThis;
var aCallable$9 = aCallable$b;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$t(aCallable$9(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isObject$h = isObject$n;

var isPossiblePrototype$1 = function (argument) {
  return isObject$h(argument) || argument === null;
};

var isPossiblePrototype = isPossiblePrototype$1;

var $String$1 = String;
var $TypeError$e = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError$e("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor$2 = functionUncurryThisAccessor;
var isObject$g = isObject$n;
var requireObjectCoercible$6 = requireObjectCoercible$9;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor$2(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible$6(O);
    aPossiblePrototype(proto);
    if (!isObject$g(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty$5 = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty$5(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var isCallable$d = isCallable$o;
var isObject$f = isObject$n;
var setPrototypeOf$6 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$4 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$6 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$d(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$f(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$6($this, NewTargetPrototype);
  return $this;
};

var wellKnownSymbol$l = wellKnownSymbol$n;

var TO_STRING_TAG$3 = wellKnownSymbol$l('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$c = isCallable$o;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$k = wellKnownSymbol$n;

var TO_STRING_TAG$2 = wellKnownSymbol$k('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$f = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) === 'Object' && isCallable$c(O.callee) ? 'Arguments' : result;
};

var classof$e = classof$f;

var $String = String;

var toString$b = function (argument) {
  if (classof$e(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var toString$a = toString$b;

var normalizeStringArgument$2 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$a(argument);
};

var isObject$e = isObject$n;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$a;

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
var installErrorCause$1 = function (O, options) {
  if (isObject$e(options) && 'cause' in options) {
    createNonEnumerableProperty$7(O, 'cause', options.cause);
  }
};

var uncurryThis$s = functionUncurryThis;

var $Error = Error;
var replace$3 = uncurryThis$s(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var errorStackClear = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace$3(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var fails$x = fails$G;
var createPropertyDescriptor$3 = createPropertyDescriptor$6;

var errorStackInstallable = !fails$x(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor$3(1, 7));
  return error.stack !== 7;
});

var createNonEnumerableProperty$6 = createNonEnumerableProperty$a;
var clearErrorStack = errorStackClear;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

var errorStackInstall = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty$6(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};

var getBuiltIn$5 = getBuiltIn$8;
var hasOwn$7 = hasOwnProperty_1;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$a;
var isPrototypeOf$5 = objectIsPrototypeOf;
var setPrototypeOf$5 = objectSetPrototypeOf;
var copyConstructorProperties$1 = copyConstructorProperties$3;
var proxyAccessor = proxyAccessor$1;
var inheritIfRequired$3 = inheritIfRequired$4;
var normalizeStringArgument$1 = normalizeStringArgument$2;
var installErrorCause = installErrorCause$1;
var installErrorStack = errorStackInstall;
var DESCRIPTORS$d = descriptors;

var wrapErrorConstructorWithCause$1 = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn$5.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (hasOwn$7(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn$5('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument$1(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty$5(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf$5(OriginalErrorPrototype, this)) inheritIfRequired$3(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf$5) setPrototypeOf$5(WrappedError, BaseError);
    else copyConstructorProperties$1(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS$d && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties$1(WrappedError, OriginalError);

  try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty$5(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $$x = _export;
var globalThis$v = globalThis_1;
var apply$5 = functionApply;
var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$1;

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = globalThis$v[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED$9 = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED$9);
  $$x({ global: true, constructor: true, arity: 1, forced: FORCED$9 }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$9);
    $$x({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED$9 }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply$5(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply$5(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply$5(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply$5(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply$5(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply$5(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply$5(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply$5(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply$5(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply$5(init, this, arguments); };
});

var DESCRIPTORS$c = descriptors;
var fails$w = fails$G;
var anObject$e = anObject$h;
var normalizeStringArgument = normalizeStringArgument$2;

var nativeErrorToString = Error.prototype.toString;

var INCORRECT_TO_STRING$1 = fails$w(function () {
  if (DESCRIPTORS$c) {
    // Chrome 32- incorrectly call accessor
    // eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
    var object = Object.create(Object.defineProperty({}, 'name', { get: function () {
      return this === object;
    } }));
    if (nativeErrorToString.call(object) !== 'true') return true;
  }
  // FF10- does not properly handle non-strings
  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
});

var errorToString$1 = INCORRECT_TO_STRING$1 ? function toString() {
  var O = anObject$e(this);
  var name = normalizeStringArgument(O.name, 'Error');
  var message = normalizeStringArgument(O.message);
  return !name ? message : !message ? name : name + ': ' + message;
} : nativeErrorToString;

var defineBuiltIn$a = defineBuiltIn$c;
var errorToString = errorToString$1;

var ErrorPrototype = Error.prototype;

// `Error.prototype.toString` method fix
// https://tc39.es/ecma262/#sec-error.prototype.tostring
if (ErrorPrototype.toString !== errorToString) {
  defineBuiltIn$a(ErrorPrototype, 'toString', errorToString);
}

var classofRaw = classofRaw$2;
var uncurryThis$r = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$r(fn);
};

var uncurryThis$q = functionUncurryThisClause;
var aCallable$8 = aCallable$b;
var NATIVE_BIND = functionBindNative;

var bind$9 = uncurryThis$q(uncurryThis$q.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$8(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$9(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$d = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$4 = Array.isArray || function isArray(argument) {
  return classof$d(argument) === 'Array';
};

var uncurryThis$p = functionUncurryThis;
var fails$v = fails$G;
var isCallable$b = isCallable$o;
var classof$c = classof$f;
var getBuiltIn$4 = getBuiltIn$8;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var construct = getBuiltIn$4('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$p(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$b(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$b(argument)) return false;
  switch (classof$c(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$4 = !construct || fails$v(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isArray$3 = isArray$4;
var isConstructor$3 = isConstructor$4;
var isObject$d = isObject$n;
var wellKnownSymbol$j = wellKnownSymbol$n;

var SPECIES$6 = wellKnownSymbol$j('species');
var $Array$3 = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$3(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor$3(C) && (C === $Array$3 || isArray$3(C.prototype))) C = undefined;
    else if (isObject$d(C)) {
      C = C[SPECIES$6];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array$3 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$3 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$8 = functionBindContext;
var uncurryThis$o = functionUncurryThis;
var IndexedObject$3 = indexedObject;
var toObject$b = toObject$d;
var lengthOfArrayLike$h = lengthOfArrayLike$j;
var arraySpeciesCreate$2 = arraySpeciesCreate$3;

var push$1 = uncurryThis$o([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$4 = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$b($this);
    var self = IndexedObject$3(O);
    var length = lengthOfArrayLike$h(self);
    var boundFunction = bind$8(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$2;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$1(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$1(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$4(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$4(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$4(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$4(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$4(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$4(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$4(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$4(7)
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$b = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$d = anObject$h;
var toIndexedObject$6 = toIndexedObject$a;
var objectKeys = objectKeys$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$b && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$d(O);
  var props = toIndexedObject$6(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$3 = getBuiltIn$8;

var html$2 = getBuiltIn$3('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$c = anObject$h;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = hiddenKeys$5;
var html$1 = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$c(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$i = wellKnownSymbol$n;
var create$4 = objectCreate;
var defineProperty$4 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$i('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
  defineProperty$4(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$4(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$3 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var $$w = _export;
var $find$1 = arrayIteration.find;
var addToUnscopables$2 = addToUnscopables$3;

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$$w({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$2(FIND);

var DESCRIPTORS$a = descriptors;
var isArray$2 = isArray$4;

var $TypeError$d = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$a && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray$2(O) && !getOwnPropertyDescriptor$2(O, 'length').writable) {
    throw new $TypeError$d('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};

var $TypeError$c = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$3 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$c('Maximum allowed index exceeded');
  return it;
};

var $$v = _export;
var toObject$a = toObject$d;
var lengthOfArrayLike$g = lengthOfArrayLike$j;
var setArrayLength$1 = arraySetLength;
var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$3;
var fails$u = fails$G;

var INCORRECT_TO_LENGTH = fails$u(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED$8 = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$$v({ target: 'Array', proto: true, arity: 1, forced: FORCED$8 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject$a(this);
    var len = lengthOfArrayLike$g(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger$2(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength$1(O, len);
    return len;
  }
});

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$b = classof$f;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$b(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$9 = defineBuiltIn$c;
var toString$9 = objectToString;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$9(Object.prototype, 'toString', toString$9, { unsafe: true });
}

var _RE2Flags;
//// Parser flags.
var RE2Flags = /*#__PURE__*/_createClass(function RE2Flags() {
  _classCallCheck(this, RE2Flags);
});
_RE2Flags = RE2Flags;
// Fold case during matching (case-insensitive).
_defineProperty(RE2Flags, "FOLD_CASE", 0x01);
// Treat pattern as a literal string instead of a regexp.
_defineProperty(RE2Flags, "LITERAL", 0x02);
// Allow character classes like [^a-z] and [[:space:]] to match newline.
_defineProperty(RE2Flags, "CLASS_NL", 0x04);
// Allow '.' to match newline.
_defineProperty(RE2Flags, "DOT_NL", 0x08);
// Treat ^ and $ as only matching at beginning and end of text, not
// around embedded newlines.  (Perl's default).
_defineProperty(RE2Flags, "ONE_LINE", 0x10);
// Make repetition operators default to non-greedy.
_defineProperty(RE2Flags, "NON_GREEDY", 0x20);
// allow Perl extensions:
//   non-capturing parens - (?: )
//   non-greedy operators - *? +? ?? {}?
//   flag edits - (?i) (?-i) (?i: )
//     i - FoldCase
//     m - !OneLine
//     s - DotNL
//     U - NonGreedy
//   line ends: \A \z
//   \Q and \E to disable/enable metacharacters
//   (?P<name>expr) for named captures
// \C (any byte) is not supported.
_defineProperty(RE2Flags, "PERL_X", 0x40);
// Allow \p{Han}, \P{Han} for Unicode group and negation.
_defineProperty(RE2Flags, "UNICODE_GROUPS", 0x80);
// Regexp END_TEXT was $, not \z.  Internal use only.
_defineProperty(RE2Flags, "WAS_DOLLAR", 0x100);
_defineProperty(RE2Flags, "MATCH_NL", _RE2Flags.CLASS_NL | _RE2Flags.DOT_NL);
// As close to Perl as possible.
_defineProperty(RE2Flags, "PERL", _RE2Flags.CLASS_NL | _RE2Flags.ONE_LINE | _RE2Flags.PERL_X | _RE2Flags.UNICODE_GROUPS);
// POSIX syntax.
_defineProperty(RE2Flags, "POSIX", 0);
//// Anchors
_defineProperty(RE2Flags, "UNANCHORED", 0);
_defineProperty(RE2Flags, "ANCHOR_START", 1);
_defineProperty(RE2Flags, "ANCHOR_BOTH", 2);

var fails$t = fails$G;
var wellKnownSymbol$h = wellKnownSymbol$n;
var V8_VERSION$2 = environmentV8Version;

var SPECIES$5 = wellKnownSymbol$h('species');

var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$2 >= 51 || !fails$t(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$5] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$u = _export;
var $map$1 = arrayIteration.map;
var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;

var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$$u({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var anObject$b = anObject$h;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$b(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var call$h = functionCall;
var hasOwn$6 = hasOwnProperty_1;
var isPrototypeOf$4 = objectIsPrototypeOf;
var regExpFlags$1 = regexpFlags$1;

var RegExpPrototype$3 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$3) && !hasOwn$6(R, 'flags') && isPrototypeOf$4(RegExpPrototype$3, R)
    ? call$h(regExpFlags$1, R) : flags;
};

var PROPER_FUNCTION_NAME$2 = functionName.PROPER;
var defineBuiltIn$8 = defineBuiltIn$c;
var anObject$a = anObject$h;
var $toString = toString$b;
var fails$s = fails$G;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype$2 = RegExp.prototype;
var nativeToString = RegExpPrototype$2[TO_STRING];

var NOT_GENERIC = fails$s(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$2 && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$8(RegExpPrototype$2, TO_STRING, function toString() {
    var R = anObject$a(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var uncurryThis$n = functionUncurryThis;
var toIntegerOrInfinity$a = toIntegerOrInfinity$d;
var toString$8 = toString$b;
var requireObjectCoercible$5 = requireObjectCoercible$9;

var charAt$5 = uncurryThis$n(''.charAt);
var charCodeAt = uncurryThis$n(''.charCodeAt);
var stringSlice$4 = uncurryThis$n(''.slice);

var createMethod$3 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$8(requireObjectCoercible$5($this));
    var position = toIntegerOrInfinity$a(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$5(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$4(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$3(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$3(true)
};

var $$t = _export;
var codeAt = stringMultibyte.codeAt;

// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
$$t({ target: 'String', proto: true }, {
  codePointAt: function codePointAt(pos) {
    return codeAt(this, pos);
  }
});

var call$g = functionCall;
var anObject$9 = anObject$h;
var getMethod$3 = getMethod$5;

var iteratorClose$2 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$9(iterator);
  try {
    innerResult = getMethod$3(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$g(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$9(innerResult);
  return value;
};

var anObject$8 = anObject$h;
var iteratorClose$1 = iteratorClose$2;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$8(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose$1(iterator, 'throw', error);
  }
};

var iterators = {};

var wellKnownSymbol$g = wellKnownSymbol$n;
var Iterators$4 = iterators;

var ITERATOR$6 = wellKnownSymbol$g('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$3 = function (it) {
  return it !== undefined && (Iterators$4.Array === it || ArrayPrototype[ITERATOR$6] === it);
};

var DESCRIPTORS$9 = descriptors;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$6;

var createProperty$4 = function (object, key, value) {
  if (DESCRIPTORS$9) definePropertyModule$1.f(object, key, createPropertyDescriptor$2(0, value));
  else object[key] = value;
};

var classof$a = classof$f;
var getMethod$2 = getMethod$5;
var isNullOrUndefined$5 = isNullOrUndefined$8;
var Iterators$3 = iterators;
var wellKnownSymbol$f = wellKnownSymbol$n;

var ITERATOR$5 = wellKnownSymbol$f('iterator');

var getIteratorMethod$4 = function (it) {
  if (!isNullOrUndefined$5(it)) return getMethod$2(it, ITERATOR$5)
    || getMethod$2(it, '@@iterator')
    || Iterators$3[classof$a(it)];
};

var call$f = functionCall;
var aCallable$7 = aCallable$b;
var anObject$7 = anObject$h;
var tryToString$4 = tryToString$6;
var getIteratorMethod$3 = getIteratorMethod$4;

var $TypeError$b = TypeError;

var getIterator$3 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$3(argument) : usingIterator;
  if (aCallable$7(iteratorMethod)) return anObject$7(call$f(iteratorMethod, argument));
  throw new $TypeError$b(tryToString$4(argument) + ' is not iterable');
};

var bind$7 = functionBindContext;
var call$e = functionCall;
var toObject$9 = toObject$d;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
var isConstructor$2 = isConstructor$4;
var lengthOfArrayLike$f = lengthOfArrayLike$j;
var createProperty$3 = createProperty$4;
var getIterator$2 = getIterator$3;
var getIteratorMethod$2 = getIteratorMethod$4;

var $Array$2 = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$9(arrayLike);
  var IS_CONSTRUCTOR = isConstructor$2(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$7(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$2(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array$2 && isArrayIteratorMethod$2(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator$2(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call$e(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty$3(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$f(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$2(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$3(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var wellKnownSymbol$e = wellKnownSymbol$n;

var ITERATOR$4 = wellKnownSymbol$e('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$4] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$4 = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$4] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var $$s = _export;
var from = arrayFrom;
var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;

var INCORRECT_ITERATION = !checkCorrectnessOfIteration$3(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$$s({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});

var fails$r = fails$G;

var arrayMethodIsStrict$3 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$r(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $$r = _export;
var uncurryThis$m = functionUncurryThisClause;
var $indexOf$1 = arrayIncludes.indexOf;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;

var nativeIndexOf = uncurryThis$m([].indexOf);

var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED$7 = NEGATIVE_ZERO$1 || !arrayMethodIsStrict$2('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$$r({ target: 'Array', proto: true, forced: FORCED$7 }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO$1
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf$1(this, searchElement, fromIndex);
  }
});

var fails$q = fails$G;

var correctPrototypeGetter = !fails$q(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$5 = hasOwnProperty_1;
var isCallable$a = isCallable$o;
var toObject$8 = toObject$d;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype$2 = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$8(O);
  if (hasOwn$5(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$a(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype$2 : null;
};

var fails$p = fails$G;
var isCallable$9 = isCallable$o;
var isObject$c = isObject$n;
var getPrototypeOf$3 = objectGetPrototypeOf;
var defineBuiltIn$7 = defineBuiltIn$c;
var wellKnownSymbol$d = wellKnownSymbol$n;

var ITERATOR$3 = wellKnownSymbol$d('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(getPrototypeOf$3(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$c(IteratorPrototype$2) || fails$p(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$3].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$9(IteratorPrototype$2[ITERATOR$3])) {
  defineBuiltIn$7(IteratorPrototype$2, ITERATOR$3, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$3 = objectDefineProperty.f;
var hasOwn$4 = hasOwnProperty_1;
var wellKnownSymbol$c = wellKnownSymbol$n;

var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');

var setToStringTag$5 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$4(target, TO_STRING_TAG$1)) {
    defineProperty$3(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$3 = objectCreate;
var createPropertyDescriptor$1 = createPropertyDescriptor$6;
var setToStringTag$4 = setToStringTag$5;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$3(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
  setToStringTag$4(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var $$q = _export;
var call$d = functionCall;
var FunctionName$1 = functionName;
var isCallable$8 = isCallable$o;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf$2 = objectGetPrototypeOf;
var setPrototypeOf$4 = objectSetPrototypeOf;
var setToStringTag$3 = setToStringTag$5;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$a;
var defineBuiltIn$6 = defineBuiltIn$c;
var wellKnownSymbol$b = wellKnownSymbol$n;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$1 = FunctionName$1.PROPER;
var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$2 = wellKnownSymbol$b('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$2]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$4) {
          setPrototypeOf$4(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$8(CurrentIteratorPrototype[ITERATOR$2])) {
          defineBuiltIn$6(CurrentIteratorPrototype, ITERATOR$2, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME$1) {
      createNonEnumerableProperty$4(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$d(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$6(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$q({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$2] !== defaultIterator) {
    defineBuiltIn$6(IterablePrototype, ITERATOR$2, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$3 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject$5 = toIndexedObject$a;
var addToUnscopables$1 = addToUnscopables$3;
var Iterators = iterators;
var InternalStateModule$6 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator$2 = iteratorDefine;
var createIterResultObject$2 = createIterResultObject$3;
var DESCRIPTORS$8 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$5 = InternalStateModule$6.set;
var getInternalState$4 = InternalStateModule$6.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
  setInternalState$5(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$5(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$4(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject$2(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject$2(index, false);
    case 'values': return createIterResultObject$2(target[index], false);
  } return createIterResultObject$2([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$8 && values.name !== 'values') try {
  defineProperty$2(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

var $$p = _export;
var uncurryThis$l = functionUncurryThis;
var IndexedObject$2 = indexedObject;
var toIndexedObject$4 = toIndexedObject$a;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$3;

var nativeJoin = uncurryThis$l([].join);

var ES3_STRINGS = IndexedObject$2 !== Object;
var FORCED$6 = ES3_STRINGS || !arrayMethodIsStrict$1('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$$p({ target: 'Array', proto: true, forced: FORCED$6 }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject$4(this), separator === undefined ? ',' : separator);
  }
});

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var makeBuiltIn = makeBuiltInExports;
var defineProperty$1 = objectDefineProperty;

var defineBuiltInAccessor$7 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$1.f(target, name, descriptor);
};

var defineBuiltIn$5 = defineBuiltIn$c;

var defineBuiltIns$2 = function (target, src, options) {
  for (var key in src) defineBuiltIn$5(target, key, src[key], options);
  return target;
};

var isPrototypeOf$3 = objectIsPrototypeOf;

var $TypeError$a = TypeError;

var anInstance$5 = function (it, Prototype) {
  if (isPrototypeOf$3(Prototype, it)) return it;
  throw new $TypeError$a('Incorrect invocation');
};

var toIntegerOrInfinity$9 = toIntegerOrInfinity$d;
var toLength$7 = toLength$9;

var $RangeError$5 = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$3 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$9(it);
  var length = toLength$7(number);
  if (number !== length) throw new $RangeError$5('Wrong length or index');
  return length;
};

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
var mathSign = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
};

var sign = mathSign;

var abs$1 = Math.abs;

var EPSILON = 2.220446049250313e-16; // Number.EPSILON
var INVERSE_EPSILON = 1 / EPSILON;

var roundTiesToEven = function (n) {
  return n + INVERSE_EPSILON - INVERSE_EPSILON;
};

var mathFloatRound = function (x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
  var n = +x;
  var absolute = abs$1(n);
  var s = sign(n);
  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
  var result = a - (a - absolute);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
  return s * result;
};

var floatRound = mathFloatRound;

var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
var mathFround = Math.fround || function fround(x) {
  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array$1 = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor$4 = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array$1(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number !== number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number !== number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor$4(log(number) / LN2);
    c = pow(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent += eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[index - 1] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa += pow(2, mantissaLength);
    exponent -= eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

var ieee754 = {
  pack: pack,
  unpack: unpack
};

var toObject$7 = toObject$d;
var toAbsoluteIndex$6 = toAbsoluteIndex$8;
var lengthOfArrayLike$e = lengthOfArrayLike$j;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$7(this);
  var length = lengthOfArrayLike$e(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$6(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$6(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var uncurryThis$k = functionUncurryThis;

var arraySlice$6 = uncurryThis$k([].slice);

var globalThis$u = globalThis_1;
var uncurryThis$j = functionUncurryThis;
var DESCRIPTORS$7 = descriptors;
var NATIVE_ARRAY_BUFFER$2 = arrayBufferBasicDetection;
var FunctionName = functionName;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$a;
var defineBuiltInAccessor$6 = defineBuiltInAccessor$7;
var defineBuiltIns$1 = defineBuiltIns$2;
var fails$o = fails$G;
var anInstance$4 = anInstance$5;
var toIntegerOrInfinity$8 = toIntegerOrInfinity$d;
var toLength$6 = toLength$9;
var toIndex$2 = toIndex$3;
var fround = mathFround;
var IEEE754 = ieee754;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setPrototypeOf$3 = objectSetPrototypeOf;
var arrayFill = arrayFill$1;
var arraySlice$5 = arraySlice$6;
var inheritIfRequired$2 = inheritIfRequired$4;
var copyConstructorProperties = copyConstructorProperties$3;
var setToStringTag$2 = setToStringTag$5;
var InternalStateModule$5 = internalState;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER$1 = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH$1 = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule$5.getterFor(ARRAY_BUFFER$1);
var getInternalDataViewState = InternalStateModule$5.getterFor(DATA_VIEW);
var setInternalState$4 = InternalStateModule$5.set;
var NativeArrayBuffer$1 = globalThis$u[ARRAY_BUFFER$1];
var $ArrayBuffer$1 = NativeArrayBuffer$1;
var ArrayBufferPrototype$4 = $ArrayBuffer$1 && $ArrayBuffer$1[PROTOTYPE];
var $DataView = globalThis$u[DATA_VIEW];
var DataViewPrototype$2 = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype$1 = Object.prototype;
var Array$1 = globalThis$u.Array;
var RangeError$3 = globalThis$u.RangeError;
var fill$1 = uncurryThis$j(arrayFill);
var reverse = uncurryThis$j([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(fround(number), 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter$1 = function (Constructor, key, getInternalState) {
  defineBuiltInAccessor$6(Constructor[PROTOTYPE], key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex$2(index);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice$5(bytes, start, start + count);
  return boolIsLittleEndian ? pack : reverse(pack);
};

var set$1 = function (view, count, index, conversion, value, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex$2(index);
  var pack = conversion(+value);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER$2) {
  $ArrayBuffer$1 = function ArrayBuffer(length) {
    anInstance$4(this, ArrayBufferPrototype$4);
    var byteLength = toIndex$2(length);
    setInternalState$4(this, {
      type: ARRAY_BUFFER$1,
      bytes: fill$1(Array$1(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS$7) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype$4 = $ArrayBuffer$1[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance$4(this, DataViewPrototype$2);
    anInstance$4(buffer, ArrayBufferPrototype$4);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity$8(byteOffset);
    if (offset < 0 || offset > bufferLength) throw new RangeError$3('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength$6(byteLength);
    if (offset + byteLength > bufferLength) throw new RangeError$3(WRONG_LENGTH$1);
    setInternalState$4(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS$7) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype$2 = $DataView[PROTOTYPE];

  if (DESCRIPTORS$7) {
    addGetter$1($ArrayBuffer$1, 'byteLength', getInternalArrayBufferState);
    addGetter$1($DataView, 'buffer', getInternalDataViewState);
    addGetter$1($DataView, 'byteLength', getInternalDataViewState);
    addGetter$1($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns$1(DataViewPrototype$2, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set$1(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set$1(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set$1(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set$1(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer$1.name !== ARRAY_BUFFER$1;
  /* eslint-disable no-new -- required for testing */
  if (!fails$o(function () {
    NativeArrayBuffer$1(1);
  }) || !fails$o(function () {
    new NativeArrayBuffer$1(-1);
  }) || fails$o(function () {
    new NativeArrayBuffer$1();
    new NativeArrayBuffer$1(1.5);
    new NativeArrayBuffer$1(NaN);
    return NativeArrayBuffer$1.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer$1 = function ArrayBuffer(length) {
      anInstance$4(this, ArrayBufferPrototype$4);
      return inheritIfRequired$2(new NativeArrayBuffer$1(toIndex$2(length)), this, $ArrayBuffer$1);
    };

    $ArrayBuffer$1[PROTOTYPE] = ArrayBufferPrototype$4;

    ArrayBufferPrototype$4.constructor = $ArrayBuffer$1;

    copyConstructorProperties($ArrayBuffer$1, NativeArrayBuffer$1);
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty$3(NativeArrayBuffer$1, 'name', ARRAY_BUFFER$1);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf$3 && getPrototypeOf$1(DataViewPrototype$2) !== ObjectPrototype$1) {
    setPrototypeOf$3(DataViewPrototype$2, ObjectPrototype$1);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer$1(2));
  var $setInt8 = uncurryThis$j(DataViewPrototype$2.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns$1(DataViewPrototype$2, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag$2($ArrayBuffer$1, ARRAY_BUFFER$1);
setToStringTag$2($DataView, DATA_VIEW);

var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer$1,
  DataView: $DataView
};

var getBuiltIn$2 = getBuiltIn$8;
var defineBuiltInAccessor$5 = defineBuiltInAccessor$7;
var wellKnownSymbol$a = wellKnownSymbol$n;
var DESCRIPTORS$6 = descriptors;

var SPECIES$4 = wellKnownSymbol$a('species');

var setSpecies$4 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$2(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$6 && Constructor && !Constructor[SPECIES$4]) {
    defineBuiltInAccessor$5(Constructor, SPECIES$4, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var $$o = _export;
var globalThis$t = globalThis_1;
var arrayBufferModule = arrayBuffer;
var setSpecies$3 = setSpecies$4;

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer$7 = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = globalThis$t[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$$o({ global: true, constructor: true, forced: NativeArrayBuffer !== ArrayBuffer$7 }, {
  ArrayBuffer: ArrayBuffer$7
});

setSpecies$3(ARRAY_BUFFER);

var isConstructor$1 = isConstructor$4;
var tryToString$3 = tryToString$6;

var $TypeError$9 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$2 = function (argument) {
  if (isConstructor$1(argument)) return argument;
  throw new $TypeError$9(tryToString$3(argument) + ' is not a constructor');
};

var anObject$6 = anObject$h;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$4 = isNullOrUndefined$8;
var wellKnownSymbol$9 = wellKnownSymbol$n;

var SPECIES$3 = wellKnownSymbol$9('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$3 = function (O, defaultConstructor) {
  var C = anObject$6(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$4(S = anObject$6(C)[SPECIES$3]) ? defaultConstructor : aConstructor$1(S);
};

var $$n = _export;
var uncurryThis$i = functionUncurryThisClause;
var fails$n = fails$G;
var ArrayBufferModule$2 = arrayBuffer;
var anObject$5 = anObject$h;
var toAbsoluteIndex$5 = toAbsoluteIndex$8;
var toLength$5 = toLength$9;
var speciesConstructor$2 = speciesConstructor$3;

var ArrayBuffer$6 = ArrayBufferModule$2.ArrayBuffer;
var DataView$3 = ArrayBufferModule$2.DataView;
var DataViewPrototype$1 = DataView$3.prototype;
var nativeArrayBufferSlice = uncurryThis$i(ArrayBuffer$6.prototype.slice);
var getUint8 = uncurryThis$i(DataViewPrototype$1.getUint8);
var setUint8 = uncurryThis$i(DataViewPrototype$1.setUint8);

var INCORRECT_SLICE = fails$n(function () {
  return !new ArrayBuffer$6(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$$n({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject$5(this), start); // FF fix
    }
    var length = anObject$5(this).byteLength;
    var first = toAbsoluteIndex$5(start, length);
    var fin = toAbsoluteIndex$5(end === undefined ? length : end, length);
    var result = new (speciesConstructor$2(this, ArrayBuffer$6))(toLength$5(fin - first));
    var viewSource = new DataView$3(this);
    var viewTarget = new DataView$3(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});

var $$m = _export;
var ArrayBufferModule$1 = arrayBuffer;
var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;

// `DataView` constructor
// https://tc39.es/ecma262/#sec-dataview-constructor
$$m({ global: true, constructor: true, forced: !NATIVE_ARRAY_BUFFER$1 }, {
  DataView: ArrayBufferModule$1.DataView
});

var globalThis$s = globalThis_1;
var uncurryThisAccessor$1 = functionUncurryThisAccessor;
var classof$9 = classofRaw$2;

var ArrayBuffer$5 = globalThis$s.ArrayBuffer;
var TypeError$3 = globalThis$s.TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
var arrayBufferByteLength$2 = ArrayBuffer$5 && uncurryThisAccessor$1(ArrayBuffer$5.prototype, 'byteLength', 'get') || function (O) {
  if (classof$9(O) !== 'ArrayBuffer') throw new TypeError$3('ArrayBuffer expected');
  return O.byteLength;
};

var globalThis$r = globalThis_1;
var uncurryThis$h = functionUncurryThisClause;
var arrayBufferByteLength$1 = arrayBufferByteLength$2;

var ArrayBuffer$4 = globalThis$r.ArrayBuffer;
var ArrayBufferPrototype$3 = ArrayBuffer$4 && ArrayBuffer$4.prototype;
var slice$2 = ArrayBufferPrototype$3 && uncurryThis$h(ArrayBufferPrototype$3.slice);

var arrayBufferIsDetached = function (O) {
  if (arrayBufferByteLength$1(O) !== 0) return false;
  if (!slice$2) return false;
  try {
    slice$2(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};

var DESCRIPTORS$5 = descriptors;
var defineBuiltInAccessor$4 = defineBuiltInAccessor$7;
var isDetached$1 = arrayBufferIsDetached;

var ArrayBufferPrototype$2 = ArrayBuffer.prototype;

if (DESCRIPTORS$5 && !('detached' in ArrayBufferPrototype$2)) {
  defineBuiltInAccessor$4(ArrayBufferPrototype$2, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached$1(this);
    }
  });
}

var isDetached = arrayBufferIsDetached;

var $TypeError$8 = TypeError;

var arrayBufferNotDetached = function (it) {
  if (isDetached(it)) throw new $TypeError$8('ArrayBuffer is detached');
  return it;
};

/* global Bun, Deno -- detection */
var globalThis$q = globalThis_1;
var userAgent$5 = environmentUserAgent;
var classof$8 = classofRaw$2;

var userAgentStartsWith = function (string) {
  return userAgent$5.slice(0, string.length) === string;
};

var environment = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis$q.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis$q.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof$8(globalThis$q.process) === 'process') return 'NODE';
  if (globalThis$q.window && globalThis$q.document) return 'BROWSER';
  return 'REST';
})();

var ENVIRONMENT$2 = environment;

var environmentIsNode = ENVIRONMENT$2 === 'NODE';

var globalThis$p = globalThis_1;
var IS_NODE$3 = environmentIsNode;

var getBuiltInNodeModule$1 = function (name) {
  if (IS_NODE$3) {
    try {
      return globalThis$p.process.getBuiltinModule(name);
    } catch (error) { /* empty */ }
    try {
      // eslint-disable-next-line no-new-func -- safe
      return Function('return require("' + name + '")')();
    } catch (error) { /* empty */ }
  }
};

var globalThis$o = globalThis_1;
var fails$m = fails$G;
var V8$1 = environmentV8Version;
var ENVIRONMENT$1 = environment;

var structuredClone$2 = globalThis$o.structuredClone;

var structuredCloneProperTransfer = !!structuredClone$2 && !fails$m(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((ENVIRONMENT$1 === 'DENO' && V8$1 > 92) || (ENVIRONMENT$1 === 'NODE' && V8$1 > 94) || (ENVIRONMENT$1 === 'BROWSER' && V8$1 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone$2(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});

var globalThis$n = globalThis_1;
var getBuiltInNodeModule = getBuiltInNodeModule$1;
var PROPER_STRUCTURED_CLONE_TRANSFER$1 = structuredCloneProperTransfer;

var structuredClone$1 = globalThis$n.structuredClone;
var $ArrayBuffer = globalThis$n.ArrayBuffer;
var $MessageChannel = globalThis$n.MessageChannel;
var detach = false;
var WorkerThreads, channel$1, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER$1) {
  detach = function (transferable) {
    structuredClone$1(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = getBuiltInNodeModule('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel$1 = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel$1.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

var detachTransferable$1 = detach;

var globalThis$m = globalThis_1;
var uncurryThis$g = functionUncurryThis;
var uncurryThisAccessor = functionUncurryThisAccessor;
var toIndex$1 = toIndex$3;
var notDetached = arrayBufferNotDetached;
var arrayBufferByteLength = arrayBufferByteLength$2;
var detachTransferable = detachTransferable$1;
var PROPER_STRUCTURED_CLONE_TRANSFER = structuredCloneProperTransfer;

var structuredClone = globalThis$m.structuredClone;
var ArrayBuffer$3 = globalThis$m.ArrayBuffer;
var DataView$2 = globalThis$m.DataView;
var min$5 = Math.min;
var ArrayBufferPrototype$1 = ArrayBuffer$3.prototype;
var DataViewPrototype = DataView$2.prototype;
var slice$1 = uncurryThis$g(ArrayBufferPrototype$1.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype$1, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype$1, 'maxByteLength', 'get');
var getInt8 = uncurryThis$g(DataViewPrototype.getInt8);
var setInt8 = uncurryThis$g(DataViewPrototype.setInt8);

var arrayBufferTransfer = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex$1(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  notDetached(arrayBuffer);
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice$1(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
    newBuffer = new ArrayBuffer$3(newByteLength, options);
    var a = new DataView$2(arrayBuffer);
    var b = new DataView$2(newBuffer);
    var copyLength = min$5(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};

var $$l = _export;
var $transfer$1 = arrayBufferTransfer;

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer$1) $$l({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer$1(this, arguments.length ? arguments[0] : undefined, true);
  }
});

var $$k = _export;
var $transfer = arrayBufferTransfer;

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $$k({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});

var $$j = _export;
var globalThis$l = globalThis_1;

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$$j({ global: true, forced: globalThis$l.globalThis !== globalThis$l }, {
  globalThis: globalThis$l
});

var $$i = _export;
var uncurryThis$f = functionUncurryThis;
var toAbsoluteIndex$4 = toAbsoluteIndex$8;

var $RangeError$4 = RangeError;
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join$1 = uncurryThis$f([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$$i({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex$4(code, 0x10FFFF) !== code) throw new $RangeError$4(code + ' is not a valid code point');
      elements[i] = code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join$1(elements, '');
  }
});

var charAt$4 = stringMultibyte.charAt;
var toString$7 = toString$b;
var InternalStateModule$4 = internalState;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$3;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$3 = InternalStateModule$4.set;
var getInternalState$3 = InternalStateModule$4.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator$1(String, 'String', function (iterated) {
  setInternalState$3(this, {
    type: STRING_ITERATOR,
    string: toString$7(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$3(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject$1(undefined, true);
  point = charAt$4(string, index);
  state.index += point.length;
  return createIterResultObject$1(point, false);
});

var typedArrayConstructor = {exports: {}};

var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
var DESCRIPTORS$4 = descriptors;
var globalThis$k = globalThis_1;
var isCallable$7 = isCallable$o;
var isObject$b = isObject$n;
var hasOwn$3 = hasOwnProperty_1;
var classof$7 = classof$f;
var tryToString$2 = tryToString$6;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$a;
var defineBuiltIn$4 = defineBuiltIn$c;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$7;
var isPrototypeOf$2 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var wellKnownSymbol$8 = wellKnownSymbol$n;
var uid$1 = uid$4;
var InternalStateModule$3 = internalState;

var enforceInternalState$1 = InternalStateModule$3.enforce;
var getInternalState$2 = InternalStateModule$3.get;
var Int8Array$4 = globalThis$k.Int8Array;
var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
var Uint8ClampedArray$1 = globalThis$k.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
var TypedArray$1 = Int8Array$4 && getPrototypeOf(Int8Array$4);
var TypedArrayPrototype$2 = Int8ArrayPrototype$1 && getPrototypeOf(Int8ArrayPrototype$1);
var ObjectPrototype = Object.prototype;
var TypeError$2 = globalThis$k.TypeError;

var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');
var TYPED_ARRAY_TAG$1 = uid$1('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$2 && classof$7(globalThis$k.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject$b(it)) return false;
  var klass = classof$7(it);
  return klass === 'DataView'
    || hasOwn$3(TypedArrayConstructorsList, klass)
    || hasOwn$3(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor$4 = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject$b(proto)) return;
  var state = getInternalState$2(proto);
  return (state && hasOwn$3(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor$4(proto);
};

var isTypedArray$1 = function (it) {
  if (!isObject$b(it)) return false;
  var klass = classof$7(it);
  return hasOwn$3(TypedArrayConstructorsList, klass)
    || hasOwn$3(BigIntArrayConstructorsList, klass);
};

var aTypedArray$s = function (it) {
  if (isTypedArray$1(it)) return it;
  throw new TypeError$2('Target is not a typed array');
};

var aTypedArrayConstructor$2 = function (C) {
  if (isCallable$7(C) && (!setPrototypeOf$2 || isPrototypeOf$2(TypedArray$1, C))) return C;
  throw new TypeError$2(tryToString$2(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$t = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$4) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = globalThis$k[ARRAY];
    if (TypedArrayConstructor && hasOwn$3(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype$2[KEY] || forced) {
    defineBuiltIn$4(TypedArrayPrototype$2, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS$4) return;
  if (setPrototypeOf$2) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = globalThis$k[ARRAY];
      if (TypedArrayConstructor && hasOwn$3(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray$1[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn$4(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = globalThis$k[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$4(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = globalThis$k[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = globalThis$k[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$7(TypedArray$1) || TypedArray$1 === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray$1 = function TypedArray() {
    throw new TypeError$2('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (globalThis$k[NAME]) setPrototypeOf$2(globalThis$k[NAME], TypedArray$1);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$2 || TypedArrayPrototype$2 === ObjectPrototype) {
  TypedArrayPrototype$2 = TypedArray$1.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (globalThis$k[NAME]) setPrototypeOf$2(globalThis$k[NAME].prototype, TypedArrayPrototype$2);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$2) {
  setPrototypeOf$2(Uint8ClampedArrayPrototype, TypedArrayPrototype$2);
}

if (DESCRIPTORS$4 && !hasOwn$3(TypedArrayPrototype$2, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$3(TypedArrayPrototype$2, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject$b(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (globalThis$k[NAME]) {
    createNonEnumerableProperty$2(globalThis$k[NAME], TYPED_ARRAY_TAG$1, NAME);
  }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
  aTypedArray: aTypedArray$s,
  aTypedArrayConstructor: aTypedArrayConstructor$2,
  exportTypedArrayMethod: exportTypedArrayMethod$t,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor$4,
  isView: isView,
  isTypedArray: isTypedArray$1,
  TypedArray: TypedArray$1,
  TypedArrayPrototype: TypedArrayPrototype$2
};

/* eslint-disable no-new -- required for testing */
var globalThis$j = globalThis_1;
var fails$l = fails$G;
var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer$2 = globalThis$j.ArrayBuffer;
var Int8Array$3 = globalThis$j.Int8Array;

var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$l(function () {
  Int8Array$3(1);
}) || !fails$l(function () {
  new Int8Array$3(-1);
}) || !checkCorrectnessOfIteration$2(function (iterable) {
  new Int8Array$3();
  new Int8Array$3(null);
  new Int8Array$3(1.5);
  new Int8Array$3(iterable);
}, true) || fails$l(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
});

var isObject$a = isObject$n;

var floor$3 = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
  return !isObject$a(it) && isFinite(it) && floor$3(it) === it;
};

var toIntegerOrInfinity$7 = toIntegerOrInfinity$d;

var $RangeError$3 = RangeError;

var toPositiveInteger$1 = function (it) {
  var result = toIntegerOrInfinity$7(it);
  if (result < 0) throw new $RangeError$3("The argument can't be less than 0");
  return result;
};

var toPositiveInteger = toPositiveInteger$1;

var $RangeError$2 = RangeError;

var toOffset$2 = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw new $RangeError$2('Wrong offset');
  return offset;
};

var round = Math.round;

var toUint8Clamped$1 = function (it) {
  var value = round(it);
  return value < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
};

var classof$6 = classof$f;

var isBigIntArray$2 = function (it) {
  var klass = classof$6(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;

var $TypeError$7 = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$3 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError$7("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var bind$6 = functionBindContext;
var call$c = functionCall;
var aConstructor = aConstructor$2;
var toObject$6 = toObject$d;
var lengthOfArrayLike$d = lengthOfArrayLike$j;
var getIterator$1 = getIterator$3;
var getIteratorMethod$1 = getIteratorMethod$4;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
var isBigIntArray$1 = isBigIntArray$2;
var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
var toBigInt$2 = toBigInt$3;

var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject$6(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod$1(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod$1(iteratorMethod)) {
    iterator = getIterator$1(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call$c(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind$6(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike$d(O);
  result = new (aTypedArrayConstructor$1(C))(length);
  thisIsBigIntArray = isBigIntArray$1(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt$2(value) : +value;
  }
  return result;
};

var lengthOfArrayLike$c = lengthOfArrayLike$j;

var arrayFromConstructorAndList$3 = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike$c(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var $$h = _export;
var globalThis$i = globalThis_1;
var call$b = functionCall;
var DESCRIPTORS$3 = descriptors;
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
var ArrayBufferViewCore$t = arrayBufferViewCore;
var ArrayBufferModule = arrayBuffer;
var anInstance$3 = anInstance$5;
var createPropertyDescriptor = createPropertyDescriptor$6;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$a;
var isIntegralNumber = isIntegralNumber$1;
var toLength$4 = toLength$9;
var toIndex = toIndex$3;
var toOffset$1 = toOffset$2;
var toUint8Clamped = toUint8Clamped$1;
var toPropertyKey = toPropertyKey$3;
var hasOwn$2 = hasOwnProperty_1;
var classof$5 = classof$f;
var isObject$9 = isObject$n;
var isSymbol = isSymbol$3;
var create$2 = objectCreate;
var isPrototypeOf$1 = objectIsPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var typedArrayFrom = typedArrayFrom$1;
var forEach = arrayIteration.forEach;
var setSpecies$2 = setSpecies$4;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$7;
var definePropertyModule = objectDefineProperty;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var arrayFromConstructorAndList$2 = arrayFromConstructorAndList$3;
var InternalStateModule$2 = internalState;
var inheritIfRequired$1 = inheritIfRequired$4;

var getInternalState$1 = InternalStateModule$2.get;
var setInternalState$2 = InternalStateModule$2.set;
var enforceInternalState = InternalStateModule$2.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var RangeError$2 = globalThis$i.RangeError;
var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer$1.prototype;
var DataView$1 = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$t.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore$t.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore$t.TypedArray;
var TypedArrayPrototype$1 = ArrayBufferViewCore$t.TypedArrayPrototype;
var isTypedArray = ArrayBufferViewCore$t.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var addGetter = function (it, key) {
  defineBuiltInAccessor$2(it, key, {
    configurable: true,
    get: function () {
      return getInternalState$1(this)[key];
    }
  });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf$1(ArrayBufferPrototype, it) || (klass = classof$5(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject$9(descriptor)
    && hasOwn$2(descriptor, 'value')
    && !hasOwn$2(descriptor, 'get')
    && !hasOwn$2(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn$2(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn$2(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS$3) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype$1, 'buffer');
    addGetter(TypedArrayPrototype$1, 'byteOffset');
    addGetter(TypedArrayPrototype$1, 'byteLength');
    addGetter(TypedArrayPrototype$1, 'length');
  }

  $$h({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = globalThis$i[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState$1(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState$1(that);
      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance$3(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject$9(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer$1(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset$1(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw new RangeError$2(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw new RangeError$2(WRONG_LENGTH);
          } else {
            byteLength = toLength$4($length) * BYTES;
            if (byteLength + byteOffset > $len) throw new RangeError$2(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return arrayFromConstructorAndList$2(TypedArrayConstructor, data);
        } else {
          return call$b(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState$2(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView$1(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf$1) setPrototypeOf$1(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$2(TypedArrayPrototype$1);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance$3(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired$1(function () {
          if (!isObject$9(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return arrayFromConstructorAndList$2(TypedArrayConstructor, data);
          return call$b(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf$1) setPrototypeOf$1(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty$1(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $$h({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty$1(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies$2(CONSTRUCTOR_NAME);
  };
} else typedArrayConstructor.exports = function () { /* empty */ };

var typedArrayConstructorExports = typedArrayConstructor.exports;

var createTypedArrayConstructor = typedArrayConstructorExports;

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var ArrayBufferViewCore$s = arrayBufferViewCore;
var lengthOfArrayLike$b = lengthOfArrayLike$j;
var toIntegerOrInfinity$6 = toIntegerOrInfinity$d;

var aTypedArray$r = ArrayBufferViewCore$s.aTypedArray;
var exportTypedArrayMethod$s = ArrayBufferViewCore$s.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod$s('at', function at(index) {
  var O = aTypedArray$r(this);
  var len = lengthOfArrayLike$b(O);
  var relativeIndex = toIntegerOrInfinity$6(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});

var tryToString$1 = tryToString$6;

var $TypeError$6 = TypeError;

var deletePropertyOrThrow$2 = function (O, P) {
  if (!delete O[P]) throw new $TypeError$6('Cannot delete property ' + tryToString$1(P) + ' of ' + tryToString$1(O));
};

var toObject$5 = toObject$d;
var toAbsoluteIndex$3 = toAbsoluteIndex$8;
var lengthOfArrayLike$a = lengthOfArrayLike$j;
var deletePropertyOrThrow$1 = deletePropertyOrThrow$2;

var min$4 = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject$5(this);
  var len = lengthOfArrayLike$a(O);
  var to = toAbsoluteIndex$3(target, len);
  var from = toAbsoluteIndex$3(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min$4((end === undefined ? len : toAbsoluteIndex$3(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else deletePropertyOrThrow$1(O, to);
    to += inc;
    from += inc;
  } return O;
};

var uncurryThis$e = functionUncurryThis;
var ArrayBufferViewCore$r = arrayBufferViewCore;
var $ArrayCopyWithin = arrayCopyWithin;

var u$ArrayCopyWithin = uncurryThis$e($ArrayCopyWithin);
var aTypedArray$q = ArrayBufferViewCore$r.aTypedArray;
var exportTypedArrayMethod$r = ArrayBufferViewCore$r.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod$r('copyWithin', function copyWithin(target, start /* , end */) {
  return u$ArrayCopyWithin(aTypedArray$q(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});

var ArrayBufferViewCore$q = arrayBufferViewCore;
var $every = arrayIteration.every;

var aTypedArray$p = ArrayBufferViewCore$q.aTypedArray;
var exportTypedArrayMethod$q = ArrayBufferViewCore$q.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod$q('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray$p(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$p = arrayBufferViewCore;
var $fill = arrayFill$1;
var toBigInt$1 = toBigInt$3;
var classof$4 = classof$f;
var call$a = functionCall;
var uncurryThis$d = functionUncurryThis;
var fails$k = fails$G;

var aTypedArray$o = ArrayBufferViewCore$p.aTypedArray;
var exportTypedArrayMethod$p = ArrayBufferViewCore$p.exportTypedArrayMethod;
var slice = uncurryThis$d(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails$k(function () {
  var count = 0;
  // eslint-disable-next-line es/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod$p('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray$o(this);
  var actualValue = slice(classof$4(this), 0, 3) === 'Big' ? toBigInt$1(value) : +value;
  return call$a($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);

var ArrayBufferViewCore$o = arrayBufferViewCore;
var speciesConstructor$1 = speciesConstructor$3;

var aTypedArrayConstructor = ArrayBufferViewCore$o.aTypedArrayConstructor;
var getTypedArrayConstructor$3 = ArrayBufferViewCore$o.getTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
var typedArraySpeciesConstructor$4 = function (originalArray) {
  return aTypedArrayConstructor(speciesConstructor$1(originalArray, getTypedArrayConstructor$3(originalArray)));
};

var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$3;
var typedArraySpeciesConstructor$3 = typedArraySpeciesConstructor$4;

var typedArrayFromSpeciesAndList = function (instance, list) {
  return arrayFromConstructorAndList$1(typedArraySpeciesConstructor$3(instance), list);
};

var ArrayBufferViewCore$n = arrayBufferViewCore;
var $filter = arrayIteration.filter;
var fromSpeciesAndList = typedArrayFromSpeciesAndList;

var aTypedArray$n = ArrayBufferViewCore$n.aTypedArray;
var exportTypedArrayMethod$o = ArrayBufferViewCore$n.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod$o('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray$n(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSpeciesAndList(this, list);
});

var ArrayBufferViewCore$m = arrayBufferViewCore;
var $find = arrayIteration.find;

var aTypedArray$m = ArrayBufferViewCore$m.aTypedArray;
var exportTypedArrayMethod$n = ArrayBufferViewCore$m.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod$n('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray$m(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$l = arrayBufferViewCore;
var $findIndex = arrayIteration.findIndex;

var aTypedArray$l = ArrayBufferViewCore$l.aTypedArray;
var exportTypedArrayMethod$m = ArrayBufferViewCore$l.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod$m('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray$l(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var bind$5 = functionBindContext;
var IndexedObject$1 = indexedObject;
var toObject$4 = toObject$d;
var lengthOfArrayLike$9 = lengthOfArrayLike$j;

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod$2 = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE === 1;
  return function ($this, callbackfn, that) {
    var O = toObject$4($this);
    var self = IndexedObject$1(O);
    var index = lengthOfArrayLike$9(self);
    var boundFunction = bind$5(callbackfn, that);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

var arrayIterationFromLast = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod$2(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod$2(1)
};

var ArrayBufferViewCore$k = arrayBufferViewCore;
var $findLast = arrayIterationFromLast.findLast;

var aTypedArray$k = ArrayBufferViewCore$k.aTypedArray;
var exportTypedArrayMethod$l = ArrayBufferViewCore$k.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
exportTypedArrayMethod$l('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray$k(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$j = arrayBufferViewCore;
var $findLastIndex = arrayIterationFromLast.findLastIndex;

var aTypedArray$j = ArrayBufferViewCore$j.aTypedArray;
var exportTypedArrayMethod$k = ArrayBufferViewCore$j.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
exportTypedArrayMethod$k('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray$j(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$i = arrayBufferViewCore;
var $forEach = arrayIteration.forEach;

var aTypedArray$i = ArrayBufferViewCore$i.aTypedArray;
var exportTypedArrayMethod$j = ArrayBufferViewCore$i.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod$j('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray$i(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$h = arrayBufferViewCore;
var $includes = arrayIncludes.includes;

var aTypedArray$h = ArrayBufferViewCore$h.aTypedArray;
var exportTypedArrayMethod$i = ArrayBufferViewCore$h.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod$i('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray$h(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$g = arrayBufferViewCore;
var $indexOf = arrayIncludes.indexOf;

var aTypedArray$g = ArrayBufferViewCore$g.aTypedArray;
var exportTypedArrayMethod$h = ArrayBufferViewCore$g.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod$h('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray$g(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

var globalThis$h = globalThis_1;
var fails$j = fails$G;
var uncurryThis$c = functionUncurryThis;
var ArrayBufferViewCore$f = arrayBufferViewCore;
var ArrayIterators = es_array_iterator;
var wellKnownSymbol$7 = wellKnownSymbol$n;

var ITERATOR$1 = wellKnownSymbol$7('iterator');
var Uint8Array$2 = globalThis$h.Uint8Array;
var arrayValues = uncurryThis$c(ArrayIterators.values);
var arrayKeys = uncurryThis$c(ArrayIterators.keys);
var arrayEntries = uncurryThis$c(ArrayIterators.entries);
var aTypedArray$f = ArrayBufferViewCore$f.aTypedArray;
var exportTypedArrayMethod$g = ArrayBufferViewCore$f.exportTypedArrayMethod;
var TypedArrayPrototype = Uint8Array$2 && Uint8Array$2.prototype;

var GENERIC = !fails$j(function () {
  TypedArrayPrototype[ITERATOR$1].call([1]);
});

var ITERATOR_IS_VALUES = !!TypedArrayPrototype
  && TypedArrayPrototype.values
  && TypedArrayPrototype[ITERATOR$1] === TypedArrayPrototype.values
  && TypedArrayPrototype.values.name === 'values';

var typedArrayValues = function values() {
  return arrayValues(aTypedArray$f(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod$g('entries', function entries() {
  return arrayEntries(aTypedArray$f(this));
}, GENERIC);
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod$g('keys', function keys() {
  return arrayKeys(aTypedArray$f(this));
}, GENERIC);
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod$g('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod$g(ITERATOR$1, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });

var ArrayBufferViewCore$e = arrayBufferViewCore;
var uncurryThis$b = functionUncurryThis;

var aTypedArray$e = ArrayBufferViewCore$e.aTypedArray;
var exportTypedArrayMethod$f = ArrayBufferViewCore$e.exportTypedArrayMethod;
var $join = uncurryThis$b([].join);

// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
exportTypedArrayMethod$f('join', function join(separator) {
  return $join(aTypedArray$e(this), separator);
});

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply$4 = functionApply;
var toIndexedObject$3 = toIndexedObject$a;
var toIntegerOrInfinity$5 = toIntegerOrInfinity$d;
var lengthOfArrayLike$8 = lengthOfArrayLike$j;
var arrayMethodIsStrict = arrayMethodIsStrict$3;

var min$3 = Math.min;
var $lastIndexOf$1 = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf$1 && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED$5 = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
var arrayLastIndexOf = FORCED$5 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply$4($lastIndexOf$1, this, arguments) || 0;
  var O = toIndexedObject$3(this);
  var length = lengthOfArrayLike$8(O);
  if (length === 0) return -1;
  var index = length - 1;
  if (arguments.length > 1) index = min$3(index, toIntegerOrInfinity$5(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf$1;

var ArrayBufferViewCore$d = arrayBufferViewCore;
var apply$3 = functionApply;
var $lastIndexOf = arrayLastIndexOf;

var aTypedArray$d = ArrayBufferViewCore$d.aTypedArray;
var exportTypedArrayMethod$e = ArrayBufferViewCore$d.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
exportTypedArrayMethod$e('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  var length = arguments.length;
  return apply$3($lastIndexOf, aTypedArray$d(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
});

var ArrayBufferViewCore$c = arrayBufferViewCore;
var $map = arrayIteration.map;
var typedArraySpeciesConstructor$2 = typedArraySpeciesConstructor$4;

var aTypedArray$c = ArrayBufferViewCore$c.aTypedArray;
var exportTypedArrayMethod$d = ArrayBufferViewCore$c.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod$d('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray$c(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (typedArraySpeciesConstructor$2(O))(length);
  });
});

var aCallable$6 = aCallable$b;
var toObject$3 = toObject$d;
var IndexedObject = indexedObject;
var lengthOfArrayLike$7 = lengthOfArrayLike$j;

var $TypeError$5 = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$1 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject$3(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike$7(O);
    aCallable$6(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError$5(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError$5(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod$1(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod$1(true)
};

var ArrayBufferViewCore$b = arrayBufferViewCore;
var $reduce = arrayReduce.left;

var aTypedArray$b = ArrayBufferViewCore$b.aTypedArray;
var exportTypedArrayMethod$c = ArrayBufferViewCore$b.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod$c('reduce', function reduce(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduce(aTypedArray$b(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$a = arrayBufferViewCore;
var $reduceRight = arrayReduce.right;

var aTypedArray$a = ArrayBufferViewCore$a.aTypedArray;
var exportTypedArrayMethod$b = ArrayBufferViewCore$a.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod$b('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduceRight(aTypedArray$a(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$9 = arrayBufferViewCore;

var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod;
var floor$2 = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod$a('reverse', function reverse() {
  var that = this;
  var length = aTypedArray$9(that).length;
  var middle = floor$2(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});

var globalThis$g = globalThis_1;
var call$9 = functionCall;
var ArrayBufferViewCore$8 = arrayBufferViewCore;
var lengthOfArrayLike$6 = lengthOfArrayLike$j;
var toOffset = toOffset$2;
var toIndexedObject$2 = toObject$d;
var fails$i = fails$G;

var RangeError$1 = globalThis$g.RangeError;
var Int8Array$2 = globalThis$g.Int8Array;
var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$i(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call$9($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$8.NATIVE_ARRAY_BUFFER_VIEWS && fails$i(function () {
  var array = new Int8Array$2(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod$9('set', function set(arrayLike /* , offset */) {
  aTypedArray$8(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject$2(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$9($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike$6(src);
  var index = 0;
  if (len + offset > length) throw new RangeError$1('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

var ArrayBufferViewCore$7 = arrayBufferViewCore;
var typedArraySpeciesConstructor$1 = typedArraySpeciesConstructor$4;
var fails$h = fails$G;
var arraySlice$4 = arraySlice$6;

var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;

var FORCED$4 = fails$h(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod$8('slice', function slice(start, end) {
  var list = arraySlice$4(aTypedArray$7(this), start, end);
  var C = typedArraySpeciesConstructor$1(this);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED$4);

var ArrayBufferViewCore$6 = arrayBufferViewCore;
var $some = arrayIteration.some;

var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod$7('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray$6(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

var arraySlice$3 = arraySlice$6;

var floor$1 = Math.floor;

var sort$1 = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor$1(length / 2);
    var left = sort$1(arraySlice$3(array, 0, middle), comparefn);
    var right = sort$1(arraySlice$3(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

var arraySort = sort$1;

var userAgent$4 = environmentUserAgent;

var firefox = userAgent$4.match(/firefox\/(\d+)/i);

var environmentFfVersion = !!firefox && +firefox[1];

var UA = environmentUserAgent;

var environmentIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent$3 = environmentUserAgent;

var webkit = userAgent$3.match(/AppleWebKit\/(\d+)\./);

var environmentWebkitVersion = !!webkit && +webkit[1];

var globalThis$f = globalThis_1;
var uncurryThis$a = functionUncurryThisClause;
var fails$g = fails$G;
var aCallable$5 = aCallable$b;
var internalSort = arraySort;
var ArrayBufferViewCore$5 = arrayBufferViewCore;
var FF = environmentFfVersion;
var IE_OR_EDGE = environmentIsIeOrEdge;
var V8 = environmentV8Version;
var WEBKIT = environmentWebkitVersion;

var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;
var Uint16Array = globalThis$f.Uint16Array;
var nativeSort = Uint16Array && uncurryThis$a(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$g(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails$g(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails$g(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod$6('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable$5(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray$5(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

var ArrayBufferViewCore$4 = arrayBufferViewCore;
var toLength$3 = toLength$9;
var toAbsoluteIndex$2 = toAbsoluteIndex$8;
var typedArraySpeciesConstructor = typedArraySpeciesConstructor$4;

var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod$5('subarray', function subarray(begin, end) {
  var O = aTypedArray$4(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex$2(begin, length);
  var C = typedArraySpeciesConstructor(O);
  return new C(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength$3((end === undefined ? length : toAbsoluteIndex$2(end, length)) - beginIndex)
  );
});

var globalThis$e = globalThis_1;
var apply$2 = functionApply;
var ArrayBufferViewCore$3 = arrayBufferViewCore;
var fails$f = fails$G;
var arraySlice$2 = arraySlice$6;

var Int8Array$1 = globalThis$e.Int8Array;
var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$f(function () {
  $toLocaleString.call(new Int8Array$1(1));
});

var FORCED$3 = fails$f(function () {
  return [1, 2].toLocaleString() !== new Int8Array$1([1, 2]).toLocaleString();
}) || !fails$f(function () {
  Int8Array$1.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod$4('toLocaleString', function toLocaleString() {
  return apply$2(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice$2(aTypedArray$3(this)) : aTypedArray$3(this),
    arraySlice$2(arguments)
  );
}, FORCED$3);

var lengthOfArrayLike$5 = lengthOfArrayLike$j;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
var arrayToReversed$1 = function (O, C) {
  var len = lengthOfArrayLike$5(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};

var arrayToReversed = arrayToReversed$1;
var ArrayBufferViewCore$2 = arrayBufferViewCore;

var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;
var getTypedArrayConstructor$2 = ArrayBufferViewCore$2.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod$3('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray$2(this), getTypedArrayConstructor$2(this));
});

var ArrayBufferViewCore$1 = arrayBufferViewCore;
var uncurryThis$9 = functionUncurryThis;
var aCallable$4 = aCallable$b;
var arrayFromConstructorAndList = arrayFromConstructorAndList$3;

var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var getTypedArrayConstructor$1 = ArrayBufferViewCore$1.getTypedArrayConstructor;
var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod;
var sort = uncurryThis$9(ArrayBufferViewCore$1.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod$2('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable$4(compareFn);
  var O = aTypedArray$1(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor$1(O), O);
  return sort(A, compareFn);
});

var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
var fails$e = fails$G;
var globalThis$d = globalThis_1;
var uncurryThis$8 = functionUncurryThis;

var Uint8Array$1 = globalThis$d.Uint8Array;
var Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {};
var arrayToString = [].toString;
var join = uncurryThis$8([].join);

if (fails$e(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return join(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString !== arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod$1('toString', arrayToString, IS_NOT_ARRAY_METHOD);

var lengthOfArrayLike$4 = lengthOfArrayLike$j;
var toIntegerOrInfinity$4 = toIntegerOrInfinity$d;

var $RangeError$1 = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
var arrayWith$1 = function (O, C, index, value) {
  var len = lengthOfArrayLike$4(O);
  var relativeIndex = toIntegerOrInfinity$4(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError$1('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};

var arrayWith = arrayWith$1;
var ArrayBufferViewCore = arrayBufferViewCore;
var isBigIntArray = isBigIntArray$2;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$d;
var toBigInt = toBigInt$3;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity$3(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER);

var internalMetadata = {exports: {}};

var objectGetOwnPropertyNamesExternal = {};

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof$3 = classofRaw$2;
var toIndexedObject$1 = toIndexedObject$a;
var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
var arraySlice$1 = arraySlice$6;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice$1(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$3(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject$1(it));
};

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails$d = fails$G;

var arrayBufferNonExtensible = fails$d(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});

var fails$c = fails$G;
var isObject$8 = isObject$n;
var classof$2 = classofRaw$2;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES$1 = fails$c(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
var objectIsExtensible = (FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject$8(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

var fails$b = fails$G;

var freezing = !fails$b(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var $$g = _export;
var uncurryThis$7 = functionUncurryThis;
var hiddenKeys = hiddenKeys$5;
var isObject$7 = isObject$n;
var hasOwn$1 = hasOwnProperty_1;
var defineProperty = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible = objectIsExtensible;
var uid = uid$4;
var FREEZING$1 = freezing;

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey$1 = function (it, create) {
  // return a primitive with prefix
  if (!isObject$7(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn$1(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn$1(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze$1 = function (it) {
  if (FREEZING$1 && REQUIRED && isExtensible(it) && !hasOwn$1(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis$7([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $$g({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = internalMetadata.exports = {
  enable: enable,
  fastKey: fastKey$1,
  getWeakData: getWeakData,
  onFreeze: onFreeze$1
};

hiddenKeys[METADATA] = true;

var internalMetadataExports = internalMetadata.exports;

var bind$4 = functionBindContext;
var call$8 = functionCall;
var anObject$4 = anObject$h;
var tryToString = tryToString$6;
var isArrayIteratorMethod = isArrayIteratorMethod$3;
var lengthOfArrayLike$3 = lengthOfArrayLike$j;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$3;
var getIteratorMethod = getIteratorMethod$4;
var iteratorClose = iteratorClose$2;

var $TypeError$4 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$4 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$4(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$4(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError$4(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$3(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$8(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

var $$f = _export;
var globalThis$c = globalThis_1;
var uncurryThis$6 = functionUncurryThis;
var isForced$1 = isForced_1;
var defineBuiltIn$3 = defineBuiltIn$c;
var InternalMetadataModule = internalMetadataExports;
var iterate$3 = iterate$4;
var anInstance$2 = anInstance$5;
var isCallable$6 = isCallable$o;
var isNullOrUndefined$3 = isNullOrUndefined$8;
var isObject$6 = isObject$n;
var fails$a = fails$G;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
var setToStringTag$1 = setToStringTag$5;
var inheritIfRequired = inheritIfRequired$4;

var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = globalThis$c[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis$6(NativePrototype[KEY]);
    defineBuiltIn$3(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject$6(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject$6(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject$6(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced$1(
    CONSTRUCTOR_NAME,
    !isCallable$6(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$a(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced$1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails$a(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails$a(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance$2(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined$3(iterable)) iterate$3(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $$f({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag$1(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var create$1 = objectCreate;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$7;
var defineBuiltIns = defineBuiltIns$2;
var bind$3 = functionBindContext;
var anInstance$1 = anInstance$5;
var isNullOrUndefined$2 = isNullOrUndefined$8;
var iterate$2 = iterate$4;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$3;
var setSpecies$1 = setSpecies$4;
var DESCRIPTORS$2 = descriptors;
var fastKey = internalMetadataExports.fastKey;
var InternalStateModule$1 = internalState;

var setInternalState$1 = InternalStateModule$1.set;
var internalStateGetterFor = InternalStateModule$1.getterFor;

var collectionStrong$1 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance$1(that, Prototype);
      setInternalState$1(that, {
        type: CONSTRUCTOR_NAME,
        index: create$1(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS$2) that.size = 0;
      if (!isNullOrUndefined$2(iterable)) iterate$2(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS$2) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          entry = entry.next;
        }
        state.first = state.last = undefined;
        state.index = create$1(null);
        if (DESCRIPTORS$2) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS$2) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS$2) defineBuiltInAccessor$1(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$1(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies$1(CONSTRUCTOR_NAME);
  }
};

var collection = collection$1;
var collectionStrong = collectionStrong$1;

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

/**
 * Various constants and helper for unicode codepoints.
 */
var Codepoint = /*#__PURE__*/function () {
  function Codepoint() {
    _classCallCheck(this, Codepoint);
  }
  return _createClass(Codepoint, null, [{
    key: "toUpperCase",
    value:
    // convert unicode codepoint to upper case codepoint
    // return same codepoint, if cannot do it (or codepoint not have upper variation)
    function toUpperCase(codepoint) {
      var s = String.fromCodePoint(codepoint).toUpperCase();
      if (s.length > 1) {
        return codepoint;
      }
      var sOrigin = String.fromCodePoint(s.codePointAt(0)).toLowerCase();
      if (sOrigin.length > 1 || sOrigin.codePointAt(0) !== codepoint) {
        return codepoint;
      }
      return s.codePointAt(0);
    }

    // convert unicode codepoint to lower case codepoint
    // return same codepoint, if cannot do it (or codepoint not have lower variation)
  }, {
    key: "toLowerCase",
    value: function toLowerCase(codepoint) {
      var s = String.fromCodePoint(codepoint).toLowerCase();
      if (s.length > 1) {
        return codepoint;
      }
      var sOrigin = String.fromCodePoint(s.codePointAt(0)).toUpperCase();
      if (sOrigin.length > 1 || sOrigin.codePointAt(0) !== codepoint) {
        return codepoint;
      }
      return s.codePointAt(0);
    }
  }]);
}();
// codePointAt(0)
_defineProperty(Codepoint, "CODES", new Map([['\x07', 7], ['\b', 8], ['\t', 9], ['\n', 10], ['\v', 11], ['\f', 12], ['\r', 13], [' ', 32], ['"', 34], ['$', 36], ['&', 38], ['(', 40], [')', 41], ['*', 42], ['+', 43], ['-', 45], ['.', 46], ['0', 48], ['1', 49], ['2', 50], ['3', 51], ['4', 52], ['5', 53], ['6', 54], ['7', 55], ['8', 56], ['9', 57], [':', 58], ['<', 60], ['>', 62], ['?', 63], ['A', 65], ['B', 66], ['C', 67], ['F', 70], ['P', 80], ['Q', 81], ['U', 85], ['Z', 90], ['[', 91], ['\\', 92], [']', 93], ['^', 94], ['_', 95], ['a', 97], ['b', 98], ['f', 102], ['i', 105], ['m', 109], ['n', 110], ['r', 114], ['s', 115], ['t', 116], ['v', 118], ['x', 120], ['z', 122], ['{', 123], ['|', 124], ['}', 125]]));

var _UnicodeTables;
// GENERATED BY tools/scripts/genUnicodeTable.js; DO NOT EDIT.
// yarn node ./tools/scripts/genUnicodeTable.js > src/UnicodeTables.js
var UnicodeTables = /*#__PURE__*/_createClass(function UnicodeTables() {
  _classCallCheck(this, UnicodeTables);
});
_UnicodeTables = UnicodeTables;
_defineProperty(UnicodeTables, "CASE_ORBIT", new Map([[75, 107], [107, 8490], [8490, 75], [83, 115], [115, 383], [383, 83], [181, 924], [924, 956], [956, 181], [197, 229], [229, 8491], [8491, 197], [452, 453], [453, 454], [454, 452], [455, 456], [456, 457], [457, 455], [458, 459], [459, 460], [460, 458], [497, 498], [498, 499], [499, 497], [837, 921], [921, 953], [953, 8126], [8126, 837], [914, 946], [946, 976], [976, 914], [917, 949], [949, 1013], [1013, 917], [920, 952], [952, 977], [977, 1012], [1012, 920], [922, 954], [954, 1008], [1008, 922], [928, 960], [960, 982], [982, 928], [929, 961], [961, 1009], [1009, 929], [931, 962], [962, 963], [963, 931], [934, 966], [966, 981], [981, 934], [937, 969], [969, 8486], [8486, 937], [1042, 1074], [1074, 7296], [7296, 1042], [1044, 1076], [1076, 7297], [7297, 1044], [1054, 1086], [1086, 7298], [7298, 1054], [1057, 1089], [1089, 7299], [7299, 1057], [1058, 1090], [1090, 7300], [7300, 7301], [7301, 1058], [1066, 1098], [1098, 7302], [7302, 1066], [1122, 1123], [1123, 7303], [7303, 1122], [7304, 42570], [42570, 42571], [42571, 7304], [7776, 7777], [7777, 7835], [7835, 7776], [223, 7838], [7838, 223], [8064, 8072], [8072, 8064], [8065, 8073], [8073, 8065], [8066, 8074], [8074, 8066], [8067, 8075], [8075, 8067], [8068, 8076], [8076, 8068], [8069, 8077], [8077, 8069], [8070, 8078], [8078, 8070], [8071, 8079], [8079, 8071], [8080, 8088], [8088, 8080], [8081, 8089], [8089, 8081], [8082, 8090], [8090, 8082], [8083, 8091], [8091, 8083], [8084, 8092], [8092, 8084], [8085, 8093], [8093, 8085], [8086, 8094], [8094, 8086], [8087, 8095], [8095, 8087], [8096, 8104], [8104, 8096], [8097, 8105], [8105, 8097], [8098, 8106], [8106, 8098], [8099, 8107], [8107, 8099], [8100, 8108], [8108, 8100], [8101, 8109], [8109, 8101], [8102, 8110], [8110, 8102], [8103, 8111], [8111, 8103], [8115, 8124], [8124, 8115], [8131, 8140], [8140, 8131], [912, 8147], [8147, 912], [944, 8163], [8163, 944], [8179, 8188], [8188, 8179], [64261, 64262], [64262, 64261], [66560, 66600], [66600, 66560], [66561, 66601], [66601, 66561], [66562, 66602], [66602, 66562], [66563, 66603], [66603, 66563], [66564, 66604], [66604, 66564], [66565, 66605], [66605, 66565], [66566, 66606], [66606, 66566], [66567, 66607], [66607, 66567], [66568, 66608], [66608, 66568], [66569, 66609], [66609, 66569], [66570, 66610], [66610, 66570], [66571, 66611], [66611, 66571], [66572, 66612], [66612, 66572], [66573, 66613], [66613, 66573], [66574, 66614], [66614, 66574], [66575, 66615], [66615, 66575], [66576, 66616], [66616, 66576], [66577, 66617], [66617, 66577], [66578, 66618], [66618, 66578], [66579, 66619], [66619, 66579], [66580, 66620], [66620, 66580], [66581, 66621], [66621, 66581], [66582, 66622], [66622, 66582], [66583, 66623], [66623, 66583], [66584, 66624], [66624, 66584], [66585, 66625], [66625, 66585], [66586, 66626], [66626, 66586], [66587, 66627], [66627, 66587], [66588, 66628], [66628, 66588], [66589, 66629], [66629, 66589], [66590, 66630], [66630, 66590], [66591, 66631], [66631, 66591], [66592, 66632], [66632, 66592], [66593, 66633], [66633, 66593], [66594, 66634], [66634, 66594], [66595, 66635], [66635, 66595], [66596, 66636], [66636, 66596], [66597, 66637], [66637, 66597], [66598, 66638], [66638, 66598], [66599, 66639], [66639, 66599], [66736, 66776], [66776, 66736], [66737, 66777], [66777, 66737], [66738, 66778], [66778, 66738], [66739, 66779], [66779, 66739], [66740, 66780], [66780, 66740], [66741, 66781], [66781, 66741], [66742, 66782], [66782, 66742], [66743, 66783], [66783, 66743], [66744, 66784], [66784, 66744], [66745, 66785], [66785, 66745], [66746, 66786], [66786, 66746], [66747, 66787], [66787, 66747], [66748, 66788], [66788, 66748], [66749, 66789], [66789, 66749], [66750, 66790], [66790, 66750], [66751, 66791], [66791, 66751], [66752, 66792], [66792, 66752], [66753, 66793], [66793, 66753], [66754, 66794], [66794, 66754], [66755, 66795], [66795, 66755], [66756, 66796], [66796, 66756], [66757, 66797], [66797, 66757], [66758, 66798], [66798, 66758], [66759, 66799], [66799, 66759], [66760, 66800], [66800, 66760], [66761, 66801], [66801, 66761], [66762, 66802], [66802, 66762], [66763, 66803], [66803, 66763], [66764, 66804], [66804, 66764], [66765, 66805], [66805, 66765], [66766, 66806], [66806, 66766], [66767, 66807], [66807, 66767], [66768, 66808], [66808, 66768], [66769, 66809], [66809, 66769], [66770, 66810], [66810, 66770], [66771, 66811], [66811, 66771], [66928, 66967], [66967, 66928], [66929, 66968], [66968, 66929], [66930, 66969], [66969, 66930], [66931, 66970], [66970, 66931], [66932, 66971], [66971, 66932], [66933, 66972], [66972, 66933], [66934, 66973], [66973, 66934], [66935, 66974], [66974, 66935], [66936, 66975], [66975, 66936], [66937, 66976], [66976, 66937], [66938, 66977], [66977, 66938], [66940, 66979], [66979, 66940], [66941, 66980], [66980, 66941], [66942, 66981], [66981, 66942], [66943, 66982], [66982, 66943], [66944, 66983], [66983, 66944], [66945, 66984], [66984, 66945], [66946, 66985], [66985, 66946], [66947, 66986], [66986, 66947], [66948, 66987], [66987, 66948], [66949, 66988], [66988, 66949], [66950, 66989], [66989, 66950], [66951, 66990], [66990, 66951], [66952, 66991], [66991, 66952], [66953, 66992], [66992, 66953], [66954, 66993], [66993, 66954], [66956, 66995], [66995, 66956], [66957, 66996], [66996, 66957], [66958, 66997], [66997, 66958], [66959, 66998], [66998, 66959], [66960, 66999], [66999, 66960], [66961, 67000], [67000, 66961], [66962, 67001], [67001, 66962], [66964, 67003], [67003, 66964], [66965, 67004], [67004, 66965], [68736, 68800], [68800, 68736], [68737, 68801], [68801, 68737], [68738, 68802], [68802, 68738], [68739, 68803], [68803, 68739], [68740, 68804], [68804, 68740], [68741, 68805], [68805, 68741], [68742, 68806], [68806, 68742], [68743, 68807], [68807, 68743], [68744, 68808], [68808, 68744], [68745, 68809], [68809, 68745], [68746, 68810], [68810, 68746], [68747, 68811], [68811, 68747], [68748, 68812], [68812, 68748], [68749, 68813], [68813, 68749], [68750, 68814], [68814, 68750], [68751, 68815], [68815, 68751], [68752, 68816], [68816, 68752], [68753, 68817], [68817, 68753], [68754, 68818], [68818, 68754], [68755, 68819], [68819, 68755], [68756, 68820], [68820, 68756], [68757, 68821], [68821, 68757], [68758, 68822], [68822, 68758], [68759, 68823], [68823, 68759], [68760, 68824], [68824, 68760], [68761, 68825], [68825, 68761], [68762, 68826], [68826, 68762], [68763, 68827], [68827, 68763], [68764, 68828], [68828, 68764], [68765, 68829], [68829, 68765], [68766, 68830], [68830, 68766], [68767, 68831], [68831, 68767], [68768, 68832], [68832, 68768], [68769, 68833], [68833, 68769], [68770, 68834], [68834, 68770], [68771, 68835], [68835, 68771], [68772, 68836], [68836, 68772], [68773, 68837], [68837, 68773], [68774, 68838], [68838, 68774], [68775, 68839], [68839, 68775], [68776, 68840], [68840, 68776], [68777, 68841], [68841, 68777], [68778, 68842], [68842, 68778], [68779, 68843], [68843, 68779], [68780, 68844], [68844, 68780], [68781, 68845], [68845, 68781], [68782, 68846], [68846, 68782], [68783, 68847], [68847, 68783], [68784, 68848], [68848, 68784], [68785, 68849], [68849, 68785], [68786, 68850], [68850, 68786], [71840, 71872], [71872, 71840], [71841, 71873], [71873, 71841], [71842, 71874], [71874, 71842], [71843, 71875], [71875, 71843], [71844, 71876], [71876, 71844], [71845, 71877], [71877, 71845], [71846, 71878], [71878, 71846], [71847, 71879], [71879, 71847], [71848, 71880], [71880, 71848], [71849, 71881], [71881, 71849], [71850, 71882], [71882, 71850], [71851, 71883], [71883, 71851], [71852, 71884], [71884, 71852], [71853, 71885], [71885, 71853], [71854, 71886], [71886, 71854], [71855, 71887], [71887, 71855], [71856, 71888], [71888, 71856], [71857, 71889], [71889, 71857], [71858, 71890], [71890, 71858], [71859, 71891], [71891, 71859], [71860, 71892], [71892, 71860], [71861, 71893], [71893, 71861], [71862, 71894], [71894, 71862], [71863, 71895], [71895, 71863], [71864, 71896], [71896, 71864], [71865, 71897], [71897, 71865], [71866, 71898], [71898, 71866], [71867, 71899], [71899, 71867], [71868, 71900], [71900, 71868], [71869, 71901], [71901, 71869], [71870, 71902], [71902, 71870], [71871, 71903], [71903, 71871], [93760, 93792], [93792, 93760], [93761, 93793], [93793, 93761], [93762, 93794], [93794, 93762], [93763, 93795], [93795, 93763], [93764, 93796], [93796, 93764], [93765, 93797], [93797, 93765], [93766, 93798], [93798, 93766], [93767, 93799], [93799, 93767], [93768, 93800], [93800, 93768], [93769, 93801], [93801, 93769], [93770, 93802], [93802, 93770], [93771, 93803], [93803, 93771], [93772, 93804], [93804, 93772], [93773, 93805], [93805, 93773], [93774, 93806], [93806, 93774], [93775, 93807], [93807, 93775], [93776, 93808], [93808, 93776], [93777, 93809], [93809, 93777], [93778, 93810], [93810, 93778], [93779, 93811], [93811, 93779], [93780, 93812], [93812, 93780], [93781, 93813], [93813, 93781], [93782, 93814], [93814, 93782], [93783, 93815], [93815, 93783], [93784, 93816], [93816, 93784], [93785, 93817], [93817, 93785], [93786, 93818], [93818, 93786], [93787, 93819], [93819, 93787], [93788, 93820], [93820, 93788], [93789, 93821], [93821, 93789], [93790, 93822], [93822, 93790], [93791, 93823], [93823, 93791], [125184, 125218], [125218, 125184], [125185, 125219], [125219, 125185], [125186, 125220], [125220, 125186], [125187, 125221], [125221, 125187], [125188, 125222], [125222, 125188], [125189, 125223], [125223, 125189], [125190, 125224], [125224, 125190], [125191, 125225], [125225, 125191], [125192, 125226], [125226, 125192], [125193, 125227], [125227, 125193], [125194, 125228], [125228, 125194], [125195, 125229], [125229, 125195], [125196, 125230], [125230, 125196], [125197, 125231], [125231, 125197], [125198, 125232], [125232, 125198], [125199, 125233], [125233, 125199], [125200, 125234], [125234, 125200], [125201, 125235], [125235, 125201], [125202, 125236], [125236, 125202], [125203, 125237], [125237, 125203], [125204, 125238], [125238, 125204], [125205, 125239], [125239, 125205], [125206, 125240], [125240, 125206], [125207, 125241], [125241, 125207], [125208, 125242], [125242, 125208], [125209, 125243], [125243, 125209], [125210, 125244], [125244, 125210], [125211, 125245], [125245, 125211], [125212, 125246], [125246, 125212], [125213, 125247], [125247, 125213], [125214, 125248], [125248, 125214], [125215, 125249], [125249, 125215], [125216, 125250], [125250, 125216], [125217, 125251], [125251, 125217]]));
_defineProperty(UnicodeTables, "C", [[0, 31, 1], [127, 159, 1], [173, 888, 715], [889, 896, 7], [897, 899, 1], [907, 909, 2], [930, 1328, 398], [1367, 1368, 1], [1419, 1420, 1], [1424, 1480, 56], [1481, 1487, 1], [1515, 1518, 1], [1525, 1541, 1], [1564, 1757, 193], [1806, 1807, 1], [1867, 1868, 1], [1970, 1983, 1], [2043, 2044, 1], [2094, 2095, 1], [2111, 2140, 29], [2141, 2143, 2], [2155, 2159, 1], [2191, 2199, 1], [2274, 2436, 162], [2445, 2446, 1], [2449, 2450, 1], [2473, 2481, 8], [2483, 2485, 1], [2490, 2491, 1], [2501, 2502, 1], [2505, 2506, 1], [2511, 2518, 1], [2520, 2523, 1], [2526, 2532, 6], [2533, 2559, 26], [2560, 2564, 4], [2571, 2574, 1], [2577, 2578, 1], [2601, 2609, 8], [2612, 2618, 3], [2619, 2621, 2], [2627, 2630, 1], [2633, 2634, 1], [2638, 2640, 1], [2642, 2648, 1], [2653, 2655, 2], [2656, 2661, 1], [2679, 2688, 1], [2692, 2702, 10], [2706, 2729, 23], [2737, 2740, 3], [2746, 2747, 1], [2758, 2766, 4], [2767, 2769, 2], [2770, 2783, 1], [2788, 2789, 1], [2802, 2808, 1], [2816, 2820, 4], [2829, 2830, 1], [2833, 2834, 1], [2857, 2865, 8], [2868, 2874, 6], [2875, 2885, 10], [2886, 2889, 3], [2890, 2894, 4], [2895, 2900, 1], [2904, 2907, 1], [2910, 2916, 6], [2917, 2936, 19], [2937, 2945, 1], [2948, 2955, 7], [2956, 2957, 1], [2961, 2966, 5], [2967, 2968, 1], [2971, 2973, 2], [2976, 2978, 1], [2981, 2983, 1], [2987, 2989, 1], [3002, 3005, 1], [3011, 3013, 1], [3017, 3022, 5], [3023, 3025, 2], [3026, 3030, 1], [3032, 3045, 1], [3067, 3071, 1], [3085, 3089, 4], [3113, 3130, 17], [3131, 3141, 10], [3145, 3150, 5], [3151, 3156, 1], [3159, 3163, 4], [3164, 3166, 2], [3167, 3172, 5], [3173, 3184, 11], [3185, 3190, 1], [3213, 3217, 4], [3241, 3252, 11], [3258, 3259, 1], [3269, 3273, 4], [3278, 3284, 1], [3287, 3292, 1], [3295, 3300, 5], [3301, 3312, 11], [3316, 3327, 1], [3341, 3345, 4], [3397, 3401, 4], [3408, 3411, 1], [3428, 3429, 1], [3456, 3460, 4], [3479, 3481, 1], [3506, 3516, 10], [3518, 3519, 1], [3527, 3529, 1], [3531, 3534, 1], [3541, 3543, 2], [3552, 3557, 1], [3568, 3569, 1], [3573, 3584, 1], [3643, 3646, 1], [3676, 3712, 1], [3715, 3717, 2], [3723, 3748, 25], [3750, 3774, 24], [3775, 3781, 6], [3783, 3791, 8], [3802, 3803, 1], [3808, 3839, 1], [3912, 3949, 37], [3950, 3952, 1], [3992, 4029, 37], [4045, 4059, 14], [4060, 4095, 1], [4294, 4296, 2], [4297, 4300, 1], [4302, 4303, 1], [4681, 4686, 5], [4687, 4695, 8], [4697, 4702, 5], [4703, 4745, 42], [4750, 4751, 1], [4785, 4790, 5], [4791, 4799, 8], [4801, 4806, 5], [4807, 4823, 16], [4881, 4886, 5], [4887, 4955, 68], [4956, 4989, 33], [4990, 4991, 1], [5018, 5023, 1], [5110, 5111, 1], [5118, 5119, 1], [5789, 5791, 1], [5881, 5887, 1], [5910, 5918, 1], [5943, 5951, 1], [5972, 5983, 1], [5997, 6001, 4], [6004, 6015, 1], [6110, 6111, 1], [6122, 6127, 1], [6138, 6143, 1], [6158, 6170, 12], [6171, 6175, 1], [6265, 6271, 1], [6315, 6319, 1], [6390, 6399, 1], [6431, 6444, 13], [6445, 6447, 1], [6460, 6463, 1], [6465, 6467, 1], [6510, 6511, 1], [6517, 6527, 1], [6572, 6575, 1], [6602, 6607, 1], [6619, 6621, 1], [6684, 6685, 1], [6751, 6781, 30], [6782, 6794, 12], [6795, 6799, 1], [6810, 6815, 1], [6830, 6831, 1], [6863, 6911, 1], [6989, 6991, 1], [7039, 7156, 117], [7157, 7163, 1], [7224, 7226, 1], [7242, 7244, 1], [7305, 7311, 1], [7355, 7356, 1], [7368, 7375, 1], [7419, 7423, 1], [7958, 7959, 1], [7966, 7967, 1], [8006, 8007, 1], [8014, 8015, 1], [8024, 8030, 2], [8062, 8063, 1], [8117, 8133, 16], [8148, 8149, 1], [8156, 8176, 20], [8177, 8181, 4], [8191, 8203, 12], [8204, 8207, 1], [8234, 8238, 1], [8288, 8303, 1], [8306, 8307, 1], [8335, 8349, 14], [8350, 8351, 1], [8385, 8399, 1], [8433, 8447, 1], [8588, 8591, 1], [9255, 9279, 1], [9291, 9311, 1], [11124, 11125, 1], [11158, 11508, 350], [11509, 11512, 1], [11558, 11560, 2], [11561, 11564, 1], [11566, 11567, 1], [11624, 11630, 1], [11633, 11646, 1], [11671, 11679, 1], [11687, 11743, 8], [11870, 11903, 1], [11930, 12020, 90], [12021, 12031, 1], [12246, 12271, 1], [12352, 12439, 87], [12440, 12544, 104], [12545, 12548, 1], [12592, 12687, 95], [12772, 12782, 1], [12831, 42125, 29294], [42126, 42127, 1], [42183, 42191, 1], [42540, 42559, 1], [42744, 42751, 1], [42955, 42959, 1], [42962, 42964, 2], [42970, 42993, 1], [43053, 43055, 1], [43066, 43071, 1], [43128, 43135, 1], [43206, 43213, 1], [43226, 43231, 1], [43348, 43358, 1], [43389, 43391, 1], [43470, 43482, 12], [43483, 43485, 1], [43519, 43575, 56], [43576, 43583, 1], [43598, 43599, 1], [43610, 43611, 1], [43715, 43738, 1], [43767, 43776, 1], [43783, 43784, 1], [43791, 43792, 1], [43799, 43807, 1], [43815, 43823, 8], [43884, 43887, 1], [44014, 44015, 1], [44026, 44031, 1], [55204, 55215, 1], [55239, 55242, 1], [55292, 63743, 1], [64110, 64111, 1], [64218, 64255, 1], [64263, 64274, 1], [64280, 64284, 1], [64311, 64317, 6], [64319, 64325, 3], [64451, 64466, 1], [64912, 64913, 1], [64968, 64974, 1], [64976, 65007, 1], [65050, 65055, 1], [65107, 65127, 20], [65132, 65135, 1], [65141, 65277, 136], [65278, 65280, 1], [65471, 65473, 1], [65480, 65481, 1], [65488, 65489, 1], [65496, 65497, 1], [65501, 65503, 1], [65511, 65519, 8], [65520, 65531, 1], [65534, 65535, 1], [65548, 65575, 27], [65595, 65598, 3], [65614, 65615, 1], [65630, 65663, 1], [65787, 65791, 1], [65795, 65798, 1], [65844, 65846, 1], [65935, 65949, 14], [65950, 65951, 1], [65953, 65999, 1], [66046, 66175, 1], [66205, 66207, 1], [66257, 66271, 1], [66300, 66303, 1], [66340, 66348, 1], [66379, 66383, 1], [66427, 66431, 1], [66462, 66500, 38], [66501, 66503, 1], [66518, 66559, 1], [66718, 66719, 1], [66730, 66735, 1], [66772, 66775, 1], [66812, 66815, 1], [66856, 66863, 1], [66916, 66926, 1], [66939, 66955, 16], [66963, 66966, 3], [66978, 66994, 16], [67002, 67005, 3], [67006, 67071, 1], [67383, 67391, 1], [67414, 67423, 1], [67432, 67455, 1], [67462, 67505, 43], [67515, 67583, 1], [67590, 67591, 1], [67593, 67638, 45], [67641, 67643, 1], [67645, 67646, 1], [67670, 67743, 73], [67744, 67750, 1], [67760, 67807, 1], [67827, 67830, 3], [67831, 67834, 1], [67868, 67870, 1], [67898, 67902, 1], [67904, 67967, 1], [68024, 68027, 1], [68048, 68049, 1], [68100, 68103, 3], [68104, 68107, 1], [68116, 68120, 4], [68150, 68151, 1], [68155, 68158, 1], [68169, 68175, 1], [68185, 68191, 1], [68256, 68287, 1], [68327, 68330, 1], [68343, 68351, 1], [68406, 68408, 1], [68438, 68439, 1], [68467, 68471, 1], [68498, 68504, 1], [68509, 68520, 1], [68528, 68607, 1], [68681, 68735, 1], [68787, 68799, 1], [68851, 68857, 1], [68904, 68911, 1], [68922, 69215, 1], [69247, 69290, 43], [69294, 69295, 1], [69298, 69372, 1], [69416, 69423, 1], [69466, 69487, 1], [69514, 69551, 1], [69580, 69599, 1], [69623, 69631, 1], [69710, 69713, 1], [69750, 69758, 1], [69821, 69827, 6], [69828, 69839, 1], [69865, 69871, 1], [69882, 69887, 1], [69941, 69960, 19], [69961, 69967, 1], [70007, 70015, 1], [70112, 70133, 21], [70134, 70143, 1], [70162, 70210, 48], [70211, 70271, 1], [70279, 70281, 2], [70286, 70302, 16], [70314, 70319, 1], [70379, 70383, 1], [70394, 70399, 1], [70404, 70413, 9], [70414, 70417, 3], [70418, 70441, 23], [70449, 70452, 3], [70458, 70469, 11], [70470, 70473, 3], [70474, 70478, 4], [70479, 70481, 2], [70482, 70486, 1], [70488, 70492, 1], [70500, 70501, 1], [70509, 70511, 1], [70517, 70655, 1], [70748, 70754, 6], [70755, 70783, 1], [70856, 70863, 1], [70874, 71039, 1], [71094, 71095, 1], [71134, 71167, 1], [71237, 71247, 1], [71258, 71263, 1], [71277, 71295, 1], [71354, 71359, 1], [71370, 71423, 1], [71451, 71452, 1], [71468, 71471, 1], [71495, 71679, 1], [71740, 71839, 1], [71923, 71934, 1], [71943, 71944, 1], [71946, 71947, 1], [71956, 71959, 3], [71990, 71993, 3], [71994, 72007, 13], [72008, 72015, 1], [72026, 72095, 1], [72104, 72105, 1], [72152, 72153, 1], [72165, 72191, 1], [72264, 72271, 1], [72355, 72367, 1], [72441, 72447, 1], [72458, 72703, 1], [72713, 72759, 46], [72774, 72783, 1], [72813, 72815, 1], [72848, 72849, 1], [72872, 72887, 15], [72888, 72959, 1], [72967, 72970, 3], [73015, 73017, 1], [73019, 73022, 3], [73032, 73039, 1], [73050, 73055, 1], [73062, 73065, 3], [73103, 73106, 3], [73113, 73119, 1], [73130, 73439, 1], [73465, 73471, 1], [73489, 73531, 42], [73532, 73533, 1], [73562, 73647, 1], [73649, 73663, 1], [73714, 73726, 1], [74650, 74751, 1], [74863, 74869, 6], [74870, 74879, 1], [75076, 77711, 1], [77811, 77823, 1], [78896, 78911, 1], [78934, 82943, 1], [83527, 92159, 1], [92729, 92735, 1], [92767, 92778, 11], [92779, 92781, 1], [92863, 92874, 11], [92875, 92879, 1], [92910, 92911, 1], [92918, 92927, 1], [92998, 93007, 1], [93018, 93026, 8], [93048, 93052, 1], [93072, 93759, 1], [93851, 93951, 1], [94027, 94030, 1], [94088, 94094, 1], [94112, 94175, 1], [94181, 94191, 1], [94194, 94207, 1], [100344, 100351, 1], [101590, 101631, 1], [101641, 110575, 1], [110580, 110588, 8], [110591, 110883, 292], [110884, 110897, 1], [110899, 110927, 1], [110931, 110932, 1], [110934, 110947, 1], [110952, 110959, 1], [111356, 113663, 1], [113771, 113775, 1], [113789, 113791, 1], [113801, 113807, 1], [113818, 113819, 1], [113824, 118527, 1], [118574, 118575, 1], [118599, 118607, 1], [118724, 118783, 1], [119030, 119039, 1], [119079, 119080, 1], [119155, 119162, 1], [119275, 119295, 1], [119366, 119487, 1], [119508, 119519, 1], [119540, 119551, 1], [119639, 119647, 1], [119673, 119807, 1], [119893, 119965, 72], [119968, 119969, 1], [119971, 119972, 1], [119975, 119976, 1], [119981, 119994, 13], [119996, 120004, 8], [120070, 120075, 5], [120076, 120085, 9], [120093, 120122, 29], [120127, 120133, 6], [120135, 120137, 1], [120145, 120486, 341], [120487, 120780, 293], [120781, 121484, 703], [121485, 121498, 1], [121504, 121520, 16], [121521, 122623, 1], [122655, 122660, 1], [122667, 122879, 1], [122887, 122905, 18], [122906, 122914, 8], [122917, 122923, 6], [122924, 122927, 1], [122990, 123022, 1], [123024, 123135, 1], [123181, 123183, 1], [123198, 123199, 1], [123210, 123213, 1], [123216, 123535, 1], [123567, 123583, 1], [123642, 123646, 1], [123648, 124111, 1], [124154, 124895, 1], [124903, 124908, 5], [124911, 124927, 16], [125125, 125126, 1], [125143, 125183, 1], [125260, 125263, 1], [125274, 125277, 1], [125280, 126064, 1], [126133, 126208, 1], [126270, 126463, 1], [126468, 126496, 28], [126499, 126501, 2], [126502, 126504, 2], [126515, 126520, 5], [126522, 126524, 2], [126525, 126529, 1], [126531, 126534, 1], [126536, 126540, 2], [126544, 126547, 3], [126549, 126550, 1], [126552, 126560, 2], [126563, 126565, 2], [126566, 126571, 5], [126579, 126589, 5], [126591, 126602, 11], [126620, 126624, 1], [126628, 126634, 6], [126652, 126703, 1], [126706, 126975, 1], [127020, 127023, 1], [127124, 127135, 1], [127151, 127152, 1], [127168, 127184, 16], [127222, 127231, 1], [127406, 127461, 1], [127491, 127503, 1], [127548, 127551, 1], [127561, 127567, 1], [127570, 127583, 1], [127590, 127743, 1], [128728, 128731, 1], [128749, 128751, 1], [128765, 128767, 1], [128887, 128890, 1], [128986, 128991, 1], [129004, 129007, 1], [129009, 129023, 1], [129036, 129039, 1], [129096, 129103, 1], [129114, 129119, 1], [129160, 129167, 1], [129198, 129199, 1], [129202, 129279, 1], [129620, 129631, 1], [129646, 129647, 1], [129661, 129663, 1], [129673, 129679, 1], [129726, 129734, 8], [129735, 129741, 1], [129756, 129759, 1], [129769, 129775, 1], [129785, 129791, 1], [129939, 129995, 56], [129996, 130031, 1], [130042, 131071, 1], [173792, 173823, 1], [177978, 177983, 1], [178206, 178207, 1], [183970, 183983, 1], [191457, 191471, 1], [192094, 194559, 1], [195102, 196607, 1], [201547, 201551, 1], [205744, 917759, 1], [918000, 1114111, 1]]);
_defineProperty(UnicodeTables, "Cc", [[0, 31, 1], [127, 159, 1]]);
_defineProperty(UnicodeTables, "Cf", [[173, 1536, 1363], [1537, 1541, 1], [1564, 1757, 193], [1807, 2192, 385], [2193, 2274, 81], [6158, 8203, 2045], [8204, 8207, 1], [8234, 8238, 1], [8288, 8292, 1], [8294, 8303, 1], [65279, 65529, 250], [65530, 65531, 1], [69821, 69837, 16], [78896, 78911, 1], [113824, 113827, 1], [119155, 119162, 1], [917505, 917536, 31], [917537, 917631, 1]]);
_defineProperty(UnicodeTables, "Co", [[57344, 63743, 1], [983040, 1048573, 1], [1048576, 1114109, 1]]);
_defineProperty(UnicodeTables, "Cs", [[55296, 57343, 1]]);
_defineProperty(UnicodeTables, "L", [[65, 90, 1], [97, 122, 1], [170, 181, 11], [186, 192, 6], [193, 214, 1], [216, 246, 1], [248, 705, 1], [710, 721, 1], [736, 740, 1], [748, 750, 2], [880, 884, 1], [886, 887, 1], [890, 893, 1], [895, 902, 7], [904, 906, 1], [908, 910, 2], [911, 929, 1], [931, 1013, 1], [1015, 1153, 1], [1162, 1327, 1], [1329, 1366, 1], [1369, 1376, 7], [1377, 1416, 1], [1488, 1514, 1], [1519, 1522, 1], [1568, 1610, 1], [1646, 1647, 1], [1649, 1747, 1], [1749, 1765, 16], [1766, 1774, 8], [1775, 1786, 11], [1787, 1788, 1], [1791, 1808, 17], [1810, 1839, 1], [1869, 1957, 1], [1969, 1994, 25], [1995, 2026, 1], [2036, 2037, 1], [2042, 2048, 6], [2049, 2069, 1], [2074, 2084, 10], [2088, 2112, 24], [2113, 2136, 1], [2144, 2154, 1], [2160, 2183, 1], [2185, 2190, 1], [2208, 2249, 1], [2308, 2361, 1], [2365, 2384, 19], [2392, 2401, 1], [2417, 2432, 1], [2437, 2444, 1], [2447, 2448, 1], [2451, 2472, 1], [2474, 2480, 1], [2482, 2486, 4], [2487, 2489, 1], [2493, 2510, 17], [2524, 2525, 1], [2527, 2529, 1], [2544, 2545, 1], [2556, 2565, 9], [2566, 2570, 1], [2575, 2576, 1], [2579, 2600, 1], [2602, 2608, 1], [2610, 2611, 1], [2613, 2614, 1], [2616, 2617, 1], [2649, 2652, 1], [2654, 2674, 20], [2675, 2676, 1], [2693, 2701, 1], [2703, 2705, 1], [2707, 2728, 1], [2730, 2736, 1], [2738, 2739, 1], [2741, 2745, 1], [2749, 2768, 19], [2784, 2785, 1], [2809, 2821, 12], [2822, 2828, 1], [2831, 2832, 1], [2835, 2856, 1], [2858, 2864, 1], [2866, 2867, 1], [2869, 2873, 1], [2877, 2908, 31], [2909, 2911, 2], [2912, 2913, 1], [2929, 2947, 18], [2949, 2954, 1], [2958, 2960, 1], [2962, 2965, 1], [2969, 2970, 1], [2972, 2974, 2], [2975, 2979, 4], [2980, 2984, 4], [2985, 2986, 1], [2990, 3001, 1], [3024, 3077, 53], [3078, 3084, 1], [3086, 3088, 1], [3090, 3112, 1], [3114, 3129, 1], [3133, 3160, 27], [3161, 3162, 1], [3165, 3168, 3], [3169, 3200, 31], [3205, 3212, 1], [3214, 3216, 1], [3218, 3240, 1], [3242, 3251, 1], [3253, 3257, 1], [3261, 3293, 32], [3294, 3296, 2], [3297, 3313, 16], [3314, 3332, 18], [3333, 3340, 1], [3342, 3344, 1], [3346, 3386, 1], [3389, 3406, 17], [3412, 3414, 1], [3423, 3425, 1], [3450, 3455, 1], [3461, 3478, 1], [3482, 3505, 1], [3507, 3515, 1], [3517, 3520, 3], [3521, 3526, 1], [3585, 3632, 1], [3634, 3635, 1], [3648, 3654, 1], [3713, 3714, 1], [3716, 3718, 2], [3719, 3722, 1], [3724, 3747, 1], [3749, 3751, 2], [3752, 3760, 1], [3762, 3763, 1], [3773, 3776, 3], [3777, 3780, 1], [3782, 3804, 22], [3805, 3807, 1], [3840, 3904, 64], [3905, 3911, 1], [3913, 3948, 1], [3976, 3980, 1], [4096, 4138, 1], [4159, 4176, 17], [4177, 4181, 1], [4186, 4189, 1], [4193, 4197, 4], [4198, 4206, 8], [4207, 4208, 1], [4213, 4225, 1], [4238, 4256, 18], [4257, 4293, 1], [4295, 4301, 6], [4304, 4346, 1], [4348, 4680, 1], [4682, 4685, 1], [4688, 4694, 1], [4696, 4698, 2], [4699, 4701, 1], [4704, 4744, 1], [4746, 4749, 1], [4752, 4784, 1], [4786, 4789, 1], [4792, 4798, 1], [4800, 4802, 2], [4803, 4805, 1], [4808, 4822, 1], [4824, 4880, 1], [4882, 4885, 1], [4888, 4954, 1], [4992, 5007, 1], [5024, 5109, 1], [5112, 5117, 1], [5121, 5740, 1], [5743, 5759, 1], [5761, 5786, 1], [5792, 5866, 1], [5873, 5880, 1], [5888, 5905, 1], [5919, 5937, 1], [5952, 5969, 1], [5984, 5996, 1], [5998, 6000, 1], [6016, 6067, 1], [6103, 6108, 5], [6176, 6264, 1], [6272, 6276, 1], [6279, 6312, 1], [6314, 6320, 6], [6321, 6389, 1], [6400, 6430, 1], [6480, 6509, 1], [6512, 6516, 1], [6528, 6571, 1], [6576, 6601, 1], [6656, 6678, 1], [6688, 6740, 1], [6823, 6917, 94], [6918, 6963, 1], [6981, 6988, 1], [7043, 7072, 1], [7086, 7087, 1], [7098, 7141, 1], [7168, 7203, 1], [7245, 7247, 1], [7258, 7293, 1], [7296, 7304, 1], [7312, 7354, 1], [7357, 7359, 1], [7401, 7404, 1], [7406, 7411, 1], [7413, 7414, 1], [7418, 7424, 6], [7425, 7615, 1], [7680, 7957, 1], [7960, 7965, 1], [7968, 8005, 1], [8008, 8013, 1], [8016, 8023, 1], [8025, 8031, 2], [8032, 8061, 1], [8064, 8116, 1], [8118, 8124, 1], [8126, 8130, 4], [8131, 8132, 1], [8134, 8140, 1], [8144, 8147, 1], [8150, 8155, 1], [8160, 8172, 1], [8178, 8180, 1], [8182, 8188, 1], [8305, 8319, 14], [8336, 8348, 1], [8450, 8455, 5], [8458, 8467, 1], [8469, 8473, 4], [8474, 8477, 1], [8484, 8490, 2], [8491, 8493, 1], [8495, 8505, 1], [8508, 8511, 1], [8517, 8521, 1], [8526, 8579, 53], [8580, 11264, 2684], [11265, 11492, 1], [11499, 11502, 1], [11506, 11507, 1], [11520, 11557, 1], [11559, 11565, 6], [11568, 11623, 1], [11631, 11648, 17], [11649, 11670, 1], [11680, 11686, 1], [11688, 11694, 1], [11696, 11702, 1], [11704, 11710, 1], [11712, 11718, 1], [11720, 11726, 1], [11728, 11734, 1], [11736, 11742, 1], [11823, 12293, 470], [12294, 12337, 43], [12338, 12341, 1], [12347, 12348, 1], [12353, 12438, 1], [12445, 12447, 1], [12449, 12538, 1], [12540, 12543, 1], [12549, 12591, 1], [12593, 12686, 1], [12704, 12735, 1], [12784, 12799, 1], [13312, 19903, 1], [19968, 42124, 1], [42192, 42237, 1], [42240, 42508, 1], [42512, 42527, 1], [42538, 42539, 1], [42560, 42606, 1], [42623, 42653, 1], [42656, 42725, 1], [42775, 42783, 1], [42786, 42888, 1], [42891, 42954, 1], [42960, 42961, 1], [42963, 42965, 2], [42966, 42969, 1], [42994, 43009, 1], [43011, 43013, 1], [43015, 43018, 1], [43020, 43042, 1], [43072, 43123, 1], [43138, 43187, 1], [43250, 43255, 1], [43259, 43261, 2], [43262, 43274, 12], [43275, 43301, 1], [43312, 43334, 1], [43360, 43388, 1], [43396, 43442, 1], [43471, 43488, 17], [43489, 43492, 1], [43494, 43503, 1], [43514, 43518, 1], [43520, 43560, 1], [43584, 43586, 1], [43588, 43595, 1], [43616, 43638, 1], [43642, 43646, 4], [43647, 43695, 1], [43697, 43701, 4], [43702, 43705, 3], [43706, 43709, 1], [43712, 43714, 2], [43739, 43741, 1], [43744, 43754, 1], [43762, 43764, 1], [43777, 43782, 1], [43785, 43790, 1], [43793, 43798, 1], [43808, 43814, 1], [43816, 43822, 1], [43824, 43866, 1], [43868, 43881, 1], [43888, 44002, 1], [44032, 55203, 1], [55216, 55238, 1], [55243, 55291, 1], [63744, 64109, 1], [64112, 64217, 1], [64256, 64262, 1], [64275, 64279, 1], [64285, 64287, 2], [64288, 64296, 1], [64298, 64310, 1], [64312, 64316, 1], [64318, 64320, 2], [64321, 64323, 2], [64324, 64326, 2], [64327, 64433, 1], [64467, 64829, 1], [64848, 64911, 1], [64914, 64967, 1], [65008, 65019, 1], [65136, 65140, 1], [65142, 65276, 1], [65313, 65338, 1], [65345, 65370, 1], [65382, 65470, 1], [65474, 65479, 1], [65482, 65487, 1], [65490, 65495, 1], [65498, 65500, 1], [65536, 65547, 1], [65549, 65574, 1], [65576, 65594, 1], [65596, 65597, 1], [65599, 65613, 1], [65616, 65629, 1], [65664, 65786, 1], [66176, 66204, 1], [66208, 66256, 1], [66304, 66335, 1], [66349, 66368, 1], [66370, 66377, 1], [66384, 66421, 1], [66432, 66461, 1], [66464, 66499, 1], [66504, 66511, 1], [66560, 66717, 1], [66736, 66771, 1], [66776, 66811, 1], [66816, 66855, 1], [66864, 66915, 1], [66928, 66938, 1], [66940, 66954, 1], [66956, 66962, 1], [66964, 66965, 1], [66967, 66977, 1], [66979, 66993, 1], [66995, 67001, 1], [67003, 67004, 1], [67072, 67382, 1], [67392, 67413, 1], [67424, 67431, 1], [67456, 67461, 1], [67463, 67504, 1], [67506, 67514, 1], [67584, 67589, 1], [67592, 67594, 2], [67595, 67637, 1], [67639, 67640, 1], [67644, 67647, 3], [67648, 67669, 1], [67680, 67702, 1], [67712, 67742, 1], [67808, 67826, 1], [67828, 67829, 1], [67840, 67861, 1], [67872, 67897, 1], [67968, 68023, 1], [68030, 68031, 1], [68096, 68112, 16], [68113, 68115, 1], [68117, 68119, 1], [68121, 68149, 1], [68192, 68220, 1], [68224, 68252, 1], [68288, 68295, 1], [68297, 68324, 1], [68352, 68405, 1], [68416, 68437, 1], [68448, 68466, 1], [68480, 68497, 1], [68608, 68680, 1], [68736, 68786, 1], [68800, 68850, 1], [68864, 68899, 1], [69248, 69289, 1], [69296, 69297, 1], [69376, 69404, 1], [69415, 69424, 9], [69425, 69445, 1], [69488, 69505, 1], [69552, 69572, 1], [69600, 69622, 1], [69635, 69687, 1], [69745, 69746, 1], [69749, 69763, 14], [69764, 69807, 1], [69840, 69864, 1], [69891, 69926, 1], [69956, 69959, 3], [69968, 70002, 1], [70006, 70019, 13], [70020, 70066, 1], [70081, 70084, 1], [70106, 70108, 2], [70144, 70161, 1], [70163, 70187, 1], [70207, 70208, 1], [70272, 70278, 1], [70280, 70282, 2], [70283, 70285, 1], [70287, 70301, 1], [70303, 70312, 1], [70320, 70366, 1], [70405, 70412, 1], [70415, 70416, 1], [70419, 70440, 1], [70442, 70448, 1], [70450, 70451, 1], [70453, 70457, 1], [70461, 70480, 19], [70493, 70497, 1], [70656, 70708, 1], [70727, 70730, 1], [70751, 70753, 1], [70784, 70831, 1], [70852, 70853, 1], [70855, 71040, 185], [71041, 71086, 1], [71128, 71131, 1], [71168, 71215, 1], [71236, 71296, 60], [71297, 71338, 1], [71352, 71424, 72], [71425, 71450, 1], [71488, 71494, 1], [71680, 71723, 1], [71840, 71903, 1], [71935, 71942, 1], [71945, 71948, 3], [71949, 71955, 1], [71957, 71958, 1], [71960, 71983, 1], [71999, 72001, 2], [72096, 72103, 1], [72106, 72144, 1], [72161, 72163, 2], [72192, 72203, 11], [72204, 72242, 1], [72250, 72272, 22], [72284, 72329, 1], [72349, 72368, 19], [72369, 72440, 1], [72704, 72712, 1], [72714, 72750, 1], [72768, 72818, 50], [72819, 72847, 1], [72960, 72966, 1], [72968, 72969, 1], [72971, 73008, 1], [73030, 73056, 26], [73057, 73061, 1], [73063, 73064, 1], [73066, 73097, 1], [73112, 73440, 328], [73441, 73458, 1], [73474, 73476, 2], [73477, 73488, 1], [73490, 73523, 1], [73648, 73728, 80], [73729, 74649, 1], [74880, 75075, 1], [77712, 77808, 1], [77824, 78895, 1], [78913, 78918, 1], [82944, 83526, 1], [92160, 92728, 1], [92736, 92766, 1], [92784, 92862, 1], [92880, 92909, 1], [92928, 92975, 1], [92992, 92995, 1], [93027, 93047, 1], [93053, 93071, 1], [93760, 93823, 1], [93952, 94026, 1], [94032, 94099, 67], [94100, 94111, 1], [94176, 94177, 1], [94179, 94208, 29], [94209, 100343, 1], [100352, 101589, 1], [101632, 101640, 1], [110576, 110579, 1], [110581, 110587, 1], [110589, 110590, 1], [110592, 110882, 1], [110898, 110928, 30], [110929, 110930, 1], [110933, 110948, 15], [110949, 110951, 1], [110960, 111355, 1], [113664, 113770, 1], [113776, 113788, 1], [113792, 113800, 1], [113808, 113817, 1], [119808, 119892, 1], [119894, 119964, 1], [119966, 119967, 1], [119970, 119973, 3], [119974, 119977, 3], [119978, 119980, 1], [119982, 119993, 1], [119995, 119997, 2], [119998, 120003, 1], [120005, 120069, 1], [120071, 120074, 1], [120077, 120084, 1], [120086, 120092, 1], [120094, 120121, 1], [120123, 120126, 1], [120128, 120132, 1], [120134, 120138, 4], [120139, 120144, 1], [120146, 120485, 1], [120488, 120512, 1], [120514, 120538, 1], [120540, 120570, 1], [120572, 120596, 1], [120598, 120628, 1], [120630, 120654, 1], [120656, 120686, 1], [120688, 120712, 1], [120714, 120744, 1], [120746, 120770, 1], [120772, 120779, 1], [122624, 122654, 1], [122661, 122666, 1], [122928, 122989, 1], [123136, 123180, 1], [123191, 123197, 1], [123214, 123536, 322], [123537, 123565, 1], [123584, 123627, 1], [124112, 124139, 1], [124896, 124902, 1], [124904, 124907, 1], [124909, 124910, 1], [124912, 124926, 1], [124928, 125124, 1], [125184, 125251, 1], [125259, 126464, 1205], [126465, 126467, 1], [126469, 126495, 1], [126497, 126498, 1], [126500, 126503, 3], [126505, 126514, 1], [126516, 126519, 1], [126521, 126523, 2], [126530, 126535, 5], [126537, 126541, 2], [126542, 126543, 1], [126545, 126546, 1], [126548, 126551, 3], [126553, 126561, 2], [126562, 126564, 2], [126567, 126570, 1], [126572, 126578, 1], [126580, 126583, 1], [126585, 126588, 1], [126590, 126592, 2], [126593, 126601, 1], [126603, 126619, 1], [126625, 126627, 1], [126629, 126633, 1], [126635, 126651, 1], [131072, 173791, 1], [173824, 177977, 1], [177984, 178205, 1], [178208, 183969, 1], [183984, 191456, 1], [191472, 192093, 1], [194560, 195101, 1], [196608, 201546, 1], [201552, 205743, 1]]);
_defineProperty(UnicodeTables, "foldL", [[837, 837, 1]]);
_defineProperty(UnicodeTables, "Ll", [[97, 122, 1], [181, 223, 42], [224, 246, 1], [248, 255, 1], [257, 311, 2], [312, 328, 2], [329, 375, 2], [378, 382, 2], [383, 384, 1], [387, 389, 2], [392, 396, 4], [397, 402, 5], [405, 409, 4], [410, 411, 1], [414, 417, 3], [419, 421, 2], [424, 426, 2], [427, 429, 2], [432, 436, 4], [438, 441, 3], [442, 445, 3], [446, 447, 1], [454, 460, 3], [462, 476, 2], [477, 495, 2], [496, 499, 3], [501, 505, 4], [507, 563, 2], [564, 569, 1], [572, 575, 3], [576, 578, 2], [583, 591, 2], [592, 659, 1], [661, 687, 1], [881, 883, 2], [887, 891, 4], [892, 893, 1], [912, 940, 28], [941, 974, 1], [976, 977, 1], [981, 983, 1], [985, 1007, 2], [1008, 1011, 1], [1013, 1019, 3], [1020, 1072, 52], [1073, 1119, 1], [1121, 1153, 2], [1163, 1215, 2], [1218, 1230, 2], [1231, 1327, 2], [1376, 1416, 1], [4304, 4346, 1], [4349, 4351, 1], [5112, 5117, 1], [7296, 7304, 1], [7424, 7467, 1], [7531, 7543, 1], [7545, 7578, 1], [7681, 7829, 2], [7830, 7837, 1], [7839, 7935, 2], [7936, 7943, 1], [7952, 7957, 1], [7968, 7975, 1], [7984, 7991, 1], [8000, 8005, 1], [8016, 8023, 1], [8032, 8039, 1], [8048, 8061, 1], [8064, 8071, 1], [8080, 8087, 1], [8096, 8103, 1], [8112, 8116, 1], [8118, 8119, 1], [8126, 8130, 4], [8131, 8132, 1], [8134, 8135, 1], [8144, 8147, 1], [8150, 8151, 1], [8160, 8167, 1], [8178, 8180, 1], [8182, 8183, 1], [8458, 8462, 4], [8463, 8467, 4], [8495, 8505, 5], [8508, 8509, 1], [8518, 8521, 1], [8526, 8580, 54], [11312, 11359, 1], [11361, 11365, 4], [11366, 11372, 2], [11377, 11379, 2], [11380, 11382, 2], [11383, 11387, 1], [11393, 11491, 2], [11492, 11500, 8], [11502, 11507, 5], [11520, 11557, 1], [11559, 11565, 6], [42561, 42605, 2], [42625, 42651, 2], [42787, 42799, 2], [42800, 42801, 1], [42803, 42865, 2], [42866, 42872, 1], [42874, 42876, 2], [42879, 42887, 2], [42892, 42894, 2], [42897, 42899, 2], [42900, 42901, 1], [42903, 42921, 2], [42927, 42933, 6], [42935, 42947, 2], [42952, 42954, 2], [42961, 42969, 2], [42998, 43002, 4], [43824, 43866, 1], [43872, 43880, 1], [43888, 43967, 1], [64256, 64262, 1], [64275, 64279, 1], [65345, 65370, 1], [66600, 66639, 1], [66776, 66811, 1], [66967, 66977, 1], [66979, 66993, 1], [66995, 67001, 1], [67003, 67004, 1], [68800, 68850, 1], [71872, 71903, 1], [93792, 93823, 1], [119834, 119859, 1], [119886, 119892, 1], [119894, 119911, 1], [119938, 119963, 1], [119990, 119993, 1], [119995, 119997, 2], [119998, 120003, 1], [120005, 120015, 1], [120042, 120067, 1], [120094, 120119, 1], [120146, 120171, 1], [120198, 120223, 1], [120250, 120275, 1], [120302, 120327, 1], [120354, 120379, 1], [120406, 120431, 1], [120458, 120485, 1], [120514, 120538, 1], [120540, 120545, 1], [120572, 120596, 1], [120598, 120603, 1], [120630, 120654, 1], [120656, 120661, 1], [120688, 120712, 1], [120714, 120719, 1], [120746, 120770, 1], [120772, 120777, 1], [120779, 122624, 1845], [122625, 122633, 1], [122635, 122654, 1], [122661, 122666, 1], [125218, 125251, 1]]);
_defineProperty(UnicodeTables, "foldLl", [[65, 90, 1], [192, 214, 1], [216, 222, 1], [256, 302, 2], [306, 310, 2], [313, 327, 2], [330, 376, 2], [377, 381, 2], [385, 386, 1], [388, 390, 2], [391, 393, 2], [394, 395, 1], [398, 401, 1], [403, 404, 1], [406, 408, 1], [412, 413, 1], [415, 416, 1], [418, 422, 2], [423, 425, 2], [428, 430, 2], [431, 433, 2], [434, 435, 1], [437, 439, 2], [440, 444, 4], [452, 453, 1], [455, 456, 1], [458, 459, 1], [461, 475, 2], [478, 494, 2], [497, 498, 1], [500, 502, 2], [503, 504, 1], [506, 562, 2], [570, 571, 1], [573, 574, 1], [577, 579, 2], [580, 582, 1], [584, 590, 2], [837, 880, 43], [882, 886, 4], [895, 902, 7], [904, 906, 1], [908, 910, 2], [911, 913, 2], [914, 929, 1], [931, 939, 1], [975, 984, 9], [986, 1006, 2], [1012, 1015, 3], [1017, 1018, 1], [1021, 1071, 1], [1120, 1152, 2], [1162, 1216, 2], [1217, 1229, 2], [1232, 1326, 2], [1329, 1366, 1], [4256, 4293, 1], [4295, 4301, 6], [5024, 5109, 1], [7312, 7354, 1], [7357, 7359, 1], [7680, 7828, 2], [7838, 7934, 2], [7944, 7951, 1], [7960, 7965, 1], [7976, 7983, 1], [7992, 7999, 1], [8008, 8013, 1], [8025, 8031, 2], [8040, 8047, 1], [8072, 8079, 1], [8088, 8095, 1], [8104, 8111, 1], [8120, 8124, 1], [8136, 8140, 1], [8152, 8155, 1], [8168, 8172, 1], [8184, 8188, 1], [8486, 8490, 4], [8491, 8498, 7], [8579, 11264, 2685], [11265, 11311, 1], [11360, 11362, 2], [11363, 11364, 1], [11367, 11373, 2], [11374, 11376, 1], [11378, 11381, 3], [11390, 11392, 1], [11394, 11490, 2], [11499, 11501, 2], [11506, 42560, 31054], [42562, 42604, 2], [42624, 42650, 2], [42786, 42798, 2], [42802, 42862, 2], [42873, 42877, 2], [42878, 42886, 2], [42891, 42893, 2], [42896, 42898, 2], [42902, 42922, 2], [42923, 42926, 1], [42928, 42932, 1], [42934, 42948, 2], [42949, 42951, 1], [42953, 42960, 7], [42966, 42968, 2], [42997, 65313, 22316], [65314, 65338, 1], [66560, 66599, 1], [66736, 66771, 1], [66928, 66938, 1], [66940, 66954, 1], [66956, 66962, 1], [66964, 66965, 1], [68736, 68786, 1], [71840, 71871, 1], [93760, 93791, 1], [125184, 125217, 1]]);
_defineProperty(UnicodeTables, "Lm", [[688, 705, 1], [710, 721, 1], [736, 740, 1], [748, 750, 2], [884, 890, 6], [1369, 1600, 231], [1765, 1766, 1], [2036, 2037, 1], [2042, 2074, 32], [2084, 2088, 4], [2249, 2417, 168], [3654, 3782, 128], [4348, 6103, 1755], [6211, 6823, 612], [7288, 7293, 1], [7468, 7530, 1], [7544, 7579, 35], [7580, 7615, 1], [8305, 8319, 14], [8336, 8348, 1], [11388, 11389, 1], [11631, 11823, 192], [12293, 12337, 44], [12338, 12341, 1], [12347, 12445, 98], [12446, 12540, 94], [12541, 12542, 1], [40981, 42232, 1251], [42233, 42237, 1], [42508, 42623, 115], [42652, 42653, 1], [42775, 42783, 1], [42864, 42888, 24], [42994, 42996, 1], [43000, 43001, 1], [43471, 43494, 23], [43632, 43741, 109], [43763, 43764, 1], [43868, 43871, 1], [43881, 65392, 21511], [65438, 65439, 1], [67456, 67461, 1], [67463, 67504, 1], [67506, 67514, 1], [92992, 92995, 1], [94099, 94111, 1], [94176, 94177, 1], [94179, 110576, 16397], [110577, 110579, 1], [110581, 110587, 1], [110589, 110590, 1], [122928, 122989, 1], [123191, 123197, 1], [124139, 125259, 1120]]);
_defineProperty(UnicodeTables, "Lo", [[170, 186, 16], [443, 448, 5], [449, 451, 1], [660, 1488, 828], [1489, 1514, 1], [1519, 1522, 1], [1568, 1599, 1], [1601, 1610, 1], [1646, 1647, 1], [1649, 1747, 1], [1749, 1774, 25], [1775, 1786, 11], [1787, 1788, 1], [1791, 1808, 17], [1810, 1839, 1], [1869, 1957, 1], [1969, 1994, 25], [1995, 2026, 1], [2048, 2069, 1], [2112, 2136, 1], [2144, 2154, 1], [2160, 2183, 1], [2185, 2190, 1], [2208, 2248, 1], [2308, 2361, 1], [2365, 2384, 19], [2392, 2401, 1], [2418, 2432, 1], [2437, 2444, 1], [2447, 2448, 1], [2451, 2472, 1], [2474, 2480, 1], [2482, 2486, 4], [2487, 2489, 1], [2493, 2510, 17], [2524, 2525, 1], [2527, 2529, 1], [2544, 2545, 1], [2556, 2565, 9], [2566, 2570, 1], [2575, 2576, 1], [2579, 2600, 1], [2602, 2608, 1], [2610, 2611, 1], [2613, 2614, 1], [2616, 2617, 1], [2649, 2652, 1], [2654, 2674, 20], [2675, 2676, 1], [2693, 2701, 1], [2703, 2705, 1], [2707, 2728, 1], [2730, 2736, 1], [2738, 2739, 1], [2741, 2745, 1], [2749, 2768, 19], [2784, 2785, 1], [2809, 2821, 12], [2822, 2828, 1], [2831, 2832, 1], [2835, 2856, 1], [2858, 2864, 1], [2866, 2867, 1], [2869, 2873, 1], [2877, 2908, 31], [2909, 2911, 2], [2912, 2913, 1], [2929, 2947, 18], [2949, 2954, 1], [2958, 2960, 1], [2962, 2965, 1], [2969, 2970, 1], [2972, 2974, 2], [2975, 2979, 4], [2980, 2984, 4], [2985, 2986, 1], [2990, 3001, 1], [3024, 3077, 53], [3078, 3084, 1], [3086, 3088, 1], [3090, 3112, 1], [3114, 3129, 1], [3133, 3160, 27], [3161, 3162, 1], [3165, 3168, 3], [3169, 3200, 31], [3205, 3212, 1], [3214, 3216, 1], [3218, 3240, 1], [3242, 3251, 1], [3253, 3257, 1], [3261, 3293, 32], [3294, 3296, 2], [3297, 3313, 16], [3314, 3332, 18], [3333, 3340, 1], [3342, 3344, 1], [3346, 3386, 1], [3389, 3406, 17], [3412, 3414, 1], [3423, 3425, 1], [3450, 3455, 1], [3461, 3478, 1], [3482, 3505, 1], [3507, 3515, 1], [3517, 3520, 3], [3521, 3526, 1], [3585, 3632, 1], [3634, 3635, 1], [3648, 3653, 1], [3713, 3714, 1], [3716, 3718, 2], [3719, 3722, 1], [3724, 3747, 1], [3749, 3751, 2], [3752, 3760, 1], [3762, 3763, 1], [3773, 3776, 3], [3777, 3780, 1], [3804, 3807, 1], [3840, 3904, 64], [3905, 3911, 1], [3913, 3948, 1], [3976, 3980, 1], [4096, 4138, 1], [4159, 4176, 17], [4177, 4181, 1], [4186, 4189, 1], [4193, 4197, 4], [4198, 4206, 8], [4207, 4208, 1], [4213, 4225, 1], [4238, 4352, 114], [4353, 4680, 1], [4682, 4685, 1], [4688, 4694, 1], [4696, 4698, 2], [4699, 4701, 1], [4704, 4744, 1], [4746, 4749, 1], [4752, 4784, 1], [4786, 4789, 1], [4792, 4798, 1], [4800, 4802, 2], [4803, 4805, 1], [4808, 4822, 1], [4824, 4880, 1], [4882, 4885, 1], [4888, 4954, 1], [4992, 5007, 1], [5121, 5740, 1], [5743, 5759, 1], [5761, 5786, 1], [5792, 5866, 1], [5873, 5880, 1], [5888, 5905, 1], [5919, 5937, 1], [5952, 5969, 1], [5984, 5996, 1], [5998, 6000, 1], [6016, 6067, 1], [6108, 6176, 68], [6177, 6210, 1], [6212, 6264, 1], [6272, 6276, 1], [6279, 6312, 1], [6314, 6320, 6], [6321, 6389, 1], [6400, 6430, 1], [6480, 6509, 1], [6512, 6516, 1], [6528, 6571, 1], [6576, 6601, 1], [6656, 6678, 1], [6688, 6740, 1], [6917, 6963, 1], [6981, 6988, 1], [7043, 7072, 1], [7086, 7087, 1], [7098, 7141, 1], [7168, 7203, 1], [7245, 7247, 1], [7258, 7287, 1], [7401, 7404, 1], [7406, 7411, 1], [7413, 7414, 1], [7418, 8501, 1083], [8502, 8504, 1], [11568, 11623, 1], [11648, 11670, 1], [11680, 11686, 1], [11688, 11694, 1], [11696, 11702, 1], [11704, 11710, 1], [11712, 11718, 1], [11720, 11726, 1], [11728, 11734, 1], [11736, 11742, 1], [12294, 12348, 54], [12353, 12438, 1], [12447, 12449, 2], [12450, 12538, 1], [12543, 12549, 6], [12550, 12591, 1], [12593, 12686, 1], [12704, 12735, 1], [12784, 12799, 1], [13312, 19903, 1], [19968, 40980, 1], [40982, 42124, 1], [42192, 42231, 1], [42240, 42507, 1], [42512, 42527, 1], [42538, 42539, 1], [42606, 42656, 50], [42657, 42725, 1], [42895, 42999, 104], [43003, 43009, 1], [43011, 43013, 1], [43015, 43018, 1], [43020, 43042, 1], [43072, 43123, 1], [43138, 43187, 1], [43250, 43255, 1], [43259, 43261, 2], [43262, 43274, 12], [43275, 43301, 1], [43312, 43334, 1], [43360, 43388, 1], [43396, 43442, 1], [43488, 43492, 1], [43495, 43503, 1], [43514, 43518, 1], [43520, 43560, 1], [43584, 43586, 1], [43588, 43595, 1], [43616, 43631, 1], [43633, 43638, 1], [43642, 43646, 4], [43647, 43695, 1], [43697, 43701, 4], [43702, 43705, 3], [43706, 43709, 1], [43712, 43714, 2], [43739, 43740, 1], [43744, 43754, 1], [43762, 43777, 15], [43778, 43782, 1], [43785, 43790, 1], [43793, 43798, 1], [43808, 43814, 1], [43816, 43822, 1], [43968, 44002, 1], [44032, 55203, 1], [55216, 55238, 1], [55243, 55291, 1], [63744, 64109, 1], [64112, 64217, 1], [64285, 64287, 2], [64288, 64296, 1], [64298, 64310, 1], [64312, 64316, 1], [64318, 64320, 2], [64321, 64323, 2], [64324, 64326, 2], [64327, 64433, 1], [64467, 64829, 1], [64848, 64911, 1], [64914, 64967, 1], [65008, 65019, 1], [65136, 65140, 1], [65142, 65276, 1], [65382, 65391, 1], [65393, 65437, 1], [65440, 65470, 1], [65474, 65479, 1], [65482, 65487, 1], [65490, 65495, 1], [65498, 65500, 1], [65536, 65547, 1], [65549, 65574, 1], [65576, 65594, 1], [65596, 65597, 1], [65599, 65613, 1], [65616, 65629, 1], [65664, 65786, 1], [66176, 66204, 1], [66208, 66256, 1], [66304, 66335, 1], [66349, 66368, 1], [66370, 66377, 1], [66384, 66421, 1], [66432, 66461, 1], [66464, 66499, 1], [66504, 66511, 1], [66640, 66717, 1], [66816, 66855, 1], [66864, 66915, 1], [67072, 67382, 1], [67392, 67413, 1], [67424, 67431, 1], [67584, 67589, 1], [67592, 67594, 2], [67595, 67637, 1], [67639, 67640, 1], [67644, 67647, 3], [67648, 67669, 1], [67680, 67702, 1], [67712, 67742, 1], [67808, 67826, 1], [67828, 67829, 1], [67840, 67861, 1], [67872, 67897, 1], [67968, 68023, 1], [68030, 68031, 1], [68096, 68112, 16], [68113, 68115, 1], [68117, 68119, 1], [68121, 68149, 1], [68192, 68220, 1], [68224, 68252, 1], [68288, 68295, 1], [68297, 68324, 1], [68352, 68405, 1], [68416, 68437, 1], [68448, 68466, 1], [68480, 68497, 1], [68608, 68680, 1], [68864, 68899, 1], [69248, 69289, 1], [69296, 69297, 1], [69376, 69404, 1], [69415, 69424, 9], [69425, 69445, 1], [69488, 69505, 1], [69552, 69572, 1], [69600, 69622, 1], [69635, 69687, 1], [69745, 69746, 1], [69749, 69763, 14], [69764, 69807, 1], [69840, 69864, 1], [69891, 69926, 1], [69956, 69959, 3], [69968, 70002, 1], [70006, 70019, 13], [70020, 70066, 1], [70081, 70084, 1], [70106, 70108, 2], [70144, 70161, 1], [70163, 70187, 1], [70207, 70208, 1], [70272, 70278, 1], [70280, 70282, 2], [70283, 70285, 1], [70287, 70301, 1], [70303, 70312, 1], [70320, 70366, 1], [70405, 70412, 1], [70415, 70416, 1], [70419, 70440, 1], [70442, 70448, 1], [70450, 70451, 1], [70453, 70457, 1], [70461, 70480, 19], [70493, 70497, 1], [70656, 70708, 1], [70727, 70730, 1], [70751, 70753, 1], [70784, 70831, 1], [70852, 70853, 1], [70855, 71040, 185], [71041, 71086, 1], [71128, 71131, 1], [71168, 71215, 1], [71236, 71296, 60], [71297, 71338, 1], [71352, 71424, 72], [71425, 71450, 1], [71488, 71494, 1], [71680, 71723, 1], [71935, 71942, 1], [71945, 71948, 3], [71949, 71955, 1], [71957, 71958, 1], [71960, 71983, 1], [71999, 72001, 2], [72096, 72103, 1], [72106, 72144, 1], [72161, 72163, 2], [72192, 72203, 11], [72204, 72242, 1], [72250, 72272, 22], [72284, 72329, 1], [72349, 72368, 19], [72369, 72440, 1], [72704, 72712, 1], [72714, 72750, 1], [72768, 72818, 50], [72819, 72847, 1], [72960, 72966, 1], [72968, 72969, 1], [72971, 73008, 1], [73030, 73056, 26], [73057, 73061, 1], [73063, 73064, 1], [73066, 73097, 1], [73112, 73440, 328], [73441, 73458, 1], [73474, 73476, 2], [73477, 73488, 1], [73490, 73523, 1], [73648, 73728, 80], [73729, 74649, 1], [74880, 75075, 1], [77712, 77808, 1], [77824, 78895, 1], [78913, 78918, 1], [82944, 83526, 1], [92160, 92728, 1], [92736, 92766, 1], [92784, 92862, 1], [92880, 92909, 1], [92928, 92975, 1], [93027, 93047, 1], [93053, 93071, 1], [93952, 94026, 1], [94032, 94208, 176], [94209, 100343, 1], [100352, 101589, 1], [101632, 101640, 1], [110592, 110882, 1], [110898, 110928, 30], [110929, 110930, 1], [110933, 110948, 15], [110949, 110951, 1], [110960, 111355, 1], [113664, 113770, 1], [113776, 113788, 1], [113792, 113800, 1], [113808, 113817, 1], [122634, 123136, 502], [123137, 123180, 1], [123214, 123536, 322], [123537, 123565, 1], [123584, 123627, 1], [124112, 124138, 1], [124896, 124902, 1], [124904, 124907, 1], [124909, 124910, 1], [124912, 124926, 1], [124928, 125124, 1], [126464, 126467, 1], [126469, 126495, 1], [126497, 126498, 1], [126500, 126503, 3], [126505, 126514, 1], [126516, 126519, 1], [126521, 126523, 2], [126530, 126535, 5], [126537, 126541, 2], [126542, 126543, 1], [126545, 126546, 1], [126548, 126551, 3], [126553, 126561, 2], [126562, 126564, 2], [126567, 126570, 1], [126572, 126578, 1], [126580, 126583, 1], [126585, 126588, 1], [126590, 126592, 2], [126593, 126601, 1], [126603, 126619, 1], [126625, 126627, 1], [126629, 126633, 1], [126635, 126651, 1], [131072, 173791, 1], [173824, 177977, 1], [177984, 178205, 1], [178208, 183969, 1], [183984, 191456, 1], [191472, 192093, 1], [194560, 195101, 1], [196608, 201546, 1], [201552, 205743, 1]]);
_defineProperty(UnicodeTables, "Lt", [[453, 459, 3], [498, 8072, 7574], [8073, 8079, 1], [8088, 8095, 1], [8104, 8111, 1], [8124, 8140, 16], [8188, 8188, 1]]);
_defineProperty(UnicodeTables, "foldLt", [[452, 454, 2], [455, 457, 2], [458, 460, 2], [497, 499, 2], [8064, 8071, 1], [8080, 8087, 1], [8096, 8103, 1], [8115, 8131, 16], [8179, 8179, 1]]);
_defineProperty(UnicodeTables, "Lu", [[65, 90, 1], [192, 214, 1], [216, 222, 1], [256, 310, 2], [313, 327, 2], [330, 376, 2], [377, 381, 2], [385, 386, 1], [388, 390, 2], [391, 393, 2], [394, 395, 1], [398, 401, 1], [403, 404, 1], [406, 408, 1], [412, 413, 1], [415, 416, 1], [418, 422, 2], [423, 425, 2], [428, 430, 2], [431, 433, 2], [434, 435, 1], [437, 439, 2], [440, 444, 4], [452, 461, 3], [463, 475, 2], [478, 494, 2], [497, 500, 3], [502, 504, 1], [506, 562, 2], [570, 571, 1], [573, 574, 1], [577, 579, 2], [580, 582, 1], [584, 590, 2], [880, 882, 2], [886, 895, 9], [902, 904, 2], [905, 906, 1], [908, 910, 2], [911, 913, 2], [914, 929, 1], [931, 939, 1], [975, 978, 3], [979, 980, 1], [984, 1006, 2], [1012, 1015, 3], [1017, 1018, 1], [1021, 1071, 1], [1120, 1152, 2], [1162, 1216, 2], [1217, 1229, 2], [1232, 1326, 2], [1329, 1366, 1], [4256, 4293, 1], [4295, 4301, 6], [5024, 5109, 1], [7312, 7354, 1], [7357, 7359, 1], [7680, 7828, 2], [7838, 7934, 2], [7944, 7951, 1], [7960, 7965, 1], [7976, 7983, 1], [7992, 7999, 1], [8008, 8013, 1], [8025, 8031, 2], [8040, 8047, 1], [8120, 8123, 1], [8136, 8139, 1], [8152, 8155, 1], [8168, 8172, 1], [8184, 8187, 1], [8450, 8455, 5], [8459, 8461, 1], [8464, 8466, 1], [8469, 8473, 4], [8474, 8477, 1], [8484, 8490, 2], [8491, 8493, 1], [8496, 8499, 1], [8510, 8511, 1], [8517, 8579, 62], [11264, 11311, 1], [11360, 11362, 2], [11363, 11364, 1], [11367, 11373, 2], [11374, 11376, 1], [11378, 11381, 3], [11390, 11392, 1], [11394, 11490, 2], [11499, 11501, 2], [11506, 42560, 31054], [42562, 42604, 2], [42624, 42650, 2], [42786, 42798, 2], [42802, 42862, 2], [42873, 42877, 2], [42878, 42886, 2], [42891, 42893, 2], [42896, 42898, 2], [42902, 42922, 2], [42923, 42926, 1], [42928, 42932, 1], [42934, 42948, 2], [42949, 42951, 1], [42953, 42960, 7], [42966, 42968, 2], [42997, 65313, 22316], [65314, 65338, 1], [66560, 66599, 1], [66736, 66771, 1], [66928, 66938, 1], [66940, 66954, 1], [66956, 66962, 1], [66964, 66965, 1], [68736, 68786, 1], [71840, 71871, 1], [93760, 93791, 1], [119808, 119833, 1], [119860, 119885, 1], [119912, 119937, 1], [119964, 119966, 2], [119967, 119973, 3], [119974, 119977, 3], [119978, 119980, 1], [119982, 119989, 1], [120016, 120041, 1], [120068, 120069, 1], [120071, 120074, 1], [120077, 120084, 1], [120086, 120092, 1], [120120, 120121, 1], [120123, 120126, 1], [120128, 120132, 1], [120134, 120138, 4], [120139, 120144, 1], [120172, 120197, 1], [120224, 120249, 1], [120276, 120301, 1], [120328, 120353, 1], [120380, 120405, 1], [120432, 120457, 1], [120488, 120512, 1], [120546, 120570, 1], [120604, 120628, 1], [120662, 120686, 1], [120720, 120744, 1], [120778, 125184, 4406], [125185, 125217, 1]]);
_defineProperty(UnicodeTables, "Upper", _UnicodeTables.Lu);
_defineProperty(UnicodeTables, "foldLu", [[97, 122, 1], [181, 223, 42], [224, 246, 1], [248, 255, 1], [257, 303, 2], [307, 311, 2], [314, 328, 2], [331, 375, 2], [378, 382, 2], [383, 384, 1], [387, 389, 2], [392, 396, 4], [402, 405, 3], [409, 410, 1], [414, 417, 3], [419, 421, 2], [424, 429, 5], [432, 436, 4], [438, 441, 3], [445, 447, 2], [453, 454, 1], [456, 457, 1], [459, 460, 1], [462, 476, 2], [477, 495, 2], [498, 499, 1], [501, 505, 4], [507, 543, 2], [547, 563, 2], [572, 575, 3], [576, 578, 2], [583, 591, 2], [592, 596, 1], [598, 599, 1], [601, 603, 2], [604, 608, 4], [609, 613, 2], [614, 616, 2], [617, 620, 1], [623, 625, 2], [626, 629, 3], [637, 640, 3], [642, 643, 1], [647, 652, 1], [658, 669, 11], [670, 837, 167], [881, 883, 2], [887, 891, 4], [892, 893, 1], [940, 943, 1], [945, 974, 1], [976, 977, 1], [981, 983, 1], [985, 1007, 2], [1008, 1011, 1], [1013, 1019, 3], [1072, 1119, 1], [1121, 1153, 2], [1163, 1215, 2], [1218, 1230, 2], [1231, 1327, 2], [1377, 1414, 1], [4304, 4346, 1], [4349, 4351, 1], [5112, 5117, 1], [7296, 7304, 1], [7545, 7549, 4], [7566, 7681, 115], [7683, 7829, 2], [7835, 7841, 6], [7843, 7935, 2], [7936, 7943, 1], [7952, 7957, 1], [7968, 7975, 1], [7984, 7991, 1], [8000, 8005, 1], [8017, 8023, 2], [8032, 8039, 1], [8048, 8061, 1], [8112, 8113, 1], [8126, 8144, 18], [8145, 8160, 15], [8161, 8165, 4], [8526, 8580, 54], [11312, 11359, 1], [11361, 11365, 4], [11366, 11372, 2], [11379, 11382, 3], [11393, 11491, 2], [11500, 11502, 2], [11507, 11520, 13], [11521, 11557, 1], [11559, 11565, 6], [42561, 42605, 2], [42625, 42651, 2], [42787, 42799, 2], [42803, 42863, 2], [42874, 42876, 2], [42879, 42887, 2], [42892, 42897, 5], [42899, 42900, 1], [42903, 42921, 2], [42933, 42947, 2], [42952, 42954, 2], [42961, 42967, 6], [42969, 42998, 29], [43859, 43888, 29], [43889, 43967, 1], [65345, 65370, 1], [66600, 66639, 1], [66776, 66811, 1], [66967, 66977, 1], [66979, 66993, 1], [66995, 67001, 1], [67003, 67004, 1], [68800, 68850, 1], [71872, 71903, 1], [93792, 93823, 1], [125218, 125251, 1]]);
_defineProperty(UnicodeTables, "M", [[768, 879, 1], [1155, 1161, 1], [1425, 1469, 1], [1471, 1473, 2], [1474, 1476, 2], [1477, 1479, 2], [1552, 1562, 1], [1611, 1631, 1], [1648, 1750, 102], [1751, 1756, 1], [1759, 1764, 1], [1767, 1768, 1], [1770, 1773, 1], [1809, 1840, 31], [1841, 1866, 1], [1958, 1968, 1], [2027, 2035, 1], [2045, 2070, 25], [2071, 2073, 1], [2075, 2083, 1], [2085, 2087, 1], [2089, 2093, 1], [2137, 2139, 1], [2200, 2207, 1], [2250, 2273, 1], [2275, 2307, 1], [2362, 2364, 1], [2366, 2383, 1], [2385, 2391, 1], [2402, 2403, 1], [2433, 2435, 1], [2492, 2494, 2], [2495, 2500, 1], [2503, 2504, 1], [2507, 2509, 1], [2519, 2530, 11], [2531, 2558, 27], [2561, 2563, 1], [2620, 2622, 2], [2623, 2626, 1], [2631, 2632, 1], [2635, 2637, 1], [2641, 2672, 31], [2673, 2677, 4], [2689, 2691, 1], [2748, 2750, 2], [2751, 2757, 1], [2759, 2761, 1], [2763, 2765, 1], [2786, 2787, 1], [2810, 2815, 1], [2817, 2819, 1], [2876, 2878, 2], [2879, 2884, 1], [2887, 2888, 1], [2891, 2893, 1], [2901, 2903, 1], [2914, 2915, 1], [2946, 3006, 60], [3007, 3010, 1], [3014, 3016, 1], [3018, 3021, 1], [3031, 3072, 41], [3073, 3076, 1], [3132, 3134, 2], [3135, 3140, 1], [3142, 3144, 1], [3146, 3149, 1], [3157, 3158, 1], [3170, 3171, 1], [3201, 3203, 1], [3260, 3262, 2], [3263, 3268, 1], [3270, 3272, 1], [3274, 3277, 1], [3285, 3286, 1], [3298, 3299, 1], [3315, 3328, 13], [3329, 3331, 1], [3387, 3388, 1], [3390, 3396, 1], [3398, 3400, 1], [3402, 3405, 1], [3415, 3426, 11], [3427, 3457, 30], [3458, 3459, 1], [3530, 3535, 5], [3536, 3540, 1], [3542, 3544, 2], [3545, 3551, 1], [3570, 3571, 1], [3633, 3636, 3], [3637, 3642, 1], [3655, 3662, 1], [3761, 3764, 3], [3765, 3772, 1], [3784, 3790, 1], [3864, 3865, 1], [3893, 3897, 2], [3902, 3903, 1], [3953, 3972, 1], [3974, 3975, 1], [3981, 3991, 1], [3993, 4028, 1], [4038, 4139, 101], [4140, 4158, 1], [4182, 4185, 1], [4190, 4192, 1], [4194, 4196, 1], [4199, 4205, 1], [4209, 4212, 1], [4226, 4237, 1], [4239, 4250, 11], [4251, 4253, 1], [4957, 4959, 1], [5906, 5909, 1], [5938, 5940, 1], [5970, 5971, 1], [6002, 6003, 1], [6068, 6099, 1], [6109, 6155, 46], [6156, 6157, 1], [6159, 6277, 118], [6278, 6313, 35], [6432, 6443, 1], [6448, 6459, 1], [6679, 6683, 1], [6741, 6750, 1], [6752, 6780, 1], [6783, 6832, 49], [6833, 6862, 1], [6912, 6916, 1], [6964, 6980, 1], [7019, 7027, 1], [7040, 7042, 1], [7073, 7085, 1], [7142, 7155, 1], [7204, 7223, 1], [7376, 7378, 1], [7380, 7400, 1], [7405, 7412, 7], [7415, 7417, 1], [7616, 7679, 1], [8400, 8432, 1], [11503, 11505, 1], [11647, 11744, 97], [11745, 11775, 1], [12330, 12335, 1], [12441, 12442, 1], [42607, 42610, 1], [42612, 42621, 1], [42654, 42655, 1], [42736, 42737, 1], [43010, 43014, 4], [43019, 43043, 24], [43044, 43047, 1], [43052, 43136, 84], [43137, 43188, 51], [43189, 43205, 1], [43232, 43249, 1], [43263, 43302, 39], [43303, 43309, 1], [43335, 43347, 1], [43392, 43395, 1], [43443, 43456, 1], [43493, 43561, 68], [43562, 43574, 1], [43587, 43596, 9], [43597, 43643, 46], [43644, 43645, 1], [43696, 43698, 2], [43699, 43700, 1], [43703, 43704, 1], [43710, 43711, 1], [43713, 43755, 42], [43756, 43759, 1], [43765, 43766, 1], [44003, 44010, 1], [44012, 44013, 1], [64286, 65024, 738], [65025, 65039, 1], [65056, 65071, 1], [66045, 66272, 227], [66422, 66426, 1], [68097, 68099, 1], [68101, 68102, 1], [68108, 68111, 1], [68152, 68154, 1], [68159, 68325, 166], [68326, 68900, 574], [68901, 68903, 1], [69291, 69292, 1], [69373, 69375, 1], [69446, 69456, 1], [69506, 69509, 1], [69632, 69634, 1], [69688, 69702, 1], [69744, 69747, 3], [69748, 69759, 11], [69760, 69762, 1], [69808, 69818, 1], [69826, 69888, 62], [69889, 69890, 1], [69927, 69940, 1], [69957, 69958, 1], [70003, 70016, 13], [70017, 70018, 1], [70067, 70080, 1], [70089, 70092, 1], [70094, 70095, 1], [70188, 70199, 1], [70206, 70209, 3], [70367, 70378, 1], [70400, 70403, 1], [70459, 70460, 1], [70462, 70468, 1], [70471, 70472, 1], [70475, 70477, 1], [70487, 70498, 11], [70499, 70502, 3], [70503, 70508, 1], [70512, 70516, 1], [70709, 70726, 1], [70750, 70832, 82], [70833, 70851, 1], [71087, 71093, 1], [71096, 71104, 1], [71132, 71133, 1], [71216, 71232, 1], [71339, 71351, 1], [71453, 71467, 1], [71724, 71738, 1], [71984, 71989, 1], [71991, 71992, 1], [71995, 71998, 1], [72000, 72002, 2], [72003, 72145, 142], [72146, 72151, 1], [72154, 72160, 1], [72164, 72193, 29], [72194, 72202, 1], [72243, 72249, 1], [72251, 72254, 1], [72263, 72273, 10], [72274, 72283, 1], [72330, 72345, 1], [72751, 72758, 1], [72760, 72767, 1], [72850, 72871, 1], [72873, 72886, 1], [73009, 73014, 1], [73018, 73020, 2], [73021, 73023, 2], [73024, 73029, 1], [73031, 73098, 67], [73099, 73102, 1], [73104, 73105, 1], [73107, 73111, 1], [73459, 73462, 1], [73472, 73473, 1], [73475, 73524, 49], [73525, 73530, 1], [73534, 73538, 1], [78912, 78919, 7], [78920, 78933, 1], [92912, 92916, 1], [92976, 92982, 1], [94031, 94033, 2], [94034, 94087, 1], [94095, 94098, 1], [94180, 94192, 12], [94193, 113821, 19628], [113822, 118528, 4706], [118529, 118573, 1], [118576, 118598, 1], [119141, 119145, 1], [119149, 119154, 1], [119163, 119170, 1], [119173, 119179, 1], [119210, 119213, 1], [119362, 119364, 1], [121344, 121398, 1], [121403, 121452, 1], [121461, 121476, 15], [121499, 121503, 1], [121505, 121519, 1], [122880, 122886, 1], [122888, 122904, 1], [122907, 122913, 1], [122915, 122916, 1], [122918, 122922, 1], [123023, 123184, 161], [123185, 123190, 1], [123566, 123628, 62], [123629, 123631, 1], [124140, 124143, 1], [125136, 125142, 1], [125252, 125258, 1], [917760, 917999, 1]]);
_defineProperty(UnicodeTables, "foldM", [[921, 953, 32], [8126, 8126, 1]]);
_defineProperty(UnicodeTables, "Mc", [[2307, 2363, 56], [2366, 2368, 1], [2377, 2380, 1], [2382, 2383, 1], [2434, 2435, 1], [2494, 2496, 1], [2503, 2504, 1], [2507, 2508, 1], [2519, 2563, 44], [2622, 2624, 1], [2691, 2750, 59], [2751, 2752, 1], [2761, 2763, 2], [2764, 2818, 54], [2819, 2878, 59], [2880, 2887, 7], [2888, 2891, 3], [2892, 2903, 11], [3006, 3007, 1], [3009, 3010, 1], [3014, 3016, 1], [3018, 3020, 1], [3031, 3073, 42], [3074, 3075, 1], [3137, 3140, 1], [3202, 3203, 1], [3262, 3264, 2], [3265, 3268, 1], [3271, 3272, 1], [3274, 3275, 1], [3285, 3286, 1], [3315, 3330, 15], [3331, 3390, 59], [3391, 3392, 1], [3398, 3400, 1], [3402, 3404, 1], [3415, 3458, 43], [3459, 3535, 76], [3536, 3537, 1], [3544, 3551, 1], [3570, 3571, 1], [3902, 3903, 1], [3967, 4139, 172], [4140, 4145, 5], [4152, 4155, 3], [4156, 4182, 26], [4183, 4194, 11], [4195, 4196, 1], [4199, 4205, 1], [4227, 4228, 1], [4231, 4236, 1], [4239, 4250, 11], [4251, 4252, 1], [5909, 5940, 31], [6070, 6078, 8], [6079, 6085, 1], [6087, 6088, 1], [6435, 6438, 1], [6441, 6443, 1], [6448, 6449, 1], [6451, 6456, 1], [6681, 6682, 1], [6741, 6743, 2], [6753, 6755, 2], [6756, 6765, 9], [6766, 6770, 1], [6916, 6965, 49], [6971, 6973, 2], [6974, 6977, 1], [6979, 6980, 1], [7042, 7073, 31], [7078, 7079, 1], [7082, 7143, 61], [7146, 7148, 1], [7150, 7154, 4], [7155, 7204, 49], [7205, 7211, 1], [7220, 7221, 1], [7393, 7415, 22], [12334, 12335, 1], [43043, 43044, 1], [43047, 43136, 89], [43137, 43188, 51], [43189, 43203, 1], [43346, 43347, 1], [43395, 43444, 49], [43445, 43450, 5], [43451, 43454, 3], [43455, 43456, 1], [43567, 43568, 1], [43571, 43572, 1], [43597, 43643, 46], [43645, 43755, 110], [43758, 43759, 1], [43765, 44003, 238], [44004, 44006, 2], [44007, 44009, 2], [44010, 44012, 2], [69632, 69634, 2], [69762, 69808, 46], [69809, 69810, 1], [69815, 69816, 1], [69932, 69957, 25], [69958, 70018, 60], [70067, 70069, 1], [70079, 70080, 1], [70094, 70188, 94], [70189, 70190, 1], [70194, 70195, 1], [70197, 70368, 171], [70369, 70370, 1], [70402, 70403, 1], [70462, 70463, 1], [70465, 70468, 1], [70471, 70472, 1], [70475, 70477, 1], [70487, 70498, 11], [70499, 70709, 210], [70710, 70711, 1], [70720, 70721, 1], [70725, 70832, 107], [70833, 70834, 1], [70841, 70843, 2], [70844, 70846, 1], [70849, 71087, 238], [71088, 71089, 1], [71096, 71099, 1], [71102, 71216, 114], [71217, 71218, 1], [71227, 71228, 1], [71230, 71340, 110], [71342, 71343, 1], [71350, 71456, 106], [71457, 71462, 5], [71724, 71726, 1], [71736, 71984, 248], [71985, 71989, 1], [71991, 71992, 1], [71997, 72000, 3], [72002, 72145, 143], [72146, 72147, 1], [72156, 72159, 1], [72164, 72249, 85], [72279, 72280, 1], [72343, 72751, 408], [72766, 72873, 107], [72881, 72884, 3], [73098, 73102, 1], [73107, 73108, 1], [73110, 73461, 351], [73462, 73475, 13], [73524, 73525, 1], [73534, 73535, 1], [73537, 94033, 20496], [94034, 94087, 1], [94192, 94193, 1], [119141, 119142, 1], [119149, 119154, 1]]);
_defineProperty(UnicodeTables, "Me", [[1160, 1161, 1], [6846, 8413, 1567], [8414, 8416, 1], [8418, 8420, 1], [42608, 42610, 1]]);
_defineProperty(UnicodeTables, "Mn", [[768, 879, 1], [1155, 1159, 1], [1425, 1469, 1], [1471, 1473, 2], [1474, 1476, 2], [1477, 1479, 2], [1552, 1562, 1], [1611, 1631, 1], [1648, 1750, 102], [1751, 1756, 1], [1759, 1764, 1], [1767, 1768, 1], [1770, 1773, 1], [1809, 1840, 31], [1841, 1866, 1], [1958, 1968, 1], [2027, 2035, 1], [2045, 2070, 25], [2071, 2073, 1], [2075, 2083, 1], [2085, 2087, 1], [2089, 2093, 1], [2137, 2139, 1], [2200, 2207, 1], [2250, 2273, 1], [2275, 2306, 1], [2362, 2364, 2], [2369, 2376, 1], [2381, 2385, 4], [2386, 2391, 1], [2402, 2403, 1], [2433, 2492, 59], [2497, 2500, 1], [2509, 2530, 21], [2531, 2558, 27], [2561, 2562, 1], [2620, 2625, 5], [2626, 2631, 5], [2632, 2635, 3], [2636, 2637, 1], [2641, 2672, 31], [2673, 2677, 4], [2689, 2690, 1], [2748, 2753, 5], [2754, 2757, 1], [2759, 2760, 1], [2765, 2786, 21], [2787, 2810, 23], [2811, 2815, 1], [2817, 2876, 59], [2879, 2881, 2], [2882, 2884, 1], [2893, 2901, 8], [2902, 2914, 12], [2915, 2946, 31], [3008, 3021, 13], [3072, 3076, 4], [3132, 3134, 2], [3135, 3136, 1], [3142, 3144, 1], [3146, 3149, 1], [3157, 3158, 1], [3170, 3171, 1], [3201, 3260, 59], [3263, 3270, 7], [3276, 3277, 1], [3298, 3299, 1], [3328, 3329, 1], [3387, 3388, 1], [3393, 3396, 1], [3405, 3426, 21], [3427, 3457, 30], [3530, 3538, 8], [3539, 3540, 1], [3542, 3633, 91], [3636, 3642, 1], [3655, 3662, 1], [3761, 3764, 3], [3765, 3772, 1], [3784, 3790, 1], [3864, 3865, 1], [3893, 3897, 2], [3953, 3966, 1], [3968, 3972, 1], [3974, 3975, 1], [3981, 3991, 1], [3993, 4028, 1], [4038, 4141, 103], [4142, 4144, 1], [4146, 4151, 1], [4153, 4154, 1], [4157, 4158, 1], [4184, 4185, 1], [4190, 4192, 1], [4209, 4212, 1], [4226, 4229, 3], [4230, 4237, 7], [4253, 4957, 704], [4958, 4959, 1], [5906, 5908, 1], [5938, 5939, 1], [5970, 5971, 1], [6002, 6003, 1], [6068, 6069, 1], [6071, 6077, 1], [6086, 6089, 3], [6090, 6099, 1], [6109, 6155, 46], [6156, 6157, 1], [6159, 6277, 118], [6278, 6313, 35], [6432, 6434, 1], [6439, 6440, 1], [6450, 6457, 7], [6458, 6459, 1], [6679, 6680, 1], [6683, 6742, 59], [6744, 6750, 1], [6752, 6754, 2], [6757, 6764, 1], [6771, 6780, 1], [6783, 6832, 49], [6833, 6845, 1], [6847, 6862, 1], [6912, 6915, 1], [6964, 6966, 2], [6967, 6970, 1], [6972, 6978, 6], [7019, 7027, 1], [7040, 7041, 1], [7074, 7077, 1], [7080, 7081, 1], [7083, 7085, 1], [7142, 7144, 2], [7145, 7149, 4], [7151, 7153, 1], [7212, 7219, 1], [7222, 7223, 1], [7376, 7378, 1], [7380, 7392, 1], [7394, 7400, 1], [7405, 7412, 7], [7416, 7417, 1], [7616, 7679, 1], [8400, 8412, 1], [8417, 8421, 4], [8422, 8432, 1], [11503, 11505, 1], [11647, 11744, 97], [11745, 11775, 1], [12330, 12333, 1], [12441, 12442, 1], [42607, 42612, 5], [42613, 42621, 1], [42654, 42655, 1], [42736, 42737, 1], [43010, 43014, 4], [43019, 43045, 26], [43046, 43052, 6], [43204, 43205, 1], [43232, 43249, 1], [43263, 43302, 39], [43303, 43309, 1], [43335, 43345, 1], [43392, 43394, 1], [43443, 43446, 3], [43447, 43449, 1], [43452, 43453, 1], [43493, 43561, 68], [43562, 43566, 1], [43569, 43570, 1], [43573, 43574, 1], [43587, 43596, 9], [43644, 43696, 52], [43698, 43700, 1], [43703, 43704, 1], [43710, 43711, 1], [43713, 43756, 43], [43757, 43766, 9], [44005, 44008, 3], [44013, 64286, 20273], [65024, 65039, 1], [65056, 65071, 1], [66045, 66272, 227], [66422, 66426, 1], [68097, 68099, 1], [68101, 68102, 1], [68108, 68111, 1], [68152, 68154, 1], [68159, 68325, 166], [68326, 68900, 574], [68901, 68903, 1], [69291, 69292, 1], [69373, 69375, 1], [69446, 69456, 1], [69506, 69509, 1], [69633, 69688, 55], [69689, 69702, 1], [69744, 69747, 3], [69748, 69759, 11], [69760, 69761, 1], [69811, 69814, 1], [69817, 69818, 1], [69826, 69888, 62], [69889, 69890, 1], [69927, 69931, 1], [69933, 69940, 1], [70003, 70016, 13], [70017, 70070, 53], [70071, 70078, 1], [70089, 70092, 1], [70095, 70191, 96], [70192, 70193, 1], [70196, 70198, 2], [70199, 70206, 7], [70209, 70367, 158], [70371, 70378, 1], [70400, 70401, 1], [70459, 70460, 1], [70464, 70502, 38], [70503, 70508, 1], [70512, 70516, 1], [70712, 70719, 1], [70722, 70724, 1], [70726, 70750, 24], [70835, 70840, 1], [70842, 70847, 5], [70848, 70850, 2], [70851, 71090, 239], [71091, 71093, 1], [71100, 71101, 1], [71103, 71104, 1], [71132, 71133, 1], [71219, 71226, 1], [71229, 71231, 2], [71232, 71339, 107], [71341, 71344, 3], [71345, 71349, 1], [71351, 71453, 102], [71454, 71455, 1], [71458, 71461, 1], [71463, 71467, 1], [71727, 71735, 1], [71737, 71738, 1], [71995, 71996, 1], [71998, 72003, 5], [72148, 72151, 1], [72154, 72155, 1], [72160, 72193, 33], [72194, 72202, 1], [72243, 72248, 1], [72251, 72254, 1], [72263, 72273, 10], [72274, 72278, 1], [72281, 72283, 1], [72330, 72342, 1], [72344, 72345, 1], [72752, 72758, 1], [72760, 72765, 1], [72767, 72850, 83], [72851, 72871, 1], [72874, 72880, 1], [72882, 72883, 1], [72885, 72886, 1], [73009, 73014, 1], [73018, 73020, 2], [73021, 73023, 2], [73024, 73029, 1], [73031, 73104, 73], [73105, 73109, 4], [73111, 73459, 348], [73460, 73472, 12], [73473, 73526, 53], [73527, 73530, 1], [73536, 73538, 2], [78912, 78919, 7], [78920, 78933, 1], [92912, 92916, 1], [92976, 92982, 1], [94031, 94095, 64], [94096, 94098, 1], [94180, 113821, 19641], [113822, 118528, 4706], [118529, 118573, 1], [118576, 118598, 1], [119143, 119145, 1], [119163, 119170, 1], [119173, 119179, 1], [119210, 119213, 1], [119362, 119364, 1], [121344, 121398, 1], [121403, 121452, 1], [121461, 121476, 15], [121499, 121503, 1], [121505, 121519, 1], [122880, 122886, 1], [122888, 122904, 1], [122907, 122913, 1], [122915, 122916, 1], [122918, 122922, 1], [123023, 123184, 161], [123185, 123190, 1], [123566, 123628, 62], [123629, 123631, 1], [124140, 124143, 1], [125136, 125142, 1], [125252, 125258, 1], [917760, 917999, 1]]);
_defineProperty(UnicodeTables, "foldMn", [[921, 953, 32], [8126, 8126, 1]]);
_defineProperty(UnicodeTables, "N", [[48, 57, 1], [178, 179, 1], [185, 188, 3], [189, 190, 1], [1632, 1641, 1], [1776, 1785, 1], [1984, 1993, 1], [2406, 2415, 1], [2534, 2543, 1], [2548, 2553, 1], [2662, 2671, 1], [2790, 2799, 1], [2918, 2927, 1], [2930, 2935, 1], [3046, 3058, 1], [3174, 3183, 1], [3192, 3198, 1], [3302, 3311, 1], [3416, 3422, 1], [3430, 3448, 1], [3558, 3567, 1], [3664, 3673, 1], [3792, 3801, 1], [3872, 3891, 1], [4160, 4169, 1], [4240, 4249, 1], [4969, 4988, 1], [5870, 5872, 1], [6112, 6121, 1], [6128, 6137, 1], [6160, 6169, 1], [6470, 6479, 1], [6608, 6618, 1], [6784, 6793, 1], [6800, 6809, 1], [6992, 7001, 1], [7088, 7097, 1], [7232, 7241, 1], [7248, 7257, 1], [8304, 8308, 4], [8309, 8313, 1], [8320, 8329, 1], [8528, 8578, 1], [8581, 8585, 1], [9312, 9371, 1], [9450, 9471, 1], [10102, 10131, 1], [11517, 12295, 778], [12321, 12329, 1], [12344, 12346, 1], [12690, 12693, 1], [12832, 12841, 1], [12872, 12879, 1], [12881, 12895, 1], [12928, 12937, 1], [12977, 12991, 1], [42528, 42537, 1], [42726, 42735, 1], [43056, 43061, 1], [43216, 43225, 1], [43264, 43273, 1], [43472, 43481, 1], [43504, 43513, 1], [43600, 43609, 1], [44016, 44025, 1], [65296, 65305, 1], [65799, 65843, 1], [65856, 65912, 1], [65930, 65931, 1], [66273, 66299, 1], [66336, 66339, 1], [66369, 66378, 9], [66513, 66517, 1], [66720, 66729, 1], [67672, 67679, 1], [67705, 67711, 1], [67751, 67759, 1], [67835, 67839, 1], [67862, 67867, 1], [68028, 68029, 1], [68032, 68047, 1], [68050, 68095, 1], [68160, 68168, 1], [68221, 68222, 1], [68253, 68255, 1], [68331, 68335, 1], [68440, 68447, 1], [68472, 68479, 1], [68521, 68527, 1], [68858, 68863, 1], [68912, 68921, 1], [69216, 69246, 1], [69405, 69414, 1], [69457, 69460, 1], [69573, 69579, 1], [69714, 69743, 1], [69872, 69881, 1], [69942, 69951, 1], [70096, 70105, 1], [70113, 70132, 1], [70384, 70393, 1], [70736, 70745, 1], [70864, 70873, 1], [71248, 71257, 1], [71360, 71369, 1], [71472, 71483, 1], [71904, 71922, 1], [72016, 72025, 1], [72784, 72812, 1], [73040, 73049, 1], [73120, 73129, 1], [73552, 73561, 1], [73664, 73684, 1], [74752, 74862, 1], [92768, 92777, 1], [92864, 92873, 1], [93008, 93017, 1], [93019, 93025, 1], [93824, 93846, 1], [119488, 119507, 1], [119520, 119539, 1], [119648, 119672, 1], [120782, 120831, 1], [123200, 123209, 1], [123632, 123641, 1], [124144, 124153, 1], [125127, 125135, 1], [125264, 125273, 1], [126065, 126123, 1], [126125, 126127, 1], [126129, 126132, 1], [126209, 126253, 1], [126255, 126269, 1], [127232, 127244, 1], [130032, 130041, 1]]);
_defineProperty(UnicodeTables, "Nd", [[48, 57, 1], [1632, 1641, 1], [1776, 1785, 1], [1984, 1993, 1], [2406, 2415, 1], [2534, 2543, 1], [2662, 2671, 1], [2790, 2799, 1], [2918, 2927, 1], [3046, 3055, 1], [3174, 3183, 1], [3302, 3311, 1], [3430, 3439, 1], [3558, 3567, 1], [3664, 3673, 1], [3792, 3801, 1], [3872, 3881, 1], [4160, 4169, 1], [4240, 4249, 1], [6112, 6121, 1], [6160, 6169, 1], [6470, 6479, 1], [6608, 6617, 1], [6784, 6793, 1], [6800, 6809, 1], [6992, 7001, 1], [7088, 7097, 1], [7232, 7241, 1], [7248, 7257, 1], [42528, 42537, 1], [43216, 43225, 1], [43264, 43273, 1], [43472, 43481, 1], [43504, 43513, 1], [43600, 43609, 1], [44016, 44025, 1], [65296, 65305, 1], [66720, 66729, 1], [68912, 68921, 1], [69734, 69743, 1], [69872, 69881, 1], [69942, 69951, 1], [70096, 70105, 1], [70384, 70393, 1], [70736, 70745, 1], [70864, 70873, 1], [71248, 71257, 1], [71360, 71369, 1], [71472, 71481, 1], [71904, 71913, 1], [72016, 72025, 1], [72784, 72793, 1], [73040, 73049, 1], [73120, 73129, 1], [73552, 73561, 1], [92768, 92777, 1], [92864, 92873, 1], [93008, 93017, 1], [120782, 120831, 1], [123200, 123209, 1], [123632, 123641, 1], [124144, 124153, 1], [125264, 125273, 1], [130032, 130041, 1]]);
_defineProperty(UnicodeTables, "Nl", [[5870, 5872, 1], [8544, 8578, 1], [8581, 8584, 1], [12295, 12321, 26], [12322, 12329, 1], [12344, 12346, 1], [42726, 42735, 1], [65856, 65908, 1], [66369, 66378, 9], [66513, 66517, 1], [74752, 74862, 1]]);
_defineProperty(UnicodeTables, "No", [[178, 179, 1], [185, 188, 3], [189, 190, 1], [2548, 2553, 1], [2930, 2935, 1], [3056, 3058, 1], [3192, 3198, 1], [3416, 3422, 1], [3440, 3448, 1], [3882, 3891, 1], [4969, 4988, 1], [6128, 6137, 1], [6618, 8304, 1686], [8308, 8313, 1], [8320, 8329, 1], [8528, 8543, 1], [8585, 9312, 727], [9313, 9371, 1], [9450, 9471, 1], [10102, 10131, 1], [11517, 12690, 1173], [12691, 12693, 1], [12832, 12841, 1], [12872, 12879, 1], [12881, 12895, 1], [12928, 12937, 1], [12977, 12991, 1], [43056, 43061, 1], [65799, 65843, 1], [65909, 65912, 1], [65930, 65931, 1], [66273, 66299, 1], [66336, 66339, 1], [67672, 67679, 1], [67705, 67711, 1], [67751, 67759, 1], [67835, 67839, 1], [67862, 67867, 1], [68028, 68029, 1], [68032, 68047, 1], [68050, 68095, 1], [68160, 68168, 1], [68221, 68222, 1], [68253, 68255, 1], [68331, 68335, 1], [68440, 68447, 1], [68472, 68479, 1], [68521, 68527, 1], [68858, 68863, 1], [69216, 69246, 1], [69405, 69414, 1], [69457, 69460, 1], [69573, 69579, 1], [69714, 69733, 1], [70113, 70132, 1], [71482, 71483, 1], [71914, 71922, 1], [72794, 72812, 1], [73664, 73684, 1], [93019, 93025, 1], [93824, 93846, 1], [119488, 119507, 1], [119520, 119539, 1], [119648, 119672, 1], [125127, 125135, 1], [126065, 126123, 1], [126125, 126127, 1], [126129, 126132, 1], [126209, 126253, 1], [126255, 126269, 1], [127232, 127244, 1]]);
_defineProperty(UnicodeTables, "P", [[33, 35, 1], [37, 42, 1], [44, 47, 1], [58, 59, 1], [63, 64, 1], [91, 93, 1], [95, 123, 28], [125, 161, 36], [167, 171, 4], [182, 183, 1], [187, 191, 4], [894, 903, 9], [1370, 1375, 1], [1417, 1418, 1], [1470, 1472, 2], [1475, 1478, 3], [1523, 1524, 1], [1545, 1546, 1], [1548, 1549, 1], [1563, 1565, 2], [1566, 1567, 1], [1642, 1645, 1], [1748, 1792, 44], [1793, 1805, 1], [2039, 2041, 1], [2096, 2110, 1], [2142, 2404, 262], [2405, 2416, 11], [2557, 2678, 121], [2800, 3191, 391], [3204, 3572, 368], [3663, 3674, 11], [3675, 3844, 169], [3845, 3858, 1], [3860, 3898, 38], [3899, 3901, 1], [3973, 4048, 75], [4049, 4052, 1], [4057, 4058, 1], [4170, 4175, 1], [4347, 4960, 613], [4961, 4968, 1], [5120, 5742, 622], [5787, 5788, 1], [5867, 5869, 1], [5941, 5942, 1], [6100, 6102, 1], [6104, 6106, 1], [6144, 6154, 1], [6468, 6469, 1], [6686, 6687, 1], [6816, 6822, 1], [6824, 6829, 1], [7002, 7008, 1], [7037, 7038, 1], [7164, 7167, 1], [7227, 7231, 1], [7294, 7295, 1], [7360, 7367, 1], [7379, 8208, 829], [8209, 8231, 1], [8240, 8259, 1], [8261, 8273, 1], [8275, 8286, 1], [8317, 8318, 1], [8333, 8334, 1], [8968, 8971, 1], [9001, 9002, 1], [10088, 10101, 1], [10181, 10182, 1], [10214, 10223, 1], [10627, 10648, 1], [10712, 10715, 1], [10748, 10749, 1], [11513, 11516, 1], [11518, 11519, 1], [11632, 11776, 144], [11777, 11822, 1], [11824, 11855, 1], [11858, 11869, 1], [12289, 12291, 1], [12296, 12305, 1], [12308, 12319, 1], [12336, 12349, 13], [12448, 12539, 91], [42238, 42239, 1], [42509, 42511, 1], [42611, 42622, 11], [42738, 42743, 1], [43124, 43127, 1], [43214, 43215, 1], [43256, 43258, 1], [43260, 43310, 50], [43311, 43359, 48], [43457, 43469, 1], [43486, 43487, 1], [43612, 43615, 1], [43742, 43743, 1], [43760, 43761, 1], [44011, 64830, 20819], [64831, 65040, 209], [65041, 65049, 1], [65072, 65106, 1], [65108, 65121, 1], [65123, 65128, 5], [65130, 65131, 1], [65281, 65283, 1], [65285, 65290, 1], [65292, 65295, 1], [65306, 65307, 1], [65311, 65312, 1], [65339, 65341, 1], [65343, 65371, 28], [65373, 65375, 2], [65376, 65381, 1], [65792, 65794, 1], [66463, 66512, 49], [66927, 67671, 744], [67871, 67903, 32], [68176, 68184, 1], [68223, 68336, 113], [68337, 68342, 1], [68409, 68415, 1], [68505, 68508, 1], [69293, 69461, 168], [69462, 69465, 1], [69510, 69513, 1], [69703, 69709, 1], [69819, 69820, 1], [69822, 69825, 1], [69952, 69955, 1], [70004, 70005, 1], [70085, 70088, 1], [70093, 70107, 14], [70109, 70111, 1], [70200, 70205, 1], [70313, 70731, 418], [70732, 70735, 1], [70746, 70747, 1], [70749, 70854, 105], [71105, 71127, 1], [71233, 71235, 1], [71264, 71276, 1], [71353, 71484, 131], [71485, 71486, 1], [71739, 72004, 265], [72005, 72006, 1], [72162, 72255, 93], [72256, 72262, 1], [72346, 72348, 1], [72350, 72354, 1], [72448, 72457, 1], [72769, 72773, 1], [72816, 72817, 1], [73463, 73464, 1], [73539, 73551, 1], [73727, 74864, 1137], [74865, 74868, 1], [77809, 77810, 1], [92782, 92783, 1], [92917, 92983, 66], [92984, 92987, 1], [92996, 93847, 851], [93848, 93850, 1], [94178, 113823, 19645], [121479, 121483, 1], [125278, 125279, 1]]);
_defineProperty(UnicodeTables, "Pc", [[95, 8255, 8160], [8256, 8276, 20], [65075, 65076, 1], [65101, 65103, 1], [65343, 65343, 1]]);
_defineProperty(UnicodeTables, "Pd", [[45, 1418, 1373], [1470, 5120, 3650], [6150, 8208, 2058], [8209, 8213, 1], [11799, 11802, 3], [11834, 11835, 1], [11840, 11869, 29], [12316, 12336, 20], [12448, 65073, 52625], [65074, 65112, 38], [65123, 65293, 170], [69293, 69293, 1]]);
_defineProperty(UnicodeTables, "Pe", [[41, 93, 52], [125, 3899, 3774], [3901, 5788, 1887], [8262, 8318, 56], [8334, 8969, 635], [8971, 9002, 31], [10089, 10101, 2], [10182, 10215, 33], [10217, 10223, 2], [10628, 10648, 2], [10713, 10715, 2], [10749, 11811, 1062], [11813, 11817, 2], [11862, 11868, 2], [12297, 12305, 2], [12309, 12315, 2], [12318, 12319, 1], [64830, 65048, 218], [65078, 65092, 2], [65096, 65114, 18], [65116, 65118, 2], [65289, 65341, 52], [65373, 65379, 3]]);
_defineProperty(UnicodeTables, "Pf", [[187, 8217, 8030], [8221, 8250, 29], [11779, 11781, 2], [11786, 11789, 3], [11805, 11809, 4]]);
_defineProperty(UnicodeTables, "Pi", [[171, 8216, 8045], [8219, 8220, 1], [8223, 8249, 26], [11778, 11780, 2], [11785, 11788, 3], [11804, 11808, 4]]);
_defineProperty(UnicodeTables, "Po", [[33, 35, 1], [37, 39, 1], [42, 46, 2], [47, 58, 11], [59, 63, 4], [64, 92, 28], [161, 167, 6], [182, 183, 1], [191, 894, 703], [903, 1370, 467], [1371, 1375, 1], [1417, 1472, 55], [1475, 1478, 3], [1523, 1524, 1], [1545, 1546, 1], [1548, 1549, 1], [1563, 1565, 2], [1566, 1567, 1], [1642, 1645, 1], [1748, 1792, 44], [1793, 1805, 1], [2039, 2041, 1], [2096, 2110, 1], [2142, 2404, 262], [2405, 2416, 11], [2557, 2678, 121], [2800, 3191, 391], [3204, 3572, 368], [3663, 3674, 11], [3675, 3844, 169], [3845, 3858, 1], [3860, 3973, 113], [4048, 4052, 1], [4057, 4058, 1], [4170, 4175, 1], [4347, 4960, 613], [4961, 4968, 1], [5742, 5867, 125], [5868, 5869, 1], [5941, 5942, 1], [6100, 6102, 1], [6104, 6106, 1], [6144, 6149, 1], [6151, 6154, 1], [6468, 6469, 1], [6686, 6687, 1], [6816, 6822, 1], [6824, 6829, 1], [7002, 7008, 1], [7037, 7038, 1], [7164, 7167, 1], [7227, 7231, 1], [7294, 7295, 1], [7360, 7367, 1], [7379, 8214, 835], [8215, 8224, 9], [8225, 8231, 1], [8240, 8248, 1], [8251, 8254, 1], [8257, 8259, 1], [8263, 8273, 1], [8275, 8277, 2], [8278, 8286, 1], [11513, 11516, 1], [11518, 11519, 1], [11632, 11776, 144], [11777, 11782, 5], [11783, 11784, 1], [11787, 11790, 3], [11791, 11798, 1], [11800, 11801, 1], [11803, 11806, 3], [11807, 11818, 11], [11819, 11822, 1], [11824, 11833, 1], [11836, 11839, 1], [11841, 11843, 2], [11844, 11855, 1], [11858, 11860, 1], [12289, 12291, 1], [12349, 12539, 190], [42238, 42239, 1], [42509, 42511, 1], [42611, 42622, 11], [42738, 42743, 1], [43124, 43127, 1], [43214, 43215, 1], [43256, 43258, 1], [43260, 43310, 50], [43311, 43359, 48], [43457, 43469, 1], [43486, 43487, 1], [43612, 43615, 1], [43742, 43743, 1], [43760, 43761, 1], [44011, 65040, 21029], [65041, 65046, 1], [65049, 65072, 23], [65093, 65094, 1], [65097, 65100, 1], [65104, 65106, 1], [65108, 65111, 1], [65119, 65121, 1], [65128, 65130, 2], [65131, 65281, 150], [65282, 65283, 1], [65285, 65287, 1], [65290, 65294, 2], [65295, 65306, 11], [65307, 65311, 4], [65312, 65340, 28], [65377, 65380, 3], [65381, 65792, 411], [65793, 65794, 1], [66463, 66512, 49], [66927, 67671, 744], [67871, 67903, 32], [68176, 68184, 1], [68223, 68336, 113], [68337, 68342, 1], [68409, 68415, 1], [68505, 68508, 1], [69461, 69465, 1], [69510, 69513, 1], [69703, 69709, 1], [69819, 69820, 1], [69822, 69825, 1], [69952, 69955, 1], [70004, 70005, 1], [70085, 70088, 1], [70093, 70107, 14], [70109, 70111, 1], [70200, 70205, 1], [70313, 70731, 418], [70732, 70735, 1], [70746, 70747, 1], [70749, 70854, 105], [71105, 71127, 1], [71233, 71235, 1], [71264, 71276, 1], [71353, 71484, 131], [71485, 71486, 1], [71739, 72004, 265], [72005, 72006, 1], [72162, 72255, 93], [72256, 72262, 1], [72346, 72348, 1], [72350, 72354, 1], [72448, 72457, 1], [72769, 72773, 1], [72816, 72817, 1], [73463, 73464, 1], [73539, 73551, 1], [73727, 74864, 1137], [74865, 74868, 1], [77809, 77810, 1], [92782, 92783, 1], [92917, 92983, 66], [92984, 92987, 1], [92996, 93847, 851], [93848, 93850, 1], [94178, 113823, 19645], [121479, 121483, 1], [125278, 125279, 1]]);
_defineProperty(UnicodeTables, "Ps", [[40, 91, 51], [123, 3898, 3775], [3900, 5787, 1887], [8218, 8222, 4], [8261, 8317, 56], [8333, 8968, 635], [8970, 9001, 31], [10088, 10100, 2], [10181, 10214, 33], [10216, 10222, 2], [10627, 10647, 2], [10712, 10714, 2], [10748, 11810, 1062], [11812, 11816, 2], [11842, 11861, 19], [11863, 11867, 2], [12296, 12304, 2], [12308, 12314, 2], [12317, 64831, 52514], [65047, 65077, 30], [65079, 65091, 2], [65095, 65113, 18], [65115, 65117, 2], [65288, 65339, 51], [65371, 65375, 4], [65378, 65378, 1]]);
_defineProperty(UnicodeTables, "S", [[36, 43, 7], [60, 62, 1], [94, 96, 2], [124, 126, 2], [162, 166, 1], [168, 169, 1], [172, 174, 2], [175, 177, 1], [180, 184, 4], [215, 247, 32], [706, 709, 1], [722, 735, 1], [741, 747, 1], [749, 751, 2], [752, 767, 1], [885, 900, 15], [901, 1014, 113], [1154, 1421, 267], [1422, 1423, 1], [1542, 1544, 1], [1547, 1550, 3], [1551, 1758, 207], [1769, 1789, 20], [1790, 2038, 248], [2046, 2047, 1], [2184, 2546, 362], [2547, 2554, 7], [2555, 2801, 246], [2928, 3059, 131], [3060, 3066, 1], [3199, 3407, 208], [3449, 3647, 198], [3841, 3843, 1], [3859, 3861, 2], [3862, 3863, 1], [3866, 3871, 1], [3892, 3896, 2], [4030, 4037, 1], [4039, 4044, 1], [4046, 4047, 1], [4053, 4056, 1], [4254, 4255, 1], [5008, 5017, 1], [5741, 6107, 366], [6464, 6622, 158], [6623, 6655, 1], [7009, 7018, 1], [7028, 7036, 1], [8125, 8127, 2], [8128, 8129, 1], [8141, 8143, 1], [8157, 8159, 1], [8173, 8175, 1], [8189, 8190, 1], [8260, 8274, 14], [8314, 8316, 1], [8330, 8332, 1], [8352, 8384, 1], [8448, 8449, 1], [8451, 8454, 1], [8456, 8457, 1], [8468, 8470, 2], [8471, 8472, 1], [8478, 8483, 1], [8485, 8489, 2], [8494, 8506, 12], [8507, 8512, 5], [8513, 8516, 1], [8522, 8525, 1], [8527, 8586, 59], [8587, 8592, 5], [8593, 8967, 1], [8972, 9000, 1], [9003, 9254, 1], [9280, 9290, 1], [9372, 9449, 1], [9472, 10087, 1], [10132, 10180, 1], [10183, 10213, 1], [10224, 10626, 1], [10649, 10711, 1], [10716, 10747, 1], [10750, 11123, 1], [11126, 11157, 1], [11159, 11263, 1], [11493, 11498, 1], [11856, 11857, 1], [11904, 11929, 1], [11931, 12019, 1], [12032, 12245, 1], [12272, 12287, 1], [12292, 12306, 14], [12307, 12320, 13], [12342, 12343, 1], [12350, 12351, 1], [12443, 12444, 1], [12688, 12689, 1], [12694, 12703, 1], [12736, 12771, 1], [12783, 12800, 17], [12801, 12830, 1], [12842, 12871, 1], [12880, 12896, 16], [12897, 12927, 1], [12938, 12976, 1], [12992, 13311, 1], [19904, 19967, 1], [42128, 42182, 1], [42752, 42774, 1], [42784, 42785, 1], [42889, 42890, 1], [43048, 43051, 1], [43062, 43065, 1], [43639, 43641, 1], [43867, 43882, 15], [43883, 64297, 20414], [64434, 64450, 1], [64832, 64847, 1], [64975, 65020, 45], [65021, 65023, 1], [65122, 65124, 2], [65125, 65126, 1], [65129, 65284, 155], [65291, 65308, 17], [65309, 65310, 1], [65342, 65344, 2], [65372, 65374, 2], [65504, 65510, 1], [65512, 65518, 1], [65532, 65533, 1], [65847, 65855, 1], [65913, 65929, 1], [65932, 65934, 1], [65936, 65948, 1], [65952, 66000, 48], [66001, 66044, 1], [67703, 67704, 1], [68296, 71487, 3191], [73685, 73713, 1], [92988, 92991, 1], [92997, 113820, 20823], [118608, 118723, 1], [118784, 119029, 1], [119040, 119078, 1], [119081, 119140, 1], [119146, 119148, 1], [119171, 119172, 1], [119180, 119209, 1], [119214, 119274, 1], [119296, 119361, 1], [119365, 119552, 187], [119553, 119638, 1], [120513, 120539, 26], [120571, 120597, 26], [120629, 120655, 26], [120687, 120713, 26], [120745, 120771, 26], [120832, 121343, 1], [121399, 121402, 1], [121453, 121460, 1], [121462, 121475, 1], [121477, 121478, 1], [123215, 123647, 432], [126124, 126128, 4], [126254, 126704, 450], [126705, 126976, 271], [126977, 127019, 1], [127024, 127123, 1], [127136, 127150, 1], [127153, 127167, 1], [127169, 127183, 1], [127185, 127221, 1], [127245, 127405, 1], [127462, 127490, 1], [127504, 127547, 1], [127552, 127560, 1], [127568, 127569, 1], [127584, 127589, 1], [127744, 128727, 1], [128732, 128748, 1], [128752, 128764, 1], [128768, 128886, 1], [128891, 128985, 1], [128992, 129003, 1], [129008, 129024, 16], [129025, 129035, 1], [129040, 129095, 1], [129104, 129113, 1], [129120, 129159, 1], [129168, 129197, 1], [129200, 129201, 1], [129280, 129619, 1], [129632, 129645, 1], [129648, 129660, 1], [129664, 129672, 1], [129680, 129725, 1], [129727, 129733, 1], [129742, 129755, 1], [129760, 129768, 1], [129776, 129784, 1], [129792, 129938, 1], [129940, 129994, 1]]);
_defineProperty(UnicodeTables, "Sc", [[36, 162, 126], [163, 165, 1], [1423, 1547, 124], [2046, 2047, 1], [2546, 2547, 1], [2555, 2801, 246], [3065, 3647, 582], [6107, 8352, 2245], [8353, 8384, 1], [43064, 65020, 21956], [65129, 65284, 155], [65504, 65505, 1], [65509, 65510, 1], [73693, 73696, 1], [123647, 126128, 2481]]);
_defineProperty(UnicodeTables, "Sk", [[94, 96, 2], [168, 175, 7], [180, 184, 4], [706, 709, 1], [722, 735, 1], [741, 747, 1], [749, 751, 2], [752, 767, 1], [885, 900, 15], [901, 2184, 1283], [8125, 8127, 2], [8128, 8129, 1], [8141, 8143, 1], [8157, 8159, 1], [8173, 8175, 1], [8189, 8190, 1], [12443, 12444, 1], [42752, 42774, 1], [42784, 42785, 1], [42889, 42890, 1], [43867, 43882, 15], [43883, 64434, 20551], [64435, 64450, 1], [65342, 65344, 2], [65507, 127995, 62488], [127996, 127999, 1]]);
_defineProperty(UnicodeTables, "Sm", [[43, 60, 17], [61, 62, 1], [124, 126, 2], [172, 177, 5], [215, 247, 32], [1014, 1542, 528], [1543, 1544, 1], [8260, 8274, 14], [8314, 8316, 1], [8330, 8332, 1], [8472, 8512, 40], [8513, 8516, 1], [8523, 8592, 69], [8593, 8596, 1], [8602, 8603, 1], [8608, 8614, 3], [8622, 8654, 32], [8655, 8658, 3], [8660, 8692, 32], [8693, 8959, 1], [8992, 8993, 1], [9084, 9115, 31], [9116, 9139, 1], [9180, 9185, 1], [9655, 9665, 10], [9720, 9727, 1], [9839, 10176, 337], [10177, 10180, 1], [10183, 10213, 1], [10224, 10239, 1], [10496, 10626, 1], [10649, 10711, 1], [10716, 10747, 1], [10750, 11007, 1], [11056, 11076, 1], [11079, 11084, 1], [64297, 65122, 825], [65124, 65126, 1], [65291, 65308, 17], [65309, 65310, 1], [65372, 65374, 2], [65506, 65513, 7], [65514, 65516, 1], [120513, 120539, 26], [120571, 120597, 26], [120629, 120655, 26], [120687, 120713, 26], [120745, 120771, 26], [126704, 126705, 1]]);
_defineProperty(UnicodeTables, "So", [[166, 169, 3], [174, 176, 2], [1154, 1421, 267], [1422, 1550, 128], [1551, 1758, 207], [1769, 1789, 20], [1790, 2038, 248], [2554, 2928, 374], [3059, 3064, 1], [3066, 3199, 133], [3407, 3449, 42], [3841, 3843, 1], [3859, 3861, 2], [3862, 3863, 1], [3866, 3871, 1], [3892, 3896, 2], [4030, 4037, 1], [4039, 4044, 1], [4046, 4047, 1], [4053, 4056, 1], [4254, 4255, 1], [5008, 5017, 1], [5741, 6464, 723], [6622, 6655, 1], [7009, 7018, 1], [7028, 7036, 1], [8448, 8449, 1], [8451, 8454, 1], [8456, 8457, 1], [8468, 8470, 2], [8471, 8478, 7], [8479, 8483, 1], [8485, 8489, 2], [8494, 8506, 12], [8507, 8522, 15], [8524, 8525, 1], [8527, 8586, 59], [8587, 8597, 10], [8598, 8601, 1], [8604, 8607, 1], [8609, 8610, 1], [8612, 8613, 1], [8615, 8621, 1], [8623, 8653, 1], [8656, 8657, 1], [8659, 8661, 2], [8662, 8691, 1], [8960, 8967, 1], [8972, 8991, 1], [8994, 9000, 1], [9003, 9083, 1], [9085, 9114, 1], [9140, 9179, 1], [9186, 9254, 1], [9280, 9290, 1], [9372, 9449, 1], [9472, 9654, 1], [9656, 9664, 1], [9666, 9719, 1], [9728, 9838, 1], [9840, 10087, 1], [10132, 10175, 1], [10240, 10495, 1], [11008, 11055, 1], [11077, 11078, 1], [11085, 11123, 1], [11126, 11157, 1], [11159, 11263, 1], [11493, 11498, 1], [11856, 11857, 1], [11904, 11929, 1], [11931, 12019, 1], [12032, 12245, 1], [12272, 12287, 1], [12292, 12306, 14], [12307, 12320, 13], [12342, 12343, 1], [12350, 12351, 1], [12688, 12689, 1], [12694, 12703, 1], [12736, 12771, 1], [12783, 12800, 17], [12801, 12830, 1], [12842, 12871, 1], [12880, 12896, 16], [12897, 12927, 1], [12938, 12976, 1], [12992, 13311, 1], [19904, 19967, 1], [42128, 42182, 1], [43048, 43051, 1], [43062, 43063, 1], [43065, 43639, 574], [43640, 43641, 1], [64832, 64847, 1], [64975, 65021, 46], [65022, 65023, 1], [65508, 65512, 4], [65517, 65518, 1], [65532, 65533, 1], [65847, 65855, 1], [65913, 65929, 1], [65932, 65934, 1], [65936, 65948, 1], [65952, 66000, 48], [66001, 66044, 1], [67703, 67704, 1], [68296, 71487, 3191], [73685, 73692, 1], [73697, 73713, 1], [92988, 92991, 1], [92997, 113820, 20823], [118608, 118723, 1], [118784, 119029, 1], [119040, 119078, 1], [119081, 119140, 1], [119146, 119148, 1], [119171, 119172, 1], [119180, 119209, 1], [119214, 119274, 1], [119296, 119361, 1], [119365, 119552, 187], [119553, 119638, 1], [120832, 121343, 1], [121399, 121402, 1], [121453, 121460, 1], [121462, 121475, 1], [121477, 121478, 1], [123215, 126124, 2909], [126254, 126976, 722], [126977, 127019, 1], [127024, 127123, 1], [127136, 127150, 1], [127153, 127167, 1], [127169, 127183, 1], [127185, 127221, 1], [127245, 127405, 1], [127462, 127490, 1], [127504, 127547, 1], [127552, 127560, 1], [127568, 127569, 1], [127584, 127589, 1], [127744, 127994, 1], [128000, 128727, 1], [128732, 128748, 1], [128752, 128764, 1], [128768, 128886, 1], [128891, 128985, 1], [128992, 129003, 1], [129008, 129024, 16], [129025, 129035, 1], [129040, 129095, 1], [129104, 129113, 1], [129120, 129159, 1], [129168, 129197, 1], [129200, 129201, 1], [129280, 129619, 1], [129632, 129645, 1], [129648, 129660, 1], [129664, 129672, 1], [129680, 129725, 1], [129727, 129733, 1], [129742, 129755, 1], [129760, 129768, 1], [129776, 129784, 1], [129792, 129938, 1], [129940, 129994, 1]]);
_defineProperty(UnicodeTables, "Z", [[32, 160, 128], [5760, 8192, 2432], [8193, 8202, 1], [8232, 8233, 1], [8239, 8287, 48], [12288, 12288, 1]]);
_defineProperty(UnicodeTables, "Zl", [[8232, 8232, 1]]);
_defineProperty(UnicodeTables, "Zp", [[8233, 8233, 1]]);
_defineProperty(UnicodeTables, "Zs", [[32, 160, 128], [5760, 8192, 2432], [8193, 8202, 1], [8239, 8287, 48], [12288, 12288, 1]]);
_defineProperty(UnicodeTables, "Adlam", [[125184, 125259, 1], [125264, 125273, 1], [125278, 125279, 1]]);
_defineProperty(UnicodeTables, "Ahom", [[71424, 71450, 1], [71453, 71467, 1], [71472, 71494, 1]]);
_defineProperty(UnicodeTables, "Anatolian_Hieroglyphs", [[82944, 83526, 1]]);
_defineProperty(UnicodeTables, "Arabic", [[1536, 1540, 1], [1542, 1547, 1], [1549, 1562, 1], [1564, 1566, 1], [1568, 1599, 1], [1601, 1610, 1], [1622, 1647, 1], [1649, 1756, 1], [1758, 1791, 1], [1872, 1919, 1], [2160, 2190, 1], [2192, 2193, 1], [2200, 2273, 1], [2275, 2303, 1], [64336, 64450, 1], [64467, 64829, 1], [64832, 64911, 1], [64914, 64967, 1], [64975, 65008, 33], [65009, 65023, 1], [65136, 65140, 1], [65142, 65276, 1], [69216, 69246, 1], [69373, 69375, 1], [126464, 126467, 1], [126469, 126495, 1], [126497, 126498, 1], [126500, 126503, 3], [126505, 126514, 1], [126516, 126519, 1], [126521, 126523, 2], [126530, 126535, 5], [126537, 126541, 2], [126542, 126543, 1], [126545, 126546, 1], [126548, 126551, 3], [126553, 126561, 2], [126562, 126564, 2], [126567, 126570, 1], [126572, 126578, 1], [126580, 126583, 1], [126585, 126588, 1], [126590, 126592, 2], [126593, 126601, 1], [126603, 126619, 1], [126625, 126627, 1], [126629, 126633, 1], [126635, 126651, 1], [126704, 126705, 1]]);
_defineProperty(UnicodeTables, "Armenian", [[1329, 1366, 1], [1369, 1418, 1], [1421, 1423, 1], [64275, 64279, 1]]);
_defineProperty(UnicodeTables, "Avestan", [[68352, 68405, 1], [68409, 68415, 1]]);
_defineProperty(UnicodeTables, "Balinese", [[6912, 6988, 1], [6992, 7038, 1]]);
_defineProperty(UnicodeTables, "Bamum", [[42656, 42743, 1], [92160, 92728, 1]]);
_defineProperty(UnicodeTables, "Bassa_Vah", [[92880, 92909, 1], [92912, 92917, 1]]);
_defineProperty(UnicodeTables, "Batak", [[7104, 7155, 1], [7164, 7167, 1]]);
_defineProperty(UnicodeTables, "Bengali", [[2432, 2435, 1], [2437, 2444, 1], [2447, 2448, 1], [2451, 2472, 1], [2474, 2480, 1], [2482, 2486, 4], [2487, 2489, 1], [2492, 2500, 1], [2503, 2504, 1], [2507, 2510, 1], [2519, 2524, 5], [2525, 2527, 2], [2528, 2531, 1], [2534, 2558, 1]]);
_defineProperty(UnicodeTables, "Bhaiksuki", [[72704, 72712, 1], [72714, 72758, 1], [72760, 72773, 1], [72784, 72812, 1]]);
_defineProperty(UnicodeTables, "Bopomofo", [[746, 747, 1], [12549, 12591, 1], [12704, 12735, 1]]);
_defineProperty(UnicodeTables, "Brahmi", [[69632, 69709, 1], [69714, 69749, 1], [69759, 69759, 1]]);
_defineProperty(UnicodeTables, "Braille", [[10240, 10495, 1]]);
_defineProperty(UnicodeTables, "Buginese", [[6656, 6683, 1], [6686, 6687, 1]]);
_defineProperty(UnicodeTables, "Buhid", [[5952, 5971, 1]]);
_defineProperty(UnicodeTables, "Canadian_Aboriginal", [[5120, 5759, 1], [6320, 6389, 1], [72368, 72383, 1]]);
_defineProperty(UnicodeTables, "Carian", [[66208, 66256, 1]]);
_defineProperty(UnicodeTables, "Caucasian_Albanian", [[66864, 66915, 1], [66927, 66927, 1]]);
_defineProperty(UnicodeTables, "Chakma", [[69888, 69940, 1], [69942, 69959, 1]]);
_defineProperty(UnicodeTables, "Cham", [[43520, 43574, 1], [43584, 43597, 1], [43600, 43609, 1], [43612, 43615, 1]]);
_defineProperty(UnicodeTables, "Cherokee", [[5024, 5109, 1], [5112, 5117, 1], [43888, 43967, 1]]);
_defineProperty(UnicodeTables, "Chorasmian", [[69552, 69579, 1]]);
_defineProperty(UnicodeTables, "Common", [[0, 64, 1], [91, 96, 1], [123, 169, 1], [171, 185, 1], [187, 191, 1], [215, 247, 32], [697, 735, 1], [741, 745, 1], [748, 767, 1], [884, 894, 10], [901, 903, 2], [1541, 1548, 7], [1563, 1567, 4], [1600, 1757, 157], [2274, 2404, 130], [2405, 3647, 1242], [4053, 4056, 1], [4347, 5867, 1520], [5868, 5869, 1], [5941, 5942, 1], [6146, 6147, 1], [6149, 7379, 1230], [7393, 7401, 8], [7402, 7404, 1], [7406, 7411, 1], [7413, 7415, 1], [7418, 8192, 774], [8193, 8203, 1], [8206, 8292, 1], [8294, 8304, 1], [8308, 8318, 1], [8320, 8334, 1], [8352, 8384, 1], [8448, 8485, 1], [8487, 8489, 1], [8492, 8497, 1], [8499, 8525, 1], [8527, 8543, 1], [8585, 8587, 1], [8592, 9254, 1], [9280, 9290, 1], [9312, 10239, 1], [10496, 11123, 1], [11126, 11157, 1], [11159, 11263, 1], [11776, 11869, 1], [12272, 12292, 1], [12294, 12296, 2], [12297, 12320, 1], [12336, 12343, 1], [12348, 12351, 1], [12443, 12444, 1], [12448, 12539, 91], [12540, 12688, 148], [12689, 12703, 1], [12736, 12771, 1], [12783, 12832, 49], [12833, 12895, 1], [12927, 13007, 1], [13055, 13144, 89], [13145, 13311, 1], [19904, 19967, 1], [42752, 42785, 1], [42888, 42890, 1], [43056, 43065, 1], [43310, 43471, 161], [43867, 43882, 15], [43883, 64830, 20947], [64831, 65040, 209], [65041, 65049, 1], [65072, 65106, 1], [65108, 65126, 1], [65128, 65131, 1], [65279, 65281, 2], [65282, 65312, 1], [65339, 65344, 1], [65371, 65381, 1], [65392, 65438, 46], [65439, 65504, 65], [65505, 65510, 1], [65512, 65518, 1], [65529, 65533, 1], [65792, 65794, 1], [65799, 65843, 1], [65847, 65855, 1], [65936, 65948, 1], [66000, 66044, 1], [66273, 66299, 1], [113824, 113827, 1], [118608, 118723, 1], [118784, 119029, 1], [119040, 119078, 1], [119081, 119142, 1], [119146, 119162, 1], [119171, 119172, 1], [119180, 119209, 1], [119214, 119274, 1], [119488, 119507, 1], [119520, 119539, 1], [119552, 119638, 1], [119648, 119672, 1], [119808, 119892, 1], [119894, 119964, 1], [119966, 119967, 1], [119970, 119973, 3], [119974, 119977, 3], [119978, 119980, 1], [119982, 119993, 1], [119995, 119997, 2], [119998, 120003, 1], [120005, 120069, 1], [120071, 120074, 1], [120077, 120084, 1], [120086, 120092, 1], [120094, 120121, 1], [120123, 120126, 1], [120128, 120132, 1], [120134, 120138, 4], [120139, 120144, 1], [120146, 120485, 1], [120488, 120779, 1], [120782, 120831, 1], [126065, 126132, 1], [126209, 126269, 1], [126976, 127019, 1], [127024, 127123, 1], [127136, 127150, 1], [127153, 127167, 1], [127169, 127183, 1], [127185, 127221, 1], [127232, 127405, 1], [127462, 127487, 1], [127489, 127490, 1], [127504, 127547, 1], [127552, 127560, 1], [127568, 127569, 1], [127584, 127589, 1], [127744, 128727, 1], [128732, 128748, 1], [128752, 128764, 1], [128768, 128886, 1], [128891, 128985, 1], [128992, 129003, 1], [129008, 129024, 16], [129025, 129035, 1], [129040, 129095, 1], [129104, 129113, 1], [129120, 129159, 1], [129168, 129197, 1], [129200, 129201, 1], [129280, 129619, 1], [129632, 129645, 1], [129648, 129660, 1], [129664, 129672, 1], [129680, 129725, 1], [129727, 129733, 1], [129742, 129755, 1], [129760, 129768, 1], [129776, 129784, 1], [129792, 129938, 1], [129940, 129994, 1], [130032, 130041, 1], [917505, 917536, 31], [917537, 917631, 1]]);
_defineProperty(UnicodeTables, "foldCommon", [[924, 956, 32]]);
_defineProperty(UnicodeTables, "Coptic", [[994, 1007, 1], [11392, 11507, 1], [11513, 11519, 1]]);
_defineProperty(UnicodeTables, "Cuneiform", [[73728, 74649, 1], [74752, 74862, 1], [74864, 74868, 1], [74880, 75075, 1]]);
_defineProperty(UnicodeTables, "Cypriot", [[67584, 67589, 1], [67592, 67594, 2], [67595, 67637, 1], [67639, 67640, 1], [67644, 67647, 3]]);
_defineProperty(UnicodeTables, "Cypro_Minoan", [[77712, 77810, 1]]);
_defineProperty(UnicodeTables, "Cyrillic", [[1024, 1156, 1], [1159, 1327, 1], [7296, 7304, 1], [7467, 7544, 77], [11744, 11775, 1], [42560, 42655, 1], [65070, 65071, 1], [122928, 122989, 1], [123023, 123023, 1]]);
_defineProperty(UnicodeTables, "Deseret", [[66560, 66639, 1]]);
_defineProperty(UnicodeTables, "Devanagari", [[2304, 2384, 1], [2389, 2403, 1], [2406, 2431, 1], [43232, 43263, 1], [72448, 72457, 1]]);
_defineProperty(UnicodeTables, "Dives_Akuru", [[71936, 71942, 1], [71945, 71948, 3], [71949, 71955, 1], [71957, 71958, 1], [71960, 71989, 1], [71991, 71992, 1], [71995, 72006, 1], [72016, 72025, 1]]);
_defineProperty(UnicodeTables, "Dogra", [[71680, 71739, 1]]);
_defineProperty(UnicodeTables, "Duployan", [[113664, 113770, 1], [113776, 113788, 1], [113792, 113800, 1], [113808, 113817, 1], [113820, 113823, 1]]);
_defineProperty(UnicodeTables, "Egyptian_Hieroglyphs", [[77824, 78933, 1]]);
_defineProperty(UnicodeTables, "Elbasan", [[66816, 66855, 1]]);
_defineProperty(UnicodeTables, "Elymaic", [[69600, 69622, 1]]);
_defineProperty(UnicodeTables, "Ethiopic", [[4608, 4680, 1], [4682, 4685, 1], [4688, 4694, 1], [4696, 4698, 2], [4699, 4701, 1], [4704, 4744, 1], [4746, 4749, 1], [4752, 4784, 1], [4786, 4789, 1], [4792, 4798, 1], [4800, 4802, 2], [4803, 4805, 1], [4808, 4822, 1], [4824, 4880, 1], [4882, 4885, 1], [4888, 4954, 1], [4957, 4988, 1], [4992, 5017, 1], [11648, 11670, 1], [11680, 11686, 1], [11688, 11694, 1], [11696, 11702, 1], [11704, 11710, 1], [11712, 11718, 1], [11720, 11726, 1], [11728, 11734, 1], [11736, 11742, 1], [43777, 43782, 1], [43785, 43790, 1], [43793, 43798, 1], [43808, 43814, 1], [43816, 43822, 1], [124896, 124902, 1], [124904, 124907, 1], [124909, 124910, 1], [124912, 124926, 1]]);
_defineProperty(UnicodeTables, "Georgian", [[4256, 4293, 1], [4295, 4301, 6], [4304, 4346, 1], [4348, 4351, 1], [7312, 7354, 1], [7357, 7359, 1], [11520, 11557, 1], [11559, 11565, 6]]);
_defineProperty(UnicodeTables, "Glagolitic", [[11264, 11359, 1], [122880, 122886, 1], [122888, 122904, 1], [122907, 122913, 1], [122915, 122916, 1], [122918, 122922, 1]]);
_defineProperty(UnicodeTables, "Gothic", [[66352, 66378, 1]]);
_defineProperty(UnicodeTables, "Grantha", [[70400, 70403, 1], [70405, 70412, 1], [70415, 70416, 1], [70419, 70440, 1], [70442, 70448, 1], [70450, 70451, 1], [70453, 70457, 1], [70460, 70468, 1], [70471, 70472, 1], [70475, 70477, 1], [70480, 70487, 7], [70493, 70499, 1], [70502, 70508, 1], [70512, 70516, 1]]);
_defineProperty(UnicodeTables, "Greek", [[880, 883, 1], [885, 887, 1], [890, 893, 1], [895, 900, 5], [902, 904, 2], [905, 906, 1], [908, 910, 2], [911, 929, 1], [931, 993, 1], [1008, 1023, 1], [7462, 7466, 1], [7517, 7521, 1], [7526, 7530, 1], [7615, 7936, 321], [7937, 7957, 1], [7960, 7965, 1], [7968, 8005, 1], [8008, 8013, 1], [8016, 8023, 1], [8025, 8031, 2], [8032, 8061, 1], [8064, 8116, 1], [8118, 8132, 1], [8134, 8147, 1], [8150, 8155, 1], [8157, 8175, 1], [8178, 8180, 1], [8182, 8190, 1], [8486, 43877, 35391], [65856, 65934, 1], [65952, 119296, 53344], [119297, 119365, 1]]);
_defineProperty(UnicodeTables, "foldGreek", [[181, 837, 656]]);
_defineProperty(UnicodeTables, "Gujarati", [[2689, 2691, 1], [2693, 2701, 1], [2703, 2705, 1], [2707, 2728, 1], [2730, 2736, 1], [2738, 2739, 1], [2741, 2745, 1], [2748, 2757, 1], [2759, 2761, 1], [2763, 2765, 1], [2768, 2784, 16], [2785, 2787, 1], [2790, 2801, 1], [2809, 2815, 1]]);
_defineProperty(UnicodeTables, "Gunjala_Gondi", [[73056, 73061, 1], [73063, 73064, 1], [73066, 73102, 1], [73104, 73105, 1], [73107, 73112, 1], [73120, 73129, 1]]);
_defineProperty(UnicodeTables, "Gurmukhi", [[2561, 2563, 1], [2565, 2570, 1], [2575, 2576, 1], [2579, 2600, 1], [2602, 2608, 1], [2610, 2611, 1], [2613, 2614, 1], [2616, 2617, 1], [2620, 2622, 2], [2623, 2626, 1], [2631, 2632, 1], [2635, 2637, 1], [2641, 2649, 8], [2650, 2652, 1], [2654, 2662, 8], [2663, 2678, 1]]);
_defineProperty(UnicodeTables, "Han", [[11904, 11929, 1], [11931, 12019, 1], [12032, 12245, 1], [12293, 12295, 2], [12321, 12329, 1], [12344, 12347, 1], [13312, 19903, 1], [19968, 40959, 1], [63744, 64109, 1], [64112, 64217, 1], [94178, 94179, 1], [94192, 94193, 1], [131072, 173791, 1], [173824, 177977, 1], [177984, 178205, 1], [178208, 183969, 1], [183984, 191456, 1], [191472, 192093, 1], [194560, 195101, 1], [196608, 201546, 1], [201552, 205743, 1]]);
_defineProperty(UnicodeTables, "Hangul", [[4352, 4607, 1], [12334, 12335, 1], [12593, 12686, 1], [12800, 12830, 1], [12896, 12926, 1], [43360, 43388, 1], [44032, 55203, 1], [55216, 55238, 1], [55243, 55291, 1], [65440, 65470, 1], [65474, 65479, 1], [65482, 65487, 1], [65490, 65495, 1], [65498, 65500, 1]]);
_defineProperty(UnicodeTables, "Hanifi_Rohingya", [[68864, 68903, 1], [68912, 68921, 1]]);
_defineProperty(UnicodeTables, "Hanunoo", [[5920, 5940, 1]]);
_defineProperty(UnicodeTables, "Hatran", [[67808, 67826, 1], [67828, 67829, 1], [67835, 67839, 1]]);
_defineProperty(UnicodeTables, "Hebrew", [[1425, 1479, 1], [1488, 1514, 1], [1519, 1524, 1], [64285, 64310, 1], [64312, 64316, 1], [64318, 64320, 2], [64321, 64323, 2], [64324, 64326, 2], [64327, 64335, 1]]);
_defineProperty(UnicodeTables, "Hiragana", [[12353, 12438, 1], [12445, 12447, 1], [110593, 110879, 1], [110898, 110928, 30], [110929, 110930, 1], [127488, 127488, 1]]);
_defineProperty(UnicodeTables, "Imperial_Aramaic", [[67648, 67669, 1], [67671, 67679, 1]]);
_defineProperty(UnicodeTables, "Inherited", [[768, 879, 1], [1157, 1158, 1], [1611, 1621, 1], [1648, 2385, 737], [2386, 2388, 1], [6832, 6862, 1], [7376, 7378, 1], [7380, 7392, 1], [7394, 7400, 1], [7405, 7412, 7], [7416, 7417, 1], [7616, 7679, 1], [8204, 8205, 1], [8400, 8432, 1], [12330, 12333, 1], [12441, 12442, 1], [65024, 65039, 1], [65056, 65069, 1], [66045, 66272, 227], [70459, 118528, 48069], [118529, 118573, 1], [118576, 118598, 1], [119143, 119145, 1], [119163, 119170, 1], [119173, 119179, 1], [119210, 119213, 1], [917760, 917999, 1]]);
_defineProperty(UnicodeTables, "foldInherited", [[921, 953, 32], [8126, 8126, 1]]);
_defineProperty(UnicodeTables, "Inscriptional_Pahlavi", [[68448, 68466, 1], [68472, 68479, 1]]);
_defineProperty(UnicodeTables, "Inscriptional_Parthian", [[68416, 68437, 1], [68440, 68447, 1]]);
_defineProperty(UnicodeTables, "Javanese", [[43392, 43469, 1], [43472, 43481, 1], [43486, 43487, 1]]);
_defineProperty(UnicodeTables, "Kaithi", [[69760, 69826, 1], [69837, 69837, 1]]);
_defineProperty(UnicodeTables, "Kannada", [[3200, 3212, 1], [3214, 3216, 1], [3218, 3240, 1], [3242, 3251, 1], [3253, 3257, 1], [3260, 3268, 1], [3270, 3272, 1], [3274, 3277, 1], [3285, 3286, 1], [3293, 3294, 1], [3296, 3299, 1], [3302, 3311, 1], [3313, 3315, 1]]);
_defineProperty(UnicodeTables, "Katakana", [[12449, 12538, 1], [12541, 12543, 1], [12784, 12799, 1], [13008, 13054, 1], [13056, 13143, 1], [65382, 65391, 1], [65393, 65437, 1], [110576, 110579, 1], [110581, 110587, 1], [110589, 110590, 1], [110592, 110880, 288], [110881, 110882, 1], [110933, 110948, 15], [110949, 110951, 1]]);
_defineProperty(UnicodeTables, "Kawi", [[73472, 73488, 1], [73490, 73530, 1], [73534, 73561, 1]]);
_defineProperty(UnicodeTables, "Kayah_Li", [[43264, 43309, 1], [43311, 43311, 1]]);
_defineProperty(UnicodeTables, "Kharoshthi", [[68096, 68099, 1], [68101, 68102, 1], [68108, 68115, 1], [68117, 68119, 1], [68121, 68149, 1], [68152, 68154, 1], [68159, 68168, 1], [68176, 68184, 1]]);
_defineProperty(UnicodeTables, "Khitan_Small_Script", [[94180, 101120, 6940], [101121, 101589, 1]]);
_defineProperty(UnicodeTables, "Khmer", [[6016, 6109, 1], [6112, 6121, 1], [6128, 6137, 1], [6624, 6655, 1]]);
_defineProperty(UnicodeTables, "Khojki", [[70144, 70161, 1], [70163, 70209, 1]]);
_defineProperty(UnicodeTables, "Khudawadi", [[70320, 70378, 1], [70384, 70393, 1]]);
_defineProperty(UnicodeTables, "Lao", [[3713, 3714, 1], [3716, 3718, 2], [3719, 3722, 1], [3724, 3747, 1], [3749, 3751, 2], [3752, 3773, 1], [3776, 3780, 1], [3782, 3784, 2], [3785, 3790, 1], [3792, 3801, 1], [3804, 3807, 1]]);
_defineProperty(UnicodeTables, "Latin", [[65, 90, 1], [97, 122, 1], [170, 186, 16], [192, 214, 1], [216, 246, 1], [248, 696, 1], [736, 740, 1], [7424, 7461, 1], [7468, 7516, 1], [7522, 7525, 1], [7531, 7543, 1], [7545, 7614, 1], [7680, 7935, 1], [8305, 8319, 14], [8336, 8348, 1], [8490, 8491, 1], [8498, 8526, 28], [8544, 8584, 1], [11360, 11391, 1], [42786, 42887, 1], [42891, 42954, 1], [42960, 42961, 1], [42963, 42965, 2], [42966, 42969, 1], [42994, 43007, 1], [43824, 43866, 1], [43868, 43876, 1], [43878, 43881, 1], [64256, 64262, 1], [65313, 65338, 1], [65345, 65370, 1], [67456, 67461, 1], [67463, 67504, 1], [67506, 67514, 1], [122624, 122654, 1], [122661, 122666, 1]]);
_defineProperty(UnicodeTables, "Lepcha", [[7168, 7223, 1], [7227, 7241, 1], [7245, 7247, 1]]);
_defineProperty(UnicodeTables, "Limbu", [[6400, 6430, 1], [6432, 6443, 1], [6448, 6459, 1], [6464, 6468, 4], [6469, 6479, 1]]);
_defineProperty(UnicodeTables, "Linear_A", [[67072, 67382, 1], [67392, 67413, 1], [67424, 67431, 1]]);
_defineProperty(UnicodeTables, "Linear_B", [[65536, 65547, 1], [65549, 65574, 1], [65576, 65594, 1], [65596, 65597, 1], [65599, 65613, 1], [65616, 65629, 1], [65664, 65786, 1]]);
_defineProperty(UnicodeTables, "Lisu", [[42192, 42239, 1], [73648, 73648, 1]]);
_defineProperty(UnicodeTables, "Lycian", [[66176, 66204, 1]]);
_defineProperty(UnicodeTables, "Lydian", [[67872, 67897, 1], [67903, 67903, 1]]);
_defineProperty(UnicodeTables, "Mahajani", [[69968, 70006, 1]]);
_defineProperty(UnicodeTables, "Makasar", [[73440, 73464, 1]]);
_defineProperty(UnicodeTables, "Malayalam", [[3328, 3340, 1], [3342, 3344, 1], [3346, 3396, 1], [3398, 3400, 1], [3402, 3407, 1], [3412, 3427, 1], [3430, 3455, 1]]);
_defineProperty(UnicodeTables, "Mandaic", [[2112, 2139, 1], [2142, 2142, 1]]);
_defineProperty(UnicodeTables, "Manichaean", [[68288, 68326, 1], [68331, 68342, 1]]);
_defineProperty(UnicodeTables, "Marchen", [[72816, 72847, 1], [72850, 72871, 1], [72873, 72886, 1]]);
_defineProperty(UnicodeTables, "Masaram_Gondi", [[72960, 72966, 1], [72968, 72969, 1], [72971, 73014, 1], [73018, 73020, 2], [73021, 73023, 2], [73024, 73031, 1], [73040, 73049, 1]]);
_defineProperty(UnicodeTables, "Medefaidrin", [[93760, 93850, 1]]);
_defineProperty(UnicodeTables, "Meetei_Mayek", [[43744, 43766, 1], [43968, 44013, 1], [44016, 44025, 1]]);
_defineProperty(UnicodeTables, "Mende_Kikakui", [[124928, 125124, 1], [125127, 125142, 1]]);
_defineProperty(UnicodeTables, "Meroitic_Cursive", [[68000, 68023, 1], [68028, 68047, 1], [68050, 68095, 1]]);
_defineProperty(UnicodeTables, "Meroitic_Hieroglyphs", [[67968, 67999, 1]]);
_defineProperty(UnicodeTables, "Miao", [[93952, 94026, 1], [94031, 94087, 1], [94095, 94111, 1]]);
_defineProperty(UnicodeTables, "Modi", [[71168, 71236, 1], [71248, 71257, 1]]);
_defineProperty(UnicodeTables, "Mongolian", [[6144, 6145, 1], [6148, 6150, 2], [6151, 6169, 1], [6176, 6264, 1], [6272, 6314, 1], [71264, 71276, 1]]);
_defineProperty(UnicodeTables, "Mro", [[92736, 92766, 1], [92768, 92777, 1], [92782, 92783, 1]]);
_defineProperty(UnicodeTables, "Multani", [[70272, 70278, 1], [70280, 70282, 2], [70283, 70285, 1], [70287, 70301, 1], [70303, 70313, 1]]);
_defineProperty(UnicodeTables, "Myanmar", [[4096, 4255, 1], [43488, 43518, 1], [43616, 43647, 1]]);
_defineProperty(UnicodeTables, "Nabataean", [[67712, 67742, 1], [67751, 67759, 1]]);
_defineProperty(UnicodeTables, "Nag_Mundari", [[124112, 124153, 1]]);
_defineProperty(UnicodeTables, "Nandinagari", [[72096, 72103, 1], [72106, 72151, 1], [72154, 72164, 1]]);
_defineProperty(UnicodeTables, "New_Tai_Lue", [[6528, 6571, 1], [6576, 6601, 1], [6608, 6618, 1], [6622, 6623, 1]]);
_defineProperty(UnicodeTables, "Newa", [[70656, 70747, 1], [70749, 70753, 1]]);
_defineProperty(UnicodeTables, "Nko", [[1984, 2042, 1], [2045, 2047, 1]]);
_defineProperty(UnicodeTables, "Nushu", [[94177, 110960, 16783], [110961, 111355, 1]]);
_defineProperty(UnicodeTables, "Nyiakeng_Puachue_Hmong", [[123136, 123180, 1], [123184, 123197, 1], [123200, 123209, 1], [123214, 123215, 1]]);
_defineProperty(UnicodeTables, "Ogham", [[5760, 5788, 1]]);
_defineProperty(UnicodeTables, "Ol_Chiki", [[7248, 7295, 1]]);
_defineProperty(UnicodeTables, "Old_Hungarian", [[68736, 68786, 1], [68800, 68850, 1], [68858, 68863, 1]]);
_defineProperty(UnicodeTables, "Old_Italic", [[66304, 66339, 1], [66349, 66351, 1]]);
_defineProperty(UnicodeTables, "Old_North_Arabian", [[68224, 68255, 1]]);
_defineProperty(UnicodeTables, "Old_Permic", [[66384, 66426, 1]]);
_defineProperty(UnicodeTables, "Old_Persian", [[66464, 66499, 1], [66504, 66517, 1]]);
_defineProperty(UnicodeTables, "Old_Sogdian", [[69376, 69415, 1]]);
_defineProperty(UnicodeTables, "Old_South_Arabian", [[68192, 68223, 1]]);
_defineProperty(UnicodeTables, "Old_Turkic", [[68608, 68680, 1]]);
_defineProperty(UnicodeTables, "Old_Uyghur", [[69488, 69513, 1]]);
_defineProperty(UnicodeTables, "Oriya", [[2817, 2819, 1], [2821, 2828, 1], [2831, 2832, 1], [2835, 2856, 1], [2858, 2864, 1], [2866, 2867, 1], [2869, 2873, 1], [2876, 2884, 1], [2887, 2888, 1], [2891, 2893, 1], [2901, 2903, 1], [2908, 2909, 1], [2911, 2915, 1], [2918, 2935, 1]]);
_defineProperty(UnicodeTables, "Osage", [[66736, 66771, 1], [66776, 66811, 1]]);
_defineProperty(UnicodeTables, "Osmanya", [[66688, 66717, 1], [66720, 66729, 1]]);
_defineProperty(UnicodeTables, "Pahawh_Hmong", [[92928, 92997, 1], [93008, 93017, 1], [93019, 93025, 1], [93027, 93047, 1], [93053, 93071, 1]]);
_defineProperty(UnicodeTables, "Palmyrene", [[67680, 67711, 1]]);
_defineProperty(UnicodeTables, "Pau_Cin_Hau", [[72384, 72440, 1]]);
_defineProperty(UnicodeTables, "Phags_Pa", [[43072, 43127, 1]]);
_defineProperty(UnicodeTables, "Phoenician", [[67840, 67867, 1], [67871, 67871, 1]]);
_defineProperty(UnicodeTables, "Psalter_Pahlavi", [[68480, 68497, 1], [68505, 68508, 1], [68521, 68527, 1]]);
_defineProperty(UnicodeTables, "Rejang", [[43312, 43347, 1], [43359, 43359, 1]]);
_defineProperty(UnicodeTables, "Runic", [[5792, 5866, 1], [5870, 5880, 1]]);
_defineProperty(UnicodeTables, "Samaritan", [[2048, 2093, 1], [2096, 2110, 1]]);
_defineProperty(UnicodeTables, "Saurashtra", [[43136, 43205, 1], [43214, 43225, 1]]);
_defineProperty(UnicodeTables, "Sharada", [[70016, 70111, 1]]);
_defineProperty(UnicodeTables, "Shavian", [[66640, 66687, 1]]);
_defineProperty(UnicodeTables, "Siddham", [[71040, 71093, 1], [71096, 71133, 1]]);
_defineProperty(UnicodeTables, "SignWriting", [[120832, 121483, 1], [121499, 121503, 1], [121505, 121519, 1]]);
_defineProperty(UnicodeTables, "Sinhala", [[3457, 3459, 1], [3461, 3478, 1], [3482, 3505, 1], [3507, 3515, 1], [3517, 3520, 3], [3521, 3526, 1], [3530, 3535, 5], [3536, 3540, 1], [3542, 3544, 2], [3545, 3551, 1], [3558, 3567, 1], [3570, 3572, 1], [70113, 70132, 1]]);
_defineProperty(UnicodeTables, "Sogdian", [[69424, 69465, 1]]);
_defineProperty(UnicodeTables, "Sora_Sompeng", [[69840, 69864, 1], [69872, 69881, 1]]);
_defineProperty(UnicodeTables, "Soyombo", [[72272, 72354, 1]]);
_defineProperty(UnicodeTables, "Sundanese", [[7040, 7103, 1], [7360, 7367, 1]]);
_defineProperty(UnicodeTables, "Syloti_Nagri", [[43008, 43052, 1]]);
_defineProperty(UnicodeTables, "Syriac", [[1792, 1805, 1], [1807, 1866, 1], [1869, 1871, 1], [2144, 2154, 1]]);
_defineProperty(UnicodeTables, "Tagalog", [[5888, 5909, 1], [5919, 5919, 1]]);
_defineProperty(UnicodeTables, "Tagbanwa", [[5984, 5996, 1], [5998, 6000, 1], [6002, 6003, 1]]);
_defineProperty(UnicodeTables, "Tai_Le", [[6480, 6509, 1], [6512, 6516, 1]]);
_defineProperty(UnicodeTables, "Tai_Tham", [[6688, 6750, 1], [6752, 6780, 1], [6783, 6793, 1], [6800, 6809, 1], [6816, 6829, 1]]);
_defineProperty(UnicodeTables, "Tai_Viet", [[43648, 43714, 1], [43739, 43743, 1]]);
_defineProperty(UnicodeTables, "Takri", [[71296, 71353, 1], [71360, 71369, 1]]);
_defineProperty(UnicodeTables, "Tamil", [[2946, 2947, 1], [2949, 2954, 1], [2958, 2960, 1], [2962, 2965, 1], [2969, 2970, 1], [2972, 2974, 2], [2975, 2979, 4], [2980, 2984, 4], [2985, 2986, 1], [2990, 3001, 1], [3006, 3010, 1], [3014, 3016, 1], [3018, 3021, 1], [3024, 3031, 7], [3046, 3066, 1], [73664, 73713, 1], [73727, 73727, 1]]);
_defineProperty(UnicodeTables, "Tangsa", [[92784, 92862, 1], [92864, 92873, 1]]);
_defineProperty(UnicodeTables, "Tangut", [[94176, 94208, 32], [94209, 100343, 1], [100352, 101119, 1], [101632, 101640, 1]]);
_defineProperty(UnicodeTables, "Telugu", [[3072, 3084, 1], [3086, 3088, 1], [3090, 3112, 1], [3114, 3129, 1], [3132, 3140, 1], [3142, 3144, 1], [3146, 3149, 1], [3157, 3158, 1], [3160, 3162, 1], [3165, 3168, 3], [3169, 3171, 1], [3174, 3183, 1], [3191, 3199, 1]]);
_defineProperty(UnicodeTables, "Thaana", [[1920, 1969, 1]]);
_defineProperty(UnicodeTables, "Thai", [[3585, 3642, 1], [3648, 3675, 1]]);
_defineProperty(UnicodeTables, "Tibetan", [[3840, 3911, 1], [3913, 3948, 1], [3953, 3991, 1], [3993, 4028, 1], [4030, 4044, 1], [4046, 4052, 1], [4057, 4058, 1]]);
_defineProperty(UnicodeTables, "Tifinagh", [[11568, 11623, 1], [11631, 11632, 1], [11647, 11647, 1]]);
_defineProperty(UnicodeTables, "Tirhuta", [[70784, 70855, 1], [70864, 70873, 1]]);
_defineProperty(UnicodeTables, "Toto", [[123536, 123566, 1]]);
_defineProperty(UnicodeTables, "Ugaritic", [[66432, 66461, 1], [66463, 66463, 1]]);
_defineProperty(UnicodeTables, "Vai", [[42240, 42539, 1]]);
_defineProperty(UnicodeTables, "Vithkuqi", [[66928, 66938, 1], [66940, 66954, 1], [66956, 66962, 1], [66964, 66965, 1], [66967, 66977, 1], [66979, 66993, 1], [66995, 67001, 1], [67003, 67004, 1]]);
_defineProperty(UnicodeTables, "Wancho", [[123584, 123641, 1], [123647, 123647, 1]]);
_defineProperty(UnicodeTables, "Warang_Citi", [[71840, 71922, 1], [71935, 71935, 1]]);
_defineProperty(UnicodeTables, "Yezidi", [[69248, 69289, 1], [69291, 69293, 1], [69296, 69297, 1]]);
_defineProperty(UnicodeTables, "Yi", [[40960, 42124, 1], [42128, 42182, 1]]);
_defineProperty(UnicodeTables, "Zanabazar_Square", [[72192, 72263, 1]]);
_defineProperty(UnicodeTables, "CATEGORIES", new Map([['C', _UnicodeTables.C], ['Cc', _UnicodeTables.Cc], ['Cf', _UnicodeTables.Cf], ['Co', _UnicodeTables.Co], ['Cs', _UnicodeTables.Cs], ['L', _UnicodeTables.L], ['Ll', _UnicodeTables.Ll], ['Lm', _UnicodeTables.Lm], ['Lo', _UnicodeTables.Lo], ['Lt', _UnicodeTables.Lt], ['Lu', _UnicodeTables.Lu], ['M', _UnicodeTables.M], ['Mc', _UnicodeTables.Mc], ['Me', _UnicodeTables.Me], ['Mn', _UnicodeTables.Mn], ['N', _UnicodeTables.N], ['Nd', _UnicodeTables.Nd], ['Nl', _UnicodeTables.Nl], ['No', _UnicodeTables.No], ['P', _UnicodeTables.P], ['Pc', _UnicodeTables.Pc], ['Pd', _UnicodeTables.Pd], ['Pe', _UnicodeTables.Pe], ['Pf', _UnicodeTables.Pf], ['Pi', _UnicodeTables.Pi], ['Po', _UnicodeTables.Po], ['Ps', _UnicodeTables.Ps], ['S', _UnicodeTables.S], ['Sc', _UnicodeTables.Sc], ['Sk', _UnicodeTables.Sk], ['Sm', _UnicodeTables.Sm], ['So', _UnicodeTables.So], ['Z', _UnicodeTables.Z], ['Zl', _UnicodeTables.Zl], ['Zp', _UnicodeTables.Zp], ['Zs', _UnicodeTables.Zs]]));
_defineProperty(UnicodeTables, "SCRIPTS", new Map([['Adlam', _UnicodeTables.Adlam], ['Ahom', _UnicodeTables.Ahom], ['Anatolian_Hieroglyphs', _UnicodeTables.Anatolian_Hieroglyphs], ['Arabic', _UnicodeTables.Arabic], ['Armenian', _UnicodeTables.Armenian], ['Avestan', _UnicodeTables.Avestan], ['Balinese', _UnicodeTables.Balinese], ['Bamum', _UnicodeTables.Bamum], ['Bassa_Vah', _UnicodeTables.Bassa_Vah], ['Batak', _UnicodeTables.Batak], ['Bengali', _UnicodeTables.Bengali], ['Bhaiksuki', _UnicodeTables.Bhaiksuki], ['Bopomofo', _UnicodeTables.Bopomofo], ['Brahmi', _UnicodeTables.Brahmi], ['Braille', _UnicodeTables.Braille], ['Buginese', _UnicodeTables.Buginese], ['Buhid', _UnicodeTables.Buhid], ['Canadian_Aboriginal', _UnicodeTables.Canadian_Aboriginal], ['Carian', _UnicodeTables.Carian], ['Caucasian_Albanian', _UnicodeTables.Caucasian_Albanian], ['Chakma', _UnicodeTables.Chakma], ['Cham', _UnicodeTables.Cham], ['Cherokee', _UnicodeTables.Cherokee], ['Chorasmian', _UnicodeTables.Chorasmian], ['Common', _UnicodeTables.Common], ['Coptic', _UnicodeTables.Coptic], ['Cuneiform', _UnicodeTables.Cuneiform], ['Cypriot', _UnicodeTables.Cypriot], ['Cypro_Minoan', _UnicodeTables.Cypro_Minoan], ['Cyrillic', _UnicodeTables.Cyrillic], ['Deseret', _UnicodeTables.Deseret], ['Devanagari', _UnicodeTables.Devanagari], ['Dives_Akuru', _UnicodeTables.Dives_Akuru], ['Dogra', _UnicodeTables.Dogra], ['Duployan', _UnicodeTables.Duployan], ['Egyptian_Hieroglyphs', _UnicodeTables.Egyptian_Hieroglyphs], ['Elbasan', _UnicodeTables.Elbasan], ['Elymaic', _UnicodeTables.Elymaic], ['Ethiopic', _UnicodeTables.Ethiopic], ['Georgian', _UnicodeTables.Georgian], ['Glagolitic', _UnicodeTables.Glagolitic], ['Gothic', _UnicodeTables.Gothic], ['Grantha', _UnicodeTables.Grantha], ['Greek', _UnicodeTables.Greek], ['Gujarati', _UnicodeTables.Gujarati], ['Gunjala_Gondi', _UnicodeTables.Gunjala_Gondi], ['Gurmukhi', _UnicodeTables.Gurmukhi], ['Han', _UnicodeTables.Han], ['Hangul', _UnicodeTables.Hangul], ['Hanifi_Rohingya', _UnicodeTables.Hanifi_Rohingya], ['Hanunoo', _UnicodeTables.Hanunoo], ['Hatran', _UnicodeTables.Hatran], ['Hebrew', _UnicodeTables.Hebrew], ['Hiragana', _UnicodeTables.Hiragana], ['Imperial_Aramaic', _UnicodeTables.Imperial_Aramaic], ['Inherited', _UnicodeTables.Inherited], ['Inscriptional_Pahlavi', _UnicodeTables.Inscriptional_Pahlavi], ['Inscriptional_Parthian', _UnicodeTables.Inscriptional_Parthian], ['Javanese', _UnicodeTables.Javanese], ['Kaithi', _UnicodeTables.Kaithi], ['Kannada', _UnicodeTables.Kannada], ['Katakana', _UnicodeTables.Katakana], ['Kawi', _UnicodeTables.Kawi], ['Kayah_Li', _UnicodeTables.Kayah_Li], ['Kharoshthi', _UnicodeTables.Kharoshthi], ['Khitan_Small_Script', _UnicodeTables.Khitan_Small_Script], ['Khmer', _UnicodeTables.Khmer], ['Khojki', _UnicodeTables.Khojki], ['Khudawadi', _UnicodeTables.Khudawadi], ['Lao', _UnicodeTables.Lao], ['Latin', _UnicodeTables.Latin], ['Lepcha', _UnicodeTables.Lepcha], ['Limbu', _UnicodeTables.Limbu], ['Linear_A', _UnicodeTables.Linear_A], ['Linear_B', _UnicodeTables.Linear_B], ['Lisu', _UnicodeTables.Lisu], ['Lycian', _UnicodeTables.Lycian], ['Lydian', _UnicodeTables.Lydian], ['Mahajani', _UnicodeTables.Mahajani], ['Makasar', _UnicodeTables.Makasar], ['Malayalam', _UnicodeTables.Malayalam], ['Mandaic', _UnicodeTables.Mandaic], ['Manichaean', _UnicodeTables.Manichaean], ['Marchen', _UnicodeTables.Marchen], ['Masaram_Gondi', _UnicodeTables.Masaram_Gondi], ['Medefaidrin', _UnicodeTables.Medefaidrin], ['Meetei_Mayek', _UnicodeTables.Meetei_Mayek], ['Mende_Kikakui', _UnicodeTables.Mende_Kikakui], ['Meroitic_Cursive', _UnicodeTables.Meroitic_Cursive], ['Meroitic_Hieroglyphs', _UnicodeTables.Meroitic_Hieroglyphs], ['Miao', _UnicodeTables.Miao], ['Modi', _UnicodeTables.Modi], ['Mongolian', _UnicodeTables.Mongolian], ['Mro', _UnicodeTables.Mro], ['Multani', _UnicodeTables.Multani], ['Myanmar', _UnicodeTables.Myanmar], ['Nabataean', _UnicodeTables.Nabataean], ['Nag_Mundari', _UnicodeTables.Nag_Mundari], ['Nandinagari', _UnicodeTables.Nandinagari], ['New_Tai_Lue', _UnicodeTables.New_Tai_Lue], ['Newa', _UnicodeTables.Newa], ['Nko', _UnicodeTables.Nko], ['Nushu', _UnicodeTables.Nushu], ['Nyiakeng_Puachue_Hmong', _UnicodeTables.Nyiakeng_Puachue_Hmong], ['Ogham', _UnicodeTables.Ogham], ['Ol_Chiki', _UnicodeTables.Ol_Chiki], ['Old_Hungarian', _UnicodeTables.Old_Hungarian], ['Old_Italic', _UnicodeTables.Old_Italic], ['Old_North_Arabian', _UnicodeTables.Old_North_Arabian], ['Old_Permic', _UnicodeTables.Old_Permic], ['Old_Persian', _UnicodeTables.Old_Persian], ['Old_Sogdian', _UnicodeTables.Old_Sogdian], ['Old_South_Arabian', _UnicodeTables.Old_South_Arabian], ['Old_Turkic', _UnicodeTables.Old_Turkic], ['Old_Uyghur', _UnicodeTables.Old_Uyghur], ['Oriya', _UnicodeTables.Oriya], ['Osage', _UnicodeTables.Osage], ['Osmanya', _UnicodeTables.Osmanya], ['Pahawh_Hmong', _UnicodeTables.Pahawh_Hmong], ['Palmyrene', _UnicodeTables.Palmyrene], ['Pau_Cin_Hau', _UnicodeTables.Pau_Cin_Hau], ['Phags_Pa', _UnicodeTables.Phags_Pa], ['Phoenician', _UnicodeTables.Phoenician], ['Psalter_Pahlavi', _UnicodeTables.Psalter_Pahlavi], ['Rejang', _UnicodeTables.Rejang], ['Runic', _UnicodeTables.Runic], ['Samaritan', _UnicodeTables.Samaritan], ['Saurashtra', _UnicodeTables.Saurashtra], ['Sharada', _UnicodeTables.Sharada], ['Shavian', _UnicodeTables.Shavian], ['Siddham', _UnicodeTables.Siddham], ['SignWriting', _UnicodeTables.SignWriting], ['Sinhala', _UnicodeTables.Sinhala], ['Sogdian', _UnicodeTables.Sogdian], ['Sora_Sompeng', _UnicodeTables.Sora_Sompeng], ['Soyombo', _UnicodeTables.Soyombo], ['Sundanese', _UnicodeTables.Sundanese], ['Syloti_Nagri', _UnicodeTables.Syloti_Nagri], ['Syriac', _UnicodeTables.Syriac], ['Tagalog', _UnicodeTables.Tagalog], ['Tagbanwa', _UnicodeTables.Tagbanwa], ['Tai_Le', _UnicodeTables.Tai_Le], ['Tai_Tham', _UnicodeTables.Tai_Tham], ['Tai_Viet', _UnicodeTables.Tai_Viet], ['Takri', _UnicodeTables.Takri], ['Tamil', _UnicodeTables.Tamil], ['Tangsa', _UnicodeTables.Tangsa], ['Tangut', _UnicodeTables.Tangut], ['Telugu', _UnicodeTables.Telugu], ['Thaana', _UnicodeTables.Thaana], ['Thai', _UnicodeTables.Thai], ['Tibetan', _UnicodeTables.Tibetan], ['Tifinagh', _UnicodeTables.Tifinagh], ['Tirhuta', _UnicodeTables.Tirhuta], ['Toto', _UnicodeTables.Toto], ['Ugaritic', _UnicodeTables.Ugaritic], ['Vai', _UnicodeTables.Vai], ['Vithkuqi', _UnicodeTables.Vithkuqi], ['Wancho', _UnicodeTables.Wancho], ['Warang_Citi', _UnicodeTables.Warang_Citi], ['Yezidi', _UnicodeTables.Yezidi], ['Yi', _UnicodeTables.Yi], ['Zanabazar_Square', _UnicodeTables.Zanabazar_Square]]));
_defineProperty(UnicodeTables, "FOLD_CATEGORIES", new Map([['L', _UnicodeTables.foldL], ['Ll', _UnicodeTables.foldLl], ['Lt', _UnicodeTables.foldLt], ['Lu', _UnicodeTables.foldLu], ['M', _UnicodeTables.foldM], ['Mn', _UnicodeTables.foldMn]]));
_defineProperty(UnicodeTables, "FOLD_SCRIPT", new Map([['Common', _UnicodeTables.foldCommon], ['Greek', _UnicodeTables.foldGreek], ['Inherited', _UnicodeTables.foldInherited]]));

/**
 * Utilities for dealing with Unicode better than JS does.
 */
var Unicode = /*#__PURE__*/function () {
  function Unicode() {
    _classCallCheck(this, Unicode);
  }
  return _createClass(Unicode, null, [{
    key: "is32",
    value:
    // is32 uses binary search to test whether rune is in the specified
    // slice of 32-bit ranges.
    function is32(ranges, r) {
      // binary search over ranges
      var lo = 0;
      var hi = ranges.length;
      while (lo < hi) {
        var m = lo + Math.floor((hi - lo) / 2);
        var range = ranges[m];
        if (range[0] <= r && r <= range[1]) {
          return (r - range[0]) % range[2] === 0;
        }
        if (r < range[0]) {
          hi = m;
        } else {
          lo = m + 1;
        }
      }
      return false;
    }

    // is tests whether rune is in the specified table of ranges.
  }, {
    key: "is",
    value: function is(ranges, r) {
      // common case: rune is ASCII or Latin-1, so use linear search.
      if (r <= this.MAX_LATIN1) {
        var _iterator = _createForOfIteratorHelper(ranges),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var range = _step.value;
            // range = [lo, hi, stride]
            if (r > range[1]) {
              continue;
            }
            if (r < range[0]) {
              return false;
            }
            return (r - range[0]) % range[2] === 0;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return false;
      }
      return ranges.length > 0 && r >= ranges[0][0] && this.is32(ranges, r);
    }

    // isUpper reports whether the rune is an upper case letter.
  }, {
    key: "isUpper",
    value: function isUpper(r) {
      if (r <= this.MAX_LATIN1) {
        var s = String.fromCodePoint(r);
        return s.toUpperCase() === s && s.toLowerCase() !== s;
      }
      return this.is(UnicodeTables.Upper, r);
    }

    // isPrint reports whether the rune is printable (Unicode L/M/N/P/S or ' ').
  }, {
    key: "isPrint",
    value: function isPrint(r) {
      if (r <= this.MAX_LATIN1) {
        return r >= 0x20 && r < 0x7f || r >= 0xa1 && r !== 0xad;
      }
      return this.is(UnicodeTables.L, r) || this.is(UnicodeTables.M, r) || this.is(UnicodeTables.N, r) || this.is(UnicodeTables.P, r) || this.is(UnicodeTables.S, r);
    }

    // simpleFold iterates over Unicode code points equivalent under
    // the Unicode-defined simple case folding.  Among the code points
    // equivalent to rune (including rune itself), SimpleFold returns the
    // smallest r >= rune if one exists, or else the smallest r >= 0.
    //
    // For example:
    //      SimpleFold('A') = 'a'
    //      SimpleFold('a') = 'A'
    //
    //      SimpleFold('K') = 'k'
    //      SimpleFold('k') = '\u212A' (Kelvin symbol, K)
    //      SimpleFold('\u212A') = 'K'
    //
    //      SimpleFold('1') = '1'
    //
    // Derived from Go's unicode.SimpleFold.
    //
  }, {
    key: "simpleFold",
    value: function simpleFold(r) {
      // Consult caseOrbit table for special cases.
      if (UnicodeTables.CASE_ORBIT.has(r)) {
        return UnicodeTables.CASE_ORBIT.get(r);
      }

      // No folding specified.  This is a one- or two-element
      // equivalence class containing rune and toLower(rune)
      // and toUpper(rune) if they are different from rune.
      var l = Codepoint.toLowerCase(r);
      if (l !== r) {
        return l;
      }
      return Codepoint.toUpperCase(r);
    }

    // equalsIgnoreCase performs case-insensitive equality comparison
    // on the given runes |r1| and |r2|, with special consideration
    // for the likely scenario where both runes are ASCII characters.
    // If non-ASCII, Unicode case folding will be performed on |r1|
    // to compare it to |r2|.
    // -1 is interpreted as the end-of-file mark.
  }, {
    key: "equalsIgnoreCase",
    value: function equalsIgnoreCase(r1, r2) {
      // Runes already match, or one of them is EOF
      if (r1 < 0 || r2 < 0 || r1 === r2) {
        return true;
      }

      // Fast path for the common case where both runes are ASCII characters.
      // Coerces both runes to lowercase if applicable.
      if (r1 <= this.MAX_ASCII && r2 <= this.MAX_ASCII) {
        if (Codepoint.CODES.get('A') <= r1 && r1 <= Codepoint.CODES.get('Z')) {
          r1 |= 0x20;
        }
        if (Codepoint.CODES.get('A') <= r2 && r2 <= Codepoint.CODES.get('Z')) {
          r2 |= 0x20;
        }
        return r1 === r2;
      }

      // Fall back to full Unicode case folding otherwise.
      // Invariant: r1 must be non-negative
      for (var r = this.simpleFold(r1); r !== r1; r = this.simpleFold(r)) {
        if (r === r2) {
          return true;
        }
      }
      return false;
    }
  }]);
}();
// The highest legal rune value.
_defineProperty(Unicode, "MAX_RUNE", 0x10ffff);
// The highest legal ASCII value.
_defineProperty(Unicode, "MAX_ASCII", 0x7f);
// The highest legal Latin-1 value.
_defineProperty(Unicode, "MAX_LATIN1", 0xff);
// The highest legal Basic Multilingual Plane (BMP) value.
_defineProperty(Unicode, "MAX_BMP", 0xffff);
// Minimum and maximum runes involved in folding.
// Checked during test.
_defineProperty(Unicode, "MIN_FOLD", 0x0041);
_defineProperty(Unicode, "MAX_FOLD", 0x1044f);

/**
 * Various constants and helper utilities.
 */
var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }
  return _createClass(Utils, null, [{
    key: "emptyInts",
    value: function emptyInts() {
      return [];
    }

    // Returns true iff |c| is an ASCII letter or decimal digit.
  }, {
    key: "isalnum",
    value: function isalnum(c) {
      return Codepoint.CODES.get('0') <= c && c <= Codepoint.CODES.get('9') || Codepoint.CODES.get('a') <= c && c <= Codepoint.CODES.get('z') || Codepoint.CODES.get('A') <= c && c <= Codepoint.CODES.get('Z');
    }

    // If |c| is an ASCII hex digit, returns its value, otherwise -1.
  }, {
    key: "unhex",
    value: function unhex(c) {
      if (Codepoint.CODES.get('0') <= c && c <= Codepoint.CODES.get('9')) {
        return c - Codepoint.CODES.get('0');
      }
      if (Codepoint.CODES.get('a') <= c && c <= Codepoint.CODES.get('f')) {
        return c - Codepoint.CODES.get('a') + 10;
      }
      if (Codepoint.CODES.get('A') <= c && c <= Codepoint.CODES.get('F')) {
        return c - Codepoint.CODES.get('A') + 10;
      }
      return -1;
    }

    // Appends a RE2 literal to |out| for rune |rune|,
    // with regexp metacharacters escaped.
  }, {
    key: "escapeRune",
    value: function escapeRune(rune) {
      var out = '';
      if (Unicode.isPrint(rune)) {
        if (this.METACHARACTERS.indexOf(String.fromCodePoint(rune)) >= 0) {
          out += '\\';
        }
        out += String.fromCodePoint(rune);
      } else {
        switch (rune) {
          case Codepoint.CODES.get('"'):
            // '"'
            out += '\\"';
            break;
          case Codepoint.CODES.get('\\'):
            // '\\'
            out += '\\\\';
            break;
          case Codepoint.CODES.get('\t'):
            // '\t'
            out += '\\t';
            break;
          case Codepoint.CODES.get('\n'):
            // '\n'
            out += '\\n';
            break;
          case Codepoint.CODES.get('\r'):
            // '\r'
            out += '\\r';
            break;
          case Codepoint.CODES.get('\b'):
            // '\b'
            out += '\\b';
            break;
          case Codepoint.CODES.get('\f'):
            // '\f'
            out += '\\f';
            break;
          default:
            {
              var s = rune.toString(16);
              if (rune < 0x100) {
                out += '\\x';
                if (s.length === 1) {
                  out += '0';
                }
                out += s;
              } else {
                out += "\\x{".concat(s, "}");
              }
              break;
            }
        }
      }
      return out;
    }

    // Returns the array of runes in the specified Java UTF-16 string.
  }, {
    key: "stringToRunes",
    value: function stringToRunes(str) {
      return String(str).split('').map(function (s) {
        return s.codePointAt(0);
      });
    }

    // Returns the Java UTF-16 string containing the single rune |r|.
  }, {
    key: "runeToString",
    value: function runeToString(r) {
      return String.fromCodePoint(r);
    }

    // isWordRune reports whether r is consider a ``word character''
    // during the evaluation of the \b and \B zero-width assertions.
    // These assertions are ASCII-only: the word characters are [A-Za-z0-9_].
  }, {
    key: "isWordRune",
    value: function isWordRune(r) {
      return Codepoint.CODES.get('a') <= r && r <= Codepoint.CODES.get('z') || Codepoint.CODES.get('A') <= r && r <= Codepoint.CODES.get('Z') || Codepoint.CODES.get('0') <= r && r <= Codepoint.CODES.get('9') || r === Codepoint.CODES.get('_');
    }

    // emptyOpContext returns the zero-width assertions satisfied at the position
    // between the runes r1 and r2, a bitmask of EMPTY_* flags.
    // Passing r1 == -1 indicates that the position is at the beginning of the
    // text.
    // Passing r2 == -1 indicates that the position is at the end of the text.
    // eslint-disable-next-line no-warning-comments
    // TODO(adonovan): move to Machine.
  }, {
    key: "emptyOpContext",
    value: function emptyOpContext(r1, r2) {
      var op = 0;
      if (r1 < 0) {
        op |= this.EMPTY_BEGIN_TEXT | this.EMPTY_BEGIN_LINE;
      }
      if (r1 === Codepoint.CODES.get('\n')) {
        op |= this.EMPTY_BEGIN_LINE;
      }
      if (r2 < 0) {
        op |= this.EMPTY_END_TEXT | this.EMPTY_END_LINE;
      }
      if (r2 === Codepoint.CODES.get('\n')) {
        op |= this.EMPTY_END_LINE;
      }
      if (this.isWordRune(r1) !== this.isWordRune(r2)) {
        op |= this.EMPTY_WORD_BOUNDARY;
      } else {
        op |= this.EMPTY_NO_WORD_BOUNDARY;
      }
      return op;
    }

    /**
     * Returns a string that quotes all regular expression metacharacters inside the argument text;
     * the returned string is a regular expression matching the literal text. For example,
     * {@code quoteMeta("[foo]").equals("\\[foo\\]")}.
     * @param {string} s
     * @returns {string}
     */
  }, {
    key: "quoteMeta",
    value: function quoteMeta(str) {
      var _this = this;
      return str.split('') // A char loop is correct because all metacharacters fit in one UTF-16 code.
      .map(function (s) {
        if (_this.METACHARACTERS.indexOf(s) >= 0) {
          return "\\".concat(s);
        }
        return s;
      }).join('');
    }
  }, {
    key: "charCount",
    value: function charCount(codePoint) {
      return codePoint > Unicode.MAX_BMP ? 2 : 1;
    }
  }, {
    key: "stringToUtf8ByteArray",
    value: function stringToUtf8ByteArray(str) {
      if (globalThis.TextEncoder) {
        return Array.from(new TextEncoder().encode(str));
      } else {
        // fallback, if no TextEncoder
        var out = [],
          p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      }
    }
  }, {
    key: "utf8ByteArrayToString",
    value: function utf8ByteArrayToString(bytes) {
      if (globalThis.TextDecoder) {
        return new TextDecoder('utf-8').decode(new Uint8Array(bytes));
      } else {
        // fallback, if no TextDecoder
        var out = [],
          pos = 0,
          c = 0;
        while (pos < bytes.length) {
          var c1 = bytes[pos++];
          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var _c = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = ((c1 & 7) << 18 | (_c & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
          } else {
            var _c2 = bytes[pos++];
            var _c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (_c2 & 63) << 6 | _c3 & 63);
          }
        }
        return out.join('');
      }
    }
  }]);
}();
_defineProperty(Utils, "METACHARACTERS", '\\.+*?()|[]{}^$');
//// EMPTY_* flags
_defineProperty(Utils, "EMPTY_BEGIN_LINE", 0x01);
_defineProperty(Utils, "EMPTY_END_LINE", 0x02);
_defineProperty(Utils, "EMPTY_BEGIN_TEXT", 0x04);
_defineProperty(Utils, "EMPTY_END_TEXT", 0x08);
_defineProperty(Utils, "EMPTY_WORD_BOUNDARY", 0x10);
_defineProperty(Utils, "EMPTY_NO_WORD_BOUNDARY", 0x20);
_defineProperty(Utils, "EMPTY_ALL", -1);

var $$e = _export;
var FREEZING = freezing;
var fails$9 = fails$G;
var isObject$5 = isObject$n;
var onFreeze = internalMetadataExports.onFreeze;

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails$9(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$$e({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject$5(it) ? $freeze(onFreeze(it)) : it;
  }
});

// helper to create enums
// example
// Encoding[(Encoding['UTF_16'] = 0)] = 'UTF_16'
// Encoding[(Encoding['UTF_8'] = 1)] = 'UTF_8'
var createEnum = function createEnum() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var initNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var enumObject = {};
  for (var i = 0; i < values.length; i++) {
    var val = values[i];
    var keyVal = initNum + i;
    enumObject[val] = keyVal;
    enumObject[keyVal] = val;
  }
  return Object.freeze(enumObject);
};

/**
 * Abstract the representations of input text supplied to Matcher.
 */
var MatcherInputBase = /*#__PURE__*/function () {
  function MatcherInputBase() {
    _classCallCheck(this, MatcherInputBase);
  }
  return _createClass(MatcherInputBase, [{
    key: "getEncoding",
    value: function getEncoding() {
      throw Error('not implemented');
    }

    /**
     *
     * @returns {boolean}
     */
  }, {
    key: "isUTF8Encoding",
    value: function isUTF8Encoding() {
      return this.getEncoding() === MatcherInputBase.Encoding.UTF_8;
    }

    /**
     *
     * @returns {boolean}
     */
  }, {
    key: "isUTF16Encoding",
    value: function isUTF16Encoding() {
      return this.getEncoding() === MatcherInputBase.Encoding.UTF_16;
    }
  }]);
}();
_defineProperty(MatcherInputBase, "Encoding", createEnum(['UTF_16', 'UTF_8']));
var Utf8MatcherInput = /*#__PURE__*/function (_MatcherInputBase2) {
  function Utf8MatcherInput() {
    var _this;
    var bytes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, Utf8MatcherInput);
    _this = _callSuper(this, Utf8MatcherInput);
    _this.bytes = bytes;
    return _this;
  }
  _inherits(Utf8MatcherInput, _MatcherInputBase2);
  return _createClass(Utf8MatcherInput, [{
    key: "getEncoding",
    value: function getEncoding() {
      return MatcherInputBase.Encoding.UTF_8;
    }
    /**
     *
     * @returns {string}
     */
  }, {
    key: "asCharSequence",
    value: function asCharSequence() {
      return Utils.utf8ByteArrayToString(this.bytes);
    }

    /**
     *
     * @returns {number[]}
     */
  }, {
    key: "asBytes",
    value: function asBytes() {
      return this.bytes;
    }

    /**
     *
     * @returns {number}
     */
  }, {
    key: "length",
    value: function length() {
      return this.bytes.length;
    }
  }]);
}(MatcherInputBase);
var Utf16MatcherInput = /*#__PURE__*/function (_MatcherInputBase3) {
  function Utf16MatcherInput() {
    var _this2;
    var charSequence = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, Utf16MatcherInput);
    _this2 = _callSuper(this, Utf16MatcherInput);
    _this2.charSequence = charSequence;
    return _this2;
  }
  _inherits(Utf16MatcherInput, _MatcherInputBase3);
  return _createClass(Utf16MatcherInput, [{
    key: "getEncoding",
    value: function getEncoding() {
      return MatcherInputBase.Encoding.UTF_16;
    }

    /**
     *
     * @returns {string}
     */
  }, {
    key: "asCharSequence",
    value: function asCharSequence() {
      return this.charSequence;
    }

    /**
     *
     * @returns {number[]}
     */
  }, {
    key: "asBytes",
    value: function asBytes() {
      return this.charSequence.toString().split('').map(function (s) {
        return s.codePointAt(0);
      });
    }

    /**
     *
     * @returns {number}
     */
  }, {
    key: "length",
    value: function length() {
      return this.charSequence.length;
    }
  }]);
}(MatcherInputBase);
var MatcherInput = /*#__PURE__*/function () {
  function MatcherInput() {
    _classCallCheck(this, MatcherInput);
  }
  return _createClass(MatcherInput, null, [{
    key: "utf16",
    value:
    /**
     * Return the MatcherInput for UTF_16 encoding.
     * @returns {Utf16MatcherInput}
     */
    function utf16(charSequence) {
      return new Utf16MatcherInput(charSequence);
    }

    /**
     * Return the MatcherInput for UTF_8 encoding.
     * @returns {Utf8MatcherInput}
     */
  }, {
    key: "utf8",
    value: function utf8(input) {
      if (Array.isArray(input)) {
        return new Utf8MatcherInput(input);
      }
      return new Utf8MatcherInput(Utils.stringToUtf8ByteArray(input));
    }
  }]);
}();

var $$d = _export;
var isArray$1 = isArray$4;
var isConstructor = isConstructor$4;
var isObject$4 = isObject$n;
var toAbsoluteIndex$1 = toAbsoluteIndex$8;
var lengthOfArrayLike$2 = lengthOfArrayLike$j;
var toIndexedObject = toIndexedObject$a;
var createProperty$2 = createProperty$4;
var wellKnownSymbol$6 = wellKnownSymbol$n;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
var nativeSlice = arraySlice$6;

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('slice');

var SPECIES$2 = wellKnownSymbol$6('species');
var $Array = Array;
var max$2 = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$$d({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike$2(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray$1(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray$1(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$4(Constructor)) {
        Constructor = Constructor[SPECIES$2];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max$2(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);
    result.length = n;
    return result;
  }
});

var fails$8 = fails$G;
var globalThis$b = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = globalThis$b.RegExp;

var UNSUPPORTED_Y$1 = fails$8(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$8(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$8(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};

var fails$7 = fails$G;
var globalThis$a = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = globalThis$a.RegExp;

var regexpUnsupportedDotAll = fails$7(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});

var fails$6 = fails$G;
var globalThis$9 = globalThis_1;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = globalThis$9.RegExp;

var regexpUnsupportedNcg = fails$6(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$7 = functionCall;
var uncurryThis$5 = functionUncurryThis;
var toString$6 = toString$b;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$5(''.charAt);
var indexOf = uncurryThis$5(''.indexOf);
var replace$2 = uncurryThis$5(''.replace);
var stringSlice$3 = uncurryThis$5(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$7(nativeExec, re1, 'a');
  call$7(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$6(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$7(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$7(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$2(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$3(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$7(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$3(match.input, charsAdded);
        match[0] = stringSlice$3(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$7(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$c = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$c({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var call$6 = functionCall;
var defineBuiltIn$2 = defineBuiltIn$c;
var regexpExec$1 = regexpExec$2;
var fails$5 = fails$G;
var wellKnownSymbol$5 = wellKnownSymbol$n;
var createNonEnumerableProperty = createNonEnumerableProperty$a;

var SPECIES$1 = wellKnownSymbol$5('species');
var RegExpPrototype$1 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$5(KEY);

  var DELEGATES_TO_SYMBOL = !fails$5(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$5(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$1] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype$1.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call$6(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call$6(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$2(String.prototype, KEY, methods[0]);
    defineBuiltIn$2(RegExpPrototype$1, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype$1[SYMBOL], 'sham', true);
};

var charAt$2 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$2(S, index).length : 1);
};

var uncurryThis$4 = functionUncurryThis;
var toObject$2 = toObject$d;

var floor = Math.floor;
var charAt$1 = uncurryThis$4(''.charAt);
var replace$1 = uncurryThis$4(''.replace);
var stringSlice$2 = uncurryThis$4(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$2(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$1(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$1(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$2(str, 0, position);
      case "'": return stringSlice$2(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$2(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$5 = functionCall;
var anObject$3 = anObject$h;
var isCallable$5 = isCallable$o;
var classof$1 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$3 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$5(exec)) {
    var result = call$5(exec, R, S);
    if (result !== null) anObject$3(result);
    return result;
  }
  if (classof$1(R) === 'RegExp') return call$5(regexpExec, R, S);
  throw new $TypeError$3('RegExp#exec called on incompatible receiver');
};

var apply$1 = functionApply;
var call$4 = functionCall;
var uncurryThis$3 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$4 = fails$G;
var anObject$2 = anObject$h;
var isCallable$4 = isCallable$o;
var isNullOrUndefined$1 = isNullOrUndefined$8;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$d;
var toLength$2 = toLength$9;
var toString$5 = toString$b;
var requireObjectCoercible$4 = requireObjectCoercible$9;
var advanceStringIndex$1 = advanceStringIndex$2;
var getMethod$1 = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$4 = wellKnownSymbol$n;

var REPLACE = wellKnownSymbol$4('replace');
var max$1 = Math.max;
var min$2 = Math.min;
var concat = uncurryThis$3([].concat);
var push = uncurryThis$3([].push);
var stringIndexOf = uncurryThis$3(''.indexOf);
var stringSlice$1 = uncurryThis$3(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$4(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$4(this);
      var replacer = isNullOrUndefined$1(searchValue) ? undefined : getMethod$1(searchValue, REPLACE);
      return replacer
        ? call$4(replacer, searchValue, O, replaceValue)
        : call$4(nativeReplace, toString$5(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$2(this);
      var S = toString$5(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$4(replaceValue);
      if (!functionalReplace) replaceValue = toString$5(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec$1(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString$5(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$2(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$5(result[0]);
        var position = max$1(min$2(toIntegerOrInfinity$2(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString$5(apply$1(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice$1(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var RE2JSException = /*#__PURE__*/function (_Error) {
  function RE2JSException(message) {
    var _this;
    _classCallCheck(this, RE2JSException);
    _this = _callSuper(this, RE2JSException, [message]);
    _this.name = 'RE2JSException';
    return _this;
  }
  _inherits(RE2JSException, _Error);
  return _createClass(RE2JSException);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * An exception thrown by the parser if the pattern was invalid.
 */
var RE2JSSyntaxException = /*#__PURE__*/function (_RE2JSException) {
  function RE2JSSyntaxException(error) {
    var _this2;
    var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, RE2JSSyntaxException);
    var message = "error parsing regexp: ".concat(error);
    if (input) {
      message += ": `".concat(input, "`");
    }
    _this2 = _callSuper(this, RE2JSSyntaxException, [message]);
    _this2.name = 'RE2JSSyntaxException';
    _this2.message = message;
    _this2.error = error;
    _this2.input = input;
    return _this2;
  }

  /**
   * Retrieves the description of the error.
   */
  _inherits(RE2JSSyntaxException, _RE2JSException);
  return _createClass(RE2JSSyntaxException, [{
    key: "getDescription",
    value: function getDescription() {
      return this.error;
    }

    /**
     * Retrieves the erroneous regular-expression pattern.
     */
  }, {
    key: "getPattern",
    value: function getPattern() {
      return this.input;
    }
  }]);
}(RE2JSException);
/**
 * An exception thrown by the compiler
 */
var RE2JSCompileException = /*#__PURE__*/function (_RE2JSException2) {
  function RE2JSCompileException(message) {
    var _this3;
    _classCallCheck(this, RE2JSCompileException);
    _this3 = _callSuper(this, RE2JSCompileException, [message]);
    _this3.name = 'RE2JSCompileException';
    return _this3;
  }
  _inherits(RE2JSCompileException, _RE2JSException2);
  return _createClass(RE2JSCompileException);
}(RE2JSException);
/**
 * An exception thrown by using groups
 */
var RE2JSGroupException = /*#__PURE__*/function (_RE2JSException3) {
  function RE2JSGroupException(message) {
    var _this4;
    _classCallCheck(this, RE2JSGroupException);
    _this4 = _callSuper(this, RE2JSGroupException, [message]);
    _this4.name = 'RE2JSGroupException';
    return _this4;
  }
  _inherits(RE2JSGroupException, _RE2JSException3);
  return _createClass(RE2JSGroupException);
}(RE2JSException);
/**
 * An exception thrown by flags
 */
var RE2JSFlagsException = /*#__PURE__*/function (_RE2JSException4) {
  function RE2JSFlagsException(message) {
    var _this5;
    _classCallCheck(this, RE2JSFlagsException);
    _this5 = _callSuper(this, RE2JSFlagsException, [message]);
    _this5.name = 'RE2JSFlagsException';
    return _this5;
  }
  _inherits(RE2JSFlagsException, _RE2JSException4);
  return _createClass(RE2JSFlagsException);
}(RE2JSException);

/**
 * A stateful iterator that interprets a regex {@code RE2JS} on a specific input.
 *
 * Conceptually, a Matcher consists of four parts:
 * <ol>
 * <li>A compiled regular expression {@code RE2JS}, set at construction and fixed for the lifetime
 * of the matcher.</li>
 *
 * <li>The remainder of the input string, set at construction or {@link #reset()} and advanced by
 * each match operation such as {@link #find}, {@link #matches} or {@link #lookingAt}.</li>
 *
 * <li>The current match information, accessible via {@link #start}, {@link #end}, and
 * {@link #group}, and updated by each match operation.</li>
 *
 * <li>The append position, used and advanced by {@link #appendReplacement} and {@link #appendTail}
 * if performing a search and replace from the input to an external {@code StringBuffer}.
 *
 * </ol>
 *
 *
 * @author rsc@google.com (Russ Cox)
 */
var Matcher = /*#__PURE__*/function () {
  /**
   *
   * @param {RE2JS} pattern
   * @param {Utf8MatcherInput|Utf16MatcherInput|number[]|string} input
   */
  function Matcher(pattern, input) {
    _classCallCheck(this, Matcher);
    if (pattern === null) {
      throw new Error('pattern is null');
    }
    // The pattern being matched.
    this.patternInput = pattern;
    var re2 = this.patternInput.re2();
    // The number of submatches (groups) in the pattern.
    this.patternGroupCount = re2.numberOfCapturingGroups();
    // The group indexes, in [start, end) pairs.  Zeroth pair is overall match.
    this.groups = [];
    this.namedGroups = re2.namedGroups;
    if (input instanceof MatcherInputBase) {
      this.resetMatcherInput(input);
    } else if (Array.isArray(input)) {
      this.resetMatcherInput(MatcherInput.utf8(input));
    } else {
      this.resetMatcherInput(MatcherInput.utf16(input));
    }
  }

  /**
   * Returns the {@code RE2JS} associated with this {@code Matcher}.
   * @returns {RE2JS}
   */
  return _createClass(Matcher, [{
    key: "pattern",
    value: function pattern() {
      return this.patternInput;
    }

    /**
     * Resets the {@code Matcher}, rewinding input and discarding any match information.
     *
     * @returns {Matcher} the {@code Matcher} itself, for chained method calls
     */
  }, {
    key: "reset",
    value: function reset() {
      // The input length in UTF16 codes.
      this.matcherInputLength = this.matcherInput.length();
      // The append position: where the next append should start.
      this.appendPos = 0;
      // Is there a current match?
      this.hasMatch = false;
      // Have we found the submatches (groups) of the current match?
      // group[0], group[1] are set regardless.
      this.hasGroups = false;
      // The anchor flag to use when repeating the match to find subgroups.
      this.anchorFlag = 0;
      return this;
    }

    /**
     * Resets the {@code Matcher} and changes the input.
     * @returns {Matcher} the {@code Matcher} itself, for chained method calls
     */
  }, {
    key: "resetMatcherInput",
    value: function resetMatcherInput(input) {
      if (input === null) {
        throw new Error('input is null');
      }
      this.matcherInput = input;
      this.reset();
      return this;
    }

    /**
     * Returns the start of the named group of the most recent match, or -1 if the group was not
     * matched.
     * @param {string|number} [group=0]
     * @returns {string}
     */
  }, {
    key: "start",
    value: function start() {
      var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (typeof group === 'string') {
        var groupInt = this.namedGroups[group];
        if (!Number.isFinite(groupInt)) {
          throw new RE2JSGroupException("group '".concat(group, "' not found"));
        }
        group = groupInt;
      }
      this.loadGroup(group);
      return this.groups[2 * group];
    }

    /**
     * Returns the end of the named group of the most recent match, or -1 if the group was not
     * matched.
     * @param {string|number} [group=0]
     * @returns {string}
     */
  }, {
    key: "end",
    value: function end() {
      var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (typeof group === 'string') {
        var groupInt = this.namedGroups[group];
        if (!Number.isFinite(groupInt)) {
          throw new RE2JSGroupException("group '".concat(group, "' not found"));
        }
        group = groupInt;
      }
      this.loadGroup(group);
      return this.groups[2 * group + 1];
    }

    /**
     * Returns the named group of the most recent match, or {@code null} if the group was not matched.
     * @param {string|number} [group=0]
     * @returns {string}
     */
  }, {
    key: "group",
    value: function group() {
      var _group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (typeof _group === 'string') {
        var groupInt = this.namedGroups[_group];
        if (!Number.isFinite(groupInt)) {
          throw new RE2JSGroupException("group '".concat(_group, "' not found"));
        }
        _group = groupInt;
      }
      var start = this.start(_group);
      var end = this.end(_group);
      if (start < 0 && end < 0) {
        return null;
      }
      return this.substring(start, end);
    }
    /**
     * Returns the number of subgroups in this pattern.
     *
     * @returns {number} the number of subgroups; the overall match (group 0) does not count
     */
  }, {
    key: "groupCount",
    value: function groupCount() {
      return this.patternGroupCount;
    }

    /**
     * Helper: finds subgroup information if needed for group.
     * @param {number} group
     * @private
     */
  }, {
    key: "loadGroup",
    value: function loadGroup(group) {
      if (group < 0 || group > this.patternGroupCount) {
        throw new RE2JSGroupException("Group index out of bounds: ".concat(group));
      }
      if (!this.hasMatch) {
        throw new RE2JSGroupException('perhaps no match attempted');
      }
      if (group === 0 || this.hasGroups) {
        return;
      }
      var end = this.groups[1] + 1;
      if (end > this.matcherInputLength) {
        end = this.matcherInputLength;
      }
      var res = this.patternInput.re2().matchMachineInput(this.matcherInput, this.groups[0], end, this.anchorFlag, 1 + this.patternGroupCount);
      var ok = res[0];
      if (!ok) {
        throw new RE2JSGroupException('inconsistency in matching group data');
      }
      this.groups = res[1];
      this.hasGroups = true;
    }

    /**
     * Matches the entire input against the pattern (anchored start and end). If there is a match,
     * {@code matches} sets the match state to describe it.
     *
     * @returns {boolean} true if the entire input matches the pattern
     */
  }, {
    key: "matches",
    value: function matches() {
      return this.genMatch(0, RE2Flags.ANCHOR_BOTH);
    }

    /**
     * Matches the beginning of input against the pattern (anchored start). If there is a match,
     * {@code lookingAt} sets the match state to describe it.
     *
     * @returns {boolean} true if the beginning of the input matches the pattern
     */
  }, {
    key: "lookingAt",
    value: function lookingAt() {
      return this.genMatch(0, RE2Flags.ANCHOR_START);
    }

    /**
     * Matches the input against the pattern (unanchored), starting at a specified position. If there
     * is a match, {@code find} sets the match state to describe it.
     *
     * @param {string|number} [start=null] the input position where the search begins
     * @returns {boolean} if it finds a match
     * @throws IndexOutOfBoundsException if start is not a valid input position
     */
  }, {
    key: "find",
    value: function find() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (start !== null) {
        if (start < 0 || start > this.matcherInputLength) {
          throw new RE2JSGroupException("start index out of bounds: ".concat(start));
        }
        this.reset();
        return this.genMatch(start, 0);
      }
      // no start
      start = 0;
      if (this.hasMatch) {
        start = this.groups[1];
        if (this.groups[0] === this.groups[1]) {
          start++;
        }
      }
      return this.genMatch(start, RE2Flags.UNANCHORED);
    }

    /**
     * Helper: does match starting at start, with RE2 anchor flag.
     * @param {number} startByte
     * @param {number} anchor
     * @returns {boolean}
     * @private
     */
  }, {
    key: "genMatch",
    value: function genMatch(startByte, anchor) {
      var res = this.patternInput.re2().matchMachineInput(this.matcherInput, startByte, this.matcherInputLength, anchor, 1);
      var ok = res[0];
      if (!ok) {
        return false;
      }
      this.groups = res[1];
      this.hasMatch = true;
      this.hasGroups = false;
      this.anchorFlag = anchor;
      return true;
    }

    /**
     * Helper: return substring for [start, end).
     * @param {number} start
     * @param {number} end
     * @returns {string}
     */
  }, {
    key: "substring",
    value: function substring(start, end) {
      if (this.matcherInput.isUTF8Encoding()) {
        return Utils.utf8ByteArrayToString(this.matcherInput.asBytes().slice(start, end));
      }
      return this.matcherInput.asCharSequence().substring(start, end).toString();
    }

    /**
     * Helper for Pattern: return input length.
     * @returns {number}
     */
  }, {
    key: "inputLength",
    value: function inputLength() {
      return this.matcherInputLength;
    }

    /**
     * Appends to result two strings: the text from the append position up to the beginning of the
     * most recent match, and then the replacement with submatch groups substituted for references of
     * the form {@code $n}, where {@code n} is the group number in decimal. It advances the append
     * position to where the most recent match ended.
     *
     * To embed a literal {@code $}, use \$ (actually {@code "\\$"} with string escapes). The escape
     * is only necessary when {@code $} is followed by a digit, but it is always allowed. Only
     * {@code $} and {@code \} need escaping, but any character can be escaped.
     *
     * The group number {@code n} in {@code $n} is always at least one digit and expands to use more
     * digits as long as the resulting number is a valid group number for this pattern. To cut it off
     * earlier, escape the first digit that should not be used.
     *
     * @param {string} replacement the replacement string
     * @param {boolean} [perlMode=false] activate perl/js mode (different behaviour for capture groups and special characters)
     * @returns {string}
     * @throws IllegalStateException if there was no most recent match
     * @throws IndexOutOfBoundsException if replacement refers to an invalid group
     * @private
     */
  }, {
    key: "appendReplacement",
    value: function appendReplacement(replacement) {
      var perlMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var res = '';
      var s = this.start();
      var e = this.end();
      if (this.appendPos < s) {
        res += this.substring(this.appendPos, s);
      }
      this.appendPos = e;
      res += perlMode ? this.appendReplacementInternalPerl(replacement) : this.appendReplacementInternal(replacement);
      return res;
    }

    /**
     * @param {string} replacement - the replacement string
     * @returns {string}
     * @private
     */
  }, {
    key: "appendReplacementInternal",
    value: function appendReplacementInternal(replacement) {
      var res = '';
      var last = 0;
      var m = replacement.length;
      for (var i = 0; i < m - 1; i++) {
        if (replacement.codePointAt(i) === Codepoint.CODES.get('\\')) {
          if (last < i) {
            res += replacement.substring(last, i);
          }
          i++;
          last = i;
          continue;
        }
        if (replacement.codePointAt(i) === Codepoint.CODES.get('$')) {
          var c = replacement.codePointAt(i + 1);
          if (Codepoint.CODES.get('0') <= c && c <= Codepoint.CODES.get('9')) {
            var n = c - Codepoint.CODES.get('0');
            if (last < i) {
              res += replacement.substring(last, i);
            }
            for (i += 2; i < m; i++) {
              c = replacement.codePointAt(i);
              if (c < Codepoint.CODES.get('0') || c > Codepoint.CODES.get('9') || n * 10 + c - Codepoint.CODES.get('0') > this.patternGroupCount) {
                break;
              }
              n = n * 10 + c - Codepoint.CODES.get('0');
            }
            if (n > this.patternGroupCount) {
              throw new RE2JSGroupException("n > number of groups: ".concat(n));
            }
            var group = this.group(n);
            if (group !== null) {
              res += group;
            }
            last = i;
            i--;
            continue;
          } else if (c === Codepoint.CODES.get('{')) {
            if (last < i) {
              res += replacement.substring(last, i);
            }
            i++;
            var j = i + 1;
            while (j < replacement.length && replacement.codePointAt(j) !== Codepoint.CODES.get('}') && replacement.codePointAt(j) !== Codepoint.CODES.get(' ')) {
              j++;
            }
            if (j === replacement.length || replacement.codePointAt(j) !== Codepoint.CODES.get('}')) {
              throw new RE2JSGroupException("named capture group is missing trailing '}'");
            }
            var groupName = replacement.substring(i + 1, j);
            res += this.group(groupName);
            last = j + 1;
          }
        }
      }
      if (last < m) {
        res += replacement.substring(last, m);
      }
      return res;
    }

    /**
     * @param {string} replacement - the replacement string
     * @returns {string}
     * @private
     */
  }, {
    key: "appendReplacementInternalPerl",
    value: function appendReplacementInternalPerl(replacement) {
      var res = '';
      var last = 0;
      var m = replacement.length;
      for (var i = 0; i < m - 1; i++) {
        if (replacement.codePointAt(i) === Codepoint.CODES.get('$')) {
          var c = replacement.codePointAt(i + 1);
          if (Codepoint.CODES.get('$') === c) {
            if (last < i) {
              res += replacement.substring(last, i);
            }
            res += '$';
            i++;
            last = i + 1;
            continue;
          } else if (Codepoint.CODES.get('&') === c) {
            if (last < i) {
              res += replacement.substring(last, i);
            }
            var group = this.group(0);
            if (group !== null) {
              res += group;
            } else {
              res += '$&';
            }
            i++;
            last = i + 1;
            continue;
          } else if (Codepoint.CODES.get('1') <= c && c <= Codepoint.CODES.get('9')) {
            var n = c - Codepoint.CODES.get('0');
            if (last < i) {
              res += replacement.substring(last, i);
            }
            for (i += 2; i < m; i++) {
              c = replacement.codePointAt(i);
              if (c < Codepoint.CODES.get('0') || c > Codepoint.CODES.get('9') || n * 10 + c - Codepoint.CODES.get('0') > this.patternGroupCount) {
                break;
              }
              n = n * 10 + c - Codepoint.CODES.get('0');
            }
            if (n > this.patternGroupCount) {
              res += "$".concat(n);
              last = i;
              i--;
              continue;
            }
            var _group2 = this.group(n);
            if (_group2 !== null) {
              res += _group2;
            }
            last = i;
            i--;
            continue;
          } else if (c === Codepoint.CODES.get('<')) {
            if (last < i) {
              res += replacement.substring(last, i);
            }
            i++;
            var j = i + 1;
            while (j < replacement.length && replacement.codePointAt(j) !== Codepoint.CODES.get('>') && replacement.codePointAt(j) !== Codepoint.CODES.get(' ')) {
              j++;
            }
            if (j === replacement.length || replacement.codePointAt(j) !== Codepoint.CODES.get('>')) {
              res += replacement.substring(i - 1, j + 1);
              last = j + 1;
              continue;
            }
            var groupName = replacement.substring(i + 1, j);
            if (Object.prototype.hasOwnProperty.call(this.namedGroups, groupName)) {
              res += this.group(groupName);
            } else {
              res += "$<".concat(groupName, ">");
            }
            last = j + 1;
          }
        }
      }
      if (last < m) {
        res += replacement.substring(last, m);
      }
      return res;
    }

    /**
     * Return the substring of the input from the append position to the end of the
     * input.
     * @returns {string}
     */
  }, {
    key: "appendTail",
    value: function appendTail() {
      return this.substring(this.appendPos, this.matcherInputLength);
    }

    /**
     * Returns the input with all matches replaced by {@code replacement}, interpreted as for
     * {@code appendReplacement}.
     *
     * @param {string} replacement - the replacement string
     * @param {boolean} [perlMode=false] - activate perl/js mode (different behaviour for capture groups and special characters)
     * @returns {string} the input string with the matches replaced
     * @throws IndexOutOfBoundsException if replacement refers to an invalid group and perlMode is false
     */
  }, {
    key: "replaceAll",
    value: function replaceAll(replacement) {
      var perlMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.replace(replacement, true, perlMode);
    }

    /**
     * Returns the input with the first match replaced by {@code replacement}, interpreted as for
     * {@code appendReplacement}.
     *
     * @param {string} replacement - the replacement string
     * @param {boolean} [perlMode=false] - activate perl/js mode (different behaviour for capture groups and special characters)
     * @returns {string} the input string with the first match replaced
     * @throws IndexOutOfBoundsException if replacement refers to an invalid group and perlMode is false
     */
  }, {
    key: "replaceFirst",
    value: function replaceFirst(replacement) {
      var perlMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.replace(replacement, false, perlMode);
    }

    /**
     * Helper: replaceAll/replaceFirst hybrid.
     * @param {string} replacement - the replacement string
     * @param {boolean} [all=true] - replace all matches
     * @param {boolean} [perlMode=false] - activate perl/js mode (different behaviour for capture groups and special characters)
     * @returns {string}
     * @private
     */
  }, {
    key: "replace",
    value: function replace(replacement) {
      var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var perlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var res = '';
      this.reset();
      while (this.find()) {
        res += this.appendReplacement(replacement, perlMode);
        if (!all) {
          break;
        }
      }
      res += this.appendTail();
      return res;
    }
  }], [{
    key: "quoteReplacement",
    value:
    /**
     * Quotes '\' and '$' in {@code s}, so that the returned string could be used in
     * {@link #appendReplacement} as a literal replacement of {@code s}.
     *
     * @param {string} str the string to be quoted
     * @returns {string} the quoted string
     */
    function quoteReplacement(str) {
      if (str.indexOf('\\') < 0 && str.indexOf('$') < 0) {
        return str;
      }
      return str.split('').map(function (s) {
        var c = s.codePointAt(0);
        if (c === Codepoint.CODES['\\'] || c === Codepoint.CODES['$']) {
          return "\\".concat(s);
        }
        return s;
      }).join('');
    }
  }]);
}();

var $$b = _export;
var fill = arrayFill$1;
var addToUnscopables = addToUnscopables$3;

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$$b({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');

var call$3 = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject$1 = anObject$h;
var isNullOrUndefined = isNullOrUndefined$8;
var toLength$1 = toLength$9;
var toString$4 = toString$b;
var requireObjectCoercible$3 = requireObjectCoercible$9;
var getMethod = getMethod$5;
var advanceStringIndex = advanceStringIndex$2;
var regExpExec = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$3(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call$3(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$4(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$1(this);
      var S = toString$4(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString$4(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

/**
 * MachineInput abstracts different representations of the input text supplied to the Machine. It
 * provides one-character lookahead.
 */
var MachineInputBase = /*#__PURE__*/function () {
  function MachineInputBase() {
    _classCallCheck(this, MachineInputBase);
  }
  return _createClass(MachineInputBase, [{
    key: "canCheckPrefix",
    value:
    // can we look ahead without losing info?
    function canCheckPrefix() {
      return true;
    }

    // Returns the end position in the same units as step().
  }, {
    key: "endPos",
    value: function endPos() {
      return this.end;
    }
  }], [{
    key: "EOF",
    value: function EOF() {
      return -1 << 3;
    }
  }]);
}(); // An implementation of MachineInput for UTF-8 byte arrays.
// |pos| and |width| are byte indices.
var MachineUTF8Input = /*#__PURE__*/function (_MachineInputBase) {
  function MachineUTF8Input(bytes) {
    var _this;
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bytes.length;
    _classCallCheck(this, MachineUTF8Input);
    _this = _callSuper(this, MachineUTF8Input);
    _this.bytes = bytes;
    _this.start = start;
    _this.end = end;
    return _this;
  }

  // Returns the rune at the specified index; the units are
  // unspecified, but could be UTF-8 byte, UTF-16 char, or rune
  // indices.  Returns the width (in the same units) of the rune in
  // the lower 3 bits, and the rune (Unicode code point) in the high
  // bits.  Never negative, except for EOF which is represented as -1
  // << 3 | 0.
  _inherits(MachineUTF8Input, _MachineInputBase);
  return _createClass(MachineUTF8Input, [{
    key: "step",
    value: function step(i) {
      i += this.start;
      if (i >= this.end) {
        return MachineInputBase.EOF();
      }
      var x = this.bytes[i++] & 255;
      if ((x & 128) === 0) {
        return x << 3 | 1;
      } else if ((x & 224) === 192) {
        x = x & 31;
        if (i >= this.end) {
          return MachineInputBase.EOF();
        }
        x = x << 6 | this.bytes[i++] & 63;
        return x << 3 | 2;
      } else if ((x & 240) === 224) {
        x = x & 15;
        if (i + 1 >= this.end) {
          return MachineInputBase.EOF();
        }
        x = x << 6 | this.bytes[i++] & 63;
        x = x << 6 | this.bytes[i++] & 63;
        return x << 3 | 3;
      } else {
        x = x & 7;
        if (i + 2 >= this.end) {
          return MachineInputBase.EOF();
        }
        x = x << 6 | this.bytes[i++] & 63;
        x = x << 6 | this.bytes[i++] & 63;
        x = x << 6 | this.bytes[i++] & 63;
        return x << 3 | 4;
      }
    }

    // Returns the index relative to |pos| at which |re2.prefix| is found
    // in this input stream, or a negative value if not found.
  }, {
    key: "index",
    value: function index(re2, pos) {
      pos += this.start;
      var i = this.indexOf(this.bytes, re2.prefixUTF8, pos);
      return i < 0 ? i : i - pos;
    }

    // Returns a bitmask of EMPTY_* flags.
  }, {
    key: "context",
    value: function context(pos) {
      pos += this.start;
      var r1 = -1;
      if (pos > this.start && pos <= this.end) {
        var start = pos - 1;
        r1 = this.bytes[start--];
        if (r1 >= 128) {
          var lim = pos - 4;
          if (lim < this.start) {
            lim = this.start;
          }
          while (start >= lim && (this.bytes[start] & 192) === 128) {
            start--;
          }
          if (start < this.start) {
            start = this.start;
          }
          r1 = this.step(start) >> 3;
        }
      }
      var r2 = pos < this.end ? this.step(pos) >> 3 : -1;
      return Utils.emptyOpContext(r1, r2);
    }

    // Returns the index of the first occurrence of array |target| within
    // array |source| after |fromIndex|, or -1 if not found.
  }, {
    key: "indexOf",
    value: function indexOf(source, target) {
      var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var targetLength = target.length;
      if (targetLength === 0) {
        return -1;
      }
      var sourceLength = source.length;
      for (var i = fromIndex; i <= sourceLength - targetLength; i++) {
        for (var j = 0; j < targetLength; j++) {
          if (source[i + j] !== target[j]) {
            break;
          } else if (j === targetLength - 1) {
            return i;
          }
        }
      }
      return -1;
    }
  }]);
}(MachineInputBase); // |pos| and |width| are in JS "char" units.
var MachineUTF16Input = /*#__PURE__*/function (_MachineInputBase2) {
  function MachineUTF16Input(charSequence) {
    var _this2;
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : charSequence.length;
    _classCallCheck(this, MachineUTF16Input);
    _this2 = _callSuper(this, MachineUTF16Input);
    _this2.charSequence = charSequence;
    _this2.start = start;
    _this2.end = end;
    return _this2;
  }

  // Returns the rune at the specified index; the units are
  // unspecified, but could be UTF-8 byte, UTF-16 char, or rune
  // indices.  Returns the width (in the same units) of the rune in
  // the lower 3 bits, and the rune (Unicode code point) in the high
  // bits.  Never negative, except for EOF which is represented as -1
  // << 3 | 0.
  _inherits(MachineUTF16Input, _MachineInputBase2);
  return _createClass(MachineUTF16Input, [{
    key: "step",
    value: function step(pos) {
      pos += this.start;
      if (pos < this.end) {
        var rune = this.charSequence.codePointAt(pos);
        return rune << 3 | Utils.charCount(rune);
      } else {
        return MachineInputBase.EOF();
      }
    }

    // Returns the index relative to |pos| at which |re2.prefix| is found
    // in this input stream, or a negative value if not found.
  }, {
    key: "index",
    value: function index(re2, pos) {
      pos += this.start;
      var i = this.charSequence.indexOf(re2.prefix, pos);
      return i < 0 ? i : i - pos;
    }

    // Returns a bitmask of EMPTY_* flags.
  }, {
    key: "context",
    value: function context(pos) {
      pos += this.start;
      var r1 = pos > 0 && pos <= this.charSequence.length ? this.charSequence.codePointAt(pos - 1) : -1;
      var r2 = pos < this.charSequence.length ? this.charSequence.codePointAt(pos) : -1;
      return Utils.emptyOpContext(r1, r2);
    }
  }]);
}(MachineInputBase);
var MachineInput = /*#__PURE__*/function () {
  function MachineInput() {
    _classCallCheck(this, MachineInput);
  }
  return _createClass(MachineInput, null, [{
    key: "fromUTF8",
    value: function fromUTF8(bytes) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bytes.length;
      return new MachineUTF8Input(bytes, start, end);
    }
  }, {
    key: "fromUTF16",
    value: function fromUTF16(charSequence) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : charSequence.length;
      return new MachineUTF16Input(charSequence, start, end);
    }
  }]);
}();

var globalThis$8 = globalThis_1;
var DESCRIPTORS$1 = descriptors;
var defineBuiltInAccessor = defineBuiltInAccessor$7;
var regExpFlags = regexpFlags$1;
var fails$3 = fails$G;

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp$1 = globalThis$8.RegExp;
var RegExpPrototype = RegExp$1.prototype;

var FORCED$2 = DESCRIPTORS$1 && fails$3(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp$1('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED$2) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});

/**
 * Regular expression abstract syntax tree. Produced by parser, used by compiler. NB, this
 * corresponds to {@code syntax.regexp} in the Go implementation; Go's {@code regexp} is called
 * {@code RE2} in Java.
 */
var Regexp = /*#__PURE__*/function () {
  function Regexp(op) {
    _classCallCheck(this, Regexp);
    this.op = op; // operator
    this.flags = 0; // bitmap of parse flags
    // subexpressions, if any.  Never null.
    // subs[0] is used as the freelist.
    this.subs = Regexp.emptySubs();
    this.runes = null; // matched runes, for LITERAL, CHAR_CLASS
    this.min = 0; // min for REPEAT
    this.max = 0; // max for REPEAT
    this.cap = 0; // capturing index, for CAPTURE
    this.name = null; // capturing name, for CAPTURE
    this.namedGroups = {}; // map of group name -> capturing index
  }
  return _createClass(Regexp, [{
    key: "reinit",
    value: function reinit() {
      this.flags = 0;
      this.subs = Regexp.emptySubs();
      this.runes = null;
      this.cap = 0;
      this.min = 0;
      this.max = 0;
      this.name = null;
      this.namedGroups = {};
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.appendTo();
    }

    // appendTo() appends the Perl syntax for |this| regular expression to out
  }, {
    key: "appendTo",
    value: function appendTo() {
      var out = '';
      switch (this.op) {
        case Regexp.Op.NO_MATCH:
          out += '[^\\x00-\\x{10FFFF}]';
          break;
        case Regexp.Op.EMPTY_MATCH:
          out += '(?:)';
          break;
        case Regexp.Op.STAR:
        case Regexp.Op.PLUS:
        case Regexp.Op.QUEST:
        case Regexp.Op.REPEAT:
          {
            var sub = this.subs[0];
            if (sub.op > Regexp.Op.CAPTURE || sub.op === Regexp.Op.LITERAL && sub.runes.length > 1) {
              out += "(?:".concat(sub.appendTo(), ")");
            } else {
              out += sub.appendTo();
            }
            switch (this.op) {
              case Regexp.Op.STAR:
                out += '*';
                break;
              case Regexp.Op.PLUS:
                out += '+';
                break;
              case Regexp.Op.QUEST:
                out += '?';
                break;
              case Regexp.Op.REPEAT:
                out += "{".concat(this.min);
                if (this.min !== this.max) {
                  out += ',';
                  if (this.max >= 0) {
                    out += this.max;
                  }
                }
                out += '}';
                break;
            }
            if ((this.flags & RE2Flags.NON_GREEDY) !== 0) {
              out += '?';
            }
            break;
          }
        case Regexp.Op.CONCAT:
          {
            var _iterator = _createForOfIteratorHelper(this.subs),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _sub = _step.value;
                if (_sub.op === Regexp.Op.ALTERNATE) {
                  out += "(?:".concat(_sub.appendTo(), ")");
                } else {
                  out += _sub.appendTo();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            break;
          }
        case Regexp.Op.ALTERNATE:
          {
            var sep = '';
            var _iterator2 = _createForOfIteratorHelper(this.subs),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _sub2 = _step2.value;
                out += sep;
                sep = '|';
                out += _sub2.appendTo();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            break;
          }
        case Regexp.Op.LITERAL:
          if ((this.flags & RE2Flags.FOLD_CASE) !== 0) {
            out += '(?i:';
          }
          var _iterator3 = _createForOfIteratorHelper(this.runes),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var rune = _step3.value;
              out += Utils.escapeRune(rune);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          if ((this.flags & RE2Flags.FOLD_CASE) !== 0) {
            out += ')';
          }
          break;
        case Regexp.Op.ANY_CHAR_NOT_NL:
          out += '(?-s:.)';
          break;
        case Regexp.Op.ANY_CHAR:
          out += '(?s:.)';
          break;
        case Regexp.Op.CAPTURE:
          if (this.name === null || this.name.length === 0) {
            out += '(';
          } else {
            out += "(?P<".concat(this.name, ">");
          }
          if (this.subs[0].op !== Regexp.Op.EMPTY_MATCH) {
            out += this.subs[0].appendTo();
          }
          out += ')';
          break;
        case Regexp.Op.BEGIN_TEXT:
          out += '\\A';
          break;
        case Regexp.Op.END_TEXT:
          if ((this.flags & RE2Flags.WAS_DOLLAR) !== 0) {
            out += '(?-m:$)';
          } else {
            out += '\\z';
          }
          break;
        case Regexp.Op.BEGIN_LINE:
          out += '^';
          break;
        case Regexp.Op.END_LINE:
          out += '$';
          break;
        case Regexp.Op.WORD_BOUNDARY:
          out += '\\b';
          break;
        case Regexp.Op.NO_WORD_BOUNDARY:
          out += '\\B';
          break;
        case Regexp.Op.CHAR_CLASS:
          if (this.runes.length % 2 !== 0) {
            out += '[invalid char class]';
            break;
          }
          out += '[';
          if (this.runes.length === 0) {
            out += '^\\x00-\\x{10FFFF}';
          } else if (this.runes[0] === 0 && this.runes[this.runes.length - 1] === Unicode.MAX_RUNE) {
            out += '^';
            for (var i = 1; i < this.runes.length - 1; i += 2) {
              var lo = this.runes[i] + 1;
              var hi = this.runes[i + 1] - 1;
              out += Regexp.quoteIfHyphen(lo);
              out += Utils.escapeRune(lo);
              if (lo !== hi) {
                out += '-';
                out += Regexp.quoteIfHyphen(hi);
                out += Utils.escapeRune(hi);
              }
            }
          } else {
            for (var _i = 0; _i < this.runes.length; _i += 2) {
              var _lo = this.runes[_i];
              var _hi = this.runes[_i + 1];
              out += Regexp.quoteIfHyphen(_lo);
              out += Utils.escapeRune(_lo);
              if (_lo !== _hi) {
                out += '-';
                out += Regexp.quoteIfHyphen(_hi);
                out += Utils.escapeRune(_hi);
              }
            }
          }
          out += ']';
          break;
        default:
          out += this.op;
          break;
      }
      return out;
    }

    // maxCap() walks the regexp to find the maximum capture index.
  }, {
    key: "maxCap",
    value: function maxCap() {
      var m = 0;
      if (this.op === Regexp.Op.CAPTURE) {
        m = this.cap;
      }
      if (this.subs !== null) {
        var _iterator4 = _createForOfIteratorHelper(this.subs),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var sub = _step4.value;
            var n = sub.maxCap();
            if (m < n) {
              m = n;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      return m;
    }

    // equals() returns true if this and that have identical structure.
  }, {
    key: "equals",
    value: function equals(that) {
      if (!(that !== null && that instanceof Regexp)) {
        return false;
      }
      if (this.op !== that.op) {
        return false;
      }
      switch (this.op) {
        case Regexp.Op.END_TEXT:
          {
            if ((this.flags & RE2Flags.WAS_DOLLAR) !== (that.flags & RE2Flags.WAS_DOLLAR)) {
              return false;
            }
            break;
          }
        case Regexp.Op.LITERAL:
        case Regexp.Op.CHAR_CLASS:
          {
            if (this.runes === null && that.runes === null) {
              break;
            }
            if (this.runes === null || that.runes === null) {
              return false;
            }
            if (this.runes.length !== that.runes.length) {
              return false;
            }
            for (var i = 0; i < this.runes.length; i++) {
              if (this.runes[i] !== that.runes[i]) {
                return false;
              }
            }
            break;
          }
        case Regexp.Op.ALTERNATE:
        case Regexp.Op.CONCAT:
          {
            if (this.subs.length !== that.subs.length) {
              return false;
            }
            for (var _i2 = 0; _i2 < this.subs.length; ++_i2) {
              if (!this.subs[_i2].equals(that.subs[_i2])) {
                return false;
              }
            }
            break;
          }
        case Regexp.Op.STAR:
        case Regexp.Op.PLUS:
        case Regexp.Op.QUEST:
          {
            if ((this.flags & RE2Flags.NON_GREEDY) !== (that.flags & RE2Flags.NON_GREEDY) || !this.subs[0].equals(that.subs[0])) {
              return false;
            }
            break;
          }
        case Regexp.Op.REPEAT:
          {
            if ((this.flags & RE2Flags.NON_GREEDY) !== (that.flags & RE2Flags.NON_GREEDY) || this.min !== that.min || this.max !== that.max || !this.subs[0].equals(that.subs[0])) {
              return false;
            }
            break;
          }
        case Regexp.Op.CAPTURE:
          {
            if (this.cap !== that.cap || (this.name === null ? that.name !== null : this.name !== that.name) || !this.subs[0].equals(that.subs[0])) {
              return false;
            }
            break;
          }
      }
      return true;
    }
  }], [{
    key: "isPseudoOp",
    value: function isPseudoOp(op) {
      return op >= Regexp.Op.LEFT_PAREN;
    }
  }, {
    key: "emptySubs",
    value: function emptySubs() {
      return [];
    }
  }, {
    key: "quoteIfHyphen",
    value: function quoteIfHyphen(rune) {
      if (rune === Codepoint.CODES.get('-')) {
        return '\\';
      }
      return '';
    }
  }, {
    key: "fromRegexp",
    value: function fromRegexp(re) {
      var regex = new Regexp(re.op);
      regex.flags = re.flags;
      regex.subs = re.subs;
      regex.runes = re.runes;
      regex.cap = re.cap;
      regex.min = re.min;
      regex.max = re.max;
      regex.name = re.name;
      regex.namedGroups = re.namedGroups;
      return regex;
    }
  }]);
}();
_defineProperty(Regexp, "Op", createEnum(['NO_MATCH',
// Matches no strings.
'EMPTY_MATCH',
// Matches empty string.
'LITERAL',
// Matches runes[] sequence
'CHAR_CLASS',
// Matches Runes interpreted as range pair list
'ANY_CHAR_NOT_NL',
// Matches any character except '\n'
'ANY_CHAR',
// Matches any character
'BEGIN_LINE',
// Matches empty string at end of line
'END_LINE',
// Matches empty string at end of line
'BEGIN_TEXT',
// Matches empty string at beginning of text
'END_TEXT',
// Matches empty string at end of text
'WORD_BOUNDARY',
// Matches word boundary `\b`
'NO_WORD_BOUNDARY',
// Matches word non-boundary `\B`
'CAPTURE',
// Capturing subexpr with index cap, optional name name
'STAR',
// Matches subs[0] zero or more times.
'PLUS',
// Matches subs[0] one or more times.
'QUEST',
// Matches subs[0] zero or one times.
'REPEAT',
// Matches subs[0] [min, max] times; max=-1 => no limit.
'CONCAT',
// Matches concatenation of subs[]
'ALTERNATE',
// Matches union of subs[]
// Pseudo ops, used internally by Parser for parsing stack:
'LEFT_PAREN', 'VERTICAL_BAR']));

var $$a = _export;
var fails$2 = fails$G;
var isArray = isArray$4;
var isObject$3 = isObject$n;
var toObject$1 = toObject$d;
var lengthOfArrayLike$1 = lengthOfArrayLike$j;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$3;
var createProperty$1 = createProperty$4;
var arraySpeciesCreate$1 = arraySpeciesCreate$3;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
var wellKnownSymbol$3 = wellKnownSymbol$n;
var V8_VERSION$1 = environmentV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol$3('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$2(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject$3(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$1('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$a({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$1(this);
    var A = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$1(E);
        doesNotExceedSafeInteger$1(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger$1(n + 1);
        createProperty$1(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

/**
 * A single instruction in the regular expression virtual machine.
 *
 * @see http://swtch.com/~rsc/regexp/regexp2.html
 */
var Inst = /*#__PURE__*/function () {
  function Inst(op) {
    _classCallCheck(this, Inst);
    this.op = op;
    this.out = 0; // all but MATCH, FAIL
    this.arg = 0; // ALT, ALT_MATCH, CAPTURE, EMPTY_WIDTH
    // length==1 => exact match
    // otherwise a list of [lo,hi] pairs.  hi is *inclusive*.
    this.runes = null;
  }

  // MatchRune returns true if the instruction matches (and consumes) r.
  // It should only be called when op == InstRune.
  return _createClass(Inst, [{
    key: "matchRune",
    value: function matchRune(r) {
      // Special case: single-rune slice is from literal string, not char
      // class.
      if (this.runes.length === 1) {
        var r0 = this.runes[0];
        // If this pattern is case-insensitive, apply Unicode case folding to compare the two runes.
        // Note that this may result in a case-folding loop when executed,
        // so attempt to reduce the chance of that occurring
        // by performing case folding on |r0| from the pattern rather than |r| from the input.
        if ((this.arg & RE2Flags.FOLD_CASE) !== 0) {
          return Unicode.equalsIgnoreCase(r0, r);
        }
        return r === r0;
      }
      // Peek at the first few pairs.
      // Should handle ASCII well.
      for (var j = 0; j < this.runes.length && j <= 8; j += 2) {
        if (r < this.runes[j]) {
          return false;
        }
        if (r <= this.runes[j + 1]) {
          return true;
        }
      }
      // Otherwise binary search.
      var lo = 0;
      var hi = this.runes.length / 2 | 0;
      while (lo < hi) {
        var m = lo + ((hi - lo) / 2 | 0);
        var c = this.runes[2 * m];
        if (c <= r) {
          if (r <= this.runes[2 * m + 1]) {
            return true;
          }
          lo = m + 1;
        } else {
          hi = m;
        }
      }
      return false;
    }
    /**
     *
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      switch (this.op) {
        case Inst.ALT:
          return "alt -> ".concat(this.out, ", ").concat(this.arg);
        case Inst.ALT_MATCH:
          return "altmatch -> ".concat(this.out, ", ").concat(this.arg);
        case Inst.CAPTURE:
          return "cap ".concat(this.arg, " -> ").concat(this.out);
        case Inst.EMPTY_WIDTH:
          return "empty ".concat(this.arg, " -> ").concat(this.out);
        case Inst.MATCH:
          return 'match';
        case Inst.FAIL:
          return 'fail';
        case Inst.NOP:
          return "nop -> ".concat(this.out);
        case Inst.RUNE:
          if (this.runes === null) {
            return 'rune <null>';
          }
          return ['rune ', Inst.escapeRunes(this.runes), (this.arg & RE2Flags.FOLD_CASE) !== 0 ? '/i' : '', ' -> ', this.out].join('');
        case Inst.RUNE1:
          return "rune1 ".concat(Inst.escapeRunes(this.runes), " -> ").concat(this.out);
        case Inst.RUNE_ANY:
          return "any -> ".concat(this.out);
        case Inst.RUNE_ANY_NOT_NL:
          return "anynotnl -> ".concat(this.out);
        default:
          throw new Error('unhandled case in Inst.toString');
      }
    }
  }], [{
    key: "isRuneOp",
    value: function isRuneOp(op) {
      return Inst.RUNE <= op && op <= Inst.RUNE_ANY_NOT_NL;
    }

    // Returns an RE2 expression matching exactly |runes|.
  }, {
    key: "escapeRunes",
    value: function escapeRunes(runes) {
      var out = '"';
      var _iterator = _createForOfIteratorHelper(runes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var rune = _step.value;
          out += Utils.escapeRune(rune);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      out += '"';
      return out;
    }
  }]);
}();
_defineProperty(Inst, "ALT", 1);
_defineProperty(Inst, "ALT_MATCH", 2);
_defineProperty(Inst, "CAPTURE", 3);
_defineProperty(Inst, "EMPTY_WIDTH", 4);
_defineProperty(Inst, "FAIL", 5);
_defineProperty(Inst, "MATCH", 6);
_defineProperty(Inst, "NOP", 7);
_defineProperty(Inst, "RUNE", 8);
_defineProperty(Inst, "RUNE1", 9);
_defineProperty(Inst, "RUNE_ANY", 10);
_defineProperty(Inst, "RUNE_ANY_NOT_NL", 11);

/**
 * A Prog is a compiled regular expression program.
 */
var Prog = /*#__PURE__*/function () {
  function Prog() {
    _classCallCheck(this, Prog);
    this.inst = [];
    this.start = 0; // index of start instruction
    // number of CAPTURE insts in re
    // 2 => implicit ( and ) for whole match $0
    this.numCap = 2;
  }

  // Returns the instruction at the specified pc.
  // Precondition: pc > 0 && pc < numInst().
  return _createClass(Prog, [{
    key: "getInst",
    value: function getInst(pc) {
      return this.inst[pc];
    }

    // Returns the number of instructions in this program.
  }, {
    key: "numInst",
    value: function numInst() {
      return this.inst.length;
    }

    // Adds a new instruction to this program, with operator |op| and |pc| equal
    // to |numInst()|.
  }, {
    key: "addInst",
    value: function addInst(op) {
      this.inst.push(new Inst(op));
    }

    // skipNop() follows any no-op or capturing instructions and returns the
    // resulting instruction.
  }, {
    key: "skipNop",
    value: function skipNop(pc) {
      var i = this.inst[pc];
      while (i.op === Inst.NOP || i.op === Inst.CAPTURE) {
        i = this.inst[pc];
        pc = i.out;
      }
      return i;
    }

    // prefix() returns a pair of a literal string that all matches for the
    // regexp must start with, and a boolean which is true if the prefix is the
    // entire match.  The string is returned by appending to |prefix|.
  }, {
    key: "prefix",
    value: function prefix() {
      var prefix = '';
      var i = this.skipNop(this.start);
      if (!Inst.isRuneOp(i.op) || i.runes.length !== 1) {
        return [i.op === Inst.MATCH, prefix];
      }
      while (Inst.isRuneOp(i.op) && i.runes.length === 1 && (i.arg & RE2Flags.FOLD_CASE) === 0) {
        prefix += String.fromCodePoint(i.runes[0]);
        i = this.skipNop(i.out);
      }
      return [i.op === Inst.MATCH, prefix];
    }

    // startCond() returns the leading empty-width conditions that must be true
    // in any match.  It returns -1 (all bits set) if no matches are possible.
  }, {
    key: "startCond",
    value: function startCond() {
      var flag = 0;
      var pc = this.start;
      loop: for (;;) {
        var i = this.inst[pc];
        switch (i.op) {
          case Inst.EMPTY_WIDTH:
            flag |= i.arg;
            break;
          case Inst.FAIL:
            return -1;
          case Inst.CAPTURE:
          case Inst.NOP:
            break;
          default:
            break loop;
        }
        pc = i.out;
      }
      return flag;
    }

    // --- Patch list ---

    // A patchlist is a list of instruction pointers that need to be filled in
    // (patched).  Because the pointers haven't been filled in yet, we can reuse
    // their storage to hold the list.  It's kind of sleazy, but works well in
    // practice.  See http://swtch.com/~rsc/regexp/regexp1.html for inspiration.

    // These aren't really pointers: they're integers, so we can reinterpret them
    // this way without using package unsafe.  A value l denotes p.inst[l>>1].out
    // (l&1==0) or .arg (l&1==1).  l == 0 denotes the empty list, okay because we
    // start every program with a fail instruction, so we'll never want to point
    // at its output link.
  }, {
    key: "next",
    value: function next(l) {
      var i = this.inst[l >> 1];
      if ((l & 1) === 0) {
        return i.out;
      }
      return i.arg;
    }
  }, {
    key: "patch",
    value: function patch(l, val) {
      while (l !== 0) {
        var i = this.inst[l >> 1];
        if ((l & 1) === 0) {
          l = i.out;
          i.out = val;
        } else {
          l = i.arg;
          i.arg = val;
        }
      }
    }
  }, {
    key: "append",
    value: function append(l1, l2) {
      if (l1 === 0) {
        return l2;
      }
      if (l2 === 0) {
        return l1;
      }
      var last = l1;
      for (;;) {
        var next = this.next(last);
        if (next === 0) {
          break;
        }
        last = next;
      }
      var i = this.inst[last >> 1];
      if ((last & 1) === 0) {
        i.out = l2;
      } else {
        i.arg = l2;
      }
      return l1;
    }
    /**
     *
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      var out = '';
      for (var pc = 0; pc < this.inst.length; pc++) {
        var len = out.length;
        out += pc;
        if (pc === this.start) {
          out += '*';
        }
        out += '        '.substring(out.length - len);
        out += this.inst[pc];
        out += '\n';
      }
      return out;
    }
  }]);
}();

/**
 * A fragment of a compiled regular expression program.
 *
 * @see http://swtch.com/~rsc/regexp/regexp1.html
 * @class
 */
var Frag = /*#__PURE__*/_createClass(function Frag() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var nullable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  _classCallCheck(this, Frag);
  this.i = i; // an instruction address (pc).
  this.out = out; // a patch list; see explanation in Prog.js
  this.nullable = nullable; // whether the fragment can match the empty string
});
/**
 * Compiler from {@code Regexp} (RE2 abstract syntax) to {@code RE2} (compiled regular expression).
 *
 * The only entry point is {@link #compileRegexp}.
 */
var Compiler = /*#__PURE__*/function () {
  function Compiler() {
    _classCallCheck(this, Compiler);
    this.prog = new Prog();
    this.newInst(Inst.FAIL);
  }
  return _createClass(Compiler, [{
    key: "newInst",
    value: function newInst(op) {
      this.prog.addInst(op);
      return new Frag(this.prog.numInst() - 1, 0, true);
    }

    // Returns a no-op fragment.  Sometimes unavoidable.
  }, {
    key: "nop",
    value: function nop() {
      var f = this.newInst(Inst.NOP);
      f.out = f.i << 1;
      return f;
    }
  }, {
    key: "fail",
    value: function fail() {
      return new Frag();
    }

    // Given fragment a, returns (a) capturing as \n.
    // Given a fragment a, returns a fragment with capturing parens around a.
  }, {
    key: "cap",
    value: function cap(arg) {
      var f = this.newInst(Inst.CAPTURE);
      f.out = f.i << 1;
      this.prog.getInst(f.i).arg = arg;
      if (this.prog.numCap < arg + 1) {
        this.prog.numCap = arg + 1;
      }
      return f;
    }

    // Given fragments a and b, returns ab; a|b
  }, {
    key: "cat",
    value: function cat(f1, f2) {
      // concat of failure is failure
      if (f1.i === 0 || f2.i === 0) {
        return this.fail();
      }
      // eslint-disable-next-line no-warning-comments
      // TODO(rsc): elide nop
      this.prog.patch(f1.out, f2.i);
      return new Frag(f1.i, f2.out, f1.nullable && f2.nullable);
    }

    // Given fragments for a and b, returns fragment for a|b.
  }, {
    key: "alt",
    value: function alt(f1, f2) {
      // alt of failure is other
      if (f1.i === 0) {
        return f2;
      }
      if (f2.i === 0) {
        return f1;
      }
      var f = this.newInst(Inst.ALT);
      var i = this.prog.getInst(f.i);
      i.out = f1.i;
      i.arg = f2.i;
      f.out = this.prog.append(f1.out, f2.out);
      f.nullable = f1.nullable || f2.nullable;
      return f;
    }

    // loop returns the fragment for the main loop of a plus or star.
    // For plus, it can be used directly. with f1.i as the entry.
    // For star, it can be used directly when f1 can't match an empty string.
    // (When f1 can match an empty string, f1* must be implemented as (f1+)?
    // to get the priority match order correct.)
  }, {
    key: "loop",
    value: function loop(f1, nongreedy) {
      var f = this.newInst(Inst.ALT);
      var i = this.prog.getInst(f.i);
      if (nongreedy) {
        i.arg = f1.i;
        f.out = f.i << 1;
      } else {
        i.out = f1.i;
        f.out = f.i << 1 | 1;
      }
      this.prog.patch(f1.out, f.i);
      return f;
    }

    // Given a fragment for a, returns a fragment for a? or a?? (if nongreedy)
  }, {
    key: "quest",
    value: function quest(f1, nongreedy) {
      var f = this.newInst(Inst.ALT);
      var i = this.prog.getInst(f.i);
      if (nongreedy) {
        i.arg = f1.i;
        f.out = f.i << 1;
      } else {
        i.out = f1.i;
        f.out = f.i << 1 | 1;
      }
      f.out = this.prog.append(f.out, f1.out);
      return f;
    }

    // Given a fragment a, returns a fragment for a* or a*? (if nongreedy)
  }, {
    key: "star",
    value: function star(f1, nongreedy) {
      if (f1.nullable) {
        return this.quest(this.plus(f1, nongreedy), nongreedy);
      }
      return this.loop(f1, nongreedy);
    }

    // Given a fragment for a, returns a fragment for a+ or a+? (if nongreedy)
  }, {
    key: "plus",
    value: function plus(f1, nongreedy) {
      return new Frag(f1.i, this.loop(f1, nongreedy).out, f1.nullable);
    }

    // op is a bitmask of EMPTY_* flags.
  }, {
    key: "empty",
    value: function empty(op) {
      var f = this.newInst(Inst.EMPTY_WIDTH);
      this.prog.getInst(f.i).arg = op;
      f.out = f.i << 1;
      return f;
    }

    // flags : parser flags
  }, {
    key: "rune",
    value: function rune(runes, flags) {
      var f = this.newInst(Inst.RUNE);
      f.nullable = false;
      var i = this.prog.getInst(f.i);
      i.runes = runes;
      flags &= RE2Flags.FOLD_CASE;
      if (runes.length !== 1 || Unicode.simpleFold(runes[0]) === runes[0]) {
        flags &= ~RE2Flags.FOLD_CASE;
      }
      i.arg = flags;
      f.out = f.i << 1;
      if ((flags & RE2Flags.FOLD_CASE) === 0 && runes.length === 1 || runes.length === 2 && runes[0] === runes[1]) {
        i.op = Inst.RUNE1;
      } else if (runes.length === 2 && runes[0] === 0 && runes[1] === Unicode.MAX_RUNE) {
        i.op = Inst.RUNE_ANY;
      } else if (runes.length === 4 && runes[0] === 0 && runes[1] === Codepoint.CODES.get('\n') - 1 && runes[2] === Codepoint.CODES.get('\n') + 1 && runes[3] === Unicode.MAX_RUNE) {
        i.op = Inst.RUNE_ANY_NOT_NL;
      }
      return f;
    }
  }, {
    key: "compile",
    value: function compile(re) {
      switch (re.op) {
        case Regexp.Op.NO_MATCH:
          return this.fail();
        case Regexp.Op.EMPTY_MATCH:
          return this.nop();
        case Regexp.Op.LITERAL:
          if (re.runes.length === 0) {
            return this.nop();
          } else {
            var f = null;
            var _iterator = _createForOfIteratorHelper(re.runes),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var r = _step.value;
                var f1 = this.rune([r], re.flags);
                f = f === null ? f1 : this.cat(f, f1);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return f;
          }
        case Regexp.Op.CHAR_CLASS:
          return this.rune(re.runes, re.flags);
        case Regexp.Op.ANY_CHAR_NOT_NL:
          return this.rune(Compiler.ANY_RUNE_NOT_NL(), 0);
        case Regexp.Op.ANY_CHAR:
          return this.rune(Compiler.ANY_RUNE(), 0);
        case Regexp.Op.BEGIN_LINE:
          return this.empty(Utils.EMPTY_BEGIN_LINE);
        case Regexp.Op.END_LINE:
          return this.empty(Utils.EMPTY_END_LINE);
        case Regexp.Op.BEGIN_TEXT:
          return this.empty(Utils.EMPTY_BEGIN_TEXT);
        case Regexp.Op.END_TEXT:
          return this.empty(Utils.EMPTY_END_TEXT);
        case Regexp.Op.WORD_BOUNDARY:
          return this.empty(Utils.EMPTY_WORD_BOUNDARY);
        case Regexp.Op.NO_WORD_BOUNDARY:
          return this.empty(Utils.EMPTY_NO_WORD_BOUNDARY);
        case Regexp.Op.CAPTURE:
          {
            var bra = this.cap(re.cap << 1);
            var sub = this.compile(re.subs[0]);
            var ket = this.cap(re.cap << 1 | 1);
            return this.cat(this.cat(bra, sub), ket);
          }
        case Regexp.Op.STAR:
          return this.star(this.compile(re.subs[0]), (re.flags & RE2Flags.NON_GREEDY) !== 0);
        case Regexp.Op.PLUS:
          return this.plus(this.compile(re.subs[0]), (re.flags & RE2Flags.NON_GREEDY) !== 0);
        case Regexp.Op.QUEST:
          return this.quest(this.compile(re.subs[0]), (re.flags & RE2Flags.NON_GREEDY) !== 0);
        case Regexp.Op.CONCAT:
          {
            if (re.subs.length === 0) {
              return this.nop();
            } else {
              var _f = null;
              var _iterator2 = _createForOfIteratorHelper(re.subs),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _sub = _step2.value;
                  var _f2 = this.compile(_sub);
                  _f = _f === null ? _f2 : this.cat(_f, _f2);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              return _f;
            }
          }
        case Regexp.Op.ALTERNATE:
          {
            if (re.subs.length === 0) {
              return this.nop();
            } else {
              var _f3 = null;
              var _iterator3 = _createForOfIteratorHelper(re.subs),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _sub2 = _step3.value;
                  var _f4 = this.compile(_sub2);
                  _f3 = _f3 === null ? _f4 : this.alt(_f3, _f4);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              return _f3;
            }
          }
        default:
          throw new RE2JSCompileException('regexp: unhandled case in compile');
      }
    }
  }], [{
    key: "ANY_RUNE_NOT_NL",
    value: function ANY_RUNE_NOT_NL() {
      return [0, Codepoint.CODES.get('\n') - 1, Codepoint.CODES.get('\n') + 1, Unicode.MAX_RUNE];
    }
  }, {
    key: "ANY_RUNE",
    value: function ANY_RUNE() {
      return [0, Unicode.MAX_RUNE];
    }
  }, {
    key: "compileRegexp",
    value: function compileRegexp(re) {
      var c = new Compiler();
      var f = c.compile(re);
      c.prog.patch(f.out, c.newInst(Inst.MATCH).i);
      c.prog.start = f.i;
      return c.prog;
    }
  }]);
}();

var Simplify = /*#__PURE__*/function () {
  function Simplify() {
    _classCallCheck(this, Simplify);
  }
  return _createClass(Simplify, null, [{
    key: "simplify",
    value:
    // Simplify returns a regexp equivalent to re but without counted
    // repetitions and with various other simplifications, such as
    // rewriting /(?:a+)+/ to /a+/.  The resulting regexp will execute
    // correctly but its string representation will not produce the same
    // parse tree, because capturing parentheses may have been duplicated
    // or removed.  For example, the simplified form for /(x){1,2}/ is
    // /(x)(x)?/ but both parentheses capture as $1.  The returned regexp
    // may share structure with or be the original.
    function simplify(re) {
      if (re === null) {
        return null;
      }
      switch (re.op) {
        case Regexp.Op.CAPTURE:
        case Regexp.Op.CONCAT:
        case Regexp.Op.ALTERNATE:
          {
            var nre = re;
            for (var i = 0; i < re.subs.length; i++) {
              var sub = re.subs[i];
              var nsub = Simplify.simplify(sub);
              if (nre === re && nsub !== sub) {
                nre = Regexp.fromRegexp(re);
                nre.runes = null;
                nre.subs = re.subs.slice(0, re.subs.length);
              }
              if (nre !== re) {
                nre.subs[i] = nsub;
              }
            }
            return nre;
          }
        case Regexp.Op.STAR:
        case Regexp.Op.PLUS:
        case Regexp.Op.QUEST:
          {
            var _sub = Simplify.simplify(re.subs[0]);
            return Simplify.simplify1(re.op, re.flags, _sub, re);
          }
        case Regexp.Op.REPEAT:
          {
            // Special special case: x{0} matches the empty string
            // and doesn't even need to consider x.
            if (re.min === 0 && re.max === 0) {
              return new Regexp(Regexp.Op.EMPTY_MATCH);
            }
            // The fun begins.
            var _sub2 = Simplify.simplify(re.subs[0]);

            // x{n,} means at least n matches of x.
            if (re.max === -1) {
              // Special case: x{0,} is x*.
              if (re.min === 0) {
                return Simplify.simplify1(Regexp.Op.STAR, re.flags, _sub2, null);
              }
              // Special case: x{1,} is x+.
              if (re.min === 1) {
                return Simplify.simplify1(Regexp.Op.PLUS, re.flags, _sub2, null);
              }
              // General case: x{4,} is xxxx+.
              var _nre = new Regexp(Regexp.Op.CONCAT);
              var subs = [];
              for (var _i = 0; _i < re.min - 1; _i++) {
                subs.push(_sub2);
              }
              subs.push(Simplify.simplify1(Regexp.Op.PLUS, re.flags, _sub2, null));
              _nre.subs = subs.slice(0);
              return _nre;
            }
            // Special case x{0} handled above.

            // Special case: x{1} is just x.
            if (re.min === 1 && re.max === 1) {
              return _sub2;
            }

            // General case: x{n,m} means n copies of x and m copies of x?
            // The machine will do less work if we nest the final m copies,
            // so that x{2,5} = xx(x(x(x)?)?)?

            // Build leading prefix: xx.
            var prefixSubs = null;
            if (re.min > 0) {
              prefixSubs = [];
              for (var _i2 = 0; _i2 < re.min; _i2++) {
                prefixSubs.push(_sub2);
              }
            }

            // Build and attach suffix: (x(x(x)?)?)?
            if (re.max > re.min) {
              var suffix = Simplify.simplify1(Regexp.Op.QUEST, re.flags, _sub2, null);
              for (var _i3 = re.min + 1; _i3 < re.max; _i3++) {
                var nre2 = new Regexp(Regexp.Op.CONCAT);
                nre2.subs = [_sub2, suffix];
                suffix = Simplify.simplify1(Regexp.Op.QUEST, re.flags, nre2, null);
              }
              if (prefixSubs === null) {
                return suffix;
              }
              prefixSubs.push(suffix);
            }
            if (prefixSubs !== null) {
              var prefix = new Regexp(Regexp.Op.CONCAT);
              prefix.subs = prefixSubs.slice(0);
              return prefix;
            }

            // Some degenerate case like min > max or min < max < 0.
            // Handle as impossible match.
            return new Regexp(Regexp.Op.NO_MATCH);
          }
      }
      return re;
    }

    // simplify1 implements Simplify for the unary OpStar,
    // OpPlus, and OpQuest operators.  It returns the simple regexp
    // equivalent to
    //
    //      Regexp{Op: op, Flags: flags, Sub: {sub}}
    //
    // under the assumption that sub is already simple, and
    // without first allocating that structure.  If the regexp
    // to be returned turns out to be equivalent to re, simplify1
    // returns re instead.
    //
    // simplify1 is factored out of Simplify because the implementation
    // for other operators generates these unary expressions.
    // Letting them call simplify1 makes sure the expressions they
    // generate are simple.
  }, {
    key: "simplify1",
    value: function simplify1(op, flags, sub, re) {
      // Special case: repeat the empty string as much as
      // you want, but it's still the empty string.
      if (sub.op === Regexp.Op.EMPTY_MATCH) {
        return sub;
      }

      // The operators are idempotent if the flags match.
      if (op === sub.op && (flags & RE2Flags.NON_GREEDY) === (sub.flags & RE2Flags.NON_GREEDY)) {
        return sub;
      }
      if (re !== null && re.op === op && (re.flags & RE2Flags.NON_GREEDY) === (flags & RE2Flags.NON_GREEDY) && sub === re.subs[0]) {
        return re;
      }
      re = new Regexp(op);
      re.flags = flags;
      re.subs = [sub];
      return re;
    }
  }]);
}();

var $$9 = _export;
var toObject = toObject$d;
var toAbsoluteIndex = toAbsoluteIndex$8;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$d;
var lengthOfArrayLike = lengthOfArrayLike$j;
var setArrayLength = arraySetLength;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$3;
var arraySpeciesCreate = arraySpeciesCreate$3;
var createProperty = createProperty$4;
var deletePropertyOrThrow = deletePropertyOrThrow$2;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min$1 = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$$9({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$1(max(toIntegerOrInfinity$1(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$2 = functionUncurryThis;
var requireObjectCoercible$2 = requireObjectCoercible$9;
var toString$3 = toString$b;
var whitespaces$1 = whitespaces$2;

var replace = uncurryThis$2(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$3(requireObjectCoercible$2($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var globalThis$7 = globalThis_1;
var fails$1 = fails$G;
var uncurryThis$1 = functionUncurryThis;
var toString$2 = toString$b;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;

var charAt = uncurryThis$1(''.charAt);
var $parseFloat$1 = globalThis$7.parseFloat;
var Symbol$1 = globalThis$7.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var FORCED = 1 / $parseFloat$1(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails$1(function () { $parseFloat$1(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
var numberParseFloat = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString$2(string));
  var result = $parseFloat$1(trimmedString);
  return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
} : $parseFloat$1;

var $$8 = _export;
var $parseFloat = numberParseFloat;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$$8({ global: true, forced: parseFloat !== $parseFloat }, {
  parseFloat: $parseFloat
});

var $TypeError$2 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw new $TypeError$2('Not enough arguments');
  return passed;
};

var userAgent$2 = environmentUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var globalThis$6 = globalThis_1;
var apply = functionApply;
var bind$2 = functionBindContext;
var isCallable$3 = isCallable$o;
var hasOwn = hasOwnProperty_1;
var fails = fails$G;
var html = html$2;
var arraySlice = arraySlice$6;
var createElement = documentCreateElement$1;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = environmentIsIos;
var IS_NODE$2 = environmentIsNode;

var set = globalThis$6.setImmediate;
var clear = globalThis$6.clearImmediate;
var process$2 = globalThis$6.process;
var Dispatch = globalThis$6.Dispatch;
var Function$1 = globalThis$6.Function;
var MessageChannel = globalThis$6.MessageChannel;
var String$1 = globalThis$6.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis$6.location;
});

var run = function (id) {
  if (hasOwn(queue$2, id)) {
    var fn = queue$2[id];
    delete queue$2[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  globalThis$6.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$3(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$2[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  // Node.js 0.8-
  if (IS_NODE$2) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$2(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    globalThis$6.addEventListener &&
    isCallable$3(globalThis$6.postMessage) &&
    !globalThis$6.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis$6.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var globalThis$5 = globalThis_1;
var DESCRIPTORS = descriptors;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn$1 = function (name) {
  if (!DESCRIPTORS) return globalThis$5[name];
  var descriptor = getOwnPropertyDescriptor$1(globalThis$5, name);
  return descriptor && descriptor.value;
};

var Queue$3 = function () {
  this.head = null;
  this.tail = null;
};

Queue$3.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

var queue$1 = Queue$3;

var userAgent$1 = environmentUserAgent;

var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

var userAgent = environmentUserAgent;

var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

var globalThis$4 = globalThis_1;
var safeGetBuiltIn = safeGetBuiltIn$1;
var bind$1 = functionBindContext;
var macrotask = task$1.set;
var Queue$2 = queue$1;
var IS_IOS = environmentIsIos;
var IS_IOS_PEBBLE = environmentIsIosPebble;
var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
var IS_NODE$1 = environmentIsNode;

var MutationObserver = globalThis$4.MutationObserver || globalThis$4.WebKitMutationObserver;
var document$2 = globalThis$4.document;
var process$1 = globalThis$4.process;
var Promise$1 = globalThis$4.Promise;
var microtask$1 = safeGetBuiltIn('queueMicrotask');
var notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$2();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$1(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$1) {
    notify$1 = function () {
      process$1.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$1(macrotask, globalThis$4);
    notify$1 = function () {
      macrotask(flush);
    };
  }

  microtask$1 = function (fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}

var microtask_1 = microtask$1;

var hostReportErrors$1 = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var globalThis$3 = globalThis_1;

var promiseNativeConstructor = globalThis$3.Promise;

var globalThis$2 = globalThis_1;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$2 = isCallable$o;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$2 = wellKnownSymbol$n;
var ENVIRONMENT = environment;
var V8_VERSION = environmentV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES = wellKnownSymbol$2('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$2(globalThis$2.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$3 = aCallable$b;

var $TypeError$1 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError$1('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$3(resolve);
  this.reject = aCallable$3(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$7 = _export;
var IS_NODE = environmentIsNode;
var globalThis$1 = globalThis_1;
var call$2 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$c;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$5;
var setSpecies = setSpecies$4;
var aCallable$2 = aCallable$b;
var isCallable$1 = isCallable$o;
var isObject$2 = isObject$n;
var anInstance = anInstance$5;
var speciesConstructor = speciesConstructor$3;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue$1 = queue$1;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = globalThis$1.TypeError;
var document$1 = globalThis$1.document;
var process = globalThis$1.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$1.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$2(it) && isCallable$1(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$2(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis$1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$1['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$2(task, globalThis$1, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$2(task, globalThis$1, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$2(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$2(executor);
    call$2(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue$1(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$1(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$1(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$1(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$2(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$7({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$6 = _export;
var call$1 = functionCall;
var aCallable$1 = aCallable$b;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$4;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$6({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$1($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$5 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$8;
var isCallable = isCallable$o;
var defineBuiltIn = defineBuiltIn$c;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$5({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$4 = _export;
var call = functionCall;
var aCallable = aCallable$b;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$4;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$4({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$3 = _export;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$3({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});

var anObject = anObject$h;
var isObject$1 = isObject$n;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject(C);
  if (isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$2 = _export;
var getBuiltIn = getBuiltIn$8;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$2({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

var toIntegerOrInfinity = toIntegerOrInfinity$d;
var toString$1 = toString$b;
var requireObjectCoercible$1 = requireObjectCoercible$9;

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString$1(requireObjectCoercible$1(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

var $$1 = _export;
var repeat = stringRepeat;

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$$1({ target: 'String', proto: true }, {
  repeat: repeat
});

var isObject = isObject$n;
var classof = classofRaw$2;
var wellKnownSymbol$1 = wellKnownSymbol$n;

var MATCH$1 = wellKnownSymbol$1('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol = wellKnownSymbol$n;

var MATCH = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $ = _export;
var uncurryThis = functionUncurryThisClause;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var toLength = toLength$9;
var toString = toString$b;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$9;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return stringSlice(that, index, index + search.length) === search;
  }
});

// GENERATED BY tools/scripts/make_perl_groups.pl; DO NOT EDIT.
// ./tools/scripts/make_perl_groups.pl  > src/CharGroup.js
var CharGroup = /*#__PURE__*/_createClass(function CharGroup(sign, cls) {
  _classCallCheck(this, CharGroup);
  this.sign = sign;
  this.cls = cls;
});
var code1 = [0x30, 0x39];
var code2 = [0x9, 0xa, 0xc, 0xd, 0x20, 0x20];
var code3 = [0x30, 0x39, 0x41, 0x5a, 0x5f, 0x5f, 0x61, 0x7a];
var PERL_GROUPS = new Map([['\\d', new CharGroup(+1, code1)], ['\\D', new CharGroup(-1, code1)], ['\\s', new CharGroup(+1, code2)], ['\\S', new CharGroup(-1, code2)], ['\\w', new CharGroup(+1, code3)], ['\\W', new CharGroup(-1, code3)]]);
var code4 = [0x30, 0x39, 0x41, 0x5a, 0x61, 0x7a];
var code5 = [0x41, 0x5a, 0x61, 0x7a];
var code6 = [0x0, 0x7f];
var code7 = [0x9, 0x9, 0x20, 0x20];
var code8 = [0x0, 0x1f, 0x7f, 0x7f];
var code9 = [0x30, 0x39];
var code10 = [0x21, 0x7e];
var code11 = [0x61, 0x7a];
var code12 = [0x20, 0x7e];
var code13 = [0x21, 0x2f, 0x3a, 0x40, 0x5b, 0x60, 0x7b, 0x7e];
var code14 = [0x9, 0xd, 0x20, 0x20];
var code15 = [0x41, 0x5a];
var code16 = [0x30, 0x39, 0x41, 0x5a, 0x5f, 0x5f, 0x61, 0x7a];
var code17 = [0x30, 0x39, 0x41, 0x46, 0x61, 0x66];
var POSIX_GROUPS = new Map([['[:alnum:]', new CharGroup(+1, code4)], ['[:^alnum:]', new CharGroup(-1, code4)], ['[:alpha:]', new CharGroup(+1, code5)], ['[:^alpha:]', new CharGroup(-1, code5)], ['[:ascii:]', new CharGroup(+1, code6)], ['[:^ascii:]', new CharGroup(-1, code6)], ['[:blank:]', new CharGroup(+1, code7)], ['[:^blank:]', new CharGroup(-1, code7)], ['[:cntrl:]', new CharGroup(+1, code8)], ['[:^cntrl:]', new CharGroup(-1, code8)], ['[:digit:]', new CharGroup(+1, code9)], ['[:^digit:]', new CharGroup(-1, code9)], ['[:graph:]', new CharGroup(+1, code10)], ['[:^graph:]', new CharGroup(-1, code10)], ['[:lower:]', new CharGroup(+1, code11)], ['[:^lower:]', new CharGroup(-1, code11)], ['[:print:]', new CharGroup(+1, code12)], ['[:^print:]', new CharGroup(-1, code12)], ['[:punct:]', new CharGroup(+1, code13)], ['[:^punct:]', new CharGroup(-1, code13)], ['[:space:]', new CharGroup(+1, code14)], ['[:^space:]', new CharGroup(-1, code14)], ['[:upper:]', new CharGroup(+1, code15)], ['[:^upper:]', new CharGroup(-1, code15)], ['[:word:]', new CharGroup(+1, code16)], ['[:^word:]', new CharGroup(-1, code16)], ['[:xdigit:]', new CharGroup(+1, code17)], ['[:^xdigit:]', new CharGroup(-1, code17)]]);

/**
 * A "builder"-style helper class for manipulating character classes represented as an array of
 * pairs of runes [lo, hi], each denoting an inclusive interval.
 *
 * All methods mutate the internal state and return {@code this}, allowing operations to be chained.
 */
var CharClass = /*#__PURE__*/function () {
  function CharClass() {
    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Utils.emptyInts();
    _classCallCheck(this, CharClass);
    this.r = r; // inclusive ranges, pairs of [lo,hi].  r.length is even.
    this.len = r.length; // prefix of |r| that is defined.  Even.
  }

  // Returns the character class as an int array.  Subsequent CharClass
  // operations may mutate this array, so typically this is the last operation
  // performed on a given CharClass instance.
  return _createClass(CharClass, [{
    key: "toArray",
    value: function toArray() {
      if (this.len === this.r.length) {
        return this.r;
      } else {
        return this.r.slice(0, this.len);
      }
    }

    // cleanClass() sorts the ranges (pairs of elements) of this CharClass,
    // merges them, and eliminates duplicates.
  }, {
    key: "cleanClass",
    value: function cleanClass() {
      if (this.len < 4) {
        return this;
      }
      // Sort by lo increasing, hi decreasing to break ties.
      CharClass.qsortIntPair(this.r, 0, this.len - 2);
      // Merge abutting, overlapping.
      var w = 2; // write index
      for (var i = 2; i < this.len; i += 2) {
        {
          var lo = this.r[i];
          var hi = this.r[i + 1];
          if (lo <= this.r[w - 1] + 1) {
            // merge with previous range
            if (hi > this.r[w - 1]) {
              this.r[w - 1] = hi;
            }
            continue;
          }
          // new disjoint range
          this.r[w] = lo;
          this.r[w + 1] = hi;
          w += 2;
        }
      }
      this.len = w;
      return this;
    }

    // appendLiteral() appends the literal |x| to this CharClass.
  }, {
    key: "appendLiteral",
    value: function appendLiteral(x, flags) {
      return (flags & RE2Flags.FOLD_CASE) !== 0 ? this.appendFoldedRange(x, x) : this.appendRange(x, x);
    }

    // appendRange() appends the range [lo-hi] (inclusive) to this CharClass.
  }, {
    key: "appendRange",
    value: function appendRange(lo, hi) {
      // Expand last range or next to last range if it overlaps or abuts.
      // Checking two ranges helps when appending case-folded
      // alphabets, so that one range can be expanding A-Z and the
      // other expanding a-z.
      if (this.len > 0) {
        for (var i = 2; i <= 4; i += 2) {
          // twice, using i=2, i=4
          if (this.len >= i) {
            var rlo = this.r[this.len - i];
            var rhi = this.r[this.len - i + 1];
            if (lo <= rhi + 1 && rlo <= hi + 1) {
              if (lo < rlo) {
                this.r[this.len - i] = lo;
              }
              if (hi > rhi) {
                this.r[this.len - i + 1] = hi;
              }
              return this;
            }
          }
        }
      }
      this.r[this.len++] = lo;
      this.r[this.len++] = hi;
      return this;
    }

    // appendFoldedRange() appends the range [lo-hi] and its case
    // folding-equivalent runes to this CharClass.
  }, {
    key: "appendFoldedRange",
    value: function appendFoldedRange(lo, hi) {
      // Optimizations.
      if (lo <= Unicode.MIN_FOLD && hi >= Unicode.MAX_FOLD) {
        // Range is full: folding can't add more.
        return this.appendRange(lo, hi);
      }
      if (hi < Unicode.MIN_FOLD || lo > Unicode.MAX_FOLD) {
        // Range is outside folding possibilities.
        return this.appendRange(lo, hi);
      }
      if (lo < Unicode.MIN_FOLD) {
        // [lo, minFold-1] needs no folding.
        this.appendRange(lo, Unicode.MIN_FOLD - 1);
        lo = Unicode.MIN_FOLD;
      }
      if (hi > Unicode.MAX_FOLD) {
        // [maxFold+1, hi] needs no folding.
        this.appendRange(Unicode.MAX_FOLD + 1, hi);
        hi = Unicode.MAX_FOLD;
      }

      // Brute force.  Depend on appendRange to coalesce ranges on the fly.
      for (var c = lo; c <= hi; c++) {
        this.appendRange(c, c);
        for (var f = Unicode.simpleFold(c); f !== c; f = Unicode.simpleFold(f)) {
          this.appendRange(f, f);
        }
      }
      return this;
    }

    // appendClass() appends the class |x| to this CharClass.
    // It assumes |x| is clean.  Does not mutate |x|.
  }, {
    key: "appendClass",
    value: function appendClass(x) {
      for (var i = 0; i < x.length; i += 2) {
        this.appendRange(x[i], x[i + 1]);
      }
      return this;
    }

    // appendFoldedClass() appends the case folding of the class |x| to this
    // CharClass.  Does not mutate |x|.
  }, {
    key: "appendFoldedClass",
    value: function appendFoldedClass(x) {
      for (var i = 0; i < x.length; i += 2) {
        this.appendFoldedRange(x[i], x[i + 1]);
      }
      return this;
    }

    // appendNegatedClass() append the negation of the class |x| to this
    // CharClass.  It assumes |x| is clean.  Does not mutate |x|.
  }, {
    key: "appendNegatedClass",
    value: function appendNegatedClass(x) {
      var nextLo = 0;
      for (var i = 0; i < x.length; i += 2) {
        var lo = x[i];
        var hi = x[i + 1];
        if (nextLo <= lo - 1) {
          this.appendRange(nextLo, lo - 1);
        }
        nextLo = hi + 1;
      }
      if (nextLo <= Unicode.MAX_RUNE) {
        this.appendRange(nextLo, Unicode.MAX_RUNE);
      }
      return this;
    }

    // appendTable() appends the Unicode range table |table| to this CharClass.
    // Does not mutate |table|.
  }, {
    key: "appendTable",
    value: function appendTable(table) {
      var _iterator = _createForOfIteratorHelper(table),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var triple = _step.value;
          var lo = triple[0];
          var hi = triple[1];
          var stride = triple[2];
          if (stride === 1) {
            this.appendRange(lo, hi);
            continue;
          }
          for (var c = lo; c <= hi; c += stride) {
            this.appendRange(c, c);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this;
    }

    // appendNegatedTable() returns the result of appending the negation of range
    // table |table| to this CharClass.  Does not mutate |table|.
  }, {
    key: "appendNegatedTable",
    value: function appendNegatedTable(table) {
      var nextLo = 0;
      var _iterator2 = _createForOfIteratorHelper(table),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var triple = _step2.value;
          var lo = triple[0];
          var hi = triple[1];
          var stride = triple[2];
          if (stride === 1) {
            if (nextLo <= lo - 1) {
              this.appendRange(nextLo, lo - 1);
            }
            nextLo = hi + 1;
            continue;
          }
          for (var c = lo; c <= hi; c += stride) {
            if (nextLo <= c - 1) {
              this.appendRange(nextLo, c - 1);
            }
            nextLo = c + 1;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (nextLo <= Unicode.MAX_RUNE) {
        this.appendRange(nextLo, Unicode.MAX_RUNE);
      }
      return this;
    }

    // appendTableWithSign() calls append{,Negated}Table depending on sign.
    // Does not mutate |table|.
  }, {
    key: "appendTableWithSign",
    value: function appendTableWithSign(table, sign) {
      return sign < 0 ? this.appendNegatedTable(table) : this.appendTable(table);
    }

    // negateClass() negates this CharClass, which must already be clean.
  }, {
    key: "negateClass",
    value: function negateClass() {
      var nextLo = 0; // lo end of next class to add
      var w = 0; // write index
      for (var i = 0; i < this.len; i += 2) {
        var lo = this.r[i];
        var hi = this.r[i + 1];
        if (nextLo <= lo - 1) {
          this.r[w] = nextLo;
          this.r[w + 1] = lo - 1;
          w += 2;
        }
        nextLo = hi + 1;
      }
      this.len = w;
      if (nextLo <= Unicode.MAX_RUNE) {
        this.r[this.len++] = nextLo;
        this.r[this.len++] = Unicode.MAX_RUNE;
      }
      return this;
    }

    // appendClassWithSign() calls appendClass() if sign is +1 or
    // appendNegatedClass if sign is -1.  Does not mutate |x|.
  }, {
    key: "appendClassWithSign",
    value: function appendClassWithSign(x, sign) {
      return sign < 0 ? this.appendNegatedClass(x) : this.appendClass(x);
    }

    // appendGroup() appends CharGroup |g| to this CharClass, folding iff
    // |foldCase|.  Does not mutate |g|.
  }, {
    key: "appendGroup",
    value: function appendGroup(g, foldCase) {
      var cls = g.cls;
      if (foldCase) {
        cls = new CharClass().appendFoldedClass(cls).cleanClass().toArray();
      }
      return this.appendClassWithSign(cls, g.sign);
    }
  }, {
    key: "toString",
    value: function toString() {
      return CharClass.charClassToString(this.r, this.len);
    }
  }], [{
    key: "charClassToString",
    value:
    // Exposed, since useful for debugging CharGroups too.
    function charClassToString(r, len) {
      var result = '[';
      for (var i = 0; i < len; i += 2) {
        if (i > 0) {
          result += ' ';
        }
        var lo = r[i];
        var hi = r[i + 1];
        if (lo === hi) {
          result += "0x".concat(lo.toString(16));
        } else {
          result += "0x".concat(lo.toString(16), "-0x").concat(hi.toString(16));
        }
      }
      result += ']';
      return result;
    }

    // cmp() returns the ordering of the pair (a[i], a[i+1]) relative to
    // (pivotFrom, pivotTo), where the first component of the pair (lo) is
    // ordered naturally and the second component (hi) is in reverse order.
  }, {
    key: "cmp",
    value: function cmp(array, i, pivotFrom, pivotTo) {
      var cmp = array[i] - pivotFrom;
      return cmp !== 0 ? cmp : pivotTo - array[i + 1];
    }

    // qsortIntPair() quicksorts pairs of ints in |array| according to lt().
    // Precondition: |left|, |right|, |this.len| must all be even; |this.len > 1|.
  }, {
    key: "qsortIntPair",
    value: function qsortIntPair(array, left, right) {
      var pivotIndex = ((left + right) / 2 | 0) & ~1;
      var pivotFrom = array[pivotIndex];
      var pivotTo = array[pivotIndex + 1];
      var i = left;
      var j = right;
      while (i <= j) {
        while (i < right && CharClass.cmp(array, i, pivotFrom, pivotTo) < 0) {
          i += 2;
        }
        while (j > left && CharClass.cmp(array, j, pivotFrom, pivotTo) > 0) {
          j -= 2;
        }
        if (i <= j) {
          if (i !== j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            temp = array[i + 1];
            array[i + 1] = array[j + 1];
            array[j + 1] = temp;
          }
          i += 2;
          j -= 2;
        }
      }
      if (left < j) {
        CharClass.qsortIntPair(array, left, j);
      }
      if (i < right) {
        CharClass.qsortIntPair(array, i, right);
      }
    }
  }]);
}();

var Pair = /*#__PURE__*/function () {
  function Pair(first, second) {
    _classCallCheck(this, Pair);
    this.first = first;
    this.second = second;
  }
  return _createClass(Pair, null, [{
    key: "of",
    value: function of(first, second) {
      return new Pair(first, second);
    }
  }]);
}(); // StringIterator: a stream of runes with an opaque cursor, permitting
// rewinding.  The units of the cursor are not specified beyond the
// fact that ASCII characters are single width.  (Cursor positions
// could be UTF-8 byte indices, UTF-16 code indices or rune indices.)
//
// In particular, be careful with:
// - skip: only use this to advance over ASCII characters
//   since these always have a width of 1.
// - skipString: only use this to advance over strings which are
//   known to be at the current position, e.g. due to prior call to
//   lookingAt().
// Only use pop() to advance over possibly non-ASCII runes.
var StringIterator = /*#__PURE__*/function () {
  function StringIterator(str) {
    _classCallCheck(this, StringIterator);
    this.str = str;
    this.position = 0;
  }

  // Returns the cursor position.  Do not interpret the result!
  return _createClass(StringIterator, [{
    key: "pos",
    value: function pos() {
      return this.position;
    }

    // Resets the cursor position to a previous value returned by pos().
  }, {
    key: "rewindTo",
    value: function rewindTo(pos) {
      this.position = pos;
    }

    // Returns true unless the stream is exhausted.
  }, {
    key: "more",
    value: function more() {
      return this.position < this.str.length;
    }

    // Returns the rune at the cursor position.
    // Precondition: |more()|.
  }, {
    key: "peek",
    value: function peek() {
      return this.str.codePointAt(this.position);
    }

    // Advances the cursor by |n| positions, which must be ASCII runes.
    //
    // (In practise, this is only ever used to skip over regexp
    // metacharacters that are ASCII, so there is no numeric difference
    // between indices into  UTF-8 bytes, UTF-16 codes and runes.)
  }, {
    key: "skip",
    value: function skip(n) {
      this.position += n;
    }

    // Advances the cursor by the number of cursor positions in |s|.
  }, {
    key: "skipString",
    value: function skipString(s) {
      this.position += s.length;
    }

    // Returns the rune at the cursor position, and advances the cursor
    // past it.  Precondition: |more()|.
  }, {
    key: "pop",
    value: function pop() {
      var r = this.str.codePointAt(this.position);
      this.position += Utils.charCount(r);
      return r;
    }
  }, {
    key: "lookingAt",
    value: function lookingAt(s) {
      return this.rest().startsWith(s);
    }

    // Returns the rest of the pattern as a Java UTF-16 string.
  }, {
    key: "rest",
    value: function rest() {
      return this.str.substring(this.position);
    }

    // Returns the substring from |beforePos| to the current position.
    // |beforePos| must have been previously returned by |pos()|.
  }, {
    key: "from",
    value: function from(beforePos) {
      return this.str.substring(beforePos, this.position);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.rest();
    }
  }]);
}();
/**
 * A parser of regular expression patterns.
 *
 * The only public entry point is {@link #parse(String pattern, int flags)}.
 */
var Parser = /*#__PURE__*/function () {
  function Parser(wholeRegexp) {
    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Parser);
    this.wholeRegexp = wholeRegexp;
    // Flags control the behavior of the parser and record information about
    // regexp context.
    this.flags = flags;
    // number of capturing groups seen
    this.numCap = 0;
    this.namedGroups = {};
    // Stack of parsed expressions.
    this.stack = [];
    this.free = null;
  }

  // Allocate a Regexp, from the free list if possible.
  return _createClass(Parser, [{
    key: "newRegexp",
    value: function newRegexp(op) {
      var re = this.free;
      if (re !== null && re.subs !== null && re.subs.length > 0) {
        this.free = re.subs[0];
        re.reinit();
        re.op = op;
      } else {
        re = new Regexp(op);
      }
      return re;
    }
  }, {
    key: "reuse",
    value: function reuse(re) {
      if (re.subs !== null && re.subs.length > 0) {
        re.subs[0] = this.free;
      }
      this.free = re;
    }

    // Parse stack manipulation.
  }, {
    key: "pop",
    value: function pop() {
      return this.stack.pop();
    }
  }, {
    key: "popToPseudo",
    value: function popToPseudo() {
      var n = this.stack.length;
      var i = n;
      while (i > 0 && !Regexp.isPseudoOp(this.stack[i - 1].op)) {
        i--;
      }
      var r = this.stack.slice(i, n);
      this.stack = this.stack.slice(0, i);
      return r;
    }

    // push pushes the regexp re onto the parse stack and returns the regexp.
    // Returns null for a CHAR_CLASS that can be merged with the top-of-stack.
  }, {
    key: "push",
    value: function push(re) {
      if (re.op === Regexp.Op.CHAR_CLASS && re.runes.length === 2 && re.runes[0] === re.runes[1]) {
        if (this.maybeConcat(re.runes[0], this.flags & ~RE2Flags.FOLD_CASE)) {
          return null;
        }
        re.op = Regexp.Op.LITERAL;
        re.runes = [re.runes[0]];
        re.flags = this.flags & ~RE2Flags.FOLD_CASE;
      } else if (re.op === Regexp.Op.CHAR_CLASS && re.runes.length === 4 && re.runes[0] === re.runes[1] && re.runes[2] === re.runes[3] && Unicode.simpleFold(re.runes[0]) === re.runes[2] && Unicode.simpleFold(re.runes[2]) === re.runes[0] || re.op === Regexp.Op.CHAR_CLASS && re.runes.length === 2 && re.runes[0] + 1 === re.runes[1] && Unicode.simpleFold(re.runes[0]) === re.runes[1] && Unicode.simpleFold(re.runes[1]) === re.runes[0]) {
        // Case-insensitive rune like [Aa] or [Δδ].
        if (this.maybeConcat(re.runes[0], this.flags | RE2Flags.FOLD_CASE)) {
          return null;
        }
        // Rewrite as (case-insensitive) literal.
        re.op = Regexp.Op.LITERAL;
        re.runes = [re.runes[0]];
        re.flags = this.flags | RE2Flags.FOLD_CASE;
      } else {
        // Incremental concatenation.
        this.maybeConcat(-1, 0);
      }
      this.stack.push(re);
      return re;
    }

    // maybeConcat implements incremental concatenation
    // of literal runes into string nodes.  The parser calls this
    // before each push, so only the top fragment of the stack
    // might need processing.  Since this is called before a push,
    // the topmost literal is no longer subject to operators like *
    // (Otherwise ab* would turn into (ab)*.)
    // If (r >= 0 and there's a node left over, maybeConcat uses it
    // to push r with the given flags.
    // maybeConcat reports whether r was pushed.
  }, {
    key: "maybeConcat",
    value: function maybeConcat(r, flags) {
      var n = this.stack.length;
      if (n < 2) {
        return false;
      }
      var re1 = this.stack[n - 1];
      var re2 = this.stack[n - 2];
      if (re1.op !== Regexp.Op.LITERAL || re2.op !== Regexp.Op.LITERAL || (re1.flags & RE2Flags.FOLD_CASE) !== (re2.flags & RE2Flags.FOLD_CASE)) {
        return false;
      }
      // Push re1 into re2.
      re2.runes = Parser.concatRunes(re2.runes, re1.runes);
      // Reuse re1 if possible.
      if (r >= 0) {
        re1.runes = [r];
        re1.flags = flags;
        return true;
      }
      this.pop();
      this.reuse(re1);
      return false; // did not push r
    }

    // newLiteral returns a new LITERAL Regexp with the given flags
  }, {
    key: "newLiteral",
    value: function newLiteral(r, flags) {
      var re = this.newRegexp(Regexp.Op.LITERAL);
      re.flags = flags;
      if ((flags & RE2Flags.FOLD_CASE) !== 0) {
        r = Parser.minFoldRune(r);
      }
      re.runes = [r];
      return re;
    }

    // literal pushes a literal regexp for the rune r on the stack
    // and returns that regexp.
  }, {
    key: "literal",
    value: function literal(r) {
      this.push(this.newLiteral(r, this.flags));
    }

    // op pushes a regexp with the given op onto the stack
    // and returns that regexp.
  }, {
    key: "op",
    value: function op(_op) {
      var re = this.newRegexp(_op);
      re.flags = this.flags;
      return this.push(re);
    }

    // repeat replaces the top stack element with itself repeated according to
    // op, min, max.  beforePos is the start position of the repetition operator.
    // Pre: t is positioned after the initial repetition operator.
    // Post: t advances past an optional perl-mode '?', or stays put.
    //       Or, it fails with RE2JSSyntaxException.
  }, {
    key: "repeat",
    value: function repeat(op, min, max, beforePos, t, lastRepeatPos) {
      var flags = this.flags;
      if ((flags & RE2Flags.PERL_X) !== 0) {
        if (t.more() && t.lookingAt('?')) {
          t.skip(1);
          flags ^= RE2Flags.NON_GREEDY;
        }
        if (lastRepeatPos !== -1) {
          // In Perl it is not allowed to stack repetition operators:
          // a** is a syntax error, not a doubled star, and a++ means
          // something else entirely, which we don't support!
          throw new RE2JSSyntaxException(Parser.ERR_INVALID_REPEAT_OP, t.from(lastRepeatPos));
        }
      }
      var n = this.stack.length;
      if (n === 0) {
        throw new RE2JSSyntaxException(Parser.ERR_MISSING_REPEAT_ARGUMENT, t.from(beforePos));
      }
      var sub = this.stack[n - 1];
      if (Regexp.isPseudoOp(sub.op)) {
        throw new RE2JSSyntaxException(Parser.ERR_MISSING_REPEAT_ARGUMENT, t.from(beforePos));
      }
      var re = this.newRegexp(op);
      re.min = min;
      re.max = max;
      re.flags = flags;
      re.subs = [sub];
      this.stack[n - 1] = re;
    }

    // concat replaces the top of the stack (above the topmost '|' or '(') with
    // its concatenation.
  }, {
    key: "concat",
    value: function concat() {
      this.maybeConcat(-1, 0);
      var subs = this.popToPseudo();
      if (subs.length === 0) {
        return this.push(this.newRegexp(Regexp.Op.EMPTY_MATCH));
      }
      return this.push(this.collapse(subs, Regexp.Op.CONCAT));
    }

    // alternate replaces the top of the stack (above the topmost '(') with its
    // alternation.
  }, {
    key: "alternate",
    value: function alternate() {
      // Scan down to find pseudo-operator (.
      // There are no | above (.
      var subs = this.popToPseudo();
      // Make sure top class is clean.
      // All the others already are (see swapVerticalBar).
      if (subs.length > 0) {
        this.cleanAlt(subs[subs.length - 1]);
      }
      // Empty alternate is special case
      // (shouldn't happen but easy to handle).
      if (subs.length === 0) {
        return this.push(this.newRegexp(Regexp.Op.NO_MATCH));
      }
      return this.push(this.collapse(subs, Regexp.Op.ALTERNATE));
    }

    // cleanAlt cleans re for eventual inclusion in an alternation.
  }, {
    key: "cleanAlt",
    value: function cleanAlt(re) {
      if (re.op === Regexp.Op.CHAR_CLASS) {
        re.runes = new CharClass(re.runes).cleanClass().toArray();
        if (re.runes.length === 2 && re.runes[0] === 0 && re.runes[1] === Unicode.MAX_RUNE) {
          re.runes = null;
          re.op = Regexp.Op.ANY_CHAR;
        } else if (re.runes.length === 4 && re.runes[0] === 0 && re.runes[1] === Codepoint.CODES.get('\n') - 1 && re.runes[2] === Codepoint.CODES.get('\n') + 1 && re.runes[3] === Unicode.MAX_RUNE) {
          re.runes = null;
          re.op = Regexp.Op.ANY_CHAR_NOT_NL;
        }
      }
    }

    // collapse returns the result of applying op to subs[start:end].
    // If (sub contains op nodes, they all get hoisted up
    // so that there is never a concat of a concat or an
    // alternate of an alternate.
  }, {
    key: "collapse",
    value: function collapse(subs, op) {
      if (subs.length === 1) {
        return subs[0];
      }
      // Concatenate subs iff op is same.
      // Compute length in first pass.
      var len = 0;
      var _iterator = _createForOfIteratorHelper(subs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sub = _step.value;
          len += sub.op === op ? sub.subs.length : 1;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var newsubs = new Array(len).fill(null);
      var i = 0;
      var _iterator2 = _createForOfIteratorHelper(subs),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _sub = _step2.value;
          if (_sub.op === op) {
            newsubs.splice.apply(newsubs, [i, _sub.subs.length].concat(_toConsumableArray(_sub.subs)));
            i += _sub.subs.length;
            this.reuse(_sub);
          } else {
            newsubs[i++] = _sub;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var re = this.newRegexp(op);
      re.subs = newsubs;
      if (op === Regexp.Op.ALTERNATE) {
        // re.subs = this.factor(re.subs, re.flags)
        re.subs = this.factor(re.subs);
        if (re.subs.length === 1) {
          var old = re;
          re = re.subs[0];
          this.reuse(old);
        }
      }
      return re;
    }

    // factor factors common prefixes from the alternation list sub.  It
    // returns a replacement list that reuses the same storage and frees
    // (passes to p.reuse) any removed *Regexps.
    //
    // For example,
    //     ABC|ABD|AEF|BCX|BCY
    // simplifies by literal prefix extraction to
    //     A(B(C|D)|EF)|BC(X|Y)
    // which simplifies by character class introduction to
    //     A(B[CD]|EF)|BC[XY]
    //
  }, {
    key: "factor",
    value: function factor(array) {
      if (array.length < 2) {
        return array;
      }
      // The following code is subtle, because it's a literal JS
      // translation of code that makes clever use of Go "slices".
      // A slice is a triple (array, offset, length), and the Go
      // implementation uses two slices, |sub| and |out| backed by the
      // same array.  In JS, we have to be explicit about all of these
      // variables, so:
      //
      // Go    JS
      // sub   (array, s, lensub)
      // out   (array, 0, lenout)   // (always a prefix of |array|)
      //
      // In the comments we'll use the logical notation of go slices, e.g. sub[i]
      // even though the JS code will read array[s + i].

      var s = 0; // offset of first |sub| within array.
      var lensub = array.length; // = len(sub)
      var lenout = 0; // = len(out)
      // Round 1: Factor out common literal prefixes.
      // Note: (str, strlen) and (istr, istrlen) are like Go slices
      // onto a prefix of some Regexp's runes array (hence offset=0).
      var str = null;
      var strlen = 0;
      var strflags = 0;
      var start = 0;
      for (var i = 0; i <= lensub; i++) {
        // Invariant: the Regexps that were in sub[0:start] have been
        // used or marked for reuse, and the slice space has been reused
        // for out (len <= start).
        //
        // Invariant: sub[start:i] consists of regexps that all begin
        // with str as modified by strflags.
        var istr = null;
        var istrlen = 0;
        var iflags = 0;
        if (i < lensub) {
          // NB, we inlined Go's leadingString() since Java has no pair return.
          var re = array[s + i];
          if (re.op === Regexp.Op.CONCAT && re.subs.length > 0) {
            re = re.subs[0];
          }
          if (re.op === Regexp.Op.LITERAL) {
            istr = re.runes;
            istrlen = re.runes.length;
            iflags = re.flags & RE2Flags.FOLD_CASE;
          }
          // istr is the leading literal string that re begins with.
          // The string refers to storage in re or its children.
          if (iflags === strflags) {
            var same = 0;
            while (same < strlen && same < istrlen && str[same] === istr[same]) {
              same++;
            }
            if (same > 0) {
              // Matches at least one rune in current range.
              // Keep going around.
              strlen = same;
              continue;
            }
          }
        }
        // Found end of a run with common leading literal string:
        // sub[start:i] all begin with str[0:strlen], but sub[i]
        // does not even begin with str[0].
        //
        // Factor out common string and append factored expression to out.
        if (i === start) ; else if (i === start + 1) {
          // Just one: don't bother factoring.
          array[lenout++] = array[s + start];
        } else {
          // Construct factored form: prefix(suffix1|suffix2|...)
          var prefix = this.newRegexp(Regexp.Op.LITERAL);
          prefix.flags = strflags;
          prefix.runes = str.slice(0, strlen);
          for (var j = start; j < i; j++) {
            array[s + j] = this.removeLeadingString(array[s + j], strlen);
          }
          // Recurse.
          var suffix = this.collapse(array.slice(s + start, s + i), Regexp.Op.ALTERNATE);
          var _re = this.newRegexp(Regexp.Op.CONCAT);
          _re.subs = [prefix, suffix];
          array[lenout++] = _re;
        }
        // Prepare for next iteration.
        start = i;
        str = istr;
        strlen = istrlen;
        strflags = iflags;
      }
      // In Go: sub = out
      lensub = lenout;
      s = 0;
      // Round 2: Factor out common complex prefixes,
      // just the first piece of each concatenation,
      // whatever it is.  This is good enough a lot of the time.
      start = 0;
      lenout = 0;
      var first = null;
      for (var _i = 0; _i <= lensub; _i++) {
        // Invariant: the Regexps that were in sub[0:start] have been
        // used or marked for reuse, and the slice space has been reused
        // for out (lenout <= start).
        //
        // Invariant: sub[start:i] consists of regexps that all begin with
        // ifirst.
        var ifirst = null;
        if (_i < lensub) {
          ifirst = Parser.leadingRegexp(array[s + _i]);
          if (first !== null && first.equals(ifirst) && (Parser.isCharClass(first) || first.op === Regexp.Op.REPEAT && first.min === first.max && Parser.isCharClass(first.subs[0]))) {
            continue;
          }
        }
        // Found end of a run with common leading regexp:
        // sub[start:i] all begin with first but sub[i] does not.
        //
        // Factor out common regexp and append factored expression to out.
        if (_i === start) ; else if (_i === start + 1) {
          // Just one: don't bother factoring.
          array[lenout++] = array[s + start];
        } else {
          // Construct factored form: prefix(suffix1|suffix2|...)
          var _prefix = first;
          for (var _j = start; _j < _i; _j++) {
            var reuse = _j !== start; // prefix came from sub[start]
            array[s + _j] = this.removeLeadingRegexp(array[s + _j], reuse);
          }
          // recurse
          var _suffix = this.collapse(array.slice(s + start, s + _i), Regexp.Op.ALTERNATE);
          var _re2 = this.newRegexp(Regexp.Op.CONCAT);
          _re2.subs = [_prefix, _suffix];
          array[lenout++] = _re2;
        }
        // Prepare for next iteration.
        start = _i;
        first = ifirst;
      }
      // In Go: sub = out
      lensub = lenout;
      s = 0;
      // Round 3: Collapse runs of single literals into character classes.
      start = 0;
      lenout = 0;
      for (var _i2 = 0; _i2 <= lensub; _i2++) {
        // Invariant: the Regexps that were in sub[0:start] have been
        // used or marked for reuse, and the slice space has been reused
        // for out (lenout <= start).
        //
        // Invariant: sub[start:i] consists of regexps that are either
        // literal runes or character classes.
        if (_i2 < lensub && Parser.isCharClass(array[s + _i2])) {
          continue;
        }
        // sub[i] is not a char or char class;
        // emit char class for sub[start:i]...
        if (_i2 === start) ; else if (_i2 === start + 1) {
          // Just one: don't bother factoring.
          array[lenout++] = array[s + start];
        } else {
          // Make new char class.
          // Start with most complex regexp in sub[start].
          var max = start;
          for (var _j2 = start + 1; _j2 < _i2; _j2++) {
            var subMax = array[s + max];
            var subJ = array[s + _j2];
            if (subMax.op < subJ.op || subMax.op === subJ.op && (subMax.runes !== null ? subMax.runes.length : 0) < (subJ.runes !== null ? subJ.runes.length : 0)) {
              max = _j2;
            }
          }
          // swap sub[start], sub[max].
          var tmp = array[s + start];
          array[s + start] = array[s + max];
          array[s + max] = tmp;
          for (var _j3 = start + 1; _j3 < _i2; _j3++) {
            Parser.mergeCharClass(array[s + start], array[s + _j3]);
            this.reuse(array[s + _j3]);
          }
          this.cleanAlt(array[s + start]);
          array[lenout++] = array[s + start];
        }
        // ... and then emit sub[i].
        if (_i2 < lensub) {
          array[lenout++] = array[s + _i2];
        }
        start = _i2 + 1;
      }
      // In Go: sub = out
      lensub = lenout;
      s = 0;
      // Round 4: Collapse runs of empty matches into a single empty match.
      start = 0;
      lenout = 0;
      for (var _i3 = 0; _i3 < lensub; ++_i3) {
        if (_i3 + 1 < lensub && array[s + _i3].op === Regexp.Op.EMPTY_MATCH && array[s + _i3 + 1].op === Regexp.Op.EMPTY_MATCH) {
          continue;
        }
        array[lenout++] = array[s + _i3];
      }
      // In Go: sub = out
      lensub = lenout;
      s = 0;
      return array.slice(s, lensub);
    }

    // removeLeadingString removes the first n leading runes
    // from the beginning of re.  It returns the replacement for re.
  }, {
    key: "removeLeadingString",
    value: function removeLeadingString(re, n) {
      if (re.op === Regexp.Op.CONCAT && re.subs.length > 0) {
        // Removing a leading string in a concatenation
        // might simplify the concatenation.
        var sub = this.removeLeadingString(re.subs[0], n);
        re.subs[0] = sub;
        if (sub.op === Regexp.Op.EMPTY_MATCH) {
          this.reuse(sub);
          switch (re.subs.length) {
            case 0:
            case 1:
              // Impossible but handle.
              re.op = Regexp.Op.EMPTY_MATCH;
              re.subs = null;
              break;
            case 2:
              {
                var old = re;
                re = re.subs[1];
                this.reuse(old);
                break;
              }
            default:
              re.subs = re.subs.slice(1, re.subs.length);
              break;
          }
        }
        return re;
      }
      if (re.op === Regexp.Op.LITERAL) {
        re.runes = re.runes.slice(n, re.runes.length);
        if (re.runes.length === 0) {
          re.op = Regexp.Op.EMPTY_MATCH;
        }
      }
      return re;
    }

    // removeLeadingRegexp removes the leading regexp in re.
    // It returns the replacement for re.
    // If reuse is true, it passes the removed regexp (if no longer needed) to
    // reuse.
  }, {
    key: "removeLeadingRegexp",
    value: function removeLeadingRegexp(re, reuse) {
      if (re.op === Regexp.Op.CONCAT && re.subs.length > 0) {
        if (reuse) {
          this.reuse(re.subs[0]);
        }
        re.subs = re.subs.slice(1, re.subs.length);
        switch (re.subs.length) {
          case 0:
            {
              re.op = Regexp.Op.EMPTY_MATCH;
              re.subs = Regexp.emptySubs();
              break;
            }
          case 1:
            {
              var old = re;
              re = re.subs[0];
              this.reuse(old);
              break;
            }
        }
        return re;
      }
      if (reuse) {
        this.reuse(re);
      }
      return this.newRegexp(Regexp.Op.EMPTY_MATCH);
    }
  }, {
    key: "parseInternal",
    value: function parseInternal() {
      if ((this.flags & RE2Flags.LITERAL) !== 0) {
        // Trivial parser for literal string.
        return Parser.literalRegexp(this.wholeRegexp, this.flags);
      }
      // Otherwise, must do real work.
      var lastRepeatPos = -1;
      var min = -1;
      var max = -1;
      var t = new StringIterator(this.wholeRegexp);
      while (t.more()) {
        {
          var repeatPos = -1;
          bigswitch: switch (t.peek()) {
            case Codepoint.CODES.get('('):
              if ((this.flags & RE2Flags.PERL_X) !== 0 && t.lookingAt('(?')) {
                // Flag changes and non-capturing groups.
                this.parsePerlFlags(t);
                break;
              }
              this.op(Regexp.Op.LEFT_PAREN).cap = ++this.numCap;
              t.skip(1); // '('
              break;
            case Codepoint.CODES.get('|'):
              this.parseVerticalBar(); // '|'
              t.skip(1); // '|'
              break;
            case Codepoint.CODES.get(')'):
              this.parseRightParen();
              t.skip(1); // ')'
              break;
            case Codepoint.CODES.get('^'):
              if ((this.flags & RE2Flags.ONE_LINE) !== 0) {
                this.op(Regexp.Op.BEGIN_TEXT);
              } else {
                this.op(Regexp.Op.BEGIN_LINE);
              }
              t.skip(1); // '^'
              break;
            case Codepoint.CODES.get('$'):
              if ((this.flags & RE2Flags.ONE_LINE) !== 0) {
                this.op(Regexp.Op.END_TEXT).flags |= RE2Flags.WAS_DOLLAR;
              } else {
                this.op(Regexp.Op.END_LINE);
              }
              t.skip(1); // '$'
              break;
            case Codepoint.CODES.get('.'):
              if ((this.flags & RE2Flags.DOT_NL) !== 0) {
                this.op(Regexp.Op.ANY_CHAR);
              } else {
                this.op(Regexp.Op.ANY_CHAR_NOT_NL);
              }
              t.skip(1); // '.'
              break;
            case Codepoint.CODES.get('['):
              this.parseClass(t);
              break;
            case Codepoint.CODES.get('*'):
            case Codepoint.CODES.get('+'):
            case Codepoint.CODES.get('?'):
              {
                repeatPos = t.pos();
                var op = null;
                switch (t.pop()) {
                  case Codepoint.CODES.get('*'):
                    op = Regexp.Op.STAR;
                    break;
                  case Codepoint.CODES.get('+'):
                    op = Regexp.Op.PLUS;
                    break;
                  case Codepoint.CODES.get('?'):
                    op = Regexp.Op.QUEST;
                    break;
                }
                this.repeat(op, min, max, repeatPos, t, lastRepeatPos);
                // (min and max are now dead.)
                break;
              }
            case Codepoint.CODES.get('{'):
              {
                repeatPos = t.pos();
                var minMax = Parser.parseRepeat(t);
                if (minMax < 0) {
                  // If the repeat cannot be parsed, { is a literal.
                  t.rewindTo(repeatPos);
                  this.literal(t.pop()); // '{'
                  break;
                }
                min = minMax >> 16;
                max = (minMax & Unicode.MAX_BMP) << 16 >> 16;
                this.repeat(Regexp.Op.REPEAT, min, max, repeatPos, t, lastRepeatPos);
                break;
              }
            case Codepoint.CODES.get('\\'):
              {
                var savedPos = t.pos();
                t.skip(1); // '\\'
                if ((this.flags & RE2Flags.PERL_X) !== 0 && t.more()) {
                  var c = t.pop();
                  switch (c) {
                    case Codepoint.CODES.get('A'):
                      this.op(Regexp.Op.BEGIN_TEXT);
                      break bigswitch;
                    case Codepoint.CODES.get('b'):
                      this.op(Regexp.Op.WORD_BOUNDARY);
                      break bigswitch;
                    case Codepoint.CODES.get('B'):
                      this.op(Regexp.Op.NO_WORD_BOUNDARY);
                      break bigswitch;
                    case Codepoint.CODES.get('C'):
                      // any byte; not supported
                      throw new RE2JSSyntaxException(Parser.ERR_INVALID_ESCAPE, '\\C');
                    case Codepoint.CODES.get('Q'):
                      {
                        // \Q ... \E: the ... is always literals
                        var lit = t.rest();
                        var i = lit.indexOf('\\E');
                        if (i >= 0) {
                          lit = lit.substring(0, i);
                        }
                        t.skipString(lit);
                        t.skipString('\\E');
                        var j = 0;
                        while (j < lit.length) {
                          var codepoint = lit.codePointAt(j);
                          this.literal(codepoint);
                          j += Utils.charCount(codepoint);
                        }
                        break bigswitch;
                      }
                    case Codepoint.CODES.get('z'):
                      this.op(Regexp.Op.END_TEXT);
                      break bigswitch;
                    default:
                      t.rewindTo(savedPos);
                      break;
                  }
                }
                var re = this.newRegexp(Regexp.Op.CHAR_CLASS);
                re.flags = this.flags;
                // Look for Unicode character group like \p{Han}
                if (t.lookingAt('\\p') || t.lookingAt('\\P')) {
                  var _cc = new CharClass();
                  if (this.parseUnicodeClass(t, _cc)) {
                    re.runes = _cc.toArray();
                    this.push(re);
                    break bigswitch;
                  }
                }
                // Perl character class escape.
                var cc = new CharClass();
                if (this.parsePerlClassEscape(t, cc)) {
                  re.runes = cc.toArray();
                  this.push(re);
                  break bigswitch;
                }
                t.rewindTo(savedPos);
                this.reuse(re);
                // Ordinary single-character escape.
                this.literal(Parser.parseEscape(t));
                break;
              }
            default:
              this.literal(t.pop());
              break;
          }
          lastRepeatPos = repeatPos;
        }
      }
      this.concat();
      if (this.swapVerticalBar()) {
        this.pop(); // pop vertical bar
      }
      this.alternate();
      var n = this.stack.length;
      if (n !== 1) {
        throw new RE2JSSyntaxException(Parser.ERR_MISSING_PAREN, this.wholeRegexp);
      }
      this.stack[0].namedGroups = this.namedGroups;
      return this.stack[0];
    }

    // parsePerlFlags parses a Perl flag setting or non-capturing group or both,
    // like (?i) or (?: or (?i:.
    // Pre: t at "(?".  Post: t after ")".
    // Sets numCap.
  }, {
    key: "parsePerlFlags",
    value: function parsePerlFlags(t) {
      var startPos = t.pos();
      // Check for named captures, first introduced in Python's regexp library.
      // As usual, there are three slightly different syntaxes:
      //
      //   (?P<name>expr)   the original, introduced by Python
      //   (?<name>expr)    the .NET alteration, adopted by Perl 5.10
      //   (?'name'expr)    another .NET alteration, adopted by Perl 5.10
      //
      // Perl 5.10 gave in and implemented the Python version too,
      // but they claim that the last two are the preferred forms.
      // PCRE and languages based on it (specifically, PHP and Ruby)
      // support all three as well.  EcmaScript 4 uses only the Python form.
      //
      // In both the open source world (via Code Search) and the
      // Google source tree, (?P<name>expr) and (?<name>expr) are the
      // dominant forms of named captures and both are supported.
      var s = t.rest();
      if (s.startsWith('(?P<') || s.startsWith('(?<')) {
        // Pull out name.
        var begin = s.charAt(2) === 'P' ? 4 : 3;
        var end = s.indexOf('>');
        if (end < 0) {
          throw new RE2JSSyntaxException(Parser.ERR_INVALID_NAMED_CAPTURE, s);
        }
        var name = s.substring(begin, end); // "name"
        t.skipString(name);
        t.skip(begin + 1); // "(?P<>" or "(?<>"
        if (!Parser.isValidCaptureName(name)) {
          // "(?P<name>"
          throw new RE2JSSyntaxException(Parser.ERR_INVALID_NAMED_CAPTURE, s.substring(0, end + 1)); // "(?P<name>" or "(?<name>"
        }
        // Like ordinary capture, but named.
        var re = this.op(Regexp.Op.LEFT_PAREN);
        re.cap = ++this.numCap;
        if (this.namedGroups[name]) {
          throw new RE2JSSyntaxException(Parser.ERR_DUPLICATE_NAMED_CAPTURE, name);
        }
        this.namedGroups[name] = this.numCap;
        re.name = name;
        return;
      }
      // Non-capturing group.  Might also twiddle Perl flags.
      t.skip(2); // "(?"

      var flags = this.flags;
      var sign = +1;
      var sawFlag = false;
      loop: while (t.more()) {
        {
          var c = t.pop();
          switch (c) {
            case Codepoint.CODES.get('i'):
              flags |= RE2Flags.FOLD_CASE;
              sawFlag = true;
              break;
            case Codepoint.CODES.get('m'):
              flags &= ~RE2Flags.ONE_LINE;
              sawFlag = true;
              break;
            case Codepoint.CODES.get('s'):
              flags |= RE2Flags.DOT_NL;
              sawFlag = true;
              break;
            case Codepoint.CODES.get('U'):
              flags |= RE2Flags.NON_GREEDY;
              sawFlag = true;
              break;
            // Switch to negation.
            case Codepoint.CODES.get('-'):
              if (sign < 0) {
                break loop;
              }
              sign = -1;
              // Invert flags so that | above turn into &~ and vice versa.
              // We'll invert flags again before using it below.
              flags = ~flags;
              sawFlag = false;
              break;
            // End of flags, starting group or not.
            case Codepoint.CODES.get(':'):
            case Codepoint.CODES.get(')'):
              if (sign < 0) {
                if (!sawFlag) {
                  break loop;
                }
                flags = ~flags;
              }
              if (c === Codepoint.CODES.get(':')) {
                // Open new group
                this.op(Regexp.Op.LEFT_PAREN);
              }
              this.flags = flags;
              return;
            default:
              // Flags.
              break loop;
          }
        }
      }
      throw new RE2JSSyntaxException(Parser.ERR_INVALID_PERL_OP, t.from(startPos));
    }

    // parseVerticalBar handles a | in the input.
  }, {
    key: "parseVerticalBar",
    value: function parseVerticalBar() {
      this.concat();
      // The concatenation we just parsed is on top of the stack.
      // If it sits above an opVerticalBar, swap it below
      // (things below an opVerticalBar become an alternation).
      // Otherwise, push a new vertical bar.
      if (!this.swapVerticalBar()) {
        this.op(Regexp.Op.VERTICAL_BAR);
      }
    }

    // If the top of the stack is an element followed by an opVerticalBar
    // swapVerticalBar swaps the two and returns true.
    // Otherwise it returns false.
  }, {
    key: "swapVerticalBar",
    value: function swapVerticalBar() {
      var n = this.stack.length;
      // If above and below vertical bar are literal or char class,
      // can merge into a single char class.
      if (n >= 3 && this.stack[n - 2].op === Regexp.Op.VERTICAL_BAR && Parser.isCharClass(this.stack[n - 1]) && Parser.isCharClass(this.stack[n - 3])) {
        var re1 = this.stack[n - 1];
        var re3 = this.stack[n - 3];
        // Make re3 the more complex of the two.
        if (re1.op > re3.op) {
          var tmp = re3;
          re3 = re1;
          re1 = tmp;
          this.stack[n - 3] = re3;
        }
        Parser.mergeCharClass(re3, re1);
        this.reuse(re1);
        this.pop();
        return true;
      }
      if (n >= 2) {
        var _re3 = this.stack[n - 1];
        var re2 = this.stack[n - 2];
        if (re2.op === Regexp.Op.VERTICAL_BAR) {
          if (n >= 3) {
            // Now out of reach.
            // Clean opportunistically.
            this.cleanAlt(this.stack[n - 3]);
          }
          this.stack[n - 2] = _re3;
          this.stack[n - 1] = re2;
          return true;
        }
      }
      return false;
    }

    // parseRightParen handles a ')' in the input.
  }, {
    key: "parseRightParen",
    value: function parseRightParen() {
      this.concat();
      if (this.swapVerticalBar()) {
        this.pop(); // pop vertical bar
      }
      this.alternate();
      var n = this.stack.length;
      if (n < 2) {
        throw new RE2JSSyntaxException(Parser.ERR_INTERNAL_ERROR, 'stack underflow');
      }
      var re1 = this.pop();
      var re2 = this.pop();
      if (re2.op !== Regexp.Op.LEFT_PAREN) {
        throw new RE2JSSyntaxException(Parser.ERR_MISSING_PAREN, this.wholeRegexp);
      }
      // Restore flags at time of paren.
      this.flags = re2.flags;
      if (re2.cap === 0) {
        // Just for grouping.
        this.push(re1);
      } else {
        re2.op = Regexp.Op.CAPTURE;
        re2.subs = [re1];
        this.push(re2);
      }
    }

    // parsePerlClassEscape parses a leading Perl character class escape like \d
    // from the beginning of |t|.  If one is present, it appends the characters
    // to cc and returns true.  The iterator is advanced past the escape
    // on success, undefined on failure, in which case false is returned.
  }, {
    key: "parsePerlClassEscape",
    value: function parsePerlClassEscape(t, cc) {
      var beforePos = t.pos();
      if ((this.flags & RE2Flags.PERL_X) === 0 || !t.more() || t.pop() !== Codepoint.CODES.get('\\') || !t.more()) {
        return false;
      }
      t.pop(); // e.g. advance past 'd' in "\\d"
      var p = t.from(beforePos);
      var g = PERL_GROUPS.has(p) ? PERL_GROUPS.get(p) : null;
      if (g === null) {
        return false;
      }
      cc.appendGroup(g, (this.flags & RE2Flags.FOLD_CASE) !== 0);
      return true;
    }

    // parseNamedClass parses a leading POSIX named character class like
    // [:alnum:] from the beginning of t.  If one is present, it appends the
    // characters to cc, advances the iterator, and returns true.
    // Pre: t at "[:".  Post: t after ":]".
    // On failure (no class of than name), throws RE2JSSyntaxException.
    // On misparse, returns false; t.pos() is undefined.
  }, {
    key: "parseNamedClass",
    value: function parseNamedClass(t, cc) {
      // (Go precondition check deleted.)
      var cls = t.rest();
      var i = cls.indexOf(':]');
      if (i < 0) {
        return false;
      }
      var name = cls.substring(0, i + 2); // "[:alnum:]"
      t.skipString(name);
      var g = POSIX_GROUPS.has(name) ? POSIX_GROUPS.get(name) : null;
      if (g === null) {
        throw new RE2JSSyntaxException(Parser.ERR_INVALID_CHAR_RANGE, name);
      }
      cc.appendGroup(g, (this.flags & RE2Flags.FOLD_CASE) !== 0);
      return true;
    }

    // parseUnicodeClass() parses a leading Unicode character class like \p{Han}
    // from the beginning of t.  If one is present, it appends the characters to
    // to |cc|, advances |t| and returns true.
    //
    // Returns false if such a pattern is not present or UNICODE_GROUPS
    // flag is not enabled; |t.pos()| is not advanced in this case.
    // Indicates error by throwing RE2JSSyntaxException.
  }, {
    key: "parseUnicodeClass",
    value: function parseUnicodeClass(t, cc) {
      var startPos = t.pos();
      if ((this.flags & RE2Flags.UNICODE_GROUPS) === 0 || !t.lookingAt('\\p') && !t.lookingAt('\\P')) {
        return false;
      }
      t.skip(1); // '\\'
      // Committed to parse or throw exception.
      var sign = +1;
      var c = t.pop(); // 'p' or 'P'
      if (c === Codepoint.CODES.get('P')) {
        sign = -1;
      }
      if (!t.more()) {
        t.rewindTo(startPos);
        throw new RE2JSSyntaxException(Parser.ERR_INVALID_CHAR_RANGE, t.rest());
      }
      c = t.pop();
      var name;
      if (c !== Codepoint.CODES.get('{')) {
        // Single-letter name.
        name = Utils.runeToString(c);
      } else {
        // Name is in braces.
        var rest = t.rest();
        var end = rest.indexOf('}');
        if (end < 0) {
          t.rewindTo(startPos);
          throw new RE2JSSyntaxException(Parser.ERR_INVALID_CHAR_RANGE, t.rest());
        }
        name = rest.substring(0, end); // e.g. "Han"
        t.skipString(name);
        t.skip(1);
        // Don't use skip(end) because it assumes UTF-16 coding, and
        // StringIterator doesn't guarantee that.
      }
      // Group can have leading negation too.
      //  \p{^Han} == \P{Han}, \P{^Han} == \p{Han}.
      if (!(name.length === 0) && name.codePointAt(0) === Codepoint.CODES.get('^')) {
        sign = 0 - sign; // -sign
        name = name.substring(1);
      }
      var pair = Parser.unicodeTable(name);
      if (pair === null) {
        throw new RE2JSSyntaxException(Parser.ERR_INVALID_CHAR_RANGE, t.from(startPos));
      }
      var tab = pair.first;
      var fold = pair.second; // fold-equivalent table
      // Variation of CharClass.appendGroup() for tables.
      if ((this.flags & RE2Flags.FOLD_CASE) === 0 || fold === null) {
        cc.appendTableWithSign(tab, sign);
      } else {
        // Merge and clean tab and fold in a temporary buffer.
        // This is necessary for the negative case and just tidy
        // for the positive case.
        var tmp = new CharClass().appendTable(tab).appendTable(fold).cleanClass().toArray();
        cc.appendClassWithSign(tmp, sign);
      }
      return true;
    }

    // parseClass parses a character class and pushes it onto the parse stack.
    //
    // NOTES:
    // Pre: at '['; Post: after ']'.
    // Mutates stack.  Advances iterator.  May throw.
  }, {
    key: "parseClass",
    value: function parseClass(t) {
      var startPos = t.pos();
      t.skip(1); // '['
      var re = this.newRegexp(Regexp.Op.CHAR_CLASS);
      re.flags = this.flags;
      var cc = new CharClass();
      var sign = +1;
      if (t.more() && t.lookingAt('^')) {
        sign = -1;
        t.skip(1); // '^'
        // If character class does not match \n, add it here,
        // so that negation later will do the right thing.
        if ((this.flags & RE2Flags.CLASS_NL) === 0) {
          cc.appendRange(Codepoint.CODES.get('\n'), Codepoint.CODES.get('\n'));
        }
      }
      var first = true; // ']' and '-' are okay as first char in class
      while (!t.more() || t.peek() !== Codepoint.CODES.get(']') || first) {
        // POSIX: - is only okay unescaped as first or last in class.
        // Perl: - is okay anywhere.
        if (t.more() && t.lookingAt('-') && (this.flags & RE2Flags.PERL_X) === 0 && !first) {
          var s = t.rest();
          if (s === '-' || !s.startsWith('-]')) {
            t.rewindTo(startPos);
            throw new RE2JSSyntaxException(Parser.ERR_INVALID_CHAR_RANGE, t.rest());
          }
        }
        first = false;
        var beforePos = t.pos();
        // Look for POSIX [:alnum:] etc.
        if (t.lookingAt('[:')) {
          if (this.parseNamedClass(t, cc)) {
            continue;
          }
          t.rewindTo(beforePos);
        }

        // Look for Unicode character group like \p{Han}.
        if (this.parseUnicodeClass(t, cc)) {
          continue;
        }

        // Look for Perl character class symbols (extension).
        if (this.parsePerlClassEscape(t, cc)) {
          continue;
        }
        t.rewindTo(beforePos);

        // Single character or simple range.
        var lo = Parser.parseClassChar(t, startPos);
        var hi = lo;
        if (t.more() && t.lookingAt('-')) {
          t.skip(1);
          if (t.more() && t.lookingAt(']')) {
            // [a-] means (a|-) so check for final ].
            t.skip(-1);
          } else {
            hi = Parser.parseClassChar(t, startPos);
            if (hi < lo) {
              throw new RE2JSSyntaxException(Parser.ERR_INVALID_CHAR_RANGE, t.from(beforePos));
            }
          }
        }
        if ((this.flags & RE2Flags.FOLD_CASE) === 0) {
          cc.appendRange(lo, hi);
        } else {
          cc.appendFoldedRange(lo, hi);
        }
      }
      t.skip(1); // ']'

      cc.cleanClass();
      if (sign < 0) {
        cc.negateClass();
      }
      re.runes = cc.toArray();
      this.push(re);
    }
  }], [{
    key: "ANY_TABLE",
    value:
    // RangeTables are represented as int[][], a list of triples (start, end,
    // stride).
    function ANY_TABLE() {
      return [[0, Unicode.MAX_RUNE, 1]];
    }

    // unicodeTable() returns the Unicode RangeTable identified by name
    // and the table of additional fold-equivalent code points.
    // Returns null if |name| does not identify a Unicode character range.
  }, {
    key: "unicodeTable",
    value: function unicodeTable(name) {
      if (name === 'Any') {
        return Pair.of(Parser.ANY_TABLE(), Parser.ANY_TABLE());
      }
      if (UnicodeTables.CATEGORIES.has(name)) {
        return Pair.of(UnicodeTables.CATEGORIES.get(name), UnicodeTables.FOLD_CATEGORIES.get(name));
      }
      if (UnicodeTables.SCRIPTS.has(name)) {
        return Pair.of(UnicodeTables.SCRIPTS.get(name), UnicodeTables.FOLD_SCRIPT.get(name));
      }
      return null;
    }

    // minFoldRune returns the minimum rune fold-equivalent to r.
  }, {
    key: "minFoldRune",
    value: function minFoldRune(r) {
      if (r < Unicode.MIN_FOLD || r > Unicode.MAX_FOLD) {
        return r;
      }
      var min = r;
      var r0 = r;
      for (r = Unicode.simpleFold(r); r !== r0; r = Unicode.simpleFold(r)) {
        if (min > r) {
          min = r;
        }
      }
      return min;
    }

    // leadingRegexp returns the leading regexp that re begins with.
    // The regexp refers to storage in re or its children.
  }, {
    key: "leadingRegexp",
    value: function leadingRegexp(re) {
      if (re.op === Regexp.Op.EMPTY_MATCH) {
        return null;
      }
      if (re.op === Regexp.Op.CONCAT && re.subs.length > 0) {
        var sub = re.subs[0];
        if (sub.op === Regexp.Op.EMPTY_MATCH) {
          return null;
        }
        return sub;
      }
      return re;
    }
  }, {
    key: "literalRegexp",
    value: function literalRegexp(s, flags) {
      var re = new Regexp(Regexp.Op.LITERAL);
      re.flags = flags;
      re.runes = Utils.stringToRunes(s);
      return re;
    }
    /**
     * Parse regular expression pattern {@code pattern} with mode flags {@code flags}.
     * @param {string} pattern
     * @param {number} flags
     */
  }, {
    key: "parse",
    value: function parse(pattern, flags) {
      return new Parser(pattern, flags).parseInternal();
    }

    // parseRepeat parses {min} (max=min) or {min,} (max=-1) or {min,max}.
    // If |t| is not of that form, it returns -1.
    // If |t| has the right form but the values are negative or too big,
    // it returns -2.
    // On success, returns a nonnegative number encoding min/max in the
    // high/low signed halfwords of the result.  (Note: min >= 0; max may
    // be -1.)
    //
    // On success, advances |t| beyond the repeat; otherwise |t.pos()| is
    // undefined.
  }, {
    key: "parseRepeat",
    value: function parseRepeat(t) {
      var start = t.pos();
      if (!t.more() || !t.lookingAt('{')) {
        return -1;
      }
      t.skip(1);
      var min = Parser.parseInt(t);
      if (min === -1) {
        return -1;
      }
      if (!t.more()) {
        return -1;
      }
      var max;
      if (!t.lookingAt(',')) {
        max = min;
      } else {
        t.skip(1);
        if (!t.more()) {
          return -1;
        }
        if (t.lookingAt('}')) {
          max = -1;
        } else if ((max = Parser.parseInt(t)) === -1) {
          return -1;
        }
      }
      if (!t.more() || !t.lookingAt('}')) {
        return -1;
      }
      t.skip(1);
      if (min < 0 || min > 1000 || max === -2 || max > 1000 || max >= 0 && min > max) {
        throw new RE2JSSyntaxException(Parser.ERR_INVALID_REPEAT_SIZE, t.from(start));
      }
      return min << 16 | max & Unicode.MAX_BMP;
    }

    // isValidCaptureName reports whether name
    // is a valid capture name: [A-Za-z0-9_]+.
    // PCRE limits names to 32 bytes.
    // Python rejects names starting with digits.
    // We don't enforce either of those.
  }, {
    key: "isValidCaptureName",
    value: function isValidCaptureName(name) {
      if (name.length === 0) {
        return false;
      }
      for (var i = 0; i < name.length; i++) {
        var c = name.codePointAt(i);
        if (c !== Codepoint.CODES.get('_') && !Utils.isalnum(c)) {
          return false;
        }
      }
      return true;
    }

    // parseInt parses a nonnegative decimal integer.
    // -1 => bad format.  -2 => format ok, but integer overflow.
  }, {
    key: "parseInt",
    value: function parseInt(t) {
      var start = t.pos();
      while (t.more() && t.peek() >= Codepoint.CODES.get('0') && t.peek() <= Codepoint.CODES.get('9')) {
        t.skip(1);
      }
      var n = t.from(start);
      if (n.length === 0 || n.length > 1 && n.codePointAt(0) === Codepoint.CODES.get('0')) {
        return -1;
      }
      if (n.length > 8) {
        return -2;
      }
      return parseFloat(n, 10);
    }

    // can this be represented as a character class?
    // single-rune literal string, char class, ., and .|\n.
  }, {
    key: "isCharClass",
    value: function isCharClass(re) {
      return re.op === Regexp.Op.LITERAL && re.runes.length === 1 || re.op === Regexp.Op.CHAR_CLASS || re.op === Regexp.Op.ANY_CHAR_NOT_NL || re.op === Regexp.Op.ANY_CHAR;
    }

    // does re match r?
  }, {
    key: "matchRune",
    value: function matchRune(re, r) {
      switch (re.op) {
        case Regexp.Op.LITERAL:
          return re.runes.length === 1 && re.runes[0] === r;
        case Regexp.Op.CHAR_CLASS:
          for (var i = 0; i < re.runes.length; i += 2) {
            if (re.runes[i] <= r && r <= re.runes[i + 1]) {
              return true;
            }
          }
          return false;
        case Regexp.Op.ANY_CHAR_NOT_NL:
          return r !== Codepoint.CODES.get('\n');
        case Regexp.Op.ANY_CHAR:
          return true;
      }
      return false;
    }

    // mergeCharClass makes dst = dst|src.
    // The caller must ensure that dst.Op >= src.Op,
    // to reduce the amount of copying.
  }, {
    key: "mergeCharClass",
    value: function mergeCharClass(dst, src) {
      switch (dst.op) {
        case Regexp.Op.ANY_CHAR:
          break;
        case Regexp.Op.ANY_CHAR_NOT_NL:
          if (Parser.matchRune(src, Codepoint.CODES.get('\n'))) {
            dst.op = Regexp.Op.ANY_CHAR;
          }
          break;
        case Regexp.Op.CHAR_CLASS:
          if (src.op === Regexp.Op.LITERAL) {
            dst.runes = new CharClass(dst.runes).appendLiteral(src.runes[0], src.flags).toArray();
          } else {
            dst.runes = new CharClass(dst.runes).appendClass(src.runes).toArray();
          }
          break;
        case Regexp.Op.LITERAL:
          if (src.runes[0] === dst.runes[0] && src.flags === dst.flags) {
            break;
          }
          dst.op = Regexp.Op.CHAR_CLASS;
          dst.runes = new CharClass().appendLiteral(dst.runes[0], dst.flags).appendLiteral(src.runes[0], src.flags).toArray();
          break;
      }
    }

    // parseEscape parses an escape sequence at the beginning of s
    // and returns the rune.
    // Pre: t at '\\'.  Post: after escape.
  }, {
    key: "parseEscape",
    value: function parseEscape(t) {
      var startPos = t.pos();
      t.skip(1); // '\\'
      if (!t.more()) {
        throw new RE2JSSyntaxException(Parser.ERR_TRAILING_BACKSLASH);
      }
      var c = t.pop();
      bigswitch: switch (c) {
        case Codepoint.CODES.get('1'):
        case Codepoint.CODES.get('2'):
        case Codepoint.CODES.get('3'):
        case Codepoint.CODES.get('4'):
        case Codepoint.CODES.get('5'):
        case Codepoint.CODES.get('6'):
        case Codepoint.CODES.get('7'):
          {
            if (!t.more() || t.peek() < Codepoint.CODES.get('0') || t.peek() > Codepoint.CODES.get('7')) {
              break;
            }
          }
        // eslint-disable-next-line no-fallthrough
        case Codepoint.CODES.get('0'):
          {
            var r = c - Codepoint.CODES.get('0');
            for (var i = 1; i < 3; i++) {
              if (!t.more() || t.peek() < Codepoint.CODES.get('0') || t.peek() > Codepoint.CODES.get('7')) {
                break;
              }
              r = r * 8 + t.peek() - Codepoint.CODES.get('0');
              t.skip(1);
            }
            return r;
          }
        case Codepoint.CODES.get('x'):
          {
            if (!t.more()) {
              break;
            }
            c = t.pop();
            if (c === Codepoint.CODES.get('{')) {
              var nhex = 0;
              var _r = 0;
              // eslint-disable-next-line no-constant-condition
              while (true) {
                if (!t.more()) {
                  break bigswitch;
                }
                c = t.pop();
                if (c === Codepoint.CODES.get('}')) {
                  break;
                }
                var v = Utils.unhex(c);
                if (v < 0) {
                  break bigswitch;
                }
                _r = _r * 16 + v;
                if (_r > Unicode.MAX_RUNE) {
                  break bigswitch;
                }
                nhex++;
              }
              if (nhex === 0) {
                break bigswitch;
              }
              return _r;
            }
            var x = Utils.unhex(c);
            if (!t.more()) {
              break;
            }
            c = t.pop();
            var y = Utils.unhex(c);
            if (x < 0 || y < 0) {
              break;
            }
            return x * 16 + y;
          }
        case Codepoint.CODES.get('a'):
          return Codepoint.CODES.get('\x07');
        case Codepoint.CODES.get('f'):
          return Codepoint.CODES.get('\f');
        case Codepoint.CODES.get('n'):
          return Codepoint.CODES.get('\n');
        case Codepoint.CODES.get('r'):
          return Codepoint.CODES.get('\r');
        case Codepoint.CODES.get('t'):
          return Codepoint.CODES.get('\t');
        case Codepoint.CODES.get('v'):
          return Codepoint.CODES.get('\v');
        default:
          if (!Utils.isalnum(c)) {
            return c;
          }
          break;
      }
      throw new RE2JSSyntaxException(Parser.ERR_INVALID_ESCAPE, t.from(startPos));
    }

    // parseClassChar parses a character class character and returns it.
    // wholeClassPos is the position of the start of the entire class "[...".
    // Pre: t at class char; Post: t after it.
  }, {
    key: "parseClassChar",
    value: function parseClassChar(t, wholeClassPos) {
      if (!t.more()) {
        throw new RE2JSSyntaxException(Parser.ERR_MISSING_BRACKET, t.from(wholeClassPos));
      }
      if (t.lookingAt('\\')) {
        return Parser.parseEscape(t);
      }
      return t.pop();
    }
  }, {
    key: "concatRunes",
    value: function concatRunes(x, y) {
      return [].concat(_toConsumableArray(x), _toConsumableArray(y));
    }
  }]);
}();
// Unexpected error
_defineProperty(Parser, "ERR_INTERNAL_ERROR", 'regexp/syntax: internal error');
// Parse errors
_defineProperty(Parser, "ERR_INVALID_CHAR_RANGE", 'invalid character class range');
_defineProperty(Parser, "ERR_INVALID_ESCAPE", 'invalid escape sequence');
_defineProperty(Parser, "ERR_INVALID_NAMED_CAPTURE", 'invalid named capture');
_defineProperty(Parser, "ERR_INVALID_PERL_OP", 'invalid or unsupported Perl syntax');
_defineProperty(Parser, "ERR_INVALID_REPEAT_OP", 'invalid nested repetition operator');
_defineProperty(Parser, "ERR_INVALID_REPEAT_SIZE", 'invalid repeat count');
_defineProperty(Parser, "ERR_MISSING_BRACKET", 'missing closing ]');
_defineProperty(Parser, "ERR_MISSING_PAREN", 'missing closing )');
_defineProperty(Parser, "ERR_MISSING_REPEAT_ARGUMENT", 'missing argument to repetition operator');
_defineProperty(Parser, "ERR_TRAILING_BACKSLASH", 'trailing backslash at end of expression');
_defineProperty(Parser, "ERR_DUPLICATE_NAMED_CAPTURE", 'duplicate capture group name');

// A logical thread in the NFA.
var Thread = /*#__PURE__*/_createClass(function Thread() {
  _classCallCheck(this, Thread);
  this.inst = null;
  this.cap = [];
}); // A queue is a 'sparse array' holding pending threads of execution.  See:
// research.swtch.com/2008/03/using-uninitialized-memory-for-fun-and.html
var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);
    this.sparse = []; // may contain stale but in-bounds values.
    this.densePcs = []; // may contain stale pc in slots >= size
    this.denseThreads = []; // may contain stale Thread in slots >= size
    this.size = 0;
  }
  return _createClass(Queue, [{
    key: "contains",
    value: function contains(pc) {
      var j = this.sparse[pc];
      return j < this.size && this.densePcs[j] === pc;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }, {
    key: "add",
    value: function add(pc) {
      var j = this.size++;
      this.sparse[pc] = j;
      this.denseThreads[j] = null;
      this.densePcs[j] = pc;
      return j;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.sparse = [];
      this.densePcs = [];
      this.denseThreads = [];
      this.size = 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      var out = '{';
      for (var i = 0; i < this.size; i++) {
        if (i !== 0) {
          out += ', ';
        }
        out += this.densePcs[i];
      }
      out += '}';
      return out;
    }
  }]);
}(); // A Machine matches an input string of Unicode characters against an
// RE2 instance using a simple NFA.
//
// Called by RE2.doExecute.
var Machine = /*#__PURE__*/function () {
  function Machine() {
    _classCallCheck(this, Machine);
  }
  return _createClass(Machine, [{
    key: "init",
    value:
    // init() reinitializes an existing Machine for re-use on a new input.
    function init(ncap) {
      this.ncap = ncap;
      if (ncap > this.matchcap.length) {
        this.initNewCap(ncap);
      } else {
        this.resetCap(ncap);
      }
    }
  }, {
    key: "resetCap",
    value: function resetCap(ncap) {
      for (var i = 0; i < this.poolSize; i++) {
        var t = this.pool[i];
        t.cap = Array(ncap).fill(0);
      }
    }
  }, {
    key: "initNewCap",
    value: function initNewCap(ncap) {
      for (var i = 0; i < this.poolSize; i++) {
        var t = this.pool[i];
        t.cap = Array(ncap).fill(0);
      }
      this.matchcap = Array(ncap).fill(0);
    }
  }, {
    key: "submatches",
    value: function submatches() {
      if (this.ncap === 0) {
        return Utils.emptyInts();
      }
      return this.matchcap.slice(0, this.ncap);
    }

    // alloc() allocates a new thread with the given instruction.
    // It uses the free pool if possible.
  }, {
    key: "alloc",
    value: function alloc(inst) {
      var t;
      if (this.poolSize > 0) {
        this.poolSize--;
        t = this.pool[this.poolSize];
      } else {
        t = new Thread();
      }
      t.inst = inst;
      return t;
    }

    // Frees all threads on the thread queue, returning them to the free pool.
  }, {
    key: "freeQueue",
    value: function freeQueue(queue) {
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var numberOfThread = queue.size - from;
      var requiredPoolLength = this.poolSize + numberOfThread;
      if (this.pool.length < requiredPoolLength) {
        this.pool = this.pool.slice(0, Math.max(this.pool.length * 2, requiredPoolLength));
      }
      for (var i = from; i < queue.size; i++) {
        var t = queue.denseThreads[i];
        if (t !== null) {
          this.pool[this.poolSize] = t;
          this.poolSize++;
        }
      }
      queue.clear();
    }

    // freeThread() returns t to the free pool.
  }, {
    key: "freeThread",
    value: function freeThread(t) {
      if (this.pool.length <= this.poolSize) {
        this.pool = this.pool.slice(0, this.pool.length * 2);
      }
      this.pool[this.poolSize] = t;
      this.poolSize++;
    }
  }, {
    key: "match",
    value: function match(input, pos, anchor) {
      var startCond = this.re2.cond;
      if (startCond === Utils.EMPTY_ALL) {
        return false;
      }
      if ((anchor === RE2Flags.ANCHOR_START || anchor === RE2Flags.ANCHOR_BOTH) && pos !== 0) {
        return false;
      }
      this.matched = false;
      this.matchcap = Array(this.prog.numCap).fill(-1);
      var runq = this.q0;
      var nextq = this.q1;
      var r = input.step(pos);
      var rune = r >> 3;
      var width = r & 7;
      var rune1 = -1;
      var width1 = 0;
      if (r !== MachineInputBase.EOF()) {
        r = input.step(pos + width);
        rune1 = r >> 3;
        width1 = r & 7;
      }
      var flag;
      if (pos === 0) {
        flag = Utils.emptyOpContext(-1, rune);
      } else {
        flag = input.context(pos);
      }
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (runq.isEmpty()) {
          if ((startCond & Utils.EMPTY_BEGIN_TEXT) !== 0 && pos !== 0) {
            break;
          }
          if (this.matched) {
            break;
          }
          if (!(this.re2.prefix.length === 0) && rune1 !== this.re2.prefixRune && input.canCheckPrefix()) {
            var advance = input.index(this.re2, pos);
            if (advance < 0) {
              break;
            }
            pos += advance;
            r = input.step(pos);
            rune = r >> 3;
            width = r & 7;
            r = input.step(pos + width);
            rune1 = r >> 3;
            width1 = r & 7;
          }
        }
        if (!this.matched && (pos === 0 || anchor === RE2Flags.UNANCHORED)) {
          if (this.ncap > 0) {
            this.matchcap[0] = pos;
          }
          this.add(runq, this.prog.start, pos, this.matchcap, flag, null);
        }
        var nextPos = pos + width;
        flag = input.context(nextPos);
        this.step(runq, nextq, pos, nextPos, rune, flag, anchor, pos === input.endPos());
        if (width === 0) {
          break;
        }
        if (this.ncap === 0 && this.matched) {
          break;
        }
        pos += width;
        rune = rune1;
        width = width1;
        if (rune !== -1) {
          r = input.step(pos + width);
          rune1 = r >> 3;
          width1 = r & 7;
        }
        var tmpq = runq;
        runq = nextq;
        nextq = tmpq;
      }
      this.freeQueue(nextq);
      return this.matched;
    }
  }, {
    key: "step",
    value: function step(runq, nextq, pos, nextPos, c, nextCond, anchor, atEnd) {
      var longest = this.re2.longest;
      for (var j = 0; j < runq.size; j++) {
        var t = runq.denseThreads[j];
        if (t === null) {
          continue;
        }
        if (longest && this.matched && this.ncap > 0 && this.matchcap[0] < t.cap[0]) {
          this.freeThread(t);
          continue;
        }
        var i = t.inst;
        var add = false;
        switch (i.op) {
          case Inst.MATCH:
            if (anchor === RE2Flags.ANCHOR_BOTH && !atEnd) {
              break;
            }
            if (this.ncap > 0 && (!longest || !this.matched || this.matchcap[1] < pos)) {
              t.cap[1] = pos;
              this.matchcap = t.cap.slice(0, this.ncap);
            }
            if (!longest) {
              this.freeQueue(runq, j + 1);
            }
            this.matched = true;
            break;
          case Inst.RUNE:
            add = i.matchRune(c);
            break;
          case Inst.RUNE1:
            add = c === i.runes[0];
            break;
          case Inst.RUNE_ANY:
            add = true;
            break;
          case Inst.RUNE_ANY_NOT_NL:
            add = c !== Codepoint.CODES.get('\n');
            break;
          default:
            throw new Error('bad inst');
        }
        if (add) {
          t = this.add(nextq, i.out, nextPos, t.cap, nextCond, t);
        }
        if (t !== null) {
          this.freeThread(t);
          runq.denseThreads[j] = null;
        }
      }
      runq.clear();
    }
  }, {
    key: "add",
    value: function add(q, pc, pos, cap, cond, t) {
      if (pc === 0) {
        return t;
      }
      if (q.contains(pc)) {
        return t;
      }
      var d = q.add(pc);
      var inst = this.prog.inst[pc];
      switch (inst.op) {
        case Inst.FAIL:
          break;
        case Inst.ALT:
        case Inst.ALT_MATCH:
          t = this.add(q, inst.out, pos, cap, cond, t);
          t = this.add(q, inst.arg, pos, cap, cond, t);
          break;
        case Inst.EMPTY_WIDTH:
          if ((inst.arg & ~cond) === 0) {
            t = this.add(q, inst.out, pos, cap, cond, t);
          }
          break;
        case Inst.NOP:
          t = this.add(q, inst.out, pos, cap, cond, t);
          break;
        case Inst.CAPTURE:
          if (inst.arg < this.ncap) {
            var opos = cap[inst.arg];
            cap[inst.arg] = pos;
            this.add(q, inst.out, pos, cap, cond, null);
            cap[inst.arg] = opos;
          } else {
            t = this.add(q, inst.out, pos, cap, cond, t);
          }
          break;
        case Inst.MATCH:
        case Inst.RUNE:
        case Inst.RUNE1:
        case Inst.RUNE_ANY:
        case Inst.RUNE_ANY_NOT_NL:
          if (t === null) {
            t = this.alloc(inst);
          } else {
            t.inst = inst;
          }
          if (this.ncap > 0 && t.cap !== cap) {
            t.cap = cap.slice(0, this.ncap);
          }
          q.denseThreads[d] = t;
          t = null;
          break;
        default:
          throw new Error('unhandled');
      }
      return t;
    }
  }], [{
    key: "fromRE2",
    value: function fromRE2(re2) {
      var m = new Machine();
      m.prog = re2.prog;
      m.re2 = re2;
      m.q0 = new Queue(m.prog.numInst());
      m.q1 = new Queue(m.prog.numInst());
      m.pool = [];
      m.poolSize = 0;
      m.matched = false;
      m.matchcap = Array(m.prog.numCap < 2 ? 2 : m.prog.numCap).fill(0);
      m.ncap = 0;
      return m;
    }
  }, {
    key: "fromMachine",
    value: function fromMachine(machine) {
      var m = new Machine();
      m.re2 = machine.re2;
      m.prog = machine.prog;
      m.q0 = machine.q0;
      m.q1 = machine.q1;
      m.pool = machine.pool;
      m.poolSize = machine.poolSize;
      m.matched = machine.matched;
      m.matchcap = machine.matchcap;
      m.ncap = machine.ncap;
      return m;
    }
  }]);
}();

var AtomicReference = /*#__PURE__*/function () {
  function AtomicReference(initialValue) {
    _classCallCheck(this, AtomicReference);
    this.value = initialValue;
  }

  // Returns the current value
  return _createClass(AtomicReference, [{
    key: "get",
    value: function get() {
      return this.value;
    }

    // Sets to the given value
  }, {
    key: "set",
    value: function set(newValue) {
      this.value = newValue;
    }

    // Atomically sets to the given value and returns true if the current value == the expected value
  }, {
    key: "compareAndSet",
    value: function compareAndSet(expect, update) {
      if (this.value === expect) {
        this.value = update;
        return true;
      }
      return false;
    }
  }]);
}();
/**
 * An RE2 class instance is a compiled representation of an RE2 regular expression, independent of
 * the public Java-like Pattern/Matcher API.
 *
 * This class also contains various implementation helpers for RE2 regular expressions.
 *
 * Use the {@link #quoteMeta(String)} utility function to quote all regular expression
 * metacharacters in an arbitrary string.
 *
 */
var RE2 = /*#__PURE__*/function () {
  function RE2(expr, prog) {
    var numSubexp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var longest = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    _classCallCheck(this, RE2);
    this.expr = expr; // as passed to Compile
    this.prog = prog; // compiled program
    this.numSubexp = numSubexp;
    this.longest = longest;
    this.cond = prog.startCond(); // EMPTY_* bitmask: empty-width conditions
    this.prefix = null; // required UTF-16 prefix in unanchored matches
    this.prefixUTF8 = null; // required UTF-8 prefix in unanchored matches
    this.prefixComplete = false; // true if prefix is the entire regexp
    this.prefixRune = 0; // first rune in prefix
    this.pooled = new AtomicReference(); // Cache of machines for running regexp. Forms a Treiber stack.
  }

  /**
   * Returns the number of parenthesized subexpressions in this regular expression.
   */
  return _createClass(RE2, [{
    key: "numberOfCapturingGroups",
    value: function numberOfCapturingGroups() {
      return this.numSubexp;
    }

    // get() returns a machine to use for matching |this|.  It uses |this|'s
    // machine cache if possible, to avoid unnecessary allocation.
  }, {
    key: "get",
    value: function get() {
      // Pop a machine off the stack if available.
      var head;
      do {
        head = this.pooled.get();
      } while (head && !this.pooled.compareAndSet(head, head.next));
      return head;
    }

    // Clears the memory associated with this machine.
  }, {
    key: "reset",
    value: function reset() {
      this.pooled.set(null);
    }

    // put() returns a machine to |this|'s machine cache.  There is no attempt to
    // limit the size of the cache, so it will grow to the maximum number of
    // simultaneous matches run using |this|.  (The cache empties when |this|
    // gets garbage collected or reset is called.)
  }, {
    key: "put",
    value: function put(m, isNew) {
      // To avoid allocation in the single-thread or uncontended case, reuse a node only if
      // it was the only element in the stack when it was popped, and it's the only element
      // in the stack when it's pushed back after use.
      var head = this.pooled.get();
      do {
        head = this.pooled.get();
        if (!isNew && head) {
          // If an element had a null next pointer and it was previously in the stack, another thread
          // might be trying to pop it out right now, and if it sees the same node now in the
          // stack the pop will succeed, but the new top of the stack will be the stale (null) value
          // of next. Allocate a new Machine so that the CAS will not succeed if this node has been
          // popped and re-pushed.
          m = Machine.fromMachine(m);
          isNew = true;
        }

        // Without this comparison, TSAN will complain about a race condition:
        // Thread A, B, and C all attempt to do a match on the same pattern.
        //
        // A: Allocates Machine 1; executes match; put machine 1. State is now:
        //
        // pooled -> machine 1 -> null
        //
        // B reads pooled, sees machine 1
        //
        // C reads pooled, sees machine 1
        //
        // B successfully CASes pooled to null
        //
        // B executes match; put machine 1, which involves setting machine1.next to
        // null (even though it's already null); preempted before CAS
        //
        // C resumes, and reads machine1.next in order to execute cas(head, head.next)
        //
        // There is no happens-before relationship between B's redundant null write
        // and C's read, thus triggering TSAN.
        //
        // Not needed for JS code
        if (m.next !== head) {
          m.next = head;
        }
      } while (!this.pooled.compareAndSet(head, m));
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.expr;
    }

    // doExecute() finds the leftmost match in the input and returns
    // the position of its subexpressions.
    // Derived from exec.go.
  }, {
    key: "doExecute",
    value: function doExecute(input, pos, anchor, ncap) {
      var m = this.get();
      // The Treiber stack cannot reuse nodes, unless the node to be reused has only ever been at
      // the bottom of the stack (i.e., next == null).
      var isNew = false;
      if (!m) {
        m = Machine.fromRE2(this);
        isNew = true;
      } else if (m.next !== null) {
        m = Machine.fromMachine(m);
        isNew = true;
      }
      m.init(ncap);
      var cap = m.match(input, pos, anchor) ? m.submatches() : null;
      this.put(m, isNew);
      return cap;
    }
  }, {
    key: "match",
    value: function match(s) {
      return this.doExecute(MachineInput.fromUTF16(s), 0, RE2Flags.UNANCHORED, 0) !== null;
    }

    /**
     * Matches the regular expression against input starting at position start and ending at position
     * end, with the given anchoring. Records the submatch boundaries in group, which is [start, end)
     * pairs of byte offsets. The number of boundaries needed is inferred from the size of the group
     * array. It is most efficient not to ask for submatch boundaries.
     *
     * @param input the input byte array
     * @param start the beginning position in the input
     * @param end the end position in the input
     * @param anchor the anchoring flag (UNANCHORED, ANCHOR_START, ANCHOR_BOTH)
     * @param group the array to fill with submatch positions
     * @param ngroup the number of array pairs to fill in
     * @returns true if a match was found
     */
  }, {
    key: "matchWithGroup",
    value: function matchWithGroup(input, start, end, anchor, ngroup) {
      if (!(input instanceof MatcherInputBase)) {
        input = MatcherInput.utf16(input);
      }
      return this.matchMachineInput(input, start, end, anchor, ngroup);
    }
  }, {
    key: "matchMachineInput",
    value: function matchMachineInput(input, start, end, anchor, ngroup) {
      if (start > end) {
        return [false, null];
      }
      var machineInput = input.isUTF16Encoding() ? MachineInput.fromUTF16(input.asCharSequence(), 0, end) : MachineInput.fromUTF8(input.asBytes(), 0, end);
      var groupMatch = this.doExecute(machineInput, start, anchor, 2 * ngroup);
      if (groupMatch === null) {
        return [false, null];
      }
      return [true, groupMatch];
    }

    /**
     * Returns true iff this regexp matches the UTF-8 byte array {@code b}.
     */
    // This is visible for testing.
  }, {
    key: "matchUTF8",
    value: function matchUTF8(b) {
      return this.doExecute(MachineInput.fromUTF8(b), 0, RE2Flags.UNANCHORED, 0) !== null;
    }

    /**
     * Returns a copy of {@code src} in which all matches for this regexp have been replaced by
     * {@code repl}. No support is provided for expressions (e.g. {@code \1} or {@code $1}) in the
     * replacement string.
     */
    // This is visible for testing.
  }, {
    key: "replaceAll",
    value: function replaceAll(src, repl) {
      return this.replaceAllFunc(src, function () {
        return repl;
      }, 2 * src.length + 1);
    }

    /**
     * Returns a copy of {@code src} in which only the first match for this regexp has been replaced
     * by {@code repl}. No support is provided for expressions (e.g. {@code \1} or {@code $1}) in the
     * replacement string.
     */
    // This is visible for testing.
  }, {
    key: "replaceFirst",
    value: function replaceFirst(src, repl) {
      return this.replaceAllFunc(src, function () {
        return repl;
      }, 1);
    }

    /**
     * Returns a copy of {@code src} in which at most {@code maxReplaces} matches for this regexp have
     * been replaced by the return value of of function {@code repl} (whose first argument is the
     * matched string). No support is provided for expressions (e.g. {@code \1} or {@code $1}) in the
     * replacement string.
     */
    // This is visible for testing.
  }, {
    key: "replaceAllFunc",
    value: function replaceAllFunc(src, replFunc, maxReplaces) {
      var lastMatchEnd = 0;
      var searchPos = 0;
      var out = '';
      var input = MachineInput.fromUTF16(src);
      var numReplaces = 0;
      while (searchPos <= src.length) {
        var a = this.doExecute(input, searchPos, RE2Flags.UNANCHORED, 2);
        if (a === null || a.length === 0) {
          break;
        }
        out += src.substring(lastMatchEnd, a[0]);
        if (a[1] > lastMatchEnd || a[0] === 0) {
          out += replFunc(src.substring(a[0], a[1]));
          numReplaces++;
        }
        lastMatchEnd = a[1];
        var width = input.step(searchPos) & 7;
        if (searchPos + width > a[1]) {
          searchPos += width;
        } else if (searchPos + 1 > a[1]) {
          searchPos++;
        } else {
          searchPos = a[1];
        }
        if (numReplaces >= maxReplaces) {
          break;
        }
      }
      out += src.substring(lastMatchEnd);
      return out;
    }

    // The number of capture values in the program may correspond
    // to fewer capturing expressions than are in the regexp.
    // For example, "(a){0}" turns into an empty program, so the
    // maximum capture in the program is 0 but we need to return
    // an expression for \1.  Pad returns a with -1s appended as needed;
    // the result may alias a.
  }, {
    key: "pad",
    value: function pad(a) {
      if (a === null) {
        return null;
      }
      var n = (1 + this.numSubexp) * 2;
      if (a.length < n) {
        var a2 = new Array(n).fill(-1);
        for (var i = 0; i < a.length; i++) {
          a2[i] = a[i];
        }
        a = a2;
      }
      return a;
    }

    // Find matches in input.
  }, {
    key: "allMatches",
    value: function allMatches(input, n) {
      var deliverFun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (v) {
        return v;
      };
      var result = [];
      var end = input.endPos();
      if (n < 0) {
        n = end + 1;
      }
      var pos = 0;
      var i = 0;
      var prevMatchEnd = -1;
      while (i < n && pos <= end) {
        var matches = this.doExecute(input, pos, RE2Flags.UNANCHORED, this.prog.numCap);
        if (matches === null || matches.length === 0) {
          break;
        }
        var accept = true;
        if (matches[1] === pos) {
          if (matches[0] === prevMatchEnd) {
            accept = false;
          }
          var r = input.step(pos);
          if (r < 0) {
            pos = end + 1;
          } else {
            pos += r & 7;
          }
        } else {
          pos = matches[1];
        }
        prevMatchEnd = matches[1];
        if (accept) {
          result.push(deliverFun(this.pad(matches)));
          i++;
        }
      }
      return result;
    }

    // Legacy Go-style interface; preserved (package-private) for better
    // test coverage.
    //
    // There are 16 methods of RE2 that match a regular expression and
    // identify the matched text.  Their names are matched by this regular
    // expression:
    //
    //    find(All)?(UTF8)?(Submatch)?(Index)?
    //
    // If 'All' is present, the routine matches successive non-overlapping
    // matches of the entire expression.  Empty matches abutting a
    // preceding match are ignored.  The return value is an array
    // containing the successive return values of the corresponding
    // non-All routine.  These routines take an extra integer argument, n;
    // if n >= 0, the function returns at most n matches/submatches.
    //
    // If 'UTF8' is present, the argument is a UTF-8 encoded byte[] array;
    // otherwise it is a UTF-16 encoded js string; return values
    // are adjusted as appropriate.
    //
    // If 'Submatch' is present, the return value is an list identifying
    // the successive submatches of the expression.  Submatches are
    // matches of parenthesized subexpressions within the regular
    // expression, numbered from left to right in order of opening
    // parenthesis.  Submatch 0 is the match of the entire expression,
    // submatch 1 the match of the first parenthesized subexpression, and
    // so on.
    //
    // If 'Index' is present, matches and submatches are identified by
    // byte index pairs within the input string: result[2*n:2*n+1]
    // identifies the indexes of the nth submatch.  The pair for n==0
    // identifies the match of the entire expression.  If 'Index' is not
    // present, the match is identified by the text of the match/submatch.
    // If an index is negative, it means that subexpression did not match
    // any string in the input.

    /**
     * Returns an array holding the text of the leftmost match in {@code b} of this regular
     * expression.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findUTF8",
    value: function findUTF8(b) {
      var a = this.doExecute(MachineInput.fromUTF8(b), 0, RE2Flags.UNANCHORED, 2);
      if (a === null) {
        return null;
      }
      return b.slice(a[0], a[1]);
    }

    /**
     * Returns a two-element array of integers defining the location of the leftmost match in
     * {@code b} of this regular expression. The match itself is at {@code b[loc[0]...loc[1]]}.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findUTF8Index",
    value: function findUTF8Index(b) {
      var a = this.doExecute(MachineInput.fromUTF8(b), 0, RE2Flags.UNANCHORED, 2);
      if (a === null) {
        return null;
      }
      return a.slice(0, 2);
    }

    /**
     * Returns a string holding the text of the leftmost match in {@code s} of this regular
     * expression.
     *
     * If there is no match, the return value is an empty string, but it will also be empty if the
     * regular expression successfully matches an empty string. Use {@link #findIndex} or
     * {@link #findSubmatch} if it is necessary to distinguish these cases.
     */
    // This is visible for testing.
  }, {
    key: "find",
    value: function find(s) {
      var a = this.doExecute(MachineInput.fromUTF16(s), 0, RE2Flags.UNANCHORED, 2);
      if (a === null) {
        return '';
      }
      return s.substring(a[0], a[1]);
    }

    /**
     * Returns a two-element array of integers defining the location of the leftmost match in
     * {@code s} of this regular expression. The match itself is at
     * {@code s.substring(loc[0], loc[1])}.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findIndex",
    value: function findIndex(s) {
      return this.doExecute(MachineInput.fromUTF16(s), 0, RE2Flags.UNANCHORED, 2);
    }

    /**
     * Returns an array of arrays the text of the leftmost match of the regular expression in
     * {@code b} and the matches, if any, of its subexpressions, as defined by the <a
     * href='#submatch'>Submatch</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findUTF8Submatch",
    value: function findUTF8Submatch(b) {
      var a = this.doExecute(MachineInput.fromUTF8(b), 0, RE2Flags.UNANCHORED, this.prog.numCap);
      if (a === null) {
        return null;
      }
      var ret = new Array(1 + this.numSubexp).fill(null);
      for (var i = 0; i < ret.length; i++) {
        if (2 * i < a.length && a[2 * i] >= 0) {
          ret[i] = b.slice(a[2 * i], a[2 * i + 1]);
        }
      }
      return ret;
    }

    /**
     * Returns an array holding the index pairs identifying the leftmost match of this regular
     * expression in {@code b} and the matches, if any, of its subexpressions, as defined by the the
     * <a href='#submatch'>Submatch</a> and <a href='#index'>Index</a> descriptions above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findUTF8SubmatchIndex",
    value: function findUTF8SubmatchIndex(b) {
      return this.pad(this.doExecute(MachineInput.fromUTF8(b), 0, RE2Flags.UNANCHORED, this.prog.numCap));
    }

    /**
     * Returns an array of strings holding the text of the leftmost match of the regular expression in
     * {@code s} and the matches, if any, of its subexpressions, as defined by the <a
     * href='#submatch'>Submatch</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findSubmatch",
    value: function findSubmatch(s) {
      var a = this.doExecute(MachineInput.fromUTF16(s), 0, RE2Flags.UNANCHORED, this.prog.numCap);
      if (a === null) {
        return null;
      }
      var ret = new Array(1 + this.numSubexp).fill(null);
      for (var i = 0; i < ret.length; i++) {
        if (2 * i < a.length && a[2 * i] >= 0) {
          ret[i] = s.substring(a[2 * i], a[2 * i + 1]);
        }
      }
      return ret;
    }

    /**
     * Returns an array holding the index pairs identifying the leftmost match of this regular
     * expression in {@code s} and the matches, if any, of its subexpressions, as defined by the <a
     * href='#submatch'>Submatch</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findSubmatchIndex",
    value: function findSubmatchIndex(s) {
      return this.pad(this.doExecute(MachineInput.fromUTF16(s), 0, RE2Flags.UNANCHORED, this.prog.numCap));
    }

    /**
     * {@code findAllUTF8()} is the <a href='#all'>All</a> version of {@link #findUTF8}; it returns a
     * list of up to {@code n} successive matches of the expression, as defined by the <a
     * href='#all'>All</a> description above.
     *
     * A return value of null indicates no match.
     *
     * TODO(adonovan): think about defining a byte slice view class, like a read-only Go slice backed
     * by |b|.
     */
    // This is visible for testing.
  }, {
    key: "findAllUTF8",
    value: function findAllUTF8(b, n) {
      var result = this.allMatches(MachineInput.fromUTF8(b), n, function (match) {
        return b.slice(match[0], match[1]);
      });
      if (result.length === 0) {
        return null;
      }
      return result;
    }

    /**
     * {@code findAllUTF8Index} is the <a href='#all'>All</a> version of {@link #findUTF8Index}; it
     * returns a list of up to {@code n} successive matches of the expression, as defined by the <a
     * href='#all'>All</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findAllUTF8Index",
    value: function findAllUTF8Index(b, n) {
      var result = this.allMatches(MachineInput.fromUTF8(b), n, function (match) {
        return match.slice(0, 2);
      });
      if (result.length === 0) {
        return null;
      }
      return result;
    }

    /**
     * {@code findAll} is the <a href='#all'>All</a> version of {@link #find}; it returns a list of up
     * to {@code n} successive matches of the expression, as defined by the <a href='#all'>All</a>
     * description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findAll",
    value: function findAll(s, n) {
      var result = this.allMatches(MachineInput.fromUTF16(s), n, function (match) {
        return s.substring(match[0], match[1]);
      });
      if (result.length === 0) {
        return null;
      }
      return result;
    }

    /**
     * {@code findAllIndex} is the <a href='#all'>All</a> version of {@link #findIndex}; it returns a
     * list of up to {@code n} successive matches of the expression, as defined by the <a
     * href='#all'>All</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findAllIndex",
    value: function findAllIndex(s, n) {
      var result = this.allMatches(MachineInput.fromUTF16(s), n, function (match) {
        return match.slice(0, 2);
      });
      if (result.length === 0) {
        return null;
      }
      return result;
    }

    /**
     * {@code findAllUTF8Submatch} is the <a href='#all'>All</a> version of {@link #findUTF8Submatch};
     * it returns a list of up to {@code n} successive matches of the expression, as defined by the <a
     * href='#all'>All</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findAllUTF8Submatch",
    value: function findAllUTF8Submatch(b, n) {
      var result = this.allMatches(MachineInput.fromUTF8(b), n, function (match) {
        var slice = new Array(match.length / 2 | 0).fill(null);
        for (var j = 0; j < slice.length; j++) {
          if (match[2 * j] >= 0) {
            slice[j] = b.slice(match[2 * j], match[2 * j + 1]);
          }
        }
        return slice;
      });
      if (result.length === 0) {
        return null;
      }
      return result;
    }

    /**
     * {@code findAllUTF8SubmatchIndex} is the <a href='#all'>All</a> version of
     * {@link #findUTF8SubmatchIndex}; it returns a list of up to {@code n} successive matches of the
     * expression, as defined by the <a href='#all'>All</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findAllUTF8SubmatchIndex",
    value: function findAllUTF8SubmatchIndex(b, n) {
      var result = this.allMatches(MachineInput.fromUTF8(b), n);
      if (result.length === 0) {
        return null;
      }
      return result;
    }

    /**
     * {@code findAllSubmatch} is the <a href='#all'>All</a> version of {@link #findSubmatch}; it
     * returns a list of up to {@code n} successive matches of the expression, as defined by the <a
     * href='#all'>All</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findAllSubmatch",
    value: function findAllSubmatch(s, n) {
      var result = this.allMatches(MachineInput.fromUTF16(s), n, function (match) {
        var slice = new Array(match.length / 2 | 0).fill(null);
        for (var j = 0; j < slice.length; j++) {
          if (match[2 * j] >= 0) {
            slice[j] = s.substring(match[2 * j], match[2 * j + 1]);
          }
        }
        return slice;
      });
      if (result.length === 0) {
        return null;
      }
      return result;
    }

    /**
     * {@code findAllSubmatchIndex} is the <a href='#all'>All</a> version of
     * {@link #findSubmatchIndex}; it returns a list of up to {@code n} successive matches of the
     * expression, as defined by the <a href='#all'>All</a> description above.
     *
     * A return value of null indicates no match.
     */
    // This is visible for testing.
  }, {
    key: "findAllSubmatchIndex",
    value: function findAllSubmatchIndex(s, n) {
      var result = this.allMatches(MachineInput.fromUTF16(s), n);
      if (result.length === 0) {
        return null;
      }
      return result;
    }
  }], [{
    key: "initTest",
    value:
    // This is visible for testing.
    function initTest(expr) {
      var re2 = RE2.compile(expr);
      var res = new RE2(re2.expr, re2.prog, re2.numSubexp, re2.longest);
      res.cond = re2.cond;
      res.prefix = re2.prefix;
      res.prefixUTF8 = re2.prefixUTF8;
      res.prefixComplete = re2.prefixComplete;
      res.prefixRune = re2.prefixRune;
      return res;
    }

    /**
     * Parses a regular expression and returns, if successful, an {@code RE2} instance that can be
     * used to match against text.
     *
     * When matching against text, the regexp returns a match that begins as early as possible in the
     * input (leftmost), and among those it chooses the one that a backtracking search would have
     * found first. This so-called leftmost-first matching is the same semantics that Perl, Python,
     * and other implementations use, although this package implements it without the expense of
     * backtracking. For POSIX leftmost-longest matching, see {@link #compilePOSIX}.
     */
  }, {
    key: "compile",
    value: function compile(expr) {
      return RE2.compileImpl(expr, RE2Flags.PERL, false);
    }

    /**
     * {@code compilePOSIX} is like {@link #compile} but restricts the regular expression to POSIX ERE
     * (egrep) syntax and changes the match semantics to leftmost-longest.
     *
     * That is, when matching against text, the regexp returns a match that begins as early as
     * possible in the input (leftmost), and among those it chooses a match that is as long as
     * possible. This so-called leftmost-longest matching is the same semantics that early regular
     * expression implementations used and that POSIX specifies.
     *
     * However, there can be multiple leftmost-longest matches, with different submatch choices, and
     * here this package diverges from POSIX. Among the possible leftmost-longest matches, this
     * package chooses the one that a backtracking search would have found first, while POSIX
     * specifies that the match be chosen to maximize the length of the first subexpression, then the
     * second, and so on from left to right. The POSIX rule is computationally prohibitive and not
     * even well-defined. See http://swtch.com/~rsc/regexp/regexp2.html#posix
     */
  }, {
    key: "compilePOSIX",
    value: function compilePOSIX(expr) {
      return RE2.compileImpl(expr, RE2Flags.POSIX, true);
    }

    // Exposed to ExecTests.
  }, {
    key: "compileImpl",
    value: function compileImpl(expr, mode, longest) {
      var re = Parser.parse(expr, mode);
      var maxCap = re.maxCap();
      re = Simplify.simplify(re);
      var prog = Compiler.compileRegexp(re);
      var re2 = new RE2(expr, prog, maxCap, longest);
      var _prog$prefix = prog.prefix(),
        _prog$prefix2 = _slicedToArray(_prog$prefix, 2),
        prefixCompl = _prog$prefix2[0],
        prefixStr = _prog$prefix2[1];
      re2.prefixComplete = prefixCompl;
      re2.prefix = prefixStr;
      re2.prefixUTF8 = Utils.stringToUtf8ByteArray(re2.prefix);
      if (re2.prefix.length > 0) {
        re2.prefixRune = re2.prefix.codePointAt(0);
      }
      re2.namedGroups = re.namedGroups;
      return re2;
    }

    /**
     * Returns true iff textual regular expression {@code pattern} matches string {@code s}.
     *
     * More complicated queries need to use {@link #compile} and the full {@code RE2} interface.
     */
    // This is visible for testing.
  }, {
    key: "match",
    value: function match(pattern, s) {
      return RE2.compile(pattern).match(s);
    }
  }]);
}();

/**
 * A compiled representation of an RE2 regular expression
 *
 * The matching functions take {@code String} arguments instead of the more general Java
 * {@code CharSequence} since the latter doesn't provide UTF-16 decoding.
 *
 *
 * @author rsc@google.com (Russ Cox)
 * @class
 */
var RE2JS = /*#__PURE__*/function () {
  /**
   *
   * @param {string} pattern
   * @param {number} flags
   */
  function RE2JS(pattern, flags) {
    _classCallCheck(this, RE2JS);
    // The pattern string at construction time.
    this.patternInput = pattern;
    // The flags at construction time.
    this.flagsInput = flags;
  }

  /**
   * Releases memory used by internal caches associated with this pattern. Does not change the
   * observable behaviour. Useful for tests that detect memory leaks via allocation tracking.
   */
  return _createClass(RE2JS, [{
    key: "reset",
    value: function reset() {
      this.re2Input.reset();
    }

    /**
     * Returns the flags used in the constructor.
     * @returns {number}
     */
  }, {
    key: "flags",
    value: function flags() {
      return this.flagsInput;
    }

    /**
     * Returns the pattern used in the constructor.
     * @returns {string}
     */
  }, {
    key: "pattern",
    value: function pattern() {
      return this.patternInput;
    }
  }, {
    key: "re2",
    value: function re2() {
      return this.re2Input;
    }

    /**
     * Matches a string against a regular expression.
     *
     * @param {string|number[]} input the input
     * @returns {boolean} true if the regular expression matches the entire input
     */
  }, {
    key: "matches",
    value: function matches(input) {
      return this.matcher(input).matches();
    }

    /**
     * Creates a new {@code Matcher} matching the pattern against the input.
     *
     * @param {string|number[]} input the input string
     * @returns {Matcher}
     */
  }, {
    key: "matcher",
    value: function matcher(input) {
      if (Array.isArray(input)) {
        input = MatcherInput.utf8(input);
      }
      return new Matcher(this, input);
    }

    /**
     * Splits input around instances of the regular expression. It returns an array giving the strings
     * that occur before, between, and after instances of the regular expression.
     *
     * If {@code limit <= 0}, there is no limit on the size of the returned array. If
     * {@code limit == 0}, empty strings that would occur at the end of the array are omitted. If
     * {@code limit > 0}, at most limit strings are returned. The final string contains the remainder
     * of the input, possibly including additional matches of the pattern.
     *
     * @param {string} input the input string to be split
     * @param {number} [limit=0] the limit
     * @returns {string[]} the split strings
     */
  }, {
    key: "split",
    value: function split(input) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m = this.matcher(input);
      var result = [];
      var emptiesSkipped = 0;
      var last = 0;
      while (m.find()) {
        if (last === 0 && m.end() === 0) {
          // Zero-width match at the beginning, skip
          last = m.end();
          continue;
        }
        if (limit > 0 && result.length === limit - 1) {
          // no more room for matches
          break;
        }
        if (last === m.start()) {
          // Empty match, may or may not be trailing.
          if (limit === 0) {
            emptiesSkipped += 1;
            last = m.end();
            continue;
          }
        } else {
          // If emptiesSkipped > 0 then limit == 0 and we have non-trailing empty matches to add before
          // this non-empty match.
          while (emptiesSkipped > 0) {
            result.push('');
            emptiesSkipped -= 1;
          }
        }
        result.push(m.substring(last, m.start()));
        last = m.end();
      }
      if (limit === 0 && last !== m.inputLength()) {
        // Unlimited match, no more delimiters but we have a non-empty input at the end. Catch up any skipped empty
        // matches, then emit the final match.
        while (emptiesSkipped > 0) {
          result.push('');
          emptiesSkipped -= 1;
        }
        result.push(m.substring(last, m.inputLength()));
      }
      if (limit !== 0 || result.length === 0) {
        result.push(m.substring(last, m.inputLength()));
      }
      return result;
    }

    /**
     *
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      return this.patternInput;
    }

    /**
     * Returns the number of capturing groups in this matcher's pattern. Group zero denotes the entire
     * pattern and is excluded from this count.
     *
     * @returns {number} the number of capturing groups in this pattern
     */
  }, {
    key: "groupCount",
    value: function groupCount() {
      return this.re2Input.numberOfCapturingGroups();
    }

    /**
     * Return a map of the capturing groups in this matcher's pattern, where key is the name and value
     * is the index of the group in the pattern.
     * @returns {*}
     */
  }, {
    key: "namedGroups",
    value: function namedGroups() {
      return this.re2Input.namedGroups;
    }

    /**
     *
     * @param {*} other
     * @returns {boolean}
     */
  }, {
    key: "equals",
    value: function equals(other) {
      if (this === other) {
        return true;
      }
      if (other === null || this.constructor !== other.constructor) {
        return false;
      }
      return this.flagsInput === other.flagsInput && this.patternInput === other.patternInput;
    }
  }], [{
    key: "quote",
    value:
    /**
     * Returns a literal pattern string for the specified string.
     *
     * This method produces a string that can be used to create a <code>RE2JS</code> that would
     * match the string <code>s</code> as if it were a literal pattern.
     *
     * Metacharacters or escape sequences in the input sequence will be given no special meaning.
     *
     * @param {string} str The string to be literalized
     * @returns {string} A literal string replacement
     */
    function quote(str) {
      return Utils.quoteMeta(str);
    }

    /**
     * Helper: create new RE2JS with given regex and flags. Flregex is the regex with flags applied.
     * @param {string} regex
     * @param {number} [flags=0]
     * @returns {RE2JS}
     */
  }, {
    key: "compile",
    value: function compile(regex) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fregex = regex;
      if ((flags & RE2JS.CASE_INSENSITIVE) !== 0) {
        fregex = "(?i)".concat(fregex);
      }
      if ((flags & RE2JS.DOTALL) !== 0) {
        fregex = "(?s)".concat(fregex);
      }
      if ((flags & RE2JS.MULTILINE) !== 0) {
        fregex = "(?m)".concat(fregex);
      }
      if ((flags & ~(RE2JS.MULTILINE | RE2JS.DOTALL | RE2JS.CASE_INSENSITIVE | RE2JS.DISABLE_UNICODE_GROUPS | RE2JS.LONGEST_MATCH)) !== 0) {
        throw new RE2JSFlagsException('Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH');
      }
      var re2Flags = RE2Flags.PERL;
      if ((flags & RE2JS.DISABLE_UNICODE_GROUPS) !== 0) {
        re2Flags &= ~RE2Flags.UNICODE_GROUPS;
      }
      var p = new RE2JS(regex, flags);
      // The compiled RE2 regexp.
      p.re2Input = RE2.compileImpl(fregex, re2Flags, (flags & RE2JS.LONGEST_MATCH) !== 0);
      return p;
    }

    /**
     * Matches a string against a regular expression.
     *
     * @param {string} regex the regular expression
     * @param {string|number[]} input the input
     * @returns {boolean} true if the regular expression matches the entire input
     * @throws RE2JSSyntaxException if the regular expression is malformed
     */
  }, {
    key: "matches",
    value: function matches(regex, input) {
      return RE2JS.compile(regex).matcher(input).matches();
    }

    /**
     * This is visible for testing.
     * @private
     */
  }, {
    key: "initTest",
    value: function initTest(pattern, flags, re2) {
      if (pattern == null) {
        throw new Error('pattern is null');
      }
      if (re2 == null) {
        throw new Error('re2 is null');
      }
      var p = new RE2JS(pattern, flags);
      // The compiled RE2 regexp.
      p.re2Input = re2;
      return p;
    }
  }]);
}();
/**
 * Flag: case insensitive matching.
 */
_defineProperty(RE2JS, "CASE_INSENSITIVE", 1);
/**
 * Flag: dot ({@code .}) matches all characters, including newline.
 */
_defineProperty(RE2JS, "DOTALL", 2);
/**
 * Flag: multiline matching: {@code ^} and {@code $} match at beginning and end of line, not just
 * beginning and end of input.
 */
_defineProperty(RE2JS, "MULTILINE", 4);
/**
 * Flag: Unicode groups (e.g. {@code \p\ Greek\} ) will be syntax errors.
 */
_defineProperty(RE2JS, "DISABLE_UNICODE_GROUPS", 8);
/**
 * Flag: matches longest possible string.
 */
_defineProperty(RE2JS, "LONGEST_MATCH", 16);

exports.RE2JS = RE2JS;
exports.RE2JSCompileException = RE2JSCompileException;
exports.RE2JSException = RE2JSException;
exports.RE2JSFlagsException = RE2JSFlagsException;
exports.RE2JSGroupException = RE2JSGroupException;
exports.RE2JSSyntaxException = RE2JSSyntaxException;
//# sourceMappingURL=index.cjs.map
