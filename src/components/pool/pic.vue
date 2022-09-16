<template>
    <div>
        <img :src="picSrc" alt=""/>
    </div>
</template>
  
<script>
import create from "./create";
export default create({
    name: "pic",
    computed: {
        picSrc() {
            return this.instance?.option?.picName
        }
    }
})
</script>
  
  <style>
</style>
  