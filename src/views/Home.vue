<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" v-on:my-event="evtMethod"/>

    <button @click="setCompData">设置组件属性</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {msg : 'ok'};
  },
  methods:{
    evtMethod(evt){
        console.log(evt);
    },
    setCompData(){
      console.log(new Date().getTime());
        this.msg = new Date().getTime().toString();
    }
  }
}
</script>
