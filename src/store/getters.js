export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const songUrl = (state) => {
  if (JSON.stringify(state.songUrl) === '{}') return ''
  return `http://dl.stream.qqmusic.qq.com/${state.songUrl.filename}?vkey=${state.songUrl.vkey}&guid=6527976336&uin=0&fromtag=66`
}