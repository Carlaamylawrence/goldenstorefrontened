<template>
  <div class="home">
    <DashboardLayout />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardLayout from '../components/DashboardLayout.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardLayout,
  }
}
</script>
