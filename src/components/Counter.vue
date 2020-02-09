<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Clicked {{ count }} times! Count is {{ parity }}.</p>
    <h3>{{  parity   }}</h3>
<div>
  <ul  v-for="(data,id) in product" :key="id+'a'" >
    <li >{{ data }}</li>
  </ul>

  <ul  v-for="(data1,id) in sateproducts2" :key="id" >
    <li >{{ data1.name }}</li>
  </ul>
<button @click="updatecount(5)">submit </button>
</div>
<todo/>
  </div>

  
</template>

<script>

// all map import 
// import { mapState } from 'vuex';
// import { mapActions } from 'vuex';
// import { mapGetters } from 'vuex'
// import { mapMutations } from  'vuex'
import { mapState, mapGetters, mapActions,mapMutations } from 'vuex'
import todo from './todo.vue'



export default {
  components: {
    todo,
  },
  data(){
    return{
      title:"I am Counter vue ",
    };
  },

  created(){
    console.log("counter vue ");
    console.log("get data ",this.product);
    console.log("get data count ",this.count);

  },

  computed:{
      parity() {
      return this.count % 2 === 0 ? 'even' : 'odd';
    },
      // get all state data from store js 
      ...mapState([
      'count',
      'product'
    ]),
    // get all getters data from store js 
    ...mapGetters([
      'sateproducts2'
    ])

  },
  methods:{
    // submit(val){
    //   console.log("submit",val);

    //   //this.$store.state.count++;
    //   //this.$store.commit('updatecount');
    //   //this.$store.dispatch('changecount',val);

    // },
    // call any map action in store js 

    ...mapActions([
      'changecount'
    ]),
        // call any map mutation in store js 

    ...mapMutations([
      'updatecount' // maps to this.increment()
      
    ])
  }
}
</script>>


