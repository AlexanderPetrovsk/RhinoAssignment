import type { Note } from '../types/note';
import { NoteItem } from './NoteItem';

interface Props {
	notes: Note[];
	onDelete: (id: string) => void;
}

export const NotesList = ({ notes, onDelete }: Props) => {
	if (!notes.length) {
		return <p className='empty-state'>No notes yet.</p>;
	}

	return (
		<div className='notes-list'>
			{notes.map((note) => (
			<NoteItem
				key={note.id}
				note={note}
				onDelete={onDelete}
				/>
			))}
		</div>
	);
};