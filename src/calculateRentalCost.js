/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentInDay = 40;
  const discount = 20;
  const maxDiscount = 50;
  const rentPriceBase = days * rentInDay;

  if (days < 3) {
    return rentPriceBase;
  } else if (days < 7) {
    return rentPriceBase - discount;
  } else {
    return rentPriceBase - maxDiscount;
  }
}

module.exports = calculateRentalCost;
