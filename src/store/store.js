import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        product: ['one', 'two', 'three'],
        count: 5,
        links: [
            'http://google.com',
            'http://coursetro.com',
            'http://youtube.com'
        ]
    },
    getters: {
        //product array manupulate 
        sateproducts2(state) {
            var saleproducts1 = state.product.map(product => {
                return {
                    name: '**' + product + '***',
                }
            });
            return saleproducts1;
        },
        //link count
        countLinks(state) {
            return state.links.length
        }
    },
    mutations: {
        //update counter value
        updatecount(state) {
            console.log("via map mutation")
            state.count++;
        },

        //add new link to array
        ADD_LINK(state, val) {
            console.log("mulation link");
            console.log("mulation state", state);
            console.log("value", val);
            state.links.push(val);
        },

        REMOVE_LINK: (state, link) => { // Add this:
            state.links.splice(link, 1)
        }
    },
    actions: {
        //change counter value
        changecount(context, payload) {
            setTimeout(function () {
                context.commit('updatecount')
                console.log("via map action", payload);
            }, 2000)

        },
        //Remove Links 
        DeleteLink: (context, link) => { // Add this:
            context.commit("REMOVE_LINK", link)

        }

    }

})