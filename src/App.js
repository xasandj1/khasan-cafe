import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Ball from './pages/Ball';
import Home from './pages/Home';
import Discount from './pages/Discount';
import Pie from './pages/Pie';
import Message from './pages/Message';
import Settings from './pages/Settings';
import Logout from './pages/Logout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/discount' element={<Discount />} />
                    <Route path='/pie' element={<Pie />} />
                    <Route path='/message' element={<Message />} />
                    <Route path='/ball' element={<Ball />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/logout' element={<Logout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
