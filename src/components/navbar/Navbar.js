import "../navbar/Navbar.scss"
import logo from "./logo.png"
import CartWidget from '../Cart-widget/cart'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className="header">
        <div className="header__container">
            <img src={logo} className="header__logo" alt='logo'/>

            <nav className="navbar">
                <Link to='/' className="navbar__link">Inicio</Link>
                <Link to='/productos/sector 1' className="navbar__link">sector 1</Link>
                <Link to='/productos/sector 2' className="navbar__link">sector 2</Link>
                <Link to='/productos/sector 3' className="navbar__link">sector 3</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}
