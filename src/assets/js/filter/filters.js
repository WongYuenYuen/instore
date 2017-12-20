import Vue from 'vue'

/** 过滤http */
Vue.filter('httpFilter', function (url) {
  var newUrl
  if (url) {
    newUrl = url.replace('http:', '')
  }
  return newUrl
})
