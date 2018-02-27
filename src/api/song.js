import {commonParams} from './config'
import axios from 'axios'

export function getSongUrl (songmid) {
  const url = '/api/getSongUrl'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    format: 'json',
    g_tk: 5381,
    cid: 205361747,
    guid: 6527976336,
    songmid,
    filename: 'C400' + songmid + '.m4a'
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}