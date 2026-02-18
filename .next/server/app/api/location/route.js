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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// app/api/location/route.ts\n\nconst dynamic = 'force-dynamic';\nasync function GET(request) {\n    // First, try Vercel headers (production)\n    const vercelCity = request.headers.get('x-vercel-ip-city');\n    const vercelCountry = request.headers.get('x-vercel-ip-country');\n    const vercelLat = request.headers.get('x-vercel-ip-latitude');\n    const vercelLon = request.headers.get('x-vercel-ip-longitude');\n    if (vercelCity && vercelCountry && vercelLat && vercelLon) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'success',\n            city: decodeURIComponent(vercelCity),\n            country: vercelCountry,\n            region: request.headers.get('x-vercel-ip-country-region') || '',\n            postalCode: request.headers.get('x-vercel-ip-postal-code') || '',\n            lat: parseFloat(vercelLat),\n            lon: parseFloat(vercelLon)\n        });\n    }\n    // Fallback: fetch real IP geolocation via external API (works in dev too)\n    try {\n        const forwarded = request.headers.get('x-forwarded-for');\n        const ip = forwarded ? forwarded.split(',')[0].trim() : null;\n        // Use ipapi.co — free, no key needed\n        const geoUrl = ip && ip !== '127.0.0.1' && ip !== '::1' ? `https://ipapi.co/${ip}/json/` : `https://ipapi.co/json/`;\n        const geoRes = await fetch(geoUrl, {\n            headers: {\n                'User-Agent': 'Mozilla/5.0'\n            },\n            cache: 'no-store'\n        });\n        if (!geoRes.ok) throw new Error('ipapi.co failed');\n        const geo = await geoRes.json();\n        if (geo.error) throw new Error(geo.reason || 'ipapi error');\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'success',\n            city: geo.city || 'Unknown',\n            country: geo.country_code || '',\n            region: geo.region || '',\n            postalCode: geo.postal || '',\n            lat: geo.latitude,\n            lon: geo.longitude\n        });\n    } catch (error) {\n        console.error(\"Geolocation error:\", error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Could not determine location.'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvY2F0aW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRCQUE0QjtBQUU0QjtBQUVqRCxNQUFNQyxVQUFVLGdCQUFnQjtBQUVoQyxlQUFlQyxJQUFJQyxPQUFvQjtJQUM1Qyx5Q0FBeUM7SUFDekMsTUFBTUMsYUFBYUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDdkMsTUFBTUMsZ0JBQWdCSixRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUMxQyxNQUFNRSxZQUFZTCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUN0QyxNQUFNRyxZQUFZTixRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUV0QyxJQUFJRixjQUFjRyxpQkFBaUJDLGFBQWFDLFdBQVc7UUFDekQsT0FBT1QscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUN2QkMsUUFBUTtZQUNSQyxNQUFNQyxtQkFBbUJUO1lBQ3pCVSxTQUFTUDtZQUNUUSxRQUFRWixRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUM7WUFDN0RVLFlBQVliLFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QjtZQUM5RFcsS0FBS0MsV0FBV1Y7WUFDaEJXLEtBQUtELFdBQVdUO1FBQ2xCO0lBQ0Y7SUFFQSwwRUFBMEU7SUFDMUUsSUFBSTtRQUNGLE1BQU1XLFlBQVlqQixRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUN0QyxNQUFNZSxLQUFLRCxZQUFZQSxVQUFVRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxLQUFLO1FBRXhELHFDQUFxQztRQUNyQyxNQUFNQyxTQUFTSCxNQUFNQSxPQUFPLGVBQWVBLE9BQU8sUUFDOUMsQ0FBQyxpQkFBaUIsRUFBRUEsR0FBRyxNQUFNLENBQUMsR0FDOUIsQ0FBQyxzQkFBc0IsQ0FBQztRQUU1QixNQUFNSSxTQUFTLE1BQU1DLE1BQU1GLFFBQVE7WUFDakNuQixTQUFTO2dCQUFFLGNBQWM7WUFBYztZQUN2Q3NCLE9BQU87UUFDVDtRQUVBLElBQUksQ0FBQ0YsT0FBT0csRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTTtRQUVoQyxNQUFNQyxNQUFNLE1BQU1MLE9BQU9mLElBQUk7UUFFN0IsSUFBSW9CLElBQUlDLEtBQUssRUFBRSxNQUFNLElBQUlGLE1BQU1DLElBQUlFLE1BQU0sSUFBSTtRQUU3QyxPQUFPaEMscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUN2QkMsUUFBUTtZQUNSQyxNQUFNa0IsSUFBSWxCLElBQUksSUFBSTtZQUNsQkUsU0FBU2dCLElBQUlHLFlBQVksSUFBSTtZQUM3QmxCLFFBQVFlLElBQUlmLE1BQU0sSUFBSTtZQUN0QkMsWUFBWWMsSUFBSUksTUFBTSxJQUFJO1lBQzFCakIsS0FBS2EsSUFBSUssUUFBUTtZQUNqQmhCLEtBQUtXLElBQUlNLFNBQVM7UUFDcEI7SUFFRixFQUFFLE9BQU9MLE9BQVk7UUFDbkJNLFFBQVFOLEtBQUssQ0FBQyxzQkFBc0JBLE1BQU1PLE9BQU87UUFDakQsT0FBT3RDLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO1lBQUVxQixPQUFPO1FBQWdDLEdBQ3pDO1lBQUVwQixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXGNvcmxlb25lX2RybVxcdGluZGVyLXphcC1pbnN0YS1pbmdsZXNcXGFwcFxcYXBpXFxsb2NhdGlvblxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9sb2NhdGlvbi9yb3V0ZS50c1xyXG5cclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSAnZm9yY2UtZHluYW1pYyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgLy8gRmlyc3QsIHRyeSBWZXJjZWwgaGVhZGVycyAocHJvZHVjdGlvbilcclxuICBjb25zdCB2ZXJjZWxDaXR5ID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtY2l0eScpO1xyXG4gIGNvbnN0IHZlcmNlbENvdW50cnkgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCd4LXZlcmNlbC1pcC1jb3VudHJ5Jyk7XHJcbiAgY29uc3QgdmVyY2VsTGF0ID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC12ZXJjZWwtaXAtbGF0aXR1ZGUnKTtcclxuICBjb25zdCB2ZXJjZWxMb24gPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCd4LXZlcmNlbC1pcC1sb25naXR1ZGUnKTtcclxuXHJcbiAgaWYgKHZlcmNlbENpdHkgJiYgdmVyY2VsQ291bnRyeSAmJiB2ZXJjZWxMYXQgJiYgdmVyY2VsTG9uKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgY2l0eTogZGVjb2RlVVJJQ29tcG9uZW50KHZlcmNlbENpdHkpLFxyXG4gICAgICBjb3VudHJ5OiB2ZXJjZWxDb3VudHJ5LFxyXG4gICAgICByZWdpb246IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtdmVyY2VsLWlwLWNvdW50cnktcmVnaW9uJykgfHwgJycsXHJcbiAgICAgIHBvc3RhbENvZGU6IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3gtdmVyY2VsLWlwLXBvc3RhbC1jb2RlJykgfHwgJycsXHJcbiAgICAgIGxhdDogcGFyc2VGbG9hdCh2ZXJjZWxMYXQpLFxyXG4gICAgICBsb246IHBhcnNlRmxvYXQodmVyY2VsTG9uKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRmFsbGJhY2s6IGZldGNoIHJlYWwgSVAgZ2VvbG9jYXRpb24gdmlhIGV4dGVybmFsIEFQSSAod29ya3MgaW4gZGV2IHRvbylcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9yd2FyZGVkID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC1mb3J3YXJkZWQtZm9yJyk7XHJcbiAgICBjb25zdCBpcCA9IGZvcndhcmRlZCA/IGZvcndhcmRlZC5zcGxpdCgnLCcpWzBdLnRyaW0oKSA6IG51bGw7XHJcblxyXG4gICAgLy8gVXNlIGlwYXBpLmNvIOKAlCBmcmVlLCBubyBrZXkgbmVlZGVkXHJcbiAgICBjb25zdCBnZW9VcmwgPSBpcCAmJiBpcCAhPT0gJzEyNy4wLjAuMScgJiYgaXAgIT09ICc6OjEnXHJcbiAgICAgID8gYGh0dHBzOi8vaXBhcGkuY28vJHtpcH0vanNvbi9gXHJcbiAgICAgIDogYGh0dHBzOi8vaXBhcGkuY28vanNvbi9gO1xyXG5cclxuICAgIGNvbnN0IGdlb1JlcyA9IGF3YWl0IGZldGNoKGdlb1VybCwge1xyXG4gICAgICBoZWFkZXJzOiB7ICdVc2VyLUFnZW50JzogJ01vemlsbGEvNS4wJyB9LFxyXG4gICAgICBjYWNoZTogJ25vLXN0b3JlJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZ2VvUmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ2lwYXBpLmNvIGZhaWxlZCcpO1xyXG5cclxuICAgIGNvbnN0IGdlbyA9IGF3YWl0IGdlb1Jlcy5qc29uKCk7XHJcblxyXG4gICAgaWYgKGdlby5lcnJvcikgdGhyb3cgbmV3IEVycm9yKGdlby5yZWFzb24gfHwgJ2lwYXBpIGVycm9yJyk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIGNpdHk6IGdlby5jaXR5IHx8ICdVbmtub3duJyxcclxuICAgICAgY291bnRyeTogZ2VvLmNvdW50cnlfY29kZSB8fCAnJyxcclxuICAgICAgcmVnaW9uOiBnZW8ucmVnaW9uIHx8ICcnLFxyXG4gICAgICBwb3N0YWxDb2RlOiBnZW8ucG9zdGFsIHx8ICcnLFxyXG4gICAgICBsYXQ6IGdlby5sYXRpdHVkZSxcclxuICAgICAgbG9uOiBnZW8ubG9uZ2l0dWRlLFxyXG4gICAgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJHZW9sb2NhdGlvbiBlcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdDb3VsZCBub3QgZGV0ZXJtaW5lIGxvY2F0aW9uLicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZHluYW1pYyIsIkdFVCIsInJlcXVlc3QiLCJ2ZXJjZWxDaXR5IiwiaGVhZGVycyIsImdldCIsInZlcmNlbENvdW50cnkiLCJ2ZXJjZWxMYXQiLCJ2ZXJjZWxMb24iLCJqc29uIiwic3RhdHVzIiwiY2l0eSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvdW50cnkiLCJyZWdpb24iLCJwb3N0YWxDb2RlIiwibGF0IiwicGFyc2VGbG9hdCIsImxvbiIsImZvcndhcmRlZCIsImlwIiwic3BsaXQiLCJ0cmltIiwiZ2VvVXJsIiwiZ2VvUmVzIiwiZmV0Y2giLCJjYWNoZSIsIm9rIiwiRXJyb3IiLCJnZW8iLCJlcnJvciIsInJlYXNvbiIsImNvdW50cnlfY29kZSIsInBvc3RhbCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29uc29sZSIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/location/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5Ccorleone_drm%5Ctinder-zap-insta-ingles%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Ccorleone_drm%5Ctinder-zap-insta-ingles&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5Ccorleone_drm%5Ctinder-zap-insta-ingles%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Ccorleone_drm%5Ctinder-zap-insta-ingles&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_corleone_drm_tinder_zap_insta_ingles_app_api_location_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/location/route.ts */ \"(rsc)/./app/api/location/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/location/route\",\n        pathname: \"/api/location\",\n        filename: \"route\",\n        bundlePath: \"app/api/location/route\"\n    },\n    resolvedPagePath: \"C:\\\\corleone_drm\\\\tinder-zap-insta-ingles\\\\app\\\\api\\\\location\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_corleone_drm_tinder_zap_insta_ingles_app_api_location_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2NhdGlvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9jYXRpb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2NhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDY29ybGVvbmVfZHJtJTVDdGluZGVyLXphcC1pbnN0YS1pbmdsZXMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNjb3JsZW9uZV9kcm0lNUN0aW5kZXItemFwLWluc3RhLWluZ2xlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXGNvcmxlb25lX2RybVxcXFx0aW5kZXItemFwLWluc3RhLWluZ2xlc1xcXFxhcHBcXFxcYXBpXFxcXGxvY2F0aW9uXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2NhdGlvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvY2F0aW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sb2NhdGlvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXGNvcmxlb25lX2RybVxcXFx0aW5kZXItemFwLWluc3RhLWluZ2xlc1xcXFxhcHBcXFxcYXBpXFxcXGxvY2F0aW9uXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5Ccorleone_drm%5Ctinder-zap-insta-ingles%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Ccorleone_drm%5Ctinder-zap-insta-ingles&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flocation%2Froute&page=%2Fapi%2Flocation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flocation%2Froute.ts&appDir=C%3A%5Ccorleone_drm%5Ctinder-zap-insta-ingles%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Ccorleone_drm%5Ctinder-zap-insta-ingles&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();