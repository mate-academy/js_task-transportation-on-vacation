/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalResult = 0;
  const longTerm = 7;
  const middleTerm = 3;
  const discountForLongTerm = 50;
  const discountForMiddleTerm = 20;

  if (days >= longTerm) {
    totalResult = 40 * days - discountForLongTerm;
  } else if (days >= middleTerm) {
    totalResult = 40 * days - discountForMiddleTerm;
  } else {
    totalResult = 40 * days;
  }

  return totalResult;
}

module.exports = calculateRentalCost;
