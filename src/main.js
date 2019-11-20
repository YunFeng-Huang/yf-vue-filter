// import formatDate from './formatDate/formatDate'
export const formatDate = (time, fmt) => {

  fmt = fmt || 'yyyy-MM-dd hh:mm';
  let date = new Date(parseInt(time));

  let o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      str = str.length > 1 ? str : 0 + str;
      fmt = fmt.replace(RegExp.$1, str);
    }
  }

  return fmt;
}

export const formatTime = (time, fmt) => {

  fmt = fmt || 'hh:mm:ss';

  let o = {
    'h+': parseInt(time / 60 / 60),
    'm+': parseInt(time / 60 % 60),
    's+': parseInt(time % 60),
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      str = str.length > 1 ? str : 0 + str;
      fmt = fmt.replace(RegExp.$1, str);
    }
  }

  return fmt;
}


//倒计时 年
export const dateTimeYear = time => {
  time *= 1000
  var newDate = new Date(time);
  let { y, M, d } = { y: newDate.getFullYear(), M: newDate.getMonth() + 1, d: newDate.getDate() };
  y = trans(y);
  M = trans(M);
  d = trans(d);
  return `${y}`;
}
//倒计时 月
export const dateTimeMounth = time => {
  time *= 1000
  var newDate = new Date(time);
  let { y, M, d } = { y: newDate.getFullYear(), M: newDate.getMonth() + 1, d: newDate.getDate() };
  y = trans(y);
  M = trans(M);
  d = trans(d);
  return `${M}`;
}
//倒计时向上取整 天
export const dateTimeDayUp = time => {
  time -= 0;
  var d = Math.ceil(time / 1000 / 60 / 60 / 24), m = parseInt(time / 1000 / 60 % 60), s = parseInt(time / 1000 % 60);
  d = trans(d);
  m = trans(m);
  s = trans(s);
  return d;
}
//倒计时 天
export const dateTimeDay = time => {
  time -= 0;
  var d = parseInt(time / 1000 / 60 / 60 / 24), m = parseInt(time / 1000 / 60 % 60), s = parseInt(time / 1000 % 60);
  d = trans(d);
  m = trans(m);
  s = trans(s);
  return d;
}
//倒计时 小时
export const countTimeHour = time => {
  time -= 0;
  var h = parseInt(time / 1000 / 60 / 60), m = parseInt(time / 1000 / 60 % 60), s = parseInt(time / 1000 % 60);
  h = trans(h);
  m = trans(m);
  s = trans(s);
  return h;
}
//倒计时 分钟
export const countTimeMinute = time => {
  time -= 0;
  var h = parseInt(time / 1000 / 60 / 60), m = parseInt(time / 1000 / 60 % 60), s = parseInt(time / 1000 % 60);
  h = trans(h);
  m = trans(m);
  s = trans(s);
  return m;
}
//倒计时 秒
export const countTimeSecond = time => {
  time -= 0;
  var h = parseInt(time / 1000 / 60 / 60), m = parseInt(time / 1000 / 60 % 60), s = parseInt(time / 1000 % 60);
  h = trans(h);
  m = trans(m);
  s = trans(s);
  return s;
}


//金额 最多2位小数，末尾去0
export const priceFixed2 = p => {
  p === Infinity ? '--' : +(p || 0).toFixed(2)
}

//数字 => 千位分隔符
export const numberThousandsSeparator = num => {
  if (num === 0) return '0';
  const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
  const MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;
  return num && num.toString().replace(DIGIT_PATTERN, m => m.replace(MILI_PATTERN, ','));
}