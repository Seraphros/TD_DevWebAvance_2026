import * as React from "react";
import {postRooms} from "../api/RoomApi.ts";
import {useQueryClient} from "@tanstack/react-query";

export function useRoomDeclarator() {
    const [name, setName] = React.useState("");
    const queryClient = useQueryClient();

    const triggerCreation = () => {
        if (name.trim() === "") {
            alert("Le nom de la pièce ne peut pas être vide.");
            return;
        }
        postRooms([{name: name, lights: []}]).then(() => {
            queryClient.invalidateQueries({queryKey: ['rooms']}).then(() => {
                console.log("Query rooms invalidated");
            });
        });
    }

    return {name, setName, triggerCreation};
}