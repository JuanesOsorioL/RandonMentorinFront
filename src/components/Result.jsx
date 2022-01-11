import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import { random_clear } from "../actions/randomActions";
import { useDispatch } from "react-redux";

const Result = () => {
const dispatch = useDispatch();
  const {
  isLoading,
  result,
  error} = useSelector((state) => state.view);

  useEffect(() => {
    dispatch(random_clear());
  }, [])



  return (
    <div>
      {result && "Resultado: " + result.data.randomList}
    </div>
  );
}

export default Result;