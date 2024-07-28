const carCosts = 40;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days >= 7) {
    return carCosts * days - 50;
  }

  if (days >= 3) {
    return carCosts * days - 20;
  }

  if (days < 3 && days > 0) {
    return carCosts * days;
  }
}

module.exports = calculateRentalCost;
