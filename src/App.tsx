import * as React from "react";
import {LightHolder} from "./components/LightHolder.tsx";

export const App: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <LightHolder/>
        </div>

    )
}

