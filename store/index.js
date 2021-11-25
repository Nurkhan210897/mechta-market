export const state = () => ({
    deliveries: [],
    loading: false,
    error: false
})

export const getters = {
    getDeliveries: state => state.deliveries,
}

export const mutations = {
    setDeliveries: (state, payload) => {
        state.deliveries = [];
        state.deliveries = payload
    },
    setLoading: (state, payload) => {
        state.loading = payload
    },
    setError: (state, payload) => {
        state.error = payload
    }
}

export const actions = {
    async fetchDeliveries({ commit }, searchVal) {
        commit('setLoading', true)
        const url = `https://qvjgl.mocklab.io/delivery/check?search=${searchVal}`;
        try {
            let response = await fetch(url, {
                method: "GET",
            });
            const deliveryTypes = await response.json();
            commit('setLoading', false)
            commit('setDeliveries', deliveryTypes)
            commit('setError', true)
        } catch (error) {
            commit('setError', error)
        }
    },
}