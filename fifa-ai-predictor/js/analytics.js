const ctx = document.getElementById("accuracyChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Brazil", "Germany", "Argentina"],
    datasets: [{
      label: "Prediction Accuracy (%)",
      data: [75, 60, 80],
      backgroundColor: ["#004080", "#008000", "#800000"]
    }]
  }
});
