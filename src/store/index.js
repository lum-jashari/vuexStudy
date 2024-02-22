import { createStore } from "vuex";
import * as state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";

const store = createStore({
    state,
    actions,
    mutations,
});

export default store;
