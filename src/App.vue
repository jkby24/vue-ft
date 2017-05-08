<template>
    <div id="app">
        <transition enter-active-class="animated fadeIn">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
html {
    font-size: 20px
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

a {
    cursor: pointer;
    outline: none;
}

a:hover {
    text-decoration: none !important;
}
</style>
