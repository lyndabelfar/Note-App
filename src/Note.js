import React from 'react'

function Note({noteText, removeNote, note}) {
  const {id, text, date} = note
    
  return (
    <div className='note'>
        <p className="note-title">{text}</p>
        <div className="bottom-note">
            <div className="note-creation-date">{date}</div>
            <button className='delete-note-btn' onClick={()=>removeNote(id)}>trash</button>
        </div>
    </div>
  )
}

export default Note