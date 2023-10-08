"use strict";


let radio= [" Anissa ", " Look at me "," Bruxelles Vie ", " Wine and Kotch", " RR 9.1 "];
let prenom = "Kevin"; 
let santeMentale = 10;
let nbFeu = 0;

function Trajet(){

  
 

  
  for (let compteur = 0; compteur != 30; compteur++){
        
        const tf = Math.floor(Math.random() * 5);
    
    if (radio[tf] == radio[0]){ // Rendomiser de la music
        santeMentale -= 1;
        nbFeu++; // Incrémentation du compteur d'essais.
        console.log(prenom + " a écouté " + radio[tf] + " et à depassé " + nbFeu + " il lui reste "+ santeMentale + " de santé mentale");
    
    }else{
        nbFeu++;
        console.log(prenom + " a écouté " + radio[tf] + " et à depassé " + nbFeu + " Feu. il lui reste "+ santeMentale + " de santé mentale");
    }
    
    }
    
}
Trajet();