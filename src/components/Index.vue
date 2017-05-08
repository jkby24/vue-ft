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

<style>

</style>
