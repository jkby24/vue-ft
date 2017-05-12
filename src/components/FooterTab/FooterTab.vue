<template>
    <div class="footer">
        <div class="footer">
            <router-link :active-class="menu.code+'-active'" tag="div" :to="menu.path" class="item" :class="menu.code" v-for="menu in menuData">
               {{menu.text}}
            </router-link>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
const menuData = [{
    text: '首页',
    path: '/home',
    code: 'home'
}, {
    text: '分类',
    path: '/classification',
    code: 'classification'
}, {
    text: '车',
    path: '/shoppingcart',
    code: 'shoppingcart'
}];

export default {
    data() {
        return {
            menuData
        };
    },
    methods: {
    },

    watch: {
    },
    mounted() {
    }
};
</script>

<style lang="scss" socped>
.footer {
    display: flex;
    height: 50px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
    background: #fff;
    .item {
      width: 100%;
      height: 100%;
      line-height: 75px;
      color: #888;
      font-size: 12px;
      text-align: center;
      &.home {
        background: url("../../assets/images/svg/footer_home1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.home-active {
        color: #ff6700;
        background: url("../../assets/images/svg/footer_home.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.classification {
        background: url("../../assets/images/svg/footer_lei1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.classification-active {
        color: #ff6700;
        background: url("../../assets/images/svg/footer_lei.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.shoppingcart {
        background: url("../../assets/images/svg/footer_cart1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.shoppingcart-active {
        color: #ff6700;
        background: url("../../assets/images/svg/footer_cart.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.me {
        background: url("../../assets/images/svg/footer_me1.svg") no-repeat center 25%;
        background-size: 20px;
      }
      &.me-active {
        color: #ff6700;
        background: url("../../assets/images/svg/footer_me.svg") no-repeat center 25%;
        background-size: 20px;
      }
    }
  }
</style>