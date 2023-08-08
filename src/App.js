import './App.css';
import {Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"

import Home from './components/Home'

import back from './assets/back.svg';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />

      </Routes>
    </>
  );
  // return (
  //   <>
  //     <back/>
  //   </>
  // )
}

export default App;
