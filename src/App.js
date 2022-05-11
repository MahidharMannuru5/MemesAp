import axios from 'axios';
import {UseState,useEffect} from 'react';
import './App.css';
import Fetchnew from './Components/Fetchnew'
import Header from './Header';

function App() {
  
  return (
    <div className="App">
      <Header/>

      <Fetchnew/>
    </div>
  );
}

export default App;
