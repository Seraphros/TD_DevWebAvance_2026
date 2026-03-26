import type {RoomModel} from "../types/RoomModel.ts";
import {create} from "zustand/react";

type RoomState = {
    rooms: RoomModel[];
    addRoom: (roomName: string) => void;
}

export const useRoomStore = create<RoomState>((
        (set) => ({
            rooms: [],
            addRoom(roomName: string) {
                set((state) => ({rooms: [...state.rooms, {id: crypto.randomUUID(), name: roomName}]}));
            }
        })
    )
)