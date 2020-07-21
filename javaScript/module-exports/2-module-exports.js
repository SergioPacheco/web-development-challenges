// menu.js
let Menu = {};
_specialty = "Roasted Beet Burger with Mint Sauce";

// module.exports = Menu;
export const specialty = "Roasted Beet Burger with Mint Sauce";
export function getSpecialty() {
  return this.specialty;
}

// order.js
import Menu, { specialty as _specialty } from "./menu.js";

function placeOrder() {
  console.log("My order is: " + _specialty);
}

placeOrder();

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function () {
    return this.specialty;
  },
};

const Menu = require("./menu.js");

console.log(Menu.getSpecialty());

let Airplane = {
  availableAirplanes: [
    {
      name: "AeroJet",
      fuelCapacity: 800,
    },
    {
      name: "SkyJet",
      fuelCapacity: 500,
    },
  ],
};
export default Airplane;

////

export let availableAirplanes = [
  {
    name: "AeroJet",
    fuelCapacity: 800,
    availableStaff: [
      "pilots",
      "flightAttendants",
      "engineers",
      "medicalAssistance",
      "sensorOperators",
    ],
    maxSpeed: 1200,
    minSpeed: 300,
  },
  {
    name: "SkyJet",
    fuelCapacity: 500,
    availableStaff: ["pilots", "flightAttendants"],
    maxSpeed: 800,
    minSpeed: 200,
  },
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

export function meetsSpeedRangeRequirements(
  maxSpeed,
  minSpeed,
  requiredSpeedRange
) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
}
function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(
      element.name +
        "meets speed range requirements: " +
        meetsSpeedRangeRequirements(
          element.maxSpeed,
          element.minSpeed,
          element.requiredSpeedRange
        )
    );
  });
}

/////////////////////////////

import {
  availableAirplanes,
  flightRequirements,
  meetsStaffRequirements,
  meetsSpeedRangeRequirements,
} from "./airplane";

function displayFuelCapacity() {
  availableAirplanes.forEach(function (element) {
    console.log(
      "Fuel Capacity of " + element.name + ": " + element.fuelCapacity
    );
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(
      element.name +
        " meets staff requirements: " +
        meetsStaffRequirements(
          element.availableStaff,
          flightRequirements.requiredStaff
        )
    );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function (element) {
    console.log(
      element.name +
        " meets speed range requirements:" +
        meetsSpeedRangeRequirements(
          element.maxSpeed,
          element.minSpeed,
          flightRequirements.requiredSpeedRange
        )
    );
  });
}

displaySpeedRangeStatus();
