import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchForm from '../components/SearchForm'

function Dashboard() {

  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

  const sendSearch = (evt: FormEvent) => {
    evt.preventDefault()
    console.log("Send Search", search)
  }


  return (
    <>
      <h2>Dashboard</h2>
      <SearchForm setSearch={setSearch} sendSearch={sendSearch} search={search} />
      <div>{search}</div>
    </>
  )


}

export default Dashboard