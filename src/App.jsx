import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Rankings from './pages/Rankings';
import Marketplace from './pages/Marketplace';
import CreateAccount from './pages/CreateAccount';
import ConnectWallet from './pages/ConnectWallet';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create-account' element={<CreateAccount />}></Route>
          <Route path='/connect-wallet' element={<ConnectWallet />}></Route>
          <Route path='/artist-page' element={<Artist />}></Route>
          <Route path='/rankings' element={<Rankings />}></Route>
          <Route path='/marketplace' element={<Marketplace />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
