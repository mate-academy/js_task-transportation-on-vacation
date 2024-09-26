/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const discountForWeek = 50;
  const discountForThree = 20;

  if (days >= 3 && days < 7) {
    return (price * days) - discountForThree;
  } else if (days >= 7) {
    return (price * days) - discountForWeek;
  }

  return days * price;
}

module.exports = calculateRentalCost;
