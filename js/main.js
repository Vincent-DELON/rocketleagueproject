const Joueur1 = new Joueur('nolan', 1200);

const match1 = new match("2v2",4,1,2,5,3);
const match2 = new match("2v2",3,2,3,3,6);
const match3 = new match("2v2",3,6,5,9,0);

Joueur1.ajouterMatch(match1);
Joueur1.ajouterMatch(match2);
Joueur1.ajouterMatch(match3);

console.log(Joueur1);
console.log('test');