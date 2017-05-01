<template>
    <div id="app">
        
        <div class="wrapper">
            <div class="contaniner">
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeIn"
                >
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <footer-tab></footer-tab>
    </div>
</template>

<script>
import FooterTab from '@/components/FooterTab/FooterTab';
export default {
  name: 'app',
  components:{
      'footer-tab': FooterTab
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
