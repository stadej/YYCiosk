import React,{ useState, useEffect } from 'react'
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
  const [idle, setIdle] = useState(false);
  let idleTime = 7000;
  let idleTimer;
  const handleIdleState = () => {
    setIdle(true);
  };
  const handleIdleTimeout = () => {
    handleIdleState();
  };


  const resetIdleTimer = () => {
    clearTimeout(idleTimer);
    setIdle(false);
    idleTimer = setTimeout(handleIdleTimeout, idleTime);
  };
  useEffect(() => {

    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('keypress', resetIdleTimer);

    idleTimer = setTimeout(handleIdleTimeout, idleTime);
    console.log('idleTimer', idleTimer);
    return () => {
      clearTimeout(idleTimer);
      document.removeEventListener('mousemove', resetIdleTimer);
      document.removeEventListener('keypress', resetIdleTimer);
    };
  }, [idle, idleTimer]);

  return (
    <LanguageProvider>
      <LocationProvider>
          <LayersProvider>
            <div className='root'>
              <header className="relative w-full h-full flex flex-col items-center justify-start gap-[31px] text-left text-29xl text-crimson font-open-sans mq675:gap-[31px]">
                <Navbar/>
                  <div className="w-full h-full bg-white overflow-hidden flex flex-col items-center justify-end py-[10px] px-[10px] box-border gap-[20px]">
                    
                    <Map />
                      <div className="w-full flex flex-row items-start justify-self-end">
                        <Iconbar />
                      </div>
                </div>
              </header>
            </div>
          </LayersProvider>
      </LocationProvider>
    </LanguageProvider>

  )
}
const Main = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full  relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[23px] px-0 pb-0 box-border gap-[20px] tracking-[normal] mq450:gap-[73px] mq675:gap-[73px]">
        <section className="w-[705px] flex flex-row items-start justify-start pt-0 px-5 pb-[66px] box-border max-w-full mq450:pb-7 mq450:box-border mq900:pb-[43px] mq900:box-border">
            <div
                className="h-[758px] flex-1 relative rounded-[10px] max-w-full overflow-hidden object-cover"
            >
                <Map />
            </div>
        </section>

        <Iconbar />
    </div>
    </>

  )
}
export default App
