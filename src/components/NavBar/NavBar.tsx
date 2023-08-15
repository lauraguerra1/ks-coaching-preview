import logo from '../../assets/KS-logo.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './NavBar.css'
import menu from '../../assets/menu.png'
type NavBarProps = {
  menuOpen: boolean,
  openOrCloseMenu: () => void 
}

const NavBar = ({menuOpen, openOrCloseMenu}: NavBarProps) => {
  return (
    <nav>
      <Link className='logo' to='/'><img src={logo} alt='Kaite Sanger Logo with moon symbol'/></Link>
      <div className={menuOpen ? 'hidden' : 'link-container'}>
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/about'>About</NavLink>
        <NavLink className='nav-link' to='/services'>Services</NavLink>
        <NavLink className='nav-link' to='/blog'>Blog</NavLink>
      </div>
      <button className={menuOpen ? 'hidden' : 'menu-btn'}><img src={menu} alt='menu button'/></button>
    </nav>
  )
}

export default NavBar 