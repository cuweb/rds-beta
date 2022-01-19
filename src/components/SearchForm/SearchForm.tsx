/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

export interface SearchFormProps {
    title: string
}

const SearchForm: React.FC<SearchFormProps> = ({ title }): JSX.Element => {
    return (
        <form className="c-searchform" role="search" method="get" action="https://carleton.ca">
            <label htmlFor="searchform__input">{title}</label>
            <input id="searchform__input" name="s" type="search" autoComplete="off" placeholder={title} />
            <button type="submit" title={title}>
                <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M23.52 21.28l-6.096-6.128A9.488 9.488 0 0 0 19.2 9.6c0-5.296-4.304-9.6-9.6-9.6C4.304 0 0 4.304 0 9.6c0 5.296 4.304 9.6 9.6 9.6 2.08 0 3.968-.656 5.552-1.776l6.128 6.096c.304.32.72.48 1.12.48.4 0 .832-.144 1.12-.48a1.594 1.594 0 0 0 0-2.256v.016zM9.6 17.12c-4.144 0-7.52-3.376-7.52-7.52S5.456 2.08 9.6 2.08s7.52 3.376 7.52 7.52-3.376 7.52-7.52 7.52z"  /></svg>
                <span className="u-visually-hidden">Search button</span>
            </button>
        </form>
    )
}

export default SearchForm