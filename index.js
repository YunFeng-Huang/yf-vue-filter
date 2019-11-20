
import * as filters from './src/main.js'

// 这种写法可以批量注册指令
export default {
  install(Vue) {
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key]);
    })
  },
};