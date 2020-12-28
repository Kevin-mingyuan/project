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
  !*** ./js/index.js ***!
  \*********************/
eval(";(function(doc, window){\r\n    const ul = doc.getElementById('ul');\r\n    const btn = doc.getElementById('btn');\r\n    const ipt = doc.getElementById('ipt');\r\n    const ws = new WebSocket('ws://localhost:8080');\r\n\r\n    const init = ()=>{\r\n        handEventOpen();\r\n    }\r\n\r\n    function handEventOpen(){\r\n        ws.addEventListener(\"open\", (e)=>{\r\n            console.log(\"websocket open\", e)\r\n            handEventSend();\r\n            handEventMessage();\r\n        })\r\n    }\r\n    \r\n    function handEventMessage(){\r\n        ws.addEventListener(\"message\", (e)=>{\r\n            console.log(\"websocket message\", e)\r\n            const data = JSON.parse(e.data);\r\n            console.log(data, 'data')\r\n            ul.append(renderUl(data))\r\n        })\r\n    }\r\n\r\n    function handEventSend(){\r\n        btn.addEventListener(\"click\", (e)=>{\r\n            let val = ipt.value;\r\n            let time = new Date().getTime();\r\n            let user = window.sessionStorage.getItem('user');\r\n            console.log('user', user)\r\n            console.log(val, time)\r\n            ws.send(JSON.stringify({\r\n                data:val,\r\n                date:time,\r\n                user:user\r\n            }))\r\n        })\r\n    }\r\n\r\n    function handEventClose(){\r\n        ws.addEventListener(\"close\", (e)=>{\r\n            console.log(\"websocket close\", e)\r\n        })\r\n    }\r\n\r\n    function renderUl(data){\r\n        let li = doc.createElement('li');\r\n\r\n        li.innerHTML = `<p>${data.user}</p><p>\r\n            <span>${data.data}</span>\r\n            <br />\r\n            <span>${data.date}</span>\r\n        </p>`;\r\n        console.log(li)\r\n        return li;\r\n    }\r\n\r\n    init()\r\n\r\n})(document, window)\n\n//# sourceURL=webpack://client/./js/index.js?");
/******/ })()
;