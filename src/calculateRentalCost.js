/**
 * @param {number} days
 *
 * @return {number}
 */
const carCosts = 40;

function calculateRentalCost(days) {
  if (days < 3) {
    return days * carCosts;
  }

  if (days >= 3 && days <= 6) {
    return carCosts * days - 20;
  }

  if (days >= 7) {
    return carCosts * days - 50;
  }
}

module.exports = calculateRentalCost;
