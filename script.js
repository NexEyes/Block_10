
navigator.geolocation.getCurrentPosition(position => {

    console.log("Latitude: " + position.coords.latitude)
    console.log("Longitude: " + position.coords.longitude)
}, error => {
    console.error("Error Getting Your Location ", error);

})


