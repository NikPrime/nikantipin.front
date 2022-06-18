
const state = {
    admin : null,
};

const getters = {
    admin: state => state.admin,
    isAuth: state => !!state.admin,
};

const actions = {
     LogIn({ commit }, email) {
        commit('setAdmin', email)
    },
     LogOut({ commit }) {
        let admin = null;
        commit('logOut', admin)
    }
};

const mutations = {
    setAdmin: (state, email) => {
        state.admin = email;
    },
    logOut: (state) => {
        state.admin = null;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};
