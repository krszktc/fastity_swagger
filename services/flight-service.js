
function getSortedFlights(flights) {
  const flightMap = new Map();

  flights.forEach(flight => {
    const source = flight[0];
    const destination = flight[1];

    if (!flightMap.has(source)) {
      flightMap.set(source, 0);
    } else {
      flightMap.delete(source);
    }

    if (!flightMap.has(destination)) {
      flightMap.set(destination, 1);
    } else {
      flightMap.delete(destination);
    }
  });

  return [...flightMap.entries()]
    .sort((a, b) => a[1] - b[1])
    .map(entry => entry[0]);
}

export function getTotalFlightPath(flights) {
  switch (flights.length) {
    case 1:
      return flights[0]
    case 2:
      if (flights[0][1] === flights[1][0]) {
        return [flights[0][0], flights[1][1]]
      }
      return [flights[1][0], flights[0][1]];
    default:
      return getSortedFlights(flights);
  }
}













