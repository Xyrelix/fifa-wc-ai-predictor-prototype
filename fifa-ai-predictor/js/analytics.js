// Accuracy by Team (Bar Chart)
const ctxAccuracy = document.getElementById("accuracyChart").getContext("2d");
new Chart(ctxAccuracy, {
  type: "bar",
  data: {
    labels: ["Brazil", "Germany", "Argentina", "France", "Spain", "England"],
    datasets: [{
      label: "Prediction Accuracy (%)",
      data: [75, 60, 80, 70, 65, 72],
      backgroundColor: ["#004080", "#008000", "#800000", "#FFD700", "#FFC700", "#DC143C"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: "Accuracy by Team" }
    }
  }
});

// Trend Over Time (Line Chart)
const ctxTrend = document.getElementById("trendChart").getContext("2d");
new Chart(ctxTrend, {
  type: "line",
  data: {
    labels: ["Friendly 1", "Friendly 2", "Friendly 3", "World Cup Match 1"],
    datasets: [{
      label: "Accuracy (%)",
      data: [55, 65, 70, 80],
      borderColor: "#004080",
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: "Prediction Accuracy Over Time" }
    }
  }
});

// Outcome Distribution (Pie Chart)
const ctxDistribution = document.getElementById("distributionChart").getContext("2d");
new Chart(ctxDistribution, {
  type: "pie",
  data: {
    labels: ["Win Predictions", "Draw Predictions", "Loss Predictions"],
    datasets: [{
      data: [50, 20, 30],
      backgroundColor: ["#008000", "#FFD700", "#800000"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: "Outcome Distribution of Predictions" }
    }
  }
});
