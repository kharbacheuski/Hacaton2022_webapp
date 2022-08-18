import React, {useState} from 'react';
import './default.scss';
import SiteHeader from './components/header/Header';
import SiteFooter from './components/footer/Footer';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import { ThemeContext } from './context';

const Theme = () => {
    
    let theme = localStorage.getItem("theme")
    const [themeState, setThemeState] = useState(theme?theme:"sun")

    return <>
        <HashRouter>
            <ThemeContext.Provider value={{themeState, setThemeState}}>
                <SiteHeader />
                    <Routes >
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/blog' element={<Blog />}></Route>
                    </Routes>
                <SiteFooter />
            </ThemeContext.Provider>
        </HashRouter>
    </>
}

export default Theme;
