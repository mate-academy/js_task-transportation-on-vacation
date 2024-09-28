/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const oneDayRent = 40;
  const discountThreeDay = 20;
  const discountSevenDay = 50;

  if (days < 3) {
    return days * oneDayRent;
  }

  if (days >= 3 && days < 7) {
    return days * oneDayRent - discountThreeDay;
  }

  if (days >= 7) {
    return days * oneDayRent - discountSevenDay;
  }
}

module.exports = calculateRentalCost;
