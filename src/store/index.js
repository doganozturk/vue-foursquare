import Vue from "vue";
import Vuex from "vuex";
import HTTP from "../services";

Vue.use(Vuex);

const state = {
  venues: [],
  venue: {}
};

const getters = {
  venues(state) {
    return state.venues;
  },
  venue(state) {
    return state.venue;
  }
};

const mutations = {
  setVenues(state, venues) {
    state.venues = venues;
  },
  setVenue(state, venue) {
    state.venue = venue;
  }
};

const actions = {
  fetchVenues(context, body) {
    return HTTP.fetchVenues(body).then(response => {
      context.commit("setVenues", response.response);
    });
  },
  fetchVenueById(context, id) {
    return HTTP.fetchVenueById(id).then(response => {
      context.commit("setVenue", response.response);
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
