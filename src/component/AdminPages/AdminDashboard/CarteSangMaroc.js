import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import distmarkerIcon from  '../../../assets/img/distmarker-icon-2x.png';
import distmarkerShadow from '../../../assets/img/distmarker-shadow.png';
import regions from '../../../assets/Data/regions';


function CarteSangMaroc() {
  useEffect(() => {
    const map = L.map('map').setView([31.7917, -7.0926], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    regions.forEach(region => {
        L.marker([region.lat, region.lng], {
            icon: L.icon({
              iconUrl: distmarkerIcon,
              shadowUrl: distmarkerShadow,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })
          }).addTo(map)
        .bindPopup(`Région : ${region.nom}<br>Quantité de sang : ${region.quantite}`);
    });

    return () => {
      map.remove(); // Nettoie la carte lorsque le composant est démonté
    };
  }, []);

  return <div id="map" style={{ height: '500px' }}></div>;
}

export default CarteSangMaroc;
