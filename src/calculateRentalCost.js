const RENT_PER_DAY = 40;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalRent = days * RENT_PER_DAY;

  switch (true) {
    case days >= 7:
      return totalRent - 50;
    case days >= 3:
      return totalRent - 20;
    default:
      return totalRent;
  }
}

module.exports = calculateRentalCost;
