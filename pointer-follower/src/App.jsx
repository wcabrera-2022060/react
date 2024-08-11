import { useEffect, useState } from 'react'
import './App.css'

export const App = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  useEffect(() => {
    const handleResize = () => {
      setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  const changeEnable = () => {
    setEnable(!enable)
  }

  const textButton = enable ? 'disable' : 'enable'

  return (
    <>
      <div
        className='circle'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />

      <button onClick={changeEnable}>
        {textButton} follow pointer
      </button>
    </>
  )
}
