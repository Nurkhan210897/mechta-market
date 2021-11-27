export const state = () => ({
    deliveryTypes: [],
    loading: false,
    error: null,
    isMobile: false,
})

export const getters = {
    getDeliveryTypes: state => state.deliveryTypes,
    getIsMobile: state => state.isMobile,
}

export const mutations = {
    setDeliveryTypes: (state, payload) => {
        console.log(payload);
        state.deliveryTypes = [];
        state.deliveryTypes = payload
    },
    setLoading: (state, payload) => {
        state.loading = payload
    },
    clearDeliveryTypes: (state) => {
        state.loading = false
        state.error = null
        state.deliveryTypes = []
    },
    setError: (state, payload) => {
        state.error = payload
        state.deliveryTypes = []
    },
    setIsMobile: (state, payload) => {
        state.isMobile = payload
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
        } catch (error) {
            commit('setError', true)
        }
    },
}