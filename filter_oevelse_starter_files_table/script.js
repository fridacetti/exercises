const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function undefinedText(value) {
  if (value) {
    return value;
  } else {
    return "—";
  }
}
function trueFalseText(value) {
  if (value === true) {
    return "Yes";
  } else if (value === false) {
    return "No";
  } else {
    return "—";
  }
}

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${undefinedText(each.type)}</td>
  <td>${undefinedText(each.fuel)}</td>
  <td>${undefinedText(each.passengers)}</td> 
  <td>${undefinedText(each.stops)}</td>
  <td>${undefinedText(each.ownedBy)}</td>
  <td>${trueFalseText(each.isElectric)}</td>
  <td>${trueFalseText(each.isTandem)}</td>
</tr>`;
  });
}

// Kun EL
function filterElDrevne() {
  return vehicles.filter(function (vehicles) {
    if (vehicles.isElectric === true) {
      return true;
    } else {
      return false;
    }
  });
}

// Passengers padser
function filterMereEnd2() {
  return vehicles.filter(function (vehicles) {
    if (vehicles.passengers > 2) {
      return true;
    } else {
      return false;
    }
  });
}
// Jonas' biler
function filterElJonas() {
  return vehicles.filter(function (vehicles) {
    if (vehicles.isElectric === true && vehicles.ownedBy === "Jonas") {
      return true;
    } else {
      return false;
    }
  });
}
// Rugbrødsdrevne med mere end 1 plads
function filterRubgrodMereEnd1() {
  return vehicles.filter(function (vehicles) {
    if (vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
      return true;
    } else {
      return false;
    }
  });
}

// Knapper
document.getElementById("btnAlle").onclick = function () {
  showTheseVehicles(vehicles);
};
document.getElementById("btnEl").onclick = function () {
  showTheseVehicles(filterElDrevne());
};
document.getElementById("btnMereEnd2").onclick = function () {
  showTheseVehicles(filterMereEnd2());
};
document.getElementById("btnElJonas").onclick = function () {
  showTheseVehicles(filterElJonas());
};
document.getElementById("btnRugbrodMereEnd1").onclick = function () {
  showTheseVehicles(filterRubgrodMereEnd1());
};
