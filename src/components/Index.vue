<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class='test'>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'INDEX'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test{
    width: 40px;
    height: 41px;
    background: #41bc9e url(/static/img/icons.7c95b3a.png) -30px -44px no-repeat;
}
</style>
