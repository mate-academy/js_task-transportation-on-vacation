/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const rentDays3 = 3;
  const rentDays7 = 7;

  if (days >= rentDays7) {
    return days * rentCost - maxDiscount;
  } else {
    if (days >= rentDays3) {
      return days * rentCost - minDiscount;
    } else {
      return days * rentCost - 0;
    }
  }
}

module.exports = calculateRentalCost;
