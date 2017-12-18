export default{
  queryParam (item) {
    var svalue = window.location.hash.match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'))
    return decodeURIComponent(svalue ? svalue[1] : svalue)
  }
}
