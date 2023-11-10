import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Wallpaper from './pages/Wallpaper';
import NavbarSimple from './layout/navbar';
import FooterWithLogo from './layout/footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='bg-custom2'>
       
          
            <NavbarSimple/>
          
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallpaper" element={<Wallpaper />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      


        <div>
          <FooterWithLogo/>
        </div>
      </div>
    </Router>
  );
}

export default App;
