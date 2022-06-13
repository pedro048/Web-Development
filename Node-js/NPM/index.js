const superheroes = require("superheroes");
const supervillains = require("supervillains");

superheroes.all;
supervillains.all;

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log("Superhero = ", mySuperHeroName);
console.log("Supervillain = ", mySuperVillainName);