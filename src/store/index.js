import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalInfo: {
      name: 'Петр',
      age: 99
    },
    childrens: [
      {
        name: 'Петр',
        age: 10,
      }
    ],
    saveInfo: []
  },
  getters: {
    getPersonalInfo: state => state.personalInfo,
    getAllChildrens: state => state.childrens,
    getInfo: state => state.saveInfo,
  },
  mutations: {
    UPDATE_PERSONAL_INFO: (state, payload) => {
      state.personalInfo[payload.field] = payload.value;
    },
    ADD_CHILDREN: (state, payload) => {
      state.childrens.push(payload);
    },
    REMOVE_CHILDREN: (state, index) => {
      state.childrens.splice(index, 1);
    },
    UPDATE_CHILDREN: (state, payload) => {
      state.childrens[payload.index][payload.field] = payload.value
    },
    SAVE_INFO: state => state.saveInfo = JSON.parse(JSON.stringify({personalInfo: state.personalInfo, childrens: state.childrens}))
  },
  actions: {
    updatePersonalInfo({ commit }, payload) {
      commit('UPDATE_PERSONAL_INFO', payload);
    },
    addChildren({ commit }, payload) {
      commit('ADD_CHILDREN', payload);
    },
    removeChildren({ commit }, index) {
      commit('REMOVE_CHILDREN', index);
    },
    updateChildren({ commit }, payload) {
      commit('UPDATE_CHILDREN', payload);
    },
    saveInfo({ commit }) {
      commit('SAVE_INFO');
    },
  },
  modules: {
  }
})
