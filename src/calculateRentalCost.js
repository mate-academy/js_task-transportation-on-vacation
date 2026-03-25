/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const result = days * 40;
  const largeDiscont = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return result - largeDiscont;
  }

  if (days >= 3) {
    return result - smallDiscount;
  }

  if (days < 3) {
    return result;
  }
}

module.exports = calculateRentalCost;
