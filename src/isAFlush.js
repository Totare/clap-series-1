/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple : 
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */

function isAFlush(cards) {
  for( let i = 0 ; i < cards.length;i++){
    cards[i] = cards[i].slice(-1)
  };
  cards.sort();
  while(cards.length > 0){
    let nb = numberOfSameColor(cards);
    if (nb >= 5){
      return true;
    }
  };
  return false;
}

function numberOfSameColor(cards) {
  let currentColor = cards.shift();
  let i = 0;
  let nb = 1;
  while(currentColor === cards[i]){
    nb++;
    i++;
  }
  return nb
}

export { isAFlush };