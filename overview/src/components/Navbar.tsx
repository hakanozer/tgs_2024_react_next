import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ICustomer } from '../models/ICustomer'

function Navbar( props: {customer?: ICustomer} ) {

  const navigate = useNavigate()  
  const logout = () => {
    localStorage.removeItem('customer')
    navigate('/', {replace: true})
  }  

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
                <a className="nav-link disabled" aria-disabled="true">{props.customer.firstName + ' ' + props.customer.lastName}</a>
                </li>
            }
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default Navbar