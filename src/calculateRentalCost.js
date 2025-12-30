/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfTheDay = 40;
  const regularDiscount = 20;
  const bestDiscount = 50;

  if (days >= 7) {
    return priceOfTheDay * days - bestDiscount;
  }

  if (days >= 3) {
    return priceOfTheDay * days - regularDiscount;
  }

  if (days >= 1) {
    return priceOfTheDay * days;
  }
}

module.exports = calculateRentalCost;
