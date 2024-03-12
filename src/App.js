import { Outlet } from 'react-router-dom';

import './styles/base.css'
import './styles/layout.css'
import './styles/locations.css'
import './styles/buttons.css'

import Header from './layout/Header';
import Toolbar from './layout/toolbar/Toolbar';
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