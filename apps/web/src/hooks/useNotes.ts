import { useEffect, useState } from 'react';
import type { Note } from '../types/note';
import * as notesApi from '../api/notesApi';

export const useNotes = () => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchNotes = async () => {
		setLoading(true);
		setError(null);

		try {
			const data = await notesApi.getNotes();
			setNotes(data);
		} catch (err: any) {
			setError(err.message || 'Failed to fetch notes');
		} finally {
			setLoading(false);
		}
	};

	const addNote = async (title: string, content: string) => {
		try {
			const newNote = await notesApi.createNote(title, content);
			setNotes((prev) => [newNote, ...prev]);
		} catch (err: any) {
			setError(err.message || 'Failed to create note');
		}
	};

	const removeNote = async (id: string) => {
		try {
			await notesApi.deleteNote(id);
			setNotes((prev) => prev.filter((note) => note.id !== id));
		} catch (err: any) {
			setError(err.message || 'Failed to delete note');
		}
	};

	useEffect(() => {
		fetchNotes();
	}, []);

  	return { notes, loading, error, addNote, removeNote };
};