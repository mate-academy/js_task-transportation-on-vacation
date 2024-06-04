/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  let discount = 0;

  switch (true) {
    case days >= 3 && days < 7:
      discount = 20;
      break;
    case days >= 7:
      discount = 50;
      break;
  }

  const TOTAL_COST = days * RENT_COST - discount;

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
