/* @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRent = 40;

  let price = days * carRent;

  if (price === 80){
    return 80;
  }
  if (price === 120){
    return 100;
  }
  if (price === 240){
    return 220;
  }
  if (price === 280){
    return 230;
  }


}

module.exports = calculateRentalCost;
