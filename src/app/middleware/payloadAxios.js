import axios from "axios";
import {
  viewLoading,
  viewLoaded,
  random_Result,
  randomError,
} from "../../actions/randomActions";

import {
  loadinGetRandom,
  loadSuccessGetRandom,
  loadErrorGetRandom,
} from "../../actions/randomGetActions";

//const BASEURL = "https://dry-mountain-93938.herokuapp.com/";
const BASEURL = "https://randomback.herokuapp.com/";


export const axiosPostRandom = (state) => (dispatch) => {

  dispatch(viewLoading());

  const options = {
    method: "POST",
    url: BASEURL+"BackFuncional",
    headers: { "Content-Type": "application/json" },
    data: { list: state },
  };

   axios
    .request(options)
    .then(function (json) {
      dispatch(random_Result(json));
      dispatch(viewLoaded());
    })
    .catch(function (error) {
       dispatch(randomError(error));
    });
};

export const axiosGetRandom = () => (dispatch) => {
dispatch(loadinGetRandom());
  const options = {
    method: "GET",
    url: BASEURL+"BackFuncional",
    headers: { "Content-Type": "application/json" },
  };

  axios.request(options)
    .then(function (response) {
      dispatch(loadSuccessGetRandom(response.data));
    })
    .catch(function (error) {
      dispatch(loadErrorGetRandom(error));
    });

}


