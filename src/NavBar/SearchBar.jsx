import React from 'react'

function SearchBar() {
  return (
    <div className="search-bar">
        <input type="text" className='repo-search' placeholder='Find a Repository....'/>
        <span className="dropdown">
        <input type="text" className="type-drop" list="repotype" placeholder='Type'/>
        <datalist id='repotype'>
            <option value='All' />
            <option value='Public' />
            <option value='Private' />
            <option value='Forks' />
            <option value='Sources' />
            <option value='All' />
        </datalist>
        <input type="text" className="lang-drop" list="langtype" placeholder='Language' />
        <datalist id='langtype'>
            <option value='HTML' />
            <option value='React' />
            <option value='Private' />
            <option value='Forks' />
        </datalist>
        <input type="text" className="sort-drop" list="sorttype" placeholder='Sort By' />
        <datalist id='sorttype'>
            <option value='Last Updated' />
            <option value='Name' />
            <option value='Stars' />
        </datalist>
        </span>
    </div>
  )
}

export default SearchBar