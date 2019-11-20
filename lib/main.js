'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import formatDate from './formatDate/formatDate'
var formatDate = exports.formatDate = function formatDate(time, fmt) {

  fmt = fmt || 'yyyy-MM-dd hh:mm';
  var date = new Date(parseInt(time));

  var o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      var str = o[k] + '';
      str = str.length > 1 ? str : 0 + str;
      fmt = fmt.replace(RegExp.$1, str);
    }
  }

  return fmt;
};

var formatTime = exports.formatTime = function formatTime(time, fmt) {

  fmt = fmt || 'hh:mm:ss';

  var o = {
    'h+': parseInt(time / 60 / 60),
    'm+': parseInt(time / 60 % 60),
    's+': parseInt(time % 60)
  };

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      var str = o[k] + '';
      str = str.length > 1 ? str : 0 + str;
      fmt = fmt.replace(RegExp.$1, str);
    }
  }

  return fmt;
};

//倒计时 年
var dateTimeYear = exports.dateTimeYear = function dateTimeYear(time) {
  time *= 1000;
  var newDate = new Date(time);
  var _y$M$d = { y: newDate.getFullYear(), M: newDate.getMonth() + 1, d: newDate.getDate() },
      y = _y$M$d.y,
      M = _y$M$d.M,
      d = _y$M$d.d;

  y = trans(y);
  M = trans(M);
  d = trans(d);
  return '' + y;
};
//倒计时 月
var dateTimeMounth = exports.dateTimeMounth = function dateTimeMounth(time) {
  time *= 1000;
  var newDate = new Date(time);
  var _y$M$d2 = { y: newDate.getFullYear(), M: newDate.getMonth() + 1, d: newDate.getDate() },
      y = _y$M$d2.y,
      M = _y$M$d2.M,
      d = _y$M$d2.d;

  y = trans(y);
  M = trans(M);
  d = trans(d);
  return '' + M;
};
//倒计时向上取整 天
var dateTimeDayUp = exports.dateTimeDayUp = function dateTimeDayUp(time) {
  time -= 0;
  var d = Math.ceil(time / 1000 / 60 / 60 / 24),
      m = parseInt(time / 1000 / 60 % 60),
      s = parseInt(time / 1000 % 60);
  d = trans(d);
  m = trans(m);
  s = trans(s);
  return d;
};
//倒计时 天
var dateTimeDay = exports.dateTimeDay = function dateTimeDay(time) {
  time -= 0;
  var d = parseInt(time / 1000 / 60 / 60 / 24),
      m = parseInt(time / 1000 / 60 % 60),
      s = parseInt(time / 1000 % 60);
  d = trans(d);
  m = trans(m);
  s = trans(s);
  return d;
};
//倒计时 小时
var countTimeHour = exports.countTimeHour = function countTimeHour(time) {
  time -= 0;
  var h = parseInt(time / 1000 / 60 / 60),
      m = parseInt(time / 1000 / 60 % 60),
      s = parseInt(time / 1000 % 60);
  h = trans(h);
  m = trans(m);
  s = trans(s);
  return h;
};
//倒计时 分钟
var countTimeMinute = exports.countTimeMinute = function countTimeMinute(time) {
  time -= 0;
  var h = parseInt(time / 1000 / 60 / 60),
      m = parseInt(time / 1000 / 60 % 60),
      s = parseInt(time / 1000 % 60);
  h = trans(h);
  m = trans(m);
  s = trans(s);
  return m;
};
//倒计时 秒
var countTimeSecond = exports.countTimeSecond = function countTimeSecond(time) {
  time -= 0;
  var h = parseInt(time / 1000 / 60 / 60),
      m = parseInt(time / 1000 / 60 % 60),
      s = parseInt(time / 1000 % 60);
  h = trans(h);
  m = trans(m);
  s = trans(s);
  return s;
};

//金额 最多2位小数，末尾去0
var priceFixed2 = exports.priceFixed2 = function priceFixed2(p) {
  p === Infinity ? '--' : +(p || 0).toFixed(2);
};

//数字 => 千位分隔符
var numberThousandsSeparator = exports.numberThousandsSeparator = function numberThousandsSeparator(num) {
  if (num === 0) return '0';
  var DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
  var MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;
  return num && num.toString().replace(DIGIT_PATTERN, function (m) {
    return m.replace(MILI_PATTERN, ',');
  });
};