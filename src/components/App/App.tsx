import { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './App.css'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const openOrCloseMenu = () => setMenuOpen(prev => !prev)

  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} openOrCloseMenu={openOrCloseMenu}/>
      <main>

      </main>
    </div>
  )
}

export default App
