<template>
  <draggable @start="start" @end="end" class="wrapper" :style="propStyle">
    <slot>
      something should show here
    </slot>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import {withPx} from '@/utils/utils'
export default {
  props: {
    styleOption: Object
  },
  components: {
    draggable
  },
  computed: {
    propStyle() {
      return withPx(this.styleOption);
    }
  },
  methods: {
    start(...arg) {
      console.log('start', arg);
    },
    end(...arg) {
      console.log('end', arg);
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    background: rgb(238, 240, 217);
    overflow: hidden;
}
</style>