import { Outlet } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import './styles/base.css'
import './styles/layout.css'
import './styles/home.css'
import './styles/services.css'
import './styles/locations.css'
import './styles/reviews.css'
import './styles/insurance.css'
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
            <ScrollToTop smooth />
        </div>
    )
}

export default App;