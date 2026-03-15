/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BaseDailyCost = 40;
  const LongTermDays = 7;
  const LongTermDiscount = 50;
  const ShortTermDays = 3;
  const ShortTermDiscount = 20;

  let cost = BaseDailyCost * days;

  if (days >= LongTermDays) {
    return (cost -= LongTermDiscount);
  }

  if (days >= ShortTermDays) {
    return (cost -= ShortTermDiscount);
  }

  return cost;
}

module.exports = calculateRentalCost;
