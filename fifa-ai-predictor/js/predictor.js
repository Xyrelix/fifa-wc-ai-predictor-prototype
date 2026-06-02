async function loadTeams() {
  const res = await fetch("data/teams.json");
  const teams = await res.json();
  const teamA = document.getElementById("teamA");
  const teamB = document.getElementById("teamB");
  teams.forEach(t => {
    let optA = new Option(t.name, t.name);
    let optB = new Option(t.name, t.name);
    teamA.add(optA);
    teamB.add(optB);
  });
}

document.getElementById("predictForm").addEventListener("submit", e => {
  e.preventDefault();
  const teamA = document.getElementById("teamA").value;
  const teamB = document.getElementById("teamB").value;
  const result = document.getElementById("result");
  // Mock prediction
  const probA = Math.floor(Math.random() * 100);
  const probB = 100 - probA;
  result.textContent = `${teamA}: ${probA}% vs ${teamB}: ${probB}%`;
});

loadTeams();