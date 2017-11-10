import * as types from './mutation-types'

const mutations = {
  // params: state, payload
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default mutations
