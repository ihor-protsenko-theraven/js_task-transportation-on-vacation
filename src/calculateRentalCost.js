/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseRentalPerDay = 40;
  const discountThreeDays = 20;
  const cashbackByWeek = 50;
  const cost = baseRentalPerDay * days;

  if (days >= 7) {
    return cost - cashbackByWeek;
  }

  if (days >= 3) {
    return cost - discountThreeDays;
  }

  return cost;
}

module.exports = calculateRentalCost;
