export default {
    props: {
        instance: Object
    },
    mounted() {
        let {queryData, dataOption} = this.instance;
        if (dataOption) {
            queryData(dataOption).then(res => {})
        }
    }
}