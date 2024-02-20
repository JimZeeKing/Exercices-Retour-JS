// ##################################################################### //
// ###################### Variables et déclaration ###################### //
// ##################################################################### //

const NOM = "Mike"; //constante, locale au bloc de déclaration, non modifiable
let age = 2; //variable, locale au bloc de déclaration, modifiable
var poids = 25; //variable globale dans le script, locale à la fonction, modifiable

let bebe = false; //déclaration locale au script (let)

if (age == 2) {
  const bebe = true; //déclaration locale au bloc if (let)
  console.log(bebe);
  var poids = 50; //déclaration globale au script (var)
}

try {
  NOM = "Bébé"; //pas permis, car const
} catch (error) {
  console.error("Oups!", error);
}

age = 3; //permis, car let

console.log(NOM, age, poids, bebe); //Mike, 3, 50, false

/*******************************************************************
 ********************** types et affectation ***********************
 *******************************************************************/

let a = 10; // Number
const b = 20; // Number
const c = undefined; // Undefined
const d = "ABCDEF"; // string
const e = true; // Boolean

const ab = a + b; //addition
const bc = b + c; //incalculable
const abd = a + b + d; //addition + concaténation
const be = b + e; //addition avec true
const a2 = a * a; //multiplication
const a10 = Math.pow(a, 10); //a ** 10

//incrémentation
a++; // a+=1, a+=22, a-=5, a*=10, etc.

console.log(a, ab, bc, abd, be, a10); //11, 30, NaN, 30ABCDEF, 10000000000

/*******************************************************************
 *************************** conditions **************************
 *******************************************************************/

const t = true;
const f = false;
let z; //undefined

console.log(t || f, t && f, z, z == false, !z, z == undefined); //true false undefined false true, true
console.log(0 == false, 1 == false); //true, false

if (!z) {
  console.log("Z est non défini!");
}

//inverser un booleen
let ping = false;
ping = !ping; //true
ping = !ping; //false
ping = !ping; //true
console.log("ping", ping); //ping true

//version courte d'un if
//ou !ping si on valide si c'est false
if (ping) {
  document.body.style.backgroundColor = "red";
  document.body.innerHTML = ping;
}

//au lieu de
//ou ping == false
if (ping == true) {
  document.body.style.backgroundColor = "gray";
  document.body.innerHTML = ping;
}

/*******************************************************************
 *************************** Boucles **************************
 *******************************************************************/

let count = 0;
while (count < 1000) {
  document.body.innerHTML += count + "<br>";
  count++;
}

for (let i = count; i >= 0; i -= 100) {
  document.body.innerHTML += i + "<br>";
}

/*******************************************************************
 *************************** Fonctions **************************
 *******************************************************************/

const id = 123321;
function testId(idToValidate) {
  if (isNaN(idToValidate)) {
    return false;
  }

  //tester si le nombre est impair
  return id % 2 == 1;
}

if (testId(id)) {
  console.log("Impair détecté! Bon travail!");
}

console.log(testId(id)); //true
