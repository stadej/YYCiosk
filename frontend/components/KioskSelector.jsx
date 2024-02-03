import { useState } from "react";
import Map from "./Map";

const KIOSKCOORDS = {
  "1": [51.0441723, -114.062458],
  "2": [51.0524867, -114.1192084],
  "3": [51.065668, -114.106506],
  "4": [51.134695, -114.239238],
  "5": [50.998362, -114.072767]
}

export default function KioskSelector() {
  const [mapCoordinates, setMapCoordinates] = useState([51.0268101, -114.058521]);
  const [mapZoom, setMapZoom] = useState(18);

  function setMapCoords(e) {
    switch (e.target.id) {
      case "1":
        console.log("Hello world");
        setMapCoordinates(Object.assign([],KIOSKCOORDS[1]));
        console.log();
        break;
      case "2":
        console.log("Hello world");
        setMapCoordinates(KIOSKCOORDS[2]);
        console.log(KIOSKCOORDS[2]);
        break;
      case "3":
        console.log("Hello world");
        setMapCoordinates(KIOSKCOORDS[3]);
        console.log(KIOSKCOORDS[3]);
        break;
      case "4":
        console.log("Hello world");
        setMapCoordinates(KIOSKCOORDS[4]);
        console.log(KIOSKCOORDS[4]);
        break;
      case "5":
        console.log("Hello world");
        setMapCoordinates(KIOSKCOORDS[5]);
        console.log(KIOSKCOORDS[5]);
        break;
    }
  }


  return (
    <>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="1">Calgary Tower</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="2">Kensington</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="3">Lion's Park</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="4">Tuscany</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="5">Chinook</button>
      <Map mapCoordinates={mapCoordinates} mapZoom={mapZoom} />
    </>
  )
}