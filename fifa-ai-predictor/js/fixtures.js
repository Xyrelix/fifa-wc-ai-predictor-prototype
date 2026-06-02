fetch("data/fixtures.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("fixtures");
    data.forEach(match => {
      const li = document.createElement("li");
      li.textContent = `${match.date} - ${match.teamA} vs ${match.teamB}`;
      list.appendChild(li);
    });
  });
