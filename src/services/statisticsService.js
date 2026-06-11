class StatisticsService {
  average(scores) {
    if (!scores.length) return 0;

    const total = scores.reduce(
      (sum, score) => sum + score,
      0
    );

    return total / scores.length;
  }
}

module.exports = new StatisticsService();
