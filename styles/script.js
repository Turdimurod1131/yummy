// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */
    var globalObject =
        typeof globalThis !== 'undefined'
            ? globalThis
            : typeof self !== 'undefined'
                ? self
                : typeof window !== 'undefined'
                    ? window
                    : typeof global !== 'undefined'
                        ? global
                        : {};
    /* eslint-enable no-undef */

    // Save the require from previous bundle to this closure if any
    var previousRequire =
        typeof globalObject[parcelRequireName] === 'function' &&
        globalObject[parcelRequireName];

    var cache = previousRequire.cache || {};
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire =
        typeof module !== 'undefined' &&
        typeof module.require === 'function' &&
        module.require.bind(module);

    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire =
                    typeof globalObject[parcelRequireName] === 'function' &&
                    globalObject[parcelRequireName];
                if (!jumped && currentRequire) {
                    return currentRequire(name, true);
                }

                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) {
                    return previousRequire(name, true);
                }

                // Try the node require function if it exists.
                if (nodeRequire && typeof name === 'string') {
                    return nodeRequire(name);
                }

                var err = new Error("Cannot find module '" + name + "'");
                err.code = 'MODULE_NOT_FOUND';
                throw err;
            }

            localRequire.resolve = resolve;
            localRequire.cache = {};

            var module = (cache[name] = new newRequire.Module(name));

            modules[name][0].call(
                module.exports,
                localRequire,
                module,
                module.exports,
                this
            );
        }

        return cache[name].exports;

        function localRequire(x) {
            var res = localRequire.resolve(x);
            return res === false ? {} : newRequire(res);
        }

        function resolve(x) {
            var id = modules[name][1][x];
            return id != null ? id : x;
        }
    }

    function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
    }

    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
        modules[id] = [
            function (require, module) {
                module.exports = exports;
            },
            {},
        ];
    };

    Object.defineProperty(newRequire, 'root', {
        get: function () {
            return globalObject[parcelRequireName];
        },
    });

    globalObject[parcelRequireName] = newRequire;

    for (var i = 0; i < entry.length; i++) {
        newRequire(entry[i]);
    }

    if (mainEntry) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(mainEntry);

        // CommonJS
        if (typeof exports === 'object' && typeof module !== 'undefined') {
            module.exports = mainExports;

            // RequireJS
        } else if (typeof define === 'function' && define.amd) {
            define(function () {
                return mainExports;
            });

            // <script>
        } else if (globalName) {
            this[globalName] = mainExports;
        }
    }
})({
    "fA0o9": [function (require, module, exports) {
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = "d6ea1d42532a7575";
        module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
        "use strict";
  /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
  import type {
    HMRAsset,
    HMRMessage,
  } from '@parcel/reporter-dev-server/src/HMRServer.js';
  interface ParcelRequire {
    (string): mixed;
    cache: {|[string]: ParcelModule|};
    hotData: mixed;
    Module: any;
    parent: ?ParcelRequire;
    isParcelRequire: true;
    modules: {|[string]: [Function, {|[string]: string|}]|};
    HMR_BUNDLE_ID: string;
    root: ParcelRequire;
  }
  interface ParcelModule {
    hot: {|
      data: mixed,
      accept(cb: (Function) => void): void,
      dispose(cb: (mixed) => void): void,
      // accept(deps: Array<string> | string, cb: (Function) => void): void,
      // decline(): void,
      _acceptCallbacks: Array<(Function) => void>,
      _disposeCallbacks: Array<(mixed) => void>,
    |};
  }
  interface ExtensionContext {
    runtime: {|
      reload(): void,
      getURL(url: string): string;
      getManifest(): {manifest_version: number, ...};
    |};
  }
  declare var module: {bundle: ParcelRequire, ...};
  declare var HMR_HOST: string;
  declare var HMR_PORT: string;
  declare var HMR_ENV_HASH: string;
  declare var HMR_SECURE: boolean;
  declare var chrome: ExtensionContext;
  declare var browser: ExtensionContext;
  declare var __parcel__import__: (string) => Promise<void>;
  declare var __parcel__importScripts__: (string) => Promise<void>;
  declare var globalThis: typeof self;
  declare var ServiceWorkerGlobalScope: Object;
  */ var OVERLAY_ID = "__parcel__error__overlay__";
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
            OldModule.call(this, moduleName);
            this.hot = {
                data: module.bundle.hotData,
                _acceptCallbacks: [],
                _disposeCallbacks: [],
                accept: function (fn) {
                    this._acceptCallbacks.push(fn || function () { });
                },
                dispose: function (fn) {
                    this._disposeCallbacks.push(fn);
                }
            };
            module.bundle.hotData = undefined;
        }
        module.bundle.Module = Module;
        var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */;
        function getHostname() {
            return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
        }
        function getPort() {
            return HMR_PORT || location.port;
        } // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
            var hostname = getHostname();
            var port = getPort();
            var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
            var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
            var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
            // eval may also be disabled via CSP, so do a quick check.
            var supportsSourceURL = false;
            try {
                (0, eval)('throw new Error("test"); //# sourceURL=test.js');
            } catch (err) {
                supportsSourceURL = err.stack.includes("test.js");
            } // $FlowFixMe
            ws.onmessage = async function (event) {
                checkedAssets = {} /*: {|[string]: boolean|} */;
                acceptedAssets = {} /*: {|[string]: boolean|} */;
                assetsToAccept = [];
                var data = JSON.parse(event.data);
                if (data.type === "update") {
                    // Remove error overlay if there is one
                    if (typeof document !== "undefined") removeErrorOverlay();
                    let assets = data.assets.filter((asset) => asset.envHash === HMR_ENV_HASH); // Handle HMR Update
                    let handled = assets.every((asset) => {
                        return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                    });
                    if (handled) {
                        console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                        if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                        await hmrApplyUpdates(assets);
                        for (var i = 0; i < assetsToAccept.length; i++) {
                            var id = assetsToAccept[i][1];
                            if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                        }
                    } else fullReload();
                }
                if (data.type === "error") {
                    // Log parcel errors to console
                    for (let ansiDiagnostic of data.diagnostics.ansi) {
                        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                        console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
                    }
                    if (typeof document !== "undefined") {
                        // Render the fancy html overlay
                        removeErrorOverlay();
                        var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                        document.body.appendChild(overlay);
                    }
                }
            };
            ws.onerror = function (e) {
                console.error(e.message);
            };
            ws.onclose = function () {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
        function removeErrorOverlay() {
            var overlay = document.getElementById(OVERLAY_ID);
            if (overlay) {
                overlay.remove();
                console.log("[parcel] ✨ Error resolved");
            }
        }
        function createErrorOverlay(diagnostics) {
            var overlay = document.createElement("div");
            overlay.id = OVERLAY_ID;
            let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
            for (let diagnostic of diagnostics) {
                let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame) => {
                    return `${p}
  <a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
  ${frame.code}`;
                }, "") : diagnostic.stack;
                errorHTML += `
        <div>
          <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
            🚨 ${diagnostic.message}
          </div>
          <pre>${stack}</pre>
          <div>
            ${diagnostic.hints.map((hint) => "<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
          </div>
          ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
        </div>
      `;
            }
            errorHTML += "</div>";
            overlay.innerHTML = errorHTML;
            return overlay;
        }
        function fullReload() {
            if ("reload" in location) location.reload();
            else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
            var modules = bundle.modules;
            if (!modules) return [];
            var parents = [];
            var k, d, dep;
            for (k in modules) for (d in modules[k][1]) {
                dep = modules[k][1][d];
                if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
                    bundle,
                    k
                ]);
            }
            if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
            return parents;
        }
        function updateLink(link) {
            var newLink = link.cloneNode();
            newLink.onload = function () {
                if (link.parentNode !== null) // $FlowFixMe
                    link.parentNode.removeChild(link);
            };
            newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
            link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
            if (cssTimeout) return;
            cssTimeout = setTimeout(function () {
                var links = document.querySelectorAll('link[rel="stylesheet"]');
                for (var i = 0; i < links.length; i++) {
                    // $FlowFixMe[incompatible-type]
                    var href = links[i].getAttribute("href");
                    var hostname = getHostname();
                    var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
                    var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
                    if (!absolute) updateLink(links[i]);
                }
                cssTimeout = null;
            }, 50);
        }
        function hmrDownload(asset) {
            if (asset.type === "js") {
                if (typeof document !== "undefined") {
                    let script = document.createElement("script");
                    script.src = asset.url + "?t=" + Date.now();
                    if (asset.outputFormat === "esmodule") script.type = "module";
                    return new Promise((resolve, reject) => {
                        var _document$head;
                        script.onload = () => resolve(script);
                        script.onerror = reject;
                        (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                    });
                } else if (typeof importScripts === "function") {
                    // Worker scripts
                    if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
                    else return new Promise((resolve, reject) => {
                        try {
                            importScripts(asset.url + "?t=" + Date.now());
                            resolve();
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            }
        }
        async function hmrApplyUpdates(assets) {
            global.parcelHotUpdate = Object.create(null);
            let scriptsToRemove;
            try {
                // If sourceURL comments aren't supported in eval, we need to load
                // the update from the dev server over HTTP so that stack traces
                // are correct in errors/logs. This is much slower than eval, so
                // we only do it if needed (currently just Safari).
                // https://bugs.webkit.org/show_bug.cgi?id=137297
                // This path is also taken if a CSP disallows eval.
                if (!supportsSourceURL) {
                    let promises = assets.map((asset) => {
                        var _hmrDownload;
                        return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err) => {
                            // Web extension bugfix for Chromium
                            // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                            if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                                if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                                    extCtx.runtime.reload();
                                    return;
                                }
                                asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                                return hmrDownload(asset);
                            }
                            throw err;
                        });
                    });
                    scriptsToRemove = await Promise.all(promises);
                }
                assets.forEach(function (asset) {
                    hmrApply(module.bundle.root, asset);
                });
            } finally {
                delete global.parcelHotUpdate;
                if (scriptsToRemove) scriptsToRemove.forEach((script) => {
                    if (script) {
                        var _document$head2;
                        (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                    }
                });
            }
        }
        function hmrApply(bundle, asset) {
            var modules = bundle.modules;
            if (!modules) return;
            if (asset.type === "css") reloadCSS();
            else if (asset.type === "js") {
                let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
                if (deps) {
                    if (modules[asset.id]) {
                        // Remove dependencies that are removed and will become orphaned.
                        // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                        let oldDeps = modules[asset.id][1];
                        for (let dep in oldDeps) if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                            let id = oldDeps[dep];
                            let parents = getParents(module.bundle.root, id);
                            if (parents.length === 1) hmrDelete(module.bundle.root, id);
                        }
                    }
                    if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
                        // support for source maps is better with eval.
                        (0, eval)(asset.output);
                    // $FlowFixMe
                    let fn = global.parcelHotUpdate[asset.id];
                    modules[asset.id] = [
                        fn,
                        deps
                    ];
                } else if (bundle.parent) hmrApply(bundle.parent, asset);
            }
        }
        function hmrDelete(bundle, id) {
            let modules = bundle.modules;
            if (!modules) return;
            if (modules[id]) {
                // Collect dependencies that will become orphaned when this module is deleted.
                let deps = modules[id][1];
                let orphans = [];
                for (let dep in deps) {
                    let parents = getParents(module.bundle.root, deps[dep]);
                    if (parents.length === 1) orphans.push(deps[dep]);
                } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
                delete modules[id];
                delete bundle.cache[id]; // Now delete the orphans.
                orphans.forEach((id) => {
                    hmrDelete(module.bundle.root, id);
                });
            } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(bundle, id, depsByBundle) {
            if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
            // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
            let parents = getParents(module.bundle.root, id);
            let accepted = false;
            while (parents.length > 0) {
                let v = parents.shift();
                let a = hmrAcceptCheckOne(v[0], v[1], null);
                if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
                    accepted = true;
                else {
                    // Otherwise, queue the parents in the next level upward.
                    let p = getParents(module.bundle.root, v[1]);
                    if (p.length === 0) {
                        // If there are no parents, then we've reached an entry without accepting. Reload.
                        accepted = false;
                        break;
                    }
                    parents.push(...p);
                }
            }
            return accepted;
        }
        function hmrAcceptCheckOne(bundle, id, depsByBundle) {
            var modules = bundle.modules;
            if (!modules) return;
            if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
                // If we reached the root bundle without finding where the asset should go,
                // there's nothing to do. Mark as "accepted" so we don't reload the page.
                if (!bundle.parent) return true;
                return hmrAcceptCheck(bundle.parent, id, depsByBundle);
            }
            if (checkedAssets[id]) return true;
            checkedAssets[id] = true;
            var cached = bundle.cache[id];
            assetsToAccept.push([
                bundle,
                id
            ]);
            if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
        }
        function hmrAcceptRun(bundle, id) {
            var cached = bundle.cache[id];
            bundle.hotData = {};
            if (cached && cached.hot) cached.hot.data = bundle.hotData;
            if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function (cb) {
                cb(bundle.hotData);
            });
            delete bundle.cache[id];
            bundle(id);
            cached = bundle.cache[id];
            if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function (cb) {
                var assetsToAlsoAccept = cb(function () {
                    return getParents(module.bundle.root, id);
                });
                if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
                    assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
            });
            acceptedAssets[id] = true;
        }

    }, {}], "aenu9": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        var _esRegexpFlagsJs = require("core-js/modules/es.regexp.flags.js");
        var _webImmediateJs = require("core-js/modules/web.immediate.js");
        var _moduleJs = require("./module.js");
        var _recipeViewJs = require("./views/recipeView.js");
        var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
        var _searchViewJs = require("./views/searchView.js");
        var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
        var _resultsViewJs = require("./views/resultsView.js");
        var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
        var _addRecipeViewJs = require("./views/addRecipeView.js");
        var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
        var _configJs = require("./config.js");
        var _runtime = require("regenerator-runtime/runtime");
        var _regeneratorRuntime = require("regenerator-runtime");
        var _viewJs = require("./views/View.js");
        var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
        var _paginationViewJs = require("./views/paginationView.js");
        var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
        var _bookmarksViewJs = require("./views/bookmarksView.js");
        var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
        const recipeContainer = document.querySelector(".recipe");
        const controlRecipes = async () => {
            try {
                const id = window.location.hash.slice(1);
                if (!id) return;
                (0, _recipeViewJsDefault.default).renderSpinner();
                //0 resulst view update
                (0, _resultsViewJsDefault.default).update(_moduleJs.getSearchResults());
                await _moduleJs.loadRecipe(id);
                //stpe 2
                //rendering
                (0, _recipeViewJsDefault.default).render(_moduleJs.state.recipe);
                (0, _bookmarksViewJsDefault.default).update(_moduleJs.state.bookmark);
            } catch (error) {
                (0, _recipeViewJsDefault.default).renderError();
                console.error(`Semething is wrong with request ${error} 🔥🔥🔥🔥`);
            }
        };
        const controlSearchResults = async function () {
            try {
                (0, _resultsViewJsDefault.default).renderSpinner();
                //geting the query
                const query = (0, _searchViewJsDefault.default).getQuery();
                if (!query) return;
                await _moduleJs.loadSearchResults(query);
                //render Results
                (0, _resultsViewJsDefault.default).render(_moduleJs.getSearchResults());
                //pagintation buttons
                (0, _paginationViewJsDefault.default).render(_moduleJs.state.search);
                //claer search field
                //render
            } catch (error) {
                console.log(error);
            }
        };
        const controlPagination = function (pageNum) {
            (0, _resultsViewJsDefault.default).render(_moduleJs.getSearchResults(pageNum));
            //pagintation buttons
            (0, _paginationViewJsDefault.default).render(_moduleJs.state.search);
        };
        const controlServings = function (servings) {
            //1 update resepie serving UI;
            _moduleJs.updateServings(servings);
            //2 update view on recipes on UI
            (0, _recipeViewJsDefault.default).update(_moduleJs.state.recipe);
        };
        const controlAddBookmark = function () {
            //add or remove bookmark
            if (!_moduleJs.state.recipe.bookmarked) _moduleJs.addBookmark(_moduleJs.state.recipe);
            else _moduleJs.deleteBookmark(_moduleJs.state.recipe.id);
            (0, _recipeViewJsDefault.default).update(_moduleJs.state.recipe);
            //render bookmark
            (0, _bookmarksViewJsDefault.default).render(_moduleJs.state.bookmark);
        };
        const controlBookmarks = function () {
            (0, _bookmarksViewJsDefault.default).render(_moduleJs.state.bookmark);
        };
        const controlAddRecipe = async function (newRecipe) {
            try {
                //show loadinng spinner
                (0, _addRecipeViewJsDefault.default).renderSpinner();
                // console.log(newRecipe);
                await _moduleJs.uploadRecipe(newRecipe);
                //render new recipe
                (0, _recipeViewJsDefault.default).render(_moduleJs.state.recipe);
                //RENDER BOOKMARK VIEW
                (0, _bookmarksViewJsDefault.default).render(_moduleJs.state.bookmark);
                ///CHANGE ID IN URL
                window.history.pushState(null, "", `#${_moduleJs.state.recipe.id}`);
                //success massage
                (0, _addRecipeViewJsDefault.default).renderMassage();
                //close the form
                setTimeout(function () {
                    (0, _addRecipeViewJsDefault.default).toggleWindow();
                }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
            } catch (err) {
                console.log("\uD83D\uDD25", err);
                (0, _addRecipeViewJsDefault.default).renderError(err.message);
            }
            // uplaod new recipe data
        };
        const init = function () {
            (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
            (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
            (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
            (0, _recipeViewJsDefault.default).addHandlerAddBookMark(controlAddBookmark);
            (0, _paginationViewJsDefault.default).addClikcHandler(controlPagination);
            (0, _recipeViewJsDefault.default).addHandelerUpdateServings(controlServings);
            (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
        };
        init();

    }, { "core-js/modules/es.regexp.flags.js": "gSXXb", "core-js/modules/web.immediate.js": "49tUX", "./module.js": "Qr6Q3", "./views/recipeView.js": "l60JC", "./views/searchView.js": "9OQAM", "./views/resultsView.js": "cSbZE", "./views/addRecipeView.js": "i6DNj", "./config.js": "k5Hzs", "regenerator-runtime/runtime": "dXNgZ", "regenerator-runtime": "dXNgZ", "./views/View.js": "5cUXS", "./views/paginationView.js": "6z7bi", "./views/bookmarksView.js": "4Lqzq", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "gSXXb": [function (require, module, exports) {
        var global = require("7de094ce2f0d2ba7");
        var DESCRIPTORS = require("9d230f0a5296b85c");
        var defineBuiltInAccessor = require("553f0b6dfbc94448");
        var regExpFlags = require("405a9aba3ef5da5f");
        var fails = require("d90044abc9169ac1");
        // babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
        var RegExp = global.RegExp;
        var RegExpPrototype = RegExp.prototype;
        var FORCED = DESCRIPTORS && fails(function () {
            var INDICES_SUPPORT = true;
            try {
                RegExp(".", "d");
            } catch (error) {
                INDICES_SUPPORT = false;
            }
            var O = {};
            // modern V8 bug
            var calls = "";
            var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
            var addGetter = function (key, chr) {
                // eslint-disable-next-line es/no-object-defineproperty -- safe
                Object.defineProperty(O, key, {
                    get: function () {
                        calls += chr;
                        return true;
                    }
                });
            };
            var pairs = {
                dotAll: "s",
                global: "g",
                ignoreCase: "i",
                multiline: "m",
                sticky: "y"
            };
            if (INDICES_SUPPORT) pairs.hasIndices = "d";
            for (var key in pairs) addGetter(key, pairs[key]);
            // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
            var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
            return result !== expected || calls !== expected;
        });
        // `RegExp.prototype.flags` getter
        // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
        if (FORCED) defineBuiltInAccessor(RegExpPrototype, "flags", {
            configurable: true,
            get: regExpFlags
        });

    }, { "7de094ce2f0d2ba7": "i8HOC", "9d230f0a5296b85c": "92ZIi", "553f0b6dfbc94448": "592rH", "405a9aba3ef5da5f": "9bz1x", "d90044abc9169ac1": "hL6D2" }], "i8HOC": [function (require, module, exports) {
        var global = arguments[3];
        var check = function (it) {
            return it && it.Math == Math && it;
        };
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports = // eslint-disable-next-line es/no-global-this -- safe
            check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
            check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
            function () {
                return this;
            }() || Function("return this")();

    }, {}], "92ZIi": [function (require, module, exports) {
        var fails = require("697bb4fa1fc8d20f");
        // Detect IE8's incomplete defineProperty implementation
        module.exports = !fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return Object.defineProperty({}, 1, {
                get: function () {
                    return 7;
                }
            })[1] != 7;
        });

    }, { "697bb4fa1fc8d20f": "hL6D2" }], "hL6D2": [function (require, module, exports) {
        module.exports = function (exec) {
            try {
                return !!exec();
            } catch (error) {
                return true;
            }
        };

    }, {}], "592rH": [function (require, module, exports) {
        var makeBuiltIn = require("72c571864faf9b33");
        var defineProperty = require("cf42bb65a3363c42");
        module.exports = function (target, name, descriptor) {
            if (descriptor.get) makeBuiltIn(descriptor.get, name, {
                getter: true
            });
            if (descriptor.set) makeBuiltIn(descriptor.set, name, {
                setter: true
            });
            return defineProperty.f(target, name, descriptor);
        };

    }, { "72c571864faf9b33": "cTB4k", "cf42bb65a3363c42": "iJR4w" }], "cTB4k": [function (require, module, exports) {
        var fails = require("5c56c5a3d571be7");
        var isCallable = require("91474fe0fc00b989");
        var hasOwn = require("a74c72b3fa7f03a0");
        var DESCRIPTORS = require("56ee691e1b8ae0b6");
        var CONFIGURABLE_FUNCTION_NAME = require("76422346eef4cf17").CONFIGURABLE;
        var inspectSource = require("9a14e9fed651dbe");
        var InternalStateModule = require("6f8c596c479c98af");
        var enforceInternalState = InternalStateModule.enforce;
        var getInternalState = InternalStateModule.get;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var defineProperty = Object.defineProperty;
        var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
            return defineProperty(function () { }, "length", {
                value: 8
            }).length !== 8;
        });
        var TEMPLATE = String(String).split("String");
        var makeBuiltIn = module.exports = function (value, name, options) {
            if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
            if (options && options.getter) name = "get " + name;
            if (options && options.setter) name = "set " + name;
            if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
                if (DESCRIPTORS) defineProperty(value, "name", {
                    value: name,
                    configurable: true
                });
                else value.name = name;
            }
            if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
                value: options.arity
            });
            try {
                if (options && hasOwn(options, "constructor") && options.constructor) {
                    if (DESCRIPTORS) defineProperty(value, "prototype", {
                        writable: false
                    });
                } else if (value.prototype) value.prototype = undefined;
            } catch (error) { }
            var state = enforceInternalState(value);
            if (!hasOwn(state, "source")) state.source = TEMPLATE.join(typeof name == "string" ? name : "");
            return value;
        };
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        // eslint-disable-next-line no-extend-native -- required
        Function.prototype.toString = makeBuiltIn(function toString() {
            return isCallable(this) && getInternalState(this).source || inspectSource(this);
        }, "toString");

    }, { "5c56c5a3d571be7": "hL6D2", "91474fe0fc00b989": "l3Kyn", "a74c72b3fa7f03a0": "gC2Q5", "56ee691e1b8ae0b6": "92ZIi", "76422346eef4cf17": "l6Kgd", "9a14e9fed651dbe": "9jh7O", "6f8c596c479c98af": "7AMlF" }], "l3Kyn": [function (require, module, exports) {
        var $documentAll = require("9cedc80ebfc85cbc");
        var documentAll = $documentAll.all;
        // `IsCallable` abstract operation
        // https://tc39.es/ecma262/#sec-iscallable
        module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
            return typeof argument == "function" || argument === documentAll;
        } : function (argument) {
            return typeof argument == "function";
        };

    }, { "9cedc80ebfc85cbc": "5MHqB" }], "5MHqB": [function (require, module, exports) {
        var documentAll = typeof document == "object" && document.all;
        // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
        // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
        var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
        module.exports = {
            all: documentAll,
            IS_HTMLDDA: IS_HTMLDDA
        };

    }, {}], "gC2Q5": [function (require, module, exports) {
        var uncurryThis = require("51bf2e6829d5e5d3");
        var toObject = require("f7f2579aca0befed");
        var hasOwnProperty = uncurryThis({}.hasOwnProperty);
        // `HasOwnProperty` abstract operation
        // https://tc39.es/ecma262/#sec-hasownproperty
        // eslint-disable-next-line es/no-object-hasown -- safe
        module.exports = Object.hasOwn || function hasOwn(it, key) {
            return hasOwnProperty(toObject(it), key);
        };

    }, { "51bf2e6829d5e5d3": "7GlkT", "f7f2579aca0befed": "5cb35" }], "7GlkT": [function (require, module, exports) {
        var NATIVE_BIND = require("93f3c17f640968d5");
        var FunctionPrototype = Function.prototype;
        var call = FunctionPrototype.call;
        var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
        module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
            return function () {
                return call.apply(fn, arguments);
            };
        };

    }, { "93f3c17f640968d5": "i16Dq" }], "i16Dq": [function (require, module, exports) {
        var fails = require("68ea5ac1e8db2299");
        module.exports = !fails(function () {
            // eslint-disable-next-line es/no-function-prototype-bind -- safe
            var test = (function () { }).bind();
            // eslint-disable-next-line no-prototype-builtins -- safe
            return typeof test != "function" || test.hasOwnProperty("prototype");
        });

    }, { "68ea5ac1e8db2299": "hL6D2" }], "5cb35": [function (require, module, exports) {
        var requireObjectCoercible = require("9ea980bdc8f2d694");
        var $Object = Object;
        // `ToObject` abstract operation
        // https://tc39.es/ecma262/#sec-toobject
        module.exports = function (argument) {
            return $Object(requireObjectCoercible(argument));
        };

    }, { "9ea980bdc8f2d694": "fOR0B" }], "fOR0B": [function (require, module, exports) {
        var isNullOrUndefined = require("da061deb2e2d4f5c");
        var $TypeError = TypeError;
        // `RequireObjectCoercible` abstract operation
        // https://tc39.es/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
            if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
            return it;
        };

    }, { "da061deb2e2d4f5c": "gM5ar" }], "gM5ar": [function (require, module, exports) {
        // we can't use just `it == null` since of `document.all` special case
        // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
        module.exports = function (it) {
            return it === null || it === undefined;
        };

    }, {}], "l6Kgd": [function (require, module, exports) {
        var DESCRIPTORS = require("1661db89c425fe58");
        var hasOwn = require("4c4e7788a622e133");
        var FunctionPrototype = Function.prototype;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, "name");
        // additional protection from minified / mangled / dropped function names
        var PROPER = EXISTS && (function something() { }).name === "something";
        var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
        module.exports = {
            EXISTS: EXISTS,
            PROPER: PROPER,
            CONFIGURABLE: CONFIGURABLE
        };

    }, { "1661db89c425fe58": "92ZIi", "4c4e7788a622e133": "gC2Q5" }], "9jh7O": [function (require, module, exports) {
        var uncurryThis = require("2676d291743e1206");
        var isCallable = require("ce1c3bc588e5268c");
        var store = require("200ce1f5bf55e983");
        var functionToString = uncurryThis(Function.toString);
        // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
        if (!isCallable(store.inspectSource)) store.inspectSource = function (it) {
            return functionToString(it);
        };
        module.exports = store.inspectSource;

    }, { "2676d291743e1206": "7GlkT", "ce1c3bc588e5268c": "l3Kyn", "200ce1f5bf55e983": "l4ncH" }], "l4ncH": [function (require, module, exports) {
        var global = require("9847728a04d9912c");
        var defineGlobalProperty = require("4df6f8dc191dce82");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || defineGlobalProperty(SHARED, {});
        module.exports = store;

    }, { "9847728a04d9912c": "i8HOC", "4df6f8dc191dce82": "ggjnO" }], "ggjnO": [function (require, module, exports) {
        var global = require("d021b83504765614");
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var defineProperty = Object.defineProperty;
        module.exports = function (key, value) {
            try {
                defineProperty(global, key, {
                    value: value,
                    configurable: true,
                    writable: true
                });
            } catch (error) {
                global[key] = value;
            }
            return value;
        };

    }, { "d021b83504765614": "i8HOC" }], "7AMlF": [function (require, module, exports) {
        var NATIVE_WEAK_MAP = require("92edf8c17b4dd044");
        var global = require("c46b5a5b84b08739");
        var isObject = require("c8875bbf6936e8da");
        var createNonEnumerableProperty = require("27e08854750941f7");
        var hasOwn = require("89a700bd705bce2d");
        var shared = require("92d143fb87f96c40");
        var sharedKey = require("bae8c5911a39676c");
        var hiddenKeys = require("3e2b08ca6680a6a7");
        var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
        var TypeError = global.TypeError;
        var WeakMap = global.WeakMap;
        var set, get, has;
        var enforce = function (it) {
            return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function (TYPE) {
            return function (it) {
                var state;
                if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                return state;
            };
        };
        if (NATIVE_WEAK_MAP || shared.state) {
            var store = shared.state || (shared.state = new WeakMap());
      /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
            store.has = store.has;
            store.set = store.set;
      /* eslint-enable no-self-assign -- prototype methods protection */ set = function (it, metadata) {
                if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
                metadata.facade = it;
                store.set(it, metadata);
                return metadata;
            };
            get = function (it) {
                return store.get(it) || {};
            };
            has = function (it) {
                return store.has(it);
            };
        } else {
            var STATE = sharedKey("state");
            hiddenKeys[STATE] = true;
            set = function (it, metadata) {
                if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
                metadata.facade = it;
                createNonEnumerableProperty(it, STATE, metadata);
                return metadata;
            };
            get = function (it) {
                return hasOwn(it, STATE) ? it[STATE] : {};
            };
            has = function (it) {
                return hasOwn(it, STATE);
            };
        }
        module.exports = {
            set: set,
            get: get,
            has: has,
            enforce: enforce,
            getterFor: getterFor
        };

    }, { "92edf8c17b4dd044": "2PZTl", "c46b5a5b84b08739": "i8HOC", "c8875bbf6936e8da": "Z0pBo", "27e08854750941f7": "8CL42", "89a700bd705bce2d": "gC2Q5", "92d143fb87f96c40": "l4ncH", "bae8c5911a39676c": "eAjGz", "3e2b08ca6680a6a7": "661m4" }], "2PZTl": [function (require, module, exports) {
        var global = require("3c9ed79eb7d0732d");
        var isCallable = require("1e1b2fc9181f7114");
        var WeakMap = global.WeakMap;
        module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

    }, { "3c9ed79eb7d0732d": "i8HOC", "1e1b2fc9181f7114": "l3Kyn" }], "Z0pBo": [function (require, module, exports) {
        var isCallable = require("4026fd2ac76f7e31");
        var $documentAll = require("f990516448d767c9");
        var documentAll = $documentAll.all;
        module.exports = $documentAll.IS_HTMLDDA ? function (it) {
            return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
        } : function (it) {
            return typeof it == "object" ? it !== null : isCallable(it);
        };

    }, { "4026fd2ac76f7e31": "l3Kyn", "f990516448d767c9": "5MHqB" }], "8CL42": [function (require, module, exports) {
        var DESCRIPTORS = require("1c964f31daf37015");
        var definePropertyModule = require("e863bb04776aee98");
        var createPropertyDescriptor = require("a8bef514efe84985");
        module.exports = DESCRIPTORS ? function (object, key, value) {
            return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function (object, key, value) {
            object[key] = value;
            return object;
        };

    }, { "1c964f31daf37015": "92ZIi", "e863bb04776aee98": "iJR4w", "a8bef514efe84985": "1lpav" }], "iJR4w": [function (require, module, exports) {
        var DESCRIPTORS = require("9e71cde128c2990c");
        var IE8_DOM_DEFINE = require("4d3c0f66bf35bcab");
        var V8_PROTOTYPE_DEFINE_BUG = require("88ed4c86f0836d3f");
        var anObject = require("438906c2dbabf566");
        var toPropertyKey = require("ea9d6af8c7df516b");
        var $TypeError = TypeError;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var $defineProperty = Object.defineProperty;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ENUMERABLE = "enumerable";
        var CONFIGURABLE = "configurable";
        var WRITABLE = "writable";
        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPropertyKey(P);
            anObject(Attributes);
            if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
                var current = $getOwnPropertyDescriptor(O, P);
                if (current && current[WRITABLE]) {
                    O[P] = Attributes.value;
                    Attributes = {
                        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                        writable: false
                    };
                }
            }
            return $defineProperty(O, P, Attributes);
        } : $defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPropertyKey(P);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return $defineProperty(O, P, Attributes);
            } catch (error) { }
            if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
        };

    }, { "9e71cde128c2990c": "92ZIi", "4d3c0f66bf35bcab": "qS9uN", "88ed4c86f0836d3f": "ka1Un", "438906c2dbabf566": "4isCr", "ea9d6af8c7df516b": "5XWKd" }], "qS9uN": [function (require, module, exports) {
        var DESCRIPTORS = require("f1e9b52c9cd028d9");
        var fails = require("6c92c6c7b2c6bdcc");
        var createElement = require("5564fa302c920774");
        // Thanks to IE8 for its funny defineProperty
        module.exports = !DESCRIPTORS && !fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return Object.defineProperty(createElement("div"), "a", {
                get: function () {
                    return 7;
                }
            }).a != 7;
        });

    }, { "f1e9b52c9cd028d9": "92ZIi", "6c92c6c7b2c6bdcc": "hL6D2", "5564fa302c920774": "4bOHl" }], "4bOHl": [function (require, module, exports) {
        var global = require("d94be03eb5f1b153");
        var isObject = require("821ba49547f31162");
        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
            return EXISTS ? document.createElement(it) : {};
        };

    }, { "d94be03eb5f1b153": "i8HOC", "821ba49547f31162": "Z0pBo" }], "ka1Un": [function (require, module, exports) {
        var DESCRIPTORS = require("7c8c1300e1ac2ecd");
        var fails = require("5a7ca4c6c8858686");
        // V8 ~ Chrome 36-
        // https://bugs.chromium.org/p/v8/issues/detail?id=3334
        module.exports = DESCRIPTORS && fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return Object.defineProperty(function () { }, "prototype", {
                value: 42,
                writable: false
            }).prototype != 42;
        });

    }, { "7c8c1300e1ac2ecd": "92ZIi", "5a7ca4c6c8858686": "hL6D2" }], "4isCr": [function (require, module, exports) {
        var isObject = require("89e92d112f0ef0c3");
        var $String = String;
        var $TypeError = TypeError;
        // `Assert: Type(argument) is Object`
        module.exports = function (argument) {
            if (isObject(argument)) return argument;
            throw $TypeError($String(argument) + " is not an object");
        };

    }, { "89e92d112f0ef0c3": "Z0pBo" }], "5XWKd": [function (require, module, exports) {
        var toPrimitive = require("ab693709c91368d8");
        var isSymbol = require("ed30273aab9c022f");
        // `ToPropertyKey` abstract operation
        // https://tc39.es/ecma262/#sec-topropertykey
        module.exports = function (argument) {
            var key = toPrimitive(argument, "string");
            return isSymbol(key) ? key : key + "";
        };

    }, { "ab693709c91368d8": "a2mK1", "ed30273aab9c022f": "4aV4F" }], "a2mK1": [function (require, module, exports) {
        var call = require("43dce1586fc08696");
        var isObject = require("ca7da7f5bf7c53fc");
        var isSymbol = require("5bba6b0800ec1367");
        var getMethod = require("7c304547a0f90abf");
        var ordinaryToPrimitive = require("38716eacc91acca6");
        var wellKnownSymbol = require("fea0b4213721f783");
        var $TypeError = TypeError;
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        // `ToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-toprimitive
        module.exports = function (input, pref) {
            if (!isObject(input) || isSymbol(input)) return input;
            var exoticToPrim = getMethod(input, TO_PRIMITIVE);
            var result;
            if (exoticToPrim) {
                if (pref === undefined) pref = "default";
                result = call(exoticToPrim, input, pref);
                if (!isObject(result) || isSymbol(result)) return result;
                throw $TypeError("Can't convert object to primitive value");
            }
            if (pref === undefined) pref = "number";
            return ordinaryToPrimitive(input, pref);
        };

    }, { "43dce1586fc08696": "d7JlP", "ca7da7f5bf7c53fc": "Z0pBo", "5bba6b0800ec1367": "4aV4F", "7c304547a0f90abf": "9Zfiw", "38716eacc91acca6": "7MME2", "fea0b4213721f783": "gTwyA" }], "d7JlP": [function (require, module, exports) {
        var NATIVE_BIND = require("5e1edde2f03fe0d0");
        var call = Function.prototype.call;
        module.exports = NATIVE_BIND ? call.bind(call) : function () {
            return call.apply(call, arguments);
        };

    }, { "5e1edde2f03fe0d0": "i16Dq" }], "4aV4F": [function (require, module, exports) {
        var getBuiltIn = require("d9424a88f093751a");
        var isCallable = require("10d2a76721588f03");
        var isPrototypeOf = require("8ff7ce619468ff11");
        var USE_SYMBOL_AS_UID = require("3c9f0c68da543cf8");
        var $Object = Object;
        module.exports = USE_SYMBOL_AS_UID ? function (it) {
            return typeof it == "symbol";
        } : function (it) {
            var $Symbol = getBuiltIn("Symbol");
            return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
        };

    }, { "d9424a88f093751a": "6ZUSY", "10d2a76721588f03": "l3Kyn", "8ff7ce619468ff11": "3jtKQ", "3c9f0c68da543cf8": "2Ye8Q" }], "6ZUSY": [function (require, module, exports) {
        var global = require("d903df7eadc75f47");
        var isCallable = require("5c525f2b3ca3966");
        var aFunction = function (argument) {
            return isCallable(argument) ? argument : undefined;
        };
        module.exports = function (namespace, method) {
            return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
        };

    }, { "d903df7eadc75f47": "i8HOC", "5c525f2b3ca3966": "l3Kyn" }], "3jtKQ": [function (require, module, exports) {
        var uncurryThis = require("41401a8c6f5bd8aa");
        module.exports = uncurryThis({}.isPrototypeOf);

    }, { "41401a8c6f5bd8aa": "7GlkT" }], "2Ye8Q": [function (require, module, exports) {
  /* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("9964b415098f2cea");
        module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

    }, { "9964b415098f2cea": "8KyTD" }], "8KyTD": [function (require, module, exports) {
  /* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("ad2e339c74ac1606");
        var fails = require("507970113f2fcbf1");
        // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
        module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
            var symbol = Symbol();
            // Chrome 38 Symbol has incorrect toString conversion
            // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
            return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
                !Symbol.sham && V8_VERSION && V8_VERSION < 41;
        });

    }, { "ad2e339c74ac1606": "bjFlO", "507970113f2fcbf1": "hL6D2" }], "bjFlO": [function (require, module, exports) {
        var global = require("10a26bd0faf0fd8b");
        var userAgent = require("24758c39e8165179");
        var process = global.process;
        var Deno = global.Deno;
        var versions = process && process.versions || Deno && Deno.version;
        var v8 = versions && versions.v8;
        var match, version;
        if (v8) {
            match = v8.split(".");
            // in old Chrome, versions of V8 isn't V8 = Chrome / 10
            // but their correct versions are not interesting for us
            version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }
        // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
        // so check `userAgent` even if `.v8` exists, but 0
        if (!version && userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);
            if (!match || match[1] >= 74) {
                match = userAgent.match(/Chrome\/(\d+)/);
                if (match) version = +match[1];
            }
        }
        module.exports = version;

    }, { "10a26bd0faf0fd8b": "i8HOC", "24758c39e8165179": "73xBt" }], "73xBt": [function (require, module, exports) {
        var getBuiltIn = require("bf30e8f80fd85768");
        module.exports = getBuiltIn("navigator", "userAgent") || "";

    }, { "bf30e8f80fd85768": "6ZUSY" }], "9Zfiw": [function (require, module, exports) {
        var aCallable = require("8f0e32d320cd998e");
        var isNullOrUndefined = require("733e4a004a14764d");
        // `GetMethod` abstract operation
        // https://tc39.es/ecma262/#sec-getmethod
        module.exports = function (V, P) {
            var func = V[P];
            return isNullOrUndefined(func) ? undefined : aCallable(func);
        };

    }, { "8f0e32d320cd998e": "gOMir", "733e4a004a14764d": "gM5ar" }], "gOMir": [function (require, module, exports) {
        var isCallable = require("afb9a874372981b2");
        var tryToString = require("e61f68274ef2d9f0");
        var $TypeError = TypeError;
        // `Assert: IsCallable(argument) is true`
        module.exports = function (argument) {
            if (isCallable(argument)) return argument;
            throw $TypeError(tryToString(argument) + " is not a function");
        };

    }, { "afb9a874372981b2": "l3Kyn", "e61f68274ef2d9f0": "4O7d7" }], "4O7d7": [function (require, module, exports) {
        var $String = String;
        module.exports = function (argument) {
            try {
                return $String(argument);
            } catch (error) {
                return "Object";
            }
        };

    }, {}], "7MME2": [function (require, module, exports) {
        var call = require("3e096957d90f1592");
        var isCallable = require("53e9681148816ec0");
        var isObject = require("3e19b278cff07f5f");
        var $TypeError = TypeError;
        // `OrdinaryToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-ordinarytoprimitive
        module.exports = function (input, pref) {
            var fn, val;
            if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
            if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
            if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
            throw $TypeError("Can't convert object to primitive value");
        };

    }, { "3e096957d90f1592": "d7JlP", "53e9681148816ec0": "l3Kyn", "3e19b278cff07f5f": "Z0pBo" }], "gTwyA": [function (require, module, exports) {
        var global = require("e8eef5bf02607e7");
        var shared = require("641a2883ff95e680");
        var hasOwn = require("b5cf16e173042b8f");
        var uid = require("9b9140bec2f45d1e");
        var NATIVE_SYMBOL = require("8b1e7ed21078e527");
        var USE_SYMBOL_AS_UID = require("9f541511cdb00eba");
        var WellKnownSymbolsStore = shared("wks");
        var Symbol = global.Symbol;
        var symbolFor = Symbol && Symbol["for"];
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
        module.exports = function (name) {
            if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
                var description = "Symbol." + name;
                if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
                else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
                else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
            }
            return WellKnownSymbolsStore[name];
        };

    }, { "e8eef5bf02607e7": "i8HOC", "641a2883ff95e680": "i1mHK", "b5cf16e173042b8f": "gC2Q5", "9b9140bec2f45d1e": "a3SEE", "8b1e7ed21078e527": "8KyTD", "9f541511cdb00eba": "2Ye8Q" }], "i1mHK": [function (require, module, exports) {
        var IS_PURE = require("3eb1121706bfecf7");
        var store = require("ae1e5263a50cf2c5");
        (module.exports = function (key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
            version: "3.27.1",
            mode: IS_PURE ? "pure" : "global",
            copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",
            source: "https://github.com/zloirock/core-js"
        });

    }, { "3eb1121706bfecf7": "5ZsyC", "ae1e5263a50cf2c5": "l4ncH" }], "5ZsyC": [function (require, module, exports) {
        module.exports = false;

    }, {}], "a3SEE": [function (require, module, exports) {
        var uncurryThis = require("30afa7babca2bda0");
        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis(1.0.toString);
        module.exports = function (key) {
            return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
        };

    }, { "30afa7babca2bda0": "7GlkT" }], "1lpav": [function (require, module, exports) {
        module.exports = function (bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };

    }, {}], "eAjGz": [function (require, module, exports) {
        var shared = require("7068faba1caef3e0");
        var uid = require("7dcc4168600652b0");
        var keys = shared("keys");
        module.exports = function (key) {
            return keys[key] || (keys[key] = uid(key));
        };

    }, { "7068faba1caef3e0": "i1mHK", "7dcc4168600652b0": "a3SEE" }], "661m4": [function (require, module, exports) {
        module.exports = {};

    }, {}], "9bz1x": [function (require, module, exports) {
        "use strict";
        var anObject = require("5783f48dec51b471");
        // `RegExp.prototype.flags` getter implementation
        // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
        module.exports = function () {
            var that = anObject(this);
            var result = "";
            if (that.hasIndices) result += "d";
            if (that.global) result += "g";
            if (that.ignoreCase) result += "i";
            if (that.multiline) result += "m";
            if (that.dotAll) result += "s";
            if (that.unicode) result += "u";
            if (that.unicodeSets) result += "v";
            if (that.sticky) result += "y";
            return result;
        };

    }, { "5783f48dec51b471": "4isCr" }], "49tUX": [function (require, module, exports) {
        // TODO: Remove this module from `core-js@4` since it's split to modules listed below
        require("38364b59cdba4e1c");
        require("14ac9ea206a4ef4");

    }, { "38364b59cdba4e1c": "fOGFr", "14ac9ea206a4ef4": "l7FDS" }], "fOGFr": [function (require, module, exports) {
        var $ = require("9217a1d262772011");
        var global = require("e6f26785d860c74a");
        var clearImmediate = require("77a7afc95aab37c4").clear;
        // `clearImmediate` method
        // http://w3c.github.io/setImmediate/#si-clearImmediate
        $({
            global: true,
            bind: true,
            enumerable: true,
            forced: global.clearImmediate !== clearImmediate
        }, {
            clearImmediate: clearImmediate
        });

    }, { "9217a1d262772011": "dIGt4", "e6f26785d860c74a": "i8HOC", "77a7afc95aab37c4": "7jDg7" }], "dIGt4": [function (require, module, exports) {
        var global = require("74df30d53b874edf");
        var getOwnPropertyDescriptor = require("1d1d0292c21594e9").f;
        var createNonEnumerableProperty = require("82f4ba9d785a7ae1");
        var defineBuiltIn = require("f1c8155310801122");
        var defineGlobalProperty = require("901569aba6743094");
        var copyConstructorProperties = require("b4c47a390b8bdf6");
        var isForced = require("2c7cd43eb0e2e47d");
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
  */ module.exports = function (options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var FORCED, target, key, targetProperty, sourceProperty, descriptor;
            if (GLOBAL) target = global;
            else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
            else target = (global[TARGET] || {}).prototype;
            if (target) for (key in source) {
                sourceProperty = source[key];
                if (options.dontCallGetSet) {
                    descriptor = getOwnPropertyDescriptor(target, key);
                    targetProperty = descriptor && descriptor.value;
                } else targetProperty = target[key];
                FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                // contained in target
                if (!FORCED && targetProperty !== undefined) {
                    if (typeof sourceProperty == typeof targetProperty) continue;
                    copyConstructorProperties(sourceProperty, targetProperty);
                }
                // add a flag to not completely full polyfills
                if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
                defineBuiltIn(target, key, sourceProperty, options);
            }
        };

    }, { "74df30d53b874edf": "i8HOC", "1d1d0292c21594e9": "lk5NI", "82f4ba9d785a7ae1": "8CL42", "f1c8155310801122": "6XwEX", "901569aba6743094": "ggjnO", "b4c47a390b8bdf6": "9Z12i", "2c7cd43eb0e2e47d": "6uTCZ" }], "lk5NI": [function (require, module, exports) {
        var DESCRIPTORS = require("7b3cdd4e0eb1fd9a");
        var call = require("6c99fbe5fe05d2f6");
        var propertyIsEnumerableModule = require("379c8ee81e249212");
        var createPropertyDescriptor = require("722c2151af539da7");
        var toIndexedObject = require("2e9dfc8699daaaeb");
        var toPropertyKey = require("a8aae38897c22c7a");
        var hasOwn = require("7fa3b1fb5087512e");
        var IE8_DOM_DEFINE = require("f6815093be81cd15");
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
            O = toIndexedObject(O);
            P = toPropertyKey(P);
            if (IE8_DOM_DEFINE) try {
                return $getOwnPropertyDescriptor(O, P);
            } catch (error) { }
            if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
        };

    }, { "7b3cdd4e0eb1fd9a": "92ZIi", "6c99fbe5fe05d2f6": "d7JlP", "379c8ee81e249212": "7SuiS", "722c2151af539da7": "1lpav", "2e9dfc8699daaaeb": "jLWwQ", "a8aae38897c22c7a": "5XWKd", "7fa3b1fb5087512e": "gC2Q5", "f6815093be81cd15": "qS9uN" }], "7SuiS": [function (require, module, exports) {
        "use strict";
        var $propertyIsEnumerable = {}.propertyIsEnumerable;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        // Nashorn ~ JDK8 bug
        var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
            1: 2
        }, 1);
        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable;
        } : $propertyIsEnumerable;

    }, {}], "jLWwQ": [function (require, module, exports) {
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = require("a449e4cd3ea859bc");
        var requireObjectCoercible = require("99bdca58c131f55e");
        module.exports = function (it) {
            return IndexedObject(requireObjectCoercible(it));
        };

    }, { "a449e4cd3ea859bc": "kPk5h", "99bdca58c131f55e": "fOR0B" }], "kPk5h": [function (require, module, exports) {
        var uncurryThis = require("d8cb2f82f437a98a");
        var fails = require("3b969eecb9a7c620");
        var classof = require("9366149c29efc889");
        var $Object = Object;
        var split = uncurryThis("".split);
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function () {
            // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
            // eslint-disable-next-line no-prototype-builtins -- safe
            return !$Object("z").propertyIsEnumerable(0);
        }) ? function (it) {
            return classof(it) == "String" ? split(it, "") : $Object(it);
        } : $Object;

    }, { "d8cb2f82f437a98a": "7GlkT", "3b969eecb9a7c620": "hL6D2", "9366149c29efc889": "bdfmm" }], "bdfmm": [function (require, module, exports) {
        var uncurryThis = require("2e34dffaa1e87896");
        var toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis("".slice);
        module.exports = function (it) {
            return stringSlice(toString(it), 8, -1);
        };

    }, { "2e34dffaa1e87896": "7GlkT" }], "6XwEX": [function (require, module, exports) {
        var isCallable = require("c7eaf82198f26232");
        var definePropertyModule = require("30c76a5c04da6297");
        var makeBuiltIn = require("3286d608e2737c11");
        var defineGlobalProperty = require("288501088d3c45ba");
        module.exports = function (O, key, value, options) {
            if (!options) options = {};
            var simple = options.enumerable;
            var name = options.name !== undefined ? options.name : key;
            if (isCallable(value)) makeBuiltIn(value, name, options);
            if (options.global) {
                if (simple) O[key] = value;
                else defineGlobalProperty(key, value);
            } else {
                try {
                    if (!options.unsafe) delete O[key];
                    else if (O[key]) simple = true;
                } catch (error) { }
                if (simple) O[key] = value;
                else definePropertyModule.f(O, key, {
                    value: value,
                    enumerable: false,
                    configurable: !options.nonConfigurable,
                    writable: !options.nonWritable
                });
            }
            return O;
        };

    }, { "c7eaf82198f26232": "l3Kyn", "30c76a5c04da6297": "iJR4w", "3286d608e2737c11": "cTB4k", "288501088d3c45ba": "ggjnO" }], "9Z12i": [function (require, module, exports) {
        var hasOwn = require("8cf0df4a0d43318b");
        var ownKeys = require("321c91ac0a8f4f24");
        var getOwnPropertyDescriptorModule = require("aa5ecfe0eb73b5e6");
        var definePropertyModule = require("f6901e8493ee73fd");
        module.exports = function (target, source, exceptions) {
            var keys = ownKeys(source);
            var defineProperty = definePropertyModule.f;
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
        };

    }, { "8cf0df4a0d43318b": "gC2Q5", "321c91ac0a8f4f24": "1CX1A", "aa5ecfe0eb73b5e6": "lk5NI", "f6901e8493ee73fd": "iJR4w" }], "1CX1A": [function (require, module, exports) {
        var getBuiltIn = require("ab57cb2a4a89ba81");
        var uncurryThis = require("93e0082048527765");
        var getOwnPropertyNamesModule = require("354d87b6dbe7cdc2");
        var getOwnPropertySymbolsModule = require("91a093c470391f32");
        var anObject = require("5d23e08babcbef7");
        var concat = uncurryThis([].concat);
        // all object keys, includes non-enumerable and symbols
        module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
        };

    }, { "ab57cb2a4a89ba81": "6ZUSY", "93e0082048527765": "7GlkT", "354d87b6dbe7cdc2": "fjY04", "91a093c470391f32": "4DWO3", "5d23e08babcbef7": "4isCr" }], "fjY04": [function (require, module, exports) {
        var internalObjectKeys = require("5faf54a44c038f5f");
        var enumBugKeys = require("e4168e9fe4e1fef0");
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        // eslint-disable-next-line es/no-object-getownpropertynames -- safe
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
        };

    }, { "5faf54a44c038f5f": "hl5T1", "e4168e9fe4e1fef0": "9RnJm" }], "hl5T1": [function (require, module, exports) {
        var uncurryThis = require("e5717de232adaa0e");
        var hasOwn = require("21b794b568b684b6");
        var toIndexedObject = require("5d8f8f5849d4358d");
        var indexOf = require("5c7faaa33d8506a4").indexOf;
        var hiddenKeys = require("be8ac7f873f552cb");
        var push = uncurryThis([].push);
        module.exports = function (object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
            // Don't enum bug & hidden keys
            while (names.length > i) if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
            return result;
        };

    }, { "e5717de232adaa0e": "7GlkT", "21b794b568b684b6": "gC2Q5", "5d8f8f5849d4358d": "jLWwQ", "5c7faaa33d8506a4": "n5IsC", "be8ac7f873f552cb": "661m4" }], "n5IsC": [function (require, module, exports) {
        var toIndexedObject = require("133e3e3d4ba71338");
        var toAbsoluteIndex = require("f9a2e2457e9b1001");
        var lengthOfArrayLike = require("1adb5f2ca2f3255f");
        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function (IS_INCLUDES) {
            return function ($this, el, fromIndex) {
                var O = toIndexedObject($this);
                var length = lengthOfArrayLike(O);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare -- NaN check
                if (IS_INCLUDES && el != el) while (length > index) {
                    value = O[index++];
                    // eslint-disable-next-line no-self-compare -- NaN check
                    if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                }
                else for (; length > index; index++) {
                    if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                }
                return !IS_INCLUDES && -1;
            };
        };
        module.exports = {
            // `Array.prototype.includes` method
            // https://tc39.es/ecma262/#sec-array.prototype.includes
            includes: createMethod(true),
            // `Array.prototype.indexOf` method
            // https://tc39.es/ecma262/#sec-array.prototype.indexof
            indexOf: createMethod(false)
        };

    }, { "133e3e3d4ba71338": "jLWwQ", "f9a2e2457e9b1001": "5yh27", "1adb5f2ca2f3255f": "lY4mS" }], "5yh27": [function (require, module, exports) {
        var toIntegerOrInfinity = require("7e3d29d395c43587");
        var max = Math.max;
        var min = Math.min;
        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function (index, length) {
            var integer = toIntegerOrInfinity(index);
            return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };

    }, { "7e3d29d395c43587": "kLXGe" }], "kLXGe": [function (require, module, exports) {
        var trunc = require("a66e138523e2c12");
        // `ToIntegerOrInfinity` abstract operation
        // https://tc39.es/ecma262/#sec-tointegerorinfinity
        module.exports = function (argument) {
            var number = +argument;
            // eslint-disable-next-line no-self-compare -- NaN check
            return number !== number || number === 0 ? 0 : trunc(number);
        };

    }, { "a66e138523e2c12": "7O8gb" }], "7O8gb": [function (require, module, exports) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        // `Math.trunc` method
        // https://tc39.es/ecma262/#sec-math.trunc
        // eslint-disable-next-line es/no-math-trunc -- safe
        module.exports = Math.trunc || function trunc(x) {
            var n = +x;
            return (n > 0 ? floor : ceil)(n);
        };

    }, {}], "lY4mS": [function (require, module, exports) {
        var toLength = require("a9a7a1a80d005b60");
        // `LengthOfArrayLike` abstract operation
        // https://tc39.es/ecma262/#sec-lengthofarraylike
        module.exports = function (obj) {
            return toLength(obj.length);
        };

    }, { "a9a7a1a80d005b60": "fU04N" }], "fU04N": [function (require, module, exports) {
        var toIntegerOrInfinity = require("955d3b076030162d");
        var min = Math.min;
        // `ToLength` abstract operation
        // https://tc39.es/ecma262/#sec-tolength
        module.exports = function (argument) {
            return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
        };

    }, { "955d3b076030162d": "kLXGe" }], "9RnJm": [function (require, module, exports) {
        // IE8- don't enum bug keys
        module.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf"
        ];

    }, {}], "4DWO3": [function (require, module, exports) {
        // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
        exports.f = Object.getOwnPropertySymbols;

    }, {}], "6uTCZ": [function (require, module, exports) {
        var fails = require("b368471460aae642");
        var isCallable = require("f71f1541b07e6f79");
        var replacement = /#|\.prototype\./;
        var isForced = function (feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function (string) {
            return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module.exports = isForced;

    }, { "b368471460aae642": "hL6D2", "f71f1541b07e6f79": "l3Kyn" }], "7jDg7": [function (require, module, exports) {
        var global = require("9de8c935cb8b4b5f");
        var apply = require("54c9d7236ca02b49");
        var bind = require("15eb1016ee3fc2c4");
        var isCallable = require("54c504db452a74bb");
        var hasOwn = require("d3a9a2e381ed603c");
        var fails = require("8758d7c4003f3557");
        var html = require("ff0f1013ec088cce");
        var arraySlice = require("caa015ba970d8935");
        var createElement = require("9a0bc9afeb33df8a");
        var validateArgumentsLength = require("c758bf915e255660");
        var IS_IOS = require("20efd5da68c8fb59");
        var IS_NODE = require("7b598c1647acdf25");
        var set = global.setImmediate;
        var clear = global.clearImmediate;
        var process = global.process;
        var Dispatch = global.Dispatch;
        var Function = global.Function;
        var MessageChannel = global.MessageChannel;
        var String = global.String;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var $location, defer, channel, port;
        try {
            // Deno throws a ReferenceError on `location` access without `--location` flag
            $location = global.location;
        } catch (error) { }
        var run = function (id) {
            if (hasOwn(queue, id)) {
                var fn = queue[id];
                delete queue[id];
                fn();
            }
        };
        var runner = function (id) {
            return function () {
                run(id);
            };
        };
        var listener = function (event) {
            run(event.data);
        };
        var post = function (id) {
            // old engines have not location.origin
            global.postMessage(String(id), $location.protocol + "//" + $location.host);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!set || !clear) {
            set = function setImmediate(handler) {
                validateArgumentsLength(arguments.length, 1);
                var fn = isCallable(handler) ? handler : Function(handler);
                var args = arraySlice(arguments, 1);
                queue[++counter] = function () {
                    apply(fn, undefined, args);
                };
                defer(counter);
                return counter;
            };
            clear = function clearImmediate(id) {
                delete queue[id];
            };
            // Node.js 0.8-
            if (IS_NODE) defer = function (id) {
                process.nextTick(runner(id));
            };
            else if (Dispatch && Dispatch.now) defer = function (id) {
                Dispatch.now(runner(id));
            };
            else if (MessageChannel && !IS_IOS) {
                channel = new MessageChannel();
                port = channel.port2;
                channel.port1.onmessage = listener;
                defer = bind(port.postMessage, port);
                // Browsers with postMessage, skip WebWorkers
                // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(post)) {
                defer = post;
                global.addEventListener("message", listener, false);
                // IE8-
            } else if (ONREADYSTATECHANGE in createElement("script")) defer = function (id) {
                html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function () {
                    html.removeChild(this);
                    run(id);
                };
            };
            else defer = function (id) {
                setTimeout(runner(id), 0);
            };
        }
        module.exports = {
            set: set,
            clear: clear
        };

    }, { "9de8c935cb8b4b5f": "i8HOC", "54c9d7236ca02b49": "148ka", "15eb1016ee3fc2c4": "7vpmS", "54c504db452a74bb": "l3Kyn", "d3a9a2e381ed603c": "gC2Q5", "8758d7c4003f3557": "hL6D2", "ff0f1013ec088cce": "2pze4", "caa015ba970d8935": "RsFXo", "9a0bc9afeb33df8a": "4bOHl", "c758bf915e255660": "b9O3D", "20efd5da68c8fb59": "bzGah", "7b598c1647acdf25": "2Jcp4" }], "148ka": [function (require, module, exports) {
        var NATIVE_BIND = require("fc1e67a156b1af3a");
        var FunctionPrototype = Function.prototype;
        var apply = FunctionPrototype.apply;
        var call = FunctionPrototype.call;
        // eslint-disable-next-line es/no-reflect -- safe
        module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
            return call.apply(apply, arguments);
        });

    }, { "fc1e67a156b1af3a": "i16Dq" }], "7vpmS": [function (require, module, exports) {
        var uncurryThis = require("7a8ac8a017e486b5");
        var aCallable = require("23c4cbfc0728f25f");
        var NATIVE_BIND = require("e859da96884268a");
        var bind = uncurryThis(uncurryThis.bind);
        // optional / simple context binding
        module.exports = function (fn, that) {
            aCallable(fn);
            return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function () {
                return fn.apply(that, arguments);
            };
        };

    }, { "7a8ac8a017e486b5": "5Hioa", "23c4cbfc0728f25f": "gOMir", "e859da96884268a": "i16Dq" }], "5Hioa": [function (require, module, exports) {
        var classofRaw = require("2bf08542e6b3bb2e");
        var uncurryThis = require("aa8c33e00c8ec388");
        module.exports = function (fn) {
            // Nashorn bug:
            //   https://github.com/zloirock/core-js/issues/1128
            //   https://github.com/zloirock/core-js/issues/1130
            if (classofRaw(fn) === "Function") return uncurryThis(fn);
        };

    }, { "2bf08542e6b3bb2e": "bdfmm", "aa8c33e00c8ec388": "7GlkT" }], "2pze4": [function (require, module, exports) {
        var getBuiltIn = require("80ea82a7d80d2a4a");
        module.exports = getBuiltIn("document", "documentElement");

    }, { "80ea82a7d80d2a4a": "6ZUSY" }], "RsFXo": [function (require, module, exports) {
        var uncurryThis = require("3e66ffab1897c1eb");
        module.exports = uncurryThis([].slice);

    }, { "3e66ffab1897c1eb": "7GlkT" }], "b9O3D": [function (require, module, exports) {
        var $TypeError = TypeError;
        module.exports = function (passed, required) {
            if (passed < required) throw $TypeError("Not enough arguments");
            return passed;
        };

    }, {}], "bzGah": [function (require, module, exports) {
        var userAgent = require("a2626516f9620005");
        module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

    }, { "a2626516f9620005": "73xBt" }], "2Jcp4": [function (require, module, exports) {
        var classof = require("c7c7ac250cdf566d");
        var global = require("b72bf9080a7cff79");
        module.exports = classof(global.process) == "process";

    }, { "c7c7ac250cdf566d": "bdfmm", "b72bf9080a7cff79": "i8HOC" }], "l7FDS": [function (require, module, exports) {
        var $ = require("17c3b910d2dbb71d");
        var global = require("1abeb90fd7383ec1");
        var setTask = require("b6dc5821dc263614").set;
        var schedulersFix = require("7938d564561d4478");
        // https://github.com/oven-sh/bun/issues/1633
        var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
        // `setImmediate` method
        // http://w3c.github.io/setImmediate/#si-setImmediate
        $({
            global: true,
            bind: true,
            enumerable: true,
            forced: global.setImmediate !== setImmediate
        }, {
            setImmediate: setImmediate
        });

    }, { "17c3b910d2dbb71d": "dIGt4", "1abeb90fd7383ec1": "i8HOC", "b6dc5821dc263614": "7jDg7", "7938d564561d4478": "cAPb6" }], "cAPb6": [function (require, module, exports) {
        "use strict";
        var global = require("eb5579e035fa1ee3");
        var apply = require("cb159bf0873a8354");
        var isCallable = require("3cc7af5416d2337");
        var ENGINE_IS_BUN = require("a7483caf6052fce3");
        var USER_AGENT = require("48ea52855c5ca8b6");
        var arraySlice = require("578f698bfe8e58e2");
        var validateArgumentsLength = require("37f6506171744cff");
        var Function = global.Function;
        // dirty IE9- and Bun 0.3.0- checks
        var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function () {
            var version = global.Bun.version.split(".");
            return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
        }();
        // IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
        // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
        // https://github.com/oven-sh/bun/issues/1633
        module.exports = function (scheduler, hasTimeArg) {
            var firstParamIndex = hasTimeArg ? 2 : 1;
            return WRAP ? function (handler, timeout /* , ...arguments */) {
                var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
                var fn = isCallable(handler) ? handler : Function(handler);
                var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
                var callback = boundArgs ? function () {
                    apply(fn, this, params);
                } : fn;
                return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
            } : scheduler;
        };

    }, { "eb5579e035fa1ee3": "i8HOC", "cb159bf0873a8354": "148ka", "3cc7af5416d2337": "l3Kyn", "a7483caf6052fce3": "2BA6V", "48ea52855c5ca8b6": "73xBt", "578f698bfe8e58e2": "RsFXo", "37f6506171744cff": "b9O3D" }], "2BA6V": [function (require, module, exports) {
  /* global Bun -- Deno case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

    }, {}], "Qr6Q3": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "state", () => state);
        parcelHelpers.export(exports, "loadRecipe", () => loadRecipe);
        parcelHelpers.export(exports, "loadSearchResults", () => loadSearchResults);
        parcelHelpers.export(exports, "getSearchResults", () => getSearchResults);
        parcelHelpers.export(exports, "updateServings", () => updateServings);
        parcelHelpers.export(exports, "addBookmark", () => addBookmark);
        parcelHelpers.export(exports, "deleteBookmark", () => deleteBookmark);
        parcelHelpers.export(exports, "uploadRecipe", () => uploadRecipe);
        var _configJs = require("./config.js");
        //import { getJSON, sendJSON } from './helper.js';
        var _helperJs = require("./helper.js");
        var _regeneratorRuntime = require("regenerator-runtime");
        const state = {
            recipe: {},
            search: {
                query: "",
                page: 1,
                results: [],
                resultsPerPage: (0, _configJs.PER_PAGE)
            },
            bookmark: []
        };
        const createRecipeObject = function (data) {
            const { recipe } = data.data;
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                sourceUrl: recipe.source_url,
                image: recipe.image_url,
                servings: recipe.servings,
                cookingTime: recipe.cooking_time,
                ingredients: recipe.ingredients,
                ...recipe.key && {
                    key: recipe.key
                }
            };
        };
        const loadRecipe = async (id) => {
            try {
                const data = await (0, _helperJs.AJAX)(`${(0, _configJs.API_URL)}/${id}?key=?{KEY_API}`);
                state.recipe = createRecipeObject(data);
                if (state.bookmark.some((b) => b.id === id)) state.recipe.bookmarked = true;
                else state.recipe.bookmarked = false;
            } catch (error) {
                console.log(error);
                throw error;
            }
        };
        const loadSearchResults = async function (query) {
            try {
                state.search.query = query;
                const data = await (0, _helperJs.AJAX)(`${(0, _configJs.API_URL)}?search=${query}&key=${(0, _configJs.KEY_API)}`);
                state.search.results = data.data.recipes.map((el) => {
                    return {
                        id: el.id,
                        title: el.title,
                        publisher: el.publisher,
                        image: el.image_url,
                        ...el.key && {
                            key: el.key
                        }
                    };
                });
                state.search.page = 1;
            } catch (error) {
                console.log(error);
                throw error;
            }
        };
        const getSearchResults = function (page = state.search.page) {
            state.search.page = page;
            const start = (page - 1) * state.search.resultsPerPage;
            const end = page * state.search.resultsPerPage;
            return state.search.results.slice(start, end);
        };
        const updateServings = function (newServings) {
            state.recipe.ingredients.forEach((ing) => {
                ing.quantity = ing.quantity * newServings / state.recipe.servings;
            });
            state.recipe.servings = newServings;
        };
        const persistBookmarks = function () {
            localStorage.setItem("bookmarks", JSON.stringify(state.bookmark));
        };
        const addBookmark = function (recipe) {
            state.bookmark.push(recipe);
            persistBookmarks();
            // mark cur recipe as bookmark
            if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
        };
        const deleteBookmark = function (id) {
            const index = state.bookmark.findIndex((el) => el.id === id);
            state.bookmark.splice(index, 1);
            persistBookmarks();
            // delete bookmark
            if (id === state.recipe.id) state.recipe.bookmarked = false;
        };
        const init = function () {
            const data = localStorage.getItem("bookmarks");
            if (data) state.bookmark = JSON.parse(data);
        };
        init();
        const clearBookmarks = function () {
            localStorage.clear("bookmarks");
        };
        const uploadRecipe = async function (newRecipe) {
            try {
                const ingredients = Object.entries(newRecipe).filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "").map((ing) => {
                    const ingArr = ing[1].split(",").map((el) => el.trim());
                    if (ingArr.length !== 3) throw new Error("Wrong ingredient format! please use the correct format:");
                    const [quantity, unit, description] = ingArr;
                    return {
                        quantity: quantity ? +quantity : null,
                        unit,
                        description
                    };
                });
                const recipe = {
                    title: newRecipe.title,
                    source_url: newRecipe.sourceUrl,
                    image_url: newRecipe.image,
                    publisher: newRecipe.publisher,
                    cooking_time: +newRecipe.cookingTime,
                    servings: +newRecipe.servings,
                    ingredients
                };
                const data = await (0, _helperJs.AJAX)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.KEY_API)}`, recipe);
                state.recipe = createRecipeObject(data);
                addBookmark(state.recipe);
                console.log(state.recipe);
            } catch (err) {
                throw err;
            }
        };

    }, { "./config.js": "k5Hzs", "./helper.js": "lVRAz", "regenerator-runtime": "dXNgZ", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "k5Hzs": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "API_URL", () => API_URL);
        parcelHelpers.export(exports, "TIMEOUT_SEC", () => TIMEOUT_SEC);
        parcelHelpers.export(exports, "PER_PAGE", () => PER_PAGE);
        parcelHelpers.export(exports, "KEY_API", () => KEY_API);
        parcelHelpers.export(exports, "MODAL_CLOSE_SEC", () => MODAL_CLOSE_SEC);
        const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
        const TIMEOUT_SEC = 10;
        const PER_PAGE = 10;
        const KEY_API = `1f1ca288-cfe8-4bf6-8dae-e3fa1c4f2dc6`;
        const MODAL_CLOSE_SEC = 2.5;

    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "gkKU3": [function (require, module, exports) {
        exports.interopDefault = function (a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        exports.defineInteropFlag = function (a) {
            Object.defineProperty(a, "__esModule", {
                value: true
            });
        };
        exports.exportAll = function (source, dest) {
            Object.keys(source).forEach(function (key) {
                if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
                Object.defineProperty(dest, key, {
                    enumerable: true,
                    get: function () {
                        return source[key];
                    }
                });
            });
            return dest;
        };
        exports.export = function (dest, destName, get) {
            Object.defineProperty(dest, destName, {
                enumerable: true,
                get: get
            });
        };

    }, {}], "lVRAz": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "AJAX", () => AJAX);
        var _regeneratorRuntime = require("regenerator-runtime");
        var _configJs = require("./config.js");
        const timeout = function (s) {
            return new Promise(function (_, reject) {
                setTimeout(function () {
                    reject(new Error(`Request took too long! Timeout after ${s} second`));
                }, s * 1000);
            });
        };
        const AJAX = async function (url, uplaodData) {
            try {
                const fetchPro = uplaodData ? fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(uplaodData)
                }) : fetch(url);
                const res = await Promise.race([
                    fetchPro,
                    timeout((0, _configJs.TIMEOUT_SEC))
                ]);
                const data = await res.json();
                if (!res.ok) throw new Error(`${data.message} (${res.status})`);
                return data;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }; /*
  
  export const getJSON = async function (url) {
    try {
      const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
  
      const data = await res.json();
  
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const sendJSON = async function (url, uplaodData) {
    try {
      const fetchPro = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uplaodData),
      });
  
      const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
  
      const data = await res.json();
  
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  */

    }, { "regenerator-runtime": "dXNgZ", "./config.js": "k5Hzs", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "dXNgZ": [function (require, module, exports) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var runtime = function (exports) {
            "use strict";
            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var defineProperty = Object.defineProperty || function (obj, key, desc) {
                obj[key] = desc.value;
            };
            var undefined; // More compressible than void 0.
            var $Symbol = typeof Symbol === "function" ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || "@@iterator";
            var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
            var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
            function define(obj, key, value) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
                return obj[key];
            }
            try {
                // IE 8 has a broken Object.defineProperty that only works on DOM objects.
                define({}, "");
            } catch (err) {
                define = function (obj, key, value) {
                    return obj[key] = value;
                };
            }
            function wrap(innerFn, outerFn, self, tryLocsList) {
                // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                var generator = Object.create(protoGenerator.prototype);
                var context = new Context(tryLocsList || []);
                // The ._invoke method unifies the implementations of the .next,
                // .throw, and .return methods.
                defineProperty(generator, "_invoke", {
                    value: makeInvokeMethod(innerFn, self, context)
                });
                return generator;
            }
            exports.wrap = wrap;
            // Try/catch helper to minimize deoptimizations. Returns a completion
            // record like context.tryEntries[i].completion. This interface could
            // have been (and was previously) designed to take a closure to be
            // invoked without arguments, but in all the cases we care about we
            // already have an existing method we want to call, so there's no need
            // to create a new function object. We can even get away with assuming
            // the method takes exactly one argument, since that happens to be true
            // in every case, so we don't have to touch the arguments object. The
            // only additional allocation required is the completion record, which
            // has a stable shape and so hopefully should be cheap to allocate.
            function tryCatch(fn, obj, arg) {
                try {
                    return {
                        type: "normal",
                        arg: fn.call(obj, arg)
                    };
                } catch (err) {
                    return {
                        type: "throw",
                        arg: err
                    };
                }
            }
            var GenStateSuspendedStart = "suspendedStart";
            var GenStateSuspendedYield = "suspendedYield";
            var GenStateExecuting = "executing";
            var GenStateCompleted = "completed";
            // Returning this object from the innerFn has the same effect as
            // breaking out of the dispatch switch statement.
            var ContinueSentinel = {};
            // Dummy constructor functions that we use as the .constructor and
            // .constructor.prototype properties for functions that return Generator
            // objects. For full spec compliance, you may wish to configure your
            // minifier not to mangle the names of these two functions.
            function Generator() { }
            function GeneratorFunction() { }
            function GeneratorFunctionPrototype() { }
            // This is a polyfill for %IteratorPrototype% for environments that
            // don't natively support it.
            var IteratorPrototype = {};
            define(IteratorPrototype, iteratorSymbol, function () {
                return this;
            });
            var getProto = Object.getPrototypeOf;
            var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
            if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
                // of the polyfill.
                IteratorPrototype = NativeIteratorPrototype;
            var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
            GeneratorFunction.prototype = GeneratorFunctionPrototype;
            defineProperty(Gp, "constructor", {
                value: GeneratorFunctionPrototype,
                configurable: true
            });
            defineProperty(GeneratorFunctionPrototype, "constructor", {
                value: GeneratorFunction,
                configurable: true
            });
            GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
            // Helper for defining the .next, .throw, and .return methods of the
            // Iterator interface in terms of a single ._invoke method.
            function defineIteratorMethods(prototype) {
                [
                    "next",
                    "throw",
                    "return"
                ].forEach(function (method) {
                    define(prototype, method, function (arg) {
                        return this._invoke(method, arg);
                    });
                });
            }
            exports.isGeneratorFunction = function (genFun) {
                var ctor = typeof genFun === "function" && genFun.constructor;
                return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
            };
            exports.mark = function (genFun) {
                if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                else {
                    genFun.__proto__ = GeneratorFunctionPrototype;
                    define(genFun, toStringTagSymbol, "GeneratorFunction");
                }
                genFun.prototype = Object.create(Gp);
                return genFun;
            };
            // Within the body of any async function, `await x` is transformed to
            // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
            // `hasOwn.call(value, "__await")` to determine if the yielded value is
            // meant to be awaited.
            exports.awrap = function (arg) {
                return {
                    __await: arg
                };
            };
            function AsyncIterator(generator, PromiseImpl) {
                function invoke(method, arg, resolve, reject) {
                    var record = tryCatch(generator[method], generator, arg);
                    if (record.type === "throw") reject(record.arg);
                    else {
                        var result = record.arg;
                        var value = result.value;
                        if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function (value) {
                            invoke("next", value, resolve, reject);
                        }, function (err) {
                            invoke("throw", err, resolve, reject);
                        });
                        return PromiseImpl.resolve(value).then(function (unwrapped) {
                            // When a yielded Promise is resolved, its final value becomes
                            // the .value of the Promise<{value,done}> result for the
                            // current iteration.
                            result.value = unwrapped;
                            resolve(result);
                        }, function (error) {
                            // If a rejected Promise was yielded, throw the rejection back
                            // into the async generator function so it can be handled there.
                            return invoke("throw", error, resolve, reject);
                        });
                    }
                }
                var previousPromise;
                function enqueue(method, arg) {
                    function callInvokeWithMethodAndArg() {
                        return new PromiseImpl(function (resolve, reject) {
                            invoke(method, arg, resolve, reject);
                        });
                    }
                    return previousPromise = // If enqueue has been called before, then we want to wait until
                        // all previous Promises have been resolved before calling invoke,
                        // so that results are always delivered in the correct order. If
                        // enqueue has not been called before, then it is important to
                        // call invoke immediately, without waiting on a callback to fire,
                        // so that the async generator function has the opportunity to do
                        // any necessary setup in a predictable way. This predictability
                        // is why the Promise constructor synchronously invokes its
                        // executor callback, and why async functions synchronously
                        // execute code before the first await. Since we implement simple
                        // async functions in terms of async generators, it is especially
                        // important to get this right, even though it requires care.
                        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                            // invocations of the iterator.
                            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                }
                // Define the unified helper method that is used to implement .next,
                // .throw, and .return (see defineIteratorMethods).
                defineProperty(this, "_invoke", {
                    value: enqueue
                });
            }
            defineIteratorMethods(AsyncIterator.prototype);
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
                return this;
            });
            exports.AsyncIterator = AsyncIterator;
            // Note that simple async functions are implemented on top of
            // AsyncIterator objects; they just return a Promise for the value of
            // the final result produced by the iterator.
            exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
                if (PromiseImpl === void 0) PromiseImpl = Promise;
                var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
                return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
                    : iter.next().then(function (result) {
                        return result.done ? result.value : iter.next();
                    });
            };
            function makeInvokeMethod(innerFn, self, context) {
                var state = GenStateSuspendedStart;
                return function invoke(method, arg) {
                    if (state === GenStateExecuting) throw new Error("Generator is already running");
                    if (state === GenStateCompleted) {
                        if (method === "throw") throw arg;
                        // Be forgiving, per 25.3.3.3.3 of the spec:
                        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                        return doneResult();
                    }
                    context.method = method;
                    context.arg = arg;
                    while (true) {
                        var delegate = context.delegate;
                        if (delegate) {
                            var delegateResult = maybeInvokeDelegate(delegate, context);
                            if (delegateResult) {
                                if (delegateResult === ContinueSentinel) continue;
                                return delegateResult;
                            }
                        }
                        if (context.method === "next") // Setting context._sent for legacy support of Babel's
                            // function.sent implementation.
                            context.sent = context._sent = context.arg;
                        else if (context.method === "throw") {
                            if (state === GenStateSuspendedStart) {
                                state = GenStateCompleted;
                                throw context.arg;
                            }
                            context.dispatchException(context.arg);
                        } else if (context.method === "return") context.abrupt("return", context.arg);
                        state = GenStateExecuting;
                        var record = tryCatch(innerFn, self, context);
                        if (record.type === "normal") {
                            // If an exception is thrown from innerFn, we leave state ===
                            // GenStateExecuting and loop back for another invocation.
                            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                            if (record.arg === ContinueSentinel) continue;
                            return {
                                value: record.arg,
                                done: context.done
                            };
                        } else if (record.type === "throw") {
                            state = GenStateCompleted;
                            // Dispatch the exception by looping back around to the
                            // context.dispatchException(context.arg) call above.
                            context.method = "throw";
                            context.arg = record.arg;
                        }
                    }
                };
            }
            // Call delegate.iterator[context.method](context.arg) and handle the
            // result, either by returning a { value, done } result from the
            // delegate iterator, or by modifying context.method and context.arg,
            // setting context.delegate to null, and returning the ContinueSentinel.
            function maybeInvokeDelegate(delegate, context) {
                var methodName = context.method;
                var method = delegate.iterator[methodName];
                if (method === undefined) {
                    // A .throw or .return when the delegate iterator has no .throw
                    // method, or a missing .next mehtod, always terminate the
                    // yield* loop.
                    context.delegate = null;
                    // Note: ["return"] must be used for ES3 parsing compatibility.
                    if (methodName === "throw" && delegate.iterator["return"]) {
                        // If the delegate iterator has a return method, give it a
                        // chance to clean up.
                        context.method = "return";
                        context.arg = undefined;
                        maybeInvokeDelegate(delegate, context);
                        if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                            // "return" to "throw", let that override the TypeError below.
                            return ContinueSentinel;
                    }
                    if (methodName !== "return") {
                        context.method = "throw";
                        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
                    }
                    return ContinueSentinel;
                }
                var record = tryCatch(method, delegate.iterator, context.arg);
                if (record.type === "throw") {
                    context.method = "throw";
                    context.arg = record.arg;
                    context.delegate = null;
                    return ContinueSentinel;
                }
                var info = record.arg;
                if (!info) {
                    context.method = "throw";
                    context.arg = new TypeError("iterator result is not an object");
                    context.delegate = null;
                    return ContinueSentinel;
                }
                if (info.done) {
                    // Assign the result of the finished delegate to the temporary
                    // variable specified by delegate.resultName (see delegateYield).
                    context[delegate.resultName] = info.value;
                    // Resume execution at the desired location (see delegateYield).
                    context.next = delegate.nextLoc;
                    // If context.method was "throw" but the delegate handled the
                    // exception, let the outer generator proceed normally. If
                    // context.method was "next", forget context.arg since it has been
                    // "consumed" by the delegate iterator. If context.method was
                    // "return", allow the original .return call to continue in the
                    // outer generator.
                    if (context.method !== "return") {
                        context.method = "next";
                        context.arg = undefined;
                    }
                } else // Re-yield the result returned by the delegate method.
                    return info;
                // The delegate iterator is finished, so forget it and continue with
                // the outer generator.
                context.delegate = null;
                return ContinueSentinel;
            }
            // Define Generator.prototype.{next,throw,return} in terms of the
            // unified ._invoke helper method.
            defineIteratorMethods(Gp);
            define(Gp, toStringTagSymbol, "Generator");
            // A Generator should always return itself as the iterator object when the
            // @@iterator function is called on it. Some browsers' implementations of the
            // iterator prototype chain incorrectly implement this, causing the Generator
            // object to not be returned from this call. This ensures that doesn't happen.
            // See https://github.com/facebook/regenerator/issues/274 for more details.
            define(Gp, iteratorSymbol, function () {
                return this;
            });
            define(Gp, "toString", function () {
                return "[object Generator]";
            });
            function pushTryEntry(locs) {
                var entry = {
                    tryLoc: locs[0]
                };
                if (1 in locs) entry.catchLoc = locs[1];
                if (2 in locs) {
                    entry.finallyLoc = locs[2];
                    entry.afterLoc = locs[3];
                }
                this.tryEntries.push(entry);
            }
            function resetTryEntry(entry) {
                var record = entry.completion || {};
                record.type = "normal";
                delete record.arg;
                entry.completion = record;
            }
            function Context(tryLocsList) {
                // The root entry object (effectively a try statement without a catch
                // or a finally block) gives us a place to store values thrown from
                // locations where there is no enclosing try statement.
                this.tryEntries = [
                    {
                        tryLoc: "root"
                    }
                ];
                tryLocsList.forEach(pushTryEntry, this);
                this.reset(true);
            }
            exports.keys = function (val) {
                var object = Object(val);
                var keys = [];
                for (var key in object) keys.push(key);
                keys.reverse();
                // Rather than returning an object with a next method, we keep
                // things simple and return the next function itself.
                return function next() {
                    while (keys.length) {
                        var key = keys.pop();
                        if (key in object) {
                            next.value = key;
                            next.done = false;
                            return next;
                        }
                    }
                    // To avoid creating an additional object, we just hang the .value
                    // and .done properties off the next function object itself. This
                    // also ensures that the minifier will not anonymize the function.
                    next.done = true;
                    return next;
                };
            };
            function values(iterable) {
                if (iterable) {
                    var iteratorMethod = iterable[iteratorSymbol];
                    if (iteratorMethod) return iteratorMethod.call(iterable);
                    if (typeof iterable.next === "function") return iterable;
                    if (!isNaN(iterable.length)) {
                        var i = -1, next = function next() {
                            while (++i < iterable.length) if (hasOwn.call(iterable, i)) {
                                next.value = iterable[i];
                                next.done = false;
                                return next;
                            }
                            next.value = undefined;
                            next.done = true;
                            return next;
                        };
                        return next.next = next;
                    }
                }
                // Return an iterator with no values.
                return {
                    next: doneResult
                };
            }
            exports.values = values;
            function doneResult() {
                return {
                    value: undefined,
                    done: true
                };
            }
            Context.prototype = {
                constructor: Context,
                reset: function (skipTempReset) {
                    this.prev = 0;
                    this.next = 0;
                    // Resetting context._sent for legacy support of Babel's
                    // function.sent implementation.
                    this.sent = this._sent = undefined;
                    this.done = false;
                    this.delegate = null;
                    this.method = "next";
                    this.arg = undefined;
                    this.tryEntries.forEach(resetTryEntry);
                    if (!skipTempReset) {
                        for (var name in this)// Not sure about the optimal order of these conditions:
                            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
                    }
                },
                stop: function () {
                    this.done = true;
                    var rootEntry = this.tryEntries[0];
                    var rootRecord = rootEntry.completion;
                    if (rootRecord.type === "throw") throw rootRecord.arg;
                    return this.rval;
                },
                dispatchException: function (exception) {
                    if (this.done) throw exception;
                    var context = this;
                    function handle(loc, caught) {
                        record.type = "throw";
                        record.arg = exception;
                        context.next = loc;
                        if (caught) {
                            // If the dispatched exception was caught by a catch block,
                            // then let that catch block handle the exception normally.
                            context.method = "next";
                            context.arg = undefined;
                        }
                        return !!caught;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        var record = entry.completion;
                        if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                            // it, so set the completion value of the entire function to
                            // throw the exception.
                            return handle("end");
                        if (entry.tryLoc <= this.prev) {
                            var hasCatch = hasOwn.call(entry, "catchLoc");
                            var hasFinally = hasOwn.call(entry, "finallyLoc");
                            if (hasCatch && hasFinally) {
                                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                                else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                            } else if (hasCatch) {
                                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                            } else if (hasFinally) {
                                if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                            } else throw new Error("try statement without catch or finally");
                        }
                    }
                },
                abrupt: function (type, arg) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                            var finallyEntry = entry;
                            break;
                        }
                    }
                    if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
                        // location outside the try/catch block.
                        finallyEntry = null;
                    var record = finallyEntry ? finallyEntry.completion : {};
                    record.type = type;
                    record.arg = arg;
                    if (finallyEntry) {
                        this.method = "next";
                        this.next = finallyEntry.finallyLoc;
                        return ContinueSentinel;
                    }
                    return this.complete(record);
                },
                complete: function (record, afterLoc) {
                    if (record.type === "throw") throw record.arg;
                    if (record.type === "break" || record.type === "continue") this.next = record.arg;
                    else if (record.type === "return") {
                        this.rval = this.arg = record.arg;
                        this.method = "return";
                        this.next = "end";
                    } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
                    return ContinueSentinel;
                },
                finish: function (finallyLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.finallyLoc === finallyLoc) {
                            this.complete(entry.completion, entry.afterLoc);
                            resetTryEntry(entry);
                            return ContinueSentinel;
                        }
                    }
                },
                "catch": function (tryLoc) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var entry = this.tryEntries[i];
                        if (entry.tryLoc === tryLoc) {
                            var record = entry.completion;
                            if (record.type === "throw") {
                                var thrown = record.arg;
                                resetTryEntry(entry);
                            }
                            return thrown;
                        }
                    }
                    // The context.catch method must only be called with a location
                    // argument that corresponds to a known catch block.
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function (iterable, resultName, nextLoc) {
                    this.delegate = {
                        iterator: values(iterable),
                        resultName: resultName,
                        nextLoc: nextLoc
                    };
                    if (this.method === "next") // Deliberately forget the last sent value so that we don't
                        // accidentally pass it on to the delegate.
                        this.arg = undefined;
                    return ContinueSentinel;
                }
            };
            // Regardless of whether this script is executing as a CommonJS module
            // or not, return the runtime object so that we can declare the variable
            // regeneratorRuntime in the outer scope, which allows this module to be
            // injected easily by `bin/regenerator --include-runtime script.js`.
            return exports;
        }(// If this script is executing as a CommonJS module, use module.exports
            // as the regeneratorRuntime namespace. Otherwise create a new empty
            // object. Either way, the resulting object will be used to initialize
            // the regeneratorRuntime variable at the top of this file.
            (0, module.exports));
        try {
            regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
            // This module should not be running in strict mode, so the above
            // assignment should always work unless something is misconfigured. Just
            // in case runtime.js accidentally runs in strict mode, in modern engines
            // we can explicitly access globalThis. In older engines we can escape
            // strict mode using a global Function call. This could conceivably fail
            // if a Content Security Policy forbids using Function, but in that case
            // the proper solution is to fix the accidental strict mode problem. If
            // you've misconfigured your bundler to force strict mode and applied a
            // CSP to forbid Function, and you're not willing to fix either of those
            // problems, please detail your unique predicament in a GitHub issue.
            if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
            else Function("r", "regeneratorRuntime = r")(runtime);
        }

    }, {}], "l60JC": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _viewJs = require("./View.js");
        var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
        var _iconsSvg = require("../../img/icons.svg");
        var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
        var _fractional = require("fractional");
        class RecipeView extends (0, _viewJsDefault.default) {
            _parentElement = document.querySelector(".recipe");
            _errorMessage = `we could not find the recepiec please try another one!`;
            _message = "";
            addHandlerRender(handler) {
                [
                    "hashchange",
                    "load"
                ].forEach((ev) => window.addEventListener(ev, handler));
            }
            addHandelerUpdateServings(handler) {
                this._parentElement.addEventListener("click", function (e) {
                    const btn = e.target.closest(".btn--tiny");
                    if (!btn) return;
                    const val = +document.querySelector(".recipe__info-data--people").textContent;
                    if (btn.classList.contains("btn--increase-servings")) handler(val + 1);
                    if (val === 1) return;
                    if (btn.classList.contains("btn--decrease-servings")) handler(val - 1);
                });
            }
            addHandlerAddBookMark(handler) {
                this._parentElement.addEventListener("click", function (e) {
                    e.preventDefault();
                    const btn = e.target.closest(".btn-bookmark");
                    if (!btn) return;
                    handler();
                });
            }
            _generateMarkup() {
                return `<figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1> 
    </figure>
  
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
  
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--decrease-servings">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
  
      
      <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
          <svg>
          <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
        
    
      <button class="btn--round btn-bookmark">
        <svg class="">
          <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
        </svg>
      </button>
    </div>
  
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
       
        ${this._data.ingredients.map((ing) => this._generateIngMarkUp(ing)).join("")}
    </div>
  
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
            }
            _generateIngMarkUp(ing) {
                return `
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
        </svg>
          <div class="recipe__quantity">${ing.quantity ? new (0, _fractional.Fraction)(ing.quantity) : ""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
         </div>
        </li>`;
            }
        }
        exports.default = new RecipeView();

    }, { "./View.js": "5cUXS", "../../img/icons.svg": "cMpiy", "fractional": "3SU56", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "5cUXS": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _iconsSvg = require("../../img/icons.svg");
        var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
        class View {
            _data;
      /**
     * render recived object to the dom
     * @param {Object | Object[]} data the data to be rendered
     * @param {boolean} [render = true] = if false, create  markup string of rendering to the DOM
     * @returns
     */ render(data, render = true) {
                if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
                this._data = data;
                const markUp = this._generateMarkup();
                if (!render) return markUp;
                this._clear();
                this._parentElement.insertAdjacentHTML("afterbegin", markUp);
            }
            update(data) {
                this._data = data;
                const newMarkUp = this._generateMarkup();
                const newDom = document.createRange().createContextualFragment(newMarkUp);
                const newElememts = Array.from(newDom.querySelectorAll("*"));
                const curElement = Array.from(this._parentElement.querySelectorAll("*"));
                newElememts.forEach((newEl, index) => {
                    const curEl = curElement[index];
                    //updateText Cchanged
                    if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
                    //updarte changed attribute
                    if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr) => {
                        curEl.setAttribute(attr.name, attr.value);
                    });
                });
            }
            _clear() {
                this._parentElement.innerHTML = "";
            }
            renderSpinner() {
                const markUp = `
        <div class="spinner">
         <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
        </div>`;
                this._parentElement.innerHTML = "";
                this._parentElement.insertAdjacentHTML("afterbegin", markUp);
            }
            renderError(message = this._errorMessage) {
                const markUp = `
        <div class="error">
           <div>
             <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
             </svg>
            </div>
            <p>${message}</p>
      </div> `;
                this._clear();
                this._parentElement.insertAdjacentHTML("afterbegin", markUp);
            }
            renderMassage(message = this._message) {
                const markUp = `
        <div class="error">
           <div>
             <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
             </svg>
            </div>
            <p>${message}</p>
      </div> `;
                this._clear();
                this._parentElement.insertAdjacentHTML("afterbegin", markUp);
            }
        }
        exports.default = View;

    }, { "../../img/icons.svg": "cMpiy", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "cMpiy": [function (require, module, exports) {
        module.exports = require("b8612fa5726434b1").getBundleURL("hWUTQ") + "icons.21bad73c.svg" + "?" + Date.now();

    }, { "b8612fa5726434b1": "lgJ39" }], "lgJ39": [function (require, module, exports) {
        "use strict";
        var bundleURL = {};
        function getBundleURLCached(id) {
            var value = bundleURL[id];
            if (!value) {
                value = getBundleURL();
                bundleURL[id] = value;
            }
            return value;
        }
        function getBundleURL() {
            try {
                throw new Error();
            } catch (err) {
                var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
                if (matches) // The first two stack frames will be this function and getBundleURLCached.
                    // Use the 3rd one, which will be a runtime in the original bundle.
                    return getBaseURL(matches[2]);
            }
            return "/";
        }
        function getBaseURL(url) {
            return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
        } // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
        function getOrigin(url) {
            var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
            if (!matches) throw new Error("Origin not found");
            return matches[0];
        }
        exports.getBundleURL = getBundleURLCached;
        exports.getBaseURL = getBaseURL;
        exports.getOrigin = getOrigin;

    }, {}], "3SU56": [function (require, module, exports) {
 
    Fraction = function (numerator, denominator) {
       if (typeof numerator !== "undefined" && denominator) {
                if (typeof numerator === "number" && typeof denominator === "number") {
                    this.numerator = numerator;
                    this.denominator = denominator;
                } else if (typeof numerator === "string" && typeof denominator === "string") {
                    
                    this.numerator = parseInt(numerator);
                    this.denominator = parseInt(denominator);
                }
               
            } else if (typeof denominator === "undefined") {
                num = numerator; // swap variable names for legibility
                if (typeof num === "number") {
                    this.numerator = num;
                    this.denominator = 1;
                } else if (typeof num === "string") {
                    var a, b;  
                    var arr = num.split(" ");
                    if (arr[0]) a = arr[0];
                    if (arr[1]) b = arr[1];
                    /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
                    if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
                    else if (a && !b) {
                  /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                            // it's not a whole number... it's actually a fraction without a whole part written
                            var f = a.split("/");
                            this.numerator = f[0];
                            this.denominator = f[1];
                            /* string floating point */
                        } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                        else {
                            this.numerator = parseInt(a);
                            this.denominator = 1;
                        }
                    } else return undefined; // could not parse
                }
            }
            this.normalize();
        };
        Fraction.prototype.clone = function () {
            return new Fraction(this.numerator, this.denominator);
        };
        Fraction.prototype.toString = function () {
            if (this.denominator === "NaN") return "NaN";
            var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
            var numerator = this.numerator % this.denominator;
            var denominator = this.denominator;
            var result = [];
            if (wholepart != 0) result.push(wholepart);
            if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
            return result.length > 0 ? result.join(" ") : 0;
        };
        Fraction.prototype.rescale = function (factor) {
            this.numerator *= factor;
            this.denominator *= factor;
            return this;
        };
        Fraction.prototype.add = function (b) {
            var a = this.clone();
            if (b instanceof Fraction) b = b.clone();
            else b = new Fraction(b);
            td = a.denominator;
            a.rescale(b.denominator);
            b.rescale(td);
            a.numerator += b.numerator;
            return a.normalize();
        };
        Fraction.prototype.subtract = function (b) {
            var a = this.clone();
            if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
            else b = new Fraction(b);
            td = a.denominator;
            a.rescale(b.denominator);
            b.rescale(td);
            a.numerator -= b.numerator;
            return a.normalize();
        };
        Fraction.prototype.multiply = function (b) {
            var a = this.clone();
            if (b instanceof Fraction) {
                a.numerator *= b.numerator;
                a.denominator *= b.denominator;
            } else if (typeof b === "number") a.numerator *= b;
            else return a.multiply(new Fraction(b));
            return a.normalize();
        };
        Fraction.prototype.divide = function (b) {
            var a = this.clone();
            if (b instanceof Fraction) {
                a.numerator *= b.denominator;
                a.denominator *= b.numerator;
            } else if (typeof b === "number") a.denominator *= b;
            else return a.divide(new Fraction(b));
            return a.normalize();
        };
        Fraction.prototype.equals = function (b) {
            if (!(b instanceof Fraction)) b = new Fraction(b);
            // fractions that are equal should have equal normalized forms
            var a = this.clone().normalize();
            var b = b.clone().normalize();
            return a.numerator === b.numerator && a.denominator === b.denominator;
        };

        Fraction.prototype.normalize = function () {
            var isFloat = function (n) {
                return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
            };
            var roundToPlaces = function (n, places) {
                if (!places) return Math.round(n);
                else {
                    var scalar = Math.pow(10, places);
                    return Math.round(n * scalar) / scalar;
                }
            };
            return function () {
          // XXX hackish.  Is there a better way to address this issue?
          //
          /* first check if we have decimals, and if we do eliminate them
           * multiply by the 10 ^ number of decimal places in the number
           * round the number to nine decimal places
           * to avoid js floating point funnies
           */ if (isFloat(this.denominator)) {
                    var rounded = roundToPlaces(this.denominator, 9);
                    var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
                    this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
                    //this.numerator *= scaleup;
                    this.numerator *= scaleup;
                }
                if (isFloat(this.numerator)) {
                    var rounded = roundToPlaces(this.numerator, 9);
                    var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
                    this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
                    //this.numerator *= scaleup;
                    this.denominator *= scaleup;
                }
                var gcf = Fraction.gcf(this.numerator, this.denominator);
                this.numerator /= gcf;
                this.denominator /= gcf;
                if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
                    this.numerator *= -1;
                    this.denominator *= -1;
                }
                return this;
            };
        }();
  /* Takes two numbers and returns their greatest common factor.
   */ Fraction.gcf = function (a, b) {
            var common_factors = [];
            var fa = Fraction.primeFactors(a);
            var fb = Fraction.primeFactors(b);
            // for each factor in fa
            // if it's also in fb
            // put it into the common factors
            fa.forEach(function (factor) {
                var i = fb.indexOf(factor);
                if (i >= 0) {
                    common_factors.push(factor);
                    fb.splice(i, 1); // remove from fb
                }
            });
            if (common_factors.length === 0) return 1;
            var gcf = function () {
                var r = common_factors[0];
                var i;
                for (i = 1; i < common_factors.length; i++)r = r * common_factors[i];
                return r;
            }();
            return gcf;
        };
        // Adapted from: 
        // http://www.btinternet.com/~se16/js/factor.htm
        Fraction.primeFactors = function (n) {
            var num1 = Math.abs(n);
            var factors = [];
            var _factor = 2; // first potential prime factor
            while (_factor * _factor <= num1) if (num1 % _factor === 0) {
                factors.push(_factor); // so keep it
                num1 = num1 / _factor; // and divide our search point by it
            } else _factor++; // and increment
            if (num1 != 1) factors.push(num1); //    so it too should be recorded
            return factors; // Return the prime factors
        };
        module.exports.Fraction = Fraction;

    }, {}], "9OQAM": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        class searchView {
            _parentEl = document.querySelector(".search");
            _listEl = document.querySelector(".search-results");
            getQuery() {
                const query = this._parentEl.querySelector(".search__field").value;
                this._clearInput();
                return query;
            }
            _clearInput() {
                this._parentEl.querySelector(".search__field").value = "";
            }
            addHandlerSearch(handler) {
                this._parentEl.addEventListener("submit", (e) => {
                    e.preventDefault();
                    handler();
                });
            }
        }
        exports.default = new searchView();

    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "cSbZE": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _view = require("./View");
        var _viewDefault = parcelHelpers.interopDefault(_view);
        var _previewView = require("./previewView");
        var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
        var _iconsSvg = require("../../img/icons.svg");
        var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
        class ResultsView extends (0, _viewDefault.default) {
            _parentElement = document.querySelector(".results");
            _errorMessage = `no recepies found with this name`;
            _message = "";
            _generateMarkup() {
                return this._data.map((result) => (0, _previewViewDefault.default).render(result, false)).join("");
            }
        }
        exports.default = new ResultsView();

    }, { "./View": "5cUXS", "./previewView": "1FDQ6", "../../img/icons.svg": "cMpiy", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "1FDQ6": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _view = require("./View");
        var _viewDefault = parcelHelpers.interopDefault(_view);
        var _iconsSvg = require("../../img/icons.svg");
        var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
        class PreviewView extends (0, _viewDefault.default) {
            _parentElement = "";
            _generateMarkup() {
                const id = window.location.hash.slice(1);
                return `
      <li class="preview">
      <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}n</p>
        
        <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">
          <svg>
          <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
     </div>
      </a>
      </li>`;
            }
        }
        exports.default = new PreviewView();

    }, { "./View": "5cUXS", "../../img/icons.svg": "cMpiy", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "i6DNj": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _view = require("./View");
        var _viewDefault = parcelHelpers.interopDefault(_view);
        var _iconsSvg = require("../../img/icons.svg");
        var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
        class AddRecipeView extends (0, _viewDefault.default) {
            _parentElement = document.querySelector(".upload");
            _message = "Recipe was successfuly uploaded";
            _overlay = document.querySelector(".overlay");
            _window = document.querySelector(".add-recipe-window");
            _btnClose = document.querySelector(".btn--close-modal");
            _btnOpen = document.querySelector(".nav__btn--add-recipe");
            constructor() {
                super();
                this._addHandlerShowWindow();
                this._addHandlerHideWindow();
            }
            toggleWindow() {
                this._overlay.classList.toggle("hidden");
                this._window.classList.toggle("hidden");
            }
            _addHandlerShowWindow() {
                this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
            }
            _addHandlerHideWindow() {
                this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
                this._overlay.addEventListener("click", this.toggleWindow.bind(this));
            }
            addHandlerUpload(handler) {
                this._parentElement.addEventListener("submit", function (e) {
                    e.preventDefault();
                    const dataArr = [
                        ...new FormData(this)
                    ];
                    const data = Object.fromEntries(dataArr);
                    handler(data);
                });
            }
        }
        exports.default = new AddRecipeView();

    }, { "./View": "5cUXS", "../../img/icons.svg": "cMpiy", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "6z7bi": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _view = require("./View");
        var _viewDefault = parcelHelpers.interopDefault(_view);
        var _iconsSvg = require("../../img/icons.svg");
        var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
        class PaginationView extends (0, _viewDefault.default) {
            _parentElement = document.querySelector(".pagination");
            addClikcHandler(handler) {
                this._parentElement.addEventListener("click", function (e) {
                    e.preventDefault();
                    const btn = e.target.closest(".btn--inline");
                    if (!btn) return;
                    const gotoBtn = +btn.dataset.goto;
                    handler(gotoBtn);
                });
            }
            _generateMarkup() {
                const pageNum = Math.ceil(this._data.results.length / this._data.resultsPerPage);
                let curPage = this._data.page;
                //first and other pages
                if (curPage === 1 && pageNum > 1) return `
          <button data-goto = "${curPage + 1}" class="btn--inline pagination__btn--next">
           <span>Page ${curPage + 1}</span>
           <svg class="search__icon">
           <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
           </svg>
          </button>`;

                if (curPage === pageNum && pageNum > 1) return `
  
          <button data-goto = "${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
          </button>
        
        `;
                if (curPage < pageNum) return `<button data-goto = "${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
          </button>
  
          <button data-goto = "${curPage + 1}" class="btn--inline pagination__btn--next">
           <span>Page ${curPage + 1}</span>
           <svg class="search__icon">
           <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
           </svg>
          </button>
        `;

                return "";
            }
        }
        exports.default = new PaginationView();

    }, { "./View": "5cUXS", "../../img/icons.svg": "cMpiy", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "4Lqzq": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        var _view = require("./View");
        var _viewDefault = parcelHelpers.interopDefault(_view);
        var _iconsSvg = require("../../img/icons.svg");
        var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
        var _previewView = require("./previewView");
        var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
        class BookmarksView extends (0, _viewDefault.default) {
            _parentElement = document.querySelector(".bookmarks__list");
            _errorMessage = `no bookmars yet. find nice recepie and bookmark it`;
            _message = "";
            addHandlerRender(handler) {
                window.addEventListener("load", handler());
            }
            _generateMarkup() {
                return this._data.map((bookmark) => (0, _previewViewDefault.default).render(bookmark, false)).join("");
            }
        }
        exports.default = new BookmarksView();

    }, { "./View": "5cUXS", "../../img/icons.svg": "cMpiy", "./previewView": "1FDQ6", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }]
}, ["fA0o9", "aenu9"], "aenu9", "parcelRequire4463")

