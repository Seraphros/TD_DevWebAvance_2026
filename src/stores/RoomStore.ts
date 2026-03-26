import type {RoomModel} from "../types/RoomModel.ts";
import {create} from "zustand/react";
import type {LightModel} from "../types/LightModel.ts";

type RoomState = {
    rooms: RoomModel[];
    addRoom: (roomName: string) => void;
    setRooms: (rooms: RoomModel[]) => void;
    getLightsOfRoom: (roomId: string) => LightModel[];
    setLightsOfRoom: (roomId: string, lights: LightModel[]) => void;
}

export const useRoomStore = create<RoomState>((
        (set, get) => ({
            rooms: [],
            addRoom(roomName: string) {
                set((state) => (
                    {rooms: [...state.rooms, {id: crypto.randomUUID(), name: roomName, lights: []}]}
                ));
            },
            setRooms(rooms: RoomModel[]) {
                set(() => ({rooms: rooms}));
            },
            getLightsOfRoom(roomId: string) {
                const room = get().rooms.find((room) => room.id === roomId);
                if (!room) return [];
                return room.lights;
            },
            setLightsOfRoom(roomId: string, lights: LightModel[]) {
                set((state) => ({
                        rooms: state.rooms.map((room) => {
                            if (room.id === roomId) {
                                return {...room, lights: lights};
                            } else {
                                return room;
                            }
                        })
                    })
                )
            }
        })
    )
)