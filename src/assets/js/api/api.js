import _ajaxGet from './_ajax.js'

export default {
  /** 获取门店热销车型(首页) */
  getHotCar (data) {
    let param = {
      shopid: data.shopid
    }
    return _ajaxGet({
      url: 'api/pub/shop/onsalecars',
      data: param
    })
  },
  /** 获取头条列表(首页) */
  getToplines (data) {
    let param = {
      shopid: data.shopid
    }
    return _ajaxGet({
      url: 'api/pub/shop/toplines',
      data: param
    })
  },

  /** *old  */
  getBrandList (data) {
    let param = {
      cityid: data.cityid
    }
    return _ajaxGet({
      url: 'api/pub/brandlist',
      data: param
    })
  },
  getCityList (data) {
    let param = {
      cityid: data.cityid
    }
    return _ajaxGet({
      url: 'api/pub/city',
      data: param
    })
  },

  getShopList (data) {
    let param = {
      cityid: data.cityid
    }
    return _ajaxGet({
      url: 'api/pub/shoplist',
      data: param
    })
  },
  getHotList (data) {
    let param = {
      cityid: data.cityid
    }
    return _ajaxGet({
      url: 'api/pub/hotlist',
      data: param
    })
  },
  getBannerList (data) {
    let param = {
      cityid: data.cityid
    }
    return _ajaxGet({
      url: 'api/pub/carousel',
      data: param
    })
  }
}
