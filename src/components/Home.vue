<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>商品：
      <router-link to="/commodity/3344234">32434234</router-link>
      <ul>
        <li v-for="p in products">
          {{ p.title }} - {{ p.price | currency }}
          <br>
          <button :disabled="!p.inventory" @click="addToCart(p)">
            Add to cart
          </button>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
const _commodities = [
  { "commodity_id": 1, "commodity_name": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
  { "commodity_id": 2, "commodity_name": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
  { "commodity_id": 3, "commodity_name": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
]
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      msg: 'HOME',
      commodities: _commodities
    }
  },
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created() {
    this.$store.dispatch('getAllProducts')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
