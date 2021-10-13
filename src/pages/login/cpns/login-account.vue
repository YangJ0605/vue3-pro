<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'

import { rules } from '../validations/accout'

export default defineComponent({
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: '',
      password: ''
    })

    const loginAction = () => {
      formRef.value?.validate(valid => {
        console.log(valid)
      })
    }

    return {
      rules,
      account,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped></style>
