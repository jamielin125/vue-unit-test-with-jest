import Form from '@/components/Form'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import ElementUI from 'element-ui'

const localVue = createLocalVue() // added
localVue.use(ElementUI)

const MOCK_DATA = {
  text: 'aaa',
  date: '2020-09-09',
  time: '12:12',
  comment: 'comment',
}

const build = () => {
  const wrapper = shallowMount(Form, {
    localVue,
  })
  return { wrapper }
}

describe('Form spec', () => {
  it('should emit event with payload when user clicked cancel button', async () => {
    const { wrapper } = build()
    await wrapper.setData({
      form: MOCK_DATA,
    })
    await wrapper.find('[data-jest="form-cancel"]').vm.$emit('click')
    expect(wrapper.emitted().finish).toBeTruthy()
    expect(wrapper.emitted().finish[0]).toEqual([{ status: 'cancel' }])
  })

  it('should emit event with payload when user clicked confirm button', async () => {
    const { wrapper } = build()
    await wrapper.setData({
      form: MOCK_DATA,
    })
    await wrapper.find('[data-jest="form-confirm"]').vm.$emit('click')
    expect(wrapper.emitted().finish).toBeTruthy()
    expect(wrapper.emitted().finish[0]).toEqual([
      {
        status: 'finish',
        payload: MOCK_DATA,
      },
    ])
  })
})
