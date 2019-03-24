<template>
    <div id="itany">
        <h1>welcome to 计科一班</h1>
        <h2 @click="change">{{name}}</h2>

        <!--使用User组件-->
        <User></User>
    </div>
</template>

<script>
    //console.log(111);
    //导入User.vue模块
    import User from './components/User.vue'

    export default {
        data(){
            return {
                name:'tom'
            }
        },
        methods : {
            change(){
                this.name = '汤姆'
            }
        },
        //引入组件
        components : {
            User  //简写，User:User  'User':{template:User}
        }
    }
</script>

<style>
    body{
        background-color:#ccc;
    }
</style>