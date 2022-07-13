import React, {useContext, useState} from 'react';
import './default.scss';
import SiteHeader from './components/header/Header.tsx';
import SiteFooter from './components/footer/Footer.tsx';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container } from './DefaultStyles.ts';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import Privacy from './pages/Privacy.tsx';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';
import { ThemeContext } from './context.ts';
import { ThemeContextType } from './types';

const Default = () => {
    
    const [themeState, setThemeState] = useState('sun')

    return <>
        <BrowserRouter>
            <ThemeContext.Provider value={{themeState, setThemeState}}>
                <SiteHeader theme={{themeState, setThemeState}}/>
                    <Container className="container">
                        <Routes >
                            <Route path='/' element={<Home theme={themeState} />}></Route>
                            <Route path='/about' element={<About theme={themeState} />}></Route>
                            <Route path='/privacy' element={<Privacy theme={themeState} />}></Route>
                            <Route path='/contact' element={<Contact theme={themeState} />}></Route>
                            <Route path='/blog' element={<Blog theme={themeState} />}></Route>
                        </Routes>
                    </Container>
                <SiteFooter theme={themeState} />
            </ThemeContext.Provider>
        </BrowserRouter>
    </>
}

export default Default;
