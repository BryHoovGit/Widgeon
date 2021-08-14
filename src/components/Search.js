import React, { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="searchBar">Enter search term: </label>
                    <input id="searchBar" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} className="input"></input>
                </div>
            </div>
        </div>
    )
}

export default Search
