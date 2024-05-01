// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import InscriptionC from './components/inscriptionclient';
import InscriptionV from './components/inscriptionVendeur';
import ContactForm from './components/reclamation';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Login />} />

        <Route path="/inscriptionclient" element={<InscriptionC />} /> 

        <Route path="/inscriptionVendeur" element={<InscriptionV />} />

        <Route
          path="/reclamation"
          element={<ContactForm />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;