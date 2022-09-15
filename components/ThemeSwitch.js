import { useState } from "react"
import DarkTheme from "./DarkTheme"

const ThemeSwitch = () => {
  const loadDarkMode = () => {
    if (typeof localStorage === 'undefined') return false

    const value = localStorage.getItem('darkMode')
    return value && JSON.parse(value)
  }

  const [darkMode, setDarkMode] = useState(loadDarkMode)

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
        {darkMode ? 'Light ' : 'Dark '} Mode
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  )
}

export default ThemeSwitch