/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  const longTerm = 7;
  const middleTerm = 3;
  const discountForLongTerm = 50;
  const discountForMiddleTerm = 20;

  if (days >= longTerm) {
    return dailyPrice * days - discountForLongTerm;
  }

  if (days >= middleTerm) {
    return dailyPrice * days - discountForMiddleTerm;
  }

  return dailyPrice * days;
}

module.exports = calculateRentalCost;
