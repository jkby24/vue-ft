/**
 * Mocking client-server processing
 */
const _commodities = [
  {"commodity_id": 1, "commodity_name": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"commodity_id": 3, "commodity_name": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"commodity_id": 88, "commodity_name": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

export default {
  getCommodities (cb) {
    setTimeout(() => cb(_commodities), 100)
  },

  buyCommodities (commodities, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
