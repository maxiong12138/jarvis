import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity="上海"

defaultCity=localStorage.city

const state = {
  city:defaultCity
}
const mutations = {
  changesCity(state,el){
    state.city=el.innerHTML
    localStorage.city=el.innerHTML
  }
}

export default new Vuex.Store({
  state,
  mutations
})
