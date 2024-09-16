/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const threeOrMoreDayDiscont = 20;
  const sevenOrMoreDayDiscont = 50;
  const payForRent = days * rentPerDay;
  if (days >= 7) {
    return payForRent - sevenOrMoreDayDiscont;
  } else if (days >= 3) {
    return payForRent - threeOrMoreDayDiscont;
  }
  return payForRent;
}

module.exports = calculateRentalCost;
