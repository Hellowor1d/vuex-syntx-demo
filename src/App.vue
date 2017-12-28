<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
     <p>{{count}}</p>
     <p>{{getterCount}}</p>
  <button @click="inc">+</button>
  <button @click="inc2(2)">+2</button>
  <button @click="dec">-</button>
  <button @click="act1">act1</button>
  <button @click="act2">act2</button>
  <p>{{nostate}}</p>
  <p>{{justdata}}</p>
  <helloworld :ss="count" :nn.sync="nostate" :justdata="justdata"></helloworld>
    </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import Helloworld from '@/components/HelloWorld'
export default {
  name: 'app',
  data(){
    return {
      nostate: 'nostate',
      justdata: 'justdata'
    }
  },
  state:{

  },
  components:{
    Helloworld
  },
  computed: {
    // count () {
    //     return this.$store.state.count
    // },
    // getterCount () {
    //     return this.$store.getters.filterCount
    // }
     ...mapState([
      'count',
      // ...
     ]),
    ...mapGetters({
      getterCount: 'filterCount',
      // ...
    })


  },
  methods: {
    inc () {
      // this.$store.commit('inc')
      this.$store.state.count = 9
    },
     ...mapMutations({
      inc2: 'inc2'
    }),
    dec () {
        this.$store.commit('dec')
    },
    act1 (){
      this.$store.dispatch('act1','inc0')
    },
    act2 (){
      this.$store.dispatch('act2','dec')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
