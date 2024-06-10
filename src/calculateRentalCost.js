/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const DISC_LOW = 20;
  const DISC_HIGH = 50;
  let discount = 0;

  if (days >= 7) {
    discount = DISC_HIGH;
  } else if (days >= 3) {
    discount = DISC_LOW;
  }

  return days * RENT_COST - discount;
}

module.exports = calculateRentalCost;
