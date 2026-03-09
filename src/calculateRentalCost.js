/**
 * @param {number} days
 *
 * @return {number}
 */
const costPerDay = 40;
const mediumRentalDay = 3;
const longRentalDay = 7;

const mediumDiscount = 20;
const longDiscount = 50;

function calculateRentalCost(days) {
  const price = costPerDay * days;

  if (days >= longRentalDay) {
    return price - longDiscount;
  }

  if (days >= mediumRentalDay) {
    return price - mediumDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
