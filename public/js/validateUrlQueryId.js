import { fetchPlaces, fetchHotels } from './apiConnection.js'

// validate if the query param of the URL has an id
const validateUrlQueryId = async (id, typeData) => {

  if(id < 0) throw new Error("There's not id!");

  const apiData = {
    places: fetchPlaces(),
    hotels: fetchHotels(),
    both: Promise.all([fetchPlaces(), fetchHotels()])
  }

  return await apiData[typeData]
}

export default validateUrlQueryId;
