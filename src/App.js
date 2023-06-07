import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './Components/Board';
import Start from './Components/Start';

function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen max-h-screen bg-gray-900 flex justify-center">
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/Board" element={<Board/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
