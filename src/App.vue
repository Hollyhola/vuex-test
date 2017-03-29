<template>
  <div id="app">
    <h2>{{countAlias}}</h2>
    <button @click="add()">+</button>
    <!--<img src="./assets/logo.png">
    <router-view></router-view>-->
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment(state) {
      state.count++
    }
  }
})
export default {
  name: 'app',
  store,
  computed:mapState({
    count: state => state.count,
    countAlias: 'count'
  }),
  methods: {
    add() {
      store.commit('increment')
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
