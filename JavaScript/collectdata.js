export const collectData = function(obj){
	const {
  	estate_english_name,
    estate_map_latitude,
    estate_map_longitude
  } = obj
  
//   console.log('hi')
//   console.log(sentence)
//   sent.push(sentence)
var sentence = `Estate Name : ${estate_english_name} , Latitude : ${estate_map_latitude} , Longitude ${estate_map_longitude}`
return sentence
  
}

export const filterdata = function(obj,lat){
    const {
        estate_english_name,
      estate_map_latitude,
      estate_map_longitude
    } = obj
    if(estate_map_latitude > lat){
        var sentence = `Estate Name : ${estate_english_name} , Latitude : ${estate_map_latitude} , Longitude ${estate_map_longitude}`
        return sentence
    }
}
//using the above function with map
//array.map(function(x){return filterdata(x,latval);})
// export const collectData
