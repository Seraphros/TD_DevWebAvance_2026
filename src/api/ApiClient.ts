import axios, {type AxiosInstance} from 'axios';

let apiClient: AxiosInstance;

export async function initializeApiClient() {
    apiClient = axios.create();
}

export function getApiClient() {
    if (!apiClient) {
        throw new Error("apiClient n'a pas été " +
            "initialisé. Appelez initializeApiClient " +
            "d'abord.");
    }
    return apiClient;
}