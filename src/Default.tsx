import React, {useState} from 'react';
import './default.scss';
import SiteHeader from './components/header/Header.tsx';
import SiteFooter from './components/footer/Footer.tsx';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container } from './DefaultStyles.ts';
import Home from './pages/home/Home.tsx';
import Contact from './pages/Contact.tsx';
import Privacy from './pages/Privacy.tsx';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';
import { ThemeContext } from './context.ts';

const Default = () => {
    
    const [themeState, setThemeState] = useState('sun')

    return <>
        <BrowserRouter>
            <ThemeContext.Provider value={{themeState, setThemeState}}>
                <SiteHeader />
                    <Container className="container">
                        <Routes >
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/about' element={<About />}></Route>
                            <Route path='/privacy' element={<Privacy />}></Route>
                            <Route path='/contact' element={<Contact />}></Route>
                            <Route path='/blog' element={<Blog />}></Route>
                        </Routes>
                    </Container>
                <SiteFooter />
            </ThemeContext.Provider>
        </BrowserRouter>
    </>
}

export default Default;
