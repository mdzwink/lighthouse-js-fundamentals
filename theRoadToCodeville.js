let goodStations = [];
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

/*
const chooseStations = function (candidateStn) {
  let goodStations = [];
  let choices = '';
  for (let i = 0; i < candidateStn.length; i++) {
    if ((candidateStn[i][1] >= 20) && ((candidateStn[i][2] === 'school') || (candidateStn[i][2] === 'community centre'))) {
      goodStations.push(candidateStn[i])
    }
  }
  for (let j = 0; j < goodStations.length; j++) {
    let choices = ''
    choices += `${goodStations[j]},\n`;
  } 
  return choices;
}

chooseStations(stations);

console.log(chooseStations(stations));
*/

function chooseStations (stations) {
  let goodStations = [];
  for (const station of stations) {
    const capacity = station [1]
    
    if (capacity >= 20) {
      const type = station[2];

      if(type === 'school' || type === 'community centre') {
      goodStations.push(station[0]);
      }
    }
  }

  return goodStations;
}

console.log(chooseStations(stations));