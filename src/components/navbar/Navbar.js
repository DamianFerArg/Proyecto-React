import './Navbar.scss'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = ({red}) => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header" style={{backgroundColor: red ? 'red' : ' rgb(89, 0, 4)'}}>
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="Navbar">
                    <Link to='/' className="Navbar__link">Inicio</Link>
                    <Link to='/productos/remeras' className="Navbar__link">Remeras</Link>
                    <Link to='/productos/pantalones' className="Navbar__link">Pantalones</Link>
                    <Link to='/productos/buzos' className="Navbar__link">Buzos</Link>
                    <Link to='/productos/gorras' className="Navbar__link">Gorras</Link>
                    <Link to='/productos/camperas' className="Navbar__link">Camperas</Link>
                </nav>

                <CartWidget />
            </div>

            <div className='user'>
                <h6>Bienvenido: {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}