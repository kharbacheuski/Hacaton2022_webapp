import React, {useEffect, useState} from 'react';
import SiteHeader from './components/header/Header';
import SiteFooter from './components/footer/Footer';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import Login from './pages/Login';
import Events from './pages/Events';
import Report from './pages/Report'
import { AppContext } from './context/context';
import { GlobalStyles } from './style/Global';
import DogPost from "./pages/blog/posts/DogPost"
import BazaltPost from "./pages/blog/posts/BazaltPost"
import CassettePost from "./pages/blog/posts/CassettePost"
import DuckPost from "./pages/blog/posts/DuckPost"
import LifePost from "./pages/blog/posts/LifePost"
import LoaderComponent from './components/loader/Loader';

const Theme = () => {
    let theme = localStorage.getItem("theme")
    const page = document.getElementById('page')

    const [appStates, setAppStates] = useState({
        themeState: theme ? theme : "sun",
        user: {
            isAuth: sessionStorage.getItem('isAuth') == "true" ? true : false,
            phone: sessionStorage.getItem('phone'),
            telegramID: sessionStorage.getItem('telegramId'),
            roleCode: sessionStorage.getItem('roleCode')
        },
        modalState: false,
        loadingState: false
    })

    useEffect(() => {
        (async () => {
            page?.setAttribute('theme', appStates.themeState)
            document.body.setAttribute('theme', appStates.themeState)
            localStorage.setItem("theme", appStates.themeState)
        })()
    }, [appStates.themeState])

    useEffect(() => {
        appStates.loadingState || appStates.modalState
            ? document.body.style.overflowY = "hidden"
            : document.body.style.overflowY = "auto"
    }, [appStates.loadingState, appStates.modalState])

    return <>
        {appStates.loadingState && <LoaderComponent />}
        <GlobalStyles />
        <HashRouter>
            <AppContext.Provider value={{appStates, setAppStates}}>
                {appStates.user.isAuth 
                    ?   <>
                            <SiteHeader />
                            <Routes >
                                <Route path='/' element={<Home />} />
                                <Route path='/events' element={<Events />} />
                                <Route path='/blog' element={<Blog />} />
                                <Route path='/blog/dog' element={<DogPost />} />
                                <Route path='/blog/bazalt' element={<BazaltPost />} />
                                <Route path='/blog/cassette' element={<CassettePost />} />
                                <Route path='/blog/donald-duck' element={<DuckPost />} />
                                <Route path='/blog/life' element={<LifePost />} />
                                <Route path='/report' element={<Report />} />
                            </Routes>
                            <SiteFooter />
                    </>
                    : <Login />
                }
            </AppContext.Provider>
        </HashRouter>

    </>
}

export default Theme;
