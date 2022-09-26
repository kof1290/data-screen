const state = {
    widgetList: {}
};

const mutations = {
    SET_WIDGET_LIST(state, list) {
        list.forEach(w => {
            state.widgetList[w.id] = {
                state: {
                    cb: w.cb
                }
            }
        });
    }
};

const actions = {};

const getters = {};

export default {
    state, mutations, actions, getters
}