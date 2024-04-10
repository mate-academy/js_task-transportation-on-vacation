/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  let finalPrice = 0;
  let discount = 50;

  if (days >= 7) {
    finalPrice = dailyPrice * days - discount;
  } else if (days >= 3) {
    discount = 20;

    finalPrice = dailyPrice * days - discount;
  } else {
    finalPrice = dailyPrice * days;
  }

  return finalPrice;
}

module.exports = calculateRentalCost;
