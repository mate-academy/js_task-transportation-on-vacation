/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 3 && days < 7) {
    return days * dayCost - smallDiscount;
  } else if (days >= 7) {
    return days * dayCost - bigDiscount;
  } else {
    return days * dayCost;
  }
}

module.exports = calculateRentalCost;
