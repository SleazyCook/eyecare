import { Outlet } from 'react-router-dom';

import './styles/style.css'

import Header from './layout/Header';
import Toolbar from './layout/Toolbar';
import Footer from './layout/Footer';

function App() {
    return (
        <div>
            <Header />
            <Toolbar />

            <Outlet context />

            <Footer />
        </div>
    )
}

export default App;