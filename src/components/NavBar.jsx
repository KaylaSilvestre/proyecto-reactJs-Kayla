import "../css/NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = ()=> {

    return ( 
        <nav className='nav-container'>
            <a className="anchor-nav" href="">
                <img src="../logopng.png" alt="logo" />
                Hecho Pa'Mi
             </a> 
            <a className="anchor-nav" href="">Productos</a>
            <a className="anchor-nav" href="">Destacados</a>
            <a className="anchor-nav" href="">Sale!</a> 
            <CartWidget/>
        </nav>
    )
}

export default NavBar