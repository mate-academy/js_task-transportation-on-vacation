/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCosts = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days < 3) {
    return days * carCosts;
  } else {
    if (days < 7) {
      return days * carCosts - smallDiscount;
    } else {
      if (days >= 7) {
        return days * carCosts - bigDiscount;
      }
    }
  }
}

module.exports = calculateRentalCost;
