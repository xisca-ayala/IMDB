
import { Movie } from "./movie";
import { Professional } from "./professional";
import { Imdb } from "./IMDB";

const movie1 = new Movie('La princesa prometida',1987,'Estadounidense','Aventuras');

movie1.actors = [
new Professional('Cary Elwes',61,76,183,false,'Británico',0,'actor'),
new Professional('Robin Wright',57,63,168,false,'Estadounidense',0,'actriz'),
new Professional('Mandy Patinkin',71,75,182,false,'Estadounidense', 0,'actor'),
new Professional('Chris Sarandon',81,75,183,false,'Estadounidense',0,'actor'),
new Professional('Cristopher Guest',75,75,180,false,'Estadounidense',0,'actor'),
new Professional('Wallace Shawn',80,72,157,false,'Estadounidense',0,'actor')
];

movie1.director = new Professional('Rob Reiner',76,85,178,true,'Estadounidense',0,'director');

movie1.writer = new Professional('William Goldman',108,80,180,true,'Estadounidense',0,'escritor');
movie1.language = 'Inglés';
movie1.plataforma = 'Amazon Prime Video';

movie1.isMCU = false;
movie1.mainCharacterName = 'Princesa Buttercup';
movie1.producer = 'Rob Reiner';
movie1.distributor = 'Chantal Lam';


let movie2 = new Movie('Los juegos del hambre', 2012, 'EUA', 'Ciencia ficción');

movie2.actors = [
new Professional('Jennifer Lawrence', 33, 56, 165, false, 'USA', 1, 'actress'),
new Professional('Josh Hutcherson', 31,86, 184, false, 'EUA', 0, 'actor'),
]
movie2.director = new Professional ('Gary Ross',67,75,180,false,'EUA',0,'director' );
movie2.writer = new Professional('Suzanne Collins',61,60,167,false,'EUA',0,'writer');
movie2.language = 'English';
movie2.plataforma = 'Netflix';
movie2.mainCharacterName = 'Katniss Everdeen';
movie2.producer = 'Jon Kilik y Nina Jacobson';
movie2.distributor = 'Lionsgate';


 
console.log(movie1)
console.log(movie2)
let arrayPeliculas = []
movie1.showInfoMovie();
movie2.showInfoMovie();
let Imdb1 = new  Imdb (arrayPeliculas); 
console.log(Imdb1);
