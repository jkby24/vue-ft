<template>
  <div>
      <mt-header fixed :title="title">
            <router-link :to="backRouter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </router-link>
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
      },
      title:{
        type: String
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
