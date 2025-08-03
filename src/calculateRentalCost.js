/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const smallDiscount = 20;
  const largeDiscount = 50;

  if (days >= 7) {
    return rent * days - largeDiscount;
  }

  if (days >= 3) {
    return rent * days - smallDiscount;
  }

  return rent * days;
}

module.exports = calculateRentalCost;
