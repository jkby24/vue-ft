import shop from '@/service/api/shop'
import * as types from '../mutation-types'

// initial state
// shape: [{ commodity_id, quantity }]
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  checkout ({ commit, state }, commodities) {
    const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyCommodities(
      commodities,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, { commodity_id }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.commodity_id === commodity_id)
    if (!record) {
      state.added.push({
        commodity_id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
