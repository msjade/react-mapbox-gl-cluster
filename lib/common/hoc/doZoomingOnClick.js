"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var doZoomingOnClick = function doZoomingOnClick(WrappedComponent) {
  var ZoomableComponent = function (_PureComponent) {
    _inherits(ZoomableComponent, _PureComponent);

    function ZoomableComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ZoomableComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZoomableComponent.__proto__ || Object.getPrototypeOf(ZoomableComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onClusterClick = function (properties, lngLat, event, meta) {
        var onClusterClick = _this.props.onClusterClick;
        var map = _this.context.map;

        var currentZoom = map.getZoom();
        var maxZoom = map.getMaxZoom();
        var zoom = (0, _utils.calculateNextZoomLevel)(currentZoom, maxZoom);

        map.flyTo({ center: lngLat, zoom: zoom });

        _this._handleClick(properties, lngLat, event, meta, onClusterClick);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ZoomableComponent, [{
      key: "_handleClick",
      value: function _handleClick(properties, lngLat, event, meta, callback) {
        if (_lodash2.default.isFunction(callback)) {
          callback(properties, lngLat, event, meta);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var props = _extends({}, this.props, {
          onClusterClick: this.onClusterClick
        });

        return _react2.default.createElement(WrappedComponent, props);
      }
    }]);

    return ZoomableComponent;
  }(_react.PureComponent);

  ZoomableComponent.contextTypes = {
    map: _propTypes2.default.object
  };


  ZoomableComponent.propTypes = _extends({}, WrappedComponent.propTypes);

  ZoomableComponent.defaultProps = _extends({}, WrappedComponent.defaultProps);

  return ZoomableComponent;
};

exports.default = doZoomingOnClick;