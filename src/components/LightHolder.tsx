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

    const litCount = lights.filter(l => l.on).length;

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="flex gap-4 items-center justify-center flex-wrap">
                {
                    lights.map(light => (
                            <Light key={light.id} on={light.on} setOn={(state) => setLights(
                                lights.map(l => l.id === light.id ? {...l, on: state} : l)
                            )}/>
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
                    onClick={() => setLights([...lights, {id: lights.length + 1, on: false}])}
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