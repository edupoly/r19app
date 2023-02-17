import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import likedislikeReducer from "./likedislikeReducer";
import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
var reducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  likedislikes: likedislikeReducer,
  countries:countryReducer
});
export default reducer;
