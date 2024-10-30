/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TURM = 3;
  const SHORT_TURM_DISCOUNT = 20;
  const LONG_TURM = 7;
  const LONG_TURM_DISCOUNT = 50;
  const PRISE_PER_DAY = 40;

  const basePrise = days * PRISE_PER_DAY;

  if (days >= LONG_TURM) {
    return basePrise - LONG_TURM_DISCOUNT;
  }

  if (days >= SHORT_TURM) {
    return basePrise - SHORT_TURM_DISCOUNT;
  }

  return basePrise;
}

module.exports = calculateRentalCost;
