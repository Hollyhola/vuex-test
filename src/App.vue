<template>
  <div id="app">
    <!--<h2>{{countAlias}}</h2>-->
    <button @click="add()">+</button>
    <h2>{{count}}</h2>
    <h1>{{totalCount}}</h1>
    <!--<img src="./assets/logo.png">
    <router-view></router-view>-->
  </div>
</template>

<script>
    import Vue from 'vue'
    import store from './store'
    import {
        mapState
    } from 'vuex'
    import * as types from './store/mutation-types'

    export default {
        name: 'app',
        data() {
            return {
                // count: 0,
                // totalCount: 0
            }
        },
        store,
        // computed:mapState({
        //   count: state => state.count,
        //   totalCount: state => state.totalCount,
        //   countAlias: 'count',
        //   todo() {
        //     return this.$store.getters.doneTodos
        //   }
        // }),


        computed: mapState({
          plan() {
            return{
                amount: 20

              }
            },
         
          count: state => state.count,   
          totalCount: state => state.totalCount,
        }),
        // computed: {
        //     plan() {
        //         return {
        //             amount: 20

        //         }
        //     },
        //     totalCount() {
        //         return this.$store.state.totalCount
        //     },
        //     count() {
        //         return this.$store.state.count
        //     }
        // },
        methods: {
            add() {
                // store.commit('increment',{
                //   amount: 10
                // })


                // store.commit({
                //   type: 'increment',
                //   amount: 10
                // })
                this.$store.dispatch('showAsync')
                this.$store.dispatch('addCount', this.plan)

            }
        }
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