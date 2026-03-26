import * as React from "react";
import {Slider} from "./Slider.tsx";
import {NavLink} from "react-router-dom";

type NavbarProps = {
    onDarkModeToggle?: (enabled: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({onDarkModeToggle}) => {
    return (
        <nav className="bg-uni-navy">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center
                                    text-white font-bold text-sm select-none">
                        U
                    </div>
                    <span className="text-white font-semibold tracking-tight text-sm sm:text-base">
                        UniLaSalle Amiens
                    </span>
                </div>

                <div className="mx-4 h-full grow text-white/70 text-xs tracking-wide">
                    <NavLink
                        to="/createRoom"
                        className={
                            (props) => {
                                return "h-full transition-all flex items-center justify-center w-fit p-3 hover:bg-uni-navy-dark/30 cursor-pointer " +
                                    (props.isActive ? "bg-uni-navy-dark" : "")
                            }}
                    >
                        Ajouter une salle
                    </NavLink>
                </div>
                <Slider initialState={false} onChange={onDarkModeToggle}/>
            </div>
        </nav>
    );
};
