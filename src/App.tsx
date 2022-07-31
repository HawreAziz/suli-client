import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Search from './pages/Search';
import ReactGA from 'react-ga';


function App() {

  useEffect(() => {
    if (process.env.REACT_APP_GOOGLE_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);
    } else {
      console.log("Google analytics is not working, since the tracking id was not in the environment");
    }

  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
