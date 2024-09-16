/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = 0;
  const priceDay = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;

  if (days > 2 && days < 7) {
    rentalCost = days * priceDay - discountThreeDays;
  }

  if (days >= 7) {
    rentalCost = days * priceDay - discountSevenDays;
  }

  if (rentalCost === 0) {
    rentalCost = days * priceDay;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
