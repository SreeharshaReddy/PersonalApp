(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    sqrt: function(x){
      return Math.sqrt(x);
    },
    square: function (x) {
        return x * x;
    }
  //  diag:function (x, y) {
      //  return Math.sqrt(square(x) + square(y));
  // } ,
}

},{}],2:[function(require,module,exports){
var a = require('./lib.js');

console.log(a.square(16)); // 121
//console.log(a.diag(4, 3)); // 5

},{"./lib.js":1}]},{},[2]);
