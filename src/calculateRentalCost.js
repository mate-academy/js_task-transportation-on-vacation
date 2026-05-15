/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentOneDay = 40;
  const shortDiscount = 20;
  const longDiscount = 50;
  let sum = 0;

  if (days === 0) {
    return 'incorrect number';
  }

  if (days < 3) {
    sum = days * rentOneDay;
  }

  if (days >= 3) {
    sum = days * rentOneDay - shortDiscount;
  }

  if (days >= 7) {
    sum = days * rentOneDay - longDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
