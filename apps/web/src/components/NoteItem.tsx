import type { Note } from '../types/note';

interface Props {
	note: Note;
	onDelete: (id: string) => void;
}

export const NoteItem = ({ note, onDelete }: Props) => {
	return (
		<div className='note-item'>
			<div className='note-item-content'>
				<h3>{note.title}</h3>
				<p className='note-item-description'>{note.description}</p>
				<p className='note-item-date'>{new Date(note.createdAt).toDateString()}</p>
			</div>
			<button onClick={() => onDelete(note.id)}>Delete</button>
		</div>
	);
};