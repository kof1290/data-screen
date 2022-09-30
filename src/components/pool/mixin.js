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
        // console.log(this.pubsub, this);
        // 如果组件被关联，建立监听事件
        if (Reflect.has(this.instance, 'association')) {
            let {from: {id}} = this.instance.association;
            this.pubsub.subscribe(id, (msg, data) => {
                console.log(`I'm ${this.instance.id}, receive ${msg}, data is ${JSON.stringify(data)}`);
                this.reRender();
            })
            this.$once('hook:beforeDestory', () => {
                this.pubsub.unsubscribe();
            })
        }
    }
}