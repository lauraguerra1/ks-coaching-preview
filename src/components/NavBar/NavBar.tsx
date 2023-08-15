import logo from '../../assets/KS-logo.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <Link className='logo' to='/'><img src={logo} alt='Kaite Sanger Logo with moon symbol'/></Link>
      <div className='link-container'>
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/about'>About</NavLink>
        <NavLink className='nav-link' to='/services'>Services</NavLink>
        <NavLink className='nav-link' to='/blog'>Blog</NavLink>
      </div>
    </nav>
  )
}

export default NavBar 