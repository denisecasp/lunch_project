import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359'
    },
    headers: {
      'X-RapidAPI-Key': '8fe3407550mshac834d2b4a0b49cp1f4587jsn3e92bd0b0590',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  

    export const getPlacesData = async () => {
  // request 
   try {
        const { data: { data } } = await axios.get(url, options);
        return data;
   }
    
    catch (error){
        console.log(error)
    }
}