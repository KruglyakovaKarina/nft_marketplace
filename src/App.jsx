import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Artist from './pages/Artist';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/artist-page' element={<Artist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
