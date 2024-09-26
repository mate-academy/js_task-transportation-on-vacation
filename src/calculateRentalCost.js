/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const smallDiscount = 20;
  const largeDiscount = 50;

  if (days < 3) {
    return price * days;
  }

  if (days < 7) {
    return price * days - smallDiscount;
  }

  if (days >= 7) {
    return price * days - largeDiscount;
  }
}

module.exports = calculateRentalCost;
