import {combineReducers} from "redux";
import request from "./request";
import getArray from "./dataArr";

const reducer = combineReducers({
   request,
   getArray
});

export default reducer;