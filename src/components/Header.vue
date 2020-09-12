<template>
  <header>
    <ul class="container nav">
      <li
        v-for="status in statuses"
        :class="[
          'nav-item',
          status.filter === getFilter ? 'nav-item--active' : '',
        ]"
        :key="status.filter"
        @click="setFilter(status.filter)"
      >
        {{ status.text }}
      </li>
    </ul>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
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
    }
  },
  methods: {
    ...mapActions(['setFilter']),
  },
  computed: {
    ...mapGetters(['getFilter']),
  },
}
</script>

<style scoped></style>
