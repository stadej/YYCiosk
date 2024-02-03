import { useEffect, useRef } from "react";
import toilet from '/public/toilet-o.png'

export default function Map() {
  let map;
  const mapRef = useRef();

  const apiKey = "AAPK32a42f389c19427797b066aae489e1051fCSRLZe461fHqMhXOmahERtRv77LiehtVjik54LU5ubiFV_G87C9Y5C5JAGHWpz";
  const basemap = "arcgis/streets";

  useEffect(() => {
    if (mapRef && mapRef.current) {

      if(map !== undefined) {
        map.remove();
      }

      map = L.map("map", {
        minZoom:2,
        maxZoom:20,
      });
    
      L.esri.Vector.vectorBasemapLayer(basemap, { apiKey: apiKey }).addTo(map);
    
      //map.setView([51,-114], 9);
      map.setView([51.0268101, -114.058521], 10);

      let trashCanMarkerOptions = {
        radius: 8,
        fillColor: "#000000",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 1,
        iconUrl: {toilet}
      };

      let washroomMarkerOptions = {
        pointToLayer: (feature, latLng) => L.marker(latLng, {icon: {toilet}})
      }

      //let greenIcon = new trashCanMarker({iconUrl: toilet});
      //L.marker([51.0268101, -114.058521], {icon: greenIcon}).addTo(map).bindPopup("Hello world");


      //let trashCan = L.geoJSON().addTo(map);
      //let washrooms = L.geoJSON(undefined, { icon: toilet }).addTo(map);
      // need to figure out a way to style markers as they come from geojson
      let washrooms;
      let trashCan;
      getGeoJson("https://data.calgary.ca/resource/fwyk-8pth.geojson").then(data => {
          //trashCan.addData(data)
          trashCan = L.geoJson(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, trashCanMarkerOptions);
            }
        }).addTo(map);
      });
      getGeoJson("https://data.calgary.ca/resource/jjkg-kv4n.geojson").then(data => {
          //washrooms.addData(data)

          washrooms = L.geoJson(data, washroomMarkerOptions);
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