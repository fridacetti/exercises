// opgave: Lav en funktion der modtager to argumenter, beloeb og moms. Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
//Lav moms som et default parameter sat til 25.
let beloeb = Math.round(Math.random() * 1000);

console.log("beløbet uden moms er " + beloeb);

momsBeregner(beloeb);
function momsBeregner(beloeb, moms = 0.25) {
  const prisMedMoms = beloeb * (1 + moms);
  console.log(`beløb med moms er ${prisMedMoms} kr`);
}

//undervisnings bud
function momsBeregner(beloeb, moms = 25) {
  console.log(beloeb + (beloeb * moms) / 100);
}
momsBeregner(296, 33);
