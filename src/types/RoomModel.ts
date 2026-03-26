import type {LightModel} from "./LightModel.ts";

export type RoomModel = {
    id: string;
    name: string;
    lights: LightModel[];
}