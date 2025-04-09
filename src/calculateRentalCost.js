/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayCost = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  let generalSum = 0;

  if (days < MID_TERM) {
    generalSum = everyDayCost * days;

    return generalSum;
  }

  if (days < LONG_TERM && days >= MID_TERM) {
    generalSum = everyDayCost * days - MID_TERM_DISCOUNT;

    return generalSum;
  }

  if (days >= LONG_TERM) {
    generalSum = everyDayCost * days - LONG_TERM_DISCOUNT;

    return generalSum;
  }

  return generalSum;
}

module.exports = calculateRentalCost;
