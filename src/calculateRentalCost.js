/**
 * @param {number} days
 *
 * @return {number}
 */

const rentCost = 40;
const rentDiscont3Days = 20;
const rentDiscontWeek = 50;

function calculateRentalCost(days) {
  if ((days >= 3) & (days < 7)) {
    return rentCost * days - rentDiscont3Days;
  } else if (days >= 7) {
    return rentCost * days - rentDiscontWeek;
  } else {
    return rentCost * days;
  }
}

module.exports = calculateRentalCost;
