export const state = () => ({
    deliveryTypes: [],
    loading: false,
    error: null
})

export const getters = {
    getDeliveryTypes: state => state.deliveryTypes,
}

export const mutations = {
    setDeliveryTypes: (state, payload) => {
        state.deliveryTypes = [];
        state.deliveryTypes = payload
    },
    setLoading: (state, payload) => {
        state.loading = payload
    },
    setError: (state, payload) => {
        state.error = payload
    }
}

export const actions = {
    async fetchDeliveryTypes({ commit }, searchVal) {
        commit('setLoading', true)
        const url = `https://qvjgl.mocklab.io/delivery/check?search=${searchVal}`;
        try {
            let response = await fetch(url, {
                method: "GET",
            });
            const deliveryTypes = await response.json();
            commit('setLoading', false)
            commit('setDeliveryTypes', deliveryTypes)
            commit('setError', false)
        } catch (error) {
            commit('setError', true)
        }
    },
}