import { combineReducers } from "redux";
import crudeRoutrs from "./crudRouter";

const root = combineReducers({
    crude: crudeRoutrs
})

export default root;