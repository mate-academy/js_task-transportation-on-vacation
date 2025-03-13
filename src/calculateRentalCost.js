/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RentalCost = 40;
  const MaxDiscount = 50;
  const MediumDiscount = 20;
  const LongDays = 7;
  const MediumDays = 3;

  if (days >= LongDays) {
    return days * RentalCost - MaxDiscount;
  }

  if (days >= MediumDays) {
    return days * RentalCost - MediumDiscount;
  }

  return days * RentalCost;
}

module.exports = calculateRentalCost;
