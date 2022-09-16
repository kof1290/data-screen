<template>
  <div class="wrapper" :style="propStyle">
    <slot>
      something should show here
    </slot>
  </div>
</template>

<script>
import {withPx} from '@/utils/utils'
export default {
  props: {
    styleOption: Object
  },
  computed: {
    propStyle() {
      return withPx(this.styleOption);
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    background: rgb(220, 230, 129);
    overflow: hidden;
}
</style>