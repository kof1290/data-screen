<template>
    <div ref="chart"></div>
</template>

<script>
import create from "@/components/pool/create";
export default create({
    name: "echart",
    methods: {
        init() {
            this.instance.init();
            this.update();
        },
        update() {
            this.instance.update(this.queryResult);
        },
        reRender() {
            this.instance.reRender(this.queryResult)
        }
    }
});
</script>

<style>
</style>