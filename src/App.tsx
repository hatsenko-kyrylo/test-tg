import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Page from './components/Page';
import './index.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Page pageName='Home' />} />
                <Route path='/about' element={<Page pageName='About' />} />
                <Route path='/history' element={<Page pageName='History' />} />
                <Route path='/bridge' element={<Page pageName='Bridge' />} />
            </Routes>
        </Router>
    );
}

export default App;
