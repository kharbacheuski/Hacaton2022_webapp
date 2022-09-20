export type AppContextType = {
    appStates: {
        themeState: string;
        user: {
            isAuth: boolean,
            phone: string,
            telegramID: string
            roleCode: string
        },
        modalState: boolean,
        loadingState: boolean
    },
    setAppStates: (appStates: Object) => Object 
};
type Event = {
    id: string,
    message: string,
    roleCode: string
}
export type EventsList = Event[]