export type AppContextType = {
    appStates: {
        themeState: string;
        isAuth: boolean,
        phone: string,
        telegramID: string
    },
    setAppStates: (appStates: Object) => Object 
};
export type LoadingContextType = {
    loadingContext: {
        loading: boolean
    } 
    setLoadingContext: (loadingContext: Object) => Object 
};
type Event = {
    id: string,
    message: string,
    roleCode: string
}
export type EventsList = Event[]