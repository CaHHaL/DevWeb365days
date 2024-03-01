"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xlsx = _interopRequireDefault(require("xlsx"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var XslxDocument =
/*#__PURE__*/
function () {
  function XslxDocument(filename) {
    _classCallCheck(this, XslxDocument);

    _defineProperty(this, "filename", null);

    _defineProperty(this, "sheets", []);

    if (!_fs.default.existsSync(filename)) {
      throw "".concat(filename, " does not exists");
    }

    this.filename = filename;
    this.sheets = this._readSheets();
  }

  _createClass(XslxDocument, [{
    key: "getSheets",
    value: function getSheets() {
      return this.sheets;
    }
  }, {
    key: "_readSheets",
    value: function _readSheets() {
      var s = [];

      var workbook = _xlsx.default.readFile(this.filename);

      workbook.SheetNames.map(function (name) {
        s.push(workbook.Sheets[name]);
      });
      return s;
    }
  }]);

  return XslxDocument;
}();

exports.default = XslxDocument;