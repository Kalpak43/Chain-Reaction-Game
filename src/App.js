import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './Components/Board';
import Start from './Components/Start';
import Rules from './Components/Rules';
import Sphere from './Components/Sphere';

function App() {
  return (
    <BrowserRouter>
      <div className="App BG h-screen max-h-screen flex justify-center">
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/Board" element={<Board/>} />
          <Route path="/Sphere" element={<Sphere/>} />
          <Route path="/Rules" element={<Rules/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
