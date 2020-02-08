import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state:{
        product:[ 'one','two','three'],
        count:5,
    },
    getters:{
        //product array manupulate 
        sateproducts2(state){
            var saleproducts1 =  state.product.map(product =>{
              return{
                name : '**'+ product+ '***',
            }
            });
            return saleproducts1;
          }
    },
    mutations:{
        //update counter value
        updatecount(state){
            console.log("via map mutation")
            state.count++;
        }
    },
    actions:{
        //change counter value
        changecount(context,payload){
            setTimeout(function(){
                context.commit('updatecount')
                console.log("via map action",payload);
            },2000)
            
        }

    }

})