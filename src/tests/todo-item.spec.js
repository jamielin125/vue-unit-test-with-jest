import ElementUI from 'element-ui'
import TodoItem from '@/components/TodoItem'
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
  const wrapper = shallowMount(TodoItem, {
    propsData: {
      todo: {
        uuid: 'aaa',
        text: '吃中餐',
        date: '2020-09-08T16:00:00.000Z',
        time: '2020-09-09T04:00:00.000Z',
        comment: '吃飯十二鍋',
        isCompleted: true,
        isEdit: false,
      },
    },
    localVue,
    store: storeMocks.store,
    stubs: {
      Form: '<div></div>',
    },
  })
  return { wrapper }
}

describe('todo item behavior test', function () {
  it('should change status after changing checkbox', async () => {
    const { wrapper } = build()

    wrapper.find('.todo-item__checkbox').trigger('change')
    expect(storeMocks.actions.updateTodo).toHaveBeenCalled()
  })
  it('should show editing form after clicking edit button', async () => {
    const { wrapper } = build()

    wrapper.find('[data-jest="todo-edit-button"]').vm.$emit('click')
    expect(storeMocks.actions.updateTodo).toHaveBeenCalled()

    await wrapper.setProps({
      todo: {
        uuid: 'aaa',
        text: '吃中餐',
        date: '2020-09-08T16:00:00.000Z',
        time: '2020-09-09T04:00:00.000Z',
        comment: '吃飯十二鍋',
        isCompleted: true,
        isEdit: true,
      },
    })

    expect(wrapper.findComponent(Form).exists()).toBeTruthy()
  })
  it('should delete current todo item after clicking delete button', async () => {
    const { wrapper } = build()

    wrapper.find('[data-jest="todo-delete-button"]').vm.$emit('click')
    expect(storeMocks.actions.setTodoList).toHaveBeenCalled()
  })
})
