import React from 'react'
import {userContext} from "./context"

const Search = () => {
    const {searchTerm, setSearchTerm} = React.useContext(userContext);
    

    let handleInput = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="search">
            <h2 className="search__title">Search for a cocktail</h2>
            <input className="search-input" value={searchTerm} onChange={handleInput} autoFocus placeholder="E.g: Mai Tai"/>
        </div>
    )
}

export default Search
