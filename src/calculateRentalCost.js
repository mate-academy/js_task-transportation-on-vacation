/**
 * @param {number} days
 *
 * @return {number}
 */

const rentDayValue = 40;
let totalRent = 0;

function calculateRentalCost(days) {
  if (days >= 7) {
    totalRent = rentDayValue * days - 50;
  } else if (days >= 3) {
    totalRent = rentDayValue * days - 20;
  } else {
    totalRent = rentDayValue * days;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
