import { useLayers } from '@/src/contexthooks/useLayers';
import React, { useState, useEffect } from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';

export default function Navbar() {
  const layerProvider=useLayers();

  const [currentDate, setCurrentDate] = useState(new Date());
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder
  } = useAudioRecorder();
  
  const handleRecording = () => {
    console.log(isRecording)
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }
  useEffect(() => {
    const sendRecordingToServer = async () => {
      if (recordingBlob) {
        try {
          console.log('Uploading audio:', recordingBlob)
          const url = URL.createObjectURL(recordingBlob);
          const response = await fetch('/api/voice', {
            method: 'POST',
            body: recordingBlob,
          });
  
          if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Audio uploaded successfully:', jsonResponse);
            if(jsonResponse.user_request !== "does not exist"){
              console.log(layerProvider.layers)
              layerProvider.toggleLayer(jsonResponse.user_request)            // Handle the JSON response here

            }
          } else {
            console.error('Error uploading audio:', response.statusText);
          }
        } catch (error) {
          console.error('Error uploading audio:', error);
        }
      }
    };
  
    sendRecordingToServer(); // Call the function immediately
  
    return () => {
      // Cleanup code, if needed
    };
  }, [recordingBlob]);
    useEffect(() => {
      const intervalId = setInterval(() => {
          const newDate = new Date();
          newDate.setSeconds(0);
          setCurrentDate(newDate);
      }, 1000); // Update every minute

      return () => clearInterval(intervalId);
  }, []);

  // Custom formatting function for HH:MM with optional leading zero for hours
  const formatTime = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // Convert 24hr format to 12hr format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if minutes < 10
      return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  };

  const formattedDate = formatTime(currentDate);


  const [currentTemperature, setCurrentTemperature] = useState(0);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.0501&longitude=-114.0853&current=temperature_2m');
        const data = await response.json();
        // Extract current temperature from the response
        const temperature = data.current.temperature_2m;
        setCurrentTemperature(temperature);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  // takes in the temperature value and returns a descriptor word
  const getTemperatureDescriptor = (temperature) => {
    if (temperature >= 30) {
      return 'Hot';
    } else if (temperature >= 20) {
      return 'Warm';
    } else if (temperature >= 10) {
      return 'Mild';
    } else if (temperature >= 0) {
      return 'Cool';
    } else if (temperature >= -10) {
      return 'Cold';
    } else {
      return 'Freezing';
    }
  };

  return (
    <header className="self-stretch flex flex-col items-center justify-start gap-[31px] max-w-full text-left text-29xl text-crimson font-open-sans mq675:gap-[31px]">
    <div className="w-[998px] flex flex-row items-start justify-between py-0 px-5 box-border gap-[20px] max-w-full">
      <div className="w-[319px] flex flex-row items-center justify-start gap-[9px]">
        <img
          className="h-[117px] w-[107px] relative object-cover"
          loading="eager"
          alt=""
          src="/sunny-day.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <div className="relative whitespace-nowrap z-[1]">{formattedDate}</div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 text-9xl text-dimgray">
              <div className="flex flex-row items-end justify-start gap-[10px]">
                <div className="h-[38px] relative inline-block">
                  {currentTemperature}°C
                </div>
                <div className="h-[27px] relative text-xl font-light text-black inline-block whitespace-nowrap">
                  {getTemperatureDescriptor(currentTemperature)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-45xl">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className='flex gap-2'>
                <div className='flex gap-2 mt-5'>
                    <img onClick={handleRecording} width={50} height={50} src="/microphone.png" alt="microphone" />
                    <img width={50} height={50} src="/translate.png" alt="microphone" />
                </div>
            <div className="h-[87px] relative inline-block">
              <span className="font-extrabold">YYC</span>
              <span className="font-light">-iosk</span>
            </div>
            </div>
          </div>
          <div className="h-[83px] w-[35px] relative text-29xl font-extrabold inline-block shrink-0 z-[1] ml-[-8px]">
            +
          </div>
        </div>
      </div>
    </div>
    <img
      className="self-stretch h-[8.1px] relative max-w-full overflow-hidden shrink-0 object-contain"
      loading="eager"
      alt=""
      src="/line-1.svg"
    />
  </header>
)
}


// export default function Navbar() {
//   // add weather call here
 
//    return (
//      <div>15 C</div>
//    )
//  }