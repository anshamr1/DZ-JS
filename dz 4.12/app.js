const positionLatitude = x1;
const positionLongitude = y1;
const destinationLatitude = x2;
const destinationLongitude = y2;
const a = x2 - x1;
const b = y2 - y1;

const distance = Math.sqrt(a ** 2 + b ** 2);
console.log(distance);

