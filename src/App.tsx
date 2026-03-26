import * as React from "react";
import {useEffect, useEffectEvent} from "react";
import {Navbar} from "./components/Navbar.tsx";
import {RoomDeclarator} from "./components/RoomDeclarator.tsx";

export const App: React.FC = () => {

    const [darkMode, setDarkMode] = React.useState(false);

    const handleDarkModeToggle = useEffectEvent(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    })

    useEffect(() => {
        handleDarkModeToggle();
    }, [darkMode]);

    return (
        <div className="min-h-full flex flex-col">
            <Navbar onDarkModeToggle={setDarkMode}/>
            <div className="grow">
                <RoomDeclarator/>
            </div>

            <footer className="py-6 text-center text-xs text-text-secondary/50">
                Dev Web Avancé — UniLaSalle Amiens — 2026
            </footer>
        </div>
    )
}

