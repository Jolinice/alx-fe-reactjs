import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'; // <--- Import is already here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // START OF REPLACED CONTENT
    <>
      <WelcomeMessage />
    </>
    // END OF REPLACED CONTENT
  )
}

export default App