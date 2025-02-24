import Agent from "../agent.api";
import { API_ROUTES } from "app/common/contants/api-routes.constants";
import Audio from "models/media/audio.model";

const AudiosApi = {
    getAll: () =>
        Agent.get<Audio>(`${API_ROUTES.AUDIOS.GET_ALL}`),

    getById: (id: number) =>
        Agent.get<Audio>(`${API_ROUTES.AUDIOS.GET}/${id}`),

    create: (audio: Audio) =>
        Agent.post<Audio>(`${API_ROUTES.AUDIOS.CREATE}`, audio),

    update: (audio: Audio) =>
        Agent.post<Audio>(`${API_ROUTES.AUDIOS.UPDATE}`, audio),

    delete: (id: number) =>
        Agent.delete(`${API_ROUTES.AUDIOS.DELETE}/${id}`),
}

export default AudiosApi;