import { createContext, useContext, useEffect, useState } from "react";

interface IAppContext {
    theme: string;
    setTheme: (v: string) => void;
}

const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = (props: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme") || "dark";
        return initialTheme;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme])

    return (
        <AppContext.Provider value={{
            theme, setTheme
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export const useCurrentApp = () => {
    const currentAppContext = useContext(AppContext);

    if (!currentAppContext) {
        throw new Error(
            "useCurrentApp has to be used within <AppContext.Provider>"
        );
    }

    return currentAppContext;
};
