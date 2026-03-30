import * as React from "react";
import {LightHolder} from "./LightHolder.tsx";
import {Card} from "./Card.tsx";
import type {RoomModel} from "../types/RoomModel.ts";

type RoomProps = {
    room: RoomModel
}

export const Room: React.FC<RoomProps> = ({room}) => {

    return (
        <div className="flex-1 flex flex-col items-center px-4 py-12 sm:py-20">
            <Card title={room.name} description="Cliquez sur une lampe pour l'allumer">
                <LightHolder room={room}/>
            </Card>
        </div>
    );
}