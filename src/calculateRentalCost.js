/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentCost = 40 * days;
  const lowDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    rentCost -= bigDiscount;
  } else if (days >= 3) {
    rentCost -= lowDiscount;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
