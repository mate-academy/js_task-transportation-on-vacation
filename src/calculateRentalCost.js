/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const numberofDays = days;
  const costPer1Day = 40;
  const totalCost = costPer1Day * numberofDays;
  const discount7Days = 50;
  const discount3Days = 20;

  if (typeof numberofDays !== 'number' || numberofDays <= 0) {
    return 'Please, enter valid data';
  }

  if (numberofDays >= 7) {
    return totalCost - discount7Days;
  }

  if (numberofDays >= 3) {
    return totalCost - discount3Days;
  }

  if (numberofDays < 3) {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
