import * as React from "react";

type LightProps = {
    on: boolean,
    setOn: (on: boolean) => void
}

export const Light: React.FC<LightProps> = ({on, setOn}) => {
    return (
        <button
            className={
                "w-14 h-14 rounded-full border-2 cursor-pointer transition-all duration-200 ease-out active:scale-92 " +
                (on
                    ? "shadow-glow bg-amber-glow border-amber-300/70"
                    : "bg-surface-card border-surface-border hover:border-uni-green/40")
            }
            onClick={() => setOn(!on)}
            aria-label={on ? "Éteindre la lampe" : "Allumer la lampe"}
        />
    );
}