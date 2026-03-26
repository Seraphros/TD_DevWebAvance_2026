import {getApiClient} from "./ApiClient.ts";
import type {RoomModel} from "../types/RoomModel.ts";

const baseUrl = "/api";

export const fetchRooms = async () => {
    const {data} = await getApiClient().get(baseUrl + '/rooms');
    return data;
}

export const postRooms = async (room: RoomModel[]) => {
    const {data} = await getApiClient().post(baseUrl + `/rooms`, room);
    return data;
}