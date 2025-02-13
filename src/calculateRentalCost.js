/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCar = 40;
  const daysRent = days * rentCar;

  if (days >= 7) {
    return daysRent - 50;
  }

  if (days >= 3) {
    return daysRent - 20;
  }

  return daysRent;
}

module.exports = calculateRentalCost;
