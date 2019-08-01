import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    candidates:[
      {
        name: "Дэйнерис Таргариян", 
        image: require('@/assets/daenerys.png'),
        total: 0
      },
      {
        name: "Джон Сноу", 
        image: require('@/assets/john-snow.jpg'),
        total: 0
      }
      ]

  },
  mutations: {

  },
  actions: {

  }
})
