<template>
  <div>
    <div class="cart-main">
      <ul>
        <li v-for="p in commodities">
          {{ p.commodity_name }} - {{ p.price | currency }} x {{ p.quantity }}
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <p>Total: {{ total | currency }}</p>
      <div class="bottom-submit ui-box">
        <div class="price">
          <span>共2件 金额：</span>
          <br>
          <strong>138.00</strong>
          <span>元</span>
        </div>
        <div class="btn">
          <a class="ui-button ui-button-disable" href="/#/product/category" data-stat-id="97e777a98f9ebbc7" onclick="_msq.push(['trackEvent', '221a86c5a4688b35-97e777a98f9ebbc7', '/#/product/category', 'pcpid', '']);">
            <span>继续购物</span>
          </a>
        </div>
        <div class="btn">
          <a class="ui-button" data-stat-id="9727a6cc23d1b9eb" onclick="_msq.push(['trackEvent', '221a86c5a4688b35-9727a6cc23d1b9eb', '', 'pcpid', '']);">
            <span>去结算</span>
          </a>
        </div>
      </div>
    </div>
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
    total() {
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
