import * as React from "react";
import {useEffect, useEffectEvent} from "react";
import {Navbar} from "./components/Navbar.tsx";
import {RoomDeclarator} from "./components/RoomDeclarator.tsx";
import {useRoomStore} from "./stores/RoomStore.ts";
import {Room} from "./components/Room.tsx";
import {Route, Routes} from "react-router-dom";

export const App: React.FC = () => {

    const [darkMode, setDarkMode] = React.useState(false);
    const {rooms} = useRoomStore();

    const handleDarkModeToggle = useEffectEvent(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    })

    useEffect(() => {
        handleDarkModeToggle();
    }, [darkMode]);

    useEffect(() => {
        console.log("Rooms:", rooms);
    }, [rooms]);

    return (
        <div className="min-h-full flex flex-col">
            <Navbar onDarkModeToggle={setDarkMode}/>
            <Routes>
                <Route path="/createRoom" Component={RoomDeclarator}/>
                {
                    rooms.map((room) => (
                        <Route key={room.id} path={`/room/${room.id}`} element={<Room title={room.name}/>}/>
                    ))
                }
            </Routes>
            <div className="grow">

            </div>

            <footer className="py-6 text-center text-xs text-text-secondary/50">
                Dev Web Avancé — UniLaSalle Amiens — 2026
            </footer>
        </div>
    )
}

