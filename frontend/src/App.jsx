import React,{ useState } from 'react'
import './App.css'
import HomeIconGroup from '@/components/home-icon'
import Map from '/components/Map'
import KioskSelector from '@/components/KioskSelector'
import { LanguageProvider } from './contexthooks/useLanguages'
import { LocationProvider } from './contexthooks/useLocation'
import Iconbar from '@/components/ui/Iconbar'
import {LayersProvider} from "@/src/contexthooks/useLayers.jsx";
import Navbar from '@/components/shared/navbar'

function App() {

  return (
    <LanguageProvider>
      <LocationProvider>
          <LayersProvider>
            <header className="absolute w-screen h-screen flex flex-col items-center justify-start gap-[31px] text-left text-29xl text-crimson font-open-sans mq675:gap-[31px]">
              <Navbar/>
                <div className="w-full h-full bg-white overflow-hidden flex flex-col items-center justify-end py-[10px] px-[10px] box-border gap-[20px]">
                  
                  <Map />
                    <div className="w-full flex flex-row items-start justify-self-end">
                      <Iconbar />
                    </div>
                </div>
              </header>
          </LayersProvider>
      </LocationProvider>
    </LanguageProvider>

  )
}

export default App
