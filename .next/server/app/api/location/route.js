/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/location/route";
exports.ids = ["app/api/location/route"];
exports.modules = {

/***/ "(rsc)/./app/api/location/route.ts":
/*!***********************************!*\
  !*** ./app/api/location/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// app/api/location/route.ts\n\nconst dynamic = 'force-dynamic';\nasync function GET(request) {\n    // Em ambiente de desenvolvimento (localhost), os cabeçalhos da Vercel não existem.\n    // Então, retornamos uma localização padrão para testes.\n    if (true) {\n        console.log(\"Ambiente de desenvolvimento: retornando localização de São Paulo.\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'success',\n            city: 'São Paulo',\n            country: 'Brazil',\n            region: 'SP',\n            postalCode: '01310-100',\n            lat: -23.5505,\n            lon: -46.6333\n        });\n    }\n    // Em produção na Vercel, lemos os cabeçalhos que a Vercel injeta.\n    try {\n        const city = request.headers.get('x-vercel-ip-city');\n        const country = request.headers.get('x-vercel-ip-country');\n        const region = request.headers.get('x-vercel-ip-country-region');\n        const postalCode = request.headers.get('x-vercel-ip-postal-code');\n        const lat = request.headers.get('x-vercel-ip-latitude');\n        const lon = request.headers.get('x-vercel-ip-longitude');\n        // Verificação de segurança: se os headers principais estiverem faltando, retorna erro.\n        if (!city || !country || !lat || !lon) {\n            console.error(\"Cabeçalhos de geolocalização da Vercel não foram encontrados em produção.\");\n            throw new Error(\"Cabeçalhos da Vercel ausentes.\");\n        }\n        // Retorna os dados da localização lidos diretamente dos cabeçalhos.\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'success',\n            city,\n            country,\n            region: region || '',\n            postalCode: postalCode || '',\n            lat: parseFloat(lat),\n            lon: parseFloat(lon)\n        });\n    } catch (error) {\n        console.error(\"Erro ao processar cabeçalhos da Vercel:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Erro interno ao processar a geolocalização da Vercel.'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvY2F0aW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRCQUE0QjtBQUU0QjtBQUVqRCxNQUFNQyxVQUFVLGdCQUFnQjtBQUVoQyxlQUFlQyxJQUFJQyxPQUFvQjtJQUM1QyxtRkFBbUY7SUFDbkYsd0RBQXdEO0lBQ3hELElBQUlDLElBQXNDLEVBQUU7UUFDMUNDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFDdkJDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsWUFBWTtZQUNaQyxLQUFLLENBQUM7WUFDTkMsS0FBSyxDQUFDO1FBQ1I7SUFDRjtJQUVBLGtFQUFrRTtJQUNsRSxJQUFJO1FBQ0YsTUFBTUwsT0FBT04sUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDakMsTUFBTU4sVUFBVVAsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDcEMsTUFBTUwsU0FBU1IsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDbkMsTUFBTUosYUFBYVQsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDdkMsTUFBTUgsTUFBTVYsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFDaEMsTUFBTUYsTUFBTVgsUUFBUVksT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFFaEMsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQ1AsUUFBUSxDQUFDQyxXQUFXLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSztZQUNyQ1QsUUFBUVksS0FBSyxDQUFDO1lBQ2QsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsb0VBQW9FO1FBQ3BFLE9BQU9sQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQ3ZCQyxRQUFRO1lBQ1JDO1lBQ0FDO1lBQ0FDLFFBQVFBLFVBQVU7WUFDbEJDLFlBQVlBLGNBQWM7WUFDMUJDLEtBQUtNLFdBQVdOO1lBQ2hCQyxLQUFLSyxXQUFXTDtRQUNsQjtJQUVGLEVBQUUsT0FBT0csT0FBWTtRQUNuQlosUUFBUVksS0FBSyxDQUFDLDJDQUEyQ0EsTUFBTUcsT0FBTztRQUN0RSxPQUFPcEIscURBQVlBLENBQUNPLElBQUksQ0FDdEI7WUFBRVUsT0FBTztRQUF3RCxHQUNqRTtZQUFFVCxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtYWRzb1xcdGluZGVyLXphcC1pbnN0YSAoaW5nbGVzKVxcYXBwXFxhcGlcXGxvY2F0aW9uXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL2xvY2F0aW9uL3JvdXRlLnRzXHJcblxyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHluYW1pYyA9ICdmb3JjZS1keW5hbWljJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICAvLyBFbSBhbWJpZW50ZSBkZSBkZXNlbnZvbHZpbWVudG8gKGxvY2FsaG9zdCksIG9zIGNhYmXDp2FsaG9zIGRhIFZlcmNlbCBuw6NvIGV4aXN0ZW0uXHJcbiAgLy8gRW50w6NvLCByZXRvcm5hbW9zIHVtYSBsb2NhbGl6YcOnw6NvIHBhZHLDo28gcGFyYSB0ZXN0ZXMuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFtYmllbnRlIGRlIGRlc2Vudm9sdmltZW50bzogcmV0b3JuYW5kbyBsb2NhbGl6YcOnw6NvIGRlIFPDo28gUGF1bG8uXCIpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIGNpdHk6ICdTw6NvIFBhdWxvJyxcclxuICAgICAgY291bnRyeTogJ0JyYXppbCcsXHJcbiAgICAgIHJlZ2lvbjogJ1NQJyxcclxuICAgICAgcG9zdGFsQ29kZTogJzAxMzEwLTEwMCcsXHJcbiAgICAgIGxhdDogLTIzLjU1MDUsXHJcbiAgICAgIGxvbjogLTQ2LjYzMzMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEVtIHByb2R1w6fDo28gbmEgVmVyY2VsLCBsZW1vcyBvcyBjYWJlw6dhbGhvcyBxdWUgYSBWZXJjZWwgaW5qZXRhLlxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjaXR5ID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtY2l0eScpO1xyXG4gICAgY29uc3QgY291bnRyeSA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtdmVyY2VsLWlwLWNvdW50cnknKTtcclxuICAgIGNvbnN0IHJlZ2lvbiA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtdmVyY2VsLWlwLWNvdW50cnktcmVnaW9uJyk7XHJcbiAgICBjb25zdCBwb3N0YWxDb2RlID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtcG9zdGFsLWNvZGUnKTtcclxuICAgIGNvbnN0IGxhdCA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtdmVyY2VsLWlwLWxhdGl0dWRlJyk7XHJcbiAgICBjb25zdCBsb24gPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCd4LXZlcmNlbC1pcC1sb25naXR1ZGUnKTtcclxuXHJcbiAgICAvLyBWZXJpZmljYcOnw6NvIGRlIHNlZ3VyYW7Dp2E6IHNlIG9zIGhlYWRlcnMgcHJpbmNpcGFpcyBlc3RpdmVyZW0gZmFsdGFuZG8sIHJldG9ybmEgZXJyby5cclxuICAgIGlmICghY2l0eSB8fCAhY291bnRyeSB8fCAhbGF0IHx8ICFsb24pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkNhYmXDp2FsaG9zIGRlIGdlb2xvY2FsaXphw6fDo28gZGEgVmVyY2VsIG7Do28gZm9yYW0gZW5jb250cmFkb3MgZW0gcHJvZHXDp8Ojby5cIik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhYmXDp2FsaG9zIGRhIFZlcmNlbCBhdXNlbnRlcy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0b3JuYSBvcyBkYWRvcyBkYSBsb2NhbGl6YcOnw6NvIGxpZG9zIGRpcmV0YW1lbnRlIGRvcyBjYWJlw6dhbGhvcy5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICBjaXR5LFxyXG4gICAgICBjb3VudHJ5LFxyXG4gICAgICByZWdpb246IHJlZ2lvbiB8fCAnJywgLy8gRXN0YWRvL3JlZ2nDo28gcG9kZSBzZXIgbnVsbCBlbSBhbGd1bnMgY2Fzb3NcclxuICAgICAgcG9zdGFsQ29kZTogcG9zdGFsQ29kZSB8fCAnJywgLy8gQ0VQIHBvZGUgc2VyIG51bGwgZW0gYWxndW5zIGNhc29zXHJcbiAgICAgIGxhdDogcGFyc2VGbG9hdChsYXQpLFxyXG4gICAgICBsb246IHBhcnNlRmxvYXQobG9uKSxcclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBwcm9jZXNzYXIgY2FiZcOnYWxob3MgZGEgVmVyY2VsOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogJ0Vycm8gaW50ZXJubyBhbyBwcm9jZXNzYXIgYSBnZW9sb2NhbGl6YcOnw6NvIGRhIFZlcmNlbC4nIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImR5bmFtaWMiLCJHRVQiLCJyZXF1ZXN0IiwicHJvY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwic3RhdHVzIiwiY2l0eSIsImNvdW50cnkiLCJyZWdpb24iLCJwb3N0YWxDb2RlIiwibGF0IiwibG9uIiwiaGVhZGVycyIsImdldCIsImVycm9yIiwiRXJyb3IiLCJwYXJzZUZsb2F0IiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/location/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5Ctinder-zap-insta%20(ingles)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5Ctinder-zap-insta%20(ingles)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5Ctinder-zap-insta%20(ingles)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5Ctinder-zap-insta%20(ingles)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_madso_tinder_zap_insta_ingles_app_api_location_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/location/route.ts */ \"(rsc)/./app/api/location/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/location/route\",\n        pathname: \"/api/location\",\n        filename: \"route\",\n        bundlePath: \"app/api/location/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\madso\\\\tinder-zap-insta (ingles)\\\\app\\\\api\\\\location\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_madso_tinder_zap_insta_ingles_app_api_location_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2NhdGlvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9jYXRpb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2NhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtYWRzbyU1Q3RpbmRlci16YXAtaW5zdGElMjAoaW5nbGVzKSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDbWFkc28lNUN0aW5kZXItemFwLWluc3RhJTIwKGluZ2xlcykmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxtYWRzb1xcXFx0aW5kZXItemFwLWluc3RhIChpbmdsZXMpXFxcXGFwcFxcXFxhcGlcXFxcbG9jYXRpb25cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xvY2F0aW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9jYXRpb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xvY2F0aW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbWFkc29cXFxcdGluZGVyLXphcC1pbnN0YSAoaW5nbGVzKVxcXFxhcHBcXFxcYXBpXFxcXGxvY2F0aW9uXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5Ctinder-zap-insta%20(ingles)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5Ctinder-zap-insta%20(ingles)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5CUsers%5Cmadso%5Ctinder-zap-insta%20(ingles)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmadso%5Ctinder-zap-insta%20(ingles)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();