'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBrowser = isBrowser;
exports.isiOS = isiOS;
exports.isAndroid = isAndroid;
var device = global.device || {};

function isBrowser() {
  var platform = device.platform;
  return platform === 'browser' || !platform;
}

function isiOS() {
  var platform = device.platform;
  return platform === 'iOS';
}

function isAndroid() {
  var platform = device.platform;
  return platform === 'Android';
}