/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const discSmall = 20;
  const discBig = 50;

  if (days < 3) {
    return days * dayPrice;
  } else if (days >= 3 && days < 7) {
    return days * dayPrice - discSmall;
  } else if (days >= 7) {
    return days * dayPrice - discBig;
  } else {
    return 'please insert number';
  }
}

module.exports = calculateRentalCost;
