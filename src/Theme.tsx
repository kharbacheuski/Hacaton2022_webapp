import React, {useState} from 'react';
import SiteHeader from './components/header/Header';
import SiteFooter from './components/footer/Footer';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import { AppContext } from './context';
import { GlobalStyles } from './style/Global';
import DogPost from "./pages/blog/posts/DogPost"
import BazaltPost from "./pages/blog/posts/BazaltPost"
import CassettePost from "./pages/blog/posts/CassettePost"
import DuckPost from "./pages/blog/posts/DuckPost"
import LifePost from "./pages/blog/posts/LifePost"
import FactsPost from "./pages/blog/posts/FactsPost"
import Player from './components/player-widget/Player';

const Theme = () => {
    let theme = localStorage.getItem("theme")
    const [appStates, setAppStates] = useState({
        themeState: theme ? theme : "sun",
        musicState: false,
        isAuth: false
    })

    return <>
        <GlobalStyles />
        <HashRouter>
            <AppContext.Provider value={{appStates, setAppStates}}>
                <Player isWidget={true}/>
                <SiteHeader />
                    {appStates.isAuth
                        ? <Home />
                        : <Login />
                    }
                    <Routes >
                        <Route path='/about' element={<About />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/blog/dog' element={<DogPost />} />
                        <Route path='/blog/bazalt' element={<BazaltPost />} />
                        <Route path='/blog/cassette' element={<CassettePost />} />
                        <Route path='/blog/donald-duck' element={<DuckPost />} />
                        <Route path='/blog/life' element={<LifePost />} />
                        <Route path='/blog/facts' element={<FactsPost />} />
                    </Routes>
                <SiteFooter />
            </AppContext.Provider>
        </HashRouter>
    </>
}

export default Theme;
