/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRantCost = 40;
  const upToSevenDaysDiscount = 20;
  const fromSevenDaysDiscount = 50;

  if (days < 3) {
    return dayRantCost * days;
  } else if (days < 7) {
    return dayRantCost * days - upToSevenDaysDiscount;
  } else {
    return dayRantCost * days - fromSevenDaysDiscount;
  }
}

module.exports = calculateRentalCost;
