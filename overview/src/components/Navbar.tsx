import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ICustomer } from '../models/ICustomer'
import { allLikes } from '../utils/store'
import { LikeContext } from '../contexts/LikesContext'
import { useDispatch, useSelector } from 'react-redux'
import { allTodos } from '../services/todoService'
import { TodoAction } from '../useRedux/TodoAction'
import { TodoType } from '../useRedux/TodoType'
import { StateType } from '../useRedux/store'

function Navbar( props: {customer?: ICustomer} ) {

  // use redux
  const dispatch = useDispatch()
  const todos = useSelector((item: StateType) => item.TodoReducer)
  const token = useSelector((item: StateType) => item.TokenReducer)
  console.log(token)
  
  // useContext
  const likesContext = useContext(LikeContext)
  useEffect(() => {
    const arr = allLikes()
    likesContext.setLikes(arr)

    const removeSendObj:TodoAction = {
      type: TodoType.TODO_ALL_REMOVE,
      payload: {
        id: 0,
        todo: '',
        completed: false,
        userId: 0
      }
    } 
    dispatch(removeSendObj)

    allTodos().then(res => {
      const dt = res.data
      dt.todos.forEach(item => {
        item.id = Math.floor( Math.random() * 100 )
        const sendObj: TodoAction = {
            type: TodoType.TODO_ADD,
            payload: item
        }
        dispatch(sendObj)
      })
    })

  }, [])

  const [q, setQ] = useState('')
  const navigate = useNavigate()  
  const logout = () => {
    localStorage.removeItem('customer')
    navigate('/', {replace: true})
  }

  const sendSearch = (evt: FormEvent) => {
    evt.preventDefault()
    navigate('/search?q='+q)
  }

  const likesArr = allLikes()

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to='/dashboard' className="nav-link" aria-current="page" >Dashboard</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/todo' className="nav-link" aria-current="page" >Todo</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/likes' className="nav-link" aria-current="page" >Likes</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/profile' className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a onClick={logout} role='button' className="dropdown-item" >Logout</a></li>
            </ul>
            </li>
            { props.customer && 
                <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">{props.customer.firstName + ' ' + props.customer.lastName} ({likesContext.likes.length}) - ({todos.length})</a>
                </li>
            }
        </ul>
        <form onSubmit={sendSearch} className="d-flex" role="search">
            <input onChange={(evt) => setQ(evt.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default Navbar