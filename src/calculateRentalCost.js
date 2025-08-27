/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const longTerm = 7;
  const discountShortTerm = 20;
  const discountLongTerm = 50;

  if (days >= longTerm) {
    return days * 40 - discountLongTerm;
  }

  if (days >= shortTerm) {
    return days * 40 - discountShortTerm;
  }

  if (days < shortTerm) {
    return days * 40;
  }
}

module.exports = calculateRentalCost;
