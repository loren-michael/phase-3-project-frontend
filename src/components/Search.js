import React from 'react';

function Search({ setSearch, onSearchChange }) {

    function handleSearchChange(e) {
        const searchInput = e.target.value;
        setSearch(searchInput)
        onSearchChange(searchInput)
    }

    return (
        <div className="search-bar">
            Search for a character: <input type="text" onChange={handleSearchChange} />
        </div>
    )
};

export default Search;