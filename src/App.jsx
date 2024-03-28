import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

function App() {
  const [mode , setMode] = useState(true)
  return (
    <div className="App">
     <Main mode={mode} setMode={setMode}/>
    </div>
  );
}

export default App;
