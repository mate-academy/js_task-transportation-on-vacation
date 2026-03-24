/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const discount = 20;
  const sevenDaysDiscount = 50;
  const shortTerDays = 3;
  const longTermDays = 6;
  const week = 7;

  if (days < shortTerDays) {
    return days * rentCost;
  }

  if (days >= shortTerDays && days <= longTermDays) {
    return days * rentCost - discount;
  }

  if (days >= week) {
    return days * rentCost - sevenDaysDiscount;
  }
}

module.exports = calculateRentalCost;
