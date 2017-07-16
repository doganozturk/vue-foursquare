import Vue from "vue";
import Vuex from "vuex";
import HTTP from "../services";

Vue.use(Vuex);

const state = {
  venues: []
};

const getters = {
  venues(state) {
    return state.venues;
  }
};

const mutations = {
  setVenues(state, venues) {
    state.venues = venues;
  }
};

const actions = {
  fetchVenues(context, body) {
    return HTTP.fetchVenues(body).then(response => {
      context.commit("setVenues", response);
    });
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
