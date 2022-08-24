"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
import regeneratorRuntime from "regenerator-runtime";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// index.ts
var vite_plugin_copy2_exports = {};
__export(vite_plugin_copy2_exports, {
    VitePluginCopy: function() {
        return VitePluginCopy;
    }
});
module.exports = __toCommonJS(vite_plugin_copy2_exports);
var import_node_fs = __toESM(require("fs"), 1);
var import_promises = __toESM(require("fs/promises"), 1);
var import_node_path = __toESM(require("path"), 1);
function checkDir(dest) {
    return _checkDir.apply(this, arguments);
}
function _checkDir() {
    _checkDir = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee(dest) {
        var parents;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    parents = import_node_path.default.dirname(dest);
                    _ctx.next = 3;
                    return import_promises.default.access(parents, import_node_fs.default.constants.F_OK).catch(function() {
                        var _ref = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee(err) {
                            return regeneratorRuntime.wrap(function _callee$(_ctx) {
                                while(1)switch(_ctx.prev = _ctx.next){
                                    case 0:
                                        if (!(err.code == "ENOENT")) {
                                            _ctx.next = 3;
                                            break;
                                        }
                                        _ctx.next = 3;
                                        return checkDir(parents);
                                    case 3:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return function(err) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                case 3:
                    _ctx.next = 5;
                    return import_promises.default.access(dest, import_node_fs.default.constants.F_OK).catch(function() {
                        var _ref = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee(err) {
                            return regeneratorRuntime.wrap(function _callee$(_ctx) {
                                while(1)switch(_ctx.prev = _ctx.next){
                                    case 0:
                                        if (!(err.code == "ENOENT")) {
                                            _ctx.next = 3;
                                            break;
                                        }
                                        _ctx.next = 3;
                                        return import_promises.default.mkdir(dest);
                                    case 3:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        }));
                        return function(err) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                case 5:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _checkDir.apply(this, arguments);
}
function copyDir(src, dest) {
    return _copyDir.apply(this, arguments);
}
function _copyDir() {
    _copyDir = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee(src, dest) {
        var rd, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fd, sourceFullName, destFullName;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    rd = import_node_fs.default.readdirSync(src);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _ctx.prev = 2;
                    _iterator = rd[Symbol.iterator]();
                case 4:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _ctx.next = 19;
                        break;
                    }
                    fd = _step.value;
                    sourceFullName = import_node_path.default.join(src, fd);
                    destFullName = import_node_path.default.join(dest, fd);
                    if (!import_node_fs.default.lstatSync(sourceFullName).isDirectory()) {
                        _ctx.next = 14;
                        break;
                    }
                    _ctx.next = 11;
                    return checkDir(destFullName);
                case 11:
                    copyDir(sourceFullName, destFullName);
                    _ctx.next = 16;
                    break;
                case 14:
                    _ctx.next = 16;
                    return import_node_fs.default.copyFileSync(sourceFullName, destFullName);
                case 16:
                    _iteratorNormalCompletion = true;
                    _ctx.next = 4;
                    break;
                case 19:
                    _ctx.next = 25;
                    break;
                case 21:
                    _ctx.prev = 21;
                    _ctx.t0 = _ctx["catch"](2);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t0;
                case 25:
                    _ctx.prev = 25;
                    _ctx.prev = 26;
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                case 28:
                    _ctx.prev = 28;
                    if (!_didIteratorError) {
                        _ctx.next = 31;
                        break;
                    }
                    throw _iteratorError;
                case 31:
                    return _ctx.finish(28);
                case 32:
                    return _ctx.finish(25);
                case 33:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                2,
                21,
                25,
                33
            ],
            [
                26,
                ,
                28,
                32
            ]
        ]);
    }));
    return _copyDir.apply(this, arguments);
}
function VitePluginCopy(copyList) {
    return {
        name: "vit-plugin-copy2",
        apply: "build",
        generateBundle: /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, src, dest, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, s;
            return regeneratorRuntime.wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!Array.isArray(copyList)) {
                            _ctx.next = 58;
                            break;
                        }
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        _ctx.prev = 2;
                        _iterator = copyList[Symbol.iterator]();
                    case 4:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _ctx.next = 44;
                            break;
                        }
                        _value = _step.value, src = _value.src, dest = _value.dest;
                        _ctx.next = 8;
                        return checkDir(dest);
                    case 8:
                        if (!Array.isArray(src)) {
                            _ctx.next = 35;
                            break;
                        }
                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        _ctx.prev = 10;
                        _iterator1 = src[Symbol.iterator]();
                    case 12:
                        if (_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done) {
                            _ctx.next = 19;
                            break;
                        }
                        s = _step1.value;
                        _ctx.next = 16;
                        return import_node_fs.default.copyFileSync(s, import_node_path.default.join(dest, import_node_path.default.basename(s)));
                    case 16:
                        _iteratorNormalCompletion1 = true;
                        _ctx.next = 12;
                        break;
                    case 19:
                        _ctx.next = 25;
                        break;
                    case 21:
                        _ctx.prev = 21;
                        _ctx.t0 = _ctx["catch"](10);
                        _didIteratorError1 = true;
                        _iteratorError1 = _ctx.t0;
                    case 25:
                        _ctx.prev = 25;
                        _ctx.prev = 26;
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    case 28:
                        _ctx.prev = 28;
                        if (!_didIteratorError1) {
                            _ctx.next = 31;
                            break;
                        }
                        throw _iteratorError1;
                    case 31:
                        return _ctx.finish(28);
                    case 32:
                        return _ctx.finish(25);
                    case 33:
                        _ctx.next = 41;
                        break;
                    case 35:
                        if (!import_node_fs.default.lstatSync(src).isDirectory()) {
                            _ctx.next = 39;
                            break;
                        }
                        {
                            copyDir(src, dest);
                        }
                        _ctx.next = 41;
                        break;
                    case 39:
                        _ctx.next = 41;
                        return import_node_fs.default.copyFileSync(src, import_node_path.default.join(dest, import_node_path.default.basename(src)));
                    case 41:
                        _iteratorNormalCompletion = true;
                        _ctx.next = 4;
                        break;
                    case 44:
                        _ctx.next = 50;
                        break;
                    case 46:
                        _ctx.prev = 46;
                        _ctx.t1 = _ctx["catch"](2);
                        _didIteratorError = true;
                        _iteratorError = _ctx.t1;
                    case 50:
                        _ctx.prev = 50;
                        _ctx.prev = 51;
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    case 53:
                        _ctx.prev = 53;
                        if (!_didIteratorError) {
                            _ctx.next = 56;
                            break;
                        }
                        throw _iteratorError;
                    case 56:
                        return _ctx.finish(53);
                    case 57:
                        return _ctx.finish(50);
                    case 58:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    2,
                    46,
                    50,
                    58
                ],
                [
                    10,
                    21,
                    25,
                    33
                ],
                [
                    26,
                    ,
                    28,
                    32
                ],
                [
                    51,
                    ,
                    53,
                    57
                ]
            ]);
        }))
    };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    VitePluginCopy: VitePluginCopy
});
