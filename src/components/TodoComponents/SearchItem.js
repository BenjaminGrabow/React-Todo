import React from 'react';

const SearchItem = props => {
        return(
                <div className="search2">
                <input value={props.searchInput} onChange={props.handleSearch}></input>
                <button onClick={props.searchTheElement}>Search</button>
                </div>

        )
}

export default SearchItem;