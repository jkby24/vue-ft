import * as types from './mutation-types'

export const addToCart = ({ commit }, commodity) => {
  if (commodity.inventory > 0) {
    commit(types.ADD_TO_CART, {
      commodity_id: commodity.commodity_id
    })
  }
}
