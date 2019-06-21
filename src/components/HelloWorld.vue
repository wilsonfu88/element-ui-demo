<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="inputVal"/>
    <button @click="emitEvent">向父组件传递数据</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      'inputVal' : 'ok'
    }
  },
  methods:{
    emitEvent(evt){
        this.$emit("my-event",{evt:evt,data:{id:1,name:'wilson.fu'}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
.hello{
  border:solid 1px red;
}
</style>
