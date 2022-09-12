import React, {useEffect, useState} from 'react';
import SiteHeader from './components/header/Header';
import SiteFooter from './components/footer/Footer';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Events from './pages/events/Events';
import { AppContext, LoadingContext } from './context';
import { GlobalStyles } from './style/Global';
import DogPost from "./pages/blog/posts/DogPost"
import BazaltPost from "./pages/blog/posts/BazaltPost"
import CassettePost from "./pages/blog/posts/CassettePost"
import DuckPost from "./pages/blog/posts/DuckPost"
import LifePost from "./pages/blog/posts/LifePost"
import LoaderComponent from './components/loader/Loader';

const Theme = () => {

    let theme = localStorage.getItem("theme")
    const [appStates, setAppStates] = useState({
        themeState: theme ? theme : "sun",
        isAuth: sessionStorage.getItem('isAuth') == "true" ? true : false,
    })
    const [loadingContext, setLoadingContext] = useState({
        loading: false
    })

    const page = document.getElementById('page')
    useEffect(() => {
        (async () => {
            page?.setAttribute('theme', appStates.themeState)
            document.body.setAttribute('theme', appStates.themeState)
            localStorage.setItem("theme", appStates.themeState)
        })()
    }, [appStates.themeState])

    useEffect(() => {
        loadingContext.loading 
            ? document.body.style.overflowY = "hidden"
            : document.body.style.overflowY = "auto"
    }, [loadingContext.loading])

    return <>
        {loadingContext.loading && <LoaderComponent />}
        <GlobalStyles />
        <HashRouter>
            <AppContext.Provider value={{appStates, setAppStates}}>
                <LoadingContext.Provider value={{loadingContext, setLoadingContext}}>
                    {appStates.isAuth
                        ? <>
                            <SiteHeader />
                                <Routes >
                                    <Route path='/' element={<Home />} />
                                    <Route path='/Events' element={<Events />} />
                                    <Route path='/blog' element={<Blog />} />
                                    <Route path='/blog/dog' element={<DogPost />} />
                                    <Route path='/blog/bazalt' element={<BazaltPost />} />
                                    <Route path='/blog/cassette' element={<CassettePost />} />
                                    <Route path='/blog/donald-duck' element={<DuckPost />} />
                                    <Route path='/blog/life' element={<LifePost />} />
                                </Routes>
                            <SiteFooter />
                        </>
                        : <Login />
                    }
                </LoadingContext.Provider>
            </AppContext.Provider>
        </HashRouter>
    </>
}

export default Theme;
