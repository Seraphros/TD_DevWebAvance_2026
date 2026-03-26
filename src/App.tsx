import * as React from "react";
import {Navbar} from "./components/Navbar.tsx";
import {RoomDeclarator} from "./components/RoomDeclarator.tsx";
import {useRoomStore} from "./stores/RoomStore.ts";
import {Room} from "./components/Room.tsx";
import {Route, Routes, Navigate} from "react-router-dom";
import {useDarkMode} from "./hooks/useDarkMode.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchRooms} from "./api/RoomApi.ts";
import {useEffect, useEffectEvent} from "react";

export const App: React.FC = () => {

    const {rooms, setRooms} = useRoomStore();
    const {setDarkMode} = useDarkMode();


    const {data: roomsFetched} = useQuery({
        queryKey: ["rooms"],
        queryFn: fetchRooms,
    });

    const handleRoomsFetched = useEffectEvent(() => {
        if (roomsFetched) setRooms(roomsFetched);
    })

    useEffect(() => {
        handleRoomsFetched();
    }, [roomsFetched]);


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
                                   element={<Room key={room.id} room={room}/>}/>
                        ))
                    }
                    <Route path="*" element={<Navigate to="/createRoom" replace/>}/>
                </Routes>
            </div>

            <footer className="py-6 text-center text-xs text-text-secondary/50">
                Dev Web Avancé — UniLaSalle Amiens — 2026
            </footer>
        </div>
    )
}

