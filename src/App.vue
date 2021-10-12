<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/login">login</router-link>
  <router-link to="/home">home</router-link>
  <div>{{ $store.state.count }}</div>
  <div>{{ name }}</div>
  <el-button type="primary" @click="changeName">changeName</el-button>
  <hello-vue></hello-vue>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import helloVue from './components/hello.vue'
import service from '@/service'

export default defineComponent({
  name: 'App',
  components: { helloVue },
  setup() {
    const name = ref('da')

    onMounted(() => {
      service.get<{ name: string }>({ url: '/user', showLoading: false }).then(res => console.log(res))
    })

    const changeName = () => {
      if (name.value === 'cc') {
        name.value = 'dd'
      } else {
        name.value = 'cc'
      }
    }
    return {
      name,
      changeName
    }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
