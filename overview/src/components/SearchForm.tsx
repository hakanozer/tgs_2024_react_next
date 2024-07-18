import React, { useEffect, useRef } from 'react'

function SearchForm(props: {
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    sendSearch: Function,
    search: string
  }) {

  const searchRef = useRef<HTMLInputElement>(null) 
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus()
      //searchRef.current.style.backgroundColor = 'red'
    }
  }, [])

  useEffect(() => {
    console.log("Custom Log", props.search)
  }, [props.search])

  return (
    <>
        <form onSubmit={ (evt) => props.sendSearch(evt) } className="d-flex col-4">
            <input ref={searchRef} onChange={(evt) => props.setSearch(evt.target.value)} required className='form-control' placeholder='Search..' />
            <button className='btn btn-danger'>Search</button>
        </form>
    </>
  )
}

export default SearchForm