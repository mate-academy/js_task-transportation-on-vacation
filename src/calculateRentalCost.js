/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPer1Day = 40;
  const totalCost = costPer1Day * days;
  const longTerm = 7;
  const shortTerm = 3;
  const discountLongTerm = 50;
  const discountShortTerm = 20;

  if (typeof days !== 'number' || days <= 0) {
    throw new Error('Please, enter valid data');
  }

  if (days >= longTerm) {
    return totalCost - discountLongTerm;
  }

  if (days >= shortTerm) {
    return totalCost - discountShortTerm;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
