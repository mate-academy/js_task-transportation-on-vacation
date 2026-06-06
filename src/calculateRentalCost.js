/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const discountIf7DaysOrMore = 50;
  const discountIf3DaysOrMore = 20;

  if (days >= 7) {
    return dailyCost * days - discountIf7DaysOrMore;
  } else if (days >= 3) {
    return dailyCost * days - discountIf3DaysOrMore;
  }

  return dailyCost * days;
}

module.exports = calculateRentalCost;
