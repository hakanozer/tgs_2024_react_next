'use client'
import Link from "next/link"
import { IUser } from "../models/IUser"
import { usePathname } from "next/navigation"
import { useCountStore } from "../store/actionStore";

function NavBar( props: {item: IUser} ) {
  const count = useCountStore((state:any) => state.count);
  const pathName =  usePathname()
  console.log("pathName", pathName)
  const isActive = pathName.startsWith("/admin/product")
  console.log(isActive)
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={"nav-link "} href='/admin'>Home</Link>
                </li>
                <li className={"nav-item" + isActive ? 'active' : ''}>
                <Link className="nav-link" href='/admin/product'>Product</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">{props.item.name} - ({count})</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </>
  )
}

export default NavBar