/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCarPriсe = 40;
  const threeMoreDays = 20;
  const sevenMoreDays = 50;

  if (days >= 7) {
    return days * rentCarPriсe - sevenMoreDays;
  } else if (days >= 3) {
    return days * rentCarPriсe - threeMoreDays;
  }

  return days * rentCarPriсe;
}

module.exports = calculateRentalCost;
