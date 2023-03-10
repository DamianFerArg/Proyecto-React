import "../navbar/Navbar.scss"
import logo from "./logo.png"


export const Navbar = () => {

    return (
        <header classname="header">
            <div classname="header__container">
                <img src={logo} classname="header__logo" alt="logo"/>
                <nav classname="navbar">
                    <li classname="navbar__item">Enlace a</li>
                    <li classname="navbar__item">Enlace b</li>
                    <li classname="navbar__item">Enlace c</li>
                </nav>

            </div>
        </header>
    )
}
