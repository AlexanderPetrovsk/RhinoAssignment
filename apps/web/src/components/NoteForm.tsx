import { useState } from 'react';

interface Props {
	onAdd: (title: string, content: string) => void;
}

export const NoteForm = ({ onAdd }: Props) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!title.trim() || !description.trim()) {
			return;
		}

		onAdd(title, description);
		setTitle('');
		setDescription('');
	};

	return (
		<form className='notes-form' onSubmit={handleSubmit}>
			<h2>Add Note</h2>

			<input
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<textarea
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>

			<button type="submit">Add</button>
		</form>
	);
};