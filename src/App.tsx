import * as React from "react";
import {Navbar} from "./components/Navbar.tsx";
import {RoomDeclarator} from "./components/RoomDeclarator.tsx";
import {useRoomStore} from "./stores/RoomStore.ts";
import {Room} from "./components/Room.tsx";
import {Route, Routes} from "react-router-dom";
import {useDarkMode} from "./hooks/useDarkMode.ts";

export const App: React.FC = () => {

    const {rooms} = useRoomStore();
    const {setDarkMode} = useDarkMode();

    return (
        <div className="min-h-full flex flex-col">
            <Navbar onDarkModeToggle={setDarkMode}/>

            <div className="grow">
                <Routes>
                    <Route path="/createRoom" Component={RoomDeclarator}/>
                    {
                        rooms.map((room) => (
                            <Route key={room.id}
                                   path={`/room/${room.id}`}
                                   element={<Room key={room.id} title={room.name}/>}/>
                        ))
                    }
                </Routes>
            </div>

            <footer className="py-6 text-center text-xs text-text-secondary/50">
                Dev Web Avancé — UniLaSalle Amiens — 2026
            </footer>
        </div>
    )
}

