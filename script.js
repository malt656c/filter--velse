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

/* er ikke stolt af denne kode - Malte */

const ulPointer = document.querySelector("ul");

/* smerte */
/* viser isElectric == true */
document.querySelector("button[name='filter1']").addEventListener("click", () => {
  ulPointer.innerHTML =
    "<li><strong>Type</strong></li>" +
    "<li><strong>Fuel</strong></li>" +
    "<li><strong>Passengers</strong></li>" +
    "<li><strong>Stops</strong></li>" +
    "<li><strong>OwnedBy</strong></li>" +
    "<li><strong>Electric</strong></li>" +
    "<li><strong>Tandem</strong></li>";
  showTheseVehicles(vehicles.filter((vehicle) => vehicle.isElectric == true));
});
/* viser kun vehicle.passengers>2 */
document.querySelector("button[name='filter2']").addEventListener("click", () => {
  ulPointer.innerHTML =
    "<li><strong>Type</strong></li>" +
    "<li><strong>Fuel</strong></li>" +
    "<li><strong>Passengers</strong></li>" +
    "<li><strong>Stops</strong></li>" +
    "<li><strong>OwnedBy</strong></li>" +
    "<li><strong>Electric</strong></li>" +
    "<li><strong>Tandem</strong></li>";
  showTheseVehicles(vehicles.filter((vehicle) => vehicle.passengers > 2));
});
/* viser kun vehicle.ownedBy == "Jonas"&& vehicle.isElectric == true  */
document.querySelector("button[name='filter3']").addEventListener("click", () => {
  ulPointer.innerHTML =
    "<li><strong>Type</strong></li>" +
    "<li><strong>Fuel</strong></li>" +
    "<li><strong>Passengers</strong></li>" +
    "<li><strong>Stops</strong></li>" +
    "<li><strong>OwnedBy</strong></li>" +
    "<li><strong>Electric</strong></li>" +
    "<li><strong>Tandem</strong></li>";
  showTheseVehicles(vehicles.filter((vehicle) => vehicle.ownedBy == "Jonas" && vehicle.isElectric == true));
});
/* viser kun vehicle.ownedBy == "Jonas"&& vehicle.isElectric == true  */
document.querySelector("button[name='filter4']").addEventListener("click", () => {
  ulPointer.innerHTML =
    "<li><strong>Type</strong></li>" +
    "<li><strong>Fuel</strong></li>" +
    "<li><strong>Passengers</strong></li>" +
    "<li><strong>Stops</strong></li>" +
    "<li><strong>OwnedBy</strong></li>" +
    "<li><strong>Electric</strong></li>" +
    "<li><strong>Tandem</strong></li>";
  showTheseVehicles(vehicles.filter((vehicle) => vehicle.fuel == "Rugbrød" && vehicle.passengers > 1));
});
/* viser alle */
document.querySelector("button[name='filter5']").addEventListener("click", () => {
  ulPointer.innerHTML =
    "<li><strong>Type</strong></li>" +
    "<li><strong>Fuel</strong></li>" +
    "<li><strong>Passengers</strong></li>" +
    "<li><strong>Stops</strong></li>" +
    "<li><strong>OwnedBy</strong></li>" +
    "<li><strong>Electric</strong></li>" +
    "<li><strong>Tandem</strong></li>";
  showTheseVehicles(vehicles);
});

/* smerte 2: electric boogaloo */
showTheseVehicles(vehicles);
function showTheseVehicles(arr) {
  arr.forEach((each) => {
    if (each.type === undefined) {
      each.type = "ingen type";
    }
    if (each.fuel === undefined) {
      each.fuel = "n/a";
    }
    if (each.passengers === undefined) {
      each.passengers = "ubemandet";
    }
    if (each.stops === undefined) {
      each.stops = "køre ikke stop";
    }
    if (each.ownedBy === undefined) {
      each.ownedBy = "ingen enkeltperson";
    }
    if (each.isElectric === undefined) {
      each.isElectric = "ikke elektrisk";
    }
    if (each.isTandem === undefined) {
      each.isTandem = "n/a";
    }

    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    if (each.isElectric === true) {
      ulPointer.innerHTML += `<li>${"ja"}</li>`;
    } else {
      ulPointer.innerHTML += `<li>${"nej"}</li>`;
    }
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  });
}
