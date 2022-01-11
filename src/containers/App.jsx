import React from 'react'
import Form from '../components/Form'
import FormNumeros from "../components/FormNumeros"
import Listar from '../components/Listar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from '../components/Principal';
import "../App.css";

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}>
            <Route path="formulario" element={<Form />} />
            <Route path="mostrar" element={<Listar />} />
            <Route path="FormNumeros" element={<FormNumeros />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  }

export default App