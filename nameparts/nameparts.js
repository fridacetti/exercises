const string = "Frida Cetti Jørgensen";

// slice
console.log(string.slice(0, 5));
console.log(string.slice(6, 11));
console.log(string.slice(-9));

// Substring
const fullName = "Frida Cetti Jørgensen";

// find første og sidste mellemrum
const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");

// split i tre dele
const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(firstSpace + 1, lastSpace);
const lastName = fullName.substring(lastSpace + 1);

// udskriv resultatet
console.log(firstName);
console.log(middleName);
console.log(lastName);
