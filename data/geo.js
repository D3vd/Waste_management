/**
* Generates number of random geolocation points given a center and a radius.
* @param  {Object} center A JS object with lat and lng attributes.
* @param  {number} radius Radius in meters.
* @param {number} count Number of points to generate.
* @return {array} Array of Objects with lat and lng attributes.
*/
function generateRandomPoints(center, radius, count) {
  var points = [];
  for (var i=0; i<count; i++) {
    points.push(generateRandomPoint(center, radius));
  }
  return points;
}


/**
* Generates number of random geolocation points given a center and a radius.
* Reference URL: http://goo.gl/KWcPE.
* @param  {Object} center A JS object with lat and lng attributes.
* @param  {number} radius Radius in meters.
* @return {Object} The generated random points as JS object with lat and lng attributes.
*/
function generateRandomPoint(center, radius) {
  var x0 = center.lng;
  var y0 = center.lat;
  // Convert Radius from meters to degrees.
  var rd = radius/111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x/Math.cos(y0);

  // Resulting point.
  return {'lat': y+y0, 'lng': xp+x0};
}


// Usage Example.
// Generates 100 points that is in a 1km radius from the given lat and lng point.
var randomGeoPoints = generateRandomPoints({'lat':13.0372762, 'lng':80.2343613}, 1000, 150);


const axios = require('axios')

function makeRequestsFromArray(arr) {
    let index = 0;
    function request() {
        return axios.post('http://localhost:5000/bin', {
          name: `Bin No: ${index + 1}`,
          id: index + 1,
          lat: arr[index].lat,
          lng: arr[index].lng,
        }).then(() => {
            index++;
            if (index >= arr.length) {
                return 'done'
            }
            return request();
        });

    }
    return request();
}

makeRequestsFromArray(randomGeoPoints)
