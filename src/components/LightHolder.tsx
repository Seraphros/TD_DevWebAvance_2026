import {Light} from "./Light.tsx";
import * as React from "react";
import type {LightModel} from "../types/LightModel.tsx";

export const LightHolder: React.FC = () => {
    const [lights, setLights] = React.useState<LightModel[]>([
        {id: 1, on: false},
        {id: 2, on: false},
        {id: 3, on: false},
        {id: 4, on: false},
        {id: 5, on: false},
    ]);

    return (
        <div className="flex gap-3 items-center justify-center flex-wrap">
            {
                lights.map(light => (
                        <Light key={light.id} on={light.on} setOn={(state) => setLights(
                            lights.map(l => l.id === light.id ? {...l, on: state} : l)
                        )}/>
                    )
                )
            }

            <button className="cursor-pointer border border-gray-400 rounded p-3"
                    onClick={() => setLights([...lights, {id: lights.length + 1, on: false}])}>
                Ajouter une lampe
            </button>
        </div>
    )
}