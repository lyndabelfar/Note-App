import React from 'react'

function SearchForm({noteSearch, setNoteSearch}) {
    const handleSubmit =(e)=>{
        e.preventDefault()
        
      }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        value={noteSearch} 
        placeholder='type to search...' 
        className='search-input' 
        onChange={(e)=>{setNoteSearch(e.target.value)}}
        />
    </form>
  )
}

export default SearchForm