import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from '/components/Map'
import Iconbar from '@/components/ui/Iconbar'

function App() {

  return (
    <>
      <div style={{maxWidth: '100%', overflowX: 'auto'}}>
        <Map />
        <Iconbar />
      </div>
    </>
  )
}

export default App
