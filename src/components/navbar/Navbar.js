import "../navbar/Navbar.scss"
import logo from "./logo.png"


export const Navbar = () => {

    return (
        <header classname="header">
            <div classname="header__container">
                <img src={logo} classname="header__logo" alt="logo" />
                <nav classname="navbar">
                    <p classname="navbar__item">Enlace a</p>
                    <p classname="navbar__item">Enlace b</p>
                    <p classname="navbar__item">Enlace c</p>
                </nav>

            </div>
        </header>
    )
}
