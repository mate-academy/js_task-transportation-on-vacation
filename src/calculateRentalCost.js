/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const isMediumTerm = days >= 3;
  const isLongTerm = days >= 7;
  const costPerDay = 40;
  discount = (+isLongTerm && 50) || (+isMediumTerm && 20) || 0;

  return days * costPerDay - discount;
}

module.exports = calculateRentalCost;
