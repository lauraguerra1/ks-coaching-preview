import close from '../../assets/close.png'
import { Link } from 'react-router-dom'
import './Menu.css'

type MenuProps = {
  openOrCloseMenu: () => void
}

const Menu = ({ openOrCloseMenu }: MenuProps) => {
  return (
    <nav className='menu'>
      <button className='menu-btn' onClick={openOrCloseMenu}>
        <img src={close} alt='close menu button' />
      </button>
      <div className='menu-link-container'>
        <Link onClick={openOrCloseMenu} className='nav-link' to='/'>Home</Link>
        <Link onClick={openOrCloseMenu} className='nav-link' to='/about'>About</Link>
        <Link onClick={openOrCloseMenu} className='nav-link' to='/services'>Services</Link>
        <Link onClick={openOrCloseMenu} className='nav-link' to='/blog'>Blog</Link>
      </div>
    </nav>
  )
}

export default Menu