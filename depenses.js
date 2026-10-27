// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((a,n)=> a + n,0);
} console.log(`Le total des dépenses est : ${calculerTotal(depensesSemaine)} FCFA`)

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if(depensesSemaine===0){
    return 0;
  };
  const totaldepenses = calculerTotal(depenses);
  return Math.round(totaldepenses/depensesSemaine.length);
  // Votre code ici.
} console.log(`La moyenne des dépenses par jour est : ${calculerMoyenne(depensesSemaine)} FCFA`);

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((a)=> a > 2000);
  // Votre code ici.
} console.log(`Les dépenses supérieures à 2000 FCFA sont : ${filtrerGrossesDepenses(depensesSemaine)}`);

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if(depensesSemaine===0){
    return 0;// Votre code ici.
  };
  return Math.max(...depenses);
}console.log(`La plus grande dépense est: ${trouverMaximum(depensesSemaine)} FCFA`);

let copieTriee = [...depensesSemaine].sort((a,n)=>a-n);
// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
console.log(`Total : ${calculerTotal(depensesSemaine)} FCFA, 
depenses moyenne : ${calculerMoyenne(depensesSemaine)}, 
dépenses supérieures à 2000 FCFA : ${filtrerGrossesDepenses(depensesSemaine)} FCFA, 
dpense maximale : ${trouverMaximum(depensesSemaine)} FCFA,tableau sans trie : ${depensesSemaine} tableau trié : ${copieTriee.join(",")}`);
