/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTALDAYPRICE = 40;
  const MEDIUMDISCOUNT = 20;
  const BIGDISCOUNT = 50;
  const TOTALPRICE = days * RENTALDAYPRICE;
  const SHORTERM = 3;
  const LONGTERM = 7;

  if (days < SHORTERM) {
    return TOTALPRICE;
  }

  if (days >= SHORTERM && days < LONGTERM) {
    return TOTALPRICE - MEDIUMDISCOUNT;
  }

  return TOTALPRICE - BIGDISCOUNT;
}

module.exports = calculateRentalCost;
