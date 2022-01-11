import React from 'react'

export const Registro = ({registro}) => {

  return (
    <div className='cuadro'>
      <div className='fila'>
        <h4>Fecha de Creacion:</h4>
        <h6>{registro.date}</h6>
      </div>
      <div className='fila'>
        <h4>Lista Original:</h4>
        <h6>{registro.orginalList}</h6>
      </div>
      <div className='fila'>
        <h4>Lista Random:</h4>
        <h6>{registro.randomList}</h6>
      </div>
    </div>
  )
}
   {/*  <button className='btn'>eliminar</button> */}