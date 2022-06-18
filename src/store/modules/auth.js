
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
    async LogOut({ commit }) {
        let admin = null;
        commit('logout', admin)
    }
};

const mutations = {
    setAdmin: (state, email) => {
        state.admin = email;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};
