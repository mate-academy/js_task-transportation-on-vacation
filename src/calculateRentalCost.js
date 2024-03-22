/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentPerDays = 40 * days;

  if (days < 3) {
    return rentPerDays;
  }

  if (days >= 3 && days < 7) {
    rentPerDays = rentPerDays - 20;
  }

  if (days >= 7) {
    rentPerDays = rentPerDays - 50;
  }

  return rentPerDays;
}

module.exports = calculateRentalCost;
