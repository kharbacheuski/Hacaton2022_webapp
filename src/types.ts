export type AppContextType = {
    appStates: {
        themeState: string;
        isAuth: boolean,
    },
    setAppStates: (appStates: Object) => Object 
};
export type LoadingContextType = {
    loadingContext: {
        loading: boolean
    } 
    setLoadingContext: (loadingContext: Object) => Object 
};
  