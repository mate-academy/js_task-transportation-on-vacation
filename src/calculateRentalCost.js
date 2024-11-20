/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const totalDiscount = 50;
  const partDiscount = 20;

  if (days >= 7) {
    return rentPrice * days - totalDiscount;
  } else if (days >= 3) {
    return rentPrice * days - partDiscount;
  }

  return rentPrice * days;
}

module.exports = calculateRentalCost;
