import { checkExist } from "./checkExist.js";
import { checkValidEmail } from "./checkValidEmail.js";
import { calculateScores } from "./calculateScore.js";

const email= "anilrajput6441@gmail.com"
const email2= "anil@gmail.com"
const email3= "qdiufghohdiuvbl";
console.log(checkValidEmail(email));
console.log(checkValidEmail(email2));
console.log(checkValidEmail(email3));
const obj1 = {}
const obj2 = {name: 'Anil',email}
console.log(checkExist(obj1))
console.log(checkExist(obj2))
const ansList = ["a","b","c","a","a"];
const correctansList = ["a","a","c","c","a"];
console.log(calculateScores({correctansList, ansList}));