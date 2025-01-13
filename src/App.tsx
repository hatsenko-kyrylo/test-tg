import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Bridge from './pages/Bridge';
import './index.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/history' element={<History />} />
                <Route path='/bridge' element={<Bridge />} />
            </Routes>
        </Router>
    );
}

export default App;
