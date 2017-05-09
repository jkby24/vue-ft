<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="p in commodities">
        {{ p.commodity_name }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      msg: 'sc'
    }
  },
  computed: {
    ...mapGetters({
      commodities: 'cartCommodities',
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.commodities.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
