import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import likedislikeReducer from "./likedislikeReducer";
import {combineReducers} from 'redux'
var reducer = combineReducers({counter:counterReducer,todos:todoReducer,likedislikes:likedislikeReducer})
export default reducer