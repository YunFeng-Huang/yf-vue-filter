# RedRain

> A Vue.js project

## Build Setup

``` 
npm install yf-vue-directive

#自定义过滤器

1、formatDate
默认： 'yyyy-MM-dd hh:mm';
let o = {
  'y+': date.getFullYear(),
  'M+': date.getMonth() + 1,
  'd+': date.getDate(),
  'h+': date.getHours(),
  'm+': date.getMinutes(),
  's+': date.getSeconds()
}
2、formatTime
默认： 'hh:mm:ss';
  let o = {
    'h+': parseInt(time / 60 / 60),
    'm+': parseInt(time / 60 % 60),
    's+': parseInt(time % 60),
  }
3、dateTimeYear //倒计时 年
4、dateTimeMounth //倒计时 月
5、dateTimeDayUp //倒计时向上取整 天
6、dateTimeDay //倒计时 天
7、countTimeHour //倒计时 小时
8、countTimeMinute //倒计时 分钟
9、countTimeSecond //倒计时 秒
10、priceFixed2  //金额 最多2位小数，末尾去0
11、numberThousandsSeparator  //数字 => 千位分隔符

``` 

