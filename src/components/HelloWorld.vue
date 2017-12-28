<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input @click="change" :value="ss" /> <br/>
    <input  v-model="ss"/> <br/>
    <input :value="nn" @change="nnn"/>"sync"<br/>
    <input v-model="justdata"/>justdata<br/>
    <button @click="inc">child inc</button>
    <button >{{count}}</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  props:['ss','nn','justdata'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    change() {
      this.ss = "123"
    },
    nnn(e){
      this.$emit('update:nn', e.target)
    },
    inc () {
  this.$store.commit('inc')
  // this.$store.state.count = 9
},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
