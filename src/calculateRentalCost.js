/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const shortStayMinimum = 3;
  const longStayMinimum = 7;
  const shortStayOff = 20;
  const longStayOff = 50;

  if (days >= longStayMinimum) {
    return dayPrice * days - longStayOff;
  }

  if (days > shortStayMinimum) {
    return dayPrice * days - shortStayOff;
  }

  return dayPrice * days;
}

module.exports = calculateRentalCost;
