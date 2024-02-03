import { useEffect, useRef, useState } from "react";
import toilet from '/public/toilet-o.png'
import trash from '/public/trash-o.png'
import { useLocation } from "@/src/contexthooks/useLocation";
import { Button } from "./ui/button";

let map;

const KIOSKCOORDS = {
  "1": [51.0441723, -114.062458],
  "2": [51.0524867, -114.1192084],
  "3": [51.065668, -114.106506],
  "4": [51.134695, -114.239238],
  "5": [50.998362, -114.072767]
}

export default function Map() {
  const mapRef = useRef();
  const locationProvider = useLocation();

  const APIKEY = "AAPK32a42f389c19427797b066aae489e1051fCSRLZe461fHqMhXOmahERtRv77LiehtVjik54LU5ubiFV_G87C9Y5C5JAGHWpz";
  const BASEMAP = "arcgis/streets";

  useEffect(() => {
    if (mapRef && mapRef.current) {

      if (map !== undefined) {
        map.remove();
      }

      map = L.map("map", {
        minZoom:2,
        maxZoom:20,
      });

      map.setView(locationProvider.getLocation(), 15);

      L.esri.Vector.vectorBasemapLayer(BASEMAP, { apiKey: APIKEY }).addTo(map);
    
      //map.setView([51,-114], 9);

      const trashCanMarkerOptions = {
        pointToLayer: (feature, latLng) => L.marker(latLng, {icon: trashIcon})
      }

      const trashIcon = L.icon({
        iconUrl: trash,
        iconSize: [50, 50], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
      })

      const washroomMarkerOptions = {
        pointToLayer: (feature, latLng) => L.marker(latLng, {icon: washroomIcon})
      }

      const washroomIcon = L.icon({
        iconUrl: toilet,
        iconSize: [50, 50], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
      })

      let trashCan;
      let washrooms;

      let iconsActive = {"link": "https://data.calgary.ca/resource/fwyk-8pth.geojson"};
      Object.keys(iconsActive).forEach(async (tag, index) => {
        await getGeoJson(iconsActive[tag]).then(data => {
          let temp = L.geoJson(data, trashCanMarkerOptions);
          console.log(tag);
          temp.addTo(map).bindPopup(tag);
        });
      })

      //getGeoJson("https://data.calgary.ca/resource/fwyk-8pth.geojson").then(data => {
      //  trashCan = L.geoJson(data, trashCanMarkerOptions);
      //  trashCan.addTo(map);
      //});
      //getGeoJson("https://data.calgary.ca/resource/jjkg-kv4n.geojson").then(data => {
      //  washrooms = L.geoJson(data, washroomMarkerOptions);
      //  washrooms.addTo(map);
      //});
    }
  }, []);

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


  const showIcons = (e) => {
    switch (e.target.id) {
      case "food":
        break;
      case "emergency":
        break;
      case "trash":

        break;
      case "washroom":

        break;
      case "information":
        break;
      case "library":
        break;
    }
  }

  const setMapCoords = (e) => {
    switch (e.target.id) {
      case "0":
        console.log(locationProvider.getLocation());
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
    <>
      <div className="kiosk-btn-container flex gap-3">
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="0">Current Location</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="1">Calgary Tower</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="2">Kensington</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="3">Lion's Park</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="4">Tuscany</Button>
        <Button className="kiosk-btn bg-red-900 hover:bg-black font-bold" onClick={(e) => setMapCoords(e)} id="5">Chinook</Button>
      </div>
      <div id="map" ref={mapRef}></div>
    </>
  )
}

