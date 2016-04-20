'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBrowser = isBrowser;
exports.isiOS = isiOS;
exports.isAndroid = isAndroid;
function isBrowser() {
  var platform = global.device.platform;
  return platform === 'browser' || !platform;
}

function isiOS() {
  var platform = global.device.platform;
  return platform === 'iOS';
}

function isAndroid() {
  var platform = global.device.platform;
  return platform === 'Android';
}