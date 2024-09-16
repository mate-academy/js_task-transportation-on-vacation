/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const sevenDaysMore = 50;
  const threeDaysMore = 20;
  let totalDiscount = 0;

  if (days >= 7) {
    totalDiscount = sevenDaysMore;
  } else if (days >= 3) {
    totalDiscount = threeDaysMore;
  }

  return price * days - totalDiscount;
}

module.exports = calculateRentalCost;
