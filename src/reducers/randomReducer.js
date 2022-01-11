import actionsTypesRandom from "../actions/actionTypes/actionsTypesRandom";

const initialState = {
  isLoading: false,
  result: null,
  error: null,
};

const randomReducer = (state = initialState,{type,payload})=>{
     switch (type) {
       case actionsTypesRandom.VIEW_LOADING:
         return {
           ...state,
           isLoading: true,
         };
       case actionsTypesRandom.VIEW_LOADED:
         return {
           ...state,
           isLoading: false,
         };
       case actionsTypesRandom.RANDOM_RESULT:
         return {
           ...state,
           isLoading: false,
           result: payload,
         };
       case actionsTypesRandom.RANDOM_ERROR:
         return {
           ...state,
           isLoading: false,
           error: payload,
         };
       ///
       case actionsTypesRandom.RANDOM_CLEAR:
         return {
           ...state,
           isLoading: false,
           result: payload,
         };
         ///
       default:
         return state;
     }
}
export default randomReducer;