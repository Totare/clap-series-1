/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors orderCards(cards) retournera ["As", "Ad", "Qs", "8d", "7h"]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * On considère que la valeur de la carte prime sur le type de la carte
 */

const sortBy=['As', 'Ah', 'Ac', 'Ad', 'Ks', 'Kh', 'Kc', 'Kd', 'Qs', 'Qh', 'Qc', 'Qd', 'Js', 'Jh', 'Jc', 'Jd', '10s', '10h', '10c', '10d', '9s', '9h', '9c', '9d', '8s', '8h', '8c', '8d', '7s', '7h', '7c', '7d', '6s', '6h', '6c', '6d', '5s', '5h', '5c', '5d', '4s', '4h', '4c', '4d', '3s', '3h', '3c', '3d', '2s', '2h', '2c', '2s'];

function orderCards(cards) {
  cards.sort(
    function(a, b){
      let i=0;
      let j=0;
      while(sortBy[i] !== a){
        i++;
      };
      while(sortBy[j] !== b){
        j++;
      };
      if(i<j){
        return -1;
      }else{
        return 1;
      }
    }
  );
  return cards;
};


export { orderCards };