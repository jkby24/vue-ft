<template>
  <div>
    <div class="slider">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../assets/images/banner_1.png"/></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/banner_1.jpg"/></mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
    <commodity-list :body="body"></commodity-list>
    <h1>{{ msg }}</h1>
    <div class="border-test">商品：
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import data from '../../libs/data';
import commodityList from './commodityList';
export default {
  data() {
    return {
      msg: 'HOME',
      body:data
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
  },
  components: {
    'commodity-list': commodityList
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/common.scss";
.slider{
  height: px2em(300px);
  img{
    width: 100%;
    height:100%;
  }
}
.border-test{
  border: 1px solid #000000
}
</style>
