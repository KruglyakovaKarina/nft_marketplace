import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Rankings from './pages/Rankings';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/artist-page' element={<Artist />}></Route>
          <Route path='/rankings' element={<Rankings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
