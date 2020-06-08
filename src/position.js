/*
 * /!\ À faire seul !
 *
 * Retourner la position d'une planète par rapport au soleil en sachant que le soleil est en position 0 et 
 * Neptune en position 8.
 * Attention la fonction position n'est pas sensible à la casse de notre planète
 * position('Mercury) retourne 1 et position('mercury') retourne également 1
 */

const SOLAR_SYSTEM = 
  ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function position(planet) {
  for (let i = 0; i < SOLAR_SYSTEM.length; i++) {
    if(planet.toLowerCase() === SOLAR_SYSTEM[i].toLowerCase()){
      return i;
    };
  }
}

export { position };