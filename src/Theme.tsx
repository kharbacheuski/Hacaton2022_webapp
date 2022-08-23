import React, {useState} from 'react';
import SiteHeader from './components/header/Header';
import SiteFooter from './components/footer/Footer';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import { ThemeContext } from './context';
import { GlobalStyles } from './style/Global';
import DogPost from "./pages/blog/posts/DogPost"
import BazaltPost from "./pages/blog/posts/BazaltPost"
import CassettePost from "./pages/blog/posts/CassettePost"
import DuckPost from "./pages/blog/posts/DuckPost"

const Theme = () => {
    
    let theme = localStorage.getItem("theme")
    const [themeState, setThemeState] = useState(theme?theme:"sun")

    return <>
        <GlobalStyles />
        <HashRouter>
            <ThemeContext.Provider value={{themeState, setThemeState}}>
                <SiteHeader />
                    <Routes >
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/blog' element={<Blog />}></Route>
                        <Route path='/blog/dog' element={<DogPost />}></Route>
                        <Route path='/blog/bazalt' element={<BazaltPost />}></Route>
                        <Route path='/blog/cassette' element={<CassettePost />}></Route>
                        <Route path='/blog/donald-duck' element={<DuckPost />}></Route>
                    </Routes>
                <SiteFooter />
            </ThemeContext.Provider>
        </HashRouter>
    </>
}

export default Theme;
