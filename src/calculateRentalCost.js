/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const discountFifty = 50;
  const discountTwenty = 20;

  if (days >= 7) {
    return days * pricePerDay - discountFifty;
  } else if (days >= 3) {
    return days * pricePerDay - discountTwenty;
  }

  return pricePerDay * days;
}

module.exports = calculateRentalCost;
