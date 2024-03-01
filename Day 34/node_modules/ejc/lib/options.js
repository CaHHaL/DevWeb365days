"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = getConfig;
exports.defaultConfig = void 0;

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultConfig = {
  start: 1,
  key: 'key',
  format: 'json',
  output: './',
  force: false,
  metaPrefix: '__@@__'
};
exports.defaultConfig = defaultConfig;

var config = _objectSpread({}, defaultConfig, {
  files: []
});

function getConfig() {
  _commander.default.version('0.0.1', '-v, --version').usage("[options] <file ...>").command("convert <files...>").option("-k, --key <key>", 'key col header').option('-s, --start <start>', 'data start row').option('-f, --format <format>', 'output file format').option('-F, --force', 'write file in force, warning: will overrides the file with the same name!').option('-o, --output <dir>', 'output dir').on('option:key', function (key) {
    config.key = key;
  }).on('option:output', function (output) {
    config.output = output;
  }).on('option:start', function (start) {
    config.start = parseInt(start);
  }).on('option:format', function (format) {
    if (format === 'json') {
      config.format = 'json';
    } else {
      console.warn("".concat(format, " is not surpport yet, and use json instead!"));
    }
  }).on('option:force', function () {
    config.force = true;
  }).on("command:convert", function (files) {
    files.map(function (file) {
      config.files.push(file);
    });
  }).parse(process.argv);

  return Promise.resolve(config);
}