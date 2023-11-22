import { fetchPlaces } from './apiConnection.js'
import { createBanner } from './create-dom-elements.js';

createBanner('public/assets/img/banner-home.jpg', 'COSTA RICA');

function printPlacesImages(placesData) {

  document.getElementById('track').innerHTML = placesData.slice(0, 8).map((item) => {
    return `
      <li class="carousel__card">
        <a href="./place.html?id=${item.id}">
          <h4>${item.placeName}<strong>Travel</strong></h4>
          <picture><img src="${item.heroImage[0]}" alt="${item.placeName}" /></picture>
        </a>
      </li>
    `;
  }).join('')
}
printPlacesImages(await fetchPlaces())
