import { useEffect, useRef, useState } from "react";
import toilet from '/src/assets/bathroom_icon.png'
import trash from '/src/assets/trash_icon.png'
import tourism from '/src/assets/trash_icon.png'
import food from '/src/assets/food_icon.png';
import money from '/src/assets/money_icon.png';
import wifi from '/src/assets/wifi_icon.png';
import library from '/src/assets/library_icon.png';
import emergency from '/src/assets/emergency_icon.png';
import { useLocation } from "@/src/contexthooks/useLocation";
import { Button } from "./ui/button";
import { useLayers } from "@/src/contexthooks/useLayers";
import '../components/styles/Map.css'

let map;

const KIOSKCOORDS = {
  "1": [51.0441723, -114.062458],
  "2": [51.0524867, -114.1192084],
  "3": [51.065668, -114.106506],
  "4": [51.134695, -114.239238],
  "5": [50.998362, -114.072767]
}
const APIKEY = "AAPK32a42f389c19427797b066aae489e1051fCSRLZe461fHqMhXOmahERtRv77LiehtVjik54LU5ubiFV_G87C9Y5C5JAGHWpz";
const BASEMAP = "arcgis/streets";


export default function Map() {
  const mapRef = useRef();
  const locationProvider = useLocation();
  const layerProvider = useLayers();
  let layers = layerProvider.getLayers();

  const trashIcon = L.icon({
    iconUrl: trash,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  const washroomIcon = L.icon({
    iconUrl: toilet,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  const foodIcon = L.icon({
    iconUrl: food,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  const emergencyIcon = L.icon({
    iconUrl: emergency,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  const moneyIcon = L.icon({
    iconUrl: money,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  const tourismIcon = L.icon({
    iconUrl: tourism,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  const wifiIcon = L.icon({
    iconUrl: wifi,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  const libraryIcon = L.icon({
    iconUrl: library,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  const bathroomMarkerOptions = {
    pointToLayer: (feature, latLng) => L.marker(latLng, {icon: washroomIcon})
  }
  const trashCanMarkerOptions = {
    pointToLayer: (feature, latLng) => L.marker(latLng, {icon: trashIcon})
  }
  const foodMarkerOptions = {
    pointToLayer: (feature, latLng) => L.marker(latLng, {icon: foodIcon})
  }
  const libraryMarkerOptions = {
    pointToLayer: (feature, latLng) => L.marker(latLng, {icon: libraryIcon})
  }
  const wifiMarkerOptions = {
    pointToLayer: (feature, latLng) => L.marker(latLng, {icon: wifiIcon})
  }
  const moneyMarkerOptions = {
    pointToLayer: (feature, latLng) => L.marker(latLng, {icon: moneyIcon})
  }
  const emergencyMarkerOptions = {
    pointToLayer: (feature, latLng) => L.marker(latLng, {icon: emergencyIcon})
  }
  const tourismMarkerOptions = {
    pointToLayer: (feature, latLng) => L.marker(latLng, {icon: tourismIcon})
  }

  useEffect(() => {
    if (map !== undefined) {
      map.remove();
    }
    map = L.map("map", {
      minZoom: 5,
      maxZoom: 20,
    });

    map.setView(locationProvider.getLocation(), 15);

    L.esri.Vector.vectorBasemapLayer(BASEMAP, { apiKey: APIKEY }).addTo(map);

    if (mapRef && mapRef.current) {
      let markerOptions;
      Object.keys(layers).forEach(async () => {
        for (let i = 0; i < layers.length; i++) {
          // // console.log(layers[i]);
          // console.log(layers[i].imageUrl);
          if (layers[i].active === true) {
            await getGeoJson(layers[i].dataUrl).then(data => {
              switch (layers[i].tagName) {
                case "Food":
                  markerOptions = foodMarkerOptions;
                  break;
                case "Bathroom":
                  markerOptions = bathroomMarkerOptions;
                  break;
                case "Trash":
                  markerOptions = trashCanMarkerOptions;
                  break;
                case "Tourism":
                  markerOptions = tourismMarkerOptions;
                  break;
                case "Money":
                  markerOptions = moneyMarkerOptions;
                  break;
                case "Wifi":
                  markerOptions = wifiMarkerOptions;
                  break;
                case "Library":
                  markerOptions = libraryMarkerOptions;
                  break;
                case "Emergency":
                  markerOptions = emergencyMarkerOptions;
                  break;
                default:
                  break;
              }
              let temp = L.geoJson(data, markerOptions).bindPopup("Information from " + layers[i].dataUrl);
              temp.addTo(map);
            });
          }
        }
      })
    }
  }, [layers]);

  const getGeoJson = async (link) => {
    return await fetch(link).then(res => {
        if(res.ok) {
          return res.json()
        }
        throw new Error("Status " + res.status)
    }).then(data => {
        return data;
    }).catch(err => {
        console.log(err)
    })
  }

  const setMapCoords = (e) => {
    switch (e.target.id) {
      case "0":
      //  console.log(locationProvider.getLocation());
        map.setView(locationProvider.getLocation(), 15);
        break;
      case "1":
        map.setView(KIOSKCOORDS[1], 15);
        break;
      case "2":
        map.setView(KIOSKCOORDS[2], 15);
        break;
      case "3":
        map.setView(KIOSKCOORDS[3], 15);
        break;
      case "4":
        map.setView(KIOSKCOORDS[4], 15);
        break;
      case "5":
        map.setView(KIOSKCOORDS[5], 15);
        break;
    }
  }
  return (
    <div className= "w-full flex flex-col justify-start items-center overflow-hidden border-box mx-2 my-2">
      <div className="kiosk-btn-container flex gap-3">
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="0">Current Location</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="1">Calgary Tower</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="2">Kensington</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="3">Lion's Park</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="4">Tuscany</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="5">Chinook</Button>
      </div>
      <div id="map" ref={mapRef}></div>
    </div>
  )
}

