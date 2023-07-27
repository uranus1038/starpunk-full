import { FC, useState } from 'react';
import { BrowserRouter as  Router, Navigate ,Route, Routes } from "react-router-dom";
//Components
import StratAppEN from './pages/index_eng';
const App: FC = () => {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/en" element={ <StratAppEN />}/>
          <Route path="*" element={<Navigate to="/en" />} />
        </Routes>
      </Router>
    </div>
  )
} 

export default App ;