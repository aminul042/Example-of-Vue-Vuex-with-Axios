// State object
const state = {
    profile: {
        name: 'Default name',
        id: '0',
        email: 'abc@xyz.com,
        address: 'town-city-country',
    },
}

// Getter functions
const getters = {
    profile: (state) => { return state.profile; },
}

// Actions
const actions = {   
    fetchProfile: context => {
        return axios.get('/user/profile').then((response) => {
        
            context.commit('SET_USER_PROFILE', response.data);
            
            return response;        // returning response to the original caller component.
            
        }).catch((error) => {
        
            // This catch block can be removed as this will never be called as error will be handled by axios interceptor
          
        })
        .finally(function (finaldata) {
            // This finally will be called and can be used to update something in this store regardless of the outcome of the response.
            
            console.log('Finally block from store module logging...');

        });
    },
}

// Mutations
const mutations = {
    SET_USER_PROFILE: (state, payload) => {
        state.profile = payload;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
