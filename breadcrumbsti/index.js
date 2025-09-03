const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// function klik() {
//   let str = "";
//   //&nbsp;

//   bc.forEach((elm) => {
//     str += `<a href="">${elm.name}/</a> &nbsp`;
//   });
//   document.querySelector("ul").innerHTML = str;
//   document.querySelector("ul a:last-child").removeAttribute("href");
// }

document.querySelector("button").addEventListener("click", () => {
  // tjekker om vi er på sidste element i forEach
  let lastIndex = bc.length - 1;
  // gennemgår hvert element i arrayet
  bc.forEach((element, i) => {
    if (i < lastIndex) {
      // tilføjer link på ul og /
      document.querySelector("ul").innerHTML += `<a href="${element.link}">${element.name}</a> &nbsp / &nbsp`;
    } else {
      // sidste element i ul får ikke link på men kun navn
      document.querySelector("ul").innerHTML += `${element.name}`;
    }
  });
});
