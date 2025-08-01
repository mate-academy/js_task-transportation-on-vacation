/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let discount = 0;

  if (days >= 7) {
    const fullWeeks = Math.floor(days / 7);

    discount = fullWeeks * 50;
  } else if (days >= 3 && days <= 6) {
    discount = 20;
  }

  return days * dailyRate - discount;
}

module.exports = calculateRentalCost;
