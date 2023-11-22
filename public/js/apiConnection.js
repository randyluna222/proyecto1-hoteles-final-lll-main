const api = 'https://641ce24db556e431a877f2a0.mockapi.io/';

// Connect to Api
export const fetchPlaces = async () => {
  try {
    const destinations = await fetch(`${api}places`).then((response) => response.json())

    return destinations;
  } catch (err) {
    throw Error(err)
  }
};

export const fetchHotels = async () => {
  
  try {
    const hotels = await fetch(`${api}hotels`).then((response) => response.json());
  
    return hotels;
  } catch (err) {
    throw Error(err)
  }
};