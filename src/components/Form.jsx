import React, { useEffect, useState } from "react";
import {axiosPostRandom} from "../app/middleware/payloadAxios"
import Result from "./Result";
import { useDispatch, useSelector } from "react-redux";

const From = () => {

  const [lista, setLista] = useState("");
  const state = useSelector((state) => state.view);
  const dispatch = useDispatch();

useEffect(() => {
 
}, [])

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(axiosPostRandom(lista));
  };

  return (
    <div>
      <h3>Ingresar Lista</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="list">Ingrese una lista separada por comas:</label>
        <br />
        <textarea
          id="list"
          style={{ width: "300px", height: "120px" }}
          onChange={(e) => setLista(e.target.value)}
        ></textarea>
        <br />
        <button type="submit" disabled={state.isLoading}>
          Enviar
        </button>
      </form>
      <Result />
    </div>
  );
}

export default From;