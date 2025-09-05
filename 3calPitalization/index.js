const str = "frida";

// Hele strengen i capslock
console.log(str.toUpperCase());

// Kun 3. bogstav i capslock
const result =
  str.slice(0, 2) + // "fr"
  str.slice(2, 3).toUpperCase() + // "I"
  str.slice(3); // "da" (3) tager resten

console.log(result); // frIda
