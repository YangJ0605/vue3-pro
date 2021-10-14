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
import storage from '@/utils/storage'
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { rules } from '../validations/accout'

export default defineComponent({
  setup() {
    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: storage.get('name') ?? '',
      password: storage.get('password') ?? ''
    })

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate(valid => {
        if (valid) {
          if (isKeepPassword) {
            storage.set('name', account.name)
            storage.set('password', account.password)
          } else {
            storage.remove('name')
            storage.remove('password')
          }

          store.dispatch('login/accountLoginAction', { ...account })
        }
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
