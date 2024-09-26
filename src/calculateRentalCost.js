/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountLevel1 = 20;
  const discountLevel2 = 50;
  const dailyRent = 40;

  if (days <= 2) {
    return days * dailyRent;
  } else if (days > 2 && days < 7) {
    return (days * dailyRent) - discountLevel1;
  } else if (days > 6) {
    return (days * dailyRent) - discountLevel2;
  }
}

module.exports = calculateRentalCost;
