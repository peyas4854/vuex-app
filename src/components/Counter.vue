<template>
  <div>
    <h2>{{ title }}</h2>

    <p>Clicked {{ count }} times! Count is {{ parity }}.</p>

    <h3>{{  parity   }}</h3>

<div>
  <ul  v-for="(data,id) in gettdata" :key="id+'a'" >
    <li >{{ data }}</li>
  </ul>




  <ul  v-for="(data1,id) in sateproducts" :key="id" >
    <li >{{ data1.name }}</li>
  </ul>
<button @click="submit(5)">submit </button>
</div>
  </div>

  
</template>

<script>
// import { mapState } from 'vuex';

//import { mapActions } from 'vuex';
//import { mapGetters } from 'vuex'


export default {
  data(){
    return{
      title:"I am Counter vue ",
      //count:0,
      //product:[ 'one','two','three'],
    };
  },

  created(){
    console.log("counter vue ");
    console.log("get data ",this.gettdata);
    console.log("get data count ",this.count);

  },
 
  computed: {
    parity() {
      return this.count % 2 === 0 ? 'even' : 'odd';
    },
    gettdata(){
      return this.$store.state.product
    },
    count(){
      return this.$store.state.count
    },
    sateproducts(){
      return this.$store.getters.sateproducts2;
    }

    // ...mapGetters([
    //   'sateproducts2'
    // ])


    
  },

  // computed:mapState({
  //     parity() {
  //     return this.count % 2 === 0 ? 'even' : 'odd';
  //   },
  //     gettdata(){
  //           return this.$store.state.product
  //         },
  //         count(){
  //           return this.$store.state.count
  //          },
  //          sateproducts(){
  //            return this.$store.getters.sateproducts2;

        


  //          }


  // }),
  methods:{
    submit(val){
      console.log("submit");

      // this.$store.state.count++;
      //this.$store.commit('updatecount');
      this.$store.dispatch('changecount',val);

    }

    // ...mapActions([
    //   'submit'
    // ])
  }
 
}
</script>>


