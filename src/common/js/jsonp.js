import originJSONP from 'jsonp'

export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  // promise success => resolve
  // promise failure => reject
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(data)
      }
    })
  })
}

let param = (data) => {
  let url = ''
  for (let i in data) {
    let value = data[i] !== undefined ? data[i] : ''
    // encodeURIComponent() 函数 ：
    // 可把字符串作为URI 组件进行编码。其返回值URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。
    url += `&${i}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
  // url 存在则删除第一个 &
}
