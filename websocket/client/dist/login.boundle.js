/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./js/login.js ***!
  \*********************/
eval(";(function(doc,window){\r\n    const ipt = doc.getElementById('user');\r\n    const btn = doc.getElementById('login');\r\n\r\n    const init = () => {\r\n        ipt.value = '';\r\n        handleEventLogin()\r\n    }\r\n\r\n    function handleEventLogin(){\r\n        btn.addEventListener('click', (e)=>{\r\n            let val = ipt.value;\r\n            if(val){\r\n                window.location.href = 'index.html';\r\n                window.sessionStorage.setItem(\"user\", JSON.stringify(val));\r\n            }\r\n        })\r\n    }\r\n\r\n    init()\r\n})(document, window)\n\n//# sourceURL=webpack://client/./js/login.js?");
/******/ })()
;