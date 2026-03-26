import {Light} from "./Light.tsx";
import * as React from "react";
import type {LightModel} from "../types/LightModel.ts";
import {useRoomStore} from "../stores/RoomStore.ts";

type LightHolderProps = {
    roomId: string;
}

export const LightHolder: React.FC<LightHolderProps> = ({roomId}) => {

    const {getLightsOfRoom, setLightsOfRoom} = useRoomStore();

    const lights = getLightsOfRoom(roomId);
    const litCount = lights.filter(l => l.on).length;


    const handleDelete = (id: string) => {
        setLightsOfRoom(roomId, lights.filter(l => l.id !== id));
    }

    const handleLightsChange = (lights: LightModel[]) => {
        setLightsOfRoom(roomId, lights);
    }

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="flex gap-4 items-center justify-center flex-wrap">
                {
                    lights.map(light => (
                            <Light key={light.id}
                                   on={light.on}
                                   setOn={(state) => handleLightsChange(
                                       lights.map(l => l.id === light.id ? {...l, on: state} : l)
                                   )}
                                   onDelete={() => handleDelete(light.id)}/>
                        )
                    )
                }
            </div>

            <div className="flex items-center gap-4">
                <button
                    className="cursor-pointer text-sm rounded-lg
                               px-4 py-2 text-white bg-uni-green
                               hover:bg-uni-green-dark
                               active:scale-97
                               transition-all duration-150"
                    onClick={() => handleLightsChange([...lights, {id: crypto.randomUUID(), on: false}])}
                >
                    + Ajouter une lampe
                </button>
            </div>

            <p className="text-xs text-text-secondary tabular-nums">
                {litCount} / {lights.length} allumée{litCount !== 1 && "s"}
            </p>
        </div>
    )
}