import React from 'react'
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"

const Principal = () => {
  return (
    <div className='contenedorPrincipal'>
      <h3>Lista Random</h3>
      <p>Sistema Ramdom - Demo</p>
      <Link to={"/formulario"}>Formulario</Link>
      <Link to={"/mostrar"}>Listar</Link>
      <Link to={"/FormNumeros"}>Formulario Numeros</Link>
      <Outlet />
    </div>
  );
}

export default Principal
