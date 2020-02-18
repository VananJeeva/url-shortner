module.exports.addHttp = function (url) {
  if (!/^(f|ht)tps?:\/\//i.test(url) && url.trim().length !== 0) {
    url = 'http://' + url
  }
  return url
}
