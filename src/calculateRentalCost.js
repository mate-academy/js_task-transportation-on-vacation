/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rabateThree = 20;
  const rabateSeven = 50;
  const coastRent = 40;
  const rentThreeDays = 3;
  const rentSevenDays = 7;

  if (days >= rentSevenDays) {
    return days * coastRent - rabateSeven;
  }

  if (days >= rentThreeDays) {
    return days * coastRent - rabateThree;
  }

  return days * coastRent;
}

module.exports = calculateRentalCost;
