/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const perDay = 40;
  const firstLv = 3;
  const saleUpToSeven = 20;
  const secondLv = 7;
  const saleMoreThanSeven = 50;

  if (days >= firstLv && days < secondLv) {
    return days * perDay - saleUpToSeven;
  }

  if (days >= secondLv) {
    return days * perDay - saleMoreThanSeven;
  }

  return days * perDay;
}

module.exports = calculateRentalCost;
