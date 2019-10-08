const Giphy = {
  thunderstorm: "https://media.giphy.com/media/iLdNyukd3uxsk/giphy.gif",
  rain: "https://media.giphy.com/media/xT5LMEwvX9maK6nWvK/giphy.gif",
  snow: "https://media.giphy.com/media/l2JHRxJ6gFSaWbOBW/giphy.gif",
  drizzle: "http://giphygifs.s3.amazonaws.com/media/O9S4unHvciYuY/giphy.gif",
  sleet: "http://giphygifs.s3.amazonaws.com/media/ehcguN6l9d81q/giphy.gif",
  below5: "https://media.giphy.com/media/2HriUt8SEU4a4/giphy.gif",
  below8: "http://giphygifs.s3.amazonaws.com/media/sS9IVZUcfIw3S/giphy.gif",
  below12: "https://media.giphy.com/media/uhy2fnDYJK2R2/giphy.gif",
  from12to15: "https://media.giphy.com/media/l2Je4TRUg4ZICbwju/giphy.gif",
  from15to20: "https://media.giphy.com/media/4GIcsQJorDZOU/giphy.gif",
  from20to25: "https://media.giphy.com/media/q4XZT4xKRxA2I/giphy.gif",
  from25to29: "http://giphygifs.s3.amazonaws.com/media/fBEDuhnVCiP16/giphy.gif",
  from29to32: "https://media.giphy.com/media/RKzSrDSYmncje/giphy.gif",
  above32: "http://giphygifs.s3.amazonaws.com/media/A6aHBCFqlE0Rq/giphy.gif",
  above35: "https://media.giphy.com/media/eXo5eC1tK7cas/giphy.gif"
}

const getBackgroundGif = (temperature, description) => {
  if(description.includes('snow')) return Giphy.snow
  if(description.includes('rain')) return Giphy.rain
  if(description.includes('thunderstorm')) return Giphy.thunderstorm
  if(description.includes('sleet')) return Giphy.sleet
  if(description.includes('drizzle')) return Giphy.drizzle
  if (temperature <= 5) return Giphy.below5
  if (temperature > 5 && temperature <=8) return Giphy.below8
  if (temperature > 8 && temperature <=12) return Giphy.below12
  if (temperature > 12 && temperature <= 15) return Giphy.from12to15
  if (temperature > 15 && temperature <= 20) return Giphy.from15to20
  if (temperature > 20 && temperature <= 25) return Giphy.from20to25
  if (temperature > 25 && temperature <= 29) return Giphy.from25to29
  if (temperature > 29 && temperature <= 32) return Giphy.from29to32
  if (temperature > 32 && temperature <= 35) return Giphy.above32
  if (temperature > 35) return Giphy.above35
}

export {Giphy, getBackgroundGif}
