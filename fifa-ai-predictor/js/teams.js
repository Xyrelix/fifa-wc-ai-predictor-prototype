fetch("data/teams.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("teams");
    data.forEach(team => {
      const div = document.createElement("article");
      div.className = "team-card";
      div.innerHTML = `
        <span class="team-flag">${team.flag || '⚽'}</span>
        <strong>${team.name}</strong>
        <small>${team.code || 'TBD'}</small>
      `;
      container.appendChild(div);
    });
  });
