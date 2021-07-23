import AuthService from '../services/UserDataService';

const token = JSON.parse(localStorage.getItem('token'));
const initialState = token
  ? { status: { loggedIn: true }, token }
  : { status: { loggedIn: false }, token: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, token) {
      return AuthService.login(token).then(
        token => {
          commit('loginSuccess', token);
          return Promise.resolve(token);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, token) {
      return AuthService.register(token).then(
        token => {
          commit('loginSuccess', token);
          return Promise.resolve(token);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, token) {
      state.status.loggedIn = true;
      state.token = token;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.token = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.token = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};