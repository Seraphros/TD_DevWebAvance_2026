import * as React from "react";

type LightProps = {
    on: boolean,
    setOn: (on: boolean) => void
}

export const Light: React.FC<LightProps> = ({on, setOn}) => {
    return (
        <button className={"w-10 h-10 rounded border cursor-pointer " +
            (on ? "bg-orange-400" : "bg-white")}
             onClick={() => setOn(!on)}>
        </button>
    );
}