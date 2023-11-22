import {
  validateUrlQueryId
} from './validateUrlQueryId.js'
import {
  createBanner
} from './create-dom-elements.js'

const idHotel = new URLSearchParams(window.location.search).get('id') - 1;
const hotels = await validateUrlQueryId(idHotel, 'hotels');

// print just one hotel
function printHotel(hotel) {
  createBanner(hotel.image[0], hotel.hotelName)

  document.getElementById('hotel').innerHTML = `
   
  <div class="discover">

      <div class="discover__textContainer">
        <h2 class="discover__title">${hotel.hotelName}</h2>
        <p class="discover__text">${hotel.descritption}</p>
      </div>
      <div class="discover__img">
        <img src="${hotel.image[1]}" alt="${hotel.hotelName}">
      </div>
  </div>

  `
}
printHotel(hotels[idHotel])

// print rooms
function printRooms() {

  document.querySelector('.rooms').innerHTML = hotels[idHotel].roomsList.map(room => {
    const cards = document.createElement('li')
    cards.className = 'rooms__card'

    const roomText = document.createElement('div')
    roomText.className = 'rooms__text'

    const imgRoom = document.createElement('img')
    imgRoom.src = room.roomImage
    imgRoom.alt = room.roomName

    const roomsSpace = document.createElement('div')
    roomsSpace.className = 'rooms--space'

    const roomsUl = document.createElement('ul')
    roomsUl.className = 'roomsUl'

    const roomTitle = document.createElement('h3')
    roomTitle.textContent = room.roomName;
    roomsSpace.append(roomTitle,roomsUl)
    roomText.append(imgRoom, roomsSpace)

    const priceContainer = document.createElement('div')
    const spanPrice = document.createElement('span')
    spanPrice.className = 'total price-font'

    priceContainer.append(spanPrice);

    // Add features

    let addFeatures = 0;
    let priceCharacteristics = "";

    for (const i in room.characteristics) {
      const span = document.createElement('div')
      const roomsLi = document.createElement('li')
      const [a, b] = room.characteristics[i];
      addFeatures += Number(b)
      span.textContent = `${a} ${b}$`
      roomsUl.appendChild(roomsLi)
      roomsLi.appendChild (span)
      priceCharacteristics = Math.floor(addFeatures + Number(room.price))
      spanPrice.textContent = priceCharacteristics + '$'

    }
    // Validate if room has discount

    function validateDiscount() {

      if (Number(room.discount) !== 0) {
        spanPrice.className = 'price price-font'
        const priceDiscount = document.createElement('span')
        priceDiscount.className = 'total price-font'
        priceDiscount.textContent = (priceCharacteristics - (priceCharacteristics * Number(room.discount) / 100)) + '$';
        priceContainer.appendChild(priceDiscount);
        roomText.appendChild(priceContainer)
        cards.append(roomText)
      }

      // if not, show the base price
      
      else {
        spanPrice.className = ' price-font'
        const priceDiscount = document.createElement('span')
        roomText.appendChild(priceContainer)
        cards.append(roomText)
      }
    }
    
    
    validateDiscount()
    return cards.outerHTML
    
  }).join('')
}
printRooms()

/* form contact*/
document.getElementById('link').value = window.location.href;