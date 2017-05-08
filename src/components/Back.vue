<template>
  <div>
    {{backRouter}}
    <h1 @click="$router.push(backRouter)">返回</h1>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:{
      backRouter: {
          type: String
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
