import reducer from "./reducer";
import {createStore} from 'redux';
var store = createStore(reducer);
export default store;