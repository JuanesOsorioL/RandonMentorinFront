import actionsTypesRandom from "./actionTypes/actionsTypesRandom";


export const viewLoading = () => {
  return {
    type: actionsTypesRandom.VIEW_LOADING,
    isLoading: true,
  };
};

export const viewLoaded = () => {
  return {
    type: actionsTypesRandom.VIEW_LOADED,
    isLoading: false,
  };
};

export const random_Result = (payload) => {
  return {
    type: actionsTypesRandom.RANDOM_RESULT,
    isLoading: false,
    payload,
  };
};

export const randomError = (error) => {
  return {
    type: actionsTypesRandom.RANDOM_ERROR,
    isLoading: false,
    payload: error,
  };
};
/////////////
export const random_clear = () => {
  return {
    type: actionsTypesRandom.RANDOM_CLEAR,
    isLoading: false,
    payload:null
  };
};
