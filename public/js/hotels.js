import { fetchHotels } from './apiConnection.js';
import { createGalleryCards,  createBanner } from './create-dom-elements.js'

createBanner('./public/assets/img/banner-hotels.jpeg', 'Hotels')

// print hotels
function printHotels(hotelsData) {
  
  document.getElementById('gallery-container').innerHTML = hotelsData.map((item) => {
    return createGalleryCards(
      item.image[0],
      item.hotelName,
      './hotel.html?id=' + item.id,
    )

  }).join('')
}
printHotels(await fetchHotels());
