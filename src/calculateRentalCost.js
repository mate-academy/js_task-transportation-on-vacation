'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const fullCost = days * 40;
  
  if (days >= 7) {
    return fullCost - 50;
  }
  
  if (days >= 3) {
    return fullCost - 20;
  }
  
  return fullCost;
}

module.exports = calculateRentalCost;
