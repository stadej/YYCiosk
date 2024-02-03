import React,{ useState } from 'react'
import './App.css'
import HomeIconGroup from '@/components/home-icon'
import Map from '/components/Map'
import KioskSelector from '@/components/KioskSelector'

function App() {

  return (
    
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[23px] px-0 pb-0 box-border gap-[73px] tracking-[normal] mq450:gap-[73px] mq675:gap-[73px]">
      <section className="w-[705px] flex flex-row items-start justify-start pt-0 px-5 pb-[66px] box-border max-w-full mq450:pb-7 mq450:box-border mq900:pb-[43px] mq900:box-border">
        <div
          className="h-[758px] flex-1 relative rounded-[10px] max-w-full overflow-hidden object-cover"
        >
                <Map />
        </div>
      </section>
      <HomeIconGroup />
    </div>

  )
}

export default App
