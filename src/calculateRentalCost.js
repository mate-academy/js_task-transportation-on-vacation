/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentForDay = 40;

  const smallDiscount = 20;

  const bigDiscount = 50;

  if (days < 3) {
    return days * rentForDay;
  }

  if (days <= 6) {
    return days * rentForDay - smallDiscount;
  }

  if (days >= 7) {
    return days * rentForDay - bigDiscount;
  }
}

module.exports = calculateRentalCost;
