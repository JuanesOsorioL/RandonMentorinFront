import actionsTypesGetRandom from "./actionTypes/actionsTypesGetRandom";


export const loadinGetRandom = () => {
  return {
    type: actionsTypesGetRandom.LOADING_GET_RANDOM,
    isLoading: true,
  };
};

export const loadSuccessGetRandom = (payload) => {
  return {
    type: actionsTypesGetRandom.LOAD_SUCCESS_GET_RANDOM,
    isLoading: false,
    payload,
  };
};

export const loadErrorGetRandom = (error) => {
  return {
    type: actionsTypesGetRandom.LOAD_ERROR_GET_RANDOM,
    isLoading: false,
    payload: error,
  };
}
