<template>
  <el-date-picker
    ref="datePicker"
      v-model="value1"
      popper-class="yh-datePicker"
      :popper-options="{ boundariesElement: 'viewport', removeOnDestroy: true }"
      type="date"
      @blur="dorender"
      placeholder="选择日期">
    </el-date-picker>
</template>

<script>
export default {
name: 'datePicker',
    data() {
        return {
            value1: ''
        }
    },
    methods: {
        dorender() {
            this.$nextTick(() => {
                this.$refs.datePicker.updatePopper()
            })
        }
    }
}
</script>

<style>
.yh-datePicker {
    transform: scale(var(--scale), var(--scale));
}
</style>