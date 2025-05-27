/**
 * @param {number} days
 *
 * @return {number}
 */
const priceDay = 40;
const discountSevenDays = 50;
const discountThreeDays = 20;

function calculateRentalCost(days) {
  if (days <= 2) {
    return days * priceDay;
  }

  if (days <= 6) {
    return days * priceDay - discountThreeDays;
  }

  if (days >= 7) {
    return days * priceDay - discountSevenDays;
  }
}

module.exports = calculateRentalCost;
