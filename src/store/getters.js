export const cartCommodities = state => {
  return state.cart.added.map(({ commodity_id, quantity }) => {
    const commodity = state.commodities.all.find(p => p.commodity_id === commodity_id)
    return {
      commodity_name: commodity.commodity_name,
      price: commodity.price,
      quantity
    }
  })
}
