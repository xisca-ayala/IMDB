import { Movie } from "./movie";
import { Professional } from "./professional";

const movie1 = new Movie('La princesa prometida',1987,'Estadounidense','Aventuras');

const  actor1 = new Professional('Cary Elwes',61,76,183,false,'Británico',0,'actor');
const actriz1 = new Professional('Robin Wright',57,63,168,false,'Estadounidense',0,'actriz');
const actor2 = new Professional('Mandy Patinkin',71,75,182,false,'Estadounidense', 0,'actor');
const actor3 = new Professional('Chris Sarandon',81,75,183,false,'Estadounidense',0,'actor');
const actor4 = new Professional('Cristopher Guest',75,75,180,false,'Estadounidense',0,'actor');
const actor5 = new Professional('Wallace Shawn',80,72,157,false,'Estadounidense',0,'actor');
const actors = [actor1,actriz1,actor2,actor3,actor4,actor5];

const director = new Professional('Rob Reiner',76,85,178,true,'Estadounidense',0,'director');

const writer = new Professional('William Goldman',108,80,180,true,'Estadounidense',0,'escritor');
const language = 'Inglés';
const plataforma = 'Amazon Prime Video';

const isMCU = false;
const mainCharacterName = 'Princesa Buttercup';
const producer = 'Rob Reiner';
const distributor = 'Chantal Lam';

const movieInfo = movie1.showInfoMovie();
console.log(movieInfo);

