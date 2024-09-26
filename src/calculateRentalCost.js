/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  let result = 0;

  if (days >= 3 && days < 7) {
    result = (days * pricePerDay) - smallDiscount;
  }

  if (days >= 7) {
    result = (days * pricePerDay) - bigDiscount;
  }

  if (days < 3) {
    result = days * pricePerDay;
  }

  return result;
}

module.exports = calculateRentalCost;
