/**
 * @param {number} days
 *
 * @return {number}
 */
const dayCost = 40;
const discount7 = 50;
const discount3 = 20;
const minDaysFor7DayDisc = 7;
const minDaysFor3DayDisc = 3;

function calculateRentalCost(days) {
  const result = days * dayCost;

  if (days >= minDaysFor7DayDisc) {
    return result - discount7;
  }

  if (days >= minDaysFor3DayDisc) {
    return result - discount3;
  }

  return result;
}

module.exports = calculateRentalCost;
