/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const numberofDays = days;
  const costPer1Day = 40;
  const totalCost = costPer1Day * numberofDays;
  const longTerm = 7;
  const shortTerm = 3;
  const discountLongTerm = 50;
  const discountShortTerm = 20;

  if (typeof numberofDays !== 'number' || numberofDays <= 0) {
    return 'Please, enter valid data';
  }

  if (numberofDays >= longTerm) {
    return totalCost - discountLongTerm;
  }

  if (numberofDays >= shortTerm) {
    return totalCost - discountShortTerm;
  }

  if (numberofDays < shortTerm) {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
