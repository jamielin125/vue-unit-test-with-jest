import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'
import store from '@/store'

const MOCK_LIST = [
  {
    uuid: 'aaa',
    text: '吃中餐',
    date: '2020-09-08T16:00:00.000Z',
    time: '2020-09-09T04:00:00.000Z',
    comment: '吃飯十二鍋',
    isCompleted: true,
    isEdit: false,
  },
  {
    uuid: 'bbb',
    text: '吃晚餐',
    date: '2020-09-08T16:00:00.000Z',
    time: '2020-09-09T04:00:00.000Z',
    comment: '吃飯十二鍋',
    isCompleted: false,
    isEdit: false,
  },
  {
    uuid: 'ccc',
    text: '睡覺',
    date: '2020-09-08T16:00:00.000Z',
    time: '2020-09-09T04:00:00.000Z',
    comment: '睡爽爽',
    isCompleted: false,
    isEdit: false,
  },
]

const localVue = createLocalVue()
localVue.use(Vuex)

const build = ({ computed } = {}) => {
  const wrapper = shallowMount(TodoList, {
    localVue,
    store,
    computed,
    stubs: {
      TodoItem: '<div></div>',
    },
  })

  return { wrapper }
}

describe('todo list test', function () {
  it('should list all todo items', function () {
    const { wrapper } = build({
      computed: {
        getTodos: () => MOCK_LIST,
      },
    })
    expect(wrapper.findAllComponents(TodoItem).length).toBe(3)
  })
})
