import * as React from "react";
import {useRoomStore} from "../stores/RoomStore.ts";

export function useRoomDeclarator() {
    const [name, setName] = React.useState("");
    const {addRoom} = useRoomStore();

    const triggerCreation = () => {
        if (name.trim() === "") {
            alert("Le nom de la pièce ne peut pas être vide.");
            return;
        }
        addRoom(name);
    }

    return {name, setName, triggerCreation};
}