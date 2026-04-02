/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfDay = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;

  let sum = days * priceOfDay;

  if (days <= 2) {
    return sum;
  } else if (days < 7) {
    sum -= basicDiscount;

    return sum;
  } else if (days >= 7) {
    sum -= additionalDiscount;

    return sum;
  }
}

module.exports = calculateRentalCost;
