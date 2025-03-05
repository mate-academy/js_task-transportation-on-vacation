/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceDayRental = 40;
  const midleTerm = 3;
  const longTerm = 7;
  const midleTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return days * priceDayRental - longTermDiscount;
  } else if (days >= midleTerm) {
    return days * priceDayRental - midleTermDiscount;
  }

  return days * priceDayRental;
}

module.exports = calculateRentalCost;
