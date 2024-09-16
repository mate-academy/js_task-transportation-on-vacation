/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const discount = 20;
  const weekDiscount = 50;
  const threeDays = 3;
  const week = 7;


  if (days < threeDays) {
    return days * dayRent;
  }

  if (days < week) {
    return (days * dayRent) - discount;
  }

  return (days * dayRent) - weekDiscount;
}

module.exports = calculateRentalCost;
