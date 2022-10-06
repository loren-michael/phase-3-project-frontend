
import React from 'react'

function Search({ setSearch, onSearchChange }) {

    function handleSearchChange(e) {
        const searchText = (e.target.value)
        // onSearchChange(searchText)
        setSearch(searchText)
    }

    return (
        <div className="search">
            Search for a character: <input type="text" onChange={handleSearchChange} />
        </div>
    )
}

export default Search