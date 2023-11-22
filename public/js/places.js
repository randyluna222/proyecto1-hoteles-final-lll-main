import { fetchPlaces } from './apiConnection.js'
import { createGalleryCards, createBanner } from './create-dom-elements.js'

createBanner('./public/assets/img/banner-destinies.jpg', 'Destinations')
// print places
function printPlaces(placesData) {

  document.getElementById('gallery-container').innerHTML = placesData.map((item) => {
    return createGalleryCards(
      item.heroImage[0],
      item.placeName,
      './place.html?id=' + item.id,
    )
  }).join('')
}
printPlaces(await fetchPlaces())


