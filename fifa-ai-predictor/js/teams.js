fetch("data/teams.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("teams");
    data.forEach(team => {
      const div = document.createElement("div");
      div.className = "team-card";
      div.textContent = team.name;
      container.appendChild(div);
    });
  });
