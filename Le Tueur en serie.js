"use strict";

let santeJason = 100
let personnage = [" nerd "," sportif "," Cheerleader "," Gotique "," Le Myterieux "]
  
    Evenement();{
      
    while (santeJason > 0 || personnage.length ===0 ){ //définat jusqu'à quand la fonction tourne

        // Rendomiser de ce qui va se passer et sur qui 
        const event = Math.floor(Math.random() * 3) + 1; 
        const choixHero = Math.floor(Math.random() * 5);

    //Condition d'evenement

        // Un Personnage esquive et attack.
        if (event === 1){ 
        santeJason -= 10; 
        console.log(`${personnage[choixHero]} à esquivé et infligé 10 dégats à Jason`)

        // Un Personnage meurt et attack.
        }else if (event === 2){ 
        santeJason -= 15; 
        console.log(`${personnage[choixHero]} est mort mais à réussi avant à infligé 15 dégats à jason`)
        personnage[choixHero] = personnage.splice()

        // Un personnage meurt
        }else{
        console.log(`${personnage[choixHero]} c'est fait tuer par Jason`)   
        personnage[choixHero] = personnage.splice()}
  
    
    }
    }
    //Appel de la fonction pour qu'elle s'affiche
    Evenement();

    // Code ne fonctionne pas car probleme avec apparement la fonction je ne trouve pas de solution.