const DAY_COST = 40;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentCost = days * DAY_COST;

  if (days >= 7) {
    rentCost -= 50;
  } else if (days >= 3) {
    rentCost -= 20;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
