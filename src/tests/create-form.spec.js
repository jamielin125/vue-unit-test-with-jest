import ElementUI from 'element-ui'
import CreateForm from '@/components/CreateForm'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Form from '@/components/Form'
import { __createMocks as createStoreMocks } from '../store'
import Vuex from 'vuex'

jest.mock('@/store')

const localVue = createLocalVue() // added
localVue.use(ElementUI)
localVue.use(Vuex)

let storeMocks

const build = () => {
  storeMocks = createStoreMocks()
  const wrapper = shallowMount(CreateForm, {
    localVue,
    store: storeMocks.store,
    stubs: {
      Form: '<div></div>',
    },
  })
  return { wrapper }
}

describe('CreateForm component behavior test', () => {
  it('should initially show create button', async () => {
    const { wrapper } = build()
    expect(wrapper.find('[data-jest="create-btn"]').exists()).toBe(true)
    expect(wrapper.find('[data-jest="create-form"]').exists()).toBe(false)
  })
  it('should show up create form after user clicked create button', async () => {
    const { wrapper } = build()
    await wrapper.find('[data-jest="create-btn"]').vm.$emit('click')
    expect(wrapper.find('[data-jest="create-btn"]').exists()).toBe(false)
    expect(wrapper.find('[data-jest="create-form"]').exists()).toBe(true)
  })
  it('should close form after user clicked cancel button', async () => {
    const { wrapper } = build()
    await wrapper.setData({
      isShowForm: true,
    })

    expect(wrapper.find('[data-jest="create-form"]').exists()).toBe(true)
    await wrapper.findComponent(Form).vm.$emit('finish', { status: 'cancel' })
    expect(wrapper.find('[data-jest="create-form"]').exists()).toBe(false)
  })
  it('should finish an item after user clicked confirm button with payload', async () => {
    const { wrapper } = build()
    await wrapper.setData({
      isShowForm: true,
    })

    await wrapper
      .findComponent(Form)
      .vm.$emit('finish', { status: 'finish', payload: {} })

    expect(storeMocks.actions.addTodo).toHaveBeenCalled()
  })
})
