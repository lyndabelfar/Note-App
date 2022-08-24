import SearchForm from "./SearchForm";
import CreateNoteForm from "./CreateNoteForm";
import Note from "./Note";
import { useState } from "react";

function App() {

  const [noteText, setNoteText] = useState('');
  const [noteSearch, setNoteSearch] = useState('');
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({text:'', id: '', date:''});

  const [darkMode, setDarkMode] = useState(false)



  const removeNote =(id)=>{
    setNotes(notes.filter((note)=>note.id !== id))
  }

  


  //l'idée pour demain

  // créer un objet pour les données de la note, les mettre dans un autre state qui contient les précedents objets, ...objet, nouveau. apres map a travers l'array 

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <div className="container-header">
          <h1>Notes</h1>
          <button className="toggle-btn" onClick={()=>{setDarkMode(!darkMode)}}>Toggle Mode</button>
        </div>
        <SearchForm  noteSearch={noteSearch} setNoteSearch={setNoteSearch} />
        <div className="notes">
            {notes.map((note)=>{
              return <Note key={note.id} note={note}  removeNote={removeNote}/>
            })}
          <CreateNoteForm notes={notes} setNotes={setNotes} note={note} setNote={setNote} noteText={noteText} setNoteText={setNoteText} />
        </div>
      </div>

      
    </div>
  );
}

export default App;
