import React, { useState } from 'react'

function CreateNoteForm({noteText, setNoteText,note, setNote, setNotes, notes}) {
    let today = new Date();

    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

    let maxCharacters = 200
    const [currentCharacter, setCurrenctCharacter] = useState(0)

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    
    const handleButtonSave=()=>{
        let newNote = {text: noteText , id: new Date().getMilliseconds().toString(), date}
        setNote(newNote)
        setNotes([...notes, newNote])
        setNoteText('')
        setCurrenctCharacter(0)
    }
    const handleInputChange=(e)=>{
        setNoteText(e.target.value)
        let newChar = currentCharacter +1;
        setCurrenctCharacter(newChar)
    }

    const handleFormRefresh =()=>{
        setNoteText('')
        setCurrenctCharacter(0)
    }
    return (
    <form className='create-note-form' onSubmit={handleSubmit}>

        <input 
        type="text" 
        placeholder='Type to add a note...'  
        value={noteText} 
        className='create-note-input'
        onChange={handleInputChange}
        maxLength={maxCharacters}
        />

        <div className="bottom-form">
            <div className="remaining-letters">{maxCharacters-currentCharacter} remaining</div>
            <div className="form-buttons">
                <button className='refresh-btn' onClick={handleFormRefresh}>&#9851;</button>
                <button type='submit' className='add-note-btn' onClick={handleButtonSave}>Save</button>
            </div>
        </div>
    </form>
  )
}

export default CreateNoteForm