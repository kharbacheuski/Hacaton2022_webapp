import React, {useState} from 'react';
import './default.scss';
import SiteHeader from './components/header/Header.tsx';
import SiteFooter from './components/footer/Footer.tsx';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';
import { ThemeContext } from './context.ts';

const Default = () => {
    
    let theme = localStorage.getItem("theme")
    const [themeState, setThemeState] = useState(theme?theme:"sun")

    return <>
        <BrowserRouter>
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
        </BrowserRouter>
    </>
}

export default Default;
