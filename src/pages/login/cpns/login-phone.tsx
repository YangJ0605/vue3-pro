/* eslint-disable */
import { defineComponent, reactive } from 'vue'
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return () => (
      <ElForm label-width='60px'>
        <ElFormItem label='手机号' prop='num'>
          <ElInput v-model={phone.num} onInput={e => console.log(phone.num)} />
        </ElFormItem>
        <ElFormItem label='验证码' prop='code'>
          <div class='get-code'>
            <ElInput />
            <ElButton type='primary' class='get-btn'>
              获取验证码
            </ElButton>
          </div>
        </ElFormItem>
      </ElForm>
    )
  }
})
