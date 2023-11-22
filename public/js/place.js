import { validateUrlQueryId } from './validateUrlQueryId.js';
import { createBanner } from './create-dom-elements.js';

const idPlace = new URLSearchParams(window.location.search).get('id')
const [places, hotels] = await validateUrlQueryId(idPlace, 'both');

// print just one place
function printPlace(placesData) {
  createBanner(placesData.heroImage[0], placesData.placeName)
    
  document.getElementById('place').innerHTML = `
    <h2 class="carrousel__title">Travel to <br> ${placesData.placeName}</h2>
  `;

  document.querySelector('.data1').innerHTML = `
    <div class="red">
      <P>${placesData.description}</p>
    </div>
  `;

}
printPlace(places[idPlace - 1])


// print hotels that match with place
function printHotels() {
  const getHotels = hotels.filter((item) => idPlace === item.idPlace)

  document.querySelector('.hotels').innerHTML = getHotels.map((item) => {

    return `
      <li class="hotels__card">
        <a href="./hotel.html?id=${item.id}" class="hotels__link">
          <h3 class="hotels__title">${item.hotelName} <strong>TRAVEL</strong></h3>
          <picture><img src="${item.image[0]}" alt="${item.hotelName}" class="hotels__img"></picture>
        </a>
      </li>
    `;
    
  }).join('')
}
document.querySelector('#fetchHotels').addEventListener('click', printHotels)