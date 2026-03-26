import * as React from "react";
import {LightHolder} from "./LightHolder.tsx";
import {Card} from "./Card.tsx";

type RoomProps = {
    title: string;
}

export const Room: React.FC<RoomProps> = ({title}) => {
    return (
        <div className="flex-1 flex flex-col items-center px-4 py-12 sm:py-20">
            <Card title={title} description="Cliquez sur une lampe pour l'allumer">
                <LightHolder/>
            </Card>
        </div>
    );
}