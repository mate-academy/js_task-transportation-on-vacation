/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  if (days >= 7) {
    return days * pricePerDay - sevenDaysDiscount;
  } else if (days >= 3) {
    return days * pricePerDay - threeDaysDiscount;
  }

  return pricePerDay * days;
}

module.exports = calculateRentalCost;
