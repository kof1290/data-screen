<template>
    <container :configs="demoConfigs.widgets"></container>
</template>
<script>
import container from '@/components/container.vue'
import demoConfigs from '@/dashboards/demo'
export default {
  name: "Home",
  components: {
    container
  },
  data: () => ({
    demoConfigs
  })
};
</script>
