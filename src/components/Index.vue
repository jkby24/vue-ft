<template>
    <div id="index">
        <div class="contaniner">
            <transition enter-active-class="animated fadeIn">
                <router-view></router-view>
            </transition>
        </div>
        <footer-tab></footer-tab>
    </div>
</template>

<script>
import FooterTab from '@/components/FooterTab/FooterTab';
export default {
    name: 'index',
    components: {
        'footer-tab': FooterTab
    },
}
</script>

<style lang="scss" >
@import "../assets/css/common.scss";
body {
    background-color: #F3F3F3;
}

.contaniner {
    min-width: px2em(300px);
    max-width: px2em(640px);
    margin: 0 auto;
    position: relative;
    height: px2em(1000px);
}
</style>
