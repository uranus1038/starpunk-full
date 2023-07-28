import { FC, useState } from 'react';
import { BrowserRouter as  Router, Navigate ,Route, Routes } from "react-router-dom";
//Components
import StratAppEN from './pages/index_eng';
import CreationAppEN from './pages/creation_eng';
//Css
import "./css/body.css" ; 
const App: FC = () => {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/en" element={ <StratAppEN />}/>
          <Route path="/en/creation" element={ <CreationAppEN />}/>
          <Route path="*" element={<Navigate to="/en" />} />
        </Routes>
      </Router>
    </div>
  )
} 

export default App ;