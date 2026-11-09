class match{
    constructor(modedejeux, buts, passedecisives, save, scoreequipe, scoreadversaire){
        this.modedejeux = modedejeux;
        this.buts = buts;
        this.passedecisives = passedecisives;
        this.save = save
        this.scoreequipe = scoreequipe;
        this.scoreadversaire = scoreadversaire;
    }
}




class Joueur{
    constructor(pseudo, mmr){
        this.pseudo = pseudo;
        this.mmr = mmr;
        this.match =[];
        
    }
}
    function ajouterMatch(match){
        this.match.push(match)
    }
    function calculervictoire(){
        let victoire = 0;
        for (let i = 0; i < Joueur.match.length; i++) {
        if (Joueur.match[i].scoreadversaire < Joueur.match[i].scoreequipe) {
            victoire++;
        }
    }
        return victoire;}


    

