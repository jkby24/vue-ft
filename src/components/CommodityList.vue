<template>
  <div class="star-box">
    <div class="starBanner">
      <img :src="commodityBannerSrc" />
    </div>
    <div v-for="(commodity, index) in commodityList" @click="productEvent" :class="{'item1': index % 2 === 0, 'item2': index % 2 !== 0}">
      <div class="top">
        <img :src="commodity.imgSrc" />
      </div>
      <div class="bottom">
        <span class="title">{{ commodity.title }}</span>
        <span class="desc">{{ commodity.desc }}</span>
        <span class="price">￥{{ commodity.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['body'],
    created () {
      this.commodityList = this.body.commodity.commodityList;
      this.commodityBannerSrc = this.body.commodity.img;
    },
    data () {
      return {
        commodityList: [],
        commodityBannerSrc: ''
      };
    },
    methods: {
      productEvent () {
        this.$router.push({path: '/commodities'});
      }
    }
  };
</script>

<style lang="scss" scoped>
@mixin item-bottom {
  .bottom {
    width: 100%;
    display: block;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 14px;
    .title {
      width: 100%;
      display: block;
      color: #333;
      line-height: 25px;
    }
    .desc {
      width: 100%;
      display: block;
      color: #666;
      font-size: 12px;
    }
    .price {
      width: 100%;
      display: block;
      font-size: 14px;
      color: #ff601e;
      line-height: 20px;
    }
  }
}

@mixin img100 {
  img {
    width: 100%;
  }
}

.star-box {
  margin-top: 10px;
  overflow: hidden;
  width: 100%;
  background: #fff;
  font-family: "Microsoft Yahei";
  .starBanner {
    padding-top: 7px;
    width: 100%;
    font-size: 0;
    @include img100;
    border-bottom: 2px solid #fff;
  }
  .item1 {
    width: 50%;
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #fff;
    font-size: 0;
    .top {
      width: 100%;
      img {
        width: 100%;
      }
    }
    @include item-bottom;
  }
  .item2 {
    width: 50%;
    float: right;
    box-sizing: border-box;
    border-left: 1px solid #fff;
    font-size: 0;
    .top {
      width: 100%;
      img {
        width: 100%;
      }
    }
    @include item-bottom;
  }
}
</style>