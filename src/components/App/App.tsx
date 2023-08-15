import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
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
      {<NavBar smallScreen={smallScreen} menuOpen={menuOpen} openOrCloseMenu={openOrCloseMenu}/>}
      <main>

      </main>
    </div>
  )
}

export default App
