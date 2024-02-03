import { useEffect, useRef, useState } from "react";
import toilet from '/public/toilet-o.png'
import trash from '/public/trash-o.png'

export default function Map(props) {
  const [mapCoordinates, setMapCoordinates] = useState([51.0268101, -114.058521]);
  const [mapZoom, setMapZoom] = useState(18);
  let map;
  const mapRef = useRef();

  const APIKEY = "AAPK32a42f389c19427797b066aae489e1051fCSRLZe461fHqMhXOmahERtRv77LiehtVjik54LU5ubiFV_G87C9Y5C5JAGHWpz";
  const BASEMAP = "arcgis/streets";

  useEffect(() => {
    if (mapRef && mapRef.current) {

      if(map !== undefined) {
        map.remove();
      }

      map = L.map("map", {
        minZoom:2,
        maxZoom:20,
      });
    
      L.esri.Vector.vectorBasemapLayer(BASEMAP, { apiKey: APIKEY }).addTo(map);
    
      //map.setView([51,-114], 9);
      map.setView(mapCoordinates, mapZoom);

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

  return (
    <>
      <div id="map" ref={mapRef}></div>
    </>
  )
}