import { useEffect, useRef, useState } from "react";
import toilet from '/public/toilet-o.png'
import trash from '/public/trash-o.png'
import { useLocation } from "@/src/contexthooks/useLocation";

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

      map.setView(locationProvider.getLocation(), 18);

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
        iconUrl:toilet,
        iconSize: [50, 50], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
      })

      //let greenIcon = new trashCanMarker({iconUrl: toilet});
      //L.marker([51.0268101, -114.058521], {icon: greenIcon}).addTo(map).bindPopup("Hello world");


      //let trashCan = L.geoJSON().addTo(map);
      //let washrooms = L.geoJSON(undefined, { icon: toilet }).addTo(map);
      // need to figure out a way to style markers as they come from geojson
      let washrooms;
      let trashCan;
      getGeoJson("https://data.calgary.ca/resource/fwyk-8pth.geojson").then(data => {
          //trashCan.addData(data);
          trashCan = L.geoJson(data, trashCanMarkerOptions);
          trashCan.addTo(map);
        // trashCan.addTo(map);
      });
      let redDot;
      getGeoJson("https://data.calgary.ca/resource/jjkg-kv4n.geojson").then(data => {
          //washrooms.addData(data)
          washrooms = L.geoJson(data, washroomMarkerOptions);
          redDot = L.geoJson(data);
          washrooms.addTo(map);
          redDot.addTo(map);
      });
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
  const setMapCoords=(e)=> {
    switch (e.target.id) {
      case "0":
        console.log(locationProvider.getLocation());
        map.setView(locationProvider.getLocation(), 18);
        break;
      case "1":
        map.setView(KIOSKCOORDS[1], 18);
        break;
      case "2":
        map.setView(KIOSKCOORDS[2], 18);
        break;
      case "3":
        map.setView(KIOSKCOORDS[3], 18);
        break;
      case "4":
        map.setView(KIOSKCOORDS[4], 18);
        break;
      case "5":
        map.setView(KIOSKCOORDS[5], 18);
        break;
    }
  }
  return (
    <>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="0">Current Location</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="1">Calgary Tower</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="2">Kensington</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="3">Lion's Park</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="4">Tuscany</button>
      <button className="kiosk-btn" onClick={(e) => setMapCoords(e)} id="5">Chinook</button>
      <div id="map" ref={mapRef}></div>
    </>
  )
}

