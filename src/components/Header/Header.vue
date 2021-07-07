<template>
  <header>
    <Topnavbar />
    <MiddleInHeader />
  </header>
</template>

<script>
import Topnavbar from './Topnavbar.vue';
import MiddleInHeader from './MiddleInHeader.vue';

export default {
  name: 'Header',
  components: { MiddleInHeader, Topnavbar },
};
</script>

<style scoped>

</style>
