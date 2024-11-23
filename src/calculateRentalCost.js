/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const discountMoreSeven = 50;
  const discountMoreThree = 20;

  if (days >= 3 && days < 7) {
    return rentPerDay * days - discountMoreThree;
  }

  if (days >= 7) {
    return rentPerDay * days - discountMoreSeven;
  }

  return rentPerDay * days;
}

module.exports = calculateRentalCost;
