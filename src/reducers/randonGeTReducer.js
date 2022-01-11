import actionsTypesGetRandom from "../actions/actionTypes/actionsTypesGetRandom"

const initialState = {
  isLoading: false,
  result: null,
  error: null,
};

const randomGetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesGetRandom.LOADING_GET_RANDOM:
      return {
        ...state,
        isLoading: true,
      };
    case actionsTypesGetRandom.LOAD_SUCCESS_GET_RANDOM:
      return {
        ...state,
        isLoading: false,
        result: payload,
      };
    case actionsTypesGetRandom.LOAD_ERROR_GET_RANDOM:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default randomGetReducer;
