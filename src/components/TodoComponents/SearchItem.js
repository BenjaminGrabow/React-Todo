import React from 'react';

const SearchItem = props => {
        return(
                <div>
                <input value={props.searchInput} onChange={props.handleSearch}></input>
                </div>

        )
}

export default SearchItem;