/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RentPrise = 40;
  const discount1 = 20;
  const discount2 = 50;
  const longterm = 7;
  const shortterm = 3;

  const prise = days * RentPrise;

  if (days >= longterm) {
    return prise - discount2;
  }

  if (days >= shortterm) {
    return prise - discount1;
  }

  return prise;
}

module.exports = calculateRentalCost;
