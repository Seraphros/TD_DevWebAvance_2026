import * as React from "react";
import {LightHolder} from "./components/LightHolder.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {Card} from "./components/Card.tsx";

export const App: React.FC = () => {
    return (
        <div className="min-h-full flex flex-col">
            <Navbar/>

            <div className="flex-1 flex flex-col items-center px-4 py-12 sm:py-20">
                <Card title="Lights" description="Cliquez sur une lampe pour l'allumer">
                    <LightHolder/>
                </Card>
            </div>

            <footer className="py-6 text-center text-xs text-text-secondary/50">
                Dev Web Avancé — UniLaSalle Amiens — 2026
            </footer>
        </div>
    )
}

