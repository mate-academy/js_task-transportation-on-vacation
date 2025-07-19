/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const shortTerm = 2;
  const mediumTerm = 6;
  const smallDiscount = 20;
  const mediumDiscount = 50;

  if (days <= shortTerm) {
    return days * costPerDay;
  } else if (days <= mediumTerm) {
    return days * costPerDay - smallDiscount;
  }

  return days * costPerDay - mediumDiscount;
}

module.exports = calculateRentalCost;
