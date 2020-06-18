/*
 * /!en groupe!
 * Le tableau cards contient 7 cartes. L'objectif est de retourner les 5 cartes permettant de faire le 
 * meilleur combo possible :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 * À savoir : une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * Attention, une hauteur doit comporter les 5 meilleures cartes possible en sachant que la valeur 
 * prime sur le type !
 * 
 */
import { isAPair } from './isAPair.js';
import { isAFlush } from './isAFlush.js';
import { orderCards } from './orderCards.js';

function bestCombo(cards) {
  if(isAFull(cards)){
    return handFull(cards);
  }else if(isAFlush(cards)){
    return handFlush(cards);
  }else if(isAPair(cards)){
    return handPair(cards);
  }else{
    return handHighest(cards);
    // return orderCards(cards).splice(0,4);
  };
};

function isAFull(cards){
  let isAFull = false;
  let colorOcc = colorOccurences(cards);
  for(var [key, value] of Object.entries(colorOcc)){
    if( value > 4){
      isAFull=true;
    } 
  }
  return isAFull;
};

const COLORS = {
  diamond: "d",
  club: "c",
  heart: "h",
  spade: "s"
}

function colorOccurences(cards) {
  var occurences = {};
  for(var [key, value] of Object.entries(COLORS)){
    let countCard = 0;
    cards.forEach(card=>{
      let formatedCard = card[card.length - 1];
      let formatedCARD = value;
      if(formatedCard  === formatedCARD){
        countCard++;
      };
    });
    if(countCard != 0){
      occurences[key] = countCard;
    }
  };
  return occurences;
}

function handFull(cards){
return 
};

function handFlush(cards){

};

function handPair(cards){

};

function handHighest(cards){

};

export { bestCombo };

