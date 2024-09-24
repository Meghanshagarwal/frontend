import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Sponser from './Components/Sponser';
import Teams from './Components/Teams';
import Home from './Components/Home';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Sponser />
      <Footer />
    </Router>
  );
}

export default App;
