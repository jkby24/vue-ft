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
*,
::before,
::after {
    padding: 0;
    margin: 0;
    /*去掉chorm浏览器中默认点击的颜色*/
    -webkit-tap-highlight-color: transparent;
    -webkit-box-sizing: border-box;
}

body {
    font-size: 14px;
    font-family: "Microsoft YaHei" sans-serif;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    
}
    
a {
    text-decoration: none;
    color: #000;
}

ul {
    list-style: none;
}

input,
textarea {
    border: none;
    resize: none;
    outline: none;
    /*清除移动设备中表单的默认样式*/
    -webkit-appearance: none;
}

.clearfix::before,
.clearfix::after {
    content: '.';
    height: 0;
    line-height: 0;
    clear: both;
    display: block;
    visibility: hidden;
}

</style>
