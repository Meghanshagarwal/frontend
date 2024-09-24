import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Sponser from './Sponser';
import Teams from './Teams';
import Home from './Home';


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
