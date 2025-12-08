/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const sevenDayDiscount = 50;
  const threeDayDiscount = 20;

  if (days === 0) {
    return 0;
  }

  let discont = 0;

  if (days >= 7) {
    discont = sevenDayDiscount;
  } else if (days >= 3) {
    discont = threeDayDiscount;
  }

  return days * dayPrice - discont;
}

module.exports = calculateRentalCost;
