import _ajaxGet from '../../assets/js/common/_ajax.js';

export default {
  getBrandList(data) {
    let param = {
      cityid: data.cityid
    };
    return _ajaxGet({
      url: 'api/pub/brandlist',
      data: param
    })
  },
  getCityList(data) {
    let param = {
      cityid: data.cityid
    };
    return _ajaxGet({
      url: 'api/pub/city',
      data: param
    })
  },

  getShopList(data) {
    let param = {
      cityid: data.cityid
    };
    return _ajaxGet({
      url: 'api/pub/shoplist',
      data: param
    })
  },
  getHotList(data) {
    let param = {
      cityid: data.cityid
    };
    return _ajaxGet({
      url: 'api/pub/hotlist',
      data: param
    })
  },
  getBannerList(data) {
    let param = {
      cityid: data.cityid
    };
    return _ajaxGet({
      url: 'api/pub/carousel',
      data: param
    })
  },
}
