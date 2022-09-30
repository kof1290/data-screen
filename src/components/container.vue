<template>
    <div class="yh-screen" :style="screenStyle">
        <div class="yh-wrapper" ref="container" :style="containerStyle">
            <Wrapper v-for="(i, index) in configs" :key="index" :styleOption="{ ...i.style }">
                <component :id="i.id" class="full-wh" :is="i.component" :instance="i" :state="containerState" @stateChange="stateChange"></component>
            </Wrapper>
        </div>
    </div>
</template>

<script>
import Wrapper from "@/components/wrapper.vue";
import { debounce } from "@/utils/utils";
export default {
    props: {
        configs: Array,// 组件配置
        width: {// 看板宽度
            type: [String, Number],
            default: 1920,
        },
        height: {// 看板高度
            type: [String, Number],
            default: 1080,
        },
        fullScreen: {// 是否强制全屏（不等比缩放）
            type: Boolean,
            default: false,
        },
        autoScale: {
            type: [Object, Boolean],
            default: true,
        },
        delay: {
            type: Number,
            default: 500,
        },
        screenStyle: {
            type: Object,
            default: () => ({}),
        },
        containerStyle: {
            type: Object,
            default: () => ({}),
        },
    },
    components: {
        Wrapper
    },
    data() {
        return {
            currentWidth: 0,
            currentHeight: 0,
            originalWidth: 0,
            originalHeight: 0,
            onResize: null,
            observer: null,
            // 整体状态
            containerState: {}
        };
    },
    methods: {
        initSize() {
            return new Promise((resolve) => {
                this.$nextTick(() => {
                    if (this.width && this.height) {
                        this.currentWidth = this.width;
                        this.currentHeight = this.height;
                    } else {
                        const container = this.$refs["container"];
                        this.currentWidth = container?.clientWidth;
                        this.currentHeight = container?.clientHeight;
                    }
                    if (!this.originalHeight || !this.originalWidth) {
                        this.originalWidth = window.screen.width;
                        this.originalHeight = window.screen.height;
                    }
                    resolve();
                });
            });
        },
        updateSize() {
            const container = this.$refs["container"];
            if (this.currentWidth && this.currentHeight) {
                container.style.width = `${this.currentWidth}px`;
                container.style.height = `${this.currentHeight}px`;
            } else {
                container.style.width = `${this.originalWidth}px`;
                container.style.height = `${this.originalHeight}px`;
            }
        },
        autoScaleFn(scale) {
            if (!this.autoScale) return;
            const container = this.$refs["container"];
            const domWidth = container.clientWidth;
            const domHeight = container.clientHeight;
            const currentWidth = document.body.clientWidth;
            const currentHeight = document.body.clientHeight;
            container.style.transform = `scale(${scale},${scale})`;
            let mx = Math.max((currentWidth - domWidth * scale) / 2, 0);
            let my = Math.max((currentHeight - domHeight * scale) / 2, 0);
            if (typeof this.autoScale === "object") {
                !this.autoScale.x && (mx = 0);
                !this.autoScale.y && (my = 0);
            }
            container.style.margin = `${my}px ${mx}px`;
        },
        updateScale() {
            const container = this.$refs["container"];
            const currentWidth = document.body.clientWidth;
            const currentHeight = document.body.clientHeight;
            const realWidth = this.currentWidth || this.originalWidth;
            const realHeight = this.currentHeight || this.originalHeight;
            const widthScale = currentWidth / +realWidth;
            const heightScale = currentHeight / +realHeight;
            if (this.fullScreen) {
                container.style.transform = `scale(${widthScale},${heightScale})`;
                return false;
            }
            const scale = Math.min(widthScale, heightScale);
            this.autoScaleFn(scale);
        },
        initMutationObserver() {
            const container = this.$refs["container"];
            const observer = (this.observer = new MutationObserver(() => {
                this.onResize?.();
            }));

            observer.observe(container, {
                attributes: true,
                attributeFilter: ["style"],
                attributeOldValue: true,
            });
        },
        stateChange(e) {
            // 控件设置状态，更新相关字段
            this.containerState = Object.assign({}, this.containerState, e);
        }
    },
    mounted() {
        this.onResize = debounce(async () => {
            await this.initSize();
            this.updateSize();
            this.updateScale();
        }, this.delay);
        this.$nextTick(async () => {
            await this.initSize();
            this.updateSize();
            this.updateScale();
            window.addEventListener("resize", this.onResize);
            this.initMutationObserver();
            this.$once('hook:beforeDestory', () => {
                window.removeEventListener("resize", this.onResize);
                this.observer?.disconnect();
            })
        });
    }
};
</script>
<style scoped>
.yh-screen {
    overflow: hidden;
    background-size: 100% 100%;
    background: #333;
    width: 100vw;
    height: 100vh;
}

.yh-screen .yh-wrapper {
    background: rgb(236, 243, 255);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    position: relative;
    overflow: hidden;
    z-index: 100;
    transform-origin: left top;
}
</style>