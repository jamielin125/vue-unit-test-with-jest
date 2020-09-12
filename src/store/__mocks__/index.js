// src/store/__mocks__/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const getters = {
  getTodos: jest.fn().mockReturnValue([
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
  ]),
  getAllCount: jest.fn().mockReturnValue(3),
  getCompletedCount: jest.fn().mockReturnValue(1),
  getIncompleteCount: jest.fn().mockReturnValue(2),
  getFilter: jest.fn().mockReturnValue('ALL'),
}

export const mutations = {
  SET_TODO_LIST: jest.fn(),
  ADD_A_TODO: jest.fn(),
  UPDATE_A_TODO: jest.fn(),
  SET_FILTER: jest.fn(),
}

export const actions = {
  setTodoList: jest.fn(),
  addTodo: jest.fn(),
  updateTodo: jest.fn(),
  setFilter: jest.fn(),
}

export const state = {
  todos: [
    {
      uuid: 'abc',
      text: '吃中餐',
      date: '2020-09-08T16:00:00.000Z',
      time: '2020-09-09T04:00:00.000Z',
      comment: '吃飯十二鍋',
      isCompleted: true,
      isEdit: false,
    },
    {
      uuid: 'abc',
      text: '吃晚餐',
      date: '2020-09-08T16:00:00.000Z',
      time: '2020-09-09T04:00:00.000Z',
      comment: '吃飯十二鍋',
      isCompleted: false,
      isEdit: false,
    },
    {
      uuid: 'cde',
      text: '睡覺',
      date: '2020-09-08T16:00:00.000Z',
      time: '2020-09-09T04:00:00.000Z',
      comment: '睡爽爽',
      isCompleted: false,
      isEdit: false,
    },
  ],
  filter: 'ALL',
}

// eslint-disable-next-line no-underscore-dangle
export function __createMocks(
  custom = { getters: {}, mutations: {}, actions: {}, state: {} }
) {
  const mockGetters = Object.assign({}, getters, custom.getters)
  const mockMutations = Object.assign({}, mutations, custom.mutations)
  const mockActions = Object.assign({}, actions, custom.actions)
  const mockState = Object.assign({}, state, custom.state)

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
    }),
  }
}

export const store = __createMocks().store
