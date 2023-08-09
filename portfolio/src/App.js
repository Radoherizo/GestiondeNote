import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Homes from './components/Homes';
import Homess from './components/Homess';
import Professeurpage from './components/Professeurpage';
import Seconde from './components/Seconde';
import Premiere from './components/Premiere';
import Terminale from './components/Terminale';





      
function App() {
  return (
    <>


    <div>
      <Routes>
       
        <Route path='/' element={<Homess />}></Route>
        <Route path='/eleve' element={<Home />}></Route>
        <Route path='/Professeur' element={<Homes/>}></Route>
        <Route path='/Pageprof' element={<Professeurpage/>}></Route>
        <Route path='/2nde' element={<Seconde/>}></Route>
        <Route path='/1ere' element={<Premiere/>}></Route>
        <Route path='/Term' element={<Terminale/>}></Route>
      </Routes>
    </div>
   
   </>

    );
}

export default App;




