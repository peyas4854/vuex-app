import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({

    state:{
        product:[ 'one','two','three'],
        count:5,
    },
    getters:{
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
        updatecount(state){
            state.count++;
        }
    },
    actions:{
        changecount(context,payload){
            console.log("action",context);
            console.log("payload",payload);

            setTimeout(function(){
                context.commit('updatecount')
            },2000)
            
        }

    }

})