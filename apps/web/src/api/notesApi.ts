import { api } from './axios';
import type { Note } from '../types/note';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getNotes = async (): Promise<Note[]> => {
    const response = await api.get(`${API_URL}/notes`);

    return response.data;
};

export const createNote = async (title: string, description: string): Promise<Note> => {
    const response = await api.post(`${API_URL}/notes`, {
        title,
        description,
    });

    return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
    await api.delete(`${API_URL}/notes/${id}`);
};