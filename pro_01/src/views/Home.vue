<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import index from '../service/index.js'
import common from '../service/common.js'

export default {
  name: 'home',
  
  components: {
    HelloWorld
  },

  created() {
    this.demo();
  },

  methods: {
    demo() {
      index.demo(123).then(res => {
        console.log(res)
        if(res.code == 1){
          console.log('成功的逻辑')
        }else{
          common.status_handle(res.code);
        }
      });
    }
  }
}
</script>
