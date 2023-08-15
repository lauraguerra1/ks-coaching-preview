import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Menu from '../Menu/Menu'
import './App.css'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [smallScreen, setSmallScreen] = useState(false)
  const openOrCloseMenu = () => setMenuOpen(prev => !prev)

  const updateScreenSize = () => {
    window.innerWidth > 900 ? setSmallScreen(false) : setSmallScreen(true)
  }

  useEffect(() => {
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return (
    <div className="app">
      {menuOpen
        ? <Menu openOrCloseMenu={openOrCloseMenu} />
        : <NavBar smallScreen={smallScreen} openOrCloseMenu={openOrCloseMenu}/>
      }
      <main>

      </main>
    </div>
  )
}

export default App
