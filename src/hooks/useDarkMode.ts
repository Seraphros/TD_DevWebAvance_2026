import {useEffect, useEffectEvent} from "react";
import * as React from "react";

export function useDarkMode() {
    const [darkMode, setDarkMode] = React.useState(false);

    const handleDarkModeToggle = useEffectEvent(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    })

    useEffect(() => {
        handleDarkModeToggle();
    }, [darkMode]);

    return {setDarkMode};
}