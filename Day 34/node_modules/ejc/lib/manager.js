"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _document = _interopRequireDefault(require("./document"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _xlsx = _interopRequireDefault(require("xlsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Manager = function Manager(config) {
  var _this = this;

  _classCallCheck(this, Manager);

  _defineProperty(this, "xlsxs", []);

  _defineProperty(this, "config", {});

  _defineProperty(this, "readFile", function (filename) {
    _this.xlsxs.push(new _document.default(filename, _this.config));
  });

  _defineProperty(this, "_convertJSON", function (rows) {
    var obj = {};

    if (rows.length === 0) {
      return obj;
    }

    Object.keys(rows[0]).map(function (k) {
      if (k !== _this.config.key) {
        rows.map(function (row) {
          if (!obj[k]) {
            obj[k] = {};
          }

          obj[k][row[_this.config.key]] = row[k];
        });
      }
    });
    return obj;
  });

  _defineProperty(this, "_convert", function () {
    var sheets = [];

    _this.xlsxs.map(function (xlsx) {
      xlsx.sheets.map(function (s) {
        sheets.push(s);
      });
    });

    var rows = [];
    sheets.map(function (sheet) {
      var json = _xlsx.default.utils.sheet_to_json(sheet);

      rows = [].concat(_toConsumableArray(rows), _toConsumableArray(json));
    });
    return _this._convertJSON(rows);
  });

  _defineProperty(this, "convert", function () {
    _this._write(_this.config.output, _this._convert());
  });

  _defineProperty(this, "_write", function (dir, content) {
    Object.keys(content).map(function (header) {
      var data = content[header];

      _this._writeToFile(_path.default.resolve(dir, "".concat(header, ".").concat(_this.config.format)), JSON.stringify(data, null, '\t'));
    });
  });

  _defineProperty(this, "_writeToFile", function (file, data) {
    var exists = _fs.default.existsSync(file);

    if (_this.config.force) {
      if (exists) {
        console.warn("".concat(file, " will be overrides"));
      }
    } else {
      if (exists) {
        throw "".concat(file, " already exists");
      }
    }

    _fs.default.writeFileSync(file, data);
  });

  this.config = config;
};

var _default = Manager;
exports.default = _default;