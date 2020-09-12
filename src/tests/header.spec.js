import Header from '@/components/Header'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { __createMocks as createStoreMocks } from '../store'

jest.mock('@/store')

const localVue = createLocalVue() // added
localVue.use(Vuex)

let storeMocks

const build = ({ computed } = {}) => {
  storeMocks = createStoreMocks()
  const wrapper = shallowMount(Header, {
    localVue,
    store: storeMocks.store,
    computed,
    data: () => ({
      statuses: [
        {
          text: 'All Todos',
          filter: 'ALL',
        },
        {
          text: 'In Progress',
          filter: 'NOT_COMPLETED',
        },
        {
          text: 'Completed',
          filter: 'COMPLETED',
        },
      ],
    }),
  })
  return { wrapper }
}

describe('Header Test', function () {
  it('should list all status button', async () => {
    const { wrapper } = build()
    expect(wrapper.findAll('.nav-item').length).toBe(3)
  })
  it('should highlight current status button', async () => {
    const { wrapper } = build({
      getFilter: () => 'ALL',
    })
    expect(wrapper.findAll('.nav-item--active').length).toBe(1)
  })
  it('should change status by clicking another button', async () => {
    const { wrapper } = build({
      getFilter: () => 'ALL',
    })
    wrapper.find('.active').trigger('click')
    expect(storeMocks.actions.setFilter).toHaveBeenCalled()
  })
})
