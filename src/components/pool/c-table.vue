<template>
    <el-table
        :data="tableData"
        style="width: 100%"
        height="100%"
        @mouseout.native="mouseout"
        @mouseover.native="mouseover"
    >
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "c-table",
    data() {
        return {
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
            timer: null
        };
    },
    methods: {
        mouseover() {
            // clearInterval(this.timer);
        },
        mouseout() {
            // this.autoScroll(false);
        },
        autoScroll(init) {
            this.$nextTick(() => {
                const t = 100;
                const box = this.$el.querySelector(".el-table__body-wrapper");
                const content = this.$el.querySelector(".el-table__body");
                if (init) box.scrollTop = 0;
                this.timer = setInterval(() => {
                    this.rollStart(box, content);
                }, t);
            });
        },
        rollStart(box, content) {
            if (box.scrollTop >= content.scrollHeight - box.offsetHeight) {
                box.scrollTop = 0;
            } else {
                box.scrollTop++;
            }
        },
    },
    mounted() {
        // this.autoScroll(true)
    }
};
</script>