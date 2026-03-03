import { NoteForm } from './components/NoteForm';
import { NotesList } from './components/NotesList';
import { useNotes } from './hooks/useNotes';

function App() {
	const { notes, loading, error, addNote, removeNote } = useNotes();

	return (
		<div className='notes-container'>
			<h1 className='title-card'>Notes App</h1>

			<NoteForm onAdd={addNote} />

			{loading && <p className='loader'>Loading...</p>}
			{error && <p className='error-message'>{error}</p>}

			<NotesList notes={notes} onDelete={removeNote} />
		</div>
	);
}

export default App;