import { combineReducers } from "redux";
import randomReducer from "../reducers/randomReducer"
import randomGetReducer from "../reducers/randonGeTReducer";

const rootReducer=()=>{
  return combineReducers({
    view: randomReducer,
    mostrar: randomGetReducer,
  });
}

export default rootReducer;