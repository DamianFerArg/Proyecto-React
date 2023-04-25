import './Navbar.scss'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = ({red}) => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header" style={{backgroundColor: red ? 'red' : ' rgb(196, 140, 207)'}}>
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/tops' className="navbar__link">tops</Link>
                    <Link to='/productos/vestidos' className="navbar__link">vestidos</Link>
                    <Link to='/productos/pantalones' className="navbar__link">pantalones</Link>
                    <Link to='/productos/polleras' className="navbar__link">polleras</Link>
                    <Link to='/productos/accesorios' className="navbar__link">accesorios</Link>
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