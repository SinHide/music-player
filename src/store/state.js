import { playMode } from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [], // 顺序播放列表
  mode: playMode.sequence, // 默认顺序播放
  currentIndex: -1,
  songUrl: {} // 歌曲路径信息
}

export default state
