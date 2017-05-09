<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>商品：
      <router-link to="/commodity/3344234">32434234</router-link>
      <ul>
        <li v-for="p in commodities">
          {{ p.commodity_name }} - {{ p.price | currency }}
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      msg: 'HOME'
    }
  },
  computed: mapGetters({
    commodities: 'allCommodities'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created() {
    this.$store.dispatch('getAllCommodities')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
