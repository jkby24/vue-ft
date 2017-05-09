import shop from '@/service/api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allCommodities: state => state.all
}

// actions
const actions = {
  getAllCommodities ({ commit }) {
    shop.getCommodities(commodities => {
      commit(types.RECEIVE_COMMODITIES, { commodities })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_COMMODITIES] (state, { commodities }) {
    state.all = commodities
  },

  [types.ADD_TO_CART] (state, { commodity_id }) {
    state.all.find(p => p.commodity_id === commodity_id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
