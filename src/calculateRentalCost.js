/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;
	if(days>=3) discount = 20;
	if(days>=7) discount = 50;
	return days*40-discount;
}

module.exports = calculateRentalCost;
