import axios from 'axios'

export const state = () => ({
    prices: []
})

export const mutations = {
    setPrices(state, prices) {
        state.prices = prices
    }
}

export const actions = {
    async fetch({commit}) {
        try {
			const result = await axios('/data/prices.json', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
			})
            console.log(result.data)
            commit('setPrices', result.data)
		} catch (err) {
			console.log(err.message)
		}
    }
}

export const getters = {
    prices: s => s.prices
}