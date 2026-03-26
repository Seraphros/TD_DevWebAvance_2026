import * as React from "react";
import {useEffect, useEffectEvent} from "react";

type SliderProps = {
    initialState?: boolean;
    onChange?: (value: boolean) => void;
}

export const Slider: React.FC<SliderProps> = ({initialState, onChange}) => {
    const [state, setState] = React.useState<boolean>(initialState ?? false);

    const handleChange = useEffectEvent(() => {
        if (onChange) {
            onChange(state);
        }
    });

    useEffect(() => {
        handleChange();
    }, [state]);

    return (
        <button className={"w-10 h-5 rounded-full cursor-pointer " +
            (state ? "bg-white/60" : "bg-white/80")}
                onClick={() => setState(s => !s)}>
            <div className={"rounded-full bg-white w-1/2 h-full transition-all " +
                (state ? "translate-x-5" : "translate-x-0")}></div>
        </button>
    )
}