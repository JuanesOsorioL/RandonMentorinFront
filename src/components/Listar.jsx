import React from 'react'
import { useEffect } from "react"
import {  useDispatch ,useSelector  } from "react-redux"
import { axiosGetRandom } from '../app/middleware/payloadAxios'
import { Registro } from './Registro'

const Listar = () => {

  const dispatch = useDispatch();

  const {
    isLoading,
    result,
    error }= useSelector((state) => state.mostrar);

    useEffect(()=>{
      dispatch(axiosGetRandom());
      },[])

  return (
    <div className='contendor'>
      {isLoading && <h3>Cargando...</h3>}
      {error && <h1> Error {error} </h1>}
      {result && result.map(registro=>{
        return(
        <Registro key={registro.id} registro={registro}/>
        )})}
    </div>
  )
}

export default Listar