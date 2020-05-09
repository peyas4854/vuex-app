<template>
  <div class="todo">
    <div class="top">
      <h3 class="flex1">Todo Component</h3>
      <h3 class>Total links {{ countLinks }}</h3>
    </div>

    <form @submit.prevent="addLink">
      <input class="link-input" type="text" placeholder="Add a Link" v-model="newLink" />
    </form>

    <ul>
      <li v-for="(link, index) in links" v-bind:key="index">
        <a :href="link" target="_blank">{{ link }}</a>

        <button @click="removeLinks(index)" class="rm">Delete</button>
      </li>
    </ul>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      newLink: "",
      msg: ""
    };
  },
  computed: {
    ...mapState(["count", "product", "links"]),
    ...mapGetters(["countLinks"])
  },
  methods: {
    ...mapMutations(["ADD_LINK", "updatecount", "REMOVE_ALL"]),
    ...mapActions(["DeleteLink", "removeAll"]),
    addLink() {
      //   this.ADD_LINK(this.newLink)
      //   this.newLink = ''
      console.log("click", this.newLink);
      this.ADD_LINK(this.newLink); //acces by call mutation
      //this.$store.commit('ADD_LINK',this.newLink); //call without mutation call
      this.newLink = "";
    },
    removeLinks(link) {
      // Add this
      this.DeleteLink(link).then(() => {
        console.log("delay");
        // this.msg ='links is Deleted';
      });
      console.log("remove button", link);
    }
  }
};
</script>

<style  scoped>
.todo {
  border: 1px solid black;
  padding: 15px 15px;
  background-color: #f4f4f4;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}
ul li .rm {
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
}
input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
}
.top {
  display: flex;
}
.flex1 {
  flex: 1;
}
</style>