import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm
                }
            });
        };

        search();
    }, [searchTerm]);

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