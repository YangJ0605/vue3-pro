<template>
  <h2>hello</h2>
  <el-button>{{ name }}</el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const name = ref('hello')
    return {
      name
    }
  }
})
</script>

<style></style>
