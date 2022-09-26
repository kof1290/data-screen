export default {
    props: {
        instance: Object,
        state: Object
    },
    data() {
        return {
            queryResult: null
        }
    },
    watch: {
        state() {
            this.fetchData().then(() => this.reRender())
        }
    },
    methods: {
        /* 各个组件自己实现 start*/
        init() {
            console.log('mixin method: init');
        },
        update() {
            console.log('mixin method: update');
        },
        reRender() {
            console.log('mixin method: reRender');
        },
        /* end */
        fetchData() {
            let {queryData, dataOption} = this.instance;
            if (!dataOption) return Promise.resolve()
            let {dataFormatter} = dataOption;
            return queryData(dataOption).then(res => {
                if (dataFormatter) {
                    console.log('dataformatter');
                    this.queryResult = dataFormatter(res.data);
                } else {
                    this.queryResult = res.data;
                }
            })
        }
    },
    mounted() {
        this.fetchData().then(() =>this.init());
    }
}