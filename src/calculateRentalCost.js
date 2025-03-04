/**
 * @param {number} days
 *
 * @return {number}
 */
const day = 40;

// let sevenDaysOff = 50;
// let threeDaysOff = 20;
function calculateRentalCost(days) {
  let total = 0;

  if (days < 3) {
    total = day * days;
  }

  if (days >= 3 && days <= 7) {
    total = day * days - 20;
  }

  if (days >= 7) {
    total = day * days - 50;
  }

  return total;
}

module.exports = calculateRentalCost;
