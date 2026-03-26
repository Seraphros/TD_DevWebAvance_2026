import * as React from "react";

type LightProps = {
    on: boolean,
    setOn: (on: boolean) => void
    onDelete: () => void
}

export const Light: React.FC<LightProps> = ({on, setOn, onDelete}) => {
    return (
        <div className="relative">
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
            <button
                className={"w-5 h-5 rounded-full text-sm bg-red-500 text-white " +
                    "hover:bg-red-600 cursor-pointer transition-all absolute -top-1 left-9 " +
                    "flex items-center justify-center text-center leading-none"}
                onClick={onDelete}>X
            </button>
        </div>

    );
}