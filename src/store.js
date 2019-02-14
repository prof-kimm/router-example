import Vue from 'vue'
import Vuex from 'vuex';
import Axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: null
  },
  getters: {
    TODOS: state => {
      return state.todos;
    }
  },
  mutations: {
    SET_TODO: (state, payload) => {
      /* eslint-disable */
      console.log(payload);
      state.todos = payload;
    },
    ADD_TODO: (state, payload) => {
      state.todos.push(payload);
    }
  },
  actions: {
    GET_TODO: async (context, payload) => {
      /* eslint-disable */
      console.log(payload);
      let { data } = await Axios.get('http://www.mocky.io/v2/5c6578943300008a12b99e04');
      context.commit("SET_TODO", data);
    },
    SAVE_TODO: async (context, payload) => {
      /* eslint-disable */
      console.log(payload);
      let { data } = await Axios.post('http://www.mocky.io/v2/5c6578943300008a12b99e04');
      context.commit("ADD_TODO", payload);
    }
  }
});

export default store;
