async function loadTeams() {
  const res = await fetch("data/teams.json");
  const teams = await res.json();
  const teamA = document.getElementById("teamA");
  const teamB = document.getElementById("teamB");

  teamA.innerHTML = '<option value="" disabled selected>Select home team</option>';
  teamB.innerHTML = '<option value="" disabled selected>Select away team</option>';

  teams.forEach(t => {
    teamA.add(new Option(t.name, t.name));
    teamB.add(new Option(t.name, t.name));
  });
}

document.getElementById("predictForm").addEventListener("submit", e => {
  e.preventDefault();
  const teamA = document.getElementById("teamA").value;
  const teamB = document.getElementById("teamB").value;
  const result = document.getElementById("result");

  if (!teamA || !teamB) {
    result.innerHTML = '<strong>Please select two teams.</strong>Choose a home side and an away side to generate the forecast.';
    return;
  }

  const probA = 45 + Math.floor(Math.random() * 36);
  const probB = 100 - probA;

  result.innerHTML = `
    <strong>${teamA} vs ${teamB}</strong>
    <span class="forecast-pill">${teamA}: ${probA}% chance of winning</span>
    <span class="forecast-pill">${teamB}: ${probB}% chance of winning</span>
    <span class="forecast-pill">Confidence: ${probA >= 55 ? 'High' : 'Balanced'} match outlook</span>
  `;
});

loadTeams();