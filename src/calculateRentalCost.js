/**
 * @param {number} days
 *
 * @return {number}
 */
const rentOfDay = 40;
let rentTotaly = 0;

function calculateRentalCost(days) {
  rentTotaly = days * rentOfDay;

  if (days >= 7) {
    rentTotaly = days * rentOfDay - 50;

    return rentTotaly;
  }

  if (days >= 3) {
    rentTotaly = days * rentOfDay - 20;

    return rentTotaly;
  }

  return rentTotaly;
}

module.exports = calculateRentalCost;
