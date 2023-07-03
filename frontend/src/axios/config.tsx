import axios from 'axios';
import { Note } from '../types/Note';

const baseURL = 'http://localhost:3001/';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const updateNotes = async (id: number, note: Note) => {
  try {
    await api.put(`/notes/${id}`, note);
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotes = async (id: number) => {
  try {
    await api.delete(`/notes/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export default api;
