import React, { useEffect } from 'react'
import { axiosPostRandom } from '../app/middleware/payloadAxios';
import { useDispatch } from "react-redux";
import Result from "./Result";
import { random_clear } from "../actions/randomActions";

const FormNumeros = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(random_clear());
  }, [])


  const onSubmit = (e) => {
    e.preventDefault();
    let inicial = parseInt(e.target.inicial.value);
    let final = parseInt(e.target.final.value);
    let lista=""+inicial+"";
    let num=inicial
    if (inicial<final) {
      while (num < final) {
        num++
        lista=lista+","+num+""
      }
      dispatch(axiosPostRandom(lista));
    }

  };

  return (
    <div>
      <h3>Secuencia</h3>
      <form onSubmit={onSubmit}>
        <label >Numero Inicial</label>
        <br />
        <input type="number" name="inicial" id="" />
        <br />
        <label >Numero Final</label>
        <br />
        <input type="number" name="final" id="" />
        <br />
        <button type="submit" >
          Enviar
        </button>
      </form>
      <Result />
    </div>
  )
}
export default FormNumeros;
